# Back Home Brew ☕₿

> *Bringing you home to perfect coffee, powered by Bitcoin*

[![Bitcoin Only](https://img.shields.io/badge/Payments-Bitcoin%20Only-orange?style=for-the-badge&logo=bitcoin&logoColor=white)](https://bitcoin.org)
[![Home-Based](https://img.shields.io/badge/Location-Home%20Based-8B4513?style=for-the-badge)](https://backhomebrew.com)
[![Fresh Coffee](https://img.shields.io/badge/Coffee-Fresh%20Daily-6F4E37?style=for-the-badge)](https://backhomebrew.com)

## 🏠 About Back Home Brew

Welcome to **Back Home Brew**, a cozy home-based coffee shop where artisanal coffee meets modern cryptocurrency. We're passionate about serving exceptional coffee brewed with love in our home setup, and we're pioneering the future of coffee payments with Bitcoin-only transactions.

Every cup tells a story of passion, quality, and community. We carefully select, roast, and brew each coffee with the attention and care that only a local, family-run business can provide.

## 🌟 Features

### ☕ Coffee Excellence
- **Artisanal Coffee**: Signature blends roasted in small batches
- **Fresh Daily**: Everything made fresh in our home kitchen
- **Sustainable Sourcing**: Ethically sourced beans with eco-friendly practices

### ₿ Bitcoin Payments
- **Bitcoin Only**: Decentralized, secure, and borderless payments
- **Lightning Network**: Fast processing for instant transactions
- **No Traditional Banking**: Experience the future of money

### 🛒 Unified Shopping Experience
- **Cross-Page Cart**: Seamless shopping across all pages
- **Coffee Orders**: Espresso drinks, lattes, cold brews, and pastries
- **Merchandise Store**: T-shirts, caps, mugs, and coffee accessories
- **Delivery & Pickup**: Home delivery or pickup options

## 📁 Project Structure

```
back-home-brew/
├── index.html          # Main landing page with about, menu, testimonials, contact
├── store.html          # Merchandise store with Bitcoin pricing
├── order.html          # Coffee ordering system with delivery options
├── main.js             # Core JavaScript functionality
├── store.js            # Shopping cart and Bitcoin payment system
├── styles.css          # Global styles and responsive design
├── store.css           # Store-specific styles
├── order.css           # Order page specific styles
├── deploy.sh           # Simple deployment script
└── background.avif     # Hero background image
```

### Page Overview

#### 🏠 `index.html` - Home Page
- **Hero Section**: Welcome message and call-to-action
- **About**: Our story and values (home-based, sustainable, community)
- **Menu**: Coffee offerings preview
- **Testimonials**: Customer reviews
- **Contact**: Hours, location, and Bitcoin payment info

#### 🛍️ `store.html` - Merchandise Store
- **Premium Products**: T-shirts, caps, mugs, hoodies, bags, tumblers
- **Bitcoin Pricing**: All prices in BTC, sats, and USD reference
- **Product Options**: Size and color selections
- **Bitcoin Benefits**: Security, speed, and global accessibility

#### 📋 `order.html` - Coffee Ordering
- **Category Navigation**: Espresso, Specialty, Cold Brew, Pastries
- **Customizable Orders**: Size, milk options, and customizations
- **Delivery Options**: Home delivery (free within 3 miles) or pickup
- **Real-time Pricing**: BTC conversion with sats display

## 🛒 Shopping Cart System

Our unified shopping cart works seamlessly across all pages, allowing you to mix coffee orders with merchandise purchases.

### Cart Features
- **Persistent**: Cart contents maintained across page navigation
- **Real-time Updates**: Live totals in BTC and USD
- **Item Management**: Add, remove, and customize items
- **Cross-Page Sync**: Works on index, store, and order pages

### Bitcoin Checkout Flow

1. **Add Items**: Select products and customize options
2. **Review Cart**: View all items with BTC pricing
3. **Bitcoin Payment**: Receive payment address and amount
4. **Send Payment**: Transfer exact BTC amount
5. **Confirm Order**: Email transaction ID to complete

## ₿ Bitcoin Integration

### Payment Details
- **Bitcoin Address**: `bc1qak0r24z2elxnku9akznhap2ppg3pjpwsg2hds5`
- **Network**: Bitcoin (BTC) with Lightning Network support
- **Pricing**: All prices calculated in Bitcoin first, USD for reference
- **Sats Display**: Satoshi (sat) denominations for micro-payments

### Why Bitcoin?
- **🔒 Secure**: Decentralized and encrypted transactions
- **⚡ Fast**: Lightning Network enables instant payments
- **🌍 Global**: No borders, no traditional banking limits
- **💰 Future-Proof**: Digital gold for the modern economy

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Bitcoin wallet (Electrum, Phoenix, or any BTC wallet)
- Internet connection for accessing external images

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/back-home-brew.git
   cd back-home-brew
   ```

2. **Start local server**:
   ```bash
   # Using the deployment script
   ./deploy.sh

   # Or manually with Python
   python3 -m http.server 8080
   ```

3. **Open in browser**:
   ```
   http://localhost:8080
   ```

### Deployment

The project includes a simple deployment script for production:

```bash
# Set custom port and host if needed
export PORT=3000
export HOST=0.0.0.0
./deploy.sh
```

## 📖 Usage Guide

### Browsing the Store
1. Navigate to the **Store** page from any page
2. Browse merchandise categories
3. Select size/color options for each product
4. Click "Add to Cart" to add items

### Ordering Coffee
1. Go to the **Order** page
2. Choose a category (Espresso, Specialty, Cold Brew, Pastries)
3. Customize your drink (size, milk type)
4. Add to cart and proceed to checkout

### Making a Bitcoin Payment
1. Complete your order and click "Checkout with Bitcoin"
2. Copy the Bitcoin address displayed
3. Send the exact BTC amount from your wallet
4. Email `orders@backhomebrew.com` with your transaction ID
5. We'll confirm and prepare your order!

## 🏭 Technical Details

### Built With
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Responsive design with custom properties
- **Vanilla JavaScript**: No frameworks, pure ES6+ code
- **Bitcoin Integration**: Direct BTC address payments

### Browser Support
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

### Performance
- Lightweight: No heavy frameworks or libraries
- Fast loading: Optimized images and minimal dependencies
- Responsive: Works perfectly on mobile and desktop

## 🤝 Contributing

We welcome contributions from the Bitcoin and coffee communities!

### Ways to Contribute
- **Bug Reports**: Found an issue? Let us know!
- **Feature Requests**: Have ideas for new features?
- **Code Improvements**: Submit pull requests for enhancements
- **Bitcoin Education**: Help spread awareness of BTC payments

### Development Guidelines
- Follow existing code patterns and structure
- Test across different browsers and devices
- Maintain the home-based coffee shop philosophy
- Keep Bitcoin-first pricing approach

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Back Home Brew**
- **Hours**: Monday-Friday 7AM-3PM, Saturday-Sunday 8AM-4PM
- **Location**: 123 Cozy Street, Hometown, ST 12345
- **Phone**: (555) 123-BREW
- **Email**: hello@backhomebrew.com
- **Orders**: orders@backhomebrew.com
- **Social**: @backhomebrew

## ☕ Our Philosophy

We're not just serving coffee—we're creating connections. In a world of corporate chains and digital isolation, Back Home Brew represents a return to authentic, community-driven business. By combining traditional coffee craftsmanship with cutting-edge Bitcoin technology, we're building bridges between the comfort of home and the innovation of tomorrow.

**Welcome home to perfect coffee. Welcome to the future of payments.**

---

*Made with ❤️ and lots of coffee in our cozy home setup*  
*Powered by ₿ Bitcoin*