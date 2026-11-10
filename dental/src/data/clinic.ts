// ============================================================
// Aura Dental Studio — All clinic data in one file
// Change this file to re-brand for any real clinic client.
// ============================================================

export interface Doctor {
  name: string;
  slug: string;
  qualification: string;
  specialty: string;
  experience: string;
  bio: string;
}

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  icon: string; // Lucide icon name
  overview: string;
  whoIsItFor: string[];
  procedureSteps: string[];
  duration: string;
  recovery: string;
  priceRange: string;
  priceStarting: number;
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
  tintColor: "mint" | "sky" | "peach" | "lavender";
}

export interface Testimonial {
  name: string;
  treatment: string;
  rating: number;
  text: string;
  source: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface ClinicHours {
  day: string;
  open: string;
  close: string;
  isClosed: boolean;
}

export interface ClinicData {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pin: string;
    full: string;
    mapsUrl: string;
    mapsEmbed: string;
  };
  hours: ClinicHours[];
  timezone: string;
  doctors: Doctor[];
  services: Service[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  socials: SocialLink[];
  stats: { label: string; value: string; suffix?: string }[];
  trustChips: string[];
  emergencyNote: string;
  disclaimer: string;
  siteUrl: string;
  pricing: {
    emiAvailable: boolean;
    insuranceCashless: boolean;
    upiAccepted: boolean;
    cardsAccepted: boolean;
  };
}

const clinic: ClinicData = {
  name: "Aura Dental Studio",
  tagline: "Healthy smiles, zero fear.",
  phone: "+919876543210",
  whatsapp: "919876543210",
  email: "hello@auradentalstudio.in",
  address: {
    line1: "2nd Floor, Prestige Oasis",
    line2: "12th Main Road, Indiranagar",
    city: "Bengaluru",
    state: "Karnataka",
    pin: "560038",
    full: "2nd Floor, Prestige Oasis, 12th Main Road, Indiranagar, Bengaluru, Karnataka 560038",
    mapsUrl: "https://maps.google.com/?q=Indiranagar+Bengaluru",
    mapsEmbed: "",
  },
  hours: [
    { day: "Monday", open: "09:00", close: "20:00", isClosed: false },
    { day: "Tuesday", open: "09:00", close: "20:00", isClosed: false },
    { day: "Wednesday", open: "09:00", close: "20:00", isClosed: false },
    { day: "Thursday", open: "09:00", close: "20:00", isClosed: false },
    { day: "Friday", open: "09:00", close: "20:00", isClosed: false },
    { day: "Saturday", open: "09:00", close: "17:00", isClosed: false },
    { day: "Sunday", open: "10:00", close: "14:00", isClosed: false },
  ],
  timezone: "Asia/Kolkata",
  stats: [
    { label: "Happy smiles", value: "10,000", suffix: "+" },
    { label: "Google rating", value: "4.9", suffix: "★" },
    { label: "Years of experience", value: "12", suffix: "+" },
    { label: "Dental specialists", value: "3" },
  ],
  trustChips: [
    "10,000+ smiles",
    "4.9 ★ Google rating",
    "Painless treatments",
    "Same-day appointments",
  ],
  emergencyNote: "Dental emergency? Call us now — we are available 24/7 for emergencies.",
  disclaimer: "Demo website — sample content only. Not a real clinic.",
  siteUrl: "https://auradentalstudio.in",
  pricing: {
    emiAvailable: true,
    insuranceCashless: true,
    upiAccepted: true,
    cardsAccepted: true,
  },
  doctors: [
    {
      name: "Dr. Priya Sharma",
      slug: "priya-sharma",
      qualification: "BDS, MDS (Prosthodontics)",
      specialty: "Smile makeovers & dental implants",
      experience: "12+ years",
      bio: "Dr. Priya founded Aura Dental Studio with a mission to make world-class dentistry accessible and fear-free. She specialises in full-mouth rehabilitation and cosmetic dentistry, having trained at top institutes in India and Germany.",
    },
    {
      name: "Dr. Arjun Mehta",
      slug: "arjun-mehta",
      qualification: "BDS, MDS (Orthodontics)",
      specialty: "Braces & clear aligners",
      experience: "8+ years",
      bio: "Dr. Arjun is an orthodontics specialist who has straightened over 3,000 smiles. He is certified in Invisalign and uses the latest 3D scanning technology for precise treatment planning.",
    },
    {
      name: "Dr. Neha Reddy",
      slug: "neha-reddy",
      qualification: "BDS, MDS (Pedodontics)",
      specialty: "Kids dentistry & preventive care",
      experience: "6+ years",
      bio: "Dr. Neha makes every child feel at ease with her gentle approach and kid-friendly clinic setup. She is passionate about early dental care and works with schools across Bengaluru on oral hygiene awareness.",
    },
  ],
  services: [
    {
      name: "General Checkup & Cleaning",
      slug: "checkup-cleaning",
      shortDescription: "Routine exams, scaling, and polishing to keep your teeth and gums healthy.",
      icon: "Stethoscope",
      overview: "A comprehensive oral examination and professional cleaning that removes plaque, tartar, and surface stains. Our dentists check for cavities, gum disease, and early signs of oral health issues — catching problems before they become painful or expensive.",
      whoIsItFor: [
        "Anyone who hasn't visited a dentist in 6+ months",
        "People with mild sensitivity or bleeding gums",
        "Those who want a brighter, fresher smile",
      ],
      procedureSteps: [
        "Full oral examination with digital X-rays",
        "Ultrasonic scaling to remove tartar",
        "Air-flow polishing for stain removal",
        "Fluoride treatment for enamel protection",
        "Personalised oral hygiene guidance",
      ],
      duration: "30–45 minutes",
      recovery: "None — you can eat and drink normally right away.",
      priceRange: "₹500 – ₹1,500",
      priceStarting: 500,
      faq: [
        { question: "How often should I get a dental checkup?", answer: "We recommend every 6 months. If you have gum disease or are prone to cavities, your dentist may suggest every 3–4 months." },
        { question: "Is scaling painful?", answer: "Not at all. Modern ultrasonic scalers are gentle and most patients feel only a mild vibration. We use topical numbing gel if you're sensitive." },
      ],
      relatedSlugs: ["teeth-whitening", "kids-dentistry"],
      tintColor: "mint",
    },
    {
      name: "Teeth Whitening",
      slug: "teeth-whitening",
      shortDescription: "Professional in-clinic whitening for a brighter smile in just one visit.",
      icon: "Sparkles",
      overview: "Our in-clinic teeth whitening uses safe, clinically proven bleaching agents activated by LED light to brighten your teeth by up to 8 shades in a single sitting. The results are natural-looking and long-lasting when paired with good oral care.",
      whoIsItFor: [
        "People with stained or yellowed teeth from tea, coffee, or tobacco",
        "Anyone preparing for a special occasion — wedding, interview, photoshoot",
        "Those who want quick, visible results without veneers",
      ],
      procedureSteps: [
        "Shade assessment and digital photography",
        "Gum protection with a barrier gel",
        "Application of professional whitening agent",
        "LED light activation (3 cycles, 15 min each)",
        "Post-whitening sensitivity treatment",
      ],
      duration: "60–90 minutes",
      recovery: "Avoid dark-coloured food and drinks for 48 hours. Mild sensitivity may last 1–2 days.",
      priceRange: "₹5,000 – ₹15,000",
      priceStarting: 5000,
      faq: [
        { question: "Is teeth whitening safe?", answer: "Yes, when done professionally. We use dentist-grade products that are safe for your enamel. Over-the-counter kits can be risky — always consult a dentist." },
        { question: "How long do results last?", answer: "6–12 months with proper care. Avoid excessive tea, coffee, and tobacco. Touch-up treatments are available." },
      ],
      relatedSlugs: ["smile-makeover", "checkup-cleaning"],
      tintColor: "sky",
    },
    {
      name: "Braces & Clear Aligners",
      slug: "braces-aligners",
      shortDescription: "Straighten your teeth with traditional braces or invisible aligners.",
      icon: "AlignCenter",
      overview: "Whether you prefer metal braces, ceramic braces, or clear aligners like Invisalign, we design a personalised treatment plan using 3D scanning and digital smile simulation so you can see your future smile before treatment begins.",
      whoIsItFor: [
        "Teens and adults with crooked or misaligned teeth",
        "Patients with overbite, underbite, or gaps",
        "Those who want a discreet option (clear aligners)",
      ],
      procedureSteps: [
        "3D intraoral scan and digital smile simulation",
        "Custom treatment plan and timeline",
        "Bracket bonding or aligner fitting",
        "Monthly adjustment or aligner change",
        "Retainer fitting after treatment",
      ],
      duration: "6–24 months depending on case complexity",
      recovery: "Mild soreness for 2–3 days after each adjustment. Soft food recommended initially.",
      priceRange: "₹25,000 – ₹2,00,000",
      priceStarting: 25000,
      faq: [
        { question: "Are clear aligners as effective as braces?", answer: "For most cases, yes. Clear aligners work best for mild to moderate alignment issues. Complex cases may still need traditional braces for best results." },
        { question: "Can adults get braces?", answer: "Absolutely! There's no age limit. About 40% of our orthodontic patients are adults." },
      ],
      relatedSlugs: ["smile-makeover", "checkup-cleaning"],
      tintColor: "lavender",
    },
    {
      name: "Dental Implants",
      slug: "dental-implants",
      shortDescription: "Permanent, natural-looking replacement for missing teeth.",
      icon: "Pin",
      overview: "Dental implants are titanium posts surgically placed in the jawbone to serve as artificial tooth roots. They support crowns, bridges, or dentures that look, feel, and function exactly like natural teeth — and can last a lifetime with proper care.",
      whoIsItFor: [
        "People with one or more missing teeth",
        "Those uncomfortable with removable dentures",
        "Patients with sufficient jawbone density (or willing to undergo bone grafting)",
      ],
      procedureSteps: [
        "CBCT scan and treatment planning",
        "Implant placement under local anaesthesia",
        "3–6 month healing period (osseointegration)",
        "Abutment placement",
        "Custom crown or prosthesis fitting",
      ],
      duration: "3–6 months (total treatment, spread over visits)",
      recovery: "2–3 days of mild swelling. Soft diet for 1 week. Full healing in 3–6 months.",
      priceRange: "₹25,000 – ₹60,000 per implant",
      priceStarting: 25000,
      faq: [
        { question: "How long do dental implants last?", answer: "With proper care, implants can last 20+ years — often a lifetime. The crown on top may need replacement after 10–15 years." },
        { question: "Is the surgery painful?", answer: "The procedure is done under local anaesthesia, so you won't feel pain during placement. Post-operative discomfort is managed with medication and is usually mild." },
      ],
      relatedSlugs: ["smile-makeover", "oral-surgery"],
      tintColor: "mint",
    },
    {
      name: "Root Canal Treatment",
      slug: "root-canal",
      shortDescription: "Painless root canal therapy to save your natural tooth.",
      icon: "HeartPulse",
      overview: "A root canal removes infected pulp tissue from inside your tooth, eliminates bacteria, and seals the tooth to prevent reinfection. With modern rotary instruments and anaesthesia, the procedure is virtually painless — often less uncomfortable than a filling.",
      whoIsItFor: [
        "Patients with severe toothache or sensitivity to hot/cold",
        "Teeth with deep decay reaching the nerve",
        "Teeth with infection or abscess at the root",
      ],
      procedureSteps: [
        "Digital X-ray to assess infection",
        "Local anaesthesia for complete comfort",
        "Removal of infected pulp with rotary instruments",
        "Cleaning and shaping of root canals",
        "Filling and sealing the canals",
        "Crown placement for long-term protection",
      ],
      duration: "45–90 minutes (1–2 visits)",
      recovery: "Mild tenderness for 2–3 days. Over-the-counter painkillers are usually sufficient.",
      priceRange: "₹3,000 – ₹8,000 (plus crown)",
      priceStarting: 3000,
      faq: [
        { question: "Is a root canal really painless?", answer: "Yes! Modern anaesthesia and techniques make root canals no more painful than getting a filling. Most patients are surprised at how comfortable it is." },
        { question: "Do I need a crown after a root canal?", answer: "In most cases, yes. A crown protects the treated tooth from fracture and restores full function." },
      ],
      relatedSlugs: ["checkup-cleaning", "dental-implants"],
      tintColor: "peach",
    },
    {
      name: "Smile Makeover & Veneers",
      slug: "smile-makeover",
      shortDescription: "Transform your smile with custom porcelain veneers and cosmetic treatments.",
      icon: "Smile",
      overview: "A smile makeover combines multiple cosmetic procedures — veneers, whitening, bonding, gum contouring — tailored to your unique facial features. Ultra-thin porcelain veneers cover imperfections and give you a natural, magazine-ready smile.",
      whoIsItFor: [
        "People unhappy with the shape, colour, or alignment of their smile",
        "Those with chipped, worn, or uneven teeth",
        "Anyone wanting a complete cosmetic transformation",
      ],
      procedureSteps: [
        "Digital Smile Design consultation",
        "Mock-up try-in so you preview your new smile",
        "Minimal tooth preparation (0.3–0.5mm)",
        "Impressions and temporary veneers",
        "Custom porcelain veneer bonding",
      ],
      duration: "2–3 visits over 2 weeks",
      recovery: "Minimal — you can resume normal activities the same day.",
      priceRange: "₹8,000 – ₹25,000 per veneer",
      priceStarting: 8000,
      faq: [
        { question: "How long do veneers last?", answer: "High-quality porcelain veneers last 10–15 years or more with proper care." },
        { question: "Will veneers look natural?", answer: "Absolutely. We use Digital Smile Design to create veneers that match your face, skin tone, and personality. No one will know — they'll just notice your beautiful smile." },
      ],
      relatedSlugs: ["teeth-whitening", "braces-aligners"],
      tintColor: "lavender",
    },
    {
      name: "Kids Dentistry",
      slug: "kids-dentistry",
      shortDescription: "Gentle, fun dental care designed especially for children.",
      icon: "Baby",
      overview: "Our pediatric dental care focuses on making every child's visit enjoyable and fear-free. From their first tooth to their teens, we provide preventive care, fluoride treatments, sealants, and early orthodontic assessments in a colourful, kid-friendly environment.",
      whoIsItFor: [
        "Children from age 1 to 16",
        "Kids with dental anxiety or fear",
        "Parents looking for preventive dental care for their children",
      ],
      procedureSteps: [
        "Fun, interactive introduction to the dental chair",
        "Gentle examination and cleaning",
        "Fluoride varnish application",
        "Dental sealants for cavity prevention",
        "Oral hygiene education with parents",
      ],
      duration: "20–30 minutes",
      recovery: "None — kids can go back to school or play right away.",
      priceRange: "₹500 – ₹3,000",
      priceStarting: 500,
      faq: [
        { question: "When should my child first visit a dentist?", answer: "By their first birthday or within 6 months of their first tooth appearing — whichever comes first." },
        { question: "How do you handle kids who are scared?", answer: "Dr. Neha specialises in pediatric dentistry and uses tell-show-do techniques, distraction, and a fun clinic environment to make kids comfortable." },
      ],
      relatedSlugs: ["checkup-cleaning", "braces-aligners"],
      tintColor: "sky",
    },
    {
      name: "Wisdom Tooth & Oral Surgery",
      slug: "oral-surgery",
      shortDescription: "Safe extraction of wisdom teeth and other minor oral surgeries.",
      icon: "Syringe",
      overview: "Impacted or problematic wisdom teeth can cause pain, infection, and damage to adjacent teeth. Our oral surgeons perform safe, comfortable extractions using advanced techniques and anaesthesia. We also handle cyst removal, frenectomy, and other minor surgical procedures.",
      whoIsItFor: [
        "Patients with impacted or painful wisdom teeth",
        "Those with recurring infections around a partially erupted tooth",
        "People needing cyst removal or biopsy",
      ],
      procedureSteps: [
        "Panoramic X-ray or CBCT scan",
        "Treatment planning and consent",
        "Local anaesthesia (or sedation if needed)",
        "Careful extraction with minimal tissue handling",
        "Suturing and post-op care instructions",
      ],
      duration: "30–60 minutes per tooth",
      recovery: "2–5 days. Swelling peaks at 48 hours. Soft diet recommended. Sutures removed in 7 days.",
      priceRange: "₹2,000 – ₹10,000",
      priceStarting: 2000,
      faq: [
        { question: "Will wisdom tooth removal hurt?", answer: "No — the area is fully numbed before we begin. You may feel pressure but no pain. Post-operative discomfort is managed with prescribed medication." },
        { question: "Do all wisdom teeth need removal?", answer: "Not necessarily. If they're fully erupted, properly aligned, and healthy, they can stay. We only recommend removal when they cause or risk causing problems." },
      ],
      relatedSlugs: ["dental-implants", "root-canal"],
      tintColor: "peach",
    },
  ],
  testimonials: [
    {
      name: "Ananya K.",
      treatment: "Smile Makeover",
      rating: 5,
      text: "I was so self-conscious about my smile for years. Dr. Priya designed veneers that look completely natural — my friends can't even tell! The whole experience was painless and the clinic is gorgeous.",
      source: "Google Review",
    },
    {
      name: "Rahul M.",
      treatment: "Root Canal",
      rating: 5,
      text: "I was terrified of getting a root canal, but Dr. Priya made it completely painless. Honestly, it was easier than getting a filling. The clinic is super clean and modern. Highly recommend!",
      source: "Google Review",
    },
    {
      name: "Sneha & Arjun",
      treatment: "Family Dental Care",
      rating: 5,
      text: "Our whole family visits Aura Dental — including our 4-year-old who actually looks forward to it! Dr. Neha is amazing with kids. The staff is warm and the clinic feels more like a spa than a dental office.",
      source: "Google Review",
    },
    {
      name: "Vikram S.",
      treatment: "Dental Implants",
      rating: 5,
      text: "Lost a front tooth in an accident and was devastated. The implant Dr. Priya placed is indistinguishable from my real teeth. It took a few months but was absolutely worth the wait. Life-changing!",
      source: "Google Review",
    },
    {
      name: "Preethi R.",
      treatment: "Clear Aligners",
      rating: 5,
      text: "Got clear aligners instead of braces — best decision ever. Dr. Arjun showed me a 3D simulation of my final smile before I even started. 8 months later, my teeth are perfectly straight!",
      source: "Google Review",
    },
    {
      name: "Deepak N.",
      treatment: "Teeth Whitening",
      rating: 4,
      text: "Quick, effective, and my teeth are noticeably whiter. The staff explained everything clearly and the pricing was transparent — no hidden costs. Will definitely come back for my 6-monthly checkup.",
      source: "Google Review",
    },
  ],
  faqs: [
    {
      question: "Is the treatment really painless?",
      answer: "Yes! We use modern anaesthesia techniques, gentle instruments, and a calm environment to ensure every procedure is as comfortable as possible. Many patients are surprised at how painless their experience is.",
    },
    {
      question: "How long does a typical appointment take?",
      answer: "A routine checkup and cleaning takes about 30–45 minutes. More complex procedures like root canals or implant placement may take 60–90 minutes. We always let you know the expected duration before your appointment.",
    },
    {
      question: "How much do treatments cost?",
      answer: "We believe in transparent pricing. A basic checkup starts at ₹500, and you'll receive a detailed cost estimate before any procedure begins. We never charge hidden fees. See our pricing section for starting ranges.",
    },
    {
      question: "What sterilisation protocols do you follow?",
      answer: "We follow international standards of sterilisation. All instruments are autoclaved, surfaces are disinfected between patients, and we use disposable items wherever possible. Your safety is our top priority.",
    },
    {
      question: "Do you treat children? At what age should they start?",
      answer: "Absolutely! Dr. Neha specialises in pediatric dentistry. We recommend bringing your child by their first birthday or within 6 months of their first tooth appearing. Early visits help build a positive relationship with dental care.",
    },
    {
      question: "What if I have a dental emergency?",
      answer: "Call us immediately at our emergency number. We accommodate urgent cases the same day whenever possible — including severe pain, knocked-out teeth, or broken restorations.",
    },
    {
      question: "Do you offer EMI or payment plans?",
      answer: "Yes! We offer no-cost EMI on treatments above ₹10,000 through major banks and NBFCs. We also accept all major credit/debit cards, UPI, and cash. Ask our front desk for details.",
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we are empanelled with major insurance providers and offer cashless claims where applicable. Bring your insurance card and we'll handle the paperwork for you.",
    },
  ],
  socials: [
    { platform: "instagram", url: "https://instagram.com/auradentalstudio", label: "Follow us on Instagram" },
    { platform: "facebook", url: "https://facebook.com/auradentalstudio", label: "Like us on Facebook" },
    { platform: "google", url: "https://g.page/auradentalstudio", label: "Review us on Google" },
  ],
};

export default clinic;
