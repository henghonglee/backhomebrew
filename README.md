# Back Home Brew
Home-based coffee shop website with a Bitcoin-only checkout and a cozy, modern storefront.

## Features
- Multi-page static site: landing, merch store, coffee ordering, and contact/visit page.
- Unified shopping cart for merch and coffee orders with BTC totals and USD reference pricing.
- Bitcoin-only checkout flow with address display and copy helper.
- Responsive layout, shared navigation, and mobile cart drawer.
- Contact form (front-end only) plus business hours, location, and directions map.
- Google Fonts (Raleway, Inter) and a background image for a polished look.

## Technology Stack
- HTML5, CSS3, vanilla JavaScript
- Google Fonts: Raleway and Inter
- Static asset: `background.avif`
- Python (for local/static hosting via `deploy.sh`)

## Project Structure
- `index.html` — landing page with story, menu highlights, testimonials, contact teaser, and cart sidebar.
- `store.html` — merch storefront with size/color options, Bitcoin-only badge, and cart access.
- `order.html` — coffee menu with category switching, option selectors, delivery/pickup notes, and cart access.
- `contact.html` — contact details, hours, map embed, and demo contact form.
- `styles.css` — global theme, layout, typography, buttons, nav, footer, and cart base styles.
- `store.css` — store-specific layout and product grid styling.
- `order.css` — order page hero, menu cards, delivery section, and responsive tweaks.
- `contact.css` — contact hero, cards, map section, and responsiveness.
- `main.js` — navigation highlighting, mobile menu toggle, cart count sync.
- `store.js` — shared cart logic for store/order pages, BTC + USD totals, checkout modal, Lightning-friendly address copy helper.
- `deploy.sh` — simple Python HTTP server runner using configurable host/port.
- `background.avif` — background asset used across pages.

## Getting Started / Deployment
Prerequisite: Python installed (script prefers Python 3, falls back to Python 2 if needed).

1) Clone/download this repository.
2) (Optional) Make the script executable: `chmod +x deploy.sh`.
3) Run the server (defaults: `PORT=8080`, `HOST=0.0.0.0`):
   - `./deploy.sh`
   - Or override: `PORT=3000 HOST=127.0.0.1 ./deploy.sh`
4) Open the site at `http://localhost:<PORT>` (or `http://<HOST>:<PORT>` for network access).

The script calls `python3 -m http.server $PORT --bind $HOST` (or Python 2’s `SimpleHTTPServer`) to serve the static files.

## Bitcoin Payments
- Store and order pages share a single cart; totals are shown in BTC with USD for reference (`store.js` uses a sample `BTC_TO_USD_RATE` constant for display only).
- Checkout presents an on-screen summary and Bitcoin address (`bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5`) with a copy-to-clipboard helper.
- Lightning-friendly: badges and copy prompt visitors to pay via Bitcoin/Lightning; no traditional payment rails are included.
- This is a front-end demo: no backend payment validation or order processing is wired up.

## Business Info (from the site)
- Hours: Mon–Fri 7:00 AM–3:00 PM; Sat–Sun 8:00 AM–4:00 PM.
- Location: 123 Cozy Street, Hometown, ST 12345 (map embed + pickup tips).
- Contact: (555) 123-BREW, hello@backhomebrew.com; demo contact form only.
- Payment: Bitcoin only; Lightning encouraged.

## License
TBD — add your preferred license here.
