export interface Coach {
  id: string;
  name: string;
  role: string;
  featured?: boolean;
  specialty: string[];
  bio: string;
  philosophy: string;
  experience: string;
  image: string;
}

export const coaches: Coach[] = [
  {
    id: "kabir-malhotra",
    name: "Kabir Malhotra",
    role: "Head Performance Coach",
    featured: true,
    specialty: ["Compound Strength", "Barbell Mechanics", "Long-Term Athlete Development"],
    bio: "Kabir combines fundamental strength principles, movement quality, and practical programming. His sessions are structured, direct, and adaptable to the person standing in front of him.",
    philosophy: "Intensity without form is just noise. Master the setup, own the position, and load will naturally follow.",
    experience: "10+ Years Coaching • Certified Strength & Conditioning Specialist",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "ananya-rao",
    name: "Ananya Rao",
    role: "Strength & Mobility Coach",
    featured: false,
    specialty: ["Hypertrophy & Posture", "Joint Health & Mobility", "Powerlifting Fundamentals"],
    bio: "Ananya specializes in rebuilding joint resilience and teaching members how to lift heavy safely. She focuses on thoracic extension, hip mobility, and posture restoration.",
    philosophy: "Strength is a skill. When your movement mechanics improve, every kg on the bar feels smoother.",
    experience: "7 Years Coaching • Functional Range Conditioning (FRC) Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "dev-mehra",
    name: "Dev Mehra",
    role: "Conditioning & Performance Coach",
    featured: false,
    specialty: ["Energy System Development", "Sled & Turf Dynamics", "Athletic Work Capacity"],
    bio: "Dev leads our high-capacity metabolic conditioning programs. He creates structured conditioning protocols that build aerobic capacity without burning out your CNS.",
    philosophy: "Conditioning shouldn't leave you broken on the floor. It should build stamina you can use in real life.",
    experience: "8 Years Coaching • EXOS Performance Specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "meera-kapoor",
    name: "Meera Kapoor",
    role: "Personal Training & Technique Lead",
    featured: false,
    specialty: ["1:1 Goal Execution", "Beginner Orientation", "Biomechanical Assessment"],
    bio: "Meera is expert at taking beginners from zero barbell confidence to lifting with conviction. She brings patience, sharp observation, and structured feedback to every 1:1 session.",
    philosophy: "The gym should never feel intimidating. Clear instruction and small wins turn anxiety into consistency.",
    experience: "6 Years Coaching • Kinesiology & Biomechanics Specialist",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop"
  }
];
