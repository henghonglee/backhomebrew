# Back Home Brew ☕

A small, responsive website for a home-based coffee shop: a storefront, a product catalog, and an online ordering flow with Bitcoin pricing. It's a static site — plain HTML, CSS, and vanilla JavaScript, served by Python's built-in HTTP server.

## Features

- 🏠 **Home page** – hero, about, featured menu preview, and contact sections
- 🛍️ **Store page** – browse coffee products with descriptions and pricing
- 📦 **Order page** – cart with quantity controls and Bitcoin checkout summary
- 💰 **Bitcoin pricing** – products priced in both BTC and USD, with satoshi totals
- 💳 **Cart persistence** – cart is saved to `localStorage` across page reloads
- 📱 **Responsive design** – mobile-first layout with a hamburger menu
- 🔔 **Toast notifications** – lightweight feedback for cart actions

## Project Structure

```
backhomebrew/
├── index.html        # Home page: hero, about, menu preview, contact
├── store.html        # Product store with cart integration
├── order.html        # Cart, order review, and Bitcoin checkout summary
├── main.js           # Navigation, mobile menu, cart-count sync
├── store.js          # Cart state, product options, satoshi formatting
├── styles.css        # Global and store ("Editorial Onyx") styling
├── order.css         # Order/cart page styling
├── background.avif   # Hero background image
├── deploy.sh         # Python HTTP server launch script
├── package.json      # Project metadata and dev server scripts
├── DESIGN.md         # Design notes and visual direction
├── .gitignore        # Ignored files
└── README.md         # This file
```

### Key Technologies

- **HTML5 / CSS3** – semantic markup, flexbox/grid layouts, media queries
- **Vanilla JavaScript** – no dependencies, direct DOM manipulation
- **Python 3** – development/production static file server
- **Google Fonts** – Raleway (headings) and Inter (body)

## Getting Started

You only need a modern browser and Python 3.

```bash
git clone https://github.com/henghonglee/backhomebrew.git
cd backhomebrew

# Option 1: the deploy script (serves on http://localhost:8080)
./deploy.sh

# Option 2: Python directly
python3 -m http.server 8080

# Option 3: the npm script (serves on http://localhost:8080)
npm start
```

Then open `http://localhost:8080` and navigate between the Home, Store, and Order pages.

## Pages

- **Home** (`index.html`) – hero banner, about section, featured menu preview, and contact info.
- **Store** (`store.html`) – product grid; each card shows a description, USD and BTC prices, and an "add to cart" control with size/milk/pastry options.
- **Order** (`order.html`) – the cart: line items with quantities, removal controls, an order total in BTC, and a Bitcoin payment address with the satoshi amount.

## Bitcoin Pricing

The site does **not** fetch a live exchange rate or convert between currencies at runtime. Each product is authored with its own BTC and USD price directly in the store markup, and selecting certain options (e.g. oat milk, a pastry type) adjusts both prices by fixed amounts in `store.js`.

The only conversion in the code is BTC → satoshis for display:

```javascript
// store.js
function btcToSats(btcAmount) {
    return Math.round(btcAmount * 100000000).toLocaleString();
}
```

Checkout summaries show the BTC total and the fixed Bitcoin payment address (`BITCOIN_ADDRESS` in `store.js`). No payment is actually processed — the order page produces a summary you can copy.

To change a product's price, edit its BTC/USD values in the store markup; to change option surcharges, edit the adjustments in `addToOrder` in `store.js`.

## Deployment

`deploy.sh` starts Python's HTTP server and honours two environment variables:

```bash
PORT=8080 HOST=0.0.0.0 ./deploy.sh   # defaults: PORT=8080, HOST=0.0.0.0
```

| Variable | Default   | Purpose                  |
| -------- | --------- | ------------------------ |
| `PORT`   | `8080`    | Server port              |
| `HOST`   | `0.0.0.0` | Bind address             |

Because the site is fully static, it can also be hosted on any static host (GitHub Pages, Netlify, Vercel) or served behind a reverse proxy such as Nginx for HTTPS and caching in production.

## File Descriptions

| File | Purpose |
| ---- | ------- |
| `index.html` | Home page: hero, about (`#about`), featured menu (`#menu`), contact (`#contact`), responsive nav. |
| `store.html` | Product catalog with cards, option selects, and add-to-cart controls. |
| `order.html` | Cart display, quantity/removal controls, order total, and Bitcoin checkout summary. |
| `main.js` | Scroll-based nav highlighting, mobile menu toggle, click-outside handling, and cart-count sync. |
| `store.js` | Cart state, add/remove logic, option price adjustments, toast notifications, `localStorage` persistence, and satoshi formatting. |
| `styles.css` | Global styles: reset, typography, layout, navigation, hero, components, and responsive rules. |
| `order.css` | Order/cart page layout and checkout styling. |
| `background.avif` | Hero section background image (AVIF). |
| `deploy.sh` | Bash launcher: detects Python, reads `PORT`/`HOST`, starts the server. |

## Troubleshooting

- **"Address already in use"** – another process holds the port. Use a different one (`PORT=3000 ./deploy.sh`) or free it (`lsof -i :8080` then `kill <PID>`).
- **`deploy.sh` permission denied** – make it executable: `chmod +x deploy.sh`.
- **Cart not updating** – check the browser console (F12) for JavaScript errors and confirm `localStorage` isn't blocked (e.g. private-browsing mode).
- **Background image missing** – confirm `background.avif` is present and your browser supports AVIF.

## Contributing

This is a small static site. To contribute:

1. Create a branch and make your change.
2. Test locally on desktop and mobile (`python3 -m http.server 8080`).
3. Keep it dependency-free vanilla JS; use `camelCase` for JS and `kebab-case` for CSS classes.
4. Open a pull request describing the change, with screenshots for any UI tweaks.

## License

MIT. See `package.json`.
