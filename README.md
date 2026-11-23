# Cake Castle | Pure Veg Bakery — Official Website

A fast, accessible, responsive, mobile-first website for **Cake Castle | Pure Veg Bakery** located in Yerawada, Pune. Built with React, Vite, Tailwind CSS, and React Router.

Deliverable as a zero-dependency static web application ready for instant deployment on **Vercel**, **Netlify**, **GitHub Pages**, or any static web host.

---

## 🎂 About the Business

- **Listing Name**: Cake Castle | Pure Veg Bakery
- **Category**: Bakery and Cake Shop (100% Pure Veg / Eggless)
- **Verified Address**: 120B/2, Ram Society, Near Hariganga Society, Yerawada, Pune, Maharashtra 411006
- **Coordinates & Plus Code**: 18.5565682, 73.8782926 | Plus Code: `HV4H+J8 Pune, Maharashtra`
- **Verified Phone**: `+91 98220 11735`
- **Google Maps Rating**: 4.8 / 5.0 Stars (12 Reviews)
- **Opening Hours**: Open daily from 8:00 AM – 11:00 PM (Monday through Sunday)
- **Verified Listing Prices**:
  - White Forest Cake (500g): ₹399
  - Chocolate Mawa Cake: ₹159
  - Traditional Plum Cake: ₹149
  - Black Forest / Pineapple Pastry: ₹39
  - Gourmet Cupcakes: ₹79

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- Node.js (version 18 or higher)
- npm or pnpm

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory with zero errors.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deploy to Static Hosting

### Deploy to Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or import your Git repository in the [Vercel Dashboard](https://vercel.com).
2. Set Build Command: `npm run build`
3. Set Output Directory: `dist`
4. The included `vercel.json` automatically handles SPA routing and rewrites.

### Deploy to Netlify
1. Connect your Git repository via [Netlify](https://app.netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. The included `public/_redirects` file automatically handles single-page app direct links and refreshes.

---

## 🔑 Demo Owner Credentials

The Owner Portal demonstrates real-time order tracking and transaction logs without requiring a backend:
- **URL**: `/login` (or click "Owner" in the navigation bar)
- **Demo Email**: `owner@demo.com`
- **Demo Password**: `demo1234`

---

## 📁 Project Architecture & Data Configuration

```
cake-castle/
├── public/
│   ├── images/                # Locally saved WebP images (Google Maps & web samples)
│   └── _redirects             # Netlify SPA rewrite configuration
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx         # Sticky header with crown motif and cart counter
│   │   ├── Footer.jsx         # Contact, hours, address, and social links
│   │   ├── FloatingCTA.jsx    # Mobile floating Call & WhatsApp buttons
│   │   ├── PureVegBadge.jsx   # Standard FSSAI green dot pure-veg emblem
│   │   ├── SampleImageBadge.jsx# Unobtrusive "Sample image" badge
│   │   └── OpenStatusBadge.jsx# Live "Open Now" / "Closed" dynamic schedule pill
│   ├── context/
│   │   ├── CartContext.jsx    # Cart state management (persisted to localStorage)
│   │   └── AuthContext.jsx    # Owner authentication state (sessionStorage)
│   ├── data/
│   │   ├── business.js        # Single source of truth for business data & placeholders
│   │   ├── menu.js            # Menu items with verified pricing and image metadata
│   │   ├── reviews.js         # Real Google Maps customer reviews
│   │   └── sampleOrders.js    # Sample orders & payment records for owner dashboard
│   ├── pages/
│   │   ├── Home.jsx           # Hero, about, popular items, gallery, booking, FAQ
│   │   ├── Menu.jsx           # Category filters, search, and Add to Cart
│   │   ├── Location.jsx       # Embedded Google Maps iframe and hours breakdown
│   │   ├── Contact.jsx        # Phone, WhatsApp, email placeholder, contact form
│   │   ├── Cart.jsx           # Cart review, customer details, demo checkout
│   │   ├── OwnerLogin.jsx     # Owner portal login with demo credentials
│   │   └── OwnerDashboard.jsx # Analytics, order status filters, and payments
│   ├── App.jsx                # Routing & Providers
│   ├── index.css              # Tailwind CSS styles and theme variables
│   └── main.jsx               # Entrypoint
├── index.html                 # SEO meta tags, Google Fonts, LocalBusiness JSON-LD
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # Custom bakery color tokens
├── vercel.json                # Vercel deployment rewrite configuration
└── vite.config.js             # Vite configuration
```

---

## ✏️ Placeholders to Fill

All configurable details live in `src/data/business.js`:
- `email`: `[ADD EMAIL]`
- `socials.instagram`: `[ADD INSTAGRAM HANDLE]`
- `socials.facebook`: `[ADD FACEBOOK LINK]`
- `offers`: Clearly marked sample promotional offers
