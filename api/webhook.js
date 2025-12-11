const crypto = require('crypto');

const WEBHOOK_SECRET = process.env.BTCPAY_WEBHOOK_SECRET;

function isValidSignature(req, rawBody) {
    const signatureHeader = req.headers['btcpay-sig'] || req.headers['Btcpay-Sig'];
    if (!signatureHeader || !WEBHOOK_SECRET) {
        return false;
    }

    const expected = 'sha256=' + crypto.createHmac('sha256', WEBHOOK_SECRET).update(rawBody).digest('hex');
    try {
        return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signatureHeader));
    } catch (error) {
        return false;
    }
}

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!WEBHOOK_SECRET) {
        return res.status(500).json({ error: 'Webhook secret not configured.' });
    }

    const rawBody = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {});

    if (!isValidSignature(req, rawBody)) {
        return res.status(400).json({ error: 'Invalid BTCPay webhook signature.' });
    }

    let event = {};
    try {
        event = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    } catch (error) {
        console.error('Unable to parse webhook payload', error);
    }

    // Handle key events; extend with order fulfillment logic when ready.
    if (event.type === 'InvoiceSettled' || event.event === 'InvoiceSettled') {
        const invoiceId = event.invoiceId || event.data?.id || 'unknown';
        console.log(`Invoice settled: ${invoiceId}`);
    }

    return res.status(200).json({ received: true });
};
