export interface Program {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  benefits: string[];
  idealFor: string;
  image: string;
  ctaText: string;
  ctaHref: string;
  highlights: string[];
}

export const programs: Program[] = [
  {
    id: "strength-lab",
    title: "Strength Lab",
    subtitle: "Barbell & Compound Lift Progression",
    tag: "FOUNDATIONAL STRENGTH",
    description: "Progressive strength programming built around compound lifts, technical precision, and sustainable week-over-week overload.",
    benefits: [
      "Master squat, deadlift, bench press, and overhead mechanics",
      "Custom RPE-based weight loading & auto-regulation",
      "Dedicated power racks, Eleiko plates, and specialized bars"
    ],
    idealFor: "Lifters seeking structural strength, posture, muscle density, and barbell mastery.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Explore Strength",
    ctaHref: "/book-trial?program=strength-lab",
    highlights: ["Barbell Mastery", "3-Day & 4-Day Cycles", "Technique Screen"]
  },
  {
    id: "performance",
    title: "Performance",
    subtitle: "Athletic Conditioning & Capacity",
    tag: "ATHLETIC CAPACITY",
    description: "Athletic conditioning, explosive power, and multi-planar movement work for members who want to move with power, agility, and stamina.",
    benefits: [
      "High-output metabolic conditioning & aerobic base building",
      "Sled drives, kettlebell ballistics, and plyometric work",
      "Heart rate zone control and anaerobic threshold extension"
    ],
    idealFor: "Active professionals aiming for high work capacity, athleticism, and body composition.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Explore Performance",
    ctaHref: "/book-trial?program=performance",
    highlights: ["Zone 2 & Zone 5 Work", "Sled & Turf Track", "Work Capacity Tracking"]
  },
  {
    id: "small-group",
    title: "Small Group Training",
    subtitle: "Max 6 Members per Coach",
    tag: "COACHED SESSIONS",
    description: "Focused, semi-private coaching in small squads where sessions stay intensely structured, highly technical, and individually tailored.",
    benefits: [
      "Guaranteed low member-to-coach ratio (capped at 6)",
      "Daily structured workout programming across 4-week blocks",
      "Community energy with personalized form corrections"
    ],
    idealFor: "Members who want the accountability of a personal trainer with group motivation.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop",
    ctaText: "View Small Groups",
    ctaHref: "/book-trial?program=small-group",
    highlights: ["Max 6 People", "Structured Blocks", "Daily Coach Feedback"]
  },
  {
    id: "personal-training",
    title: "Personal Training",
    subtitle: "1:1 Dedicated Coaching",
    tag: "PRIVATE COACHING",
    description: "Bespoke one-to-one coaching built entirely around your biomechanics, training background, schedule, and performance targets.",
    benefits: [
      "Comprehensive movement screening & baseline strength assessment",
      "Fully individualized weekly programming & nutrition strategy",
      "Priority scheduling and private floor zone access"
    ],
    idealFor: "Individuals with specific performance goals, injury history, or tight schedules.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Meet a Coach",
    ctaHref: "/coaches",
    highlights: ["Custom Programming", "1:1 Biomechanics Audit", "Flexible Slots"]
  }
];

export const sampleWeeklySchedule = [
  { day: "Monday", focus: "Lower Body Strength & Hypertrophy", details: "Squat variations, Romanian deadlifts, split squats & trunk stability." },
  { day: "Tuesday", focus: "Athletic Capacity & Conditioning", details: "Zone 2 aerobic base, sled pushes, ski erg & kettlebell complexes." },
  { day: "Wednesday", focus: "Upper Body Press & Pull", details: "Bench press, overhead pressing, heavy rows & shoulder blade dynamics." },
  { day: "Thursday", focus: "Movement Quality & Active Capacity", details: "Hip/thoracic mobility, rotational power & light conditioning." },
  { day: "Friday", focus: "Full Body Dynamic Power", details: "Clean pulls, trap bar deadlifts, push-press & multi-planar carries." },
  { day: "Saturday", focus: "Performance Squad Session", details: "High-energy group team conditioning & strength challenges." },
  { day: "Sunday", focus: "Rest & Recovery", details: "Recommended low-intensity walk, mobility work or light sauna/stretching." }
];
