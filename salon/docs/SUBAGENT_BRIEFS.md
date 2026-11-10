# PARALLEL SUBAGENT BRIEFS: CARE4U STUDIO
*Full Scope Execution Briefs for Agents A through F*

---

## AGENT A BRIEF: SHELL & INFO PAGES

- **Assigned Paths**: 
  - `/src/components/shell/` (`Header.tsx`, `MobileMenu.tsx`, `Footer.tsx`, `Preloader.tsx`, `CustomCursor.tsx`, `StickyBookingBar.tsx`, `WhatsAppButton.tsx`, `CookieBanner.tsx`)
  - `/src/app/not-found.tsx`
  - `/src/app/error.tsx`
  - `/src/app/about/page.tsx`
  - `/src/app/contact/page.tsx`
  - `/src/app/legal/privacy/page.tsx`
  - `/src/app/legal/terms/page.tsx`
  - `/src/app/legal/cancellation/page.tsx`
- **Design Tokens**: Read from `/DESIGN.md` (warm alabaster `#F8F6F1`, obsidian `#171614`, brass `#B38E58`, Bodoni Moda + Jost).
- **Core Requirements**:
  1. Header: Transparent on hero, transforms to solid `#F8F6F1`/95 with hairline border on scroll. Hides when scrolling down, reappears immediately on scroll up.
  2. Mobile Menu: Full-screen animated overlay with staggered links, operating hours, and direct booking CTA.
  3. Preloader: Elegant typographic counter (0% to 100%), displays once per session (checks `sessionStorage`), dismisses under 2.0s, skippable on click or Escape key.
  4. Custom Cursor: Desktop-only custom trailing dot that expands on clickable elements (`button`, `a`, interactive image cards). Disabled on touch devices and when `prefers-reduced-motion` is true.
  5. Floating Concierge: WhatsApp/call button bottom-right with tooltip. Sticky mobile booking bar bottom-docked at 360–768px viewports.
  6. About Page: The cranial architecture philosophy, history of Quai de la Tournelle studio, botanical chemistry standards, and studio space photography.
  7. Contact Page: Live open status badge, interactive map frame, directions from Metro Pont Marie / Maubert, concierge form, and expandable FAQ accordion.
  8. Legal Pages: Clean, typography-first privacy policy, terms of service, and 48-hour cancellation policy.

---

## AGENT B BRIEF: HOME TOP (SECTIONS 1–6)

- **Assigned Paths**: `/src/components/home/top/`
  - `Hero.tsx` (Section 1)
  - `Marquee.tsx` (Section 2)
  - `BrandStory.tsx` (Section 3)
  - `ServicesShowcase.tsx` (Section 4)
  - `BeforeAfterSlider.tsx` (Section 5)
  - `StylistsHorizontal.tsx` (Section 6)
- **Core Requirements**:
  1. Section 1 (Hero): Full-bleed visual, oversized split-text headline, magnetic CTA button, scroll cue.
  2. Section 2 (Marquee): Continuous seamless looping marquee of signature services (`DRY CRANIAL SCULPTURE · FRENCH MINERAL BALAYAGE · JAPANESE CARBONATED HEAD SPA · BUCCAL FACIAL TONING · SAVILE ROW GROOMING`) with hairline dividers.
  3. Section 3 (Brand Story): Pinned scroll storytelling section with subtle image parallax and line-by-line opacity text reveals explaining the philosophy of cranial bone structure cutting.
  4. Section 4 (Services Showcase): Interactive list of core services. Hovering over any service dynamically updates a floating cursor-following image card preview.
  5. Section 5 (Before/After Slider): Interactive split-screen comparison slider. Allows dragging left/right or clicking to reveal hair transformation. Touch-enabled and keyboard accessible.
  6. Section 6 (Stylists Horizontal): Sculptural showcase of the 5 master coiffeurs with their specialties, experience years, and "Book with [Name]" direct links.

---

## AGENT C BRIEF: HOME BOTTOM & MEMBERSHIPS (SECTIONS 7–12)

- **Assigned Paths**:
  - `/src/components/home/bottom/`
    - `SignaturePackages.tsx` (Section 7)
    - `GalleryTeaser.tsx` (Section 8)
    - `TestimonialsCarousel.tsx` (Section 9)
    - `InstagramFeed.tsx` (Section 10)
    - `MembershipTeaser.tsx` (Section 11)
    - `FinalBookingCta.tsx` (Section 12)
  - `/src/app/page.tsx` (Root home page integration)
  - `/src/app/membership/page.tsx` (Membership tiers & gift cards)
- **Core Requirements**:
  1. Section 7 (Packages): Editorial cards for Couture Bridal, Restorative Glow Immersion, and Savile Row Protocol.
  2. Section 8 (Gallery Teaser): Asymmetric masonry grid featuring lookbook cuts with hover zoom and link to `/gallery`.
  3. Section 9 (Testimonials): Large-type quote carousel with client names, services received, verified badges, and Google 5.0 star rating summary.
  4. Section 10 (Instagram Grid): 6-panel atmospheric square grid showcasing candid studio rituals and finished coiffures.
  5. Section 11 (Membership Teaser): Invitation to join the Atelier Privé circle for priority booking and complimentary treatments.
  6. Section 12 (Final CTA): Full-bleed inverted obsidian field (`#121110`) with monumental invitation headline and brass reservation button.
  7. Membership Page: Tier comparison table (`L'Initié`, `Le Privilège`, `L'Étoile`), benefits breakdown, and mock gift card purchase form with instant voucher code generation.

---

## AGENT D BRIEF: SERVICES & LIGHTWEIGHT COMMERCE

- **Assigned Paths**:
  - `/src/app/services/page.tsx`
  - `/src/app/services/[slug]/page.tsx`
  - `/src/app/pricing/page.tsx`
  - `/src/app/shop/page.tsx`
  - `/src/app/shop/[slug]/page.tsx`
  - `/src/components/shop/CartDrawer.tsx`
- **Core Requirements**:
  1. Services Listing (`/services`): Filter by category pills (All, Haircuts, Colour, Styling, Keratin, Facials, Nails, Grooming). Each item lists duration, price, subtitle, and "Book Service" deep link.
  2. Service Detail (`/services/[slug]`): Comprehensive breakdown including What's Included checklist, 4-step process methodology, trichological FAQs, and related services.
  3. Pricing Menu (`/pricing`): Print-friendly (`@media print`) layout, sticky category navigation, tabular price alignment, and booking links.
  4. Shop (`/shop`): Curated product catalog (botanical serums, acidic gloss glaze, texture balm, horn comb) with filter by hair concern.
  5. Product Detail (`/shop/[slug]`): Full formulation breakdown, bioactive ingredients, application ritual, and "Add to Bag" interaction.
  6. Cart Drawer (`CartDrawer.tsx`): Slide-over drawer with item increment/decrement, free shipping progress indicator, and mock checkout dialog.

---

## AGENT E BRIEF: BOOKING ENGINE & API ROUTES

- **Assigned Paths**:
  - `/src/app/booking/page.tsx`
  - `/src/components/booking/` (`BookingWizard.tsx`, `StepService.tsx`, `StepStylist.tsx`, `StepDateTime.tsx`, `StepDetails.tsx`, `StepConfirmation.tsx`, `BookingSummary.tsx`)
  - `/src/app/api/booking/route.ts`
  - `/src/app/api/contact/route.ts`
  - `/src/app/api/newsletter/route.ts`
- **Core Requirements**:
  1. 5-Step Session Planner:
     - Step 1: Services (multi-select, live price & duration accumulation, recommended add-ons).
     - Step 2: Stylist choice (or "First Available Master Sculptor").
     - Step 3: Date & Time (interactive calendar, closed Mondays disabled, live time slots split by Morning/Afternoon).
     - Step 4: Client contact details with inline Zod validation.
     - Step 5: Review & Confirm with cancellation policy consent.
  2. State Persistence: Full state synchronized to `sessionStorage` so refreshing or browser navigation never loses progress.
  3. Confirmation Experience: Generates unique booking reference (e.g. `C4U-78291`), provides `.ics` calendar invite download, Google Calendar link, and mock reschedule/cancel link.
  4. API Routes: Validated JSON responses for appointment booking, concierge contact form, and journal newsletter subscriptions.

---

## AGENT F BRIEF: TEAM, GALLERY, JOURNAL, CAREERS & SEO

- **Assigned Paths**:
  - `/src/app/team/page.tsx`
  - `/src/app/team/[slug]/page.tsx`
  - `/src/app/gallery/page.tsx`
  - `/src/app/journal/page.tsx`
  - `/src/app/journal/[slug]/page.tsx`
  - `/src/app/careers/page.tsx`
  - `/src/app/sitemap.ts`
  - `/src/app/robots.ts`
  - `/src/components/seo/JsonLd.tsx`
- **Core Requirements**:
  1. Team Listing & Dossiers: High-contrast portraits, bio narratives, specialties tags, weekly calendar availability, and "Book with [Name]" pre-filled links.
  2. Lookbook Gallery (`/gallery`): Responsive masonry grid with category filters, lazy loading, and accessible full-screen modal lightbox supporting keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).
  3. Editorial Journal (`/journal`): Thoughtful articles on hair anatomy and French cutting technique. Detail page with estimated reading time, author card, and related reads.
  4. Careers Page (`/careers`): Master artist residency opportunities and interactive application form.
  5. Search Engine Optimization: Dynamic XML sitemap, robots configuration, Open Graph metadata, and JSON-LD schema (`HairSalon`, `Service`, `Review`).
