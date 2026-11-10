export interface SalonInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    arrondissement: string;
    city: string;
    postalCode: string;
    country: string;
    metroStation: string;
    valetParking: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    email: string;
    conciergeEmail: string;
  };
  hours: {
    day: string;
    dayIndex: number; // 0=Sun, 1=Mon, ..., 6=Sat
    open: string;
    close: string;
    isOpen: boolean;
  }[];
  brandValues: {
    title: string;
    principle: string;
    description: string;
  }[];
}

export const SALON_INFO: SalonInfo = {
  name: "Care4U Studio",
  tagline: "Modern Haircuts, Vibrant Color & Calming Head Spa",
  address: {
    street: "48 Quai de la Tournelle",
    arrondissement: "5th Arrondissement (Latin Quarter)",
    city: "Paris",
    postalCode: "75005",
    country: "France",
    metroStation: "Pont Marie (Line 7) or Maubert - Mutualité (Line 10)",
    valetParking: "Complimentary private courtyard valet parking upon reservation",
    coordinates: {
      lat: 48.8504,
      lng: 2.3537,
    },
  },
  contact: {
    phone: "+33 1 42 68 55 00",
    phoneFormatted: "+33142685500",
    whatsapp: "+33640228811",
    email: "concierge@care4ustudio.fr",
    conciergeEmail: "concierge@care4ustudio.fr",
  },
  hours: [
    { day: "Monday", dayIndex: 1, open: "Closed", close: "Closed", isOpen: false },
    { day: "Tuesday", dayIndex: 2, open: "09:30", close: "19:30", isOpen: true },
    { day: "Wednesday", dayIndex: 3, open: "09:30", close: "19:30", isOpen: true },
    { day: "Thursday", dayIndex: 4, open: "09:30", close: "20:30", isOpen: true },
    { day: "Friday", dayIndex: 5, open: "09:30", close: "20:30", isOpen: true },
    { day: "Saturday", dayIndex: 6, open: "09:00", close: "19:00", isOpen: true },
    { day: "Sunday", dayIndex: 0, open: "10:30", close: "17:30", isOpen: true },
  ],
  brandValues: [
    {
      title: "Precision Dry Cutting",
      principle: "Crystal Blue Precision",
      description:
        "We cut hair dry so we can see how your natural texture falls and moves. You get a haircut that stays flattering and easy to style between salon visits.",
    },
    {
      title: "Gentle, Ammonia-Free Color",
      principle: "Crimson Red Vibrancy",
      description:
        "Healthy balayage and glossy toners that keep your hair soft, hydrated, and shiny. Your color grows out naturally with no harsh roots.",
    },
    {
      title: "Relaxing, Unhurried Space",
      principle: "Electric Purple Serenity",
      description:
        "Quiet private styling stations overlooking the Seine. No loud blowdryer noise or double-booked chairs—just peaceful personal care and expert attention.",
    },
  ],
};

/**
 * Calculates whether the atelier is currently open in Paris local time.
 */
export function getAtelierStatus(): {
  isOpen: boolean;
  statusText: string;
  nextSchedule: string;
} {
  // In a client-rendered environment, compute against Europe/Paris timezone
  const now = new Date();
  
  // Format current Paris time
  const parisTimeStr = now.toLocaleTimeString("en-GB", {
    timeZone: "Europe/Paris",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  
  const parisDayStr = now.toLocaleDateString("en-US", {
    timeZone: "Europe/Paris",
    weekday: "long",
  });

  const daySchedule = SALON_INFO.hours.find(
    (h) => h.day.toLowerCase() === parisDayStr.toLowerCase()
  );

  if (!daySchedule || !daySchedule.isOpen) {
    return {
      isOpen: false,
      statusText: "Closed today",
      nextSchedule: "Opens Tuesday at 09:30",
    };
  }

  const [currentH, currentM] = parisTimeStr.split(":").map(Number);
  const currentMinutes = currentH * 60 + currentM;

  const [openH, openM] = daySchedule.open.split(":").map(Number);
  const openMinutes = openH * 60 + openM;

  const [closeH, closeM] = daySchedule.close.split(":").map(Number);
  const closeMinutes = closeH * 60 + closeM;

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return {
      isOpen: true,
      statusText: "Open now in Paris",
      nextSchedule: `Until ${daySchedule.close}`,
    };
  } else if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      statusText: "Opens today",
      nextSchedule: `At ${daySchedule.open}`,
    };
  } else {
    return {
      isOpen: false,
      statusText: "Closed for the evening",
      nextSchedule: "Reopens tomorrow morning",
    };
  }
}
