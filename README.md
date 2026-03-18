# Back Home Brew ☕

A modern, responsive website for a home-based coffee shop featuring a beautiful storefront, product catalog, and online ordering system with Bitcoin payment support.

## Project Overview

Back Home Brew is a full-featured single-page web application designed to showcase a home-based coffee business. It provides customers with an intuitive interface to browse the menu, explore the store, and place orders online with cryptocurrency payment options. The site is fully responsive and optimized for both desktop and mobile devices, offering a seamless shopping experience across all platforms.

## Features

- 🏠 **Home Page** - Welcome section with about, featured menu, and contact information
- 🛍️ **Store Page** - Browse and filter coffee products with detailed descriptions and live pricing
- 📦 **Order Page** - User-friendly ordering system with comprehensive cart management
- 💰 **Bitcoin Payments** - Integrated Bitcoin payment support with real-time BTC/USD conversion
- 💳 **Cart Management** - Add/remove items with real-time cart updates and persistent storage
- 📱 **Responsive Design** - Mobile-first design with hamburger navigation for tablets and phones
- 🎨 **Modern Styling** - Clean, professional UI with smooth animations and transitions
- 🔔 **Toast Notifications** - Real-time feedback system for user actions
- 📍 **Navigation** - Smooth scroll navigation with active link highlighting
- ⚡ **Fast Performance** - Lightweight, optimized assets for quick page loads

## Project Structure

```
backhomebrew/
├── index.html              # Home page with hero, about, menu preview, and contact sections
├── store.html              # Product store with coffee items, filtering, and cart integration
├── order.html              # Shopping cart, order review, and Bitcoin checkout page
├── main.js                 # Core functionality: navigation, mobile menu, cart synchronization
├── store.js                # Store features: product data, cart operations, Bitcoin conversion
├── styles.css              # Global stylesheet (layout, typography, colors, animations)
├── store.css               # Store-specific component styling
├── order.css               # Order page and cart styling
├── background.avif         # High-quality hero section background image
├── deploy.sh               # Production deployment script (Python HTTP server)
└── README.md               # Project documentation (this file)
```

### Key Technologies

- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Flexbox layouts, responsive grid, CSS animations
- **Vanilla JavaScript**: No external dependencies, pure DOM manipulation
- **Python**: Development and production server
- **Google Fonts**: Raleway and Inter typefaces for typography

## Getting Started

### Prerequisites

- **Web Browser**: Chrome, Firefox, Safari, Edge, or any modern browser with ES6+ support
- **Python 3.x**: Required for running the development and production servers (Python 2.7 is supported as a fallback)
- **Git**: For cloning the repository (optional if downloading as ZIP)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/henghonglee/backhomebrew.git
   cd backhomebrew
   ```

   Or download the repository as a ZIP file and extract it.

2. **Verify Python installation:**
   ```bash
   python3 --version
   # Should show Python 3.x.x
   ```

### Quick Start - Local Development

To run the application locally, choose one of the following methods:

#### Option 1: Using the deployment script (Recommended)
```bash
chmod +x deploy.sh  # Make script executable (Linux/Mac)
./deploy.sh
```

The server will start on `http://localhost:8080` by default.

#### Option 2: Using Python 3
```bash
python3 -m http.server 8080
```

#### Option 3: Using Python 2 (Legacy)
```bash
python -m SimpleHTTPServer 8080
```

3. **Access the application:**
   Open your web browser and navigate to:
   ```
   http://localhost:8080
   ```

The home page will load, and you can navigate to the Store and Order pages using the navigation menu.

## Usage Guide

### Navigation & Menu

- **Logo** - Click the "Back Home Brew" logo to return to the home page from any page
- **Home Navigation** - Links to About, Menu, and Contact sections with smooth scroll
- **Store** - Browse the complete coffee product catalog
- **Order** - Access the shopping cart and proceed to checkout
- **Cart Badge** - Header shows the current number of items in your cart
- **Mobile Menu** - Hamburger icon (☰) appears on tablets and mobile devices for responsive navigation
- **Active Links** - Navigation links highlight when scrolling near corresponding sections

### Home Page

- **Hero Section** - Eye-catching welcome banner with company branding
- **About Section** - Information about Back Home Brew and the business
- **Featured Menu** - Preview of popular coffee products available in the store
- **Contact Section** - Business contact information and messaging capabilities

### Store Page

- **Product Browsing** - View all available coffee products with images, descriptions, and pricing
- **Product Details** - Each item shows name, description, price in USD, and Bitcoin equivalent
- **Add to Cart** - Click "Add to Cart" button on any product to add it to your shopping cart
- **Toast Notifications** - Confirmation messages appear when items are added successfully
- **Real-time Price Display** - Bitcoin prices calculated using live BTC/USD conversion rates
- **Responsive Grid** - Product layout adjusts for desktop, tablet, and mobile views

### Order Page (Shopping Cart)

- **View Cart** - See all items currently in your shopping cart with quantities
- **Update Quantities** - Increase or decrease the quantity of each item
- **Remove Items** - Delete items from your cart if desired
- **Order Total** - Real-time calculation of total cost in both USD and Bitcoin
- **Checkout Flow** - Review all items and proceed to payment
- **Bitcoin Payment Option** - Seamless conversion and payment in satoshis (sats)
- **Cart Persistence** - Your cart is maintained across page reloads and sessions

## Technologies Used

### Frontend Stack
- **HTML5** - Semantic markup with accessibility features and structured content
- **CSS3** - Modern styling with flexbox, CSS Grid, media queries, and smooth animations
- **Vanilla JavaScript** - Pure JavaScript with no dependencies for DOM manipulation, event handling, and cart management
- **Google Fonts** - Raleway (headings) and Inter (body) typefaces for modern typography

### Backend & Deployment
- **Python 3** - HTTP server for local development and production deployment
- **Python 2.7** - Legacy support for older environments (uses SimpleHTTPServer)
- **Bash** - Shell script for automated server startup and configuration

### Features & Integrations
- **Bitcoin Payment System** - Real-time BTC/USD conversion with satoshi calculation
- **Local Storage API** - Cart data persistence across sessions and page reloads
- **Responsive Web Design** - Mobile-first approach with breakpoints for all device sizes
- **Toast Notification System** - Non-blocking user feedback for actions and confirmations

## Bitcoin Payment System

### Overview

Back Home Brew integrates Bitcoin payment functionality, allowing customers to pay in cryptocurrency. The system includes:

- **Real-time Price Conversion** - Automatic conversion between USD and Bitcoin prices
- **Satoshi Calculations** - Prices displayed in satoshis (sats) for precision in low-value transactions
- **Live Rate Management** - Bitcoin exchange rate configured in `store.js` (currently set to $31,250/BTC)

### How It Works

1. **Product Pricing** - Each product has a base USD price
2. **Auto Conversion** - The system automatically converts USD prices to Bitcoin equivalents
3. **Cart Calculation** - Cart totals are calculated in both USD and BTC
4. **Payment Options** - Customers can view and select Bitcoin as a payment method
5. **Satoshi Display** - Final amounts shown in satoshis for transaction accuracy

### Configuring Bitcoin Rates

To update the Bitcoin exchange rate, edit the `BTC_TO_USD_RATE` variable in `store.js`:

```javascript
// In store.js - Update this rate as needed
const BTC_TO_USD_RATE = 31250; // Current rate in USD per BTC
```

For a production environment, consider:
- Fetching real-time rates from a Bitcoin price API (CoinGecko, CoinMarketCap, etc.)
- Implementing a cron job to update rates periodically
- Adding rate caching to minimize API calls
- Including rate update timestamps for user transparency

### Future Enhancements

- Integrate live Bitcoin price feeds from external APIs
- Add automatic rate updates every X minutes
- Implement actual Bitcoin transaction processing
- Add QR code generation for payment addresses
- Include transaction status tracking
- Support for Lightning Network payments

## Deployment

### Production Deployment

The `deploy.sh` script automates server startup with sensible defaults:

```bash
./deploy.sh
```

The script:
1. Checks for Python 3 availability (falls back to Python 2 if needed)
2. Configures server bindings based on environment variables
3. Starts an HTTP server on the specified port
4. Makes the application accessible over the network

### Environment Variables

Configure the server behavior using environment variables:

```bash
# Custom port and host
PORT=3000 HOST=localhost ./deploy.sh

# Make server accessible on all interfaces
PORT=8080 HOST=0.0.0.0 ./deploy.sh

# Common configurations
PORT=80 HOST=0.0.0.0 ./deploy.sh        # Default HTTP port
PORT=8000 HOST=127.0.0.1 ./deploy.sh   # Local only
```

**Available Variables:**
- `PORT` - Server port (default: `8080`)
- `HOST` - Server binding address (default: `0.0.0.0`)

### Deployment Requirements

- **Python 3** (recommended) or Python 2.7
- **Bash shell** for running deploy.sh
- **Network permissions** - Port access and firewall configuration
- **File permissions** - Ensure deploy.sh is executable (run `chmod +x deploy.sh`)

### Production Considerations

For production deployments, consider:

1. **Use a Production Server** - Replace Python's simple HTTP server with:
   - Nginx (reverse proxy + static file serving)
   - Apache (traditional web server)
   - Node.js Express (for more control)

2. **HTTPS/SSL** - Use a reverse proxy or CDN to add SSL/TLS encryption
   ```bash
   # Example: Using Nginx as reverse proxy
   # Forward requests from https://example.com to localhost:8080
   ```

3. **Performance Optimization**
   - Enable gzip compression for CSS/JS
   - Add cache-control headers for static assets
   - Consider a CDN for asset distribution
   - Optimize images (background.avif is already optimized)

4. **Security**
   - Implement rate limiting
   - Add CORS headers if needed
   - Validate Bitcoin payment integrations
   - Use security headers (CSP, X-Frame-Options, etc.)

5. **Monitoring**
   - Set up error logging
   - Monitor server uptime
   - Track Bitcoin exchange rates
   - Log user transactions (if applicable)

### Docker Deployment (Optional)

To containerize the application:

```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY . .
EXPOSE 8080
CMD ["python3", "-m", "http.server", "8080", "--bind", "0.0.0.0"]
```

Run with:
```bash
docker build -t backhomebrew .
docker run -p 8080:8080 backhomebrew
```

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Descriptions

### HTML Pages

#### `index.html` (11,673 bytes)
Main landing page with the following sections:
- **Hero Section** - Full-width banner with background image and call-to-action
- **About Section** (#about) - Company information and mission statement
- **Featured Menu Section** (#menu) - Preview of popular products with smooth scrolling navigation
- **Contact Section** (#contact) - Business contact information and inquiries
- Navigation header with responsive menu toggle for mobile devices
- Links to Store and Order pages in main navigation

#### `store.html` (15,986 bytes)
Product catalog and shopping page:
- Product grid with responsive layout (adjusts to device size)
- Individual product cards with images, descriptions, and pricing
- Add to cart functionality with real-time feedback
- Product information including prices in both USD and Bitcoin
- Cart integration showing current item count
- Responsive navigation consistent with index.html

#### `order.html` (18,586 bytes)
Shopping cart and checkout page:
- Comprehensive cart display with all items and quantities
- Real-time order total calculation (USD and Bitcoin)
- Quantity adjustment controls for each item
- Item removal functionality
- Checkout section with payment options
- Bitcoin payment display and satoshi conversion
- Empty cart message when no items present

### JavaScript Files

#### `main.js` (2,442 bytes)
Core application functionality:
- **Navigation Highlighting** - Active link detection based on scroll position
- **Mobile Menu Toggle** - Hamburger menu open/close functionality
- **Click Outside Detection** - Mobile menu closes when clicking outside menu area
- **Cart Synchronization** - Keeps cart count synchronized across all pages
- **DOMContentLoaded Handler** - Initializes scripts when page is ready
- **Scroll Event Listener** - Updates active navigation as user scrolls

#### `store.js` (10,013 bytes)
Store and cart management features:
- **Cart Data Structure** - Manages all cart items and state
- **Bitcoin Conversion** - `BTC_TO_USD_RATE` constant for price conversion
- **Toast Notification System** - Shows success/error/info messages to users
- **Product Data** - Product catalog with prices and descriptions
- **Add to Cart Function** - Handles adding items and validation
- **Remove from Cart** - Removes items and updates totals
- **Cart Persistence** - Saves cart to localStorage for session retention
- **Bitcoin Calculations** - Converts BTC amounts to satoshis with formatting
- **Cart Display** - Updates UI to reflect cart state changes

### Stylesheets

#### `styles.css` (15,556 bytes)
Global styles for the entire application:
- CSS reset and base element styling
- Typography (Google Fonts - Raleway and Inter)
- Color scheme and theme variables
- Flexbox and layout utilities
- Navigation and header styling
- Hero section styling
- Card and component styling
- Responsive design media queries
- Animation and transition definitions
- Mobile menu styles

#### `store.css` (9,424 bytes)
Store page specific styling:
- Product grid layout with CSS Grid
- Product card styling and hover effects
- Add to cart button styling
- Product image styling
- Price display styling (USD and Bitcoin)
- Responsive breakpoints for tablets and mobile
- Card elevation and shadow effects

#### `order.css` (10,013 bytes)
Order and cart page styling:
- Cart container and item list layout
- Cart item row styling with quantity controls
- Remove button styling
- Order summary and total section
- Bitcoin payment section styling
- Satoshi conversion display
- Empty cart message styling
- Checkout button styling
- Responsive adjustments for smaller screens

### Assets

#### `background.avif` (215,767 bytes)
High-quality background image:
- Format: AVIF (modern compressed image format)
- Usage: Hero section background image
- Dimensions: Optimized for responsive scaling
- Benefits: Excellent compression ratio while maintaining quality
- Fallback: CSS ensures graceful degradation on unsupported browsers

### Configuration Files

#### `deploy.sh` (736 bytes)
Production deployment script:
- Bash script for automated server startup
- Python version detection (Python 3 preferred, Python 2 fallback)
- Environment variable support (PORT, HOST)
- Error handling and helpful messages
- Server binding configuration
- Host/port information logging

## Development Tips

### Adding a New Page

To add a new page to the application:

1. **Create the HTML file**
   ```bash
   touch newpage.html
   ```

2. **Include proper structure**
   - Copy the header/navigation from existing pages
   - Keep the same header ID and classes for consistency
   - Include links to styles.css and any page-specific CSS

3. **Create a stylesheet** (if needed)
   ```bash
   touch newpage.css
   ```

4. **Update navigation links**
   - Add link in all HTML files' navigation menus
   - Update active state logic in main.js if using scroll-based highlighting

5. **Add JavaScript** (if needed)
   ```bash
   touch newpage.js
   ```
   - Keep functions modular and self-contained
   - Follow existing naming conventions

### Modifying Products

To add or modify coffee products:

1. **Edit `store.js`** - Update the product data array
2. **Add product properties**:
   ```javascript
   {
       name: "Product Name",
       description: "Description",
       priceUSD: 5.99,
       // Bitcoin price calculated automatically
   }
   ```

3. **Update product images** - Place images in the root directory or a subdirectory
4. **Test in the store page** - Verify pricing and display

### Updating Bitcoin Exchange Rate

To reflect current Bitcoin prices:

```javascript
// In store.js, update this line:
const BTC_TO_USD_RATE = 31250; // Change to current rate
```

For live rates, consider implementing:
```javascript
async function fetchBitcoinRate() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        return data.bitcoin.usd;
    } catch (error) {
        console.error('Failed to fetch BTC rate:', error);
        return BTC_TO_USD_RATE; // Fallback to default
    }
}
```

### Customizing Styling

To customize the application's appearance:

1. **Global Colors and Fonts** - Edit `styles.css`:
   - Font family declarations
   - Primary/secondary colors
   - Spacing and layout units

2. **CSS Variables** (Recommended approach):
   ```css
   :root {
       --primary-color: #8B4513;
       --secondary-color: #D2B48C;
       --spacing-unit: 1rem;
   }
   ```

3. **Page-Specific Styles** - Edit store.css, order.css, etc.

4. **Responsive Design** - Update media query breakpoints as needed:
   ```css
   @media (max-width: 768px) {
       /* Tablet styles */
   }
   @media (max-width: 480px) {
       /* Mobile styles */
   }
   ```

### Testing Locally

1. **Desktop Testing**:
   ```bash
   python3 -m http.server 8080
   ```

2. **Mobile Device Testing**:
   - Run server on your computer
   - Find your computer's local IP: `ifconfig` (Mac/Linux) or `ipconfig` (Windows)
   - Access from mobile: `http://[YOUR_IP]:8080`

3. **Browser DevTools**:
   - Press F12 to open Developer Tools
   - Use "Device Toolbar" to test responsive design
   - Check Console for JavaScript errors
   - Verify Network tab for resource loading

### Performance Optimization

1. **Image Optimization**
   - background.avif is already optimized
   - Consider similar AVIF format for product images
   - Use srcset for responsive images

2. **CSS and JavaScript**
   - Minimize CSS files for production
   - Combine multiple CSS files if needed
   - Defer JavaScript loading when appropriate

3. **Cache Strategy**
   - Use browser caching for static assets
   - Implement service workers for offline support (future enhancement)

## Troubleshooting

### Server Issues

#### Server Won't Start

**Error: "Python is not installed"**
```bash
# Install Python 3
# Windows: Download from https://www.python.org/downloads/
# macOS: brew install python3
# Linux (Ubuntu/Debian): sudo apt-get install python3

# Verify installation
python3 --version
```

**Error: "Address already in use"**
```bash
# Option 1: Use a different port
PORT=3000 ./deploy.sh

# Option 2: Find and kill the process using the port
# Linux/Mac:
lsof -i :8080  # List process using port 8080
kill -9 <PID>  # Kill the process

# Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

**Server starts but pages won't load**
- Check that Python is running: You should see a message like "Serving HTTP on 0.0.0.0 port 8080"
- Verify the port is accessible: Try a different port with `PORT=9000 ./deploy.sh`
- Check firewall settings: Ensure the port isn't blocked

#### Deploy.sh Permission Denied

```bash
# Make the script executable
chmod +x deploy.sh

# Run it
./deploy.sh
```

### Cart and Shopping Issues

#### Cart Not Updating

1. **Clear browser cache**
   - Chrome/Firefox/Edge: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
   - Safari: Cmd+Option+E
   - Or use Incognito/Private window

2. **Check browser console**
   - Press F12 to open Developer Tools
   - Check Console tab for red error messages
   - JavaScript errors will prevent cart functionality

3. **Verify localStorage is enabled**
   - Some browsers block localStorage in private mode
   - Try in normal browsing mode

4. **Refresh the page**
   - After adding items, refresh to verify persistence
   - Check if cart count updates in header

#### Items Not Adding to Cart

- **Check console for errors** (F12 → Console tab)
- **Verify store.js is loaded** - Check Network tab in DevTools
- **Ensure JavaScript is enabled** - Check browser settings
- **Check for JavaScript errors** - Look for red lines in Console

#### Bitcoin Conversion Showing Incorrect

- **Verify BTC_TO_USD_RATE in store.js** - Check the current rate is reasonable
- **Check the conversion formula** - `BTC_TO_USD_RATE` should be in USD per BTC
- **Clear cache and reload** - Cached values might be stale

### Display and Styling Issues

#### Pages Look Wrong on Mobile

1. **Clear cache** - Remove browser cache and cookies
2. **Check zoom level** - Reset browser zoom to 100% (Ctrl+0 or Cmd+0)
3. **Test in device view** - Press F12, click responsive design mode icon
4. **Try different browser** - Issue might be browser-specific

#### Images Not Loading

1. **Check image file exists** - Verify background.avif is in root directory
2. **Check file permissions** - Ensure image file is readable
3. **Verify file paths** - Check CSS references are correct
4. **Check server logs** - Look for 404 errors in terminal

#### Fonts Look Different

1. **Verify Google Fonts** - Check internet connection for font loading
2. **Check CSS imports** - Ensure @import statements in styles.css are correct
3. **Clear browser cache** - Fonts might be cached from previous version
4. **Check system fonts** - As fallback, system fonts should display

### Navigation and Link Issues

#### Links Not Working

1. **Check file paths** - Ensure HTML files are in root directory
2. **Verify link syntax** - Should be `href="store.html"` not `href="./store.html"`
3. **Check for typos** - Filename case matters on Linux/Mac
4. **Test server connection** - Ensure server is running

#### Mobile Menu Not Opening

1. **Check JavaScript is enabled** - Verify in browser settings
2. **Check console for errors** - F12 → Console
3. **Verify main.js is loaded** - Check Network tab in DevTools
4. **Try different browser** - Test on Chrome, Firefox, Safari

### Performance Issues

#### Page Loading Slow

1. **Check internet connection** - Slow network can affect loading
2. **Check server response** - Run server locally for baseline
3. **Monitor resource loading** - DevTools Network tab shows file sizes
4. **Clear browser cache** - Forces fresh download of assets

#### JavaScript Errors in Console

1. **Read the error message** - Note line number and file
2. **Check syntax** - Look for JavaScript syntax errors
3. **Verify files loaded** - Check Network tab for 404s
4. **Check browser compatibility** - Some older browsers don't support ES6

### Network and Connectivity

#### Can't Access from Other Devices

1. **Check host binding** - Use `HOST=0.0.0.0` in deploy.sh
2. **Find your IP address**:
   ```bash
   # Linux/Mac
   ifconfig | grep "inet " | grep -v 127.0.0.1

   # Windows
   ipconfig
   ```
3. **Verify firewall** - Ensure port is not blocked
4. **Check network** - Devices must be on same network
5. **Test URL**: `http://[YOUR_IP]:8080`

#### Can't Connect on Specific Port

1. **Try different port** - Some ports require admin/root access
2. **Use ports > 1024** - Recommended to avoid permission issues
3. **Check port availability**:
   ```bash
   # Linux/Mac
   netstat -an | grep :8080

   # Windows
   netstat -ano | findstr :8080
   ```

### Bitcoin Payment Issues

#### Bitcoin Prices Not Converting Correctly

1. **Check BTC_TO_USD_RATE** - Verify rate is correct in store.js
2. **Check conversion math** - Price should be USD amount ÷ BTC rate
3. **Verify satoshi calculation** - Should be BTC amount × 100,000,000
4. **Check browser console** - Look for calculation errors

#### Payment Button Not Responding

1. **Check order.html** - Verify payment functionality is implemented
2. **Check store.js** - Verify Bitcoin conversion functions exist
3. **Clear cache** - Remove stale JavaScript
4. **Check console** - Look for JavaScript errors

### General Troubleshooting Steps

1. **Close and reopen browser** - Fixes many temporary issues
2. **Clear all cache** - Remove browser cache, cookies, localStorage
3. **Check browser console** - F12 → Console tab for error messages
4. **Try different browser** - Isolates browser-specific issues
5. **Check internet connection** - Ensure stable network connectivity
6. **Review recent changes** - If working before, what changed?
7. **Test on fresh computer** - Isolates local vs global issues
8. **Review server logs** - Terminal window shows HTTP requests and errors
9. **Disable browser extensions** - Some extensions interfere with pages
10. **Test in incognito mode** - Bypasses cache and extensions

## Contributing

Contributions are welcome! Whether you're fixing bugs, adding features, or improving documentation, please follow these guidelines:

### Getting Started with Contributions

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/backhomebrew.git
   cd backhomebrew
   ```

3. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes** following the code style and patterns in the project

5. **Test your changes**:
   ```bash
   python3 -m http.server 8080
   # Test thoroughly on desktop and mobile
   ```

6. **Commit with clear messages**:
   ```bash
   git commit -am 'Add your feature description'
   ```

7. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request** on the original repository with:
   - Clear description of changes
   - Screenshots for UI changes
   - Testing notes

### Code Style Guidelines

- **JavaScript**: Use camelCase for variables and functions
- **CSS**: Use kebab-case for class names
- **HTML**: Use semantic elements and meaningful class/ID names
- **Comments**: Add comments for complex logic
- **No dependencies**: Keep using vanilla JavaScript

### Types of Contributions

#### Bug Fixes
- Identify the issue clearly
- Include steps to reproduce
- Provide your fix
- Test on multiple browsers/devices

#### New Features
- Discuss major features in issues first
- Keep scope focused
- Add tests or manual testing steps
- Update documentation

#### Documentation
- Fix typos and clarify confusing sections
- Add examples and use cases
- Update troubleshooting with new solutions
- Improve code comments

#### Performance Improvements
- Profile before and after
- Document the improvement
- Ensure no functionality is lost
- Test on slow networks/devices

### Development Workflow

1. **Create an issue** for your proposed change
2. **Get feedback** from maintainers before major work
3. **Keep changes focused** - one feature per PR
4. **Test thoroughly** - desktop, tablet, mobile
5. **Update documentation** if behavior changes
6. **Be responsive** to review feedback

### Reporting Issues

When reporting issues, include:

- **Browser and version**: Chrome 120, Firefox 122, Safari 17, etc.
- **Device/OS**: Windows 11, macOS 14, iOS 17, Android 14, etc.
- **Steps to reproduce**: Clear, numbered steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots/video**: Visual demonstration if applicable
- **Console errors**: Any JavaScript errors from F12 Console

Example issue format:
```
**Title**: Cart not updating on mobile Safari

**Browser**: Safari 17.3
**Device**: iPhone 15 Pro, iOS 17.4

**Steps to reproduce:**
1. Open site in Safari on iOS
2. Go to Store page
3. Add product to cart
4. Go to Order page
5. Check cart count

**Expected:** Cart count should update
**Actual:** Cart count stays 0

**Error:** No errors in console
```

## License

This project is open source. Please check the repository for specific license information.

---

## Additional Resources

### Documentation
- [Back Home Brew GitHub Repository](https://github.com/henghonglee/backhomebrew)
- [HTML5 Specification](https://html.spec.whatwg.org/)
- [CSS3 Documentation](https://www.w3.org/Style/CSS/)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### External APIs (for future integration)
- **Bitcoin Prices**: [CoinGecko API](https://www.coingecko.com/api)
- **Alternative**: [CoinMarketCap API](https://coinmarketcap.com/api/)
- **Payment Processing**: [Strike API](https://strike.me/), [BTCPay Server](https://btcpayserver.org/)

### Web Hosting Options
- **Free Tier**: Vercel, Netlify, GitHub Pages
- **Affordable**: Heroku, PythonAnywhere, Linode
- **Premium**: DigitalOcean, AWS, Google Cloud

### Monitoring & Analytics
- **Error Tracking**: Sentry, LogRocket
- **Analytics**: Google Analytics, Plausible
- **Uptime Monitoring**: Uptime Robot, Pingdom

## FAQ

### Is Back Home Brew production-ready?

The application is suitable for small to medium-sized coffee shops. For large-scale deployments, consider:
- Implementing a production-grade web server (Nginx, Apache)
- Adding database backend for inventory management
- Implementing real payment processing (Stripe, Square)
- Adding user authentication and order history
- Setting up proper logging and monitoring

### Can I customize the design?

Absolutely! The entire design is customizable:
- Edit CSS files for colors, fonts, and layout
- Modify HTML for structure and content
- Add custom JavaScript for new functionality
- Replace images and assets as needed

### How do I handle actual Bitcoin payments?

Currently, the app calculates prices but doesn't process payments. To add real payments:
1. Integrate a payment processor (BTCPay, Strike, Coinbase Commerce)
2. Implement backend to verify transactions
3. Add order confirmation and tracking
4. Store transaction records securely

### What about mobile app?

This is a web application that works on mobile browsers. To create native apps:
- Use React Native for iOS/Android
- Use Flutter for cross-platform support
- Use Cordova/PhoneGap for web-to-native wrapper

### How do I handle inventory?

Currently, products are hardcoded. For inventory management:
- Implement a backend database (SQL, NoSQL)
- Create admin interface for product management
- Track stock levels in real-time
- Implement low-stock warnings

---

## Contact & Support

For questions or support:
- **GitHub Issues**: [Report bugs and request features](https://github.com/henghonglee/backhomebrew/issues)
- **GitHub Discussions**: [General questions and ideas](https://github.com/henghonglee/backhomebrew/discussions)
- **Contact Form**: Use the form on the Back Home Brew website
- **Email**: See repository for contact information

---

**Last Updated:** March 18, 2026

**Version:** 2.0 - Comprehensive Documentation

Built with ❤️ for Back Home Brew

---

## Changelog

### Version 2.0 (March 2026)
- Comprehensive README with detailed sections
- Enhanced Bitcoin payment documentation
- Expanded troubleshooting guide
- Development and contribution guidelines
- Performance optimization tips

### Version 1.0 (Initial Release)
- Home page with hero section
- Store page with product catalog
- Order page with shopping cart
- Bitcoin payment support
- Mobile responsive design
- Python HTTP server deployment
