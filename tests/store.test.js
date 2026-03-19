/**
 * Core tests for Back Home Brew store functionality.
 * @jest-environment jsdom
 */

// Set up minimal DOM before loading store.js
function setupDOM() {
  document.body.innerHTML = `
    <span id="cart-count">0</span>
    <div id="cart-items"></div>
    <div id="cart-footer" style="display: none;">
      <span id="total-btc">0</span>
      <span id="total-usd">0</span>
    </div>
    <div id="cart-sidebar"></div>
    <div id="cart-overlay"></div>
    <div class="cart-icon"></div>

    <!-- Store product cards -->
    <div data-product="tshirt" class="product-card">
      <select class="size-select"><option value="">Select</option><option value="M">M</option></select>
      <select class="color-select"><option value="">Select</option><option value="Black">Black</option></select>
    </div>
    <div data-product="hoodie" class="product-card">
      <select class="size-select"><option value="">Select</option><option value="L">L</option></select>
      <select class="color-select"><option value="">Select</option><option value="Gray">Gray</option></select>
    </div>

    <!-- Order coffee card with size/milk selects -->
    <div class="coffee-card" id="coffee-latte">
      <select class="size-select"><option value="">Select</option><option value="small">Small</option><option value="large">Large</option></select>
      <select class="milk-select"><option value="">Select</option><option value="whole">Whole Milk</option><option value="oat">Oat Milk</option></select>
    </div>

    <!-- Pastry card -->
    <div class="coffee-card" id="coffee-pastry">
      <select class="pastry-select"><option value="">Select</option><option value="croissant">Croissant</option><option value="muffin">Muffin</option><option value="scone">Scone</option></select>
    </div>
  `;
}

// Load store.js once before all tests, converting let→var so globals can be reset
beforeAll(() => {
  setupDOM();
  const fs = require('fs');
  const storeCode = fs.readFileSync(require('path').join(__dirname, '..', 'store.js'), 'utf8');
  // Replace top-level let declarations with var so they become re-assignable globals
  const patchedCode = storeCode
    .replace(/^let cart/m, 'var cart')
    .replace(/^let isCartOpen/m, 'var isCartOpen');
  // Use indirect eval to run in global scope
  const indirectEval = eval;
  indirectEval(patchedCode);
});

beforeEach(() => {
  setupDOM();
  // Reset mutable state
  cart = [];
  isCartOpen = false;
  window.currentModal = undefined;
});

afterEach(() => {
  document.body.innerHTML = '';
});

// ─── btcToSats ──────────────────────────────────────────────
describe('btcToSats', () => {
  test('converts 1 BTC to 100,000,000 sats', () => {
    expect(btcToSats(1)).toBe('100,000,000');
  });

  test('converts small BTC amount correctly', () => {
    expect(btcToSats(0.00016)).toBe('16,000');
  });

  test('converts 0 BTC to 0 sats', () => {
    expect(btcToSats(0)).toBe('0');
  });

  test('handles fractional sats by rounding', () => {
    // Due to floating point, 0.000000015 * 100000000 = 1.49... → rounds to 1
    expect(btcToSats(0.000000015)).toBe('1');
    // 0.000000025 BTC = 2.5 sats → rounds to 3
    expect(btcToSats(0.000000025)).toBe('3');
  });
});

// ─── Cart Operations ────────────────────────────────────────
describe('addToCart (merchandise)', () => {
  test('adds item to cart when size and color are selected', () => {
    const card = document.querySelector('[data-product="tshirt"]');
    card.querySelector('.size-select').value = 'M';
    card.querySelector('.color-select').value = 'Black';

    addToCart('tshirt', 'T-Shirt', 0.0005, 15.00);

    expect(cart.length).toBe(1);
    expect(cart[0].name).toBe('T-Shirt');
    expect(cart[0].type).toBe('merchandise');
    expect(cart[0].options).toBe('Size: M, Color: Black');
  });

  test('shows error toast when size is not selected', () => {
    const card = document.querySelector('[data-product="tshirt"]');
    card.querySelector('.size-select').value = '';
    card.querySelector('.color-select').value = 'Black';

    addToCart('tshirt', 'T-Shirt', 0.0005, 15.00);

    expect(cart.length).toBe(0);
    // Toast should have been created
    const toast = document.querySelector('#toast-container div');
    expect(toast).not.toBeNull();
  });

  test('shows error toast when color is not selected', () => {
    const card = document.querySelector('[data-product="tshirt"]');
    card.querySelector('.size-select').value = 'M';
    card.querySelector('.color-select').value = '';

    addToCart('tshirt', 'T-Shirt', 0.0005, 15.00);

    expect(cart.length).toBe(0);
  });

  test('updates cart count badge after adding item', () => {
    const card = document.querySelector('[data-product="tshirt"]');
    card.querySelector('.size-select').value = 'M';
    card.querySelector('.color-select').value = 'Black';

    addToCart('tshirt', 'T-Shirt', 0.0005, 15.00);

    expect(document.getElementById('cart-count').textContent).toBe('1');
  });

  test('resets select inputs after adding', () => {
    const card = document.querySelector('[data-product="tshirt"]');
    card.querySelector('.size-select').value = 'M';
    card.querySelector('.color-select').value = 'Black';

    addToCart('tshirt', 'T-Shirt', 0.0005, 15.00);

    expect(card.querySelector('.size-select').value).toBe('');
    expect(card.querySelector('.color-select').value).toBe('');
  });
});

describe('addToOrder (coffee)', () => {
  test('adds coffee to cart with size and milk', () => {
    const card = document.getElementById('coffee-latte');
    card.querySelector('.size-select').value = 'small';
    card.querySelector('.milk-select').value = 'whole';

    // Simulate event context
    const btn = document.createElement('button');
    card.appendChild(btn);
    global.event = { target: { closest: () => card } };

    addToOrder('latte', 'Latte', 0.00016, 5.00);

    expect(cart.length).toBe(1);
    expect(cart[0].type).toBe('coffee');
    expect(cart[0].usdPrice).toBe(5.00);
  });

  test('adds oat milk surcharge', () => {
    const card = document.getElementById('coffee-latte');
    card.querySelector('.size-select').value = 'small';
    card.querySelector('.milk-select').value = 'oat';

    global.event = { target: { closest: () => card } };

    addToOrder('latte', 'Latte', 0.00016, 5.00);

    expect(cart.length).toBe(1);
    expect(cart[0].usdPrice).toBe(5.50);
    expect(cart[0].btcPrice).toBeCloseTo(0.000176, 6);
  });

  test('shows error when size not selected', () => {
    const card = document.getElementById('coffee-latte');
    card.querySelector('.size-select').value = '';
    card.querySelector('.milk-select').value = 'whole';

    global.event = { target: { closest: () => card } };

    addToOrder('latte', 'Latte', 0.00016, 5.00);

    expect(cart.length).toBe(0);
  });

  test('adjusts price for pastry types', () => {
    const card = document.getElementById('coffee-pastry');
    global.event = { target: { closest: () => card } };

    // Muffin: $3.00
    card.querySelector('.pastry-select').value = 'muffin';
    addToOrder('pastry', 'Pastry', 0.00008, 2.50);
    expect(cart[0].usdPrice).toBe(3.00);
    expect(cart[0].btcPrice).toBe(0.00010);

    // Scone: $4.00
    cart = [];
    card.querySelector('.pastry-select').value = 'scone';
    addToOrder('pastry', 'Pastry', 0.00008, 2.50);
    expect(cart[0].usdPrice).toBe(4.00);
    expect(cart[0].btcPrice).toBe(0.00013);
  });
});

describe('removeFromCart', () => {
  test('removes item by id', () => {
    cart.push({ id: 1, name: 'Item 1', btcPrice: 0.001, usdPrice: 10, options: '', quantity: 1 });
    cart.push({ id: 2, name: 'Item 2', btcPrice: 0.002, usdPrice: 20, options: '', quantity: 1 });

    removeFromCart(1);

    expect(cart.length).toBe(1);
    expect(cart[0].id).toBe(2);
  });

  test('does nothing when id not found', () => {
    cart.push({ id: 1, name: 'Item 1', btcPrice: 0.001, usdPrice: 10, options: '', quantity: 1 });

    removeFromCart(999);

    expect(cart.length).toBe(1);
  });

  test('updates cart count after removal', () => {
    cart.push({ id: 1, name: 'Item 1', btcPrice: 0.001, usdPrice: 10, options: '', quantity: 1 });
    cart.push({ id: 2, name: 'Item 2', btcPrice: 0.002, usdPrice: 20, options: '', quantity: 1 });
    updateCartCount();
    expect(document.getElementById('cart-count').textContent).toBe('2');

    removeFromCart(1);
    expect(document.getElementById('cart-count').textContent).toBe('1');
  });
});

// ─── Cart UI ────────────────────────────────────────────────
describe('updateCartUI', () => {
  test('shows empty message when cart is empty', () => {
    cart = [];
    updateCartUI();

    const cartItems = document.getElementById('cart-items');
    expect(cartItems.innerHTML).toContain('Your cart is empty');
    expect(document.getElementById('cart-footer').style.display).toBe('none');
  });

  test('renders items and totals correctly', () => {
    cart = [
      { id: 1, name: 'T-Shirt', btcPrice: 0.0005, usdPrice: 15.00, options: 'Size: M', quantity: 1 },
      { id: 2, name: 'Hoodie', btcPrice: 0.001, usdPrice: 30.00, options: 'Size: L', quantity: 1 },
    ];
    updateCartUI();

    expect(document.getElementById('cart-items').innerHTML).toContain('T-Shirt');
    expect(document.getElementById('cart-items').innerHTML).toContain('Hoodie');
    expect(document.getElementById('total-btc').textContent).toBe('0.0015');
    expect(document.getElementById('total-usd').textContent).toBe('45.00');
    expect(document.getElementById('cart-footer').style.display).toBe('block');
  });
});

// ─── Toggle Cart ────────────────────────────────────────────
describe('toggleCart', () => {
  test('opens cart sidebar', () => {
    isCartOpen = false;
    toggleCart();

    expect(isCartOpen).toBe(true);
    expect(document.getElementById('cart-sidebar').classList.contains('open')).toBe(true);
    expect(document.getElementById('cart-overlay').classList.contains('open')).toBe(true);
    expect(document.body.style.overflow).toBe('hidden');
  });

  test('closes cart sidebar', () => {
    isCartOpen = true;
    document.getElementById('cart-sidebar').classList.add('open');
    document.getElementById('cart-overlay').classList.add('open');

    toggleCart();

    expect(isCartOpen).toBe(false);
    expect(document.getElementById('cart-sidebar').classList.contains('open')).toBe(false);
    expect(document.body.style.overflow).toBe('auto');
  });
});

// ─── Checkout ───────────────────────────────────────────────
describe('checkout', () => {
  test('shows error toast when cart is empty', () => {
    cart = [];
    checkout();

    const toast = document.querySelector('#toast-container div');
    expect(toast).not.toBeNull();
    expect(toast.textContent).toContain('empty');
  });

  test('creates checkout modal when cart has items', () => {
    cart = [
      { id: 1, name: 'Latte', btcPrice: 0.00016, usdPrice: 5.00, options: 'Size: Small', quantity: 1 },
    ];
    checkout();

    expect(window.currentModal).toBeDefined();
    expect(document.body.innerHTML).toContain('Bitcoin Checkout');
    expect(document.body.innerHTML).toContain('Latte');
    expect(document.body.innerHTML).toContain('0.0002 BTC');
  });
});

// ─── Close Checkout Modal ───────────────────────────────────
describe('closeCheckoutModal', () => {
  test('clears cart and removes modal', () => {
    cart = [
      { id: 1, name: 'Latte', btcPrice: 0.00016, usdPrice: 5.00, options: '', quantity: 1 },
    ];
    checkout();
    expect(window.currentModal).toBeDefined();

    // closeCheckoutModal also calls toggleCart, so set isCartOpen to true
    isCartOpen = true;
    closeCheckoutModal();

    expect(cart.length).toBe(0);
    expect(document.getElementById('cart-count').textContent).toBe('0');
  });
});

// ─── showToast ──────────────────────────────────────────────
describe('showToast', () => {
  test('creates toast container and toast element', () => {
    showToast('Test message');

    const container = document.getElementById('toast-container');
    expect(container).not.toBeNull();
    expect(container.children.length).toBe(1);
    expect(container.children[0].textContent).toBe('Test message');
  });

  test('creates multiple toasts in same container', () => {
    showToast('First');
    showToast('Second');

    const container = document.getElementById('toast-container');
    expect(container.children.length).toBe(2);
  });

  test('applies error styling', () => {
    showToast('Error!', { type: 'error' });

    const toast = document.querySelector('#toast-container div');
    expect(toast.style.color).toBe('rgb(220, 53, 69)'); // #dc3545
    expect(toast.style.borderLeft).toContain('#dc3545');
  });

  test('applies success styling', () => {
    showToast('Success!', { type: 'success' });

    const toast = document.querySelector('#toast-container div');
    expect(toast.style.color).toBe('rgb(40, 167, 69)'); // #28a745
  });
});
