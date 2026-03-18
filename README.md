# Back Home Brew ☕

<div align="center">

[![Bitcoin](https://img.shields.io/badge/Bitcoin-Accepted-orange?logo=bitcoin)](https://bitcoin.org)
[![License](https://img.shields.io/badge/License-Open%20Source-blue)](#license)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)](#)

A modern, responsive website for a home-based coffee shop featuring a beautiful storefront, product catalog, and online ordering system with **Bitcoin-only payments**.

[Live Demo](#deployment) • [Getting Started](#getting-started) • [Products](#products) • [Documentation](#usage-guide)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Products](#products)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage Guide](#usage-guide)
- [Technologies](#technologies)
- [Bitcoin Payment System](#bitcoin-payment-system)
- [Deployment](#deployment)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Future Plans](#future-plans)
- [License](#license)

---

## 📖 Overview

**Back Home Brew** is a single-page web application designed to showcase a home-based coffee business. It provides customers with an intuitive interface to browse the menu, explore the store, and place orders online. The site is fully responsive and optimized for both desktop and mobile devices.

The project emphasizes **Bitcoin-only payments**, aligning with the philosophy of decentralized, censorship-resistant commerce. All products are priced in Bitcoin with convenient satoshi (sats) and USD reference prices.

### Key Highlights

- ☕ Premium coffee merchandise and branded items
- ₿ Bitcoin-only payment system
- 📱 Mobile-first responsive design
- ⚡ Lightning-fast performance
- 🔒 Privacy-focused, no tracking
- 🌍 Globally accessible

---

## ✨ Features

### Core Pages
- 🏠 **Home Page** - Welcome section with business information, featured menu, testimonials, and contact information
- 🛍️ **Store Page** - Browse and filter coffee merchandise with detailed product descriptions and Bitcoin pricing
- 📦 **Order Page** - User-friendly shopping cart and order summary management
- 📱 **Responsive Design** - Mobile-first design that works seamlessly on all devices
- 🎨 **Modern Styling** - Clean, professional UI with smooth animations and transitions

### Functionality
- 🛒 **Cart Management** - Add/remove items with real-time cart updates
- 📍 **Navigation** - Smooth scroll navigation with active link highlighting
- 📲 **Mobile Menu** - Hamburger menu for seamless mobile navigation
- 🔄 **Real-time Updates** - Cart synchronization across all pages
- 💱 **Multi-Currency Display** - Bitcoin, Satoshis, and USD price conversions
- 🎯 **Product Options** - Size and color selection for customizable items
- ⏱️ **Toast Notifications** - User-friendly feedback system for actions

---

## 🛍️ Products

Our curated collection of premium coffee merchandise and Bitcoin-themed items:

### T-Shirt
- **Description:** Premium cotton tee with our signature logo
- **Sizes:** S, M, L, XL, XXL
- **Price:** 0.0008 BTC | 80,000 sats | ≈ $25.00

### Coffee Lover's Cap
- **Description:** Adjustable cap with embroidered logo
- **Colors:** Black, Coffee Brown, Cream
- **Price:** 0.0006 BTC | 60,000 sats | ≈ $20.00

### Ceramic Coffee Cup
- **Description:** Perfect 12oz ceramic mug for your morning brew
- **Colors:** Classic White, Coffee Brown, Midnight Black
- **Price:** 0.0005 BTC | 50,000 sats | ≈ $15.00

### Back Home Brew Hoodie
- **Description:** Cozy fleece hoodie perfect for coffee runs
- **Sizes:** S, M, L, XL, XXL
- **Price:** 0.002 BTC | 200,000 sats | ≈ $65.00

### Messenger Bag
- **Description:** Durable canvas bag for your daily essentials
- **Colors:** Khaki, Coffee Brown, Black
- **Price:** 0.0015 BTC | 150,000 sats | ≈ $45.00

### Insulated Tumbler
- **Description:** 20oz stainless steel tumbler keeps drinks hot or cold
- **Colors:** Stainless Steel, Matte Black, Coffee Brown
- **Price:** 0.0007 BTC | 70,000 sats | ≈ $22.00

---

## 📂 Project Structure

```
backhomebrew/
├── index.html          # Home page with about, menu, and contact sections
├── store.html          # Product store with browseable merchandise items
├── order.html          # Order management and checkout page
├── main.js             # Core JavaScript (navigation, mobile menu, cart sync)
├── store.js            # Store-specific functionality (product handling, cart management)
├── styles.css          # Global stylesheet (typography, layout, colors, animations)
├── store.css           # Store page component styling
├── order.css           # Order page and cart sidebar styling
├── background.avif     # Hero background image (high-quality AVIF format)
├── deploy.sh           # Bash script for production deployment
├── .gitignore          # Git ignore rules for dependencies and env files
└── README.md           # This file
```

### File Descriptions

#### HTML Files
- **index.html** - Main landing page featuring:
  - Hero section with background image
  - About section explaining the business
  - Featured menu preview
  - Customer testimonials
  - Contact form
  - Footer with links

- **store.html** - E-commerce product page featuring:
  - Store hero section with Bitcoin badge
  - Product grid with 6 merchandise items
  - Individual product cards with:
    - Product image
    - Description
    - Size/Color selection dropdowns
    - Multi-currency pricing (BTC, sats, USD)
    - Add to cart button
  - Bitcoin payment information section
  - Shopping cart sidebar
  - Footer with company info

- **order.html** - Order management page featuring:
  - Shopping cart display
  - Item quantity adjustment
  - Remove item functionality
  - Order total calculation
  - Checkout button
  - Order summary with Bitcoin pricing

#### JavaScript Files
- **main.js** - Navigation and core functionality:
  - Mobile menu toggle and management
  - Active link highlighting on scroll
  - Mobile menu close on outside click
  - Navigation state management

- **store.js** - E-commerce functionality:
  - Unified cart management system
  - Add to cart function with validation
  - Toast notification system (info, success, error)
  - Bitcoin to satoshi conversion utilities
  - Cart persistence and synchronization
  - Checkout flow management
  - Real-time cart updates and calculations

#### Stylesheets
- **styles.css** - Global styling:
  - CSS variables for colors and typography
  - Typography and font hierarchy
  - Layout utilities and grid system
  - Color scheme and theme
  - Navigation and header styling
  - Mobile menu styles
  - Cart sidebar animation
  - General animations and transitions
  - Responsive breakpoints

- **store.css** - Store page specific:
  - Product grid layout and responsiveness
  - Product card styling and hover effects
  - Product image containers
  - Price display formatting
  - Bitcoin feature cards
  - Shopping cart sidebar styling
  - Product option selectors

- **order.css** - Order page specific:
  - Order summary layout
  - Cart item list styling
  - Quantity adjustment controls
  - Order total display
  - Checkout button styling
  - Mobile responsiveness for order details

#### Assets
- **background.avif** - High-quality hero background image (215KB AVIF format)
  - Used on home page hero section
  - Optimized for web performance
  - Responsive image handling

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for local development server)
- Git (for cloning the repository)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/henghonglee/backhomebrew.git
   cd backhomebrew
   ```

2. **Verify all files are present:**
   ```bash
   ls -la
   ```
   You should see all HTML, CSS, JS files and the background image.

### Local Development

To run the application locally, use one of these methods:

#### Option 1: Using the deployment script (Recommended)
```bash
./deploy.sh
```

#### Option 2: Using Python directly (Python 3)
```bash
python3 -m http.server 8080
```

#### Option 3: Using Python directly (Python 2)
```bash
python -m SimpleHTTPServer 8080
```

#### Option 4: Custom port and host
```bash
PORT=3000 HOST=localhost ./deploy.sh
```

3. **Open your browser** and navigate to:
   ```
   http://localhost:8080
   ```

The application will load and you can start browsing products and testing the cart functionality.

---

## 📖 Usage Guide

### Navigation

The site uses a clean, intuitive navigation system:

- **Logo/Brand** - Click "Back Home Brew" to return to the home page from any page
- **Home** - Landing page with information and featured menu
- **Store** - Full product catalog with shopping functionality
- **Order** - Shopping cart and order management
- **Contact** - Contact information and form
- **Cart Icon** - Quick access to shopping cart (shows item count)
- **Mobile Menu** - Hamburger menu automatically appears on smaller screens

### Browsing Products

1. Navigate to the **Store** page
2. View the full product catalog
3. For each item, you can:
   - View the product image
   - Read the description
   - Select size or color options
   - See pricing in BTC, sats, and USD
   - Click "Add to Cart"

### Managing Your Cart

1. Click the **cart icon** in the header (shows number of items)
2. The cart sidebar will slide in from the right
3. Review your items:
   - Item name and selected options
   - Unit price and quantity
   - Total price in BTC
4. Adjust quantities or remove items
5. Click "Checkout with Bitcoin" when ready

### Responsive Design

The site automatically adapts to different screen sizes:

- **Desktop (1024px+)** - Full navigation bar, side-by-side layout
- **Tablet (768px - 1023px)** - Optimized spacing and touch targets
- **Mobile (under 768px)** - Mobile menu, stacked layout, full-width components

---

## 🛠️ Technologies

### Frontend
- **HTML5** - Semantic markup and structure
  - Form elements and input handling
  - Semantic sectioning elements
  - Accessibility attributes

- **CSS3** - Styling, layout, and animations
  - Flexbox for layout
  - CSS variables for theming
  - Media queries for responsiveness
  - CSS transitions and transforms
  - Grid layouts for product displays

- **JavaScript (Vanilla)** - DOM manipulation and functionality
  - No external JavaScript frameworks
  - Event handling and DOM manipulation
  - Local storage for cart persistence
  - Real-time calculations
  - String formatting and utilities

### Design & Fonts
- **Google Fonts** - Raleway and Inter typefaces
  - Raleway (300, 400, 500, 700 weights) - Headers and branding
  - Inter (300, 400, 500, 600 weights) - Body and interface text

### Backend
- **Python** - HTTP server for deployment
  - Python 3: Built-in http.server module
  - Python 2: SimpleHTTPServer module

### Version Control
- **Git** - Source control and collaboration

---

## ₿ Bitcoin Payment System

Back Home Brew is Bitcoin-only, embracing decentralized finance and privacy. Here's how it works:

### Why Bitcoin Only?

1. **🔒 Security** - Decentralized and cryptographically secured transactions
2. **⚡ Speed** - Quick processing with Lightning Network support
3. **🌍 Global** - No borders, no banking restrictions
4. **🛡️ Privacy** - No traditional banking intermediaries
5. **📊 Transparency** - Immutable transaction records

### Pricing Model

All prices are **calculated in Bitcoin first**:
- Primary price in BTC (Bitcoin)
- Secondary price in sats (satoshis) = 1 BTC = 100,000,000 sats
- USD is shown for reference only (approximate current rates)

Example:
```
Back Home Brew T-Shirt: 0.0008 BTC = 80,000 sats ≈ $25.00 USD
```

### Price Display

- **BTC Price** - The exact Bitcoin amount (most precise)
- **Sats Price** - Common unit among Bitcoin users (whole numbers)
- **USD Price** - Approximate value for reference (updates based on market rate)

### Future Enhancements

- Lightning Network integration for instant payments
- Real-time BTC/USD exchange rate updates
- Payment QR code generation
- Bitcoin address verification
- Multi-signature payment addresses for enhanced security

---

## 🚀 Deployment

### Local Development Server

The easiest way to run Back Home Brew locally is using the provided deployment script:

```bash
./deploy.sh
```

This script:
- Automatically detects Python 3 or Python 2
- Binds to host `0.0.0.0` (accessible from any network interface)
- Uses port `8080` by default
- Provides clear feedback with emoji indicators

### Configuration

You can customize the deployment using environment variables:

```bash
# Custom port
PORT=3000 ./deploy.sh

# Custom host
HOST=localhost ./deploy.sh

# Both custom
PORT=3000 HOST=127.0.0.1 ./deploy.sh
```

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | 8080 | Server port number |
| `HOST` | 0.0.0.0 | Host binding (0.0.0.0 = accessible from anywhere) |

### Production Deployment

For production environments:

1. **Use Python 3.x** (Python 2 is deprecated)
   ```bash
   python3 -m http.server $PORT --bind $HOST
   ```

2. **Configure firewall** to allow connections to your PORT

3. **Use a reverse proxy** (nginx, Apache) for:
   - SSL/TLS encryption
   - Domain name mapping
   - Load balancing
   - Compression

4. **Set proper environment variables:**
   ```bash
   PORT=80 HOST=0.0.0.0 ./deploy.sh  # HTTP on port 80
   ```

### Browser Compatibility

Tested and working on:
- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Server Requirements

- Python 3.x (recommended) or Python 2.x
- Appropriate firewall rules for the selected PORT
- Network access configured for your use case

---

## 👨‍💻 Development

### Project Architecture

Back Home Brew is a static site application with:
- **No server-side logic** - All processing happens in the browser
- **No database** - Data persists locally in browser storage
- **No build step** - Files are served directly
- **No dependencies** - Pure HTML, CSS, JavaScript

### Development Tips

#### Adding a New Product

1. Add product HTML to `store.html` (in the `.products-grid` section):
   ```html
   <div class="product-card" data-product="product-id">
       <div class="product-image">
           <img src="image-url" alt="Product Name">
       </div>
       <div class="product-info">
           <h3>Product Name</h3>
           <p>Product description</p>
           <!-- Add options if needed -->
           <div class="product-options">
               <!-- Size or color selector -->
           </div>
           <div class="product-price">
               <span class="btc-price">0.0010 BTC</span>
               <span class="sats-price">100,000 sats</span>
               <span class="usd-price">≈ $30.00</span>
           </div>
           <button class="add-to-cart" onclick="addToCart('id', 'Name', 0.0010, 30.00)">Add to Cart</button>
       </div>
   </div>
   ```

2. Update pricing in `store.js` if needed (BTC_TO_USD_RATE constant)

3. Add styles to `store.css` if needed for custom layouts

#### Adding a New Page

1. Create a new `.html` file in the root directory
2. Copy the header and footer from existing pages
3. Add navigation links in the `nav` section to include the new page
4. Create a corresponding `.css` file if needed for custom styles
5. Add JavaScript in a new `.js` file or in `main.js` if it's small

#### Customizing Styling

1. **Global colors** - Update `styles.css` (CSS variables at the top)
2. **Page-specific styles** - Update the corresponding `.css` file
3. **Responsive design** - Look for `@media` queries
4. **Animations** - CSS transitions and transforms in `styles.css`

**Recommended approach:**
- Use CSS variables for consistency
- Maintain mobile-first responsive design
- Test on multiple screen sizes and browsers

#### Working with the Cart

The cart system in `store.js` provides:

```javascript
// Add an item to cart
addToCart(id, name, btcPrice, usdPrice, options)

// Remove an item from cart
removeFromCart(itemIndex)

// Update item quantity
updateCartQuantity(itemIndex, newQuantity)

// Clear entire cart
clearCart()

// Get cart total
getCartTotal() // returns {btc: 0, usd: 0}
```

#### Debugging Tips

1. **Browser Console** - Open DevTools (F12) and check Console tab
   - Look for JavaScript errors in red
   - Use `console.log()` for debugging

2. **Network Tab** - Check if files are loading correctly
   - Look for 404 errors on images or files
   - Verify font files are loading from Google Fonts

3. **Elements Inspector** - Inspect HTML and CSS
   - Check computed styles
   - Verify class names and IDs
   - Test media queries

### Code Style

The project uses:
- **Semantic HTML** - Proper use of HTML5 elements
- **BEM CSS naming** - `.block__element--modifier` convention
- **Vanilla JavaScript** - No frameworks, clean code
- **Comments** - Where logic isn't immediately obvious

---

## 🔧 Troubleshooting

### Server Issues

#### "Python is not installed"
- **Solution:** Install Python from https://www.python.org/downloads/
- **Verify:** `python3 --version` or `python --version`
- **For macOS:** `brew install python3`
- **For Linux:** `sudo apt-get install python3`

#### "Address already in use"
- **Cause:** Port is already being used by another application
- **Solution 1:** Use a different port:
  ```bash
  PORT=3000 ./deploy.sh
  ```
- **Solution 2:** Find and stop the process using the port:
  ```bash
  # macOS/Linux
  lsof -i :8080  # Find what's using port 8080
  kill -9 <PID>  # Kill the process
  ```

#### Server crashes or won't start
- Check that you're in the correct directory
- Verify all `.html` files are in the root directory
- Check file permissions (should be readable)
- Try different port if firewall is blocking 8080

### Application Issues

#### Cart Not Updating
- **Solution 1:** Clear browser cache
  - Chrome/Edge: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
  - Firefox: `Ctrl+Shift+Delete` or `Cmd+Shift+Delete`
- **Solution 2:** Check browser console for errors (F12)
- **Solution 3:** Try a different browser to isolate the issue

#### Pages Not Loading
- **Cause:** Files in wrong location or server not running
- **Check:**
  1. All files are in the same directory
  2. Server is running (`./deploy.sh` was successful)
  3. You're accessing the correct port (default 8080)
  4. File paths in HTML are correct (should be relative)

#### Products Not Appearing
- Check that `store.html` and `store.css` are in the root directory
- Verify the store page is loading (check for CSS)
- Check browser console (F12) for any errors
- Verify product images are loading correctly

#### Bitcoin Prices Not Updating
- The prices are hardcoded in `store.html` and `store.js`
- To update, modify the `BTC_TO_USD_RATE` in `store.js`
- Consider implementing live rate API in future versions

#### Mobile Menu Not Working
- Clear cache (Ctrl+Shift+Delete)
- Check that `main.js` is loading (F12 → Console)
- Verify viewport meta tag is present in HTML
- Test on actual mobile device or use device emulation (F12)

#### Responsive Design Not Working
- Check viewport meta tag in HTML: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Verify media queries in CSS files
- Test in browser developer tools device emulation (F12 → Responsive mode)
- Clear browser cache

### Performance Issues

#### Slow Loading
- Check image sizes (use AVIF or WebP for optimization)
- Minimize CSS and JavaScript
- Use browser DevTools Network tab to identify bottlenecks
- Consider using a CDN for assets

#### High CPU Usage
- Check for JavaScript loops in console (infinite loops)
- Profile with DevTools Performance tab
- Look for memory leaks (check for detached DOM nodes)

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started with Contributions

1. **Fork the repository** on GitHub
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** with clear, descriptive commit messages
4. **Test thoroughly** on multiple browsers and screen sizes
5. **Commit your changes:**
   ```bash
   git commit -am 'Add your descriptive message'
   ```
6. **Push to your branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request** on GitHub

### Code of Conduct

- Be respectful and inclusive
- Provide clear descriptions of changes
- Test code before submitting
- Follow existing code style and patterns

### Areas for Contribution

- 🐛 Bug fixes and issue resolution
- ✨ New features (with discussion first)
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- 🚀 Performance optimizations
- 🧪 Testing improvements
- 📱 Mobile responsiveness improvements
- ₿ Bitcoin integration enhancements

---

## 🔮 Future Plans

Planned features and improvements for Back Home Brew:

### Short Term
- [ ] Live Bitcoin/USD exchange rate API integration
- [ ] Payment QR code generation for orders
- [ ] Order history and saved carts
- [ ] Customer account system (optional)
- [ ] Email order confirmation

### Medium Term
- [ ] Lightning Network payment integration
- [ ] Multiple language support (i18n)
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Inventory management system
- [ ] Admin dashboard

### Long Term
- [ ] Mobile app (iOS/Android)
- [ ] Social media integration
- [ ] Subscription/recurring orders
- [ ] Affiliate program
- [ ] Multi-vendor marketplace
- [ ] Advanced analytics and reporting

### Technical Improvements
- [ ] Build process (webpack/Vite)
- [ ] TypeScript migration
- [ ] Testing framework (Jest/Cypress)
- [ ] Component library
- [ ] Storybook documentation
- [ ] Performance monitoring
- [ ] SEO optimization
- [ ] Internationalization (i18n)

---

## 📄 License

This project is open source. Please check the repository for specific license information.

For licensing inquiries, please reach out through the repository's issue tracker.

---

## 📞 Contact & Support

For questions, suggestions, or support related to Back Home Brew:

### Contact Methods
- **GitHub Issues** - Report bugs or request features
- **Email** - Check the repository for contact information
- **Contact Form** - Use the contact form on the website
- **Social Media** - Links available on the home page

### Getting Help
1. Check the [Troubleshooting](#troubleshooting) section
2. Search existing GitHub issues for similar problems
3. Create a new issue with detailed information
4. Include your:
   - Browser and version
   - Operating system
   - Steps to reproduce the issue
   - Error messages (if any)
   - Screenshots (if applicable)

---

## 📊 Statistics

- **Pages:** 3 (Home, Store, Order)
- **Products:** 6 premium items
- **JavaScript Files:** 2 (main.js, store.js)
- **Stylesheets:** 3 (styles.css, store.css, order.css)
- **Mobile Breakpoints:** Optimized for all screen sizes
- **Browser Support:** All modern browsers
- **Performance:** Optimized for quick loading

---

## 🎯 Project Goals

Back Home Brew aims to:

1. ✅ Demonstrate modern web development practices
2. ✅ Provide a clean, user-friendly e-commerce experience
3. ✅ Embrace Bitcoin and decentralized finance
4. ✅ Maintain simplicity without unnecessary complexity
5. ✅ Be a reference implementation for static site e-commerce
6. ✅ Support the Bitcoin community with quality merchandise

---

<div align="center">

**Built with ❤️ for the Bitcoin community**

© 2024 Back Home Brew. Powered by Bitcoin ₿

[⬆ Back to top](#back-home-brew-)

</div>
