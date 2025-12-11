// Unified cart functionality for both store and orders
let cart = [];
let isCartOpen = false;

const CART_STORAGE_KEY = 'back-home-brew-cart';

// Helper function to convert BTC to sats
function btcToSats(btcAmount) {
    return Math.round(btcAmount * 100000000).toLocaleString();
}

function persistCart() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.warn('Unable to persist cart', error);
    }
}

function restoreCartFromStorage() {
    try {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (storedCart) {
            const parsed = JSON.parse(storedCart);
            if (Array.isArray(parsed)) {
                cart = parsed.map(item => ({
                    ...item,
                    btcPrice: Number(item.btcPrice),
                    usdPrice: Number(item.usdPrice)
                }));
            }
        }
    } catch (error) {
        console.warn('Unable to restore cart', error);
    }
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
    persistCart();
    
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
    if (!productCard) {
        alert('Unable to find the selected product.');
        return;
    }

    const sizeSelect = productCard.querySelector('.size-select');
    const colorSelect = productCard.querySelector('.color-select');
    const optionSelects = productCard.querySelectorAll('[data-option-label]');
    
    let selectedOption = '';
    let adjustedBtcPrice = btcPrice;
    let adjustedUsdPrice = usdPrice;
    let validationMessage = '';
    
    if (sizeSelect) {
        if (!sizeSelect.value) {
            validationMessage = 'Please select a size';
        } else {
            selectedOption = `Size: ${sizeSelect.value}`;
        }
    }
    
    if (!validationMessage && colorSelect) {
        if (!colorSelect.value) {
            validationMessage = 'Please select a color';
        } else {
            selectedOption = selectedOption ? `${selectedOption}, Color: ${colorSelect.value}` : `Color: ${colorSelect.value}`;
        }
    }

    if (!validationMessage && optionSelects.length > 0) {
        optionSelects.forEach(select => {
            if (validationMessage) return;
            const required = select.dataset.required === 'true';
            const label = select.dataset.optionLabel || 'Option';
            const selectedValue = select.value;
            const selectedText = select.options[select.selectedIndex]?.text || '';
            
            if (required && !selectedValue) {
                validationMessage = `Please select a ${label.toLowerCase()}`;
                return;
            }

            if (selectedValue) {
                selectedOption = selectedOption ? `${selectedOption}, ${label}: ${selectedText}` : `${label}: ${selectedText}`;
                const optionBtc = parseFloat(select.options[select.selectedIndex].dataset.btc);
                const optionUsd = parseFloat(select.options[select.selectedIndex].dataset.usd);
                if (!Number.isNaN(optionBtc) && !Number.isNaN(optionUsd)) {
                    adjustedBtcPrice = optionBtc;
                    adjustedUsdPrice = optionUsd;
                }
            }
        });
    }

    if (validationMessage) {
        alert(validationMessage);
        return;
    }
    
    // Create cart item
    const cartItem = {
        id: Date.now(), // Simple ID generation
        productId: productId,
        name: productName,
        btcPrice: adjustedBtcPrice,
        usdPrice: adjustedUsdPrice,
        options: selectedOption,
        quantity: 1,
        type: 'merchandise' // Mark as store merchandise
    };
    
    // Add to cart
    cart.push(cartItem);
    persistCart();
    
    // Update UI
    updateCartUI();
    updateCartCount();
    
    // Show success message
    showAddToCartMessage(productName);
    
    // Reset selections
    if (sizeSelect) sizeSelect.value = '';
    if (colorSelect) colorSelect.value = '';
    optionSelects.forEach(select => {
        select.value = '';
    });
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    persistCart();
    updateCartUI();
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const mobileCartCount = document.getElementById('mobile-cart-count');
    cartCount.textContent = cart.length;
    if (mobileCartCount) {
        mobileCartCount.textContent = cart.length;
    }
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
                    <div class="cart-item-details">${item.options || 'No options selected'}</div>
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
    
    const checkoutButton = document.querySelector('.checkout-btn');
    const originalLabel = checkoutButton ? checkoutButton.textContent : '';
    if (checkoutButton) {
        checkoutButton.textContent = 'Generating invoice...';
        checkoutButton.disabled = true;
    }

    persistCart();

    fetch('/api/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cart,
            returnUrl: window.location.href
        })
    })
    .then(async response => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
            throw new Error(data.error || 'Unable to create invoice right now.');
        }
        if (data.checkoutLink) {
            const expires = data.expiresAt ? new Date(data.expiresAt) : null;
            if (expires) {
                showAddToCartMessage(`Invoice ready. Expires at ${expires.toLocaleTimeString()}`);
            }
            window.location.href = data.checkoutLink;
            return;
        }
        throw new Error('Invoice link missing from BTCPay response.');
    })
    .catch(error => {
        console.error('Checkout error:', error);
        alert('Unable to start Bitcoin checkout right now. Please try again or contact us.');
    })
    .finally(() => {
        if (checkoutButton) {
            checkoutButton.textContent = originalLabel || 'Checkout with Bitcoin';
            checkoutButton.disabled = false;
        }
    });
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
    restoreCartFromStorage();
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