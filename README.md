# Back Home Brew ☕

A modern, responsive single-page web application for a home-based coffee shop featuring Bitcoin-only payments, an integrated merchandise store, real-time cart management, and a seamless user experience across all devices.

**Live Demo:** [Back Home Brew Store](https://backhomebrew.example.com)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Local Development](#local-development)
- [Usage Guide](#usage-guide)
- [Technologies Used](#technologies-used)
- [Bitcoin Payment System](#bitcoin-payment-system)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Browser Compatibility](#browser-compatibility)
- [API Integration](#api-integration)
- [Development Guidelines](#development-guidelines)
- [Troubleshooting](#troubleshooting)
- [Security Considerations](#security-considerations)
- [Contributing](#contributing)
- [License](#license)
- [Contact & Support](#contact--support)

---

## Project Overview

**Back Home Brew** is a fully-featured e-commerce web application designed for a home-based coffee business. The application showcases the business story, features a curated product catalog, enables direct orders through a unified shopping cart system, and processes all payments exclusively through Bitcoin.

The project emphasizes:
- **Bitcoin-Only Payments**: All transactions processed in BTC with real-time USD conversion
- **Unified Commerce**: Seamless integration of coffee orders and merchandise sales
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UX**: Smooth animations, intuitive navigation, and real-time feedback
- **Fast Performance**: Pure HTML5, CSS3, and vanilla JavaScript—no heavy frameworks

### Key Business Features

- ☕ **Coffee Ordering**: Customizable coffee drinks with size, milk options, and add-ons
- 🛍️ **Merchandise Store**: Branded apparel (t-shirts, hoodies) with size/color options
- 🛒 **Unified Cart**: Single shopping experience for both coffee and merchandise
- ₿ **Bitcoin Payments**: Direct wallet transactions with address copy-to-clipboard
- 💬 **Customer Engagement**: Contact form, testimonials section, hours display
- 📱 **Mobile-Responsive**: Adaptive navigation, touch-friendly buttons, optimized layout

---

## Features

### 🏠 Home Page (`index.html`)
- **Hero Section**: Engaging headline with prominent call-to-action buttons
- **About Section**: Brand story, business values, and unique selling points
- **Menu Preview**: Featured coffee offerings and pastry items
- **Testimonials**: Customer reviews and feedback carousel
- **Contact Section**: Business hours, location, phone/email, and inquiry form
- **Navigation**: Smooth scroll navigation with active link highlighting

### 🛍️ Store Page (`store.html`)
- **Product Grid**: Beautiful card-based layout for merchandise and coffee items
- **Product Customization**:
  - T-Shirts & Hoodies: Size and color selection
  - Coffee Drinks: Size, milk alternatives (dairy, oat, almond), pastry add-ons
- **Pricing Display**: BTC price, Satoshi equivalent, and USD conversion
- **Add to Cart**: Instant feedback with toast notifications
- **Bitcoin Payment Badge**: Prominent indicator of payment method

### 📦 Order/Cart Page (`order.html`)
- **Shopping Cart Display**: Detailed list of all items with customizations
- **Cart Management**:
  - Update quantities (implied by item removal)
  - Remove individual items
  - Real-time total calculation
- **Checkout Modal**:
  - Bitcoin address display with one-click copy
  - Order summary with item breakdown
  - BTC to USD conversion display
  - Transaction instructions

### 📱 Responsive Navigation
- **Desktop**: Horizontal navigation bar with integrated cart icon
- **Tablet/Mobile**: Hamburger menu with slide-out mobile menu
- **Cart Sidebar**: Accessible from any page with overlay
- **Active States**: Visual feedback on current page
- **Smooth Transitions**: CSS animations for better UX

### 🎨 Design Features
- **Modern Styling**: Clean, minimalist aesthetic with warm coffee-themed colors
- **Responsive Images**: Optimized images using modern formats (AVIF)
- **Accessibility**: Semantic HTML, proper contrast ratios, keyboard navigation
- **Animation**: Subtle transitions and transform effects
- **Typography**: Google Fonts (Raleway for headers, Inter for body)

---

## Project Structure

```
backhomebrew/
├── index.html              # Home page with hero, about, menu, testimonials, contact
├── store.html              # Product catalog (merchandise + coffee)
├── order.html              # Order/cart page with checkout modal
│
├── main.js                 # Core navigation and cart synchronization
├── store.js                # Store functionality and cart management
│
├── styles.css              # Global styles, layout, typography, colors
├── store.css               # Store-specific component styling
├── order.css               # Order page and cart sidebar styling
│
├── background.avif         # Hero section background image (AVIF format)
├── deploy.sh               # Bash script for production deployment
│
├── .gitignore              # Git configuration
├── .git/                   # Git repository metadata
└── README.md               # This file
```

### File Dependencies

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ index.html  │     │ store.html  │     │ order.html  │
└──────┬──────┘     └──────┬──────┘     └──────┬──────┘
       │                   │                   │
       ├───────────────────┼───────────────────┤
       │                   │                   │
       └───────┬───────────┴───────────────────┘
               │
        ┌──────┴──────┐
        │             │
    styles.css    main.js
        │             │
        │        store.js
        │             │
   order.css    ──────┘
```

---

## Prerequisites

### System Requirements

- **Node Environment**: Not required! This is a pure HTML/CSS/JS application
- **Python**: Version 3.6+ (or 2.7+ as fallback)
- **Git**: For cloning the repository
- **Modern Web Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Internet Connection**: For loading Google Fonts and external images

### Optional Tools

- **Code Editor**: VS Code, Sublime Text, or any text editor
- **Git Client**: GitHub Desktop or command-line git
- **HTTP Client**: For testing Bitcoin address/payment APIs (curl, Postman)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/henghonglee/backhomebrew.git
cd backhomebrew
```

### 2. Verify Project Files

Ensure all files are present:

```bash
ls -la
# Should show: index.html, store.html, order.html, styles.css, store.css, order.css, main.js, store.js, deploy.sh, background.avif
```

### 3. No Installation Required

Unlike Node.js projects, there's no `npm install` or package manager setup needed. All dependencies are served from CDNs (Google Fonts) or are vanilla JavaScript.

---

## Local Development

### Option 1: Using the Deploy Script (Recommended)

The `deploy.sh` script handles server setup automatically:

```bash
# Make script executable (if not already)
chmod +x deploy.sh

# Run with default settings (port 8080, bind to 0.0.0.0)
./deploy.sh

# Run with custom port
PORT=3000 ./deploy.sh

# Run with custom host (localhost only)
PORT=8000 HOST=localhost ./deploy.sh
```

**Output:**
```
🏠 Back Home Brew - Starting Production Server
📍 Server will be available at: http://localhost:8080
🌐 Network access: http://0.0.0.0:8080
✅ Using Python 3
```

Access the application at `http://localhost:8080`

### Option 2: Python HTTP Server (Manual)

**Python 3 (Recommended):**
```bash
python3 -m http.server 8080
# Server running at: http://localhost:8080
```

**Python 2 (Legacy):**
```bash
python -m SimpleHTTPServer 8080
# Server running at: http://localhost:8080
```

### Option 3: Using Node.js (Alternative)

If you have Node.js installed:

```bash
# Using npx and serve package (no installation needed)
npx serve -p 8080

# Or using http-server if installed
npm install -g http-server
http-server -p 8080
```

### Option 4: Docker (Advanced)

Create a `Dockerfile` for containerized deployment:

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY . .
EXPOSE 8080
CMD ["python3", "-m", "http.server", "8080", "--bind", "0.0.0.0"]
```

Build and run:
```bash
docker build -t backhomebrew .
docker run -p 8080:8080 backhomebrew
```

### Development Workflow

1. **Start the server** using one of the above methods
2. **Open browser** to `http://localhost:8080`
3. **Edit files** in your code editor
4. **Refresh browser** to see changes (Ctrl+R or Cmd+R)
5. **Check console** for errors (F12 → Console tab)

### Recommended VS Code Extensions

- **Live Server**: Auto-refresh on file changes
- **HTML CSS Support**: Better autocomplete
- **Prettier**: Code formatting
- **Git Graph**: Visualize repository

---

## Usage Guide

### Home Page Navigation

**Accessible from any page via:**
- Logo click → Returns to home
- Desktop nav menu → Click "Home" (if available)
- Mobile menu → Tap hamburger icon

**Key Sections:**
1. **Hero** - Welcome message and quick action buttons
2. **About** - Business story and core values
3. **Menu** - Preview of coffee offerings
4. **Testimonials** - Customer reviews
5. **Contact** - Hours, location, and contact form

### Browsing the Store

1. **Click "Store"** in main navigation
2. **View Products** - Browse available items in grid layout
3. **Select Customizations**:
   - T-Shirts/Hoodies: Choose size and color
   - Coffee: Select size, milk option, and any additions
4. **Check Pricing**:
   - BTC price (in satoshis)
   - USD equivalent (≈)
5. **Add to Cart** - Click "Add to Cart" button
6. **View Toast Notification** - Confirms item was added

### Managing Your Cart

**Open Cart:**
- Click the **cart icon** (bag symbol) in header
- Shows item count in red badge

**View Cart Contents:**
- All items with selected options
- BTC and USD pricing per item
- Quantity display (via removal option)

**Modify Cart:**
- Click **"Remove"** button on any item to delete it
- No quantity adjustment UI (adjust by removing and re-adding)

**Close Cart:**
- Click outside the sidebar
- Click **"×"** close button
- Click cart icon again

### Checkout Process

1. **Proceed to Checkout**:
   - Click "Checkout with Bitcoin" button
   - Review order in modal

2. **Review Order Summary**:
   - Total BTC amount (with USD conversion)
   - Complete itemized breakdown
   - All selected options

3. **Get Bitcoin Address**:
   - Address displayed: `bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5`
   - Click "Copy Address" for one-click clipboard copy

4. **Send Payment**:
   - Send exact BTC amount from your wallet
   - Keep transaction ID for reference

5. **Complete Order**:
   - Email transaction ID to `orders@backhomebrew.com`
   - Subject: "Order Confirmation - [Transaction ID]"
   - Include any delivery/pickup preferences

6. **Order Confirmation**:
   - Cart clears automatically
   - Confirmation sent by email

### Mobile Experience

**Navigation:**
- Tap **hamburger menu** (three horizontal lines)
- Select destination from slide-out menu
- Menu auto-closes after selection

**Cart Access:**
- Tap **cart icon** in mobile menu
- Same functionality as desktop
- Better touch targets for buttons

**Responsiveness:**
- Auto-adjusts layout for screens < 768px
- Stack layout instead of grid
- Full-width buttons and inputs
- Larger text and spacing

---

## Technologies Used

### Frontend Stack

**HTML5**
- Semantic markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Form elements with proper attributes
- Meta tags for viewport and SEO
- Accessible structure

**CSS3**
- Flexbox for layouts
- CSS Grid for product displays
- Media queries for responsive design
- CSS variables for theming
- Animations and transitions
- Gradient backgrounds

**JavaScript (Vanilla - No Frameworks)**
- DOM manipulation (document.querySelector, addEventListener)
- Event handling (click, scroll, DOMContentLoaded)
- Local cart state management
- Bitcoin address clipboard API
- Modal creation and management
- Toast notification system

### External Dependencies

**Google Fonts**
- **Raleway**: Headers and display text (weights: 300, 400, 500, 700)
- **Inter**: Body text and UI (weights: 300, 400, 500, 600)
- Preconnect optimization for faster loading

**Image Assets**
- **background.avif**: Modern image format for fast loading
- **External Images**: Pexels, Unsplash for product mockups

### Deployment & Server

**Python HTTP Server**
- Standard library (no additional packages)
- Cross-platform compatibility
- Suitable for production with proper proxying

**Bash Scripting**
- `deploy.sh` - Automated server startup
- Environment variable support
- Error handling and validation

### No Build Tools Required

- ✅ No Webpack/Parcel bundler
- ✅ No npm packages to install
- ✅ No compilation step
- ✅ No JavaScript framework overhead
- ✅ Pure progressive enhancement

---

## Bitcoin Payment System

### Overview

Back Home Brew uses **Bitcoin for all payments**. This section covers the technical implementation and payment flow.

### Bitcoin Integration Details

**Current Implementation:**
- Static Bitcoin address: `bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5`
- BTC-to-USD conversion rate: Hardcoded at 31,250 (see `store.js` line 6)
- Manual payment verification via email
- No payment processor integration (yet)

**Payment Configuration (store.js):**
```javascript
// Bitcoin to USD rate (you would typically fetch this from an API)
const BTC_TO_USD_RATE = 31250; // Example rate
```

### Cart Price Calculation

**Base Products:**
- Coffee (Espresso): 0.000032 BTC (≈ $1.00)
- Coffee (Latte): 0.000064 BTC (≈ $2.00)
- Merchandise (T-Shirt): 0.0008 BTC (≈ $25.00)
- Merchandise (Hoodie): 0.00128 BTC (≈ $40.00)

**Modifiers:**
- Oat milk add-on: +0.000016 BTC (+$0.50)
- Pastry (muffin): 0.00010 BTC ($3.00)
- Pastry (scone): 0.00013 BTC ($4.00)

**Display Conversions:**
- BTC shown to 4 decimal places
- Satoshis (sats) = BTC × 100,000,000
- USD shown to 2 decimal places
- All conversions shown in cart and checkout

### Bitcoin Address Management

**Current Address:**
```
bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5
```
- Type: Bech32 (SegWit v0)
- Network: Mainnet
- Derivation: Hardware wallet or cold storage (recommended)

**Security Best Practices:**
- [ ] Use hardware wallet for receiving
- [ ] Keep address offline when possible
- [ ] Monitor receiving address for funds
- [ ] Log all transactions for accounting
- [ ] Consider multi-sig for large amounts
- [ ] Use separate address for each day (optional)

### Checkout Modal Flow

```
User clicks "Checkout" → Modal appears
    ├── Display total: X.XXXX BTC (≈ $Y.YY)
    ├── Display Bitcoin address
    ├── Show order summary
    ├── Display warning about exact amounts
    ├── Provide "Copy Address" button
    └── "Close" button clears cart
```

### Payment Verification

**Manual Process (Current):**
1. Customer sends BTC to address
2. Customer receives transaction ID
3. Customer emails transaction ID to orders@backhomebrew.com
4. Team verifies payment on blockchain
5. Order is fulfilled and confirmed

**Future Enhancement:**
```javascript
// Pseudo-code for API integration
const response = await fetch('https://api.blockcypher.com/v1/btc/main/addrs/bc1qak.../full?token=YOUR_TOKEN');
const data = await response.json();
const confirmations = data.txs[0].confirmations;
if (confirmations >= 3) {
    // Payment confirmed - fulfill order
}
```

### Real-Time Exchange Rate

**Current Implementation:** Hardcoded rate (see Prerequisites for update)

**To Use Live Rates:**
```javascript
// Option 1: CoinGecko API (free, no auth)
const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
const data = await response.json();
const BTC_TO_USD_RATE = data.bitcoin.usd;

// Option 2: Blockchain.com API
const response = await fetch('https://api.blockchain.com/v3/payments/price?crypto=BTC&fiat=USD');
const data = await response.json();
const BTC_TO_USD_RATE = data.prices[0].price;

// Option 3: Kraken API
const response = await fetch('https://api.kraken.com/0/public/Ticker?pair=XBTUSDT');
const data = await response.json();
const BTC_TO_USD_RATE = parseFloat(data.result.XXBTZUSD.c[0]);
```

### Testing Payments

**Testnet Setup:**
```javascript
// For development/testing on Bitcoin Testnet
const NETWORK = 'testnet'; // or 'mainnet'
const TEST_ADDRESS = 'tb1qw508d6qejxtdg4y5r3zarvary0c5xw7kxpjzsx'; // Example testnet address

// Get free testnet BTC from faucet
// https://testnet-faucet.mempool.space/
```

---

## Deployment

### Production Deployment

#### Option 1: Using Deploy Script (Recommended for Linux/macOS)

```bash
# Clone repository
git clone https://github.com/henghonglee/backhomebrew.git
cd backhomebrew

# Make executable
chmod +x deploy.sh

# Deploy with default settings
./deploy.sh

# Or with environment variables
PORT=8080 HOST=0.0.0.0 ./deploy.sh
```

#### Option 2: Manual Python Server (All Platforms)

```bash
# Start server
python3 -m http.server 8080 --bind 0.0.0.0

# Or for Python 2
python -m SimpleHTTPServer 8080
```

#### Option 3: Cloud Platforms

**Netlify:**
1. Connect GitHub repo
2. Set build command: (leave empty)
3. Set publish directory: `/` (root)
4. Deploy

**Vercel:**
1. Import GitHub repository
2. Framework preset: Other
3. Deploy

**Heroku:**
```bash
# Create Procfile
echo "web: python3 -m http.server $PORT" > Procfile
git push heroku main
```

**AWS S3 + CloudFront:**
```bash
aws s3 sync . s3://your-bucket-name/
# Set up CloudFront distribution for caching
```

**DigitalOcean App Platform:**
1. Connect GitHub repo
2. HTTP server: `python3 -m http.server 8080 --bind 0.0.0.0`
3. Deploy

**cPanel/Shared Hosting:**
1. Upload files via FTP/SFTP
2. No server startup needed - files served directly by web server
3. Configure domain in cPanel

### Production Environment Variables

```bash
# Port (default: 8080)
PORT=8080

# Host binding (default: 0.0.0.0)
# 0.0.0.0 = accessible from any network interface
# localhost = localhost only
HOST=0.0.0.0

# Example: Custom port and localhost only
PORT=3000 HOST=localhost ./deploy.sh
```

### SSL/HTTPS Configuration

**With Nginx Reverse Proxy:**
```nginx
server {
    listen 443 ssl;
    server_name backhomebrew.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

**With Apache:**
```apache
<VirtualHost *:443>
    ServerName backhomebrew.com
    SSLEngine on
    SSLCertificateFile /path/to/cert.pem
    SSLCertificateKeyFile /path/to/key.pem

    ProxyPass / http://localhost:8080/
    ProxyPassReverse / http://localhost:8080/
</VirtualHost>
```

**Using Let's Encrypt (Free SSL):**
```bash
sudo certbot certonly --standalone -d backhomebrew.com
# Certbot will provide certificate paths for your web server config
```

---

## Configuration

### Customization Guide

#### Change Bitcoin Address

**File:** `store.js` (lines 343, 389, 431)

```javascript
// Before:
const address = 'bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5';

// After:
const address = 'bc1qYOUR_ADDRESS_HERE';
```

Also update in `index.html` (line 178):
```html
<!-- Before -->
<p>We accept Bitcoin only</p>

<!-- After -->
<p>Send Bitcoin to: bc1qYOUR_ADDRESS_HERE</p>
```

#### Update Bitcoin-to-USD Exchange Rate

**File:** `store.js` (line 6)

```javascript
// Before (hardcoded)
const BTC_TO_USD_RATE = 31250;

// After (live rate)
let BTC_TO_USD_RATE = 31250; // Initialize with fallback

// Fetch live rate from API
async function updateBitcoinRate() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        BTC_TO_USD_RATE = data.bitcoin.usd;
    } catch (error) {
        console.error('Failed to fetch BTC rate:', error);
        // Keep fallback rate
    }
}

// Call on page load
document.addEventListener('DOMContentLoaded', updateBitcoinRate);
// Refresh every 5 minutes
setInterval(updateBitcoinRate, 300000);
```

#### Change Order Email Address

**File:** `store.js` (line 345, 409)

```javascript
// Before
const orderEmail = 'orders@backhomebrew.com';

// After
const orderEmail = 'your-email@yourdomain.com';
```

#### Customize Colors & Theme

**File:** `styles.css` (CSS variables at top)

```css
:root {
    --primary-color: #8B4513;      /* Primary brown */
    --accent-color: #D2691E;       /* Accent orange */
    --text-dark: #2C1810;          /* Dark text */
    --text-light: #6B5344;         /* Light text */
    --bg-light: #F5F5F5;           /* Light background */
    --bg-white: #FFFFFF;
}
```

#### Update Company Information

**File:** `index.html` (various locations)

```html
<!-- Business Hours (line ~163) -->
<p>Monday - Friday: 7:00 AM - 3:00 PM</p>
<p>Saturday - Sunday: 8:00 AM - 4:00 PM</p>

<!-- Location (line ~169) -->
<p>123 Cozy Street</p>
<p>Hometown, ST 12345</p>

<!-- Contact (line ~173) -->
<p>Phone: (555) 123-BREW</p>
<p>Email: hello@backhomebrew.com</p>
```

#### Add New Products

**File:** `store.html` (add to products-grid)

```html
<div class="product-card" data-product="new-item">
    <div class="product-image">
        <img src="image-url.jpg" alt="New Item">
    </div>
    <div class="product-info">
        <h3>New Product Name</h3>
        <p>Product description here</p>
        <div class="product-options">
            <select class="size-select">
                <option value="">Select Option</option>
                <option value="opt1">Option 1</option>
            </select>
        </div>
        <div class="product-price">
            <span class="btc-price">0.0008 BTC</span>
            <span class="sats-price">80,000 sats</span>
            <span class="usd-price">≈ $25.00</span>
        </div>
        <button class="add-to-cart" onclick="addToCart('new-item', 'New Product Name', 0.0008, 25.00)">Add to Cart</button>
    </div>
</div>
```

---

## Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| Opera | 76+ | ✅ Full Support |
| Chrome Mobile | Latest | ✅ Full Support |
| Safari iOS | 14+ | ✅ Full Support |
| Firefox Mobile | Latest | ✅ Full Support |

### Known Limitations

- **Internet Explorer 11**: Not supported (use modern browser)
- **Older browsers**: CSS Grid, Flexbox, and ES6 features required
- **AVIF format**: Fallback to JPG on unsupported browsers

### Testing Browser Compatibility

```bash
# Using BrowserStack (paid)
# https://www.browserstack.com/

# Using LambdaTest (free tier available)
# https://www.lambdatest.com/

# Using local testing
# Use Chrome DevTools → F12 → Device Toolbar for mobile simulation
```

---

## API Integration

### Third-Party Services

#### Bitcoin Price API (Optional)

**CoinGecko (Recommended - Free, No Auth Required)**
- Endpoint: `https://api.coingecko.com/api/v3/simple/price`
- Rate limit: ~50 calls/minute
- Response: Fast, reliable
- Usage: Update `BTC_TO_USD_RATE` on page load

**Implementation Example:**
```javascript
async function getBitcoinPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        return data.bitcoin.usd;
    } catch (error) {
        console.warn('Bitcoin price fetch failed, using cached rate');
        return BTC_TO_USD_RATE; // Fallback
    }
}

// Update on load
document.addEventListener('DOMContentLoaded', async () => {
    BTC_TO_USD_RATE = await getBitcoinPrice();
});
```

#### Payment Verification APIs

**Blockchain.com API**
- Endpoint: `https://api.blockchain.com/v3/payments/addresses/{address}`
- Requires: API Key (free signup)
- Use case: Verify received payments

**BlockCypher API**
- Endpoint: `https://api.blockcypher.com/v1/btc/main/addrs/{address}/full`
- Requires: API Key (free tier: 200 req/hr)
- Use case: Check confirmations, balance monitoring

**Mempool.space API**
- Endpoint: `https://mempool.space/api/address/{address}`
- Requires: None (free, no auth)
- Use case: Real-time transaction tracking

**Implementation:**
```javascript
async function verifyPayment(address, expectedAmount) {
    try {
        const response = await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${address}/full?token=YOUR_TOKEN`);
        const data = await response.json();

        // Check recent transactions
        for (const tx of data.txs || []) {
            for (const output of tx.outputs || []) {
                if (output.addresses.includes(address)) {
                    const btcAmount = output.output_value / 100000000; // Convert satoshis to BTC
                    if (btcAmount >= expectedAmount && tx.confirmations >= 3) {
                        return { confirmed: true, txHash: tx.hash };
                    }
                }
            }
        }
        return { confirmed: false };
    } catch (error) {
        console.error('Payment verification failed:', error);
        return { confirmed: false, error };
    }
}
```

#### Email Service Integration (Optional)

**SendGrid Email API**
```javascript
async function sendOrderConfirmation(email, orderId, total) {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_SENDGRID_API_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            personalizations: [{ to: [{ email }] }],
            from: { email: 'orders@backhomebrew.com' },
            subject: `Order Confirmation #${orderId}`,
            content: [{
                type: 'text/html',
                value: `<h2>Order Confirmed</h2><p>Total: ${total} BTC</p>`
            }]
        })
    });
    return response.json();
}
```

---

## Development Guidelines

### Adding a New Page

1. **Create HTML file:**
   ```bash
   touch new-page.html
   ```

2. **Use template structure:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Back Home Brew - Page Title</title>
       <link rel="stylesheet" href="styles.css">
       <link rel="stylesheet" href="new-page.css">
       <link rel="preconnect" href="https://fonts.googleapis.com">
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
       <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
   </head>
   <body>
       <!-- Copy header from index.html -->
       <main>
           <!-- Your content -->
       </main>
       <!-- Copy footer from index.html -->
       <script src="main.js"></script>
   </body>
   </html>
   ```

3. **Create corresponding CSS file:** `new-page.css`

4. **Update navigation links** in all HTML files to include the new page

### Code Style Guidelines

**JavaScript:**
```javascript
// Use meaningful variable names
const cartTotal = 0;
const isCartOpen = false;

// Use camelCase for functions
function calculateTotal() { }
function updateCartUI() { }

// Use const by default, let when necessary, avoid var
const items = [];
let total = 0;

// Comment complex logic
// Convert satoshis to BTC (1 BTC = 100,000,000 sats)
const btcAmount = satoshis / 100000000;
```

**CSS:**
```css
/* Use kebab-case for class names */
.cart-item { }
.product-card { }
.btn-primary { }

/* Group related properties */
.element {
    /* Layout */
    display: flex;
    width: 100%;

    /* Spacing */
    margin: 1rem;
    padding: 1rem;

    /* Colors */
    background: white;
    color: black;

    /* Animation */
    transition: all 0.3s ease;
}

/* Mobile-first approach */
.element {
    width: 100%;
}

@media (min-width: 768px) {
    .element {
        width: 50%;
    }
}
```

**HTML:**
```html
<!-- Use semantic tags -->
<header>Navigation</header>
<main>
    <section>Major content area</section>
</main>
<footer>Footer</footer>

<!-- Use meaningful IDs and classes -->
<div id="cart-sidebar" class="cart-sidebar">
<button class="btn btn-primary">Click me</button>

<!-- Self-closing tags for consistency -->
<img src="..." alt="..." />
<input type="text" />
```

### Performance Optimization

**Image Optimization:**
```bash
# Convert PNG to AVIF (smaller file size)
cwebp -o image.avif image.png

# Or use online converter: https://ilovepdf.com/png-to-webp
# Then rename to .avif
```

**Minify CSS/JS (Optional):**
```bash
# Install UglifyJS
npm install -g uglify-js

# Minify JavaScript
uglifyjs store.js -o store.min.js -c -m

# Minify CSS (use online tool or csso-cli)
npm install -g csso-cli
csso styles.css -o styles.min.css
```

**Caching Strategy:**
```html
<!-- In HTML head -->
<meta http-equiv="Cache-Control" content="public, max-age=86400">

<!-- Or via server headers (Nginx) -->
# expires 1d;
```

### Testing Checklist

- [ ] All links work correctly
- [ ] Forms submit (or prevent default)
- [ ] Cart functionality works
- [ ] Bitcoin address copies to clipboard
- [ ] Mobile menu opens/closes
- [ ] Responsive design works at all breakpoints (320px, 768px, 1024px)
- [ ] All images load
- [ ] Google Fonts load correctly
- [ ] No console errors (F12 → Console)
- [ ] Lighthouse score > 80

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
git add .
git commit -m "Add new feature"

# Push to repository
git push origin feature/new-feature

# Create Pull Request on GitHub
```

---

## Troubleshooting

### Server Issues

**Problem: "Address already in use"**
```bash
# Find process using port 8080
lsof -i :8080

# Kill process (macOS/Linux)
kill -9 <PID>

# Or use different port
PORT=3000 ./deploy.sh
```

**Problem: "Python command not found"**
```bash
# Check if Python is installed
python3 --version
python --version

# Install Python
# macOS: brew install python3
# Ubuntu: sudo apt install python3
# Windows: Download from python.org
```

**Problem: "Permission denied" for deploy.sh**
```bash
# Make script executable
chmod +x deploy.sh

# Verify permissions
ls -la deploy.sh
# Should show: -rwxr-xr-x
```

**Problem: Server starts but page won't load**
- Check browser console (F12)
- Verify all files are in project directory
- Try clearing browser cache (Ctrl+Shift+Delete)
- Try different browser
- Check firewall settings

### Cart Issues

**Problem: "Cart not updating"**
- Hard refresh page (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache and cookies
- Check browser console for errors (F12)
- Verify JavaScript is enabled

**Problem: "Items disappearing from cart"**
- This is normal - items persist during session only
- To save permanently, would need database
- Currently cart is cleared after checkout

**Problem: "Bitcoin address not copying"**
- Your browser may not support clipboard API
- Manually copy address from modal
- Try different browser
- Check if clipboard permission is granted

### Bitcoin & Payment Issues

**Problem: "Prices not converting correctly"**
- BTC_TO_USD_RATE is hardcoded at 31,250
- To use live rates, implement API integration (see Configuration)
- Verify math: BTC × 31,250 = USD

**Problem: "Bitcoin address invalid"**
- Current address: `bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5`
- Verify in store.js if you've customized it
- Use Bitcoin address validator: https://bitcoinaddress.org/

**Problem: "Payment not received"**
- Verify transaction on blockchain: https://blockchain.com/explorer
- Check address received funds
- Ensure exact BTC amount sent
- Allow time for network confirmations (10-60 min)

### Deployment Issues

**Problem: 404 errors after deployment**
- Verify all files uploaded to server
- Check file permissions (should be readable)
- Verify relative paths in HTML links
- Test locally first

**Problem: Styles not loading**
- Check file paths in `<link>` tags
- Verify CSS files are in same directory
- Hard refresh browser (Ctrl+F5)
- Check browser console for errors

**Problem: Images not showing**
- Verify image file paths
- Check image file extensions (.avif, .jpg, .png)
- Convert AVIF if browser doesn't support
- Use full URLs for external images

### Mobile Issues

**Problem: Mobile menu doesn't appear**
- Browser viewport not set correctly
- Add `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Clear browser cache
- Test in actual mobile device (not just DevTools)

**Problem: Touch events not working**
- Check if JavaScript is enabled
- Verify event listeners are attached
- Test with actual touch device
- Check browser console for errors

### Performance Issues

**Problem: Page loads slowly**
- Optimize images (convert to AVIF, compress)
- Minify CSS and JavaScript
- Reduce number of external requests
- Enable browser caching
- Use CDN for images (Cloudflare, etc.)

**Problem: High memory usage**
- Close unused browser tabs
- Clear browser cache
- Check for memory leaks in JavaScript
- Use browser DevTools → Memory tab to profile

---

## Security Considerations

### Bitcoin Security Best Practices

⚠️ **IMPORTANT: This application handles Bitcoin addresses. Follow security best practices.**

1. **Bitcoin Address Protection**
   - [ ] Use hardware wallet to generate address (Ledger, Trezor)
   - [ ] Never share private keys
   - [ ] Rotate addresses periodically (optional but recommended)
   - [ ] Monitor receiving address for unexpected transactions
   - [ ] Use address watch-only wallet

2. **Payment Verification**
   - [ ] Always verify transaction on blockchain
   - [ ] Require minimum confirmations (3-6 recommended)
   - [ ] Cross-reference transaction ID with customer email
   - [ ] Log all transactions for audit trail
   - [ ] Consider escrow service for large purchases

3. **Customer Data Protection**
   - [ ] No customer data stored locally
   - [ ] Use HTTPS/SSL for all communication
   - [ ] Don't log payment information
   - [ ] Send order confirmations via encrypted email
   - [ ] Implement GDPR/privacy policy

4. **Wallet Security**
   - [ ] Use cold storage for long-term holdings
   - [ ] Keep private keys offline
   - [ ] Use multi-signature wallet for large amounts
   - [ ] Backup wallet regularly
   - [ ] Use secure password manager

### Web Application Security

**XSS (Cross-Site Scripting) Prevention**
- All user input should be sanitized
- Avoid `innerHTML` with untrusted data
- Use `textContent` for plain text
- Currently: No user-generated content accepted

**CSRF (Cross-Site Request Forgery) Prevention**
- Form submissions already isolated (no cross-domain requests)
- Future API integrations should use CSRF tokens
- Implement SameSite cookie attribute

**SQL Injection Prevention**
- N/A: No database currently
- If adding backend, use prepared statements/parameterized queries

**Secure Headers (Server Configuration)**
```nginx
# Nginx example
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' fonts.googleapis.com fonts.gstatic.com images.unsplash.com images.pexels.com" always;
```

### HTTPS/SSL Requirement

**Must use HTTPS for:**
- Accepting payments
- Handling customer data
- Production deployments
- Any form submissions

**Implementation:**
```bash
# Using Let's Encrypt (free SSL)
sudo certbot certonly --standalone -d yourdomain.com

# Use SSL certificate with your web server
# Nginx, Apache, or cloud provider setup
```

---

## Contributing

### Getting Started with Development

1. **Fork the repository**
   ```bash
   # On GitHub: Click "Fork"
   git clone https://github.com/YOUR_USERNAME/backhomebrew.git
   cd backhomebrew
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow code style guidelines (see Development Guidelines)
   - Test in multiple browsers
   - Keep commits atomic and descriptive

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Describe your changes clearly
   - Link related issues
   - Request review from maintainers

### Types of Contributions Welcome

- 🐛 **Bug Fixes**: Fix existing issues
- ✨ **Features**: New functionality
- 📚 **Documentation**: Improve README, comments, guides
- 🎨 **Design**: UI/UX improvements
- ♿ **Accessibility**: A11y enhancements
- 🚀 **Performance**: Optimization
- 🧪 **Testing**: Test coverage improvements

### Reporting Issues

**Bug Report Template:**
```markdown
## Description
Brief description of the issue

## Steps to Reproduce
1. Go to...
2. Click...
3. See error...

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Browser: [Chrome 90+, Firefox, etc.]
- OS: [Windows, macOS, Linux]
- URL: [where issue occurs]

## Screenshots
[If applicable]

## Additional Context
[Any other info]
```

**Feature Request Template:**
```markdown
## Description
Clear description of the feature

## Motivation
Why this feature is needed

## Proposed Solution
How it could work

## Alternatives
Other approaches considered

## Additional Context
Any examples or mockups
```

### Code Review Process

1. Maintainers review your PR within 3-7 days
2. Provide feedback or request changes if needed
3. Address feedback by pushing new commits
4. PR is merged once approved

### Commit Message Guidelines

```bash
# Good commit messages
git commit -m "Add Bitcoin price API integration for real-time rates"
git commit -m "Fix cart not updating on mobile devices"
git commit -m "Improve checkout modal accessibility"

# Format: [Type] Description
# Types: feat (feature), fix (bug fix), docs (documentation),
#        style (formatting), refactor (code restructure), perf (performance)
```

---

## License

This project is licensed under the **MIT License** - see below for details.

```
MIT License

Copyright (c) 2024 Back Home Brew

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Contact & Support

### Business Contact

**Back Home Brew**
- 📍 **Address**: 123 Cozy Street, Hometown, ST 12345
- 📞 **Phone**: (555) 123-BREW
- 📧 **Email**: hello@backhomebrew.com
- 🕒 **Hours**: Mon-Fri 7AM-3PM, Sat-Sun 8AM-4PM
- ₿ **Bitcoin**: bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5

### Order Support

**Email**: orders@backhomebrew.com
**Subject Line**: Include your transaction ID
**Response Time**: 24-48 hours

**Order Inquiry Template:**
```
To: orders@backhomebrew.com
Subject: Order Confirmation - [Transaction ID]

Transaction ID: [Your Bitcoin TXID]
Order Total: [X.XXXX BTC]
Items Ordered:
- [Item 1]
- [Item 2]

Delivery Instructions:
[Where/how to deliver]
```

### Technical Support

**For bugs or technical issues:**
- Open issue on GitHub: https://github.com/henghonglee/backhomebrew/issues
- Email: tech@backhomebrew.com
- Include:
  - Browser and version
  - Steps to reproduce
  - Screenshots if applicable
  - Console error messages (F12)

### Social Media

- 📱 Instagram: @backhomebrew
- 🐦 Twitter: @backhomebrew
- 📘 Facebook: backhomebrew

### Feedback & Suggestions

We'd love to hear from you! Send suggestions to:
- feedback@backhomebrew.com
- Or open a GitHub discussion

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | March 2024 | Initial release with home, store, and order pages |
| 1.1.0 | [TBD] | Add real-time Bitcoin price API integration |
| 1.2.0 | [TBD] | Payment verification automation |
| 2.0.0 | [TBD] | Backend database + user accounts |

---

## Acknowledgments

- **Google Fonts**: Raleway and Inter typefaces
- **Icons**: Bootstrap Icons and Font Awesome concepts
- **Images**: Pexels and Unsplash
- **Bitcoin Community**: For payment infrastructure
- **Open Source**: All dependencies are open source

---

## Quick Links

- 🌐 **Live Site**: https://backhomebrew.example.com
- 📖 **Documentation**: This README
- 🐛 **Report Issues**: https://github.com/henghonglee/backhomebrew/issues
- 🚀 **Deploy Now**: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/henghonglee/backhomebrew)
- 💬 **Discussions**: https://github.com/henghonglee/backhomebrew/discussions

---

**Made with ❤️ and lots of coffee ☕**

Last Updated: March 2026
