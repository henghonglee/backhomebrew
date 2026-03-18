# Back Home Brew ☕

A modern, responsive website for a home-based coffee shop featuring a beautiful storefront, product catalog, and online ordering system.

## Project Overview

Back Home Brew is a single-page web application designed to showcase a home-based coffee business. It provides customers with an intuitive interface to browse the menu, explore the store, and place orders online. The site is fully responsive and optimized for both desktop and mobile devices.

## Features

- 🏠 **Home Page** - Welcome section with about, featured menu, and contact information
- 🛍️ **Store Page** - Browse premium coffee products with detailed descriptions
- 📦 **Order Page** - User-friendly ordering system with cart management
- 💰 **Bitcoin Payments** - Accept cryptocurrency payments with BTC to USD conversion
- 📱 **Responsive Design** - Mobile-first design that works seamlessly on all devices
- 🎨 **Modern Styling** - Clean, professional UI with smooth animations
- 🛒 **Cart Management** - Add/remove items with real-time cart updates and persistent state
- 🔔 **Toast Notifications** - User feedback system for actions and confirmations
- 📍 **Navigation** - Smooth scroll navigation with active link highlighting
- 📱 **Mobile-Optimized Menu** - Hamburger menu with smooth interactions on mobile devices

## Project Structure

```
backhomebrew/
├── index.html          # Home page with about, menu, and contact sections
├── store.html          # Product store with browseable coffee items
├── order.html          # Order management and checkout page
├── main.js             # Core JavaScript (navigation, mobile menu, cart sync)
├── store.js            # Store-specific functionality (product filtering, cart)
├── styles.css          # Global stylesheet
├── store.css           # Store page styling
├── order.css           # Order page styling
├── background.avif     # Hero background image
├── deploy.sh           # Deployment script
└── README.md           # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for local development server)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/henghonglee/backhomebrew.git
   cd backhomebrew
   ```

2. **Navigate to the project directory:**
   ```bash
   cd backhomebrew
   ```

### Local Development

To run the application locally, you can use the included deployment script or start a simple HTTP server:

**Option 1: Using the deployment script**
```bash
./deploy.sh
```

**Option 2: Using Python directly**
```bash
# Python 3
python3 -m http.server 8080

# Or Python 2 (if Python 3 is not available)
python -m SimpleHTTPServer 8080
```

3. **Open your browser** and navigate to:
   ```
   http://localhost:8080
   ```

## Usage Guide

### Navigation

- **Home** - Click the "Back Home Brew" logo to return to the home page
- **Store** - Browse available coffee products
- **Order** - View and manage your shopping cart
- **Cart** - Accessible from the header; shows current item count
- **Mobile Menu** - Hamburger menu appears on smaller screens

### Store Page

- Browse all available coffee products
- View product details and pricing
- Add items to your cart
- Filter or search for specific products (if available)

### Order Page

- Review items in your shopping cart
- Update quantities or remove items
- View order total
- Proceed to checkout

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling, flexbox, and responsive design
- **JavaScript (Vanilla)** - DOM manipulation, event handling, cart functionality, and notifications
- **Python** - HTTP server for local development and deployment
- **Google Fonts** - Raleway and Inter typefaces for typography
- **Bitcoin** - Cryptocurrency payment integration with BTC/USD conversion

## Payment Methods

Back Home Brew accepts **Bitcoin (BTC)** as the primary payment method, designed for customers who prefer cryptocurrency transactions.

### Bitcoin Payments

- **Cryptocurrency Accepted** - All orders can be paid exclusively with Bitcoin
- **Real-time Conversion** - BTC prices are displayed with current USD conversion rates
- **Satoshi Support** - Prices can be displayed in satoshis (1 BTC = 100,000,000 sats) for micro-transactions
- **Secure Transactions** - Blockchain-verified payment settlements

### Payment Integration Notes

- Exchange rates are configurable via the `BTC_TO_USD_RATE` variable in `store.js`
- For production use, integrate a live Bitcoin price API (e.g., CoinGecko, CoinMarketCap)
- All Bitcoin payment processing should be secured and verified before order fulfillment

## Deployment

### Production Deployment

The `deploy.sh` script handles production deployment:

```bash
./deploy.sh
```

**Configuration:**
- Default PORT: `8080`
- Default HOST: `0.0.0.0` (accessible from any network interface)

**Custom Port and Host:**
```bash
PORT=3000 HOST=localhost ./deploy.sh
```

### Environment Variables

- `PORT` - Server port (default: 8080)
- `HOST` - Server host binding (default: 0.0.0.0)

### Requirements for Deployment

- Python 3 (recommended) or Python 2
- Appropriate firewall rules for the selected PORT
- Network access if serving beyond localhost

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Descriptions

### HTML Pages

- **index.html** - Main landing page with hero section, about, menu preview, and contact form
- **store.html** - Product catalog page with product grid and shopping functionality
- **order.html** - Shopping cart and order summary page

### JavaScript Files

- **main.js** - Core functionality including:
  - Navigation highlighting during scroll
  - Mobile hamburger menu toggle
  - Cart count synchronization across pages
  - Close menu on outside click

- **store.js** - Store-specific features including:
  - Product cart management
  - Toast notification system (success, error, info messages)
  - Bitcoin to satoshi conversion utilities
  - BTC/USD price calculations and display

### Stylesheets

- **styles.css** - Global styles, layout, typography, and color scheme
- **store.css** - Store-specific component styling
- **order.css** - Order page and cart styling

### Assets

- **background.avif** - High-quality background image for the hero section

## Development Tips

### Adding a New Page

1. Create a new `.html` file
2. Link it in the navigation menu (in the HTML files)
3. Create corresponding `.css` file if needed
4. Add JavaScript functionality in separate file if required

### Modifying the Menu

Edit the menu items in `index.html` and corresponding product data in `store.js`.

### Customizing Styling

Update color variables and styles in the respective CSS files. Consider using CSS variables for easier theme customization.

### Updating Bitcoin Rates

To change the Bitcoin to USD conversion rate:

1. Open `store.js`
2. Find the `BTC_TO_USD_RATE` variable
3. Update with current exchange rate

For production, replace this with an API call to a live price feed:
```javascript
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    BTC_TO_USD_RATE = data.bitcoin.usd;
  });
```

## Troubleshooting

### Server Won't Start

- **Error: "Python is not installed"**
  - Install Python 3: https://www.python.org/downloads/
  - Verify installation: `python3 --version`

- **Error: "Address already in use"**
  - Change the PORT: `PORT=3000 ./deploy.sh`
  - Or find and stop the process using the port

### Cart Not Updating

- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check browser console for JavaScript errors (F12)

### Pages Not Loading

- Ensure all files are in the same directory
- Check file paths in HTML links
- Verify the server is running and accessible

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository** (if you don't have push access)
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make your changes** following existing code style and patterns
4. **Test your changes** locally using the development server
5. **Commit with clear messages:**
   ```bash
   git commit -m 'Add new feature or fix description'
   ```
6. **Push to your branch:**
   ```bash
   git push origin feature/your-feature
   ```
7. **Create a Pull Request** with a clear description of your changes

### Contribution Areas
- Bug fixes and improvements
- New features (products, pages, functionality)
- Documentation and guides
- Performance optimizations
- Accessibility improvements
- Mobile experience enhancements

## License

This project is open source. Please check the repository for specific license information.

## Quick Start Reference

### Common Commands

```bash
# Start development server with Python 3
python3 -m http.server 8080

# Start with custom port
PORT=3000 ./deploy.sh

# Start with custom host and port
PORT=3000 HOST=localhost ./deploy.sh
```

### Key Files for Customization

| File | Purpose | Customize For |
|------|---------|---------------|
| `styles.css` | Global styling | Colors, fonts, spacing |
| `store.js` | Cart & products | Bitcoin rates, products |
| `main.js` | Navigation | Navigation behavior |
| `index.html` | Home page | Content, menu items |
| `store.html` | Product page | Products, pricing |
| `order.html` | Cart page | Cart layout |

## Contact & Support

For questions or support related to Back Home Brew, please open an issue in the repository or contact through the website's contact form.

---

**Last Updated:** March 2026

Built with ❤️ for Back Home Brew
