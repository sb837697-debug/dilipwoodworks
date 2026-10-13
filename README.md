# Dilip Wood Works — Official Production Website

A modern, responsive, and SEO-optimized business website for **Dilip Wood Works**, master artisans in bespoke solid woodcraft, heritage furniture, and architectural joinery based in Sarangpur, Chandigarh.

---

## 🌲 Business Profile & Verified Information

- **Company Name:** Dilip Wood Works
- **Phone:** `+91 9872703528` (`9872703528`)
- **Email:** `sb612589@gmail.com`
- **Workshop & Studio Address:** `Milk pind road, near Botanical garden, Sarangpur, Chandigarh, Milak, Punjab 140901`
- **Workshop Visiting Hours:** 
  - Monday – Saturday: 9:00 AM – 7:30 PM
  - Sunday: By Prior Appointment
- **Specialties:** Burma Teak, Indian Sheesham (Rosewood), American White Oak, Black Walnut, Traditional Mortise & Tenon Joinery, Bespoke Modular Kitchens, Architectural Entrance Pivot Doors, Slat Wall Panelling.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + Vite 6
- **Routing:** React Router DOM v7
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React
- **Form Management:** React Hook Form (with client-side validation, anti-spam honeypot, and server submission states)
- **SEO & Meta Management:** React Helmet Async + Schema.org `LocalBusiness` JSON-LD Structured Data
- **Asset Pipeline:** Vite asset optimizer with lazy loading and responsive formats

---

## 📁 Project Directory Structure

```text
dilip-wood-works/
├── public/
│   ├── hero-workshop.jpg       # Master workshop photography asset
│   ├── dining-furniture.jpg    # Handcrafted dining suite asset
│   ├── favicon.svg             # Brand favicon
│   ├── robots.txt              # Search engine crawler instructions
│   └── sitemap.xml             # Complete XML sitemap
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Sticky header, desktop & mobile navigation
│   │   ├── Footer.jsx          # Comprehensive footer with contact details & legal links
│   │   ├── Hero.jsx            # High-impact hero section with key badges & CTAs
│   │   ├── ProductCard.jsx     # Reusable product card with image, specs & link
│   │   ├── BenefitCard.jsx     # Benefit cards for workshop differentiators
│   │   ├── HowItWorks.jsx      # 3-step consultation-to-installation timeline
│   │   ├── TimberShowcase.jsx  # Interactive guide for Teak, Sheesham, Oak, Walnut
│   │   ├── BlogCard.jsx        # Reusable blog guide card
│   │   ├── ContactForm.jsx     # React Hook Form with validation & backend states
│   │   ├── CTASection.jsx      # High-converting pre-footer call to action
│   │   └── SEO.jsx             # React Helmet Async meta wrapper
│   ├── data/
│   │   ├── companyInfo.js      # Centralized verified business details
│   │   ├── products.js         # Complete catalog of 8 bespoke handcrafted pieces
│   │   └── blogPosts.js        # 6 in-depth woodworking & timber care guides
│   ├── layouts/
│   │   └── MainLayout.jsx      # Main layout wrapper with floating WhatsApp widget
│   ├── pages/
│   │   ├── Home.jsx            # Comprehensive homepage
│   │   ├── Products.jsx        # Catalog with search, category & timber filters
│   │   ├── ProductDetails.jsx  # Individual piece gallery, specifications & quote form
│   │   ├── Blog.jsx            # Educational journal with search & Load More
│   │   ├── BlogDetails.jsx     # Full-length article, author bio & related reads
│   │   ├── Contact.jsx         # Contact page with business card & Google Maps embed
│   │   ├── PrivacyPolicy.jsx   # Dedicated privacy policy
│   │   ├── TermsOfService.jsx  # Dedicated craftsmanship warranty & terms
│   │   └── NotFound.jsx        # Helpful 404 page
│   ├── App.jsx                 # Routing configuration
│   ├── main.jsx                # Application entrypoint with providers
│   └── index.css               # Design system tokens and Tailwind styling
├── .env.example                # Environment variables documentation
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js (v18 or higher)** and **npm** installed.

### 2. Installation
Navigate to the project directory and install dependencies:

```bash
cd dilip-wood-works
npm install
```

### 3. Environment Variables
Copy `.env.example` to create your local `.env` file:

```bash
cp .env.example .env
```

To configure a form endpoint (e.g., Formspree, Web3Forms, or your custom server API), set:
```env
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

*(Note: If `VITE_CONTACT_FORM_ENDPOINT` is omitted or empty, the contact form transparently informs the user and provides instant 1-click WhatsApp and Email fallback buttons with pre-filled details).*

### 4. Running the Development Server
```bash
npm run dev
```

The application will be live at:
`http://localhost:5173`

---

## 🏗️ Production Build & Verification

To create an optimized production build:

```bash
npm run build
```

To preview the production bundle locally:

```bash
npm run preview
```

---

## 🔌 Backend & Third-Party Integration Guide

1. **Form Submissions:**
   - **Option A (Formspree):** Sign up at [formspree.io](https://formspree.io), create a form, and paste the endpoint URL into `VITE_CONTACT_FORM_ENDPOINT`.
   - **Option B (Web3Forms):** Sign up at [web3forms.com](https://web3forms.com) and paste the submission endpoint with your access key.
   - **Option C (Custom Express/FastAPI Backend):** Point `VITE_CONTACT_FORM_ENDPOINT` to your custom API route accepting JSON POST requests.

2. **WhatsApp Direct Chat:**
   - Uses standard universal WhatsApp deep links (`https://wa.me/919872703528`) pre-filling the customer's selected product or message.

3. **Google Maps Integration:**
   - The embed in `Contact.jsx` displays the verified location at Sarangpur, Chandigarh (near Botanical Garden). Directions buttons link directly to Google Maps navigation.

---

## 🌐 Deployment Instructions

- **Vercel:** Run `vercel` or connect the Git repository. Set Framework Preset to **Vite**.
- **Netlify:** Set build command to `npm run build` and publish directory to `dist`. Add `_redirects` file with `/* /index.html 200` for client-side routing.
- **Cloudflare Pages:** Build command: `npm run build`, output directory: `dist`.

---

© 2026 Dilip Wood Works. All Rights Reserved.
