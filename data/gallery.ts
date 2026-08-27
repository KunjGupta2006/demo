export interface GalleryItem {
  id: string;
  title: string;
  category: "Strength" | "Coaching" | "Facility" | "Community";
  caption: string;
  image: string;
  aspectRatio: "square" | "portrait" | "landscape" | "wide";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Main Strength Floor & Racks",
    category: "Facility",
    caption: "Custom power racks, Eleiko rubber bumper plates, and deadlift platforms.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "landscape"
  },
  {
    id: "gal-2",
    title: "Barbell Squat Focus",
    category: "Strength",
    caption: "Athlete maintaining proper torso angle during a heavy back squat set.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "portrait"
  },
  {
    id: "gal-3",
    title: "Coaching & Form Correction",
    category: "Coaching",
    caption: "Head Coach Kabir reviewing hip hinge mechanics and lumbar position.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "landscape"
  },
  {
    id: "gal-4",
    title: "Small-Group Conditioning",
    category: "Community",
    caption: "Members pushing through sled pushes and kettlebell complexes on the turf.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "portrait"
  },
  {
    id: "gal-5",
    title: "Chalk & Dumbbell Rack Detail",
    category: "Facility",
    caption: "Heavy cast iron dumbbell sets arranged from 5kg to 50kg.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "square"
  },
  {
    id: "gal-6",
    title: "Post-Session Mobility",
    category: "Strength",
    caption: "Active mobility work and tissue preparation in the dedicated turf zone.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "landscape"
  },
  {
    id: "gal-7",
    title: "Bandra Facility Interior",
    category: "Facility",
    caption: "Industrial dark aesthetics with warm natural lighting and clean acoustic floor surfaces.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "portrait"
  },
  {
    id: "gal-8",
    title: "Community Energy",
    category: "Community",
    caption: "Post-workout debrief between coaches and members after Saturday performance squad.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "landscape"
  }
];
