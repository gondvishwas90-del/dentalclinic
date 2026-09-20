export interface PatientProblem {
  id: string;
  icon: string;
  title: string;
  description: string;
  urgency?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  suitableFor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  treatmentTag?: string;
}

export const CLINIC_INFO = {
  name: "Aura Dental Studio",
  tagline: "Clinical Precision & Bespoke Smile Care",
  doctor: {
    name: "Dr. Aria Sharma",
    title: "Lead Dental Surgeon & Aesthetic Specialist",
    qualification: "BDS, MDS (Prosthodontics & Aesthetics)",
    experience: "12+ Years Clinical Excellence",
    specialization: "Aesthetic, Restorative & Multi-Speciality Dentistry",
    instagram: "@dr.ariasharma",
    bio: "Dedicated to elevating modern dentistry through clinical precision, artistic smile design, and an unhurried, reassuring patient experience.",
  },
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  address: "Suite 102, The Wellness Pavilion, Central Boulevard, Bandra West, Mumbai – 400050, Maharashtra, India.",
  locality: "Bandra West, Mumbai",
  landmark: "Near The Grand Pavilion, Central Boulevard",
  consultationFee: "Transparent & Upfront",
  feeNote: "Comprehensive clinical evaluation with digital diagnostics",
  googleRating: 4.9,
  totalReviews: "350+",
  instagramClinic: "@auradentalstudio",
  hours: {
    morning: "10:00 AM – 2:00 PM",
    evening: "5:00 PM – 9:00 PM",
    days: "Monday to Saturday (Sunday by prior appointment)",
    note: "Please confirm appointment availability before visiting.",
  },
  googleMapsUrl: "https://maps.google.com/?q=Bandra+West+Mumbai+400050",
};

export const PATIENT_PROBLEMS: PatientProblem[] = [
  {
    id: "tooth-pain",
    icon: "Tooth",
    title: "Tooth Pain",
    description: "Sharp, throbbing, or continuous pain. Get the underlying cause evaluated promptly.",
    urgency: "Same-Day Priority",
  },
  {
    id: "cavity-damaged",
    icon: "ShieldAlert",
    title: "Cavity or Damaged Tooth",
    description: "Dark spots, food getting stuck, or chipped enamel. Prevent damage from progressing.",
  },
  {
    id: "teeth-cleaning",
    icon: "Sparkles",
    title: "Teeth Cleaning & Polish",
    description: "Remove stubborn plaque, stains, and tartar to maintain healthy gums and fresh breath.",
  },
  {
    id: "braces-alignment",
    icon: "Smile",
    title: "Braces / Teeth Alignment",
    description: "Explore comfortable modern options to straighten crooked or crowded teeth.",
  },
  {
    id: "smile-concerns",
    icon: "HeartHandshake",
    title: "Smile Concerns",
    description: "Discoloration, gaps, or uneven teeth. Discuss personalized smile improvement options.",
  },
  {
    id: "missing-teeth",
    icon: "Layers",
    title: "Missing Teeth / Implants",
    description: "Restore your chewing ability and facial structure with durable replacement options.",
  },
  {
    id: "child-dental",
    icon: "Baby",
    title: "Child's Dental Care",
    description: "Gentle, stress-free dental visits and cavity protection tailored for children.",
  },
  {
    id: "not-sure",
    icon: "HelpCircle",
    title: "Not Sure / General Checkup",
    description: "Routine examination, mild discomfort, or need guidance on what treatment is required.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "checkup",
    title: "Comprehensive Dental Check-up",
    shortDesc: "Thorough clinical examination with digital imaging review and personalized treatment plan.",
    iconName: "Stethoscope",
    suitableFor: "Routine 6-month checkups and initial consultations",
  },
  {
    id: "cleaning",
    title: "Teeth Scaling & Polishing",
    shortDesc: "Gentle ultrasonic cleaning to eliminate tartar, tobacco/tea stains, and gum bleeding.",
    iconName: "Sparkles",
    suitableFor: "Plaque removal, fresh breath, gum health",
  },
  {
    id: "fillings",
    title: "Tooth-Colored Dental Fillings",
    shortDesc: "Natural-looking composite restorations that blend seamlessly with your natural teeth.",
    iconName: "ShieldCheck",
    suitableFor: "Cavities, minor tooth chipping, wear",
  },
  {
    id: "rct",
    title: "Root Canal Treatment (RCT)",
    shortDesc: "Relieve deep infection and severe toothache while saving your natural tooth structure.",
    iconName: "Activity",
    suitableFor: "Deep cavities, nerve infection, severe throbbing pain",
  },
  {
    id: "crowns-bridges",
    title: "Crowns & Fixed Bridges",
    shortDesc: "High-strength ceramic, zirconia, and porcelain caps to protect weakened or repaired teeth.",
    iconName: "Layers",
    suitableFor: "Post-RCT protection, broken teeth, replacing missing teeth",
  },
  {
    id: "extraction",
    title: "Tooth Extraction & Wisdom Tooth",
    shortDesc: "Careful, gentle removal of problematic, decayed, or impacted wisdom teeth.",
    iconName: "Syringe",
    suitableFor: "Impacted wisdom teeth, non-restorable teeth",
  },
  {
    id: "orthodontics",
    title: "Braces & Clear Aligners",
    shortDesc: "Straighten teeth and correct bite irregularities with modern braces or discreet aligners.",
    iconName: "Smile",
    suitableFor: "Crooked teeth, gaps, bite alignment",
  },
  {
    id: "implants",
    title: "Dental Implants",
    shortDesc: "Permanent, titanium root replacements that look, feel, and function like natural teeth.",
    iconName: "Anchor",
    suitableFor: "Single or multiple missing teeth replacement",
  },
  {
    id: "pediatric",
    title: "Pediatric (Kids) Dentistry",
    shortDesc: "Warm, anxiety-free dental care designed specifically to keep young smiles healthy.",
    iconName: "Baby",
    suitableFor: "Children dental checkups, fluoride, milk tooth fillings",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    author: "Prashant K.",
    rating: 5,
    timeAgo: "1 month ago",
    comment: "Very polite and skilled dentist. Dr. Aria Sharma explains the exact issue clearly without rushing. The studio is pristine, calm, and exquisitely maintained.",
    treatmentTag: "Dental Checkup & Cleaning",
  },
  {
    id: "rev-2",
    author: "Snehal D.",
    rating: 5,
    timeAgo: "2 months ago",
    comment: "I was very anxious about my root canal treatment, but the procedure was handled with so much care and patience. Minimal discomfort and great follow-up care.",
    treatmentTag: "Root Canal Treatment",
  },
  {
    id: "rev-3",
    author: "Amol P.",
    rating: 5,
    timeAgo: "3 months ago",
    comment: "Transparent consultation and genuine guidance. No unnecessary procedures recommended. Highly recommend Aura Dental Studio for modern, pain-free dental care.",
    treatmentTag: "Tooth Restoration",
  },
  {
    id: "rev-4",
    author: "Kavita S.",
    rating: 5,
    timeAgo: "4 months ago",
    comment: "Visited for my son's dental filling. The doctor handled him very gently and made him feel comfortable. Very good experience overall.",
    treatmentTag: "Pediatric Dental Care",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What does the initial consultation at Aura Dental Studio involve?",
    answer: "Your initial visit includes an exhaustive comprehensive clinical evaluation with digital diagnostics. Any recommended treatment procedures will be thoroughly explained with transparent, upfront cost estimates beforehand.",
  },
  {
    question: "Do I need to book an appointment before visiting?",
    answer: "Booking in advance is strongly recommended to ensure minimal waiting time and doctor availability. However, emergency tooth pain cases are accommodated as promptly as possible during clinic hours.",
  },
  {
    question: "What are the clinic timings?",
    answer: "The clinic operates in two convenient daily shifts: Morning from 10:00 AM to 2:00 PM, and Evening from 5:00 PM to 9:00 PM (Monday to Saturday).",
  },
  {
    question: "Can I book an appointment through WhatsApp?",
    answer: "Yes! You can easily request your preferred appointment date and time through our 1-tap WhatsApp booking button, and our team will confirm your slot promptly.",
  },
  {
    question: "Where exactly is the clinic located?",
    answer: "We are located at Suite 102, The Wellness Pavilion, Central Boulevard, Bandra West, Mumbai (PIN: 400050).",
  },
  {
    question: "What should I do if I am suffering from severe tooth pain?",
    answer: "Please call our studio directly at +91 98765 43210 or book a same-day consultation so our dental team can assess the cause and provide immediate relief.",
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: "4.9★ Trusted Reputation",
    description: "Backed by 350+ genuine verified reviews from satisfied patients.",
    icon: "Award",
  },
  {
    title: "Prime & Accessible Location",
    description: "Centrally located at The Wellness Pavilion, Central Boulevard with dedicated parking.",
    icon: "MapPin",
  },
  {
    title: "Morning & Evening Timings",
    description: "Flexible schedules (10 AM–2 PM & 5 PM–9 PM) suited for working professionals and families.",
    icon: "Clock",
  },
  {
    title: "Multi-Speciality Care",
    description: "Comprehensive treatments from routine hygiene to advanced restorations under one roof.",
    icon: "Layers",
  },
  {
    title: "Transparent & Ethical Pricing",
    description: "Clear treatment explanations, upfront estimates, and zero hidden surprises.",
    icon: "ShieldCheck",
  },
  {
    title: "Strict Sterilization & Hygiene",
    description: "Hospital-grade autoclaving and sanitized operatory chairs for maximum patient safety.",
    icon: "Sparkles",
  },
];
