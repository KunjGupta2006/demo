import { Service } from "@/types";

export const SERVICES_DATA: Service[] = [
  // Haircuts
  {
    id: "cut-architectural",
    slug: "architectural-cut-sculpt",
    title: "Signature Haircut & Blowdry",
    subtitle: "Custom dry haircut tailored to your face shape, hair texture, and daily routine",
    category: "haircuts",
    price: 165,
    durationMinutes: 75,
    description:
      "A tailored haircut that starts with a close look at how your hair naturally falls and moves. We cut your hair dry so you can see the real shape right away, followed by a gentle wash and smooth blowdry.",
    inclusions: [
      "One-on-one style and hair consultation",
      "Gentle scalp shampoo with filtered soft water",
      "Precision dry cut suited to your natural hair growth",
      "Rosemary rinse and conditioning",
      "Blowdry with heat protection for long-lasting volume",
    ],
    processSteps: [
      {
        title: "Hair Assessment",
        description: "We look at your natural whorls, hair thickness, and texture before cutting.",
      },
      {
        title: "Dry Cutting",
        description: "Cutting hair dry in its natural fall ensures your shape stays clean between washes at home.",
      },
      {
        title: "Refreshing Wash",
        description: "Shampoo and botanical rinse using purified soft water to leave hair soft and light.",
      },
      {
        title: "Blowdry & Finish",
        description: "Styled with round boars-hair brushes for effortless bounce and movement.",
      },
    ],
    faqs: [
      {
        question: "How long will this haircut keep its shape?",
        answer: "Because we cut dry following your natural hair patterns, the cut grows out cleanly for 8 to 12 weeks without awkward phases.",
      },
      {
        question: "Should I arrive with clean or unwashed hair?",
        answer: "Please come with clean, dry hair styled how you usually wear it day-to-day so we can see its natural texture.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop",
    badge: "Most Popular",
    recommendedAddons: ["Moisture Mask", "Scalp Refresh Rinse"],
  },
  {
    id: "cut-dry-precision",
    slug: "dry-precision-sculpture",
    title: "Precision Dry Cut for Texture & Curls",
    subtitle: "Dedicated dry cutting for natural curls, waves, and bob shapes",
    category: "haircuts",
    price: 140,
    durationMinutes: 60,
    description:
      "A focused dry cut designed specifically for curls, waves, or clean bob cuts. We shape each curl curl-by-curl so your hair has balanced volume without unwanted bulk or frizz.",
    inclusions: [
      "Curl pattern and density consultation",
      "Individual curl-by-curl dry cut",
      "Weightless leave-in moisture treatment",
      "Natural diffuser drying to set your curls",
    ],
    processSteps: [
      {
        title: "Curl Pattern Check",
        description: "We evaluate your curl bounce and shrinkage patterns.",
      },
      {
        title: "Curl-by-Curl Cut",
        description: "Shaping individual curl clusters to prevent heavy triangle shapes.",
      },
      {
        title: "Hydration & Diffuse",
        description: "Locking in lightweight hydration and gently diffusing with low heat.",
      },
    ],
    faqs: [
      {
        question: "Is this suitable for tight curls and coils?",
        answer: "Yes, our stylists are trained in dry curl cutting that honors your pattern rather than pulling it flat wet.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cut-fringe-perimeter",
    slug: "fringe-perimeter-renewal",
    title: "Bangs & Neckline Refresh",
    subtitle: "Quick clean-up for curtain bangs, blunt bangs, and necklines",
    category: "haircuts",
    price: 65,
    durationMinutes: 30,
    description:
      "A quick touch-up between full haircuts to trim curtain bangs, blunt fringes, or clean up neckline edges.",
    inclusions: [
      "Face-framing length check",
      "Precision dry fringe trim",
      "Quick thermal touch-up",
    ],
    processSteps: [
      {
        title: "Length Check",
        description: "Checking eyebrow, cheekbone, and lash lines to find the best length.",
      },
      {
        title: "Soft Edge Trim",
        description: "Trimming the tips softly so your bangs fall naturally without sharp lines.",
      },
    ],
    faqs: [
      {
        question: "Can I book this for completely new bangs?",
        answer: "If you are cutting bangs for the very first time, we recommend our 60-minute haircut to blend them smoothly into the sides.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop",
  },

  // Colour
  {
    id: "colour-french-balayage",
    slug: "french-dimensional-balayage",
    title: "French Balayage & Gloss",
    subtitle: "Hand-painted natural highlights that look like effortless sunshine",
    category: "colour",
    price: 310,
    durationMinutes: 150,
    description:
      "Classic French hand-painted highlights using gentle clay lightener. Seamlessly blended from your natural roots to bright, soft mid-lengths and ends without harsh foil lines.",
    inclusions: [
      "Custom shade consultation",
      "Hand-painted clay balayage",
      "Hair bond protection treatment",
      "Shine gloss & toner",
      "Deep moisture conditioner",
    ],
    processSteps: [
      {
        title: "Color Consultation",
        description: "We pick warm or cool tones that match your skin and eye color.",
      },
      {
        title: "Hand Painting",
        description: "Lightening clay is painted freehand onto the hair for smooth, natural gradients.",
      },
      {
        title: "Shine Glaze",
        description: "Sealing hair with a nourishing toner to lock in healthy shine and color.",
      },
    ],
    faqs: [
      {
        question: "How often do I need a touch-up?",
        answer: "Because balayage blends softly into your natural roots, grow-out is very subtle. Most clients visit every 4 to 6 months.",
      },
      {
        question: "Will this damage fine hair?",
        answer: "No. Our low-pH clay formula contains protective plant proteins and processes open-air without harsh foils.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop",
    badge: "Client Favorite",
  },
  {
    id: "colour-global-silk",
    slug: "global-silk-bleach-gloss",
    title: "Full Blonde & Gloss Toner",
    subtitle: "Smooth platinum or buttery golden blonde from roots to ends",
    category: "colour",
    price: 380,
    durationMinutes: 180,
    description:
      "Full lightening service using an argan-oil infused lightener that stays gentle on the scalp. Finished with a personalized toner for bright, clean, luminous blonde hair.",
    inclusions: [
      "Scalp protection serum application",
      "Oil-infused lightener application",
      "Careful lift monitoring",
      "Bespoke toning wash",
      "Deep restorative conditioning mask",
    ],
    processSteps: [
      {
        title: "Scalp Prep",
        description: "Coating the scalp with calming oils to prevent stinging or irritation.",
      },
      {
        title: "Detailed Application",
        description: "Applying lightener in fine sections for an even, clean blonde lift.",
      },
      {
        title: "Toning Bath",
        description: "Neutralizing yellow tones and adding silky shine.",
      },
    ],
    faqs: [
      {
        question: "How much root growth is ideal for a touch-up?",
        answer: "For an even on-scalp bleach, we recommend coming in every 4 to 6 weeks so there are no color bands.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "colour-luminous-gloss",
    slug: "luminous-mineral-gloss-glaze",
    title: "Shine Gloss & Tone Refresh",
    subtitle: "Quick shine treatment to revive color, cancel brassiness, and boost glow",
    category: "colour",
    price: 95,
    durationMinutes: 45,
    description:
      "A fast conditioning color gloss that revives dull hair, enhances rich browns or coppers, cancels unwanted brassy tones, and leaves hair mirror-shiny for up to 6 weeks.",
    inclusions: [
      "Custom gloss color formulation",
      "Shine-enhancing glaze treatment",
      "Relaxing scalp massage wash",
      "Lightweight conditioning seal",
    ],
    processSteps: [
      {
        title: "Shade Selection",
        description: "Custom blending sheer tones for depth, clarity, or warm glow.",
      },
      {
        title: "Shine Treatment",
        description: "Warm gloss treatment to smooth and nourish hair cuticles.",
      },
    ],
    faqs: [
      {
        question: "Will this permanently change my natural hair?",
        answer: "No. Sheer gloss washes out gradually over 6 to 8 weeks without altering your natural base color.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
  },

  // Styling & Bridal
  {
    id: "style-haute-wave",
    slug: "haute-couture-editorial-wave",
    title: "Soft Editorial Waves & Blowout",
    subtitle: "Long-lasting, effortless waves with natural bounce and touchable texture",
    category: "styling",
    price: 130,
    durationMinutes: 60,
    description:
      "Gently sculpted waves set with ceramic irons and cold-pinning techniques. Delivers lasting volume and movement that never feels stiff or crunchy.",
    inclusions: [
      "Heat protectant and foundation prep",
      "Ceramic wave styling",
      "Cold-clip setting for longevity",
      "Comb-out and light finishing mist",
    ],
    processSteps: [
      {
        title: "Heat Prep",
        description: "Protecting hair with light silk leave-in conditioner before styling.",
      },
      {
        title: "Wave Styling",
        description: "Curling alternating directions to create an effortless, modern wave.",
      },
    ],
    faqs: [
      {
        question: "How long will the waves last?",
        answer: "With our cold-pin set technique, clients usually enjoy soft waves for 2 to 3 days.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "style-bridal-suite",
    slug: "private-suite-bridal-experience",
    title: "Bridal Styling in Private Suite",
    subtitle: "Dedicated wedding hair styling in a peaceful private room",
    category: "styling",
    price: 620,
    durationMinutes: 180,
    description:
      "A calm, private wedding morning experience. Includes your own private room for 3 hours, herbal tea and refreshments, bridal hair updo or waves, and secure veil placement.",
    inclusions: [
      "Exclusive private suite for 3 hours",
      "Champagne or herbal tea service",
      "Bridal updo, half-up, or textured waves",
      "Veil and headpiece fastening",
      "Touch-up kit with matching lip color and pins",
    ],
    processSteps: [
      {
        title: "Relaxation",
        description: "A calming scalp and shoulder massage with soothing essential oils.",
      },
      {
        title: "Hair Styling",
        description: "Crafting your chosen bridal style with long-lasting all-day hold.",
      },
      {
        title: "Veil Placement",
        description: "Carefully anchoring your veil and accessories so they stay secure all day.",
      },
    ],
    faqs: [
      {
        question: "Do I need a trial beforehand?",
        answer: "Yes, we strongly recommend a trial run 4 to 8 weeks before the wedding to try styles with your dress neckline.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    badge: "Bridal Suite",
  },

  // Keratin & Treatments
  {
    id: "treat-bio-keratin",
    slug: "formaldehyde-free-botanical-keratin",
    title: "Botanical Keratin Smoothing",
    subtitle: "Smooths frizz, adds mirror shine, and cuts drying time in half",
    category: "keratin",
    price: 320,
    durationMinutes: 120,
    description:
      "A formaldehyde-free smoothing treatment made with bamboo extract and marula oil. It eliminates frizz, smooths unruly texture, and cuts drying time by 70% while keeping natural volume.",
    inclusions: [
      "Deep cleansing prep wash",
      "Plant keratin smoothing treatment",
      "Thermal seal with regulated heat",
      "Balancing conditioner and rinse",
      "Take-home sulfate-free shampoo sample",
    ],
    processSteps: [
      {
        title: "Gentle Cleanse",
        description: "Removing product buildup and mineral deposits so the treatment absorbs evenly.",
      },
      {
        title: "Smoothing Application",
        description: "Brushing plant keratin throughout the hair section by section.",
      },
      {
        title: "Flat Iron Seal",
        description: "Sealing the treatment with regulated ceramic heat plates.",
      },
    ],
    faqs: [
      {
        question: "How long does the smoothing last?",
        answer: "With sulfate-free shampoo, results stay smooth and frizz-free for 4 to 5 months.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1522337094346-2917d2d38515?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "treat-japanese-headspa",
    slug: "japanese-carbonated-head-spa",
    title: "Japanese Scalp Head Spa & Massage",
    subtitle: "Warm carbonated water waterfall, deep scalp cleanse, and calming massage",
    category: "keratin",
    price: 190,
    durationMinutes: 75,
    description:
      "A deeply relaxing experience using warm carbonated micro-bubbles to cleanse the scalp, ease neck tension, and promote healthy hair growth under a continuous warm water waterfall.",
    inclusions: [
      "Gentle scalp inspection",
      "Scalp scrub and exfoliation",
      "Warm carbonated water waterfall",
      "30-minute relaxing scalp and neck massage",
      "Nourishing scalp serum finish",
    ],
    processSteps: [
      {
        title: "Scalp Check",
        description: "We look at scalp moisture levels and sensitivity before starting.",
      },
      {
        title: "Warm Water Halo",
        description: "A continuous cascade of warm mineral water cleanses pores and eases tension.",
      },
      {
        title: "Scalp Massage",
        description: "Slow, soothing finger pressure massage across the temples, crown, and neck.",
      },
    ],
    faqs: [
      {
        question: "Is this safe for sensitive scalps?",
        answer: "Yes, our carbonated water is gently balanced and infused with calming plant extracts to soothe redness and irritation.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    badge: "Relaxing Favorite",
  },

  // Facials & Skin
  {
    id: "facial-cryo-lymphatic",
    slug: "sculptural-cryo-lymphatic-facial",
    title: "De-Puffing Cryo Facial",
    subtitle: "Chilled cryo globes and face massage to de-puff and brighten tired skin",
    category: "facials",
    price: 210,
    durationMinutes: 60,
    description:
      "Designed to de-puff, sculpt jawlines, and refresh tired skin. Combines gentle face massage with chilled cryotherapy glass globes and hydrating peptide serums.",
    inclusions: [
      "Gentle oil and foam double cleanse",
      "Firming facial massage",
      "Chilled cryo globe soothing treatment",
      "Hydrating collagen mask",
    ],
    processSteps: [
      {
        title: "Facial Massage",
        description: "Gentle massage strokes to release jaw tension and drain facial puffiness.",
      },
      {
        title: "Cryo Globes",
        description: "Gliding chilled glass globes over the skin to soothe and tighten pores.",
      },
    ],
    faqs: [
      {
        question: "Is there any redness afterwards?",
        answer: "None. You will walk out with rested eyes, relaxed muscles, and an instant fresh glow.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1512290900672-1f02e6a0ee3e?q=80&w=1200&auto=format&fit=crop",
  },

  // Nails
  {
    id: "nail-japanese-structured",
    slug: "japanese-structured-gel-manicure",
    title: "Structured Gel Manicure",
    subtitle: "Gentle dry cuticle care with long-lasting strengthening builder gel",
    category: "nails",
    price: 110,
    durationMinutes: 75,
    description:
      "Clean, precise cuticle care without soaking or harsh cutting. Finished with premium Japanese builder gel that strengthens natural nails for 4+ weeks of chip-free wear.",
    inclusions: [
      "Dry machine cuticle cleaning",
      "Natural nail shaping",
      "Strengthening gel overlay",
      "Choice of sheer nude or soft polish color",
      "Jojoba cuticle oil massage",
    ],
    processSteps: [
      {
        title: "Cuticle Care",
        description: "Gently clearing dry skin around the nail bed without cutting live skin.",
      },
      {
        title: "Builder Gel",
        description: "Applying a flexible strengthening gel to protect against breaks and chips.",
      },
    ],
    faqs: [
      {
        question: "Does this damage my natural nails?",
        answer: "No. Unlike thick acrylics, Japanese gel is flexible, breathable, and removed gently without scraping.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
  },

  // Men's Grooming
  {
    id: "groom-savile-row",
    slug: "savile-row-scissor-cut-shave",
    title: "Classic Scissor Haircut & Hot Towel Shave",
    subtitle: "Traditional scissor haircut, steamed eucalyptus towel, and smooth razor shave",
    category: "grooming",
    price: 115,
    durationMinutes: 60,
    description:
      "A complete classic men's grooming appointment. Includes a scissor-over-comb taper haircut, steamed eucalyptus hot towel, straight-razor shave, and refreshing aftershave splash.",
    inclusions: [
      "Style consultation",
      "Scissor-over-comb haircut and taper",
      "Steamed eucalyptus hot towel wrap",
      "Straight-razor cheek and neckline shave",
      "Cooling aftershave compress",
    ],
    processSteps: [
      {
        title: "Haircut & Taper",
        description: "Scissor work on top blended smoothly into clean, natural side tapers.",
      },
      {
        title: "Hot Towel Wrap",
        description: "Steamed towel with eucalyptus to soften beard hair before shaving.",
      },
      {
        title: "Straight-Razor Finish",
        description: "Smooth razor shave for clean lines with zero irritation.",
      },
    ],
    faqs: [
      {
        question: "Can I get a full shave instead of a beard trim?",
        answer: "Yes, you can choose either a full smooth shave or a beard line-up.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
  },
];
