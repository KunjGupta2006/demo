export interface Testimonial {
  id: string;
  name: string;
  age: number;
  profession: string;
  quote: string;
  program: string;
  timeframe: string;
  keyOutcome: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "nikhil-m",
    name: "Nikhil",
    age: 31,
    profession: "Product Lead in Tech",
    quote: "I stopped guessing what to do when I walked into the gym. The structure is what finally made training consistent. Having Kabir correct my deadlift setup was worth more than years of random workouts.",
    program: "Coach+ Member",
    timeframe: "Member for 9 months",
    keyOutcome: "Added 40kg to Deadlift, 0 missed sessions in 12 weeks",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sara-k",
    name: "Sara",
    age: 27,
    profession: "Management Consultant",
    quote: "The environment is serious without being intimidating. I actually look forward to my morning sessions now because there's no waiting for equipment and the coaches know everyone by name.",
    program: "Small Group Training",
    timeframe: "Member for 6 months",
    keyOutcome: "First unassisted pull-up, improved energy for 12hr workdays",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "aditya-s",
    name: "Aditya",
    age: 35,
    profession: "Financial Analyst",
    quote: "The coaching changed how I lift. I feel stronger, more confident, and much more deliberate in every session. They don't just hand you weights; they explain the why behind every block.",
    program: "Private Performance",
    timeframe: "Member for 14 months",
    keyOutcome: "Eliminated chronic lower back stiffness, 15% strength gain across main lifts",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
  }
];

export const progressTimeline = [
  { step: "01", title: "ASSESS", description: "Movement evaluation, joint baseline, baseline strength screening, and goals alignment conversation." },
  { step: "02", title: "PROGRAM", description: "Custom 4-week training block built around your current capacity, schedule, and recovery profile." },
  { step: "03", title: "TRAIN", description: "Coached execution on the floor with real-time feedback on bar path, speed, and technique." },
  { step: "04", title: "TRACK", description: "Log weights, reps, RPE, and subjective energy markers in the member app." },
  { step: "05", title: "ADAPT", description: "Monthly coach check-in to adjust loading cycles, deload weeks, and movement progressions." },
];
