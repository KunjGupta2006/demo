export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQItem[] = [
  {
    id: "experience-needed",
    question: "Do I need prior gym experience to join?",
    answer: "No prior experience is required. Every new member begins with a complimentary orientation where a coach assesses your current movement baseline, discusses your history, and establishes appropriate starting loads.",
    category: "Getting Started"
  },
  {
    id: "beginners",
    question: "Can absolute beginners take part in small-group training?",
    answer: "Yes. Small group sessions are capped at 6 members precisely so the coach can modify exercises, weight loads, and tempo for each person's skill level.",
    category: "Getting Started"
  },
  {
    id: "booking-visit",
    question: "Do I need to book before visiting the facility?",
    answer: "For a free trial session or consultation, booking in advance is strongly recommended so a coach is paired with you. For member open floor access, no prior slot booking is required.",
    category: "Facility & Access"
  },
  {
    id: "what-to-bring",
    question: "What should I bring for my first session?",
    answer: "Bring comfortable training clothes, clean indoor athletic shoes, a water bottle, and a small sweat towel. Racks, plates, chalk, and locker amenities are provided on site.",
    category: "Getting Started"
  },
  {
    id: "personal-training-options",
    question: "Do you offer dedicated 1-on-1 personal training?",
    answer: "Yes. Private Performance memberships include dedicated 1:1 coaching. You can also purchase standalone 1:1 coaching packages alongside a standard membership.",
    category: "Services & Coaching"
  },
  {
    id: "pause-membership",
    question: "Can I pause my membership if I travel?",
    answer: "Yes. Memberships can be paused for up to 30 days per calendar year for travel or work commitments with 7 days written notice to the club team.",
    category: "Memberships"
  },
  {
    id: "free-trial-details",
    question: "What is included in the Free Trial session?",
    answer: "The free trial includes a 45-minute coached session: 10 minutes of movement screening, 30 minutes of guided strength or conditioning training, and 5 minutes of program recommendations with no pushy sales pressure.",
    category: "Free Trial"
  }
];
