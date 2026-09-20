import React from "react";
import { CLINIC_INFO } from "@/data/clinic-data";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    name: CLINIC_INFO.name,
    image: "https://auradentalstudio.com/logo.png",
    "@id": "https://auradentalstudio.com",
    url: "https://auradentalstudio.com",
    telephone: CLINIC_INFO.phone,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 102, The Wellness Pavilion, Central Boulevard",
      addressLocality: "Bandra West, Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400050",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.0596,
      longitude: 72.8295,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "17:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "350",
      bestRating: "5",
      worstRating: "1",
    },
    department: {
      "@type": "MedicalClinic",
      name: "Aura Dental Studio",
      medicalSpecialty: [
        "Dentistry",
        "Orthodontics",
        "PediatricDentistry",
        "Prosthodontics",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
