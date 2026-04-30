# ☀️ SunCart – Summer Essentials Store

A modern, full-stack summer eCommerce platform built with Next.js 15, featuring product browsing, protected routes, and full authentication with Google OAuth.

## 🌐 Live URL

> **[https://suncart.vercel.app](https://suncart.vercel.app)**
> *(Replace with your actual deployed URL)*

---

## 📸 Features

- 🛍️ **Product Catalog** — Browse 8+ curated summer products with filtering, search, and sorting
- 🔐 **Authentication** — Email/password + Google OAuth via BetterAuth
- 🛡️ **Protected Routes** — Product detail pages redirect to login if unauthenticated
- 👤 **My Profile** — View account info and stats
- ✏️ **Update Profile** — Update name and profile photo
- 🎠 **Hero Slider** — Animated banner with summer deals
- 🧴 **Summer Care Tips** — Expert skincare & wellness advice
- 🏆 **Top Brands** — Featured brand showcase
- 📱 **Fully Responsive** — Mobile, tablet, and desktop
- 🌟 **Smooth Animations** — Powered by Framer Motion
- 🍞 **Toast Notifications** — Friendly feedback via react-hot-toast

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **DaisyUI** | Component library on top of Tailwind |
| **BetterAuth** | Authentication (email + Google OAuth) |
| **Framer Motion** | Animations and transitions |
| **react-hot-toast** | Toast notifications |
| **Lucide React** | Icon library |

---

## 📦 npm Packages Used

```
better-auth          - Authentication library
framer-motion        - Animations (bonus npm package)
react-hot-toast      - Toast notifications
lucide-react         - Icons
react-slick          - Carousel/slider
slick-carousel       - Slick CSS styles
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/suncart.git
cd suncart

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials (see below)

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# BetterAuth (generate a strong secret)
BETTER_AUTH_SECRET=your-super-secret-key-minimum-32-characters
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth (from Google Cloud Console)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database
DATABASE_URL=file:./suncart.db
```

### Setting up Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project → Enable Google+ API
3. Create OAuth 2.0 credentials
4. Add `http://localhost:3000/api/auth/callback/google` as Authorized Redirect URI
5. Copy Client ID and Secret to `.env.local`

---

## 📁 Project Structure

```
suncart/
├── src/
│   ├── app/
│   │   ├── (main)/             # Routes with Navbar + Footer
│   │   │   ├── page.tsx        # Home page
│   │   │   ├── products/       # Products listing + detail
│   │   │   ├── my-profile/     # Profile page (protected)
│   │   │   └── update-profile/ # Update profile (protected)
│   │   ├── auth/               # Login & Register pages
│   │   ├── api/auth/           # BetterAuth API handler
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   └── ui/                 # ProductCard, HeroSlider, etc.
│   ├── data/
│   │   └── products.json       # Static product data
│   └── lib/
│       ├── auth.ts             # BetterAuth server config
│       └── auth-client.ts      # BetterAuth client config
├── public/                     # Static assets
├── .env.example                # Environment variable template
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 🌍 Deployment (Vercel)

1. Push your code to GitHub
2. Connect your repo on [vercel.com](https://vercel.com)
3. Add all environment variables in Vercel dashboard
4. Update `BETTER_AUTH_URL` and `NEXT_PUBLIC_APP_URL` to your Vercel URL
5. Deploy!

> ⚠️ For production, replace SQLite with a hosted database (e.g., PlanetScale, Neon, Supabase).

---

## 📝 Git Commits Guide

Maintain meaningful commit messages:

```
feat: initialize Next.js project with Tailwind and DaisyUI
feat: add BetterAuth with email and Google OAuth
feat: create products JSON data with 8 summer items
feat: build responsive Navbar with auth state
feat: build Footer with contact and social links
feat: implement animated Hero slider
feat: create ProductCard component with discount badges
feat: add Products listing page with filter and search
feat: implement protected product detail page
feat: add My Profile page with user stats
feat: add Update Profile page with live avatar preview
feat: add Summer Care Tips section
feat: add Top Brands showcase section
chore: add environment variables and README
```

---

## 👨‍💻 Author

Built for the **SunCart – Category A8 Assignment**  
*A modern summer eCommerce platform built with Next.js 15 + BetterAuth*

---

## 📄 License

This project is for educational purposes.
