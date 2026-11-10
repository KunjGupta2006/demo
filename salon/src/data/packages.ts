import { PackageDeal } from "@/types";

export const PACKAGES_DATA: PackageDeal[] = [
  {
    id: "pkg-bridal-couture",
    slug: "couture-bridal-experience",
    title: "The Complete Bridal Experience",
    tagline: "Private suite styling, trial run preview, and day-of wedding hair",
    price: 850,
    originalValue: 970,
    durationMinutes: 300,
    description:
      "A complete two-part bridal journey. Begins with a relaxed 2-hour preview trial to test styles and veil placement, followed by 3 hours in your private suite on the wedding day with tea, champagne, and dedicated styling.",
    servicesIncluded: [
      "2-Hour Bridal Preview & Veil Trial",
      "Private Suite Reservation (3 Hours)",
      "Wedding Day Hair & Veil Placement",
      "Relaxing Scalp & Neck Massage",
      "Emergency Touch-Up Kit with Pins & Gloss",
    ],
    idealFor: "Brides wanting long-lasting hair, total peace of mind, and private styling space on their wedding morning.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "pkg-glow-renewal",
    slug: "restorative-glow-immersion",
    title: "Head Spa & Glow Reset",
    tagline: "Japanese head spa waterfall, refreshing cryo facial, and signature haircut",
    price: 495,
    originalValue: 565,
    durationMinutes: 210,
    description:
      "An unhurried half-day reset for hair, scalp, and skin. Enjoy a warm carbonated scalp bath and massage, a refreshing cryo facial to soothe and de-puff, and a signature dry cut and blowdry.",
    servicesIncluded: [
      "75-min Japanese Scalp Head Spa & Massage",
      "60-min De-Puffing Cryo Facial",
      "75-min Signature Haircut & Blowdry",
      "Complimentary Herbal Tea & Refreshments",
    ],
    idealFor: "Anyone feeling tired, recovering from travel, or looking for a deeply relaxing total self-care afternoon.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "pkg-gentleman-curation",
    slug: "tailored-gentleman-protocol",
    title: "The Classic Cut & Hot Towel Shave",
    tagline: "Precision haircut, steamed hot towel straight-razor shave, and scalp massage",
    price: 240,
    originalValue: 280,
    durationMinutes: 120,
    description:
      "A classic men's grooming appointment. Includes a custom scissor cut and taper, eucalyptus steamed towel wrap, smooth straight-razor line-up, and invigorating scalp massage.",
    servicesIncluded: [
      "Custom Precision Scissor Haircut & Taper",
      "Eucalyptus Steamed Towel & Straight-Razor Shave",
      "Refreshing Scalp Cleanse & Massage",
      "Beard Grooming & Conditioning Oil Finish",
    ],
    idealFor: "Men looking for a sharp, clean haircut and a traditional relaxing hot towel shave.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
  },
];
