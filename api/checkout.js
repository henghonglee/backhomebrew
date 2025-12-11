const BTCPAY_HOST = (process.env.BTCPAY_HOST || '').replace(/\/$/, '');
const BTCPAY_STORE_ID = process.env.BTCPAY_STORE_ID;
const BTCPAY_API_KEY = process.env.BTCPAY_API_KEY;

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!BTCPAY_HOST || !BTCPAY_STORE_ID || !BTCPAY_API_KEY) {
        return res.status(500).json({ error: 'BTCPay environment is not configured server-side.' });
    }

    const body = req.body || {};
    const cart = Array.isArray(body.cart) ? body.cart : [];
    const returnUrl = body.returnUrl || '';

    if (cart.length === 0) {
        return res.status(400).json({ error: 'Cart is empty.' });
    }

    const totalBTC = cart.reduce((sum, item) => sum + Number(item.btcPrice || 0), 0);
    const totalUSD = cart.reduce((sum, item) => sum + Number(item.usdPrice || 0), 0);
    const orderId = `bhb-${Date.now()}`;

    const payload = {
        amount: Number(totalBTC.toFixed(8)),
        currency: 'BTC',
        metadata: {
            orderId,
            items: cart,
            totalUSD,
            returnUrl
        },
        checkout: {
            speedPolicy: 'HighSpeed',
            redirectURL: returnUrl,
            defaultPaymentMethod: 'BTC'
        }
    };

    try {
        const response = await fetch(`${BTCPAY_HOST}/api/v1/stores/${BTCPAY_STORE_ID}/invoices`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${BTCPAY_API_KEY}`
            },
            body: JSON.stringify(payload)
        });

        const invoice = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: invoice.message || 'Unable to create BTCPay invoice.' });
        }

        return res.status(200).json({
            invoiceId: invoice.id,
            checkoutLink: invoice.checkoutLink,
            expiresAt: invoice.expirationTime || invoice.expiresAt,
            orderId
        });
    } catch (error) {
        console.error('BTCPay invoice creation failed', error);
        return res.status(500).json({ error: 'Failed to create BTCPay invoice.' });
    }
};
