# Back Home Brew
Home-based coffee shop website with a Bitcoin-only cart, built in vanilla HTML/CSS/JS and served by a simple Python HTTP server.

## Quick Start
- Requirements: Python 3 (preferred) or Python 2, modern browser.
- Serve locally (honors `PORT`/`HOST` env vars):  
  `chmod +x deploy.sh && ./deploy.sh`
- Manual alternative: `python3 -m http.server 8080 --bind 0.0.0.0` (or `python -m SimpleHTTPServer 8080` for Python 2).
- Open `http://localhost:8080` to browse the site; no build or install step needed.

## Features
- Multi-page, responsive site: home, store, order, and contact.
- Unified shopping cart with BTC totals, sats display, and modal checkout prompt.
- Bitcoin-only payments with Lightning-friendly messaging and a sample BTC address.
- Store page with merch options (sizes/colors) and USD reference pricing.
- Order page for drinks/pastries with option selectors and delivery/pickup notes.
- Mobile navigation toggle, active section highlighting, hero sections, testimonials, and contact forms.
- Google Fonts (Raleway, Inter) and imagery sourced from Pexels.

## Project Structure
- `index.html` – landing page with hero, story, menu highlights, testimonials, contact teaser, and cart sidebar.
- `store.html` – merchandise catalog with BTC pricing badge and Bitcoin-only messaging.
- `order.html` – online ordering menu with category tabs, delivery/pickup info, and cart sidebar.
- `contact.html` – business hours, address, phone, email, map embed, and contact form.
- `styles.css` – global layout, typography, theming, responsiveness.
- `store.css` – store-specific layout, product grid, Bitcoin info styles.
- `order.css` – ordering page layout, category toggles, coffee card styles.
- `contact.css` – contact page hero, cards, map/directions styling.
- `store.js` – unified cart, BTC↔USD display, checkout modal with sample address, category switching.
- `main.js` – mobile menu toggle and active link highlighting on scroll.
- `deploy.sh` – runs a Python HTTP server (prefers Python 3, falls back to Python 2).
- `background.avif` – shared background asset (if used by styling).

## Deployment
- Production-style serve: run `deploy.sh` (uses `python3 -m http.server $PORT --bind $HOST`, or `python -m SimpleHTTPServer $PORT` when Python 3 is unavailable).
- Defaults: `PORT=8080`, `HOST=0.0.0.0`. Override via env vars.
- Static site: no build pipeline, bundler, or package manager required.

## Payments & Cart
- BTC-only pricing; USD amounts are informational.
- Cart shows BTC, sats, and USD; checkout modal presents a sample BTC address and copy-to-clipboard helper.
- Cart supports both merch (`addToCart`) and drink/pastry orders (`addToOrder`) with option validation.

## Content & Contact
- Hours: Mon–Fri 7:00 AM–3:00 PM, Sat–Sun 8:00 AM–4:00 PM.
- Location: 123 Cozy Street, Hometown, ST 12345.
- Phone: (555) 123-BREW | Email: hello@backhomebrew.com | Orders: orders@backhomebrew.com.
- Social: @backhomebrew. Payment: Bitcoin only (Lightning encouraged).

## Notes for Contributors
- Forms are front-end only; no backend wiring yet.
- BTC rate is a fixed example in `store.js` (`BTC_TO_USD_RATE`); update as needed.
- External assets: Google Fonts and Pexels-hosted images load over the network.
