# DESIGN SYSTEM SPECIFICATION: CARE4U STUDIO
*Modern Parisian Haircuts, Vibrant Color & Calming Head Spa*

Document version: `2.0.0`
Status: **Approved Human Craft & Clean Minimal Color Palette**
Governed by: `taste-skill` (anti-slop art direction, no AI tells), `impeccable` (craft floor, plain human language, ban on kickers/eyebrows), `emil-skills` (micro-interactions & component feel), `gsap-skills` (smooth scroll & motion architecture).

---

## 1. ART DIRECTION & PHILOSOPHY

### The Concept
**"Clean Minimal Canvas with Luminous Color Accents"**
Care4U Studio rejects generic "AI-generated" templates and pretentious pseudo-luxury jargon. We ban:
- Robotic brackets and kickers (e.g., `[01 / MANIFESTO]`, `[ATELIER DOSSIER]`).
- Pretentious medicalized buzzwords ("cranial geometry", "cold-blade sculpture", "anatomical tension", "trichological protocol").
- Artificial feTurbulence noise and blurry mud overlays.
- Monotonous washed-out beige-on-beige that looks like an unfinished wireframe.

Instead, the design pairs a crisp, minimal white and slate canvas with three intentional, vibrant jewel accents:
1. **Crystal Blue**: Precision cuts, clarity, booking buttons, and core navigation.
2. **Crimson Red**: Hair color, balayage highlights, genuine 5.0 client ratings, and warm favorites.
3. **Electric Purple**: Japanese scalp head spa, private quiet suites, and restorative care.

---

## 2. COLOR PALETTE

Audited for WCAG AA 4.5:1 minimum contrast.

| Token | CSS Variable | Hex Value | Role & Usage |
|---|---|---|---|
| Pure White | `--bg-primary` | `#FFFFFF` | Primary card and content background |
| Cool Surface | `--bg-surface` | `#F8FAFC` | Light section canvas and container panels |
| Dark Surface | `--bg-dark` | `#0F172A` | Deep slate contrast sections and footer |
| Text Primary | `--text-primary` | `#0F172A` | Crisp high-contrast headlines and body text |
| Text Muted | `--text-muted` | `#64748B` | Subtitles, duration indicators, descriptions |
| **Crystal Blue** | `--color-crystal-blue` | `#0284C7` | Primary action buttons, haircut badges, focus rings |
| Crystal Blue Tint | `--tint-crystal-blue` | `#E0F2FE` | Selected cards, tags, soft hover states |
| **Crimson Red** | `--color-crimson-red` | `#E11D48` | Hair color badges, review stars, heart accents |
| Crimson Red Tint | `--tint-crimson-red` | `#FFE4E6` | Color category tags, notification pills |
| **Electric Purple** | `--color-electric-purple` | `#8B5CF6` | Japanese head spa, VIP suite badges |
| Electric Purple Tint| `--tint-electric-purple`| `#F3E8FF` | Scalp & treatment card highlights |
| Clean Border | `--border-hairline` | `#E2E8F0` | Subtle crisp borders separating clean content |

---

## 3. TYPOGRAPHY SYSTEM

Governed by editorial pairing (`Bodoni Moda` / `Jost` / `JetBrains Mono`):

### Typefaces
1. **Display Serif**: `Bodoni Moda`
   - Usage: Main section headlines (H1, H2), brand wordmark.
   - Settings: `font-serif`, tight letter spacing, natural organic weight.
2. **Body & Microcopy Sans**: `Jost`
   - Usage: Body copy, navigation links, form labels, buttons.
   - Settings: Clear legible line-height (`1.6`), zero pretentious capitalization tricks.
3. **Tabular Technical Mono**: `JetBrains Mono`
   - Usage: Numerical prices (`$165`), durations (`75 mins`), appointment times (`10:30`).

---

## 4. COPYWRITING STANDARDS (ANTI-SLOP & PLAIN LANGUAGE)

- **Rule 1: No Fake Eyebrows / Kickers**. Never put bracketed labels like `[01 / MANIFESTO]` above a heading. If a category tag is needed, use a clean rounded pill with a subtle colored dot.
- **Rule 2: Plain Human Terms**.
  - *Say*: "Haircut & Blowdry" (not "Architectural Cranial Sculpture").
  - *Say*: "Our Stylists" (not "Master Atelier Sculptors").
  - *Say*: "Choose Your Services" (not "Select Your Ceremonial Disciplines").
  - *Say*: "Book an Appointment" (not "Transmit Reservation Protocol").
- **Rule 3: Real Photography**. No artificial grayscale filters over client hair pictures or stylist portraits. Show the genuine vibrancy of rich brunette, balayage blonde, and glossy curls.

---

## 5. BUTTON & COMPONENT SYSTEM

Buttons are built with clear intent and tactile feel:
- `variant="crystal"`: Crystal Blue background (`#0284C7`), crisp white text, active press translation.
- `variant="crimson"`: Crimson Red background (`#E11D48`), used for color service actions and promotions.
- `variant="purple"`: Electric Purple background (`#8B5CF6`), used for head spa and VIP experiences.
- `variant="secondary"`: Crisp white card with slate border and subtle hover tint.
