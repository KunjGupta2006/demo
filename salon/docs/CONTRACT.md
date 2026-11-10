# ARCHITECTURAL CONTRACT: ÉLAN ATELIER

Version: `1.0.0`
Status: **Ratified Foundation**
Applies To: Parallel Wave 1 subagents (Agents A through F) and lead integration.

---

## 1. FOLDER OWNERSHIP & RESPONSIBILITY MATRIX

Each subagent owns **ONLY** its assigned paths. 
Tokens (`DESIGN.md`, `globals.css`), motion foundation (`/src/lib/motion`), schemas (`/src/types`), mock data (`/src/data`), root `layout.tsx`, and `package.json` are **READ-ONLY**. 

| Agent | Scope Name | Owned Folders & Files | Prohibited |
|---|---|---|---|
| **Agent A** | Shell & Static Core | `/src/components/shell/` (Header, Footer, MobileMenu, Cursor, Preloader, StickyBookingBar, WhatsAppCall, CookieBanner)<br>`/src/app/not-found.tsx`<br>`/src/app/error.tsx`<br>`/src/app/about/`<br>`/src/app/contact/`<br>`/src/app/legal/` | Modifying `/src/data/` directly without proposal |
| **Agent B** | Home Top (Sections 1–6) | `/src/components/home/top/` (Hero, Marquee, BrandStory, ServicesShowcase, BeforeAfterSlider, StylistsHorizontal) | Editing bottom home sections |
| **Agent C** | Home Bottom & Memberships | `/src/components/home/bottom/` (Packages, GalleryTeaser, Testimonials, InstagramFeed, MembershipTeaser, FinalCta)<br>`/src/app/page.tsx` (Root page assembly)<br>`/src/app/membership/` | Touching home top components |
| **Agent D** | Services & Lightweight Commerce | `/src/app/services/`<br>`/src/app/pricing/`<br>`/src/app/shop/`<br>`/src/components/shop/` (CartDrawer, MockCheckout) | Modifying booking state machine |
| **Agent E** | Booking Engine & API Routes | `/src/app/booking/`<br>`/src/components/booking/` (StepFlow, StylistPicker, Calendar, Slots, Summary, Addons, ConfirmationModal)<br>`/src/app/api/booking/route.ts`<br>`/src/app/api/contact/route.ts`<br>`/src/app/api/newsletter/route.ts` | Tampering with main navigation |
| **Agent F** | Team, Lookbook, Editorial & SEO | `/src/app/team/`<br>`/src/app/gallery/` (Lookbook & Lightbox)<br>`/src/app/journal/`<br>`/src/app/careers/`<br>`/src/app/sitemap.ts`<br>`/src/app/robots.ts`<br>`/src/components/seo/` (JsonLd scripts) | Changing shared UI styles |

---

## 2. COMPREHENSIVE ROUTE DIRECTORY

- `/` — Atelier Home (12 distinct rhythmic sections, no repeated layouts)
- `/services` — Interactive Service Directory with Category Filtering & Drawer Previews
- `/services/[slug]` — Deep Service Detail (Process, inclusions, FAQ, direct book CTA)
- `/pricing` — Print-friendly Architectural Menu with sticky navigation
- `/booking` — 5-Step Session Planner with sessionStorage persistence & live duration counter
- `/team` — Master Sculptors & Colour Architects roster
- `/team/[slug]` — Individual Stylist Dossier & Portfolio
- `/gallery` — Lookbook with masonry, filter pills, and full-screen lightbox
- `/membership` — Atelier Membership Tiers & Gift Card Voucher purchase
- `/shop` — Curated Botanical Formulations & Hair Architecture Tools
- `/shop/[slug]` — Product Formulation Dossier & Bag Drawer
- `/journal` — Editorial Hair Discourse & Masterclass essays
- `/journal/[slug]` — Editorial Article View
- `/about` — The Philosophy, Parisian Atelier Heritage, Hygiene & Sustainable Chemistry
- `/careers` — Open Residencies & Apprenticeship Application
- `/contact` — Location, Live Opening Status Indicator, Valet/Metro Directions & Concierge Form
- `/legal/privacy` — Privacy Policy
- `/legal/terms` — Terms of Service
- `/legal/cancellation` — Appointment & Cancellation Etiquette (48-hour policy)

---

## 3. SHARED COMPONENT SPECIFICATIONS

### `Button` (`@/components/ui/Button`)
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "brass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  magnetic?: boolean; // Desktop magnetic attraction
  icon?: React.ReactNode;
}
```

### `Heading` (`@/components/ui/Heading`)
```typescript
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  size?: "display-monument" | "display-xl" | "h1" | "h2" | "h3" | "h4";
  serif?: boolean; // Bodoni Moda vs Jost
  italic?: boolean;
}
```

### `Section` & `Container` (`@/components/ui/Section`, `@/components/ui/Container`)
- `Section`: Manages vertical rhythmic padding (`py-20` to `py-36`) and background switching (`light`, `surface`, `dark`, `brass`).
- `Container`: Provides responsive margins (`px-5 sm:px-8 md:px-12 lg:px-20`) and max-width capping (`1680px`).

### `Reveal` & `SplitTextReveal` (`@/lib/motion/Reveal`)
- `Reveal`: ScrollTrigger-powered viewport reveal with automatic cleanup and fallback for reduced motion.
- `SplitTextReveal`: Typography reveal breaking words into animated masked wrappers.

---

## 4. DATA SCHEMAS & CONTRACTS (`/src/types`)

All components must import domain models from `@/types`:
- `Service`, `ServiceCategory`
- `Stylist`
- `PackageDeal`
- `GalleryItem`
- `Testimonial`
- `Product`
- `JournalPost`
- `BookingState`

---

## 5. STRICT ANTI-SLOP & CODE CONVENTIONS

1. **No Any Types**: Strict TypeScript compilation with zero `any` declarations.
2. **Accessible Interaction**: Every clickable element must have an `aria-label` if text is not explicit. Minimum tap area `44px × 44px`.
3. **No Unmanaged Listeners**: Every ScrollTrigger and event listener must be reverted or cleaned up in `useGSAP` or `useEffect`.
4. **No Synthetic Marketing Jargon**: Real, grounded copy only.
5. **No Layout Shift (CLS < 0.1)**: Always pass `width`, `height`, or fixed aspect-ratio containers (`aspect-[16/10]`, `aspect-[4/5]`) to Next/image.
