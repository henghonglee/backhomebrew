# 🏠 Back Home Brew ☕

> A modern, responsive website for a home-based coffee shop featuring a beautiful storefront, product catalog, and online ordering system with Bitcoin payments.

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bitcoin](https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white)](https://bitcoin.org)

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Local Development](#local-development)
- [Usage Guide](#-usage-guide)
  - [Navigation](#navigation)
  - [Store Page](#store-page)
  - [Order Page](#order-page)
  - [Bitcoin Payments](#bitcoin-payments)
  - [Cart Management](#cart-management)
  - [Responsive Design](#responsive-design)
- [Technologies](#-technologies)
- [Deployment](#-deployment)
  - [Production Deployment](#production-deployment)
  - [Environment Variables](#environment-variables)
  - [Server Requirements](#server-requirements)
- [File Structure & Descriptions](#-file-structure--descriptions)
  - [HTML Pages](#html-pages)
  - [JavaScript Files](#javascript-files)
  - [Stylesheets](#stylesheets)
  - [Assets](#assets)
- [Development Guide](#-development-guide)
  - [Adding Features](#adding-features)
  - [Customizing Styling](#customizing-styling)
  - [Bitcoin Rate Configuration](#bitcoin-rate-configuration)
- [Browser Compatibility](#-browser-compatibility)
- [Troubleshooting](#-troubleshooting)
- [Contributing Guidelines](#-contributing-guidelines)
- [Contact & Support](#-contact--support)

---

## 🎯 Project Overview

Back Home Brew is a single-page web application designed to showcase a home-based coffee business. It provides customers with an intuitive interface to browse premium coffee products, place orders online, and checkout using Bitcoin. The site is fully responsive, optimized for both desktop and mobile devices, and features real-time cart synchronization across pages.

**Key Highlights:**
- 🎨 Modern, clean UI with professional styling
- ⚡ Fast-loading single-page application (no backend required)
- 💰 Bitcoin-only payment system with real-time BTC/USD conversion
- 📦 Full-featured shopping cart with persistent item tracking
- 🔄 Real-time cart synchronization across all pages
- 📱 Mobile-first responsive design
- ♿ Accessible and semantic HTML structure

---

## ✨ Features

### 🏠 Home Page
The landing page welcomes customers and showcases the brand:
- **Hero Section** - Eye-catching welcome message with call-to-action buttons
- **About Section** - Brand story and company values
- **Featured Menu** - Showcase of signature coffee drinks and pastries
- **Testimonials** - Customer reviews and testimonials
- **Contact Information** - Hours, location, contact details, and embedded contact form
- **Smooth Navigation** - Scroll-spy active link highlighting
- **Mobile Menu** - Hamburger menu for smaller screens

### 🛍️ Store Page
Browse and purchase branded merchandise:
- **Product Catalog** - Grid display of 6+ merchandise items (T-shirts, hoodies, caps, mugs, bags, tumblers)
- **Product Options** - Size and color selection with visual feedback
- **Bitcoin Pricing** - All items priced in BTC with automatic USD conversion
- **Add to Cart** - Seamless shopping experience with validation
- **Bitcoin Information** - Educational section about Bitcoin benefits
- **Quick Add** - One-click addition with required field validation

**Products Available:**
- Back Home Brew T-Shirt (0.0008 BTC / ~$25)
- Coffee Lover's Cap (0.0006 BTC / ~$20)
- Ceramic Coffee Cup (0.0005 BTC / ~$15)
- Back Home Brew Hoodie (0.002 BTC / ~$65)
- Messenger Bag (0.0015 BTC / ~$45)
- Insulated Tumbler (0.0007 BTC / ~$22)

### 📦 Order Page
Complete coffee ordering system with delivery options:
- **Coffee Menu** - Organized by category (Espresso, Specialty, Cold Brew, Pastries)
- **Customization Options** - Size, milk type, and pastry selection
- **Dynamic Pricing** - Prices adjust based on selections (e.g., oat milk upcharge)
- **Menu Categories** - Tab-based navigation between coffee types
- **Delivery Options** - Home delivery (free within 3 miles) or pickup
- **Order Summary** - Clear breakdown of items and pricing in BTC and USD
- **Flexible Checkout** - Bitcoin payment integration with confirmation

**Menu Items Include:**
- Espresso drinks (single/double shots)
- Specialty coffee (seasonal blends)
- Cold brew options
- Fresh baked pastries
- Customizable options for each item

### 🛒 Cart Management
Unified shopping cart across the entire application:
- **Cross-Page Synchronization** - Cart persists when navigating between pages
- **Real-Time Updates** - Cart count and totals update instantly
- **Item Management** - Add, remove, and view item details
- **Quantity Control** - Adjust quantities or remove individual items
- **Price Conversion** - Automatic BTC to sats conversion (8 decimal places)
- **Order Summary** - Clear breakdown of all items with options
- **Flexible Checkout** - Works seamlessly for both products and coffee orders

**Cart Features:**
- Visual cart count badge in header
- Slide-out cart sidebar with full item details
- Real-time total calculations in BTC and USD
- Item option display (size, color, milk type, etc.)
- One-click item removal
- Copy Bitcoin address functionality

### 📱 Responsive Design
Mobile-first approach ensuring seamless experience across all devices:
- **Breakpoints** - Optimized for mobile, tablet, and desktop
- **Flexible Layout** - CSS Flexbox and Grid for responsive structure
- **Touch-Friendly** - Large touch targets and optimized interaction areas
- **Mobile Menu** - Hamburger menu on small screens
- **Viewport Optimization** - Proper viewport meta tags for device scaling
- **Font Scaling** - Readable typography on all screen sizes
- **Image Optimization** - Responsive images and lazy-loading ready
- **Performance** - Lightweight CSS and optimized JavaScript

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### 🌐 Additional Features
- **Smooth Animations** - CSS transitions and animations for visual feedback
- **Toast Notifications** - Non-intrusive success/error messages
- **Bitcoin Integration** - Native Bitcoin payment support
- **Form Validation** - Required field validation before adding to cart
- **Accessibility** - Semantic HTML and ARIA labels
- **Performance** - Optimized asset loading and minimal JavaScript
- **Professional Styling** - Custom color scheme with CSS variables

---

## 📁 Project Structure

```
backhomebrew/
├── index.html              # Home page (hero, about, menu, contact)
├── store.html              # Merchandise store with product catalog
├── order.html              # Coffee ordering system with cart
├── main.js                 # Core navigation and cart synchronization
├── store.js                # Unified cart, checkout, and notification system
├── styles.css              # Global styles, layout, and typography
├── store.css               # Store page component styling
├── order.css               # Order page and cart sidebar styling
├── background.avif         # High-quality background image (WebP format)
├── deploy.sh               # Production deployment script
├── .gitignore              # Git ignore configuration
└── README.md               # This documentation file
```

### File Size Overview
- HTML Files: ~11-18 KB each (minimal, semantic markup)
- JavaScript: ~2-17 KB (vanilla JS, no dependencies)
- CSS: ~10-15 KB each (optimized styling)
- Assets: ~200+ KB (background image, external fonts)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Web Browser** - Any modern browser (Chrome, Firefox, Safari, Edge)
  - Recommended: Chrome/Edge for best compatibility
  - Minimum: ES6 JavaScript support required
- **Python 3** - For running the local development server
  - Python 3.6+ recommended
  - Python 2 supported as fallback
  - Verify with: `python3 --version`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/henghonglee/backhomebrew.git
   cd backhomebrew
   ```

2. **Verify all files are present:**
   ```bash
   ls -la
   # Should show: index.html, store.html, order.html, main.js, store.js,
   # styles.css, store.css, order.css, background.avif, deploy.sh, README.md
   ```

3. **Check file permissions (Linux/Mac):**
   ```bash
   chmod +x deploy.sh  # Make deploy script executable
   ```

### Local Development

Choose one of the following methods to run the application locally:

#### **Option 1: Using the Deployment Script (Recommended)**

The included `deploy.sh` script automatically detects Python 3 or 2 and starts the server:

```bash
./deploy.sh
```

You should see output like:
```
🏠 Back Home Brew - Starting Production Server
📍 Server will be available at: http://localhost:8080
🌐 Network access: http://0.0.0.0:8080
✅ Using Python 3
```

#### **Option 2: Using Python 3 Directly**

```bash
python3 -m http.server 8080
```

Then navigate to: `http://localhost:8080`

#### **Option 3: Using Python 2 (Legacy)**

```bash
python -m SimpleHTTPServer 8080
```

Then navigate to: `http://localhost:8080`

#### **Option 4: Custom Port**

To run on a different port (e.g., port 3000):

```bash
# Using deploy script
PORT=3000 ./deploy.sh

# Or directly with Python 3
python3 -m http.server 3000

# Or directly with Python 2
python -m SimpleHTTPServer 3000
```

#### **Accessing the Application**

Once the server is running, open your browser and visit:
- **Local access:** `http://localhost:8080`
- **Network access:** `http://<your-ip>:8080`
- **Mobile on same network:** `http://<your-ip>:8080`

You should see the Back Home Brew homepage with navigation and hero section.

---

## 📖 Usage Guide

### Navigation

The application features intuitive navigation across all pages:

| Element | Function |
|---------|----------|
| **Logo** | Click "Back Home Brew" logo to return to home page from any page |
| **Nav Links** | Home, Store, Order, Contact - jump to specific sections |
| **Cart Icon** | View shopping cart with item count badge |
| **Mobile Menu** | Hamburger icon (☰) on screens < 768px |
| **Smooth Scroll** | Automatic smooth scrolling to sections |

**Navigation Examples:**
- From home page: Click "Store" to browse products
- From store: Click "Order" to view coffee menu
- From anywhere: Cart icon always visible and accessible
- Mobile: Tap hamburger menu to see navigation options

### Store Page

The store page offers a complete shopping experience for branded merchandise:

#### **Browsing Products**

1. Navigate to the **Store** page
2. View the 6-item product grid
3. Each product card displays:
   - Product image
   - Product name and description
   - Size/color options (dropdown)
   - Price in BTC, sats, and USD
   - "Add to Cart" button

#### **Selecting Options**

Before adding items to cart, select required options:

```
T-Shirt Example:
- Click "Select Size" dropdown
- Choose from: Small, Medium, Large, X-Large, XX-Large
- Price stays the same regardless of size
- Then click "Add to Cart"

Cap Example:
- Click "Select Color" dropdown
- Choose from: Black, Coffee Brown, Cream
- Click "Add to Cart"
```

#### **Adding to Cart**

1. Select all required options from dropdowns
2. Click the "Add to Cart" button (blue button)
3. You'll see a success notification: "Product added to cart!"
4. Cart count badge updates in header

#### **Error Handling**

If you try to add an item without selecting options:
- Error toast appears: "Please select a size" or "Please select a color"
- Item is NOT added to cart
- Must select options and try again

#### **Viewing Bitcoin Information**

Scroll down to "Bitcoin Payments Only" section to learn about:
- 🔒 Secure transactions
- ⚡ Fast processing with Lightning Network
- 🌍 Global accessibility
- Why we accept Bitcoin only

### Order Page

The order page provides a complete coffee ordering experience:

#### **Menu Categories**

The coffee menu is organized into 4 categories:

1. **Espresso Drinks** (default selected)
   - Classic Espresso (single/double shots)
   - Home Brew Latte (12oz/16oz options)
   - Artisan Cappuccino (traditional/large)

2. **Specialty Coffee**
   - Seasonal Blend (rotating offerings)
   - Limited-time specialty options

3. **Cold Brews**
   - Cold Brew Special (24-hour steep)
   - Available in 16oz or 20oz

4. **Fresh Pastries**
   - Butter Croissant
   - Blueberry Muffin
   - Chocolate Chip Scone

#### **Customizing Orders**

Each coffee item has customization options:

```
Latte Example:
1. Select size: 12oz or 16oz
2. Select milk type: Whole Milk, Oat Milk (+$0.50), Almond Milk
3. Price updates if oat milk selected
4. Click "Add to Order"

Cappuccino Example:
1. Select size: Traditional 6oz or Large 8oz
2. Price stays the same for both sizes
3. Click "Add to Order"

Pastry Example:
1. Select type: Croissant, Muffin, or Scone
2. Price adjusts automatically
3. Click "Add to Order"
```

#### **Delivery Options**

At checkout, select your delivery preference:
- 🚗 **Home Delivery** - Free within 3 miles, ~30 minutes
- 📦 **Pickup** - Ready in 10-15 minutes at our location

#### **Reviewing Orders**

1. Click cart icon to open cart sidebar
2. See all items with:
   - Item name and options
   - Price in BTC, sats, and USD
   - Remove button for each item
3. Total shows at bottom in BTC and USD

#### **Proceeding to Checkout**

1. Review your order in the cart sidebar
2. Select delivery method (delivery or pickup)
3. Click "Checkout with Bitcoin"
4. Bitcoin checkout modal appears with:
   - Total amount in BTC and USD
   - Bitcoin wallet address
   - Copy Address button
   - Order summary with all items

### Bitcoin Payments

Back Home Brew uses Bitcoin for all transactions. Here's how it works:

#### **Bitcoin Pricing System**

All items are priced in Bitcoin (BTC) with USD conversion for reference:

**Price Format Example:**
```
0.00015 BTC        # Bitcoin amount (8 decimal places)
15,000 sats        # Satoshi equivalent (1 BTC = 100,000,000 sats)
≈ $4.75            # USD equivalent (reference only)
```

**BTC to Satoshi Conversion:**
- 1 BTC = 100,000,000 satoshis
- 0.00001 BTC = 1,000 sats
- 0.00000001 BTC = 1 sat

#### **Bitcoin Exchange Rate**

The application uses a default BTC to USD exchange rate:
```javascript
const BTC_TO_USD_RATE = 31250; // Example rate
```

**To update the rate:**
1. Edit `store.js` line 6
2. Change the `BTC_TO_USD_RATE` value
3. All prices automatically recalculate
4. Both store and order pages update

Example rate updates:
```javascript
const BTC_TO_USD_RATE = 35000;  // Higher Bitcoin value
const BTC_TO_USD_RATE = 28000;  // Lower Bitcoin value
```

#### **Making a Bitcoin Payment**

1. Add items to cart from Store or Order pages
2. Click cart icon to review order
3. Click "Checkout with Bitcoin"
4. Bitcoin checkout modal shows:
   - Total amount in BTC and USD
   - Bitcoin wallet address: `bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5`
   - Click "Copy Address" to copy to clipboard
5. Send exact BTC amount to the wallet address
6. Email transaction ID to `orders@backhomebrew.com`
7. Order is confirmed upon payment verification

#### **Bitcoin Wallet Information**

Current Bitcoin Wallet Address:
```
bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5
```

**To update the wallet address:**
1. Edit `store.js` (two locations):
   - Line 343 (checkout summary)
   - Line 389 (checkout modal)
2. Edit `index.html`:
   - Contact section with payment details

#### **Benefits of Bitcoin**

- 🔒 **Secure** - Decentralized, encrypted transactions
- ⚡ **Fast** - Quick processing with Lightning Network
- 🌍 **Global** - No borders, no traditional banking limits
- 📊 **Transparent** - Immutable transaction record

### Cart Management

The unified shopping cart is the core of the ordering system:

#### **Cart Features**

| Feature | Description |
|---------|-------------|
| **Cross-Page Sync** | Items persist when navigating between pages |
| **Real-Time Updates** | Total and count update instantly |
| **Item Details** | Name, options, price in BTC/sats/USD |
| **Quick Remove** | Remove button on each item |
| **Persistent** | Stays intact until checkout or page refresh |

#### **Adding Items**

**From Store Page:**
1. Select size/color from dropdown
2. Click "Add to Cart" button
3. Success notification appears
4. Cart count increments
5. Options reset for next selection

**From Order Page:**
1. Select size/milk/pastry type from dropdowns
2. Click "Add to Order" button
3. Success notification appears
4. Cart count increments
5. Options reset for next selection

#### **Viewing Cart**

1. Click cart icon (bag) in header at top-right
2. Cart sidebar slides in from right
3. Shows:
   - All items with images and descriptions
   - Size/color/milk options for each item
   - Price breakdown in BTC, sats, USD
   - Total at bottom
4. Click overlay or close button to close

#### **Removing Items**

1. Open cart sidebar
2. Find item you want to remove
3. Click "Remove" button next to item
4. Item disappears immediately
5. Total updates automatically
6. Cart count decrements

#### **Price Calculations**

Cart automatically calculates:
- **Individual Item Price** - BTC + USD equivalent
- **Subtotal** - Sum of all item prices
- **Total BTC** - Displayed with 4 decimal places
- **Total USD** - Displayed with 2 decimal places
- **Satoshi Conversion** - Automatic BTC to sats

**Calculation Example:**
```
Item 1: 0.00015 BTC ($4.75)
Item 2: 0.0007 BTC  ($22.00)
Item 3: 0.00008 BTC ($2.50)
─────────────────────────────
Total:  0.00093 BTC ($29.25)
Sats:   93,000 sats
```

#### **Persistent Cart (Session)**

**Important:** Cart is stored in browser memory during session
- Survives page navigation
- Clears on page refresh
- Clears after checkout completion
- Clears when browser is closed

**To maintain cart data across sessions:**
- Would require backend server or local storage implementation
- Current version uses in-memory JavaScript array

### Responsive Design

The application is fully responsive and optimized for all devices:

#### **Mobile Devices (< 768px)**

**Layout Changes:**
- Single-column layout for all sections
- Stack navigation links vertically
- Hamburger menu for navigation (☰)
- Touch-optimized buttons and links
- Full-width product cards
- Larger font sizes for readability

**Mobile Features:**
- Swipe-friendly cart sidebar
- Touch-friendly form inputs
- Responsive grid layout
- Optimized images for mobile
- Fast loading on slower connections

**Mobile Menu:**
- Tap hamburger icon (☰) to open
- Shows all navigation links
- Close by tapping link or outside
- Smooth slide-in/out animation

#### **Tablet Devices (768px - 1024px)**

**Layout Changes:**
- Two-column layouts where appropriate
- Balanced spacing and font sizes
- Navigation links visible with some wrapping
- Product grid with 2-3 columns
- Touch-optimized interactions

#### **Desktop Devices (> 1024px)**

**Layout Features:**
- Full horizontal navigation menu
- Multi-column product grids
- Spacious layout with adequate padding
- Optimized for mouse interactions
- Full-width sections with containers

#### **CSS Media Queries**

Main breakpoints used throughout stylesheets:

```css
/* Mobile First Approach */
/* Mobile styles (default) */

/* Tablet and above */
@media (min-width: 768px) {
  /* Tablet-specific styles */
}

/* Large screens */
@media (min-width: 1024px) {
  /* Desktop-specific styles */
}
```

#### **Responsive Features**

- **Flexible Containers** - Use max-width and padding
- **Fluid Typography** - Font sizes scale appropriately
- **Flexible Images** - max-width: 100% for responsiveness
- **Flexbox Layout** - For flexible component layouts
- **CSS Grid** - For product grids
- **Viewport Meta Tag** - Proper device scaling

#### **Testing Responsive Design**

1. **Browser DevTools:**
   - Chrome/Edge: F12 → Toggle device toolbar
   - Firefox: F12 → Responsive Design Mode
   - Safari: Develop → Enter Responsive Design Mode

2. **Test Screen Sizes:**
   - Mobile: 320px, 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1280px, 1440px, 1920px

3. **Test Interactions:**
   - Tap buttons and links
   - Scroll through pages
   - Resize window dynamically
   - Test hamburger menu

---

## 💻 Technologies

### Frontend Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| **HTML5** | 5.2+ | Semantic markup, structure |
| **CSS3** | Latest | Styling, animations, responsive design |
| **JavaScript** | ES6+ | DOM manipulation, interactivity, cart logic |
| **Python** | 3.6+ | Local development HTTP server |

### JavaScript Libraries & APIs

- **No external dependencies** - Pure vanilla JavaScript
- **DOM API** - Element selection and manipulation
- **Fetch API** - Ready for future API integration
- **Local Storage API** - Potential for data persistence
- **Clipboard API** - Bitcoin address copying

### External Resources

- **Google Fonts** - Raleway and Inter typefaces
  - Font weights: 300, 400, 500, 600, 700
  - Optimized with font-display: swap
- **Pexels & Unsplash** - Stock photography
- **Bootstrap Icons** - SVG icons (shopping bag)

### Development Tools

- **Git** - Version control
- **Text Editor** - Any editor (VS Code recommended)
- **Browser DevTools** - Debugging and inspection
- **Python HTTP Server** - Local development

### Project Statistics

- **Total Files** - 12 (3 HTML, 2 JS, 3 CSS, 1 asset, 3 config)
- **HTML Lines** - ~900 (11, 18, 18 per file)
- **CSS Lines** - ~1,400 total (semantic, DRY)
- **JavaScript Lines** - ~700 total (well-commented, modular)
- **Total Size** - ~50 KB (without images)

### Browser Engine Support

- **Chromium** - Full support (Chrome, Edge, Opera)
- **WebKit** - Full support (Safari, Mobile Safari)
- **Gecko** - Full support (Firefox)
- **Blink** - Full support (Chrome Mobile, Opera Mobile)

---

## 🌐 Deployment

### Production Deployment

#### **Using the Deploy Script**

The `deploy.sh` script is the recommended way to deploy:

```bash
./deploy.sh
```

**What the script does:**
1. Detects Python installation (3 or 2)
2. Sets default PORT to 8080
3. Sets default HOST to 0.0.0.0 (accessible from any interface)
4. Starts HTTP server on specified port
5. Displays access URLs

**Expected output:**
```
🏠 Back Home Brew - Starting Production Server
📍 Server will be available at: http://localhost:8080
🌐 Network access: http://0.0.0.0:8080
✅ Using Python 3
```

#### **Custom Configuration**

**Change port and host:**
```bash
PORT=3000 HOST=localhost ./deploy.sh
```

**Common configurations:**
```bash
# Production (accessible from network)
PORT=8080 HOST=0.0.0.0 ./deploy.sh

# Local testing only
PORT=8080 HOST=localhost ./deploy.sh

# Custom port
PORT=5000 ./deploy.sh

# Different host and port
PORT=3000 HOST=192.168.1.100 ./deploy.sh
```

#### **Direct Python Commands**

**Python 3 (Recommended):**
```bash
python3 -m http.server 8080 --bind 0.0.0.0
```

**Python 2 (Legacy):**
```bash
python -m SimpleHTTPServer 8080
```

#### **Running in Background (Linux/Mac)**

```bash
# Run with nohup
nohup ./deploy.sh &

# Or with screen
screen -S backhomebrew ./deploy.sh

# Or with tmux
tmux new-session -d -s backhomebrew ./deploy.sh

# List running sessions
ps aux | grep deploy.sh
```

#### **Running in Background (Windows)**

```batch
# Using start command
start cmd /k deploy.sh

# Or directly with Python
start python3 -m http.server 8080
```

### Environment Variables

Configure server behavior with environment variables:

| Variable | Default | Description | Example |
|----------|---------|-------------|---------|
| `PORT` | 8080 | Server port number | `PORT=3000` |
| `HOST` | 0.0.0.0 | Bind address (0.0.0.0 = all interfaces) | `HOST=localhost` |

**Setting variables:**

*Linux/Mac (Bash):*
```bash
export PORT=3000
export HOST=localhost
./deploy.sh
```

*Linux/Mac (One-liner):*
```bash
PORT=3000 HOST=localhost ./deploy.sh
```

*Windows (CMD):*
```batch
set PORT=3000
set HOST=localhost
python3 -m http.server %PORT%
```

*Windows (PowerShell):*
```powershell
$env:PORT = 3000
python3 -m http.server 3000
```

### Server Requirements

#### **Hardware Requirements**

| Aspect | Minimum | Recommended |
|--------|---------|------------|
| **RAM** | 512 MB | 1+ GB |
| **Disk Space** | 100 MB | 1+ GB |
| **CPU** | Single core | Dual core+ |
| **Network** | 1 Mbps | 10+ Mbps |

#### **Software Requirements**

- **Python 3.6+** (preferred) or Python 2.7+
- **Modern Web Browser** (with ES6 support)
- **File Permissions** - Deploy script must be executable

**Verify Python Installation:**
```bash
# Check Python 3
python3 --version

# Check Python 2
python --version

# Check pip (for future extensions)
pip3 --version
```

#### **Port Requirements**

The application needs an open port:

**Linux/Mac - Check if port is in use:**
```bash
# Check port 8080
lsof -i :8080

# Kill process using port 8080
kill -9 <PID>

# Or use a different port
PORT=3000 ./deploy.sh
```

**Windows - Check if port is in use:**
```batch
# Check port 8080
netstat -ano | findstr :8080

# Kill process using port
taskkill /PID <PID> /F

# Or use a different port
set PORT=3000 && python -m http.server 3000
```

#### **Firewall Configuration**

If accessing from external network:
1. Open the port in firewall settings
2. For production, use PORT 80 or 443 (may need admin)
3. Consider reverse proxy (Nginx, Apache) for HTTPS

**Linux Firewall (ufw):**
```bash
sudo ufw allow 8080
sudo ufw allow 8080/tcp
```

**macOS Firewall:**
- System Preferences → Security & Privacy → Firewall Options
- Allow incoming connections on port 8080

#### **Network Access**

**Local machine only:**
```
http://localhost:8080
http://127.0.0.1:8080
```

**Same network (LAN):**
```
http://<your-ip>:8080
# Example: http://192.168.1.100:8080
```

**Find your IP:**
```bash
# Linux/Mac
ifconfig

# Windows
ipconfig

# Or common way
hostname -I  # Linux
```

---

## 📂 File Structure & Descriptions

### HTML Pages

#### **index.html** (Main Landing Page)
- **Lines:** ~240
- **Size:** ~11 KB
- **Purpose:** Homepage with hero section, about, menu preview, testimonials, contact form
- **Key Sections:**
  - Navigation header with cart
  - Hero section with CTA buttons
  - About section with features
  - Featured menu items
  - Customer testimonials
  - Contact section with form
  - Footer with social links
- **Scripts:** Includes main.js and store.js
- **Styles:** Links to styles.css

**Content Breakdown:**
1. `<header>` - Navigation bar with logo and links
2. `<main>` - Hero, about, menu, testimonials sections
3. `<footer>` - Copyright and social info
4. `#cart-sidebar` - Shopping cart sidebar (shared)
5. `<script>` - JavaScript for functionality

#### **store.html** (Merchandise Store)
- **Lines:** ~300
- **Size:** ~15 KB
- **Purpose:** Product catalog for branded merchandise
- **Key Sections:**
  - Store hero with Bitcoin badge
  - Product grid (6 items)
  - Product cards with options
  - Bitcoin information section
  - Shopping cart sidebar
- **Products:** 6 merchandise items with sizes/colors
- **Styles:** Links to styles.css and store.css

**Featured Products:**
- T-Shirt ($25 / 0.0008 BTC)
- Cap ($20 / 0.0006 BTC)
- Coffee Cup ($15 / 0.0005 BTC)
- Hoodie ($65 / 0.002 BTC)
- Messenger Bag ($45 / 0.0015 BTC)
- Tumbler ($22 / 0.0007 BTC)

#### **order.html** (Coffee Ordering)
- **Lines:** ~345
- **Size:** ~18 KB
- **Purpose:** Coffee menu and order management
- **Key Sections:**
  - Order hero with Bitcoin badge
  - Coffee menu with categories
  - Category buttons (Espresso, Specialty, Cold, Pastries)
  - Coffee cards with options
  - Delivery information
  - Shopping cart sidebar
- **Coffee Items:** 7+ coffee drinks with options
- **Styles:** Links to styles.css, store.css, order.css

**Coffee Menu Breakdown:**
1. Espresso Drinks (3 items)
2. Specialty Coffee (1-2 items)
3. Cold Brews (1-2 items)
4. Fresh Pastries (1 item with 3 options)

### JavaScript Files

#### **main.js** (Core Functionality)
- **Lines:** ~70
- **Size:** ~2.4 KB
- **Purpose:** Navigation, mobile menu, and core page functionality
- **Key Functions:**
  - `toggleMobileMenu()` - Show/hide mobile navigation
  - `closeMobileMenu()` - Close mobile menu
  - Scroll-spy for active link highlighting
  - Click outside detection for menu close

**Features:**
- Mobile menu toggle with hamburger icon
- Sync cart count between desktop and mobile
- Active link highlighting on scroll
- Close menu when clicking outside
- Smooth navigation experience

**DOM Elements Used:**
- `.mobile-menu` - Mobile navigation container
- `.mobile-menu-toggle` - Hamburger button
- `.nav-links a[href^="index.html#"]` - Navigation links
- `#cart-count`, `#mobile-cart-count` - Cart badges

#### **store.js** (Cart & Checkout)
- **Lines:** ~534
- **Size:** ~17.5 KB
- **Purpose:** Unified cart system, notifications, and checkout
- **Key Functions:**
  - `addToCart()` - Add merchandise items to cart
  - `addToOrder()` - Add coffee orders to cart
  - `removeFromCart()` - Remove items
  - `updateCartUI()` - Refresh cart display
  - `checkout()` - Initiate Bitcoin payment
  - `showToast()` - Display notifications
  - `showCategory()` - Switch menu categories

**Core Features:**
- Unified cart for products and orders
- Toast notification system
- Bitcoin price conversion
- Checkout modal with Bitcoin address
- Category switching on order page
- BTC to satoshi conversion
- Form validation
- Click-outside detection

**Global Variables:**
```javascript
let cart = [];              // Shopping cart array
let isCartOpen = false;     // Cart sidebar state
const BTC_TO_USD_RATE = 31250;  // Exchange rate
```

**Validation:**
- Required size selection
- Required color selection
- Required pastry type selection
- Error handling with toast notifications

### Stylesheets

#### **styles.css** (Global Styling)
- **Lines:** ~500+
- **Size:** ~15 KB
- **Purpose:** Global styles, layout, typography, color scheme
- **Key Features:**
  - CSS custom properties (--primary-color, etc.)
  - Responsive grid and flex layouts
  - Typography (Raleway, Inter fonts)
  - Color scheme and animations
  - Header and footer styles
  - Form styling

**CSS Variables (Color Scheme):**
```css
--primary-color: #8B4513;      /* Brown */
--secondary-color: #A0522D;    /* Darker brown */
--accent-color: #FFF5E1;       /* Beige */
--text-dark: #1a1a1a;          /* Dark gray */
--text-light: #666666;         /* Light gray */
--border-color: #e0e0e0;       /* Light border */
```

**Layout Components:**
- `.header` - Navigation bar with sticky positioning
- `.nav` - Navigation container
- `.container` - Max-width content wrapper
- `.hero` - Large hero sections
- `.footer` - Page footer

**Responsive Features:**
- Mobile-first design
- Breakpoint at 768px (tablet)
- Breakpoint at 1024px (desktop)
- Flexible typography
- Touch-friendly spacing

#### **store.css** (Store Page)
- **Lines:** ~350+
- **Size:** ~10 KB
- **Purpose:** Store-specific styling
- **Key Components:**
  - `.store-hero` - Store page hero
  - `.products-grid` - Product grid layout
  - `.product-card` - Individual product cards
  - `.bitcoin-badge` - Bitcoin indicator
  - `.bitcoin-info` - Bitcoin education section

**Product Card Styling:**
- Image container with aspect ratio
- Product info section
- Options dropdowns
- Price display (BTC, sats, USD)
- Add to cart button

**Grid Layout:**
- 3-column on desktop
- 2-column on tablet
- 1-column on mobile
- Responsive gaps and padding

#### **order.css** (Order Page & Cart)
- **Lines:** ~400+
- **Size:** ~9.5 KB
- **Purpose:** Order page and cart sidebar styling
- **Key Components:**
  - `.order-hero` - Order page header
  - `.coffee-menu` - Menu container
  - `.menu-category` - Category sections
  - `.coffee-card` - Coffee item cards
  - `#cart-sidebar` - Sliding cart sidebar
  - `.cart-items` - Items list
  - `.checkout-modal` - Checkout popup

**Cart Sidebar Features:**
- Smooth slide-in from right (transform: translateX)
- Overlay for focus
- Header with close button
- Scrollable items list
- Footer with total and checkout button
- Responsive width adjustments

**Coffee Menu:**
- Category button styling
- Active category highlighting
- Grid layout for coffee items
- Coffee card with image and info
- Option selectors for customization

### Assets

#### **background.avif** (Background Image)
- **Size:** ~216 KB
- **Format:** AVIF (modern, optimized)
- **Dimensions:** Variable (responsive)
- **Purpose:** Hero section background
- **Usage:** CSS background-image in hero sections
- **Fallback:** Standard image loading

**Location:** Hero sections on index.html

---

## 🛠️ Development Guide

### Adding Features

#### **Add a New Product to Store**

1. **Add product data** in the store section of `store.html`:
   ```html
   <div class="product-card" data-product="new-product">
       <div class="product-image">
           <img src="image-url" alt="Product Name">
       </div>
       <div class="product-info">
           <h3>Product Name</h3>
           <p>Product description here</p>
           <div class="product-options">
               <select class="size-select">
                   <option value="">Select Size</option>
                   <option value="S">Small</option>
                   <option value="M">Medium</option>
                   <option value="L">Large</option>
               </select>
           </div>
           <div class="product-price">
               <span class="btc-price">0.0010 BTC</span>
               <span class="sats-price">100,000 sats</span>
               <span class="usd-price">≈ $31.25</span>
           </div>
           <button class="add-to-cart" onclick="addToCart('new-product', 'Product Name', 0.0010, 31.25)">Add to Cart</button>
       </div>
   </div>
   ```

2. **Calculate Bitcoin price** using BTC_TO_USD_RATE:
   - USD Price ÷ BTC_TO_USD_RATE = BTC Price
   - Example: $31.25 ÷ 31250 = 0.001 BTC

3. **Update styles** if needed in `store.css`

4. **Test in browser:**
   - Navigate to store page
   - Select options
   - Add to cart
   - Verify price calculation

#### **Add a New Coffee Item**

1. **Add coffee card** in `order.html`:
   ```html
   <div class="coffee-card">
       <div class="coffee-visual">
           <img src="image-url" alt="Coffee Name">
       </div>
       <div class="coffee-info">
           <h3>Coffee Item Name</h3>
           <p>Description of coffee drink</p>
           <div class="coffee-options">
               <label class="option-group">
                   <span>Size:</span>
                   <select class="size-select">
                       <option value="small">Small</option>
                       <option value="large">Large</option>
                   </select>
               </label>
           </div>
           <div class="pricing">
               <span class="btc-price">0.00015 BTC</span>
               <span class="sats-price">15,000 sats</span>
               <span class="usd-price">≈ $4.69</span>
           </div>
           <button class="add-to-order" onclick="addToOrder('coffee-id', 'Coffee Item Name', 0.00015, 4.69)">Add to Order</button>
       </div>
   </div>
   ```

2. **Create new category** if needed:
   ```html
   <div class="menu-category" id="new-category">
       <div class="coffee-grid">
           <!-- Add coffee cards here -->
       </div>
   </div>
   ```

3. **Add category button**:
   ```html
   <button class="category-btn" onclick="showCategory('new-category')">Category Name</button>
   ```

4. **Update `store.js`** if special pricing logic needed

### Customizing Styling

#### **Update Colors**

Colors are defined in `styles.css` as CSS custom properties:

```css
:root {
    --primary-color: #8B4513;      /* Change brown */
    --secondary-color: #A0522D;    /* Change darker brown */
    --accent-color: #FFF5E1;       /* Change beige background */
    --text-dark: #1a1a1a;          /* Change text color */
    --text-light: #666666;         /* Change light text */
}
```

**Update colors:**
1. Edit `styles.css` :root selector
2. Change hex color values
3. All elements using --primary-color, etc. update automatically
4. Test across all pages

#### **Change Fonts**

Fonts are imported from Google Fonts in HTML head:

```html
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**Update fonts:**
1. Visit https://fonts.google.com
2. Select new fonts with desired weights
3. Copy import link
4. Replace in HTML files
5. Update CSS font-family rules

#### **Adjust Spacing**

Modify padding and margins in respective CSS files:

```css
/* Increase product card padding */
.product-card {
    padding: 20px;  /* Change value */
}

/* Adjust section margins */
section {
    margin: 60px 0;  /* Change value */
}
```

#### **Modify Typography**

Update font sizes in CSS:

```css
h1 { font-size: 2.5rem; }  /* Increase heading size */
p { font-size: 1rem; }      /* Adjust paragraph size */
```

### Bitcoin Rate Configuration

The Bitcoin to USD exchange rate can be updated to reflect market changes:

#### **Update Exchange Rate**

File: `store.js` (Line 6)

```javascript
// Current rate (March 2026)
const BTC_TO_USD_RATE = 31250;

// Update example (if Bitcoin is $40,000)
const BTC_TO_USD_RATE = 40000;

// Update example (if Bitcoin is $25,000)
const BTC_TO_USD_RATE = 25000;
```

**All prices automatically recalculate:**
- Store product prices
- Order menu prices
- Cart totals
- Checkout summary

**Market Research:**
- CoinMarketCap.com
- CoinGecko.com
- BlockChain.com
- Your preferred exchange

#### **Implementing Dynamic Rate (Advanced)**

For real-time Bitcoin prices, implement an API call:

```javascript
// Fetch from CoinGecko API (free, no auth required)
async function updateBTCRate() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const BTC_TO_USD_RATE = data.bitcoin.usd;

        // Recalculate all prices
        updateCartUI();

        console.log(`Updated BTC rate: $${BTC_TO_USD_RATE}`);
    } catch (error) {
        console.error('Error fetching Bitcoin rate:', error);
    }
}

// Call on page load
updateBTCRate();

// Update every 60 seconds
setInterval(updateBTCRate, 60000);
```

**Integration Steps:**
1. Add function to `store.js`
2. Call on DOMContentLoaded
3. Set interval for updates
4. Add error handling
5. Update cart display when rate changes

---

## 🌐 Browser Compatibility

### Supported Browsers

| Browser | Version | Desktop | Mobile | Status |
|---------|---------|---------|--------|--------|
| **Chrome** | Latest | ✅ Full | ✅ Full | Recommended |
| **Firefox** | Latest | ✅ Full | ✅ Full | Supported |
| **Safari** | Latest | ✅ Full | ✅ Full | Supported |
| **Edge** | Latest | ✅ Full | ✅ Full | Recommended |
| **Opera** | Latest | ✅ Full | ✅ Full | Supported |
| **IE 11** | - | ❌ No | - | Not supported |

### Feature Support Matrix

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| **ES6 JavaScript** | ✅ | ✅ | ✅ | ✅ |
| **CSS Grid** | ✅ | ✅ | ✅ | ✅ |
| **CSS Flexbox** | ✅ | ✅ | ✅ | ✅ |
| **CSS Variables** | ✅ | ✅ | ✅ | ✅ |
| **Fetch API** | ✅ | ✅ | ✅ | ✅ |
| **LocalStorage** | ✅ | ✅ | ✅ | ✅ |
| **Clipboard API** | ✅ | ✅ | ✅ | ✅ |
| **Responsive Images** | ✅ | ✅ | ✅ | ✅ |

### Mobile Device Support

- **iOS Safari** - 12+ (Full support)
- **Chrome Mobile** - Latest (Full support)
- **Firefox Mobile** - Latest (Full support)
- **Samsung Internet** - Latest (Full support)
- **Opera Mobile** - Latest (Full support)

### Testing Compatibility

**Using Browser DevTools:**
```
1. Press F12 to open DevTools
2. Click toggle device toolbar icon
3. Select device from dropdown
4. Test navigation and functionality
```

**Test Devices:**
- iPhone SE (375px)
- iPhone 12 (390px)
- iPhone 14 Pro Max (430px)
- iPad (768px)
- iPad Pro (1024px)
- Desktop (1440px, 1920px)

---

## 🔧 Troubleshooting

### Server Issues

#### **Error: "Python is not installed"**

**Solution:**
```bash
# Install Python 3 (recommended)
# macOS
brew install python3

# Ubuntu/Debian
sudo apt-get install python3

# Windows
# Download from https://www.python.org/downloads/

# Verify installation
python3 --version

# Then run deploy.sh
./deploy.sh
```

#### **Error: "Address already in use"**

**Solution - Change port:**
```bash
# Run on different port
PORT=3000 ./deploy.sh
PORT=5000 ./deploy.sh
PORT=8000 ./deploy.sh

# Or find and stop existing process
# Linux/Mac
lsof -i :8080
kill -9 <PID>

# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

#### **Server doesn't start**

**Troubleshooting steps:**
1. Check Python is installed: `python3 --version`
2. Check port is available: `lsof -i :8080`
3. Check file permissions: `chmod +x deploy.sh`
4. Check all files exist in directory: `ls -la`
5. Try direct Python command: `python3 -m http.server 8080`

### Navigation & Page Issues

#### **Pages not loading**

**Troubleshooting:**
1. **Check server is running**
   - Terminal should show HTTP server running
   - Try accessing http://localhost:8080

2. **Check file structure**
   - All .html files should be in same directory
   - `index.html`, `store.html`, `order.html` must exist
   - JavaScript and CSS files must be present

3. **Check file paths**
   - Open DevTools (F12) → Console tab
   - Look for 404 errors on files
   - Check HTML file links are correct

4. **Clear browser cache**
   - Ctrl+Shift+Delete (Windows/Linux)
   - Cmd+Shift+Delete (Mac)
   - Or open DevTools → Application → Clear storage

#### **Navigation links not working**

**Solution:**
1. Check file paths in HTML
2. Verify all files exist in root directory
3. Check for typos in file names
4. Refresh page and try again

### Cart & Checkout Issues

#### **Cart not updating**

**Troubleshooting:**
1. **Clear browser cache**
   - Ctrl+Shift+Delete (Windows)
   - Cmd+Shift+Delete (Mac)
   - Or open settings and clear cache

2. **Check console for errors**
   - Press F12 to open DevTools
   - Click Console tab
   - Look for red error messages
   - Note any error details

3. **Reload page**
   - Ctrl+R or Cmd+R
   - Or click refresh button

4. **Check JavaScript is enabled**
   - Settings → Privacy → JavaScript enabled

#### **Items not adding to cart**

**Troubleshooting:**
1. **Check required options selected**
   - Must select size for shirts/hoodies
   - Must select color for caps/cups
   - Error message should appear if missing

2. **Check browser console**
   - F12 → Console tab
   - Look for validation errors

3. **Try different item**
   - See if problem is specific to one product

4. **Check cart sidebar**
   - Click cart icon (bag)
   - Verify previous items are there

#### **Price calculation incorrect**

**Troubleshooting:**
1. **Check BTC_TO_USD_RATE**
   - Edit `store.js` line 6
   - Verify rate is correct
   - Default: 31250 (1 BTC = $31,250)

2. **Recalculate manually**
   - USD Price ÷ BTC Rate = BTC Price
   - Example: $25 ÷ 31,250 = 0.0008 BTC

3. **Check product prices**
   - Verify prices in HTML files
   - Look for typos in BTC amounts

4. **Reload page**
   - Prices should update automatically
   - If not, try clearing cache

### Mobile Issues

#### **Mobile menu not working**

**Troubleshooting:**
1. **Hamburger menu not appearing**
   - Should appear on screens < 768px
   - Check breakpoint in CSS

2. **Menu won't open/close**
   - F12 → Console → Look for errors
   - Verify JavaScript is enabled

3. **Menu styling issues**
   - Check `styles.css` for media queries
   - Verify mobile breakpoint at 768px

#### **Responsive design not working**

**Troubleshooting:**
1. **Check viewport meta tag**
   - Should be in HTML `<head>`:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Test with browser DevTools**
   - F12 → Toggle device toolbar
   - Select mobile device
   - Test responsiveness

3. **Check CSS media queries**
   - Verify breakpoints in CSS files
   - Default: 768px and 1024px

4. **Clear cache**
   - Ctrl+Shift+Delete
   - Reload page

### JavaScript Errors

#### **Console errors appearing**

**Troubleshooting:**
1. **Read error message carefully**
   - Note file name and line number
   - Copy error text

2. **Check file exists**
   - Verify `main.js`, `store.js` exist
   - Check file names match HTML imports

3. **Check syntax**
   - Look for missing commas, semicolons
   - Verify closing braces

4. **Check browser compatibility**
   - Ensure using modern browser
   - Check JavaScript version (ES6+)

### Bitcoin Payment Issues

#### **Bitcoin address not copying**

**Troubleshooting:**
1. **Check Clipboard API support**
   - Modern browsers should support it
   - Try manual copy (Ctrl+C)

2. **Check address format**
   - Should be: `bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5`
   - If different, update in `store.js`

3. **Try different browser**
   - Test in Chrome, Firefox, Safari

#### **Checkout modal not appearing**

**Troubleshooting:**
1. **Check cart not empty**
   - Must have items in cart
   - Click cart icon to verify

2. **Check browser console**
   - F12 → Console
   - Look for JavaScript errors

3. **Verify store.js loaded**
   - Check network tab
   - store.js should be downloaded

### Performance Issues

#### **Site loading slowly**

**Optimization tips:**
1. **Check connection speed**
   - Test on fast WiFi
   - Check browser DevTools Network tab

2. **Compress images**
   - background.avif is ~216 KB
   - Consider further optimization

3. **Minimize JavaScript**
   - Currently ~17 KB unminified
   - Could be minified for faster loading

4. **Use browser caching**
   - Deploy script already serves static files

### Getting Help

If you can't resolve an issue:

1. **Check console for error codes**
   - F12 → Console tab
   - Copy full error message

2. **Check file structure**
   - Run: `ls -la` (Linux/Mac) or `dir` (Windows)
   - Verify all files are present

3. **Test in different browser**
   - Chrome, Firefox, Safari
   - Isolate browser-specific issues

4. **Search error message online**
   - Many common issues have solutions
   - Check StackOverflow, GitHub Issues

5. **Contact support**
   - Open GitHub issue
   - Include browser version
   - Include error message
   - Include steps to reproduce

---

## 🤝 Contributing Guidelines

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork the repository**
   ```bash
   # On GitHub, click "Fork"
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/backhomebrew.git
   cd backhomebrew
   ```

3. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # Examples:
   # feature/add-new-product
   # feature/improve-mobile-design
   # fix/cart-sync-issue
   ```

4. **Make changes**
   - Edit files as needed
   - Test thoroughly
   - Follow existing code style

5. **Commit changes**
   ```bash
   git add .
   git commit -m "Add your descriptive commit message"
   # Examples:
   # "Add new matcha latte to order menu"
   # "Fix responsive design on iPad"
   # "Update Bitcoin exchange rate to $40k"
   ```

6. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create Pull Request**
   - Go to GitHub repository
   - Click "Compare & Pull Request"
   - Describe your changes
   - Submit PR

### Code Style Guidelines

#### **HTML**
- Use semantic HTML5 tags
- Indent with 4 spaces
- Use meaningful class names
- Validate HTML structure

#### **CSS**
- Use CSS custom properties for colors
- Mobile-first approach
- Organize by component
- Add comments for complex sections

#### **JavaScript**
- Use meaningful variable names
- Add comments for functions
- Avoid global variables (use let/const)
- Test functionality before submitting

### Testing Checklist

Before submitting PR, test:

- [ ] All pages load correctly
- [ ] Navigation works on desktop
- [ ] Navigation works on mobile
- [ ] Cart functionality works
- [ ] Add to cart works
- [ ] Remove from cart works
- [ ] Prices calculate correctly
- [ ] Checkout works
- [ ] Mobile menu works
- [ ] No console errors
- [ ] Responsive on all screen sizes
- [ ] Bitcoin address copies correctly

### Documentation

- Update README.md if adding features
- Add comments to complex code
- Document new functions
- Update file structure if needed

### Types of Contributions

**Bug Fixes:**
- Describe the bug
- Explain the fix
- Include testing steps

**Feature Additions:**
- Describe new feature
- Explain use case
- Include design/UI changes

**Improvements:**
- Performance optimizations
- Code cleanup
- Documentation improvements

**Questions/Discussions:**
- Open GitHub issue
- Tag with "question" label
- Describe your question

### Commit Message Guidelines

Use clear, descriptive commit messages:

```
Good:
- "Add seasonal menu items to order page"
- "Fix cart sync between pages"
- "Update Bitcoin rate to $40k"
- "Improve mobile navigation UX"

Avoid:
- "Fix bugs"
- "Update code"
- "Changes"
- "Final version"
```

### Code Review Process

1. **Submit PR** - With clear description
2. **Code review** - Maintainers review changes
3. **Address feedback** - Make requested changes
4. **Approval** - PR approved by maintainers
5. **Merge** - Changes merged to main branch

---

## 📧 Contact & Support

### Getting Help

**For questions about Back Home Brew:**
1. **Email:** hello@backhomebrew.com
2. **Phone:** (555) 123-BREW
3. **GitHub Issues:** [backhomebrew/issues](https://github.com/henghonglee/backhomebrew/issues)

### Business Hours

- **Monday - Friday:** 7:00 AM - 3:00 PM
- **Saturday - Sunday:** 8:00 AM - 4:00 PM

### Location

```
Back Home Brew
123 Cozy Street
Hometown, ST 12345
```

### Bitcoin Payments

**Order inquiries and Bitcoin transaction support:**
- Email: orders@backhomebrew.com
- Bitcoin Address: bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5

### Social Media

**Follow us:**
- 📱 Instagram: @backhomebrew
- 🐦 Twitter: @backhomebrew
- 📘 Facebook: Back Home Brew
- 🔗 LinkedIn: Back Home Brew

### Bug Reports

Found a bug? Report it:

1. **Check existing issues** - Avoid duplicates
2. **Open new issue** on GitHub
3. **Include details:**
   - Browser and version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Feature Requests

Have an idea? Suggest it:

1. **Open GitHub issue** with "enhancement" label
2. **Describe feature** and use case
3. **Provide mockups** if applicable
4. **Discuss implementation** with maintainers

---

## 📜 License

This project is open source. Please see the LICENSE file in the repository for specific license information.

---

## 🎉 Acknowledgments

Built with ❤️ and lots of coffee by the Back Home Brew team.

**Technologies Used:**
- HTML5 & CSS3
- Vanilla JavaScript (ES6+)
- Python HTTP Server
- Google Fonts
- Bitcoin

**Resources:**
- Pexels & Unsplash (stock photography)
- CoinGecko (Bitcoin data)
- Bootstrap Icons (SVG icons)

---

## 📊 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Mar 2026 | Initial release with store and order pages |
| 1.0.1 | Mar 2026 | Enhanced README with comprehensive documentation |

---

## 🚀 Roadmap

**Planned Features:**
- [ ] Real-time Bitcoin price API integration
- [ ] User accounts and order history
- [ ] Email notifications for orders
- [ ] Admin dashboard
- [ ] Loyalty program
- [ ] Review/rating system
- [ ] Store locator
- [ ] Newsletter subscription
- [ ] Dark mode theme
- [ ] Multi-language support

**Technical Improvements:**
- [ ] Progressive Web App (PWA)
- [ ] Service worker for offline support
- [ ] Performance optimization
- [ ] SEO enhancement
- [ ] Analytics integration

---

**Last Updated:** March 18, 2026

**Built with ❤️ for Back Home Brew**

For questions or support, please visit our website or open a GitHub issue.
