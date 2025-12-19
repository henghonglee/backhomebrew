# Back Home Brew ⌂

A home-based coffee shop website featuring artisanal coffee, merchandise store, and Bitcoin-only payments. Experience café-quality coffee crafted with love in our cozy digital space.

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd back-home-brew
   ```

2. **Open in browser:**
   Simply open `index.html` in your web browser to start browsing the site.

3. **For development server:**
   Use the provided deployment script:
   ```bash
   ./deploy.sh
   ```
   The site will be available at `http://localhost:8080`

## Features

- **🏠 Home Page**: Welcome section, about our story, menu overview, customer testimonials, and contact information
- **🛒 Store**: Bitcoin-only merchandise store with coffee-themed apparel and accessories
- **📝 Order**: Online ordering system for coffee and pastries
- **₿ Bitcoin Payments**: Decentralized payment system with Lightning Network support
- **📱 Responsive Design**: Mobile-friendly interface for all devices
- **🛒 Shopping Cart**: Client-side cart functionality with real-time totals

## Project Structure

```
back-home-brew/
├── index.html          # Main homepage with about, menu, testimonials, contact
├── store.html          # Merchandise store with Bitcoin payments
├── order.html          # Coffee ordering page
├── styles.css          # Main stylesheet
├── store.css           # Store-specific styles
├── order.css           # Order page styles
├── main.js             # Core JavaScript functionality
├── store.js            # Store/cart management
├── background.avif     # Background image asset
├── deploy.sh           # Production deployment script
└── .gitignore          # Git ignore file
```

## Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for deployment server, optional)

## Usage

### Browsing the Site
- Open `index.html` to explore the homepage
- Navigate to `store.html` to browse merchandise
- Visit `order.html` to place coffee orders

### Shopping
- Add items to cart from the store
- View cart totals in BTC and USD
- Complete checkout with Bitcoin payments

### Development
For local development, simply open any HTML file directly in your browser. All assets are self-contained with no external dependencies.

## Deployment

The project includes a simple deployment script for production use:

```bash
# Make the script executable (first time only)
chmod +x deploy.sh

# Run the server
./deploy.sh
```

The script uses Python's built-in HTTP server and supports:
- Custom port (default: 8080)
- Custom host binding (default: 0.0.0.0)
- Automatic Python version detection

For production deployment, simply serve the static files using any web server (Apache, Nginx, etc.).

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test locally by opening files in your browser
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Submit a pull request

### Development Guidelines
- Test all changes across different browsers
- Ensure responsive design works on mobile devices
- Follow existing code patterns and naming conventions
- No trailing whitespace in code files

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## About

Back Home Brew started as a dream to bring café-quality coffee to the neighborhood through a home-based setup. We carefully select, roast, and brew each cup with the attention and care that only a local, family-run business can provide. Now embracing the future with Bitcoin-only payments, we're building a community that values quality coffee and decentralized currency.

---

Made with ❤️ and lots of coffee at Back Home Brew ⌂