# Back Home Brew
Static, multi-page site for a home brewing business with simple deployment.

## Pages
- `index.html` — Home
- `store.html` — Store
- `order.html` — Order form
- `contact.html` — Contact form

## Requirements
- Python 3 (preferred) or Python 2 for `./deploy.sh`
- Optional: Node.js for `npx serve`

## Quick Deploy
Run the helper script (serves the site on port 8080 by default):

```bash
./deploy.sh
```

Site opens at `http://localhost:8080`.

## Custom Configuration
Set a custom port and host:

```bash
PORT=3000 HOST=0.0.0.0 ./deploy.sh
```

## Alternative Methods
- Node: `npx serve . -p 8080`
- Nginx (example): `sudo cp -r * /var/www/html/`

## Files Structure
- `index.html` — Homepage
- `store.html` — Store page
- `order.html` — Order page
- `contact.html` — Contact page
- `styles.css`, `store.css`, `order.css`, `contact.css` — Styles
- `main.js`, `store.js` — JavaScript
- `background.avif` — Background image
