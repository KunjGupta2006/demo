import React from "react";
import { SALON_INFO } from "@/data/salonInfo";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Care4U Studio",
    "image": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200",
    "@id": "https://care4ustudio.fr",
    "url": "https://care4ustudio.fr",
    "telephone": SALON_INFO.contact.phoneFormatted,
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SALON_INFO.address.street,
      "addressLocality": SALON_INFO.address.city,
      "postalCode": SALON_INFO.address.postalCode,
      "addressCountry": "FR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SALON_INFO.address.coordinates.lat,
      "longitude": SALON_INFO.address.coordinates.lng,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:30",
        "closes": "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "10:30",
        "closes": "17:30",
      },
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "380",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
