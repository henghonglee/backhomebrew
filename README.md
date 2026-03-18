# Back Home Brew ☕

A modern, responsive website for a home-based coffee shop featuring Bitcoin-only payments, an online store for merchandise, and a comprehensive coffee ordering system.

## Project Overview

Back Home Brew is a single-page application designed to showcase a home-based coffee business with a focus on cryptocurrency adoption. The website provides customers with an intuitive interface to:
- Learn about the business through the home page with about section, featured menu, testimonials, and contact information
- Browse and purchase merchandise (t-shirts, mugs, hoodies, etc.) in the Bitcoin-powered store
- Order artisanal coffee drinks with customization options in the coffee menu
- Manage shopping cart across all sections with real-time Bitcoin/USD price conversions

The site is fully responsive, optimized for both desktop and mobile devices, and exclusively accepts Bitcoin payments.

## Features

- 🏠 **Home Page** - Welcome section with business story, featured menu items, customer testimonials, and contact information
- 🛍️ **Store Page** - Browse merchandise (apparel and accessories) with size selection and Bitcoin pricing
- ☕ **Coffee Order Page** - Interactive menu with drink customization (size, milk type) and fresh pastries
- ₿ **Bitcoin Payments** - All transactions priced in both BTC and USD with live conversion rates
- 🛒 **Unified Cart System** - Single shopping cart for both merchandise and coffee orders with real-time updates
- 📱 **Responsive Design** - Mobile-first design with hamburger menu for seamless mobile experience
- 🎨 **Modern UI** - Clean, professional interface with smooth animations and visual feedback
- 💬 **Toast Notifications** - User feedback for actions (success, error, info) with auto-dismiss
- 📍 **Smart Navigation** - Smooth scroll detection with active link highlighting on home page

## Project Structure

```
backhomebrew/
├── index.html              # Home page with hero, about, menu preview, testimonials, contact
├── store.html              # Merchandise store with apparel and accessories (T-shirts, mugs, hoodies)
├── order.html              # Coffee ordering system with multiple categories (espresso, specialty, cold)
├── main.js                 # Core functionality (navigation, mobile menu, cart sidebar, toast system)
├── store.js                # Unified cart logic, Bitcoin conversion, product management, notifications
├── styles.css              # Global styles (layout, typography, colors, responsive design)
├── store.css               # Store and product card styling
├── order.css               # Order page and coffee card styling
├── background.avif         # High-quality hero background image (AVIF format)
├── deploy.sh               # Production deployment script (Python HTTP server)
└── README.md               # This documentation file
```

### Key File Descriptions

**HTML Pages:**
- `index.html` - Main landing page (11.7 KB) with hero section, about section, menu preview grid, customer testimonials, contact info, and contact form
- `store.html` - Store frontend (16 KB) showcasing merchandise items with product cards, size/color selection, and Bitcoin pricing
- `order.html` - Coffee order system (18.6 KB) with multiple menu categories (espresso, specialty, cold brews, pastries) and drink customization options

**JavaScript:**
- `main.js` - Core app functionality (2.4 KB): mobile menu toggle, navigation link highlighting on scroll, cart sidebar toggle, cart count sync
- `store.js` - Unified cart & commerce system (17.5 KB):
  - Cart management (add, remove, update quantities)
  - Bitcoin/USD price conversion (uses BTC_TO_USD_RATE = 31,250)
  - Toast notification system with auto-dismiss
  - Product-specific logic for coffee customization (size, milk type, pastry options)
  - Sats converter (BTC to satoshis)
  - Checkout workflow

**Stylesheets:**
- `styles.css` - Global styling (15.6 KB): layout, typography (Raleway, Inter), color scheme, responsive breakpoints, header/nav, footer
- `store.css` - Store-specific styles (10 KB): product grid, product cards, size/color selectors, price display
- `order.css` - Order system styles (9.4 KB): coffee cards, customization dropdowns, category buttons, cart sidebar

**Assets:**
- `background.avif` - High-performance background image (AVIF format, 215 KB)
- `deploy.sh` - Bash deployment script (736 bytes) for running Python HTTP server

## Getting Started

### Prerequisites

- **Browser:** Modern web browser (Chrome/Chromium, Firefox, Safari, Edge - latest versions recommended)
- **Server:** Python 3 (recommended) or Python 2 for local development and testing
- **Network:** For testing with other devices, ensure network access to your development machine

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/henghonglee/backhomebrew.git
   cd backhomebrew
   ```

2. **Verify file structure:**
   ```bash
   ls -la
   ```
   Ensure all HTML, JS, and CSS files are present in the same directory.

### Local Development

To run the application locally, you have several options:

**Option 1: Using the deployment script (recommended)**
```bash
chmod +x deploy.sh    # Make script executable (first time only)
./deploy.sh
```

The script automatically detects Python 3 or falls back to Python 2. Default: `http://localhost:8080`

**Option 2: Using Python 3 directly**
```bash
python3 -m http.server 8080
```

**Option 3: Using Python 2 (legacy)**
```bash
python -m SimpleHTTPServer 8080
```

**Option 4: Using other servers**
```bash
# Node.js with http-server
npx http-server -p 8080

# Ruby
ruby -run -ehttpd . -p8080
```

3. **Open your browser** and navigate to:
   ```
   http://localhost:8080
   ```

4. **Access from other devices (on same network):**
   ```
   http://<your-machine-ip>:8080
   ```
   Replace `<your-machine-ip>` with your machine's actual IP address.

## Usage Guide

### Navigation & Menu

- **Logo** - Click the "Back Home Brew" house logo to return to the home page from any page
- **Navigation Links** - Available on desktop and via hamburger menu on mobile:
  - **About** - Scroll to about section on home page
  - **Menu** - Scroll to menu preview on home page
  - **Store** - Browse merchandise and apparel
  - **Order** - View coffee ordering menu
  - **Contact** - Scroll to contact and inquiry form
- **Cart Icon** - Click the shopping bag icon to open/close cart sidebar (shows item count)
- **Mobile Menu** - Hamburger menu (☰) appears on screens < 768px width

### Store Page Workflow

1. **Browse Products** - Scroll through merchandise items (t-shirts, mugs, hoodies, etc.)
2. **Select Options** - Choose size/color from dropdown menus
3. **View Pricing** - See prices in BTC, sats (satoshis), and approximate USD
4. **Add to Cart** - Click "Add to Cart" button to add items
5. **Notifications** - Toast notification confirms successful addition (green success message)

### Order Page Workflow (Coffee Menu)

1. **Select Category** - Click category buttons to view different drink types:
   - **Espresso Drinks** - Single/double shots, lattes, cappuccinos
   - **Specialty Coffee** - Signature blends and specialty preparations
   - **Cold Brews** - Chilled options for warm days
   - **Fresh Pastries** - Baked goods with pricing

2. **Customize Options** - For each drink, select:
   - **Size** - Small/Medium/Large options for specific drinks
   - **Milk Type** - Choose between Whole Milk, Oat Milk (+$0.50/0.000016 BTC), or Almond Milk
   - **Pastry Type** - For pastry items, select from available types

3. **Check Pricing** - Each item displays:
   - BTC price (e.g., 0.00015 BTC)
   - Sats equivalent (e.g., 15,000 sats)
   - Approximate USD value (e.g., ≈ $4.75)

4. **Add to Order** - Click "Add to Order" button
   - Price adjusts automatically based on selections (e.g., oat milk surcharge)
   - Toast notification confirms addition with item details

### Cart Management

1. **View Cart** - Click the cart icon (🛍️) in the header to open cart sidebar
2. **Review Items** - Cart shows all added items from both store and order sections
3. **Item Details** - Each cart item shows:
   - Product name and customization options
   - Unit price in BTC
   - Quantity selector (increase/decrease)
   - Remove button (×)
4. **Cart Total** - Bottom of cart shows:
   - Total in BTC
   - Approximate USD equivalent
5. **Checkout** - Click "Checkout with Bitcoin" button to proceed to payment

### Bitcoin Payments

- **All prices displayed in:**
  - BTC (Bitcoin, e.g., 0.00015 BTC)
  - Sats (Satoshis, e.g., 15,000 sats)
  - USD (Approximate fiat value, e.g., ≈ $4.75)

- **Price Conversion:**
  - Real-time USD equivalent based on current BTC_TO_USD_RATE
  - Default rate: 31,250 USD per BTC
  - Can be updated in `store.js` line 6 to reflect current rates

- **Checkout:**
  - Currently navigates to order page with cart summary
  - Bitcoin payment method integration ready for expansion

## Technologies Used

### Frontend

- **HTML5** - Semantic markup, accessibility, form handling
- **CSS3** - Advanced layouts (flexbox/grid), responsive design, animations, transitions
- **JavaScript (Vanilla)** - No frameworks, pure ES6+ JavaScript for:
  - DOM manipulation and traversal
  - Event handling (click, scroll, change)
  - Cart and localStorage management
  - Real-time price conversion
  - Toast notification system
  - Mobile menu toggle

### Design & Typography

- **Google Fonts** -
  - **Raleway** (weights: 300, 400, 500, 700) - Primary display font
  - **Inter** (weights: 300, 400, 500, 600) - Secondary/body font
- **CSS Variables** - Color scheme and spacing customization
- **Responsive Design** - Mobile-first approach with breakpoints for tablets and desktop
- **Image Optimization** - AVIF format for background (modern browsers), JPEG/PNG for product images

### Backend & Deployment

- **Python** - Simple HTTP server (both Python 2 and 3 compatible)
  - `http.server` module (Python 3)
  - `SimpleHTTPServer` module (Python 2 fallback)
- **Bash** - Deployment automation script (`deploy.sh`)

### Payment Integration

- **Bitcoin** - All transactions in BTC/sats with USD conversion
- **BTC_TO_USD_RATE** - Configurable exchange rate (currently 31,250 USD/BTC)
- **Satoshis** - Display prices in smallest Bitcoin unit (1 BTC = 100,000,000 sats)

## Deployment

### Quick Start Deployment

The `deploy.sh` script automates server startup:

```bash
./deploy.sh
```

**What it does:**
- Checks for Python 3 (preferred), falls back to Python 2 if needed
- Displays server access information
- Starts HTTP server with default configuration
- Shows error if Python is not installed

### Configuration

**Default Settings:**
- **PORT:** 8080
- **HOST:** 0.0.0.0 (accessible from any network interface)
- **URL:** http://localhost:8080 (local) or http://<your-ip>:8080 (network)

**Custom Configuration:**

Set environment variables before running the script:
```bash
# Run on specific port
PORT=3000 ./deploy.sh

# Run on localhost only (no network access)
HOST=localhost ./deploy.sh

# Both custom port and host
PORT=5000 HOST=127.0.0.1 ./deploy.sh

# Without using the script (Python 3)
python3 -m http.server 3000 --bind 0.0.0.0
```

### Environment Variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `PORT` | 8080 | Server port number |
| `HOST` | 0.0.0.0 | Bind address (0.0.0.0 = all interfaces, localhost = local only) |

### Production Deployment Best Practices

1. **Use reverse proxy** - Deploy behind Nginx or Apache for SSL/TLS
2. **HTTPS only** - Encrypt Bitcoin transactions with SSL certificate
3. **Firewall rules** - Restrict access to necessary ports only
4. **Monitor logs** - Track server access and errors
5. **Keep Python updated** - Use Python 3 for better performance and security
6. **Backup configuration** - Store any custom settings safely

### Deployment on Different Platforms

**Local Machine:**
```bash
./deploy.sh
```

**Remote Server (SSH):**
```bash
ssh user@server.com
cd backhomebrew
./deploy.sh
```

**Docker Container:**
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY . .
EXPOSE 8080
CMD ["python", "-m", "http.server", "8080", "--bind", "0.0.0.0"]
```

**Cloud Deployment** - Netlify, Vercel, GitHub Pages, or any static host (no backend needed)

## Browser Compatibility

### Tested Browsers

| Browser | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| Chrome | ✅ | ✅ | Full support |
| Chromium | ✅ | ✅ | Full support |
| Firefox | ✅ | ✅ | Full support |
| Safari | ✅ | ✅ | iOS 13+ recommended |
| Edge | ✅ | ✅ | Full support |
| Opera | ✅ | ✅ | Full support |

### Mobile Support

- **iOS Safari** - iOS 13+
- **Chrome Mobile** - All recent versions
- **Firefox Mobile** - All recent versions
- **Samsung Internet** - 10+
- **Edge Mobile** - All recent versions

### Required Browser Features

The application requires these modern browser features:
- ES6 JavaScript (arrow functions, const/let, template literals)
- CSS Flexbox and Grid
- CSS Variables (custom properties)
- Fetch API (optional, for future API integration)
- LocalStorage (for cart persistence - future enhancement)

### Known Issues

- **Internet Explorer:** Not supported (EOL by Microsoft)
- **Older Safari versions:** May have CSS Grid or variable issues
- **Very old Android devices:** May have JavaScript compatibility issues

## Development Tips

### Modifying Prices

**Update Bitcoin/USD Conversion Rate:**
In `store.js`, line 6:
```javascript
const BTC_TO_USD_RATE = 31250; // Change this value
```

Current rate: 1 BTC = $31,250 USD (as of 2024)

### Adding New Products

**Store Page (Merchandise):**
1. Edit `store.html` and duplicate a `.product-card` div
2. Update product name, image, and description
3. Set `data-product` attribute to unique ID
4. Update BTC/USD prices
5. Modify `onclick="addToCart(...)"` with new values

Example:
```html
<div class="product-card" data-product="hoodie">
    <div class="product-image">
        <img src="image-url" alt="Description">
    </div>
    <div class="product-info">
        <h3>Product Name</h3>
        <p>Product description</p>
        <div class="product-options">
            <!-- size selects, etc -->
        </div>
        <div class="product-price">
            <span class="btc-price">0.0008 BTC</span>
            <span class="sats-price">80,000 sats</span>
            <span class="usd-price">≈ $25.00</span>
        </div>
        <button class="add-to-cart" onclick="addToCart('hoodie', 'Product Name', 0.0008, 25.00)">Add to Cart</button>
    </div>
</div>
```

**Order Page (Coffee):**
1. Edit `order.html` and find the relevant menu category div
2. Duplicate a `.coffee-card` block
3. Update coffee name, image, description
4. Add applicable `.size-select`, `.milk-select`, or `.pastry-select` dropdowns
5. Set prices in BTC and USD
6. Update `onclick="addToOrder(...)"` handler

### Adding New Pages

1. Create new HTML file (e.g., `about.html`)
2. Copy header/footer from existing pages
3. Link in navigation menu in all HTML files
4. Create corresponding CSS file if needed (e.g., `about.css`)
5. Link CSS in the new page's `<head>`
6. Import any global scripts in `<script>` tags

### Customizing Styles

**Main color scheme** - defined in `styles.css`:
```css
:root {
    --primary-color: /* Set your primary color */
    --secondary-color: /* Set your secondary color */
    /* ... other variables ... */
}
```

**Responsive breakpoints:**
- Mobile: < 768px (handled with `.mobile-menu-toggle`)
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Cart Persistence (Future Enhancement)

To save cart across page reloads, add localStorage to `store.js`:
```javascript
// Save cart
localStorage.setItem('cart', JSON.stringify(cart));

// Load cart
const savedCart = localStorage.getItem('cart');
if (savedCart) {
    cart = JSON.parse(savedCart);
}
```

### Connecting to Bitcoin Payment Gateway

To integrate actual Bitcoin payments:
1. Choose payment processor (BTCPay Server, Strike, Coinbase Commerce, etc.)
2. Create merchant account
3. Get API credentials
4. In `store.js`, modify `checkout()` function to:
   - Send cart data to payment gateway
   - Redirect to payment page
   - Handle payment confirmation webhook

## Troubleshooting

### Server Issues

**Problem: "Python is not installed"**
```
Error: Python is not installed
Please install Python to run this server
```
**Solution:**
- Install Python 3: https://www.python.org/downloads/
- Verify: `python3 --version`
- Or install Python 2 (Python 3 is recommended): https://www.python.org/downloads/

**Problem: "Address already in use" (Port 8080 is busy)**
```
OSError: [Errno 48] Address already in use
```
**Solution:**
```bash
# Option 1: Use different port
PORT=3000 ./deploy.sh

# Option 2: Kill process using port (macOS/Linux)
lsof -i :8080                    # Find process
kill -9 <PID>                   # Kill the process

# Option 3: Find and stop on Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

**Problem: Can't access from another device**
```
Connection refused - 192.168.x.x:8080
```
**Solution:**
- Ensure server uses `HOST=0.0.0.0`: `./deploy.sh`
- Check firewall allows port 8080
- Verify both devices on same network
- Get your machine IP: `hostname -I` (Linux) or `ipconfig` (Windows) or `ifconfig` (macOS)

### Client-Side Issues

**Problem: Page won't load / shows blank page**
- Check browser console (F12 or Cmd+Option+I)
- Look for 404 errors - verify all files present
- Check HTML file paths are correct
- Verify `<link>` and `<script>` src attributes
- Clear browser cache (Ctrl+Shift+Delete)

**Problem: Cart won't update / is empty**
- **Cause:** JavaScript error preventing cart.js execution
- **Solution:**
  1. Open browser DevTools (F12)
  2. Check Console tab for errors (red messages)
  3. Take screenshot of errors
  4. Clear cache and reload (Ctrl+Shift+Delete, then Ctrl+R)

**Problem: Styling looks broken (colors wrong, layout messed up)**
- CSS files not loading - check console for 404 errors
- Browser cached old CSS - clear cache (Ctrl+Shift+Delete)
- Check file names and paths are exact (case-sensitive on Linux/macOS)
- Disable browser extensions that might affect styling

**Problem: Images not showing**
- Check image URLs in HTML are correct
- External images (Pexels, Unsplash) require internet connection
- For offline use, download images locally and update src paths
- Check browser console for failed image requests

**Problem: Mobile menu not appearing**
- Menu requires JavaScript to be enabled
- Check DevTools console for JavaScript errors
- Verify `main.js` is loading (Network tab in DevTools)
- Test on mobile-sized browser window (resize to < 768px)

**Problem: Bitcoin prices not showing correctly**
- Check `store.js` has `BTC_TO_USD_RATE` defined (line 6)
- Verify price calculations in browser console
- Try different exchange rate: `PORT=8080 ./deploy.sh`
- Manual check: Log cart contents in console

### Common Error Messages & Solutions

| Error | Cause | Solution |
|-------|-------|----------|
| `Cannot find module 'http.server'` | Python 2 issue | Use Python 3: `python3 -m http.server 8080` |
| `module 'http' has no attribute 'server'` | Python version mismatch | Check Python version: `python3 --version` |
| `TypeError: $ is not defined` | jQuery not loaded | This project uses vanilla JS, not jQuery |
| `Uncaught SyntaxError in store.js` | JavaScript syntax error | Check syntax in DevTools, look for typos |
| `CORS error` | Cross-origin request blocked | Only happens with fetch API calls (not in this project) |

### Debug Mode

Enable debug logging in browser console:
1. Open DevTools (F12)
2. Go to Console tab
3. Modify `main.js` to add `console.log()` statements
4. Reload page and check console output

### Reporting Issues

If you find a bug:
1. **Reproduce it** - List exact steps to reproduce
2. **Environment** - Note browser, OS, Python version
3. **Error logs** - Include console errors (F12)
4. **Screenshots** - Show what's broken
5. **Create issue** - Open GitHub issue with details

## Contributing

Contributions are welcome! We accept improvements for:
- Bug fixes
- Feature enhancements
- Documentation improvements
- Performance optimizations
- Mobile responsiveness
- Accessibility improvements

### Contribution Guidelines

1. **Fork the repository:**
   ```bash
   git clone https://github.com/henghonglee/backhomebrew.git
   cd backhomebrew
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes:**
   - Keep changes focused on one feature
   - Follow existing code style
   - Test thoroughly on desktop and mobile
   - Update documentation if needed

3. **Test before committing:**
   ```bash
   ./deploy.sh
   # Test in browser on desktop and mobile
   # Check console for errors (F12)
   ```

4. **Commit with clear messages:**
   ```bash
   git add .
   git commit -m "Add feature: clear description of what changed"
   ```

5. **Push and create pull request:**
   ```bash
   git push origin feature/your-feature-name
   # Go to GitHub and create Pull Request
   # Include description of changes
   ```

### Development Standards

- **Code Style:** Follow existing patterns in the codebase
- **Comments:** Add comments for complex logic
- **Testing:** Test on Chrome, Firefox, Safari, and mobile browsers
- **Performance:** Keep file sizes reasonable, optimize images
- **Accessibility:** Use semantic HTML, proper color contrast
- **Security:** No client-side secrets (API keys, etc.)

### Feature Ideas

- [ ] Bitcoin payment gateway integration (BTCPay Server, Strike)
- [ ] Product inventory system
- [ ] Order history tracking
- [ ] User accounts with saved preferences
- [ ] Email order confirmations
- [ ] Product search and filtering
- [ ] Customer reviews and ratings
- [ ] Dark mode theme
- [ ] Multi-currency support
- [ ] Subscription coffee service
- [ ] Admin dashboard for managing products
- [ ] Analytics and sales reporting

## FAQ

**Q: Can I use this for my own business?**
A: Yes! The code is open source. Update the branding, products, and contact info for your business.

**Q: How do I change the logo or colors?**
A: Edit SVG in HTML files, update CSS variables in `styles.css`.

**Q: Can I add more products?**
A: Yes! Follow the "Adding New Products" section under Development Tips.

**Q: Is Bitcoin payment actually implemented?**
A: Currently it navigates to checkout. Integrate a payment gateway (BTCPay Server, etc.) for real transactions.

**Q: Can I deploy this on a regular web host?**
A: Yes! Use any host that supports static files (Netlify, Vercel, GitHub Pages) or Python servers.

**Q: What about HTTPS for Bitcoin payments?**
A: Use a reverse proxy (Nginx, Apache) with SSL certificate for production.

**Q: Can I modify this for a different business type?**
A: Absolutely! The framework supports any product-based business with Bitcoin payments.

## License

This project is open source and available under the MIT License. See LICENSE file in the repository for details.

## Contact & Support

**For Back Home Brew Customers:**
- 📧 Email: hello@backhomebrew.com
- 📞 Phone: (555) 123-BREW
- 📍 Visit: 123 Cozy Street, Hometown, ST 12345
- ⏰ Hours: Mon-Fri 7am-3pm, Sat-Sun 8am-4pm

**For Developers & Contributors:**
- 🐛 Report bugs: [GitHub Issues](https://github.com/henghonglee/backhomebrew/issues)
- 💬 Discuss features: [GitHub Discussions](https://github.com/henghonglee/backhomebrew/discussions)
- 🔧 Submit PRs: [GitHub Pull Requests](https://github.com/henghonglee/backhomebrew/pulls)

---

**Project Status:** Active Development

**Last Updated:** March 2026

**Built with ❤️ for Back Home Brew** - Bringing artisanal Bitcoin-powered coffee to your neighborhood
