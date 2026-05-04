# ☀️ SunCart – Summer Essentials Store

SunCart is a modern summer eCommerce platform where users can explore seasonal products like sunglasses, summer outfits, skincare, and beach accessories. Users can browse products, view details, and manage their profile after authentication.

## 🌐 Live URL
**[https://suncart-rho.vercel.app](https://suncart-rho.vercel.app)**

## 🐙 GitHub Repository
**[https://github.com/yasinarafat342/Suncart](https://github.com/yasinarafat342/Suncart)**

---

## ✨ Key Features

### 🏠 Home Page
- **Hero Slider** — Animated summer sale banner with hot deals
- **Popular Products** — 3 featured products with image, rating, price and View Details button
- **Summer Care Tips** — Expert skincare and wellness advice section
- **Top Brands** — Featured brand showcase section
- **Stats Bar** — Free shipping, easy returns, secure payment info

### 🛍️ Products Page
- Browse all summer products
- **Filter by Category** — Footwear, Accessories, Skincare, etc.
- **Search** — Search products by name or brand
- **Sort** — Sort by price (low/high) or rating
- Product cards with discount badges, stock indicators

### 📦 Product Details Page (Protected)
- Only accessible after login
- If not logged in → redirects to login page
- After login → redirects back to product
- Full product info: image, price, rating, description, tags
- Stock availability indicator
- Trust badges: Free Shipping, Easy Returns, Secure Payment
- Related products section

### 🔐 Authentication
- **Email & Password** — Register and login with email
- **Google OAuth** — One-click Google sign-in
- Toast notifications for success/error feedback
- Secure session management with BetterAuth

### 👤 My Profile
- View logged-in user's name, email, and profile photo
- Account information display

### ✏️ Update Profile
- Update name and profile photo URL
- Live avatar preview while typing
- Instant feedback with toast notification

### 🎨 UI/UX
- Fully responsive — Mobile, Tablet, Desktop
- Sticky Navbar with user avatar dropdown
- Hamburger menu for mobile
- Smooth animations with Framer Motion, Animate.css, React-Spring, Lottie
- Custom sun-themed color scheme
- DaisyUI components

---

## 📦 npm Packages Used

| Package | Purpose |
|---|---|
| `better-auth` | Authentication (Email + Google OAuth) |
| `framer-motion` | Page and component animations |
| `animate.css` | CSS animations |
| `react-spring` | Physics-based hover animations on product cards |
| `@lottiefiles/react-lottie-player` | Lottie animation on login page |
| `react-hot-toast` | Toast notifications |
| `lucide-react` | Icons |
| `react-slick` | Hero slider/carousel |
| `slick-carousel` | Slick carousel CSS |
| `kysely` | SQL query builder |
| `kysely-libsql` | Turso database adapter |
| `@libsql/client` | LibSQL client for Turso |
| `daisyui` | UI component library |
| `tailwindcss` | Utility-first CSS framework |

---

## 🛠️ Tech Stack

- **Next.js 16** — React framework with App Router
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **DaisyUI** — UI components
- **BetterAuth** — Authentication
- **Turso (LibSQL)** — Cloud SQLite database

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yasinarafat342/Suncart.git
cd suncart

# Install dependencies
npm install

# Set up environment variables
# Create .env.local file with the following:
```

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
TURSO_DATABASE_URL=libsql://your-database.turso.io
TURSO_AUTH_TOKEN=your-turso-auth-token
```

```bash
# Run development server
npm run dev
```

---

## 🌍 Deployment

Deployed on **Vercel** with Turso cloud database.

---

## 👨‍💻 Author

Built for **SunCart – Category A8 (Jackfruit) Assignment**