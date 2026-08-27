export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  description: string;
  featured?: boolean;
  badge?: string;
  features: string[];
  notIncluded?: string[];
  cta: string;
  ctaHref: string;
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: "district-access",
    name: "District Access",
    price: "₹3,500",
    period: "/ month",
    tagline: "For independent lifters who want serious floor equipment.",
    description: "Unrestricted access to our Bandra strength floor, platforms, racks, and conditioning equipment during open hours.",
    featured: false,
    features: [
      "Full strength floor & turf access",
      "Open training during all operational hours",
      "Comprehensive movement & equipment orientation",
      "Digital training app access for progress logging",
      "Locker room & shower amenities"
    ],
    notIncluded: [
      "Small-group coached sessions",
      "1:1 Personal training hours"
    ],
    cta: "Choose District Access",
    ctaHref: "/book-trial?plan=district-access"
  },
  {
    id: "coach-plus",
    name: "Coach+",
    price: "₹6,500",
    period: "/ month",
    tagline: "Our flagship coached experience for structured progression.",
    description: "Combines full floor access with daily small-group coached programming and monthly technical reviews.",
    featured: true,
    badge: "MOST POPULAR",
    features: [
      "Everything in District Access",
      "Unlimited Small-Group Coached Sessions (capped at 6)",
      "4-Week progressive strength & performance blocks",
      "Monthly 1-on-1 coaching review & video analysis",
      "Priority session booking via app",
      "Guest pass (1 free trial pass per month for a friend)"
    ],
    cta: "Choose Coach+",
    ctaHref: "/book-trial?plan=coach-plus"
  },
  {
    id: "private-performance",
    name: "Private Performance",
    price: "₹11,500",
    period: "/ month",
    tagline: "Total bespoke accountability with dedicated 1:1 sessions.",
    description: "The ultimate individual training service with dedicated 1:1 sessions, personal programming, and direct coach access.",
    featured: false,
    badge: "PREMIUM 1:1",
    features: [
      "Everything in Coach+",
      "8 Dedicated 1:1 Personal Training sessions / month",
      "100% Bespoke programming tailored to your specific biomechanics",
      "Nutrition & recovery guidance protocol",
      "Direct WhatsApp access to Head Performance Coach",
      "Complimentary towel & locker reservation"
    ],
    cta: "Enquire About Private",
    ctaHref: "/book-trial?plan=private-performance"
  }
];

export const membershipComparisonMatrix = [
  { feature: "Strength Floor & Rack Access", district: true, coachPlus: true, private: true },
  { feature: "Digital Progress Log App", district: true, coachPlus: true, private: true },
  { feature: "Movement Orientation", district: true, coachPlus: true, private: true },
  { feature: "Small Group Coached Sessions", district: false, coachPlus: "Unlimited", private: "Unlimited" },
  { feature: "4-Week Program Block Updates", district: false, coachPlus: true, private: "Custom Weekly" },
  { feature: "Monthly Coach Review & Form Check", district: false, coachPlus: true, private: true },
  { feature: "Dedicated 1:1 PT Sessions", district: false, coachPlus: false, private: "8 Sessions / Mo" },
  { feature: "Direct WhatsApp Coach Support", district: false, coachPlus: false, private: true },
  { feature: "Reserved Locker & Towel Service", district: false, coachPlus: false, private: true },
];
