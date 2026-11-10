# Care4U Studio — Haute Coiffure & Botanical Hair Architecture

An award-winning, editorial luxury digital flagship for **Care4U Studio** (48 Quai de la Tournelle, 75005 Paris). Built with Next.js 16 App Router, TypeScript, Tailwind CSS v4, GSAP 3 + ScrollTrigger, Lenis smooth scrolling, and an anti-AI-slop design system.

---

## 🏛️ Brand & Creative Identity

- **Studio Location**: 48 Quai de la Tournelle, 75005 Paris (5th Arrondissement, overlooking the Seine).
- **Core Philosophy**: Cranial dry-cutting, kaolin clay balayage, and Japanese carbonated head spa hydrotherapy. No synthetic fragrance, no rushed appointments, acoustic quietude.
- **Design Bar**: Inspired by the art direction of high-end architectural monographs and luxury maisons (The Row, Aesop, Celine, Studio Nicholson).
- **Color Palette**:
  - `Warm Alabaster` (`#F8F6F1`): Primary illuminated canvas.
  - `Stone Ecru` (`#EFECE5`): Secondary section fill and subtle contrast card backgrounds.
  - `Obsidian Noir` (`#171614`): High-contrast editorial typography and dark mode accents.
  - `Deep Bronze / Noir 900` (`#121110`): Inverted evening/couture sections.
  - `Aged Brass / Patina Gold` (`#B38E58`): Editorial accents, active tab indicators, and micro-accents.
  - `Muted Earth Slate` (`#666159`): Hairline dividers, metadata labels, and secondary copy.
- **Typography**:
  - **Headings**: `Bodoni Moda` (high-contrast, editorial serif with refined ligatures).
  - **Body**: `Jost` (geometric, warm modernist sans-serif).
  - **Metadata & Technical Protocols**: `JetBrains Mono` (dossier codes, prices, timings, and coordinates).

---

## 🚀 Key Features

1. **Editorial Studio Shell**:
   - Adaptive header that gracefully conceals on downward scroll and reveals on upward flick with studio status pill (Live "ATELIER OPEN / CLOSED" indicator).
   - Bespoke custom cursor with magnetic pull and hover states.
   - Initial cranial loading sequence with session-persistence and keyboard skip (`Esc` / `Space`).
   - Sticky booking drawer on mobile devices with instant booking trigger.
   - WhatsApp concierge direct dispatch integration and cookie preference banner.

2. **Full Home Page (12 Editorial Modules)**:
   - **Hero**: Split text reveal, live atelier coordinates, and magnetic CTA.
   - **Marquee**: Subtle continuous ticker with salon principles.
   - **Brand Story**: 3 asymmetric editorial chapters (Cranial Geometry, Living Botanical Pigments, Restorative Hydrotherapy).
   - **Services Showcase**: Category tabs with live hover preview and micro-interactions.
   - **Interactive Before/After Slider**: Touch, drag, and keyboard accessible split comparison of dry haircut transformations.
   - **Master Stylists Roster**: Horizontal scroll of resident artisans with specialization tags and direct booking links.
   - **Signature Packages**: Complete curated experiences (Bridal Suite, Restorative Immersion, Editorial Chroma).
   - **Lookbook Teaser**: Asymmetric masonry grid featuring silhouette dossiers.
   - **Testimonials Dossier**: 5.0 Google Rating badge with verified client critiques.
   - **Instagram / Atmosphere Feed**: 6-tile glimpse into studio light, tools, and Paris 5e ambiance.
   - **Private Membership Club**: Tiered seasonal privileges and gift certificate booking.
   - **Inverted Final CTA**: Full-bleed Obsidian Noir section inviting private suite reservation.

3. **5-Step Booking Engine (`/booking`)**:
   - Step 1: Multi-category service selector with real-time running duration & price calculation.
   - Step 2: Master stylist selector or "First Available Master Coiffeur".
   - Step 3: Interactive date picker (14 rolling days, strictly enforcing closed Mondays) and morning/afternoon time slot allocator.
   - Step 4: Client information, contact preferences, and special dietary/trichology notes.
   - Step 5: Review & Confirmation screen with unique dossier code (`C4U-XXXXXX`), instant `.ics` calendar invitation generator, and state persistence in `sessionStorage`.

4. **Dedicated Sub-pages & Dossiers**:
   - `/services`: Filterable catalog of all 13 haircutting, coloring, styling, and scalp therapy treatments.
   - `/services/[slug]`: 13 static pages (SSG) with 4-step execution protocols, recommended aftercare, and trichology FAQs.
   - `/pricing`: Printable, comprehensive atelier price list with sticky category quick-jump menu.
   - `/team` & `/team/[slug]`: 5 master stylist portfolios with credentials, aesthetic signatures, and curated lookbooks.
   - `/gallery`: Full masonry gallery with category filters and keyboard-accessible modal lightbox (Escape to close, Left/Right arrow navigation).
   - `/shop` & `/shop/[slug]`: Curated apothecary with slide-out Cart Drawer, free shipping threshold indicator, and mock checkout.
   - `/journal` & `/journal/[slug]`: Editorial articles on hair biology, kaolin clay balayage, and cranial architecture.
   - `/about`: Atelier history, architectural notes on the Quai de la Tournelle space, and master principles.
   - `/contact`: Interactive inquiry form with live status, studio transport directions, and Google Maps integration.
   - `/careers`: Apprenticeship and master stylist fellowship application system.
   - `/membership`: Studio society tiers and digital gift card purchase.
   - `/legal/*`: Comprehensive privacy policy, terms of service, and 48-hour cancellation policies.

5. **Technical & SEO Standards**:
   - Pre-rendered static compilation (**48 static & SSG routes**).
   - Automated dynamic XML Sitemap (`/sitemap.xml`) & `robots.txt`.
   - Rich JSON-LD `HairSalon` Schema Markup with GeoCoordinates, opening hours, price range, and address.
   - Full WCAG AA accessibility compliance with visible keyboard focus rings, minimum 44px tap targets, and `prefers-reduced-motion` detection via `useSyncExternalStore`.
   - Zero ESLint errors or TypeScript warnings.

---

## 🛠️ Tech Stack & Architecture

```
salon/
├── src/
│   ├── app/                    # Next.js 16 App Router pages
│   │   ├── about/              # Atelier story & architecture
│   │   ├── api/                # Route handlers (/booking, /contact, /newsletter)
│   │   ├── booking/            # 5-step interactive reservation engine
│   │   ├── careers/            # Fellowship application
│   │   ├── contact/            # Concierge dispatch & map
│   │   ├── gallery/            # Masonry lookbook with modal lightbox
│   │   ├── journal/            # Editorial publications & SSG slug routes
│   │   ├── legal/              # Privacy, terms, cancellation policies
│   │   ├── membership/         # Studio society tiers & gift cards
│   │   ├── pricing/            # Printable atelier price list
│   │   ├── services/           # Service catalog & SSG detail dossiers
│   │   ├── shop/               # Apothecary & SSG product pages
│   │   ├── team/               # Master stylist dossiers
│   │   ├── layout.tsx          # Root layout with fonts, JSON-LD, smooth scroll
│   │   ├── page.tsx            # Full 12-section home page
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   └── sitemap.ts          # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── home/               # Section components (top & bottom)
│   │   ├── shell/              # Header, Footer, MobileMenu, Preloader, Cursor, CartDrawer
│   │   └── ui/                 # Accessible primitives (Button, Container, Heading, Logo, Icons)
│   ├── data/                   # Single source of truth datasets
│   │   ├── services.ts         # 13 structured salon services
│   │   ├── stylists.ts         # 5 resident master stylists
│   │   ├── packages.ts         # Curated signature packages
│   │   ├── products.ts         # Apothecary retail products
│   │   ├── gallery.ts          # Lookbook entries with metadata
│   │   ├── journal.ts          # Editorial articles & trichology guides
│   │   ├── salonInfo.ts        # Salon hours, address, phone, live status
│   │   └── testimonials.ts     # Verified client reviews
│   ├── lib/
│   │   └── motion/             # GSAP plugins, Lenis provider, magnetic CTA, reduced-motion
│   └── types/                  # Strict TypeScript interfaces
├── docs/
│   ├── CONTRACT.md             # Subagent contract & interface specifications
│   └── SUBAGENT_BRIEFS.md      # Autonomous agent briefs
├── DESIGN.md                   # Full design system tokens & typography hierarchy
└── package.json
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Verify Linting & TypeScript
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 Modifying Content & Data

All studio copy, pricing, services, stylists, and products are decoupled from the UI inside `/src/data/`:
- **Change Salon Address or Hours**: Update `/src/data/salonInfo.ts`. The live "ATELIER OPEN" status logic automatically recalculates in real time based on CET Paris timezone.
- **Add or Modify Services**: Edit `/src/data/services.ts`. Static detail pages (`/services/[slug]`), booking selectors, and price lists will automatically update on build.
- **Add Stylists or Team Members**: Edit `/src/data/stylists.ts`.
- **Add Shop Products**: Edit `/src/data/products.ts`.
- **Add Lookbook Silhouettes**: Edit `/src/data/gallery.ts`.

---

## 🔌 Connecting a Live Booking Database

The reservation wizard currently posts to the App Router API route at `/src/app/api/booking/route.ts`. To connect to a live backend (PostgreSQL, Supabase, Prisma, or a CRM like Phorest / Fresha):

```typescript
// in src/app/api/booking/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // your database client
import { sendBookingConfirmationEmail } from "@/lib/email"; // Resend / SendGrid

export async function POST(request: Request) {
  try {
    const bookingData = await request.json();
    
    // 1. Insert into database
    const booking = await db.booking.create({ data: bookingData });
    
    // 2. Dispatch confirmation email & SMS
    await sendBookingConfirmationEmail(booking);

    return NextResponse.json({ success: true, referenceCode: booking.id });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Error" }, { status: 400 });
  }
}
```

---

## 📜 License & Credits

Designed and crafted for **Care4U Studio**, Paris 5e.
All typography served via `next/font/google`. Photography sourced from Unsplash editorial collections under open license.
