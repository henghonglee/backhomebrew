# Back Home Brew ☕

A modern, responsive website for a home-based coffee shop featuring a beautiful storefront, product catalog, and online ordering system.

## Project Overview

Back Home Brew is a single-page web application designed to showcase a home-based coffee business. It provides customers with an intuitive interface to browse the menu, explore the store, and place orders online. The site is fully responsive and optimized for both desktop and mobile devices.

## Quick Start 🚀

Get up and running in 30 seconds:

```bash
# 1. Clone the repository
git clone https://github.com/henghonglee/backhomebrew.git
cd backhomebrew

# 2. Start the server
python3 -m http.server 8080

# 3. Open your browser
# Visit: http://localhost:8080
```

That's it! The site is now running locally.

## Features

- 🏠 **Home Page** - Welcome section with about, featured menu, and contact information
- 🛍️ **Store Page** - Browse and filter coffee products with detailed descriptions
- 📦 **Order Page** - User-friendly ordering system with cart management
- 📱 **Responsive Design** - Mobile-first design that works on all devices with hamburger menu
- 🎨 **Modern Styling** - Clean, professional UI with smooth animations and transitions
- 🛒 **Cart Management** - Add/remove items with real-time cart updates and persistent storage
- 💰 **Bitcoin Payments** - Bitcoin-only payment system with real-time BTC to USD conversion
- 📍 **Navigation** - Smooth scroll navigation with active link highlighting
- 🔔 **Toast Notifications** - User-friendly notifications for cart actions and feedback

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
- **JavaScript (Vanilla)** - DOM manipulation, event handling, cart functionality
- **Python** - HTTP server for deployment
- **Google Fonts** - Raleway and Inter typefaces
- **AVIF Images** - Modern, optimized image format for fast loading

## Payment System: Bitcoin-Only 🔐

Back Home Brew exclusively accepts **Bitcoin payments**, providing a modern, decentralized payment solution:

### Features
- **Real-time Price Conversion** - Automatic BTC to USD conversion for customer convenience
- **Satoshi Display** - Amounts displayed in satoshis (100,000,000 sats = 1 BTC)
- **Transparent Pricing** - Clear conversion rate displayed throughout the ordering process
- **Future-Ready** - Built on blockchain technology for secure, borderless transactions

### How It Works
1. Browse products and add items to your cart
2. View your total in both BTC and equivalent USD
3. Proceed to checkout with Bitcoin
4. Complete transaction using your Bitcoin wallet

### Implementation Details
- BTC/USD exchange rate is configured in `store.js` (default: $31,250 per BTC)
- Rate can be updated to reflect real-time prices from market APIs
- All calculations are handled in satoshis for precision
- No credit card or third-party payment processor required

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

- ✅ Chrome/Chromium (latest versions)
- ✅ Firefox (latest versions)
- ✅ Safari (latest versions on macOS and iOS)
- ✅ Edge (latest versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)
- ✅ Tablet browsers (iPad Safari, Android Chrome)

**Minimum Requirements:**
- ES6 JavaScript support
- CSS Grid and Flexbox support
- LocalStorage API support for cart persistence

## File Descriptions

### HTML Pages

- **index.html** - Main landing page with hero section, about, menu preview, and contact form
- **store.html** - Product catalog page with product grid and shopping functionality
- **order.html** - Shopping cart and order summary page

### JavaScript Files

- **main.js** - Core functionality including:
  - Navigation highlighting based on scroll position
  - Mobile hamburger menu toggle
  - Cart synchronization between desktop and mobile views
  - Click-outside event handling for menu closure

- **store.js** - Store-specific features including:
  - Cart management (add, remove, update quantities)
  - Bitcoin/USD price conversion
  - Toast notification system for user feedback
  - Shopping cart sidebar functionality
  - Local storage integration for persistent cart data

### Stylesheets

- **styles.css** - Global styles, layout, typography, and color scheme
- **store.css** - Store-specific component styling
- **order.css** - Order page and cart styling

### Assets

- **background.avif** - High-quality background image for the hero section

## Shopping Cart Features

The shopping cart is a core component of the Back Home Brew experience:

### Cart Sidebar
- Accessible from the header cart icon (shows item count)
- Displays all items currently in the cart
- Shows real-time total in both BTC and USD
- Slide-out sidebar with smooth animations
- Close button and overlay click to dismiss

### Cart Operations
- **Add to Cart** - Products can be added with quantity selection
- **Update Quantity** - Change item quantities directly in the cart
- **Remove Items** - Delete items from cart with one click
- **Clear Cart** - Option to clear all items at once
- **Toast Notifications** - User feedback for cart actions (added, removed, updated)

### Cart Persistence
- Cart data is stored in browser's localStorage
- Cart persists across page refreshes and browser sessions
- Cart syncs between all pages (home, store, order)
- Cart counts displayed in both desktop and mobile menu

### Checkout Process
- Review cart total in Bitcoin and USD
- Bitcoin price conversion uses current exchange rate
- Amounts calculated in satoshis for precision
- "Checkout with Bitcoin" button initiates payment flow

## Development Tips

### Adding a New Page

1. Create a new `.html` file with the same header/footer structure as existing pages
2. Link it in the navigation menu in `index.html` and other pages
3. Create a corresponding `.css` file if styling is needed
4. Add JavaScript functionality in a new file if required
5. Include `store.js` and `main.js` script tags for cart functionality
6. Test the page on both desktop and mobile views

### Modifying the Menu

1. Update menu items in `index.html` (section with id "menu")
2. Add corresponding products in `store.html`
3. Update product data in `store.js` if adding new coffee items
4. Update featured menu preview if necessary

### Customizing Styling

1. Global styles: Edit `styles.css` for colors, fonts, and layout
2. Store page: Edit `store.css` for product grid and styling
3. Order page: Edit `order.css` for cart sidebar and checkout
4. Consider using CSS variables (e.g., `--primary-color`) for theme consistency
5. Test responsive design at breakpoints: 480px, 768px, 1024px

### Adding Products to Store

1. Open `store.js` and locate the product data structure
2. Add new products following the existing format
3. Include name, price (in cents), description, and image URL
4. Ensure prices are accurate for BTC conversion
5. Update cart display logic if adding new categories

### Updating Bitcoin Exchange Rate

1. Open `store.js` and find `BTC_TO_USD_RATE` variable (line 6)
2. Update the value to current exchange rate
3. Optional: Integrate with live price API (e.g., CoinGecko) for auto-updates
4. Test cart calculations with various amounts

### Local Testing Checklist

- [ ] All pages load without 404 errors
- [ ] Navigation links work on desktop and mobile
- [ ] Cart persists across page navigation
- [ ] Cart appears/disappears on cart icon click
- [ ] Mobile menu opens/closes correctly
- [ ] Responsive design works at all breakpoints
- [ ] Fonts load correctly from Google Fonts
- [ ] Hero image displays properly
- [ ] Cart total converts BTC/USD correctly
- [ ] Toast notifications appear for cart actions

## Troubleshooting

### Server Issues

#### Server Won't Start
- **Error: "Python is not installed"**
  - Install Python 3: https://www.python.org/downloads/
  - Verify installation: `python3 --version`
  - For Python 2: `python --version`

- **Error: "Address already in use"**
  - Change the PORT: `PORT=3000 ./deploy.sh`
  - Or find and stop the process using the port
  - On Linux/Mac: `lsof -i :8080` to find the process
  - On Windows: `netstat -ano | findstr :8080`

- **Error: "Permission denied" for deploy.sh**
  - Make the script executable: `chmod +x deploy.sh`
  - Then run: `./deploy.sh`

#### Server Runs But Site Doesn't Load
- Ensure all HTML, CSS, and JS files are in the same directory
- Verify file paths in HTML links are relative (e.g., `./store.html` not `/store.html`)
- Check that background.avif is in the root directory
- Open browser console (F12) and check for 404 errors

### Cart & Payment Issues

#### Cart Not Updating or Persisting
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check if localStorage is enabled in your browser
- Verify JavaScript is enabled (F12 > Console tab)
- Look for console errors: Open DevTools (F12) and check Console tab

#### Cart Showing in Store but Not on Order Page
- Verify localStorage is not disabled
- Check browser console for JavaScript errors
- Ensure `store.js` and `main.js` are loaded on all pages
- Try clearing browser cache and reloading

#### Bitcoin Price Not Converting Correctly
- Check the `BTC_TO_USD_RATE` variable in `store.js` (line 6)
- Update the rate to match current Bitcoin prices
- Ensure JavaScript is calculating satoshis correctly
- Verify no console errors in DevTools

### Navigation & Display Issues

#### Links Not Working Properly
- Check that all `.html` files have correct relative paths
- Ensure files are not moved or renamed
- Test file paths by opening files directly in browser

#### Mobile Menu Not Appearing
- Verify the viewport meta tag is in the `<head>` of HTML files
- Check that mobile menu CSS is loaded in `store.css`
- Test on different screen sizes (use browser DevTools responsive mode)

#### Styling Issues or Missing Fonts
- Clear CSS cache: Ctrl+F5 (Windows/Linux) or Cmd+Shift+R (Mac)
- Verify Google Fonts links are working
- Check browser console for CSS warnings
- Ensure all CSS files are linked in HTML `<head>` tags

### Development Issues

#### Changes Not Showing in Browser
- Hard refresh the page: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Clear browser cache completely
- Close and reopen the browser
- Try accessing from a private/incognito window

#### Git or File Sync Issues
- Verify all files are saved to disk
- Check file permissions: `ls -la` should show readable files
- Use `git status` to check for uncommitted changes

## Contributing

Contributions are welcome! Please follow these guidelines:

### Getting Started with Development

1. Fork the repository on GitHub
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/backhomebrew.git`
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Set up local development: `python3 -m http.server 8080`

### Workflow

1. **Make Changes** - Edit files and test locally
2. **Verify** - Test on multiple browsers and screen sizes
3. **Commit** - Use clear, descriptive commit messages
   ```bash
   git commit -am 'Add: new feature description'
   # or
   git commit -am 'Fix: bug description'
   # or
   git commit -am 'Refactor: code improvement'
   ```
4. **Push** - Push to your feature branch
   ```bash
   git push origin feature/your-feature
   ```
5. **Create PR** - Open a Pull Request with:
   - Clear title describing the change
   - Description of what changed and why
   - Screenshots for UI changes
   - Testing performed

### Code Style Guidelines

- **HTML** - Use semantic HTML5 tags, proper indentation (2 spaces)
- **CSS** - Organize by component, use consistent naming conventions
- **JavaScript** - Use vanilla JS, follow existing patterns, add comments for complex logic
- **File Names** - Use lowercase with hyphens for multi-word names (e.g., `my-file.css`)

### Testing Before PR

- [ ] All pages load without errors
- [ ] No console errors or warnings
- [ ] Mobile responsive (test at 375px, 768px, 1024px widths)
- [ ] Navigation works across all pages
- [ ] Cart functionality works correctly
- [ ] Links are not broken
- [ ] Images load properly
- [ ] Fonts display correctly

### Commit Message Format

```
[Type]: Brief description of changes

Optional detailed explanation if needed.

Examples:
- Add: New Bitcoin payment confirmation page
- Fix: Cart not persisting after page refresh
- Refactor: Improve CSS organization
- Docs: Update README with installation steps
```

### Types of Contributions

- **Features** - New functionality (store filters, wishlist, etc.)
- **Bug Fixes** - Fixing broken functionality
- **Performance** - Speed and optimization improvements
- **Accessibility** - Improving accessibility for all users
- **Documentation** - README, comments, guides
- **Testing** - Test cases and testing improvements
- **UI/UX** - Design improvements and better user experience

### Questions or Need Help?

- Check existing issues and discussions
- Open a new issue to ask questions
- Provide context and examples
- Be respectful and constructive

## License

This project is open source. Please check the repository for specific license information.

## FAQ

### General Questions

**Q: Is this a real coffee shop?**
A: Back Home Brew is a home-based coffee business with an online presence. You can place orders through the website.

**Q: How do I place an order?**
A: Navigate to the Store page, add items to your cart, then proceed to the Order page to review and checkout with Bitcoin.

**Q: Can I pay with credit card or other methods?**
A: No, we exclusively accept Bitcoin payments for security and privacy reasons.

**Q: How long does delivery take?**
A: Please contact us through the contact form for current delivery times and availability.

**Q: Can I modify my order after placing it?**
A: Contact us immediately through the contact form if you need to modify an order.

### Technical Questions

**Q: Do you sell personal data?**
A: No. The website uses localStorage only for cart functionality. No data is sent to external servers.

**Q: Is my Bitcoin address safe?**
A: The website only handles display of amounts. Actual Bitcoin transaction handling should be done through secure wallets.

**Q: Why Bitcoin only?**
A: Bitcoin provides decentralized, borderless payments with no chargebacks or payment processor fees.

**Q: Can I use this website offline?**
A: No, an internet connection is required to browse and checkout.

**Q: What browsers do you support?**
A: We support all modern browsers (Chrome, Firefox, Safari, Edge) on desktop, tablet, and mobile.

## Support & Contact

### Getting Help

- **Technical Issues** - Open an issue on GitHub or check the troubleshooting section
- **Order Questions** - Use the contact form on the website
- **Feature Requests** - Suggest ideas through GitHub issues
- **Bug Reports** - Report bugs with detailed information on GitHub

### Contact Information

For questions about Back Home Brew orders:
- **Email** - hello@backhomebrew.com
- **Phone** - (555) 123-BREW
- **Location** - 123 Cozy Street, Hometown, ST 12345
- **Hours** - See the website's contact section

### Project Repository

- **GitHub** - https://github.com/henghonglee/backhomebrew
- **Issues** - Report bugs and request features
- **Discussions** - Community discussions and Q&A

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.1 | March 2026 | Enhanced README with Bitcoin payment details, comprehensive troubleshooting, and development guide |
| 1.0 | February 2026 | Initial release with home, store, and order pages |

---

**Last Updated:** March 18, 2026

Built with ❤️ and lots of ☕ for Back Home Brew

**Status:** Active Development 🚀
