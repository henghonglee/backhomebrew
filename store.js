// Unified cart functionality for store and order pages.
let cart = [];
let isCartOpen = false;

const BITCOIN_ADDRESS = 'bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5';

function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[char]);
}

function formatBtc(amount) {
    return Number(amount).toFixed(8);
}

function getCartFooter() {
    return document.getElementById('cart-footer');
}

function isShopPage() {
    return document.body.classList.contains('shop');
}

function isOrderPage() {
    return document.body.classList.contains('order');
}

function showToast(message, options = {}) {
    const type = options.type || 'info';
    let toastContainer = document.getElementById('toast-container');

    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    const removeToast = () => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
            if (toastContainer.children.length === 0) {
                toastContainer.remove();
            }
        }, 300);
    };

    const autoRemoveTimeout = setTimeout(removeToast, 4000);
    toast.addEventListener('click', () => {
        clearTimeout(autoRemoveTimeout);
        removeToast();
    });
}

function btcToSats(btcAmount) {
    return Math.round(btcAmount * 100000000).toLocaleString();
}

function addToOrder(productId, productName, btcPrice, usdPrice, triggerElement) {
    const trigger = triggerElement || window.event?.target || document.querySelector(`button[onclick*="addToOrder('${productId}'"]`);
    const productCard = trigger?.closest('.coffee-card');
    if (!productCard) return;

    const sizeSelect = productCard.querySelector('.size-select');
    const milkSelect = productCard.querySelector('.milk-select');
    const pastrySelect = productCard.querySelector('.pastry-select');
    let selectedOptions = [];
    let adjustedBtcPrice = btcPrice;
    let adjustedUsdPrice = usdPrice;

    if (sizeSelect && sizeSelect.value) {
        selectedOptions.push(`Size: ${sizeSelect.options[sizeSelect.selectedIndex].text}`);
    }

    if (milkSelect && milkSelect.value) {
        const selectedMilk = milkSelect.options[milkSelect.selectedIndex].text;
        selectedOptions.push(`Milk: ${selectedMilk}`);

        if (milkSelect.value === 'oat') {
            adjustedBtcPrice += 0.000016;
            adjustedUsdPrice += 0.50;
        }
    }

    if (pastrySelect && pastrySelect.value) {
        const selectedPastry = pastrySelect.options[pastrySelect.selectedIndex].text;
        selectedOptions.push(`Type: ${selectedPastry}`);

        if (pastrySelect.value === 'muffin') {
            adjustedBtcPrice = 0.00010;
            adjustedUsdPrice = 3.00;
        } else if (pastrySelect.value === 'scone') {
            adjustedBtcPrice = 0.00013;
            adjustedUsdPrice = 4.00;
        }
    }

    if (sizeSelect && !sizeSelect.value) {
        showToast('Please select a size', { type: 'error' });
        return;
    }

    if (pastrySelect && !pastrySelect.value) {
        showToast('Please select a pastry type', { type: 'error' });
        return;
    }

    cart.push({
        id: Date.now(),
        productId,
        name: productName,
        btcPrice: adjustedBtcPrice,
        usdPrice: adjustedUsdPrice,
        options: selectedOptions.join(', '),
        quantity: 1,
        type: 'coffee'
    });

    updateCartUI();
    updateCartCount();
    showAddToCartMessage(productName);

    if (sizeSelect) sizeSelect.selectedIndex = 0;
    if (milkSelect) milkSelect.selectedIndex = 0;
    if (pastrySelect) pastrySelect.selectedIndex = 0;
}

function addToCart(productId, productName, btcPrice, usdPrice) {
    const productCard = document.querySelector(`[data-product="${productId}"]`);
    if (!productCard) return;

    const sizeSelect = productCard.querySelector('.size-select');
    const colorSelect = productCard.querySelector('.color-select');
    let selectedOption = '';

    if (sizeSelect) {
        if (!sizeSelect.value) {
            showToast('Please select a size', { type: 'error' });
            return;
        }
        selectedOption = `Size: ${sizeSelect.value}`;
    }

    if (colorSelect) {
        if (!colorSelect.value) {
            const optionLabel = productCard.querySelector('.product-options span')?.textContent.toLowerCase() || 'option';
            showToast(`Please select a ${optionLabel}`, { type: 'error' });
            return;
        }
        const label = productCard.querySelector('.product-options span')?.textContent || 'Color';
        selectedOption = selectedOption ? `${selectedOption}, ${label}: ${colorSelect.value}` : `${label}: ${colorSelect.value}`;
    }

    cart.push({
        id: Date.now(),
        productId,
        name: productName,
        btcPrice,
        usdPrice,
        options: selectedOption,
        quantity: 1,
        type: 'merchandise'
    });

    updateCartUI();
    updateCartCount();
    showAddToCartMessage(productName);

    if (sizeSelect) sizeSelect.value = '';
    if (colorSelect) colorSelect.value = '';
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
    updateCartCount();
}

function changeQuantity(itemId, delta) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(itemId);
        return;
    }

    updateCartUI();
    updateCartCount();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cart-count');
    const mobileCartCount = document.getElementById('mobile-cart-count');
    const orderCartCount = document.getElementById('order-cart-count');

    if (cartCount) cartCount.textContent = totalItems;
    if (mobileCartCount) mobileCartCount.textContent = totalItems;
    if (orderCartCount) orderCartCount.textContent = totalItems;
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartFooter = getCartFooter();
    const cartTitle = document.getElementById('cart-title');

    if (!cartItems || !cartFooter) return;

    if (cart.length === 0) {
        cartItems.innerHTML = isShopPage()
            ? '<div class="cart-empty">No goods yet.<br>The catalog awaits.</div>'
            : isOrderPage()
                ? '<div class="cart-empty">No cups yet — pick something from the list and we&#39;ll start a tab.</div>'
                : '<p class="empty-cart">Your cart is empty</p>';

        if (cartTitle) cartTitle.textContent = 'Empty';
        cartFooter.hidden = true;
        cartFooter.style.display = 'none';
        return;
    }

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalBTC = cart.reduce((sum, item) => sum + item.btcPrice * item.quantity, 0);
    const totalUSD = cart.reduce((sum, item) => sum + item.usdPrice * item.quantity, 0);

    if (cartTitle) cartTitle.textContent = `${totalItems} item${totalItems === 1 ? '' : 's'}`;

    cartItems.innerHTML = cart.map(item => {
        if (isShopPage()) return renderShopCartLine(item);
        if (isOrderPage()) return renderOrderCartLine(item);
        return renderLegacyCartItem(item);
    }).join('');

    const subBtc = document.getElementById('sub-btc');
    const subFiat = document.getElementById('sub-fiat');
    const totalBtc = document.getElementById('total-btc');
    const totalUsd = document.getElementById('total-usd');

    if (subBtc) subBtc.textContent = formatBtc(totalBTC);
    if (subFiat) subFiat.textContent = `$${totalUSD.toFixed(2)}`;
    if (totalBtc) totalBtc.textContent = isOrderPage() ? `${formatBtc(totalBTC)} ฿` : totalBTC.toFixed(4);
    if (totalUsd) totalUsd.textContent = totalUSD.toFixed(2);

    cartFooter.hidden = false;
    cartFooter.style.display = isShopPage() ? 'block' : 'block';
}

function renderOrderCartLine(item) {
    const safeName = escapeHtml(item.name);
    const safeOptions = escapeHtml(item.options || 'House selection');
    const lineBtc = item.btcPrice * item.quantity;

    return `
        <div class="cart-line">
            <div class="cart-line-main">
                <div class="cart-line-name">${safeName}</div>
                <div class="cart-line-price">${formatBtc(lineBtc)} ฿</div>
            </div>
            <div class="cart-line-opt">${safeOptions} · ×${item.quantity}</div>
            <div class="cart-line-actions">
                <div class="cart-line-qty" aria-label="Quantity for ${safeName}">
                    <button onclick="changeQuantity(${item.id}, -1)" aria-label="Decrease quantity">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
                </div>
                <button class="cart-line-remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `;
}

function renderShopCartLine(item) {
    const safeName = escapeHtml(item.name);
    const safeOptions = escapeHtml(item.options || 'House selection');
    const initial = escapeHtml(item.productId || safeName.charAt(0)).slice(0, 2).toUpperCase();
    const lineBtc = item.btcPrice * item.quantity;
    const lineUsd = item.usdPrice * item.quantity;

    return `
        <div class="cart-line">
            <div class="cart-line-thumb" aria-hidden="true">${initial}</div>
            <div>
                <div class="cart-line-name">${safeName}</div>
                <div class="cart-line-opt">${safeOptions}</div>
                <div class="cart-line-actions">
                    <div class="cart-line-qty" aria-label="Quantity for ${safeName}">
                        <button onclick="changeQuantity(${item.id}, -1)" aria-label="Decrease quantity">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
                    </div>
                    <div class="cart-line-price">${formatBtc(lineBtc)} BTC · ≈ $${lineUsd.toFixed(2)}</div>
                    <button class="cart-line-remove" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `;
}

function renderLegacyCartItem(item) {
    const itemTotalBtc = item.btcPrice * item.quantity;
    const itemTotalUsd = item.usdPrice * item.quantity;

    return `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${escapeHtml(item.name)}</h4>
                <div class="cart-item-details">${escapeHtml(item.options || '')}</div>
                <div class="cart-item-price">
                    <span class="btc-price">${itemTotalBtc.toFixed(4)} BTC</span>
                    <span class="sats-price">${btcToSats(itemTotalBtc)} sats</span>
                    <span class="usd-price">≈ $${itemTotalUsd.toFixed(2)}</span>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `;
}

function toggleCart(forceOpen) {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    if (!cartSidebar || !cartOverlay) return;

    isCartOpen = typeof forceOpen === 'boolean' ? forceOpen : !isCartOpen;

    cartSidebar.classList.toggle('open', isCartOpen);
    cartOverlay.classList.toggle('open', isCartOpen);
    document.body.style.overflow = isCartOpen ? 'hidden' : 'auto';
}

function showAddToCartMessage(productName) {
    showToast(`${productName} added to cart`, { type: 'success' });
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty', { type: 'error' });
        return;
    }

    const totalBTC = cart.reduce((sum, item) => sum + item.btcPrice * item.quantity, 0);
    const totalUSD = cart.reduce((sum, item) => sum + item.usdPrice * item.quantity, 0);
    let orderSummary = 'Back Home Brew Order Summary:\n\n';

    cart.forEach(item => {
        orderSummary += `${item.name}\n`;
        orderSummary += `${item.options}\n`;
        orderSummary += `Qty: ${item.quantity}\n`;
        orderSummary += `${formatBtc(item.btcPrice * item.quantity)} BTC (≈ $${(item.usdPrice * item.quantity).toFixed(2)})\n\n`;
    });

    orderSummary += `Total: ${formatBtc(totalBTC)} BTC (≈ $${totalUSD.toFixed(2)})\n\n`;
    orderSummary += 'Bitcoin Payment Address:\n';
    orderSummary += `${BITCOIN_ADDRESS}\n\n`;
    orderSummary += 'Please send the exact BTC amount to complete your order.\n';
    orderSummary += 'Email us at orders@backhomebrew.com with your transaction ID.';

    showCheckoutModal(orderSummary, totalBTC, totalUSD);
}

function showCheckoutModal(orderSummary, totalBTC, totalUSD) {
    if (isOrderPage()) {
        showOrderCheckoutSheet(orderSummary, totalBTC, totalUSD);
        return;
    }

    if (isShopPage()) {
        showShopCheckoutModal(orderSummary, totalBTC, totalUSD);
        return;
    }

    showLegacyCheckoutModal(orderSummary, totalBTC, totalUSD);
}

function showOrderCheckoutSheet(orderSummary, totalBTC, totalUSD) {
    const modal = document.createElement('div');
    modal.className = 'checkout-modal';
    modal.innerHTML = `
        <div class="checkout-sheet" role="dialog" aria-modal="true" aria-labelledby="order-checkout-title" data-decision="4">
            <div class="checkout-head">
                <span class="eyebrow">— CHECKOUT · NO. 04</span>
                <button class="checkout-close" type="button" onclick="closeCheckoutModal({ preserveCart: true })">Close ×</button>
            </div>
            <div class="checkout-body">
                <div class="checkout-pay">
                    <h2 id="order-checkout-title">Pay in <em>bitcoin</em>.</h2>
                    <p>Send the exact total to the address below. Reply with the txid to <a href="mailto:orders@backhomebrew.com">orders@backhomebrew.com</a> — we'll start brewing as soon as it confirms.</p>
                    <span class="field-label">Address</span>
                    <div class="address-block" id="btc-address">${BITCOIN_ADDRESS}</div>
                    <div class="actions">
                        <button class="btn btn-primary" type="button" onclick="copyBitcoinAddress()">Copy address</button>
                        <a href="bitcoin:${BITCOIN_ADDRESS}?amount=${formatBtc(totalBTC)}" class="btn btn-ghost">Open in wallet</a>
                    </div>
                </div>
                <div class="checkout-summary">
                    <span class="eyebrow">Order summary</span>
                    <div class="summary-grid">
                        ${cart.map(item => `
                            <div class="summary-row">
                                <div>
                                    <strong>${escapeHtml(item.name)}</strong>
                                    <span>${escapeHtml(item.options || 'House selection')} · ×${item.quantity}</span>
                                </div>
                                <div class="amount">${formatBtc(item.btcPrice * item.quantity)} ฿</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="summary-total">
                        <span class="label">Total</span>
                        <span class="val">${formatBtc(totalBTC)} ฿</span>
                    </div>
                    <div class="summary-foot">Pickup · 22 Tanjong Pagar Lane · ready in ~20 min after confirm</div>
                </div>
            </div>
        </div>
    `;
                                <strong>${escapeHtml(item.name)}</strong>
                                <span>${escapeHtml(item.options || 'House selection')} · ×${item.quantity}</span>
                            </div>
                            <div>${formatBtc(item.btcPrice * item.quantity)} ฿</div>
                        `).join('')}
                    </div>
                    <div class="summary-total">
                        <span class="label">Total</span>
                        <span class="val">${formatBtc(totalBTC)} ฿</span>
                    </div>
                    <div class="summary-foot">Pickup · 22 Tanjong Pagar Lane · ready in ~20 min after confirm</div>
                </div>
            </div>
        </div>
    `;

    modal.addEventListener('click', event => {
        if (event.target === modal) {
            closeCheckoutModal({ preserveCart: true });
        }
    });

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    window.currentModal = modal;
    window.currentOrderSummary = orderSummary;
}

function showShopCheckoutModal(orderSummary, totalBTC, totalUSD) {
    const modal = document.createElement('div');
    modal.className = 'checkout-modal';
    modal.innerHTML = `
        <div class="checkout-modal-panel" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
            <h2 id="checkout-title">Bitcoin Checkout</h2>
            <div class="checkout-total">
                <div>
                    <span>Total · BTC</span>
                    <strong>${formatBtc(totalBTC)}</strong>
                </div>
                <div>
                    <span>Reference · USD</span>
                    <strong>$${totalUSD.toFixed(2)}</strong>
                </div>
            </div>
            <div class="checkout-address">${BITCOIN_ADDRESS}</div>
            <div class="checkout-summary">
                <h3>Order Summary</h3>
                ${cart.map(item => `
                    <div class="checkout-summary-item">
                        <strong>${escapeHtml(item.name)}</strong><br>
                        ${escapeHtml(item.options || 'House selection')} · Qty ${item.quantity}<br>
                        <span>${formatBtc(item.btcPrice * item.quantity)} BTC</span><br>
                        <span>≈ $${(item.usdPrice * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="checkout-note">
                <strong>Important:</strong> Send the exact BTC amount to the address above.
                After payment, email us at <strong>orders@backhomebrew.com</strong> with your transaction ID to complete the order.
            </div>
            <div class="checkout-actions">
                <button class="btn btn-primary" onclick="copyBitcoinAddress()">Copy Address</button>
                <button class="btn btn-ghost" onclick="closeCheckoutModal()">Close</button>
            </div>
        </div>
    `;

    modal.addEventListener('click', event => {
        if (event.target === modal) {
            closeCheckoutModal();
        }
    });

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    window.currentModal = modal;
    window.currentOrderSummary = orderSummary;
}

function showLegacyCheckoutModal(orderSummary, totalBTC, totalUSD) {
    const modal = document.createElement('div');
    modal.className = 'checkout-modal';
    modal.innerHTML = `
        <div class="checkout-modal-panel" role="dialog" aria-modal="true" aria-labelledby="legacy-checkout-title">
            <h2 id="legacy-checkout-title">Bitcoin Checkout</h2>
            <div class="checkout-total">
                <strong>${formatBtc(totalBTC)} BTC</strong>
                <span>≈ $${totalUSD.toFixed(2)} USD</span>
            </div>
            <div class="checkout-address">${BITCOIN_ADDRESS}</div>
            <pre>${escapeHtml(orderSummary)}</pre>
            <div class="checkout-actions">
                <button class="btn btn-primary" onclick="copyBitcoinAddress()">Copy Address</button>
                <button class="btn btn-secondary" onclick="closeCheckoutModal()">Close</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    window.currentModal = modal;
}

function copyBitcoinAddress() {
    const fallbackCopy = () => {
        const textArea = document.createElement('textarea');
        textArea.value = BITCOIN_ADDRESS;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        showToast('Bitcoin address copied to clipboard', { type: 'success' });
    };

    if (!navigator.clipboard) {
        fallbackCopy();
        return;
    }

    navigator.clipboard.writeText(BITCOIN_ADDRESS)
        .then(() => showToast('Bitcoin address copied to clipboard', { type: 'success' }))
        .catch(fallbackCopy);
}

function closeCheckoutModal(options = {}) {
    if (window.currentModal) {
        window.currentModal.remove();
        window.currentModal = null;
        window.currentOrderSummary = null;
    }

    if (!options.preserveCart) {
        cart = [];
        updateCartUI();
        updateCartCount();
        toggleCart(false);
    } else if (!isCartOpen) {
        document.body.style.overflow = 'auto';
    }
}

let orderSheetState = {
    card: null,
    quantity: 1,
    price: 0,
    usdPrice: 0,
    isPastry: false
};

function getActiveOption(groupName) {
    const activeChip = document.querySelector(`.order-sheet .opt-row[data-group="${groupName}"] .opt-chip.active`);
    return activeChip ? activeChip.dataset.value : '';
}

function updateOrderSheetAmount() {
    const quantityValue = document.getElementById('qty-val');
    const addAmount = document.getElementById('add-amount');
    const total = orderSheetState.price * orderSheetState.quantity;

    if (quantityValue) quantityValue.textContent = orderSheetState.quantity;
    if (addAmount) addAmount.textContent = `${formatBtc(total)} ฿`;
}

function setOptionGroupVisibility(isPastry) {
    const sizeGroup = document.getElementById('opt-size-group');
    const milkGroup = document.getElementById('opt-milk-group');
    const pastryGroup = document.getElementById('opt-pastry-group');

    if (sizeGroup) sizeGroup.hidden = isPastry;
    if (milkGroup) milkGroup.hidden = isPastry;
    if (pastryGroup) pastryGroup.hidden = !isPastry;
}

function resetOrderSheetOptions() {
    document.querySelectorAll('.order-sheet .opt-row').forEach(row => {
        row.querySelectorAll('.opt-chip').forEach((chip, index) => {
            chip.classList.toggle('active', index === 0);
        });
    });
}

function openOrderSheet(card) {
    const sheet = document.getElementById('order-sheet');
    const scrim = document.getElementById('order-scrim');
    if (!sheet || !scrim) return;

    const eyebrow = document.getElementById('sheet-eyebrow');
    const title = document.getElementById('sheet-title');
    const description = document.getElementById('sheet-desc');
    const isPastry = card.dataset.pastry === '1';

    orderSheetState = {
        card,
        quantity: 1,
        price: Number(card.dataset.price || 0),
        usdPrice: Number(card.dataset.usd || 0),
        isPastry
    };

    if (eyebrow) eyebrow.textContent = `${card.dataset.num} · ${card.dataset.category}`;
    if (title) title.innerHTML = card.dataset.title || escapeHtml(card.dataset.name);
    if (description) description.textContent = card.dataset.description || '';

    resetOrderSheetOptions();
    setOptionGroupVisibility(isPastry);
    updateOrderSheetAmount();

    sheet.classList.add('open');
    scrim.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeOrderSheet() {
    const sheet = document.getElementById('order-sheet');
    const scrim = document.getElementById('order-scrim');
    if (!sheet || !scrim) return;

    sheet.classList.remove('open');
    scrim.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    orderSheetState.card = null;
    if (!isCartOpen && !window.currentModal) {
        document.body.style.overflow = 'auto';
    }
}

function addConfiguredOrderItem() {
    const card = orderSheetState.card;
    if (!card) return;

    const options = orderSheetState.isPastry
        ? [`Variant: ${getActiveOption('pastry')}`]
        : [`Size: ${getActiveOption('size')}`, `Milk: ${getActiveOption('milk')}`];

    cart.push({
        id: Date.now(),
        productId: card.dataset.product,
        name: card.dataset.name,
        btcPrice: orderSheetState.price,
        usdPrice: orderSheetState.usdPrice,
        options: options.join(', '),
        quantity: orderSheetState.quantity,
        type: orderSheetState.isPastry ? 'pastry' : 'coffee'
    });

    updateCartUI();
    updateCartCount();
    showAddToCartMessage(card.dataset.name);
    closeOrderSheet();
}

function initOrderSheet() {
    if (!isOrderPage()) return;

    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('click', () => openOrderSheet(card));
        card.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openOrderSheet(card);
            }
        });
    });

    document.querySelectorAll('.order-sheet .opt-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const row = chip.closest('.opt-row');
            if (!row) return;

            row.querySelectorAll('.opt-chip').forEach(rowChip => {
                rowChip.classList.toggle('active', rowChip === chip);
            });
        });
    });

    document.querySelectorAll('.order-sheet .qty-btn').forEach(button => {
        button.addEventListener('click', () => {
            const delta = Number(button.dataset.delta || 0);
            orderSheetState.quantity = Math.max(1, orderSheetState.quantity + delta);
            updateOrderSheetAmount();
        });
    });

    document.querySelector('.order-sheet .sheet-close')?.addEventListener('click', closeOrderSheet);
    document.getElementById('order-scrim')?.addEventListener('click', closeOrderSheet);
    document.getElementById('add-sheet')?.addEventListener('click', addConfiguredOrderItem);

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            if (document.getElementById('order-sheet')?.classList.contains('open')) {
                closeOrderSheet();
                return;
            }

            if (window.currentModal) {
                closeCheckoutModal({ preserveCart: isOrderPage() });
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateCartUI();
    initOrderSheet();

    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});

function toggleOrderCart() {
    return toggleCart();
}

function updateOrderCartCount() {
    return updateCartCount();
}

function updateOrderCartUI() {
    return updateCartUI();
}

function orderCheckout() {
    return checkout();
}

function showCategory(categoryId) {
    document.querySelectorAll('.menu-category').forEach(cat => {
        cat.classList.remove('active');
    });

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const category = document.getElementById(categoryId);
    if (category) {
        category.classList.add('active');
    }

    const trigger = window.event?.target;
    if (trigger?.classList?.contains('category-btn')) {
        trigger.classList.add('active');
        return;
    }

    const fallbackButton = document.querySelector(`.category-btn[onclick*="'${categoryId}'"]`);
    if (fallbackButton) {
        fallbackButton.classList.add('active');
    }
}

document.addEventListener('click', function(event) {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartIcons = Array.from(document.querySelectorAll('.cart-icon'));
    const checkoutModal = document.querySelector('.checkout-modal');

    if (!cartSidebar || checkoutModal) return;

    const clickedCartTrigger = cartIcons.some(cartIcon => cartIcon.contains(event.target));
    if (isCartOpen && !cartSidebar.contains(event.target) && !clickedCartTrigger) {
        toggleCart(false);
    }
});
