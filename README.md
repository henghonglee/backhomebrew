# Back Home Brew - Production Deployment
111
## Quick Deploy

Run the deployment script:

```bash
./deploy.sh
```

The site will be available at `http://localhost:8080`

## Custom Configuration

Set custom port and host:

```bash
PORT=3000 HOST=0.0.0.0 ./deploy.sh
```

## Alternative Methods

### Using Node.js (if available)
```bash
npx serve . -p 8080
```

### Using Nginx
Copy files to your web server directory:
```bash
sudo cp -r * /var/www/html/
```

## Files Structure
- `index.html` - Main homepage
- `store.html` - Store page
- `order.html` - Order page
- `styles.css`, `store.css`, `order.css` - Stylesheets
- `main.js`, `store.js` - JavaScript files
- `background.avif` - Background image
