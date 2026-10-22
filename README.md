# Verdant Estates — Ultra-Luxury Real Estate & Architectural Residences React Template

**Verdant Estates** is a premium, modern, and fully responsive React 19 web application template crafted specifically for ultra-luxury real estate agencies, architectural property developers, private estate brokers, and high-end residential portfolios.

Engineered with **React 19**, **Vite**, and **Tailwind CSS**, it features dual luxury homepage variations, dedicated standalone pages for **Properties**, **Features**, **About**, and **Contact**, a full 5-stage client authentication suite, dedicated 404 & 500 error pages, fluid smooth scrolling, instant Dark/Light mode switching, RTL multilingual direction support, and 100% offline-bundled assets.

---

## 🌟 Key Features

- **Built with React 19 & Vite**: Blazing fast Hot Module Replacement (HMR) and optimized production bundles.
- **Tailwind CSS**: Clean, semantic utility styling adhering strictly to modern production standards without arbitrary bracket clutter.
- **100% Local & Offline Bundled Assets**: Zero external image CDN or live URL dependencies. All high-resolution architecture photos (`src/assets/house/`) and client avatars (`src/assets/user/`) are packaged and bundled locally.
- **Dual Luxury Homepage Hero Designs**:
  - **Hero 1 (`/` and `/hero1`)**: Split-screen editorial showcase with multi-tab search filter, live metrics bar, and interactive property showcase cards.
  - **Hero 2 (`/hero2`)**: Full-bleed cinematic panoramic estate slider with smooth dissolves, live GPS coordinates pill, floating flagship valuation card, and curated search dock.
- **Dedicated Standalone Pages**:
  - **Properties Portfolio (`/properties`)**: Comprehensive catalog with keyword search, category filter chips (Villa, Penthouse, Waterfront, Estate), price range and bedroom filters, sorting (Featured, Price, Sq Ft), Grid vs. List view switcher, and interactive full-screen property detail modal with multi-image gallery, architectural narrative, and tour booking.
  - **Features & Architectural Standards (`/features`)**: Interactive showcase of smart home automation, master craftsmanship, private wellness suites, sovereign security envelopes, net-zero eco-engineering, and comparative specifications matrix.
  - **About Our Heritage (`/about`)**: 30-year legacy narrative, historical milestones timeline (1994–2026), senior principals & architectural curators, international office hubs, and private consultation desk.
  - **Contact & Private Advisory (`/contact`)**: Multi-channel advisory portal with interactive booking for in-person and 4K virtual viewings, confidential acquisition requests, 24/7 concierge lines, and international office directory.
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
- **Inertial Smooth Scrolling & Modal Fit**: Powered by `@studio-freight/lenis` with `data-lenis-prevent` and hidden scrollbar utilities (`.no-scrollbar`) for flawless nested modal scrolling and viewport fit.
- **100% JSON-Driven Content**: All property listings, architectural features, developments, neighborhood guides, testimonials, and contact details are centralized in `src/data/` for easy code-free updates.

---

## 📁 Project Structure

```text
verdant-estates/
├── public/                     # Static public assets (brand logos, documentation, sitemap)
│   ├── logo/
│   │   ├── logo-dark.png
│   │   └── logo-light.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/                 # Local high-resolution media assets
│   │   ├── house/              # Local architectural property photography (1.jpg - 7.jpg)
│   │   └── user/               # Local client & partner avatar photography (avatar-1.jpg - 8.jpg)
│   ├── components/
│   │   ├── layout/             # Layout navigation and footer components
│   │   │   ├── footer1.jsx     # Luxury multi-column footer with newsletter & router links
│   │   │   └── navbar1.jsx     # Sticky navbar with Home, Properties, Features, About, Contact, Theme & RTL
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
│   │       ├── card.jsx        # Glassmorphic & elevated card containers
│   │       └── seo.jsx         # SEO meta tags, OpenGraph, Twitter cards & canonical URLs
│   ├── context/
│   │   └── themecontext.jsx    # Theme (Dark/Light) & Direction (LTR/RTL) provider
│   ├── data/                   # Centralized JSON configuration & data
│   │   ├── aboutdata.json          # Heritage narrative, career metrics, pillars, and contact info
│   │   ├── developmentsdata.json   # Master communities and development projects
│   │   ├── featuresdata.json       # Architectural features, specifications, and comparison table
│   │   ├── footerdata.json         # Footer columns, direct page links, and newsletter data
│   │   ├── herodata.json           # Hero headlines, metrics, search tabs, and categories
│   │   ├── houseimages.js          # Centralized local property image resolver
│   │   ├── navbardata.json         # Brand name, subtitle, and top navigation routes
│   │   ├── neighborhoodsdata.json  # Global enclaves, YoY price growth, and market stats
│   │   ├── propertiesdata.json     # Detailed properties with descriptions, amenities, and specs
│   │   ├── scheduledata.json       # Tour formats, time slots, and international office locations
│   │   ├── showcasedata.json       # Architecture showcase statistics and tabs
│   │   └── testimonialsdata.json   # Verified client reviews, ratings, and avatar mappings
│   ├── pages/                  # Top-level page routes
│   │   ├── auth/               # Luxury client authentication suite
│   │   │   ├── confirmpassword.jsx # Passkey reset with validation checklist
│   │   │   ├── forgotpassword.jsx  # Email passkey recovery request
│   │   │   ├── login.jsx           # Private client portal vault login
│   │   │   ├── register.jsx        # Investor accreditation application
│   │   │   └── verify.jsx          # 6-digit auto-advancing OTP verification
│   │   ├── aboutpage.jsx       # Dedicated About Us page
│   │   ├── contactpage.jsx     # Dedicated Contact & Private Advisory page
│   │   ├── featurespage.jsx    # Dedicated Features & Architectural Standards page
│   │   ├── hero1.jsx           # Homepage Variant 1 (Editorial Split Showcase)
│   │   ├── hero2.jsx           # Homepage Variant 2 (Cinematic Panoramic Slider)
│   │   ├── notfound.jsx        # 404 Page Not Found
│   │   ├── propertiespage.jsx  # Dedicated Properties Portfolio Catalog page
│   │   └── servererror.jsx     # 500 Internal Server Error
│   ├── routes/
│   │   └── approutes.jsx       # Centralized React Router v7 route registry
│   ├── app.jsx                 # Application root with Smooth Scroll & Theme
│   ├── index.css               # Tailwind CSS, marquee animations, and no-scrollbar utilities
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
| `/properties` | `PropertiesPage` | **Dedicated Properties Catalog**: Live search, category filter, price & bedroom selectors, Grid/List view, and interactive property detail dossier modal |
| `/features` | `FeaturesPage` | **Dedicated Features & Standards Page**: Smart home automation, craftsmanship, wellness suites, security, eco-sustainability, and comparison matrix |
| `/about` | `AboutPage` | **Dedicated About Us Page**: 30-year heritage narrative, historical milestones (1994–2026), senior leadership, international hubs, and consultation desk |
| `/contact` | `ContactPage` | **Dedicated Contact & Advisory Page**: Multi-mode private tour scheduling, acquisition inquiries, 24/7 concierge lines, and international offices |
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
| `navbardata.json` | Brand name, subtitle, top navigation routes (`/`, `/properties`, `/features`, `/about`, `/contact`), phone number. |
| `herodata.json` | Hero headline, property previews, search tabs, and metric counters. |
| `propertiesdata.json` | Featured estates, pricing, categories (Villa, Penthouse, Waterfront, Estate), beds, baths, sqft, lot sizes, year built, garage, full architectural narrative, and bespoke amenities. |
| `featuresdata.json` | Architectural features, core pillars, deliverables, stats, and the Verdant Standard vs. Conventional Luxury comparison matrix. |
| `aboutdata.json` | Company heritage, career transaction statistics, core pillars, and private advisory contact details. |
| `scheduledata.json` | Private tour types (in-person, virtual, advisory), time windows, properties list, and global office hubs. |
| `developmentsdata.json` | Architectural master projects, completion dates, lead architects, and amenity lists. |
| `neighborhoodsdata.json` | Enclave guides, average price growth YoY, active listing counts, and lifestyle scores. |
| `testimonialsdata.json` | Client reviews, transaction details, star ratings, and local avatar assignments. |
| `footerdata.json` | Multi-column links with direct page routing, office locations, social profiles, and copyright notice. |
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
