# Back Home Brew ☕⌂

[![Bitcoin](https://img.shields.io/badge/Bitcoin-₿-f7931a?style=flat-square&logo=bitcoin&logoColor=white)](https://bitcoin.org)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Welcome to **Back Home Brew**, a unique coffee shop concept that brings café-quality coffee directly from a cozy home-based setup. We're pioneering the future of local commerce by accepting Bitcoin payments exclusively, creating a seamless blend of traditional craftsmanship and modern cryptocurrency.

## 🏠 About Back Home Brew

Back Home Brew represents a revolutionary approach to local coffee shops. Operating from a comfortable home environment, we provide:

- **Artisanal Coffee**: Carefully sourced, roasted, and brewed with the personal attention that only a family-run business can offer
- **Bitcoin-Only Payments**: Embracing decentralized currency for secure, borderless transactions
- **Home-Based Charm**: Experience the warmth and authenticity of a neighborhood coffee shop from the comfort of our home
- **Community Focus**: Supporting local communities one cup at a time
- **Sustainable Practices**: Ethically sourced beans with eco-friendly operations

Our vision is to demonstrate that great coffee doesn't need a fancy storefront – it needs passion, quality, and a welcoming atmosphere that feels like home.

## 📁 Project Structure

```
back-home-brew/
├── index.html          # Landing page with shop information and menu
├── store.html          # Merchandise store with Bitcoin checkout
├── order.html          # Coffee ordering system with delivery options
├── styles.css          # Global styles and responsive design
├── store.css           # Store-specific styling
├── order.css           # Order page styling
├── main.js            # Navigation and mobile menu functionality
├── store.js           # Unified shopping cart and Bitcoin payment system
├── deploy.sh          # Simple deployment script
├── background.avif    # Hero background image
└── README.md          # This documentation
```

## ✨ Key Features

### 🛍️ Unified Shopping Cart System
- **Cross-Page Functionality**: Single cart that works seamlessly across all pages (index, store, order)
- **Real-Time Updates**: Live cart count and pricing calculations
- **Persistent State**: Cart contents maintained during navigation
- **Mobile Optimized**: Touch-friendly interface with responsive design

### ₿ Bitcoin Payment Integration
- **Exclusive BTC Payments**: No traditional payment methods accepted
- **Real-Time Conversion**: Automatic BTC to USD pricing with hardcoded exchange rates
- **Satoshi Precision**: Prices displayed in both BTC and satoshi denominations
- **Lightning Network Ready**: Optimized for fast, low-fee transactions

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for smartphones and tablets
- **Adaptive Navigation**: Collapsible mobile menu with cart integration
- **Touch-Friendly**: Large buttons and intuitive touch interactions
- **Cross-Device Sync**: Consistent experience across all devices

### ☕ Coffee Ordering System
- **Category-Based Menu**: Espresso drinks, specialty coffee, cold brews, and pastries
- **Customization Options**: Size, milk type, and pastry selections
- **Dynamic Pricing**: Real-time price adjustments based on customizations
- **Delivery Options**: Home delivery and pickup choices

### 🛒 Merchandise Store
- **Premium Products**: T-shirts, caps, mugs, hoodies, and accessories
- **Product Variants**: Size and color options for applicable items
- **Visual Product Cards**: High-quality images with detailed descriptions
- **Instant Add to Cart**: One-click purchasing with immediate feedback

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd back-home-brew
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build tools or dependencies required
   - Works offline after initial load

3. **Alternative: Use the deployment script**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```
   Access at: http://localhost:8080

### Navigation

- **🏠 Home**: `index.html` - Learn about our story and browse the menu
- **🛍️ Store**: `store.html` - Shop merchandise with Bitcoin payments
- **📋 Order**: `order.html` - Order coffee for delivery or pickup
- **📱 Mobile**: Touch the hamburger menu for mobile navigation

## 🏗️ Architecture Overview

### Unified Cart Architecture

The shopping cart system is built around a centralized JavaScript module (`store.js`) that provides:

```javascript
// Core cart data structure
let cart = [
  {
    id: Date.now(),
    productId: "tshirt",
    name: "Back Home Brew T-Shirt",
    btcPrice: 0.0008,
    usdPrice: 25.00,
    options: "Size: M, Color: Black",
    quantity: 1,
    type: "merchandise" // or "coffee"
  }
];
```

### Key Components

1. **Cart Management Functions**
   - `addToCart()` / `addToOrder()`: Add items with validation
   - `removeFromCart()`: Remove items with UI updates
   - `updateCartUI()`: Real-time cart display updates
   - `toggleCart()`: Sidebar cart toggle functionality

2. **Bitcoin Integration**
   - `btcToSats()`: Convert BTC amounts to satoshis
   - `checkout()`: Generate payment instructions
   - `copyBitcoinAddress()`: Clipboard functionality
   - Hardcoded BTC/USD rate: `BTC_TO_USD_RATE = 31250`

3. **UI State Management**
   - Cart count synchronization across desktop/mobile
   - Overlay management for cart sidebar
   - Success message animations
   - Modal checkout interface

### Data Flow

```
User Action → Validation → Cart Update → UI Refresh → Persistent State
     ↓              ↓          ↓          ↓             ↓
  Add to Cart → Check Options → Push to Array → DOM Update → Local Storage*
```

*Note: Cart state is currently session-based. Future enhancement could add localStorage persistence.

## ₿ Bitcoin Payment Workflow

### Price Calculation
- **Base Pricing**: All prices calculated in BTC first, USD for reference
- **Exchange Rate**: Currently hardcoded at $31,250 USD per BTC
- **Satoshi Display**: All prices shown in satoshi denominations (1 BTC = 100,000,000 sats)

### Payment Process

1. **Add Items to Cart**
   - Select products with size/color options
   - Real-time BTC and USD price display
   - Cart sidebar updates automatically

2. **Review Order**
   - Unified cart shows all items across pages
   - Total calculation in both BTC and USD
   - Delivery method selection (orders only)

3. **Bitcoin Checkout**
   - Click "Checkout with Bitcoin" button
   - Modal displays payment address: `bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5`
   - Shows exact BTC amount required
   - Copy address to clipboard functionality

4. **Complete Payment**
   - Send exact BTC amount to displayed address
   - Email transaction ID to `orders@backhomebrew.com`
   - Order processing begins after confirmation

### Security Features
- **Exact Amount Required**: Prevents over/under payments
- **Address Validation**: Standard Bech32 Bitcoin address format
- **Transaction Tracking**: Email confirmation system
- **No Personal Data**: Privacy-focused checkout process

## 🎨 Design System

### Color Palette
- **Primary**: Warm coffee brown (#8B4513)
- **Accent**: Bitcoin orange (#f7931a)
- **Background**: Cream (#F5F5DC)
- **Text**: Dark brown (#2F1B14)

### Typography
- **Primary Font**: Raleway (Google Fonts) - Headers and branding
- **Secondary Font**: Inter (Google Fonts) - Body text and UI
- **Hierarchy**: Clear heading structure with consistent spacing

### Iconography
- **House Icon**: Custom SVG for "home" branding
- **Bitcoin Symbol**: ₿ integrated throughout the interface
- **Bootstrap Icons**: Shopping bag, navigation elements

## 🔧 Technical Details

### Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Requirements**: JavaScript enabled, modern CSS support

### Performance
- **No Dependencies**: Pure HTML/CSS/JS - zero external dependencies
- **Fast Loading**: Optimized images and minimal HTTP requests
- **Offline Capable**: Works without internet after initial load
- **Font Loading**: Preconnect to Google Fonts for optimal performance

### Limitations
- **Exchange Rate**: BTC/USD rate is hardcoded (needs API integration for production)
- **No Persistence**: Cart clears on page refresh (enhancement opportunity)
- **No Backend**: Currently frontend-only (orders via email)
- **Font Dependency**: Requires internet for Google Fonts loading

## 🤝 Contributing

We welcome contributions to make Back Home Brew even better! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following our guidelines
4. Test across different browsers and devices
5. Submit a pull request

### Code Guidelines
- **No Trailing Whitespace**: Keep code clean and consistent
- **Semantic HTML**: Use proper HTML5 semantic elements
- **Accessible Design**: Ensure WCAG compliance for all new features
- **Mobile First**: Design for mobile, enhance for desktop
- **Bitcoin Focus**: Maintain our Bitcoin-only payment philosophy

### Testing Checklist
- [ ] Works on mobile devices (iOS Safari, Chrome Mobile)
- [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Cart functionality across all pages
- [ ] Bitcoin payment flow completes successfully
- [ ] No JavaScript errors in console
- [ ] Responsive design at all breakpoints

## 🗺️ Future Roadmap

### Phase 1: Enhanced Bitcoin Integration
- [ ] Real-time BTC/USD exchange rate API
- [ ] Lightning Network payment integration
- [ ] Multi-signature wallet support
- [ ] Payment confirmation via blockchain API

### Phase 2: User Experience Improvements
- [ ] Cart persistence with localStorage
- [ ] Order history and reordering
- [ ] Customer account system (Bitcoin-based authentication)
- [ ] Push notifications for order status
- [ ] Progressive Web App (PWA) capabilities

### Phase 3: Business Expansion
- [ ] Multi-location support
- [ ] Inventory management system
- [ ] Analytics dashboard
- [ ] Automated order processing
- [ ] Partnership program for other home-based businesses

### Phase 4: Community Features
- [ ] Customer reviews and ratings
- [ ] Loyalty program (Satoshi-based rewards)
- [ ] Community events calendar
- [ ] Recipe sharing platform
- [ ] Educational Bitcoin content

## 📞 Support

### For Customers
- **Orders**: orders@backhomebrew.com
- **General**: hello@backhomebrew.com
- **Location**: 123 Cozy Street, Hometown, ST 12345
- **Hours**: Mon-Fri 7AM-3PM, Sat-Sun 8AM-4PM

### For Developers
- **Issues**: GitHub Issues for bug reports and feature requests
- **Discussions**: GitHub Discussions for questions and ideas
- **Bitcoin Address**: bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ☕ Acknowledgments

- **Bitcoin Community**: For pioneering decentralized commerce
- **Local Coffee Lovers**: For believing in our home-based vision
- **Open Source Community**: For the tools and inspiration
- **Home-Based Entrepreneurs**: For showing that great businesses can start at home

---

**Back Home Brew** - Bringing you home to perfect coffee, powered by Bitcoin. ☕₿⌂

*Made with ❤️ and lots of coffee in our cozy home setup.*