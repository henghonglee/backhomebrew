// Unified cart functionality for both store and orders
let cart = [];
let isCartOpen = false;

// Bitcoin to USD rate (you would typically fetch this from an API)
const BTC_TO_USD_RATE = 31250; // Example rate

// Cart persistence functions
function saveCartToStorage() {
    localStorage.setItem('backhomebrew-cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    try {
        cart = JSON.parse(localStorage.getItem('backhomebrew-cart')) || [];
    } catch {
        cart = [];
    }
}

// Helper function to convert BTC to sats
function btcToSats(btcAmount) {
    return Math.round(btcAmount * 100000000).toLocaleString();
}

// Function to add coffee orders to the unified cart
function addToOrder(productId, productName, btcPrice, usdPrice) {
    const productCard = event.target.closest('.coffee-card');
    const sizeSelect = productCard.querySelector('.size-select');
    const milkSelect = productCard.querySelector('.milk-select');
    const pastrySelect = productCard.querySelector('.pastry-select');
    
    // Get selected options
    let selectedOptions = [];
    let adjustedBtcPrice = btcPrice;
    let adjustedUsdPrice = usdPrice;
    
    if (sizeSelect && sizeSelect.value) {
        selectedOptions.push(`Size: ${sizeSelect.options[sizeSelect.selectedIndex].text}`);
    }
    
    if (milkSelect && milkSelect.value) {
        const selectedMilk = milkSelect.options[milkSelect.selectedIndex].text;
        selectedOptions.push(`Milk: ${selectedMilk}`);
        
        // Add oat milk surcharge
        if (milkSelect.value === 'oat') {
            adjustedBtcPrice += 0.000016; // $0.50 in BTC
            adjustedUsdPrice += 0.50;
        }
    }
    
    if (pastrySelect && pastrySelect.value) {
        const selectedPastry = pastrySelect.options[pastrySelect.selectedIndex].text;
        selectedOptions.push(`Type: ${selectedPastry}`);
        
        // Adjust price based on pastry type
        if (pastrySelect.value === 'muffin') {
            adjustedBtcPrice = 0.00010; // $3.00
            adjustedUsdPrice = 3.00;
        } else if (pastrySelect.value === 'scone') {
            adjustedBtcPrice = 0.00013; // $4.00
            adjustedUsdPrice = 4.00;
        }
    }
    
    // Validate required selections
    if (sizeSelect && !sizeSelect.value) {
        alert('Please select a size');
        return;
    }
    
    if (pastrySelect && !pastrySelect.value) {
        alert('Please select a pastry type');
        return;
    }
    
    // Create order item
    const orderItem = {
        id: Date.now(),
        productId: productId,
        name: productName,
        btcPrice: adjustedBtcPrice,
        usdPrice: adjustedUsdPrice,
        options: selectedOptions.join(', '),
        quantity: 1,
        type: 'coffee' // Mark as coffee order
    };
    
    // Add to unified cart
    cart.push(orderItem);

    // Save to localStorage
    saveCartToStorage();

    // Update UI
    updateCartUI();
    updateCartCount();
    
    // Show success message
    showAddToCartMessage(productName);
    
    // Reset selections
    if (sizeSelect) sizeSelect.selectedIndex = 0;
    if (milkSelect) milkSelect.selectedIndex = 0;
    if (pastrySelect) pastrySelect.selectedIndex = 0;
}

function addToCart(productId, productName, btcPrice, usdPrice) {
    const productCard = document.querySelector(`[data-product="${productId}"]`);
    const sizeSelect = productCard.querySelector('.size-select');
    const colorSelect = productCard.querySelector('.color-select');
    
    // Get selected options
    let selectedOption = '';
    if (sizeSelect) {
        if (!sizeSelect.value) {
            alert('Please select a size');
            return;
        }
        selectedOption = `Size: ${sizeSelect.value}`;
    }
    if (colorSelect) {
        if (!colorSelect.value) {
            alert('Please select a color');
            return;
        }
        selectedOption = selectedOption ? `${selectedOption}, Color: ${colorSelect.value}` : `Color: ${colorSelect.value}`;
    }
    
    // Create cart item
    const cartItem = {
        id: Date.now(), // Simple ID generation
        productId: productId,
        name: productName,
        btcPrice: btcPrice,
        usdPrice: usdPrice,
        options: selectedOption,
        quantity: 1,
        type: 'merchandise' // Mark as store merchandise
    };
    
    // Add to cart
    cart.push(cartItem);

    // Save to localStorage
    saveCartToStorage();

    // Update UI
    updateCartUI();
    updateCartCount();
    
    // Show success message
    showAddToCartMessage(productName);
    
    // Reset selections
    if (sizeSelect) sizeSelect.value = '';
    if (colorSelect) colorSelect.value = '';
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCartToStorage();
    updateCartUI();
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartFooter.style.display = 'none';
        return;
    }
    
    // Show cart items
    cartItems.innerHTML = '';
    let totalBTC = 0;
    let totalUSD = 0;
    
    cart.forEach(item => {
        totalBTC += item.btcPrice;
        totalUSD += item.usdPrice;
        
        const cartItemHTML = `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-details">${item.options}</div>
                    <div class="cart-item-price">
                        <span class="btc-price">${item.btcPrice} BTC</span>
                        <span class="sats-price">${btcToSats(item.btcPrice)} sats</span>
                        <span class="usd-price">≈ $${item.usdPrice.toFixed(2)}</span>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.innerHTML += cartItemHTML;
    });
    
    // Update totals
    document.getElementById('total-btc').textContent = totalBTC.toFixed(4);
    document.getElementById('total-usd').textContent = totalUSD.toFixed(2);
    
    cartFooter.style.display = 'block';
}

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    isCartOpen = !isCartOpen;
    
    if (isCartOpen) {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    } else {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
}

function showAddToCartMessage(productName) {
    // Create and show a temporary success message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    message.textContent = `${productName} added to cart!`;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    
    // Calculate totals
    const totalBTC = cart.reduce((sum, item) => sum + item.btcPrice, 0);
    const totalUSD = cart.reduce((sum, item) => sum + item.usdPrice, 0);
    
    // Create order summary
    let orderSummary = "Back Home Brew Order Summary:\\n\\n";
    cart.forEach(item => {
        orderSummary += `${item.name}\\n`;
        orderSummary += `${item.options}\\n`;
        orderSummary += `${item.btcPrice} BTC (≈ $${item.usdPrice.toFixed(2)})\\n\\n`;
    });
    
    orderSummary += `Total: ${totalBTC.toFixed(4)} BTC (≈ $${totalUSD.toFixed(2)})\\n\\n`;
    orderSummary += "Bitcoin Payment Address:\\n";
    orderSummary += "bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5\\n\\n";
    orderSummary += "Please send the exact BTC amount to complete your order.\\n";
    orderSummary += "Email us at orders@backhomebrew.com with your transaction ID.";
    
    // Show checkout modal
    showCheckoutModal(orderSummary, totalBTC, totalUSD);
}

function showCheckoutModal(orderSummary, totalBTC, totalUSD) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8);
        z-index: 4000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 15px;
        max-width: 500px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        text-align: center;
    `;
    
    modalContent.innerHTML = `
        <h2 style="color: var(--primary-color); margin-bottom: 1rem;">Bitcoin Checkout</h2>
        <div style="background: var(--accent-color); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
            <div style="font-size: 1.5rem; font-weight: bold; color: #f7931a; margin-bottom: 0.5rem;">
                ${totalBTC.toFixed(4)} BTC
            </div>
            <div style="color: var(--text-light);">≈ $${totalUSD.toFixed(2)} USD</div>
        </div>
        
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; font-family: monospace; word-break: break-all;">
            bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5
        </div>
        
        <div style="text-align: left; margin-bottom: 1.5rem; color: var(--text-dark);">
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Order Summary:</h3>
            <div style="font-size: 0.9rem; line-height: 1.6;">
                ${cart.map(item => `
                    <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #eee;">
                        <strong>${item.name}</strong><br>
                        ${item.options}<br>
                        <span style="color: #f7931a;">${item.btcPrice} BTC</span><br>
                        <span style="color: #ff8c00; font-size: 0.9rem;">${btcToSats(item.btcPrice)} sats</span><br>
                        <span style="color: var(--text-light);">≈ $${item.usdPrice.toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem; padding: 1rem; background: #fff3cd; border-radius: 8px; color: #856404; font-size: 0.9rem;">
            <strong>Important:</strong> Send the exact BTC amount to the address above. 
            After payment, email us at <strong>orders@backhomebrew.com</strong> with your transaction ID to complete the order.
        </div>
        
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button onclick="copyBitcoinAddress()" style="padding: 0.8rem 1.5rem; background: #f7931a; color: white; border: none; border-radius: 25px; cursor: pointer; font-weight: 600;">
                Copy Address
            </button>
            <button onclick="closeCheckoutModal()" style="padding: 0.8rem 1.5rem; background: var(--text-light); color: white; border: none; border-radius: 25px; cursor: pointer; font-weight: 600;">
                Close
            </button>
        </div>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Store reference for closing
    window.currentModal = modal;
}

function copyBitcoinAddress() {
    const address = 'bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5';
    navigator.clipboard.writeText(address).then(() => {
        alert('Bitcoin address copied to clipboard!');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = address;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Bitcoin address copied to clipboard!');
    });
}

function closeCheckoutModal() {
    if (window.currentModal) {
        window.currentModal.remove();
        document.body.style.overflow = 'auto';

        // Clear cart after showing checkout
        cart = [];
        saveCartToStorage();
        updateCartUI();
        updateCartCount();
        toggleCart(); // Close cart sidebar
    }
}

// Add CSS animation for success message
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    updateCartUI();
    updateCartCount();
});

// Aliases for order page compatibility
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

// Category switching for order page
function showCategory(categoryId) {
    // Hide all categories
    document.querySelectorAll('.menu-category').forEach(cat => {
        cat.classList.remove('active');
    });
    
    // Remove active from all buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected category
    document.getElementById(categoryId).classList.add('active');
    
    // Activate clicked button
    event.target.classList.add('active');
}

// Close cart when clicking outside
document.addEventListener('click', function(event) {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (isCartOpen && !cartSidebar.contains(event.target) && !cartIcon.contains(event.target)) {
        toggleCart();
    }
});

// Prevent cart from closing when clicking inside it
document.addEventListener('DOMContentLoaded', function() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});