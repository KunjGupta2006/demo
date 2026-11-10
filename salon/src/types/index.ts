export type ServiceCategory =
  | "haircuts"
  | "colour"
  | "styling"
  | "keratin"
  | "facials"
  | "nails"
  | "makeup"
  | "grooming";

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ServiceCategory;
  price: number;
  durationMinutes: number;
  description: string;
  inclusions: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  featuredImage: string;
  badge?: string;
  recommendedAddons?: string[];
}

export interface Stylist {
  id: string;
  slug: string;
  name: string;
  role: string;
  experienceYears: number;
  bio: string;
  specialties: string[];
  avatar: string;
  portfolioImages: string[];
  availableDays: string[]; // e.g. ["Tue", "Wed", "Thu", "Fri", "Sat"]
  instagramHandle?: string;
}

export interface PackageDeal {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  price: number;
  originalValue: number;
  durationMinutes: number;
  description: string;
  servicesIncluded: string[];
  idealFor: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  serviceReceived: string;
  stylistName: string;
  rating: number; // 5
  source: "Google Verified" | "Editorial" | "Private Client";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: ServiceCategory;
  stylistId: string;
  stylistName: string;
  imageUrl: string;
  aspectRatio: "16:10" | "4:5" | "1:1" | "3:4";
  caption: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  brand: string;
  volume: string;
  price: number;
  description: string;
  benefits: string[];
  usage: string;
  ingredients: string;
  imageUrl: string;
  inStock: boolean;
}

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  coverImage: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
}

export interface BookingState {
  step: 1 | 2 | 3 | 4 | 5;
  selectedServiceIds: string[];
  selectedStylistId: string | null; // null = "First Available"
  date: string | null; // ISO YYYY-MM-DD
  timeSlot: string | null; // e.g. "14:30"
  addons: string[];
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    notes?: string;
  };
}
