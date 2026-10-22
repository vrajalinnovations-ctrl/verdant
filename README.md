# Verdant Estates — Ultra-Luxury Real Estate & Architectural Residences React Template

**Verdant Estates** is a premium, modern, and fully responsive React 19 web application template crafted specifically for ultra-luxury real estate agencies, architectural property developers, private estate brokers, and high-end residential portfolios.

Engineered with **React 19**, **Vite**, and **Tailwind CSS**, it features dual luxury homepage variations, a full 5-stage client authentication suite, dedicated 404 & 500 error pages, fluid smooth scrolling, instant Dark/Light mode switching, RTL multilingual direction support, and 100% offline-bundled assets.

---

## 🌟 Key Features

- **Built with React 19 & Vite**: Blazing fast Hot Module Replacement (HMR) and optimized production bundles.
- **Tailwind CSS**: Clean, semantic utility styling adhering strictly to modern production standards without arbitrary bracket clutter.
- **100% Local & Offline Bundled Assets**: Zero external image CDN or live URL dependencies. All high-resolution architecture photos (`src/assets/house/`) and client avatars (`src/assets/user/`) are packaged and bundled locally.
- **Dual Luxury Homepage Hero Designs**:
  - **Hero 1 (`/` and `/hero1`)**: Split-screen editorial showcase with multi-tab search filter, live metrics bar, and interactive property showcase cards.
  - **Hero 2 (`/hero2`)**: Full-bleed cinematic panoramic estate slider with smooth dissolves, live GPS coordinates pill, floating flagship valuation card, and curated search dock.
- **Complete 5-Stage Authentication Suite**:
  - **Client Portal Login (`/login`)**: Secure vault unlock with passkey authentication and Google / Apple SSO options.
  - **Investor Accreditation (`/register`)**: Client tier selection (Accredited Investor, Family Office, Institution) with integrated NDA covenant agreement.
  - **Passkey Recovery (`/forgot-password`)**: Security reset request automatically routing to verification.
  - **Two-Factor OTP Verification (`/verify`)**: 6-digit auto-advancing verification boxes with 45-second resend countdown timer.
  - **Confirm & Reset Passkey (`/confirm-password`)**: Interactive 4-point security criteria checklist with live feedback and success confirmation modal.
  - *Note: All auth pages feature a clean, distraction-free luxury aesthetic without navbar or footer interference.*
- **Custom Error Pages**:
  - **404 Not Found (`*`)**: Luxury page with quick navigation back to showcase.
  - **500 Server Error (`/500`)**: Architectural maintenance and emergency contact screen.
- **Dark & Light Mode**: Instant, high-contrast theme switching with persistent `localStorage` storage and tailored button variants (`white`, `glass`, `accent`) that look pristine in both modes.
- **RTL (Right-to-Left) Multilingual Support**: One-click LTR/RTL direction toggle in the navbar managing `dir="rtl"` and document layout flow for Middle Eastern and global audiences.
- **Inertial Smooth Scrolling**: Powered by `@studio-freight/lenis` for an ultra-luxurious browsing feel.
- **100% JSON-Driven Content**: All property listings, architectural developments, neighborhood guides, testimonials, and contact details are centralized in `src/data/` for easy code-free updates.

---

## 📁 Project Structure

```text
verdant-estates/
├── public/                     # Static public assets (brand logos, documentation)
│   ├── logo/
│   │   ├── logo-dark.png
│   │   └── logo-light.png
│   └── documentation/
├── src/
│   ├── assets/                 # Local high-resolution media assets
│   │   ├── house/              # Local architectural property photography
│   │   │   ├── 1.jpg
│   │   │   ├── 2.jpg
│   │   │   ├── 3.jpg
│   │   │   ├── 4.jpg
│   │   │   ├── 5.jpg
│   │   │   ├── 6.jpg
│   │   │   └── 7.jpg
│   │   └── user/               # Local client & partner avatar photography
│   │       ├── avatar-1.jpg
│   │       ├── avatar-2.jpg
│   │       ├── avatar-3.jpg
│   │       ├── avatar-4.jpg
│   │       ├── avatar-5.jpg
│   │       ├── avatar-6.jpg
│   │       ├── avatar-7.jpg
│   │       └── avatar-8.jpg
│   ├── components/
│   │   ├── layout/             # Layout navigation and footer components
│   │   │   ├── footer1.jsx     # Luxury multi-column footer with newsletter
│   │   │   └── navbar1.jsx     # Sticky navbar with Theme, RTL, Login, & CTA
│   │   ├── sections/           # Modular, reusable page sections
│   │   │   ├── about.jsx           # Agency story, vision, and core pillars
│   │   │   ├── developments.jsx    # Landmark architectural master projects
│   │   │   ├── herocard.jsx        # Interactive property card carousel
│   │   │   ├── metrics.jsx         # Performance metrics & transaction volume
│   │   │   ├── neighborhoods.jsx   # Curated enclave & neighborhood guides
│   │   │   ├── properties.jsx      # Filterable featured portfolio grid
│   │   │   ├── schedule.jsx        # Private viewing reservation booking
│   │   │   ├── search.jsx          # Multi-criteria property search dock
│   │   │   ├── showcase.jsx        # Editorial architectural spotlight & stats
│   │   │   ├── stats.jsx           # Global metrics bar
│   │   │   ├── testimonials.jsx    # Dual-row marquee client reflections
│   │   │   └── trust.jsx           # Trust badges & confidentiality covenants
│   │   └── ui/                 # Atomic UI design system components
│   │       ├── badge.jsx       # Badges with glass, outline, & pulse dots
│   │       ├── button.jsx      # Buttons with primary, white, glass, & accent variants
│   │       └── card.jsx        # Glassmorphic & elevated card containers
│   ├── context/
│   │   └── themecontext.jsx    # Theme (Dark/Light) & Direction (LTR/RTL) provider
│   ├── data/                   # Centralized JSON configuration & data
│   │   ├── aboutdata.json
│   │   ├── developmentsdata.json
│   │   ├── footerdata.json
│   │   ├── herodata.json
│   │   ├── houseimages.js      # Bundled local house asset resolver
│   │   ├── navbardata.json
│   │   ├── neighborhoodsdata.json
│   │   ├── propertiesdata.json
│   │   ├── scheduledata.json
│   │   ├── showcasedata.json
│   │   └── testimonialsdata.json
│   ├── pages/                  # Top-level page routes
│   │   ├── auth/               # Luxury client authentication suite
│   │   │   ├── confirmpassword.jsx # Passkey reset with validation checklist
│   │   │   ├── forgotpassword.jsx  # Email passkey recovery request
│   │   │   ├── login.jsx           # Private client portal vault login
│   │   │   ├── register.jsx        # Investor accreditation application
│   │   │   └── verify.jsx          # 6-digit auto-advancing OTP verification
│   │   ├── hero1.jsx           # Homepage Variant 1 (Editorial Split Showcase)
│   │   ├── hero2.jsx           # Homepage Variant 2 (Cinematic Panoramic Slider)
│   │   ├── notfound.jsx        # 404 Page Not Found
│   │   └── servererror.jsx     # 500 Internal Server Error
│   ├── routes/
│   │   └── approutes.jsx       # React Router route registry
│   ├── app.jsx                 # Application root with Smooth Scroll & Theme
│   ├── index.css               # Tailwind CSS & custom scroll animations
│   └── main.jsx                # React DOM entry point
├── eslint.config.js            # Strict ESLint configuration
├── index.html                  # HTML5 entry with comprehensive SEO & OpenGraph tags
├── package.json                # Project dependencies, scripts, and metadata
└── vite.config.js              # Vite build tool configuration
```

---

## 🚀 Quick Start Guide

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version **18.x** or higher) and `npm` installed.

### 1. Installation
Extract the download archive, navigate into the project directory, and install dependencies:
```bash
npm install
```

### 2. Run Locally in Development Mode
Start the Vite local development server with instant Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 3. Production Build
Compile and bundle the project for production deployment:
```bash
npm run build
```
The optimized static build will be generated in the `/dist` folder, ready for deployment on any static hosting provider (Vercel, Netlify, Cloudflare Pages, AWS S3, Apache, Nginx).

### 4. Preview Production Build
Preview the production build locally before uploading:
```bash
npm run preview
```

### 5. Run Lint Check
Verify that all files comply with strict ESLint standards:
```bash
npm run lint
```

---

## 📄 Pages & Routes Included

| Route | Component | Description |
| :--- | :--- | :--- |
| `/` | `Hero1` | Full luxury real estate landing page (Hero 1 - Editorial Split Showcase) |
| `/hero1` | `Hero1` | Direct route for Homepage Variant 1 |
| `/hero2` | `Hero2` | Homepage Variant 2 (Cinematic Full-Screen Panoramic Estate Slider) |
| `/login` | `Login` | Client vault login with passkey authentication and SSO |
| `/register` | `Register` | Investor accreditation application with client tier & NDA |
| `/forgot-password` | `ForgotPassword` | Passkey recovery request |
| `/verify` | `Verify` | 6-digit OTP verification with countdown timer |
| `/confirm-password` | `ConfirmPassword` | Set new passkey with live 4-point security criteria checklist |
| `/500` | `ServerError` | Dedicated luxury 500 Internal Server Error page |
| `*` | `NotFound` | Dedicated luxury 404 Page Not Found error page |

---

## 🎨 Content Customization (Code-Free)

All property listings, developments, reviews, and company details can be customized directly in `src/data/` without modifying React JSX components:

| Data File | Description & Contents |
| :--- | :--- |
| `navbardata.json` | Brand name, subtitle, navigation links, concierge phone number. |
| `herodata.json` | Hero headline, property previews, search tabs, and metric counters. |
| `propertiesdata.json` | Featured estates, pricing, categories (Villa, Penthouse, Waterfront), beds, baths, and square footage. |
| `developmentsdata.json` | Architectural master projects, completion dates, lead architects, and amenity lists. |
| `neighborhoodsdata.json` | Enclave guides, average price growth YoY, active listing counts, and lifestyle scores. |
| `testimonialsdata.json` | Client reviews, transaction details, star ratings, and local avatar assignments. |
| `scheduledata.json` | Private viewing scheduling slots, consultation options, and contact fields. |
| `aboutdata.json` | Company heritage, key statistics, and core pillars of discretion. |
| `footerdata.json` | Multi-column links, office locations, social profiles, and copyright notice. |
| `houseimages.js` | Centralized local property image mapping module. |

---

## 🖼️ Working with Images

- **Property & Development Photos**: Placed in `src/assets/house/` (`1.jpg` through `7.jpg`).
- **Client & Partner Avatars**: Placed in `src/assets/user/` (`avatar-1.jpg` through `avatar-8.jpg`).
- To swap an image, replace the file in the respective folder or add your own image and update the corresponding reference in `src/data/`.

---

## 📦 Dependencies & Credits

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Smooth Inertial Scrolling**: [Lenis](https://lenis.darkroom.engineering/)

---

## 📄 License & Support

- **License**: Commercial / Standard License.
- **Author**: vrajalinnovations
- **Support**: For questions, customization assistance, or technical inquiries, please contact vrajalinnovations.
