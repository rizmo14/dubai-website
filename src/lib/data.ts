// ─── Company Info ────────────────────────────────────────────────────────────

export const COMPANY = {
  name:         "SBC Cleaning Services",
  legalName:    "Sumanawathi Building Cleaning Services LLC",
  tagline:      "Dubai's Most Trusted Cleaning Company",
  description:  "Professional cleaning services across Dubai. Deep cleaning, office cleaning, villa cleaning, sofa cleaning and more — reliable, affordable, and fully insured.",
  phone:        "+971521337528",
  phoneDisplay: "+971 52 133 7528",
  phone2:       "+971506758217",
  phone2Display:"+971 50 675 8217",
  whatsapp:     "+971521337528",
  whatsappMsg:  "Hi, I'm interested in your cleaning services in Dubai",
  email:        "info@sbcservicesuae.com",
  address: {
    street:  "Dubai",
    city:    "Dubai",
    country: "UAE",
    full:    "Dubai, UAE",
  },
  hours: {
    weekdays: "Monday – Friday: 9:00 AM – 6:00 PM",
    weekend:  "Saturday – Sunday: Available on request",
  },
  social: {
    facebook:  "https://www.facebook.com/sbcservicesuae",
    instagram: "https://www.instagram.com/sbcservicesuae",
    tiktok:    "https://www.tiktok.com/@sbcservicesuae",
    twitter:   "https://twitter.com/sbcservicesuae",
  },
  siteUrl: "https://sbcservicesuae.com",
  logo:    "/images/logo.png",
  logoAlt: "SBC Cleaning Services Dubai Logo",
};

// ─── Services ─────────────────────────────────────────────────────────────────

export type Service = {
  id:           string;
  title:        string;
  shortTitle:   string;
  slug:         string;
  shortDesc:    string;
  icon:         string;
  image:        string;
  heroHeading:  string;
  heroSubtitle: string;
  metaTitle:    string;
  metaDesc:     string;
};

export const SERVICES: Service[] = [
  {
    id:          "deep-cleaning",
    title:       "Deep Cleaning Dubai",
    shortTitle:  "Deep Cleaning",
    slug:        "deep-cleaning-dubai",
    shortDesc:   "Top-to-bottom clean of every room, surface, and corner.",
    icon:        "🧹",
    image:       "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format&fit=crop",
    heroHeading: "Professional Deep Cleaning Services in Dubai",
    heroSubtitle:"Comprehensive deep cleaning that reaches every corner. Trusted by hundreds of Dubai families.",
    metaTitle:   "Deep Cleaning Dubai | SBC Cleaning Services",
    metaDesc:    "Professional deep cleaning services in Dubai. Thorough top-to-bottom cleaning for apartments, villas & homes. Fully insured team. Call +971 52 133 7528.",
  },
  {
    id:          "move-in-move-out",
    title:       "Move In / Move Out Cleaning",
    shortTitle:  "Move In / Out",
    slug:        "move-in-move-out-cleaning-dubai",
    shortDesc:   "Spotless handover cleaning. Get your full deposit back.",
    icon:        "🏠",
    image:       "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    heroHeading: "Move In / Move Out Cleaning Services Dubai",
    heroSubtitle:"End-of-tenancy cleaning for full deposit return. Trusted by landlords and tenants across Dubai.",
    metaTitle:   "Move In Move Out Cleaning Dubai | End of Tenancy | SBC",
    metaDesc:    "Move in / move out cleaning Dubai. Professional end-of-tenancy cleaning for full deposit return. Apartments & villas. Call +971 52 133 7528 today.",
  },
  {
    id:          "office-cleaning",
    title:       "Office Cleaning Dubai",
    shortTitle:  "Office Cleaning",
    slug:        "office-cleaning-dubai",
    shortDesc:   "Daily, weekly or one-off commercial cleaning on your schedule.",
    icon:        "🏢",
    image:       "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop",
    heroHeading: "Office Cleaning Services in Dubai",
    heroSubtitle:"A clean office boosts productivity. Professional commercial cleaning on your schedule.",
    metaTitle:   "Office Cleaning Dubai | Commercial Cleaning | SBC Services",
    metaDesc:    "Professional office cleaning services in Dubai. Daily, weekly & contract commercial cleaning. Trusted by 200+ businesses. Call +971 52 133 7528.",
  },
  {
    id:          "sofa-carpet",
    title:       "Sofa & Carpet Cleaning",
    shortTitle:  "Sofa & Carpet",
    slug:        "sofa-carpet-cleaning-dubai",
    shortDesc:   "Steam & dry cleaning for sofas, carpets, rugs and upholstery.",
    icon:        "🛋️",
    image:       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop",
    heroHeading: "Sofa & Carpet Cleaning Dubai",
    heroSubtitle:"Specialist steam and dry-cleaning for all upholstery, carpets and rugs in Dubai.",
    metaTitle:   "Sofa & Carpet Cleaning Dubai | Steam Cleaning | SBC",
    metaDesc:    "Professional sofa and carpet cleaning in Dubai. Steam & dry cleaning for all fabrics. Remove stains, dust mites & allergens. Book today: +971 52 133 7528.",
  },
  {
    id:          "villa-cleaning",
    title:       "Villa Cleaning Dubai",
    shortTitle:  "Villa Cleaning",
    slug:        "villa-cleaning-dubai",
    shortDesc:   "Full villa cleaning for 3–7 bedroom properties across Dubai.",
    icon:        "🏡",
    image:       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop",
    heroHeading: "Professional Villa Cleaning Services Dubai",
    heroSubtitle:"Large-property specialists. We handle Emirates Hills to Palm Jumeirah villas.",
    metaTitle:   "Villa Cleaning Dubai | Large Home Cleaning | SBC Services",
    metaDesc:    "Expert villa cleaning services in Dubai. Specialist teams for large properties in Emirates Hills, Palm Jumeirah, Arabian Ranches & more. Call +971 52 133 7528.",
  },
  {
    id:          "post-construction",
    title:       "Post-Construction Cleaning",
    shortTitle:  "Post-Construction",
    slug:        "post-construction-cleaning-dubai",
    shortDesc:   "Builder's clean after renovation or new construction.",
    icon:        "🏗️",
    image:       "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop",
    heroHeading: "Post-Construction Cleaning Dubai",
    heroSubtitle:"Builder's clean specialists. We make your new property move-in ready after construction.",
    metaTitle:   "Post Construction Cleaning Dubai | Builder's Clean | SBC",
    metaDesc:    "Post-construction and renovation cleaning in Dubai. Remove dust, debris & residue. Move-in ready results. Licensed & insured. Call +971 52 133 7528.",
  },
];

// ─── Locations ────────────────────────────────────────────────────────────────

export type Location = {
  id:          string;
  name:        string;
  slug:        string;
  description: string;
  landmarks:   string[];
  metaTitle:   string;
  metaDesc:    string;
};

export const LOCATIONS: Location[] = [
  {
    id:          "marina",
    name:        "Dubai Marina",
    slug:        "cleaning-services-marina-dubai",
    description: "Professional cleaning services across Dubai Marina towers, The Walk, and JBR beachfront residences.",
    landmarks:   ["The Walk at JBR", "Marina Mall", "Skydive Dubai", "Zero Gravity Beach", "Marina Promenade"],
    metaTitle:   "Cleaning Services Dubai Marina | Apartments & Towers | SBC",
    metaDesc:    "Professional cleaning services in Dubai Marina. Apartment & tower cleaning specialists. Same-day service available. Call SBC: +971 52 133 7528.",
  },
  {
    id:          "jlt",
    name:        "Jumeirah Lake Towers (JLT)",
    slug:        "cleaning-services-jlt-dubai",
    description: "Reliable cleaning services for JLT residents and businesses in all clusters.",
    landmarks:   ["JLT Cluster Towers", "Lake Terrace", "Jumeirah Islands nearby", "Dubai Metro Station", "DMCC Free Zone"],
    metaTitle:   "Cleaning Services JLT Dubai | Jumeirah Lake Towers | SBC",
    metaDesc:    "Trusted cleaning services in JLT (Jumeirah Lake Towers) Dubai. All clusters covered. Apartments, offices & retail. Call +971 52 133 7528.",
  },
  {
    id:          "business-bay",
    name:        "Business Bay",
    slug:        "cleaning-services-business-bay-dubai",
    description: "Commercial and residential cleaning for Business Bay's busy towers and waterfront apartments.",
    landmarks:   ["Dubai Canal", "Burj Khalifa (nearby)", "Bay Square", "Bay Avenue Mall", "Opus Tower"],
    metaTitle:   "Cleaning Services Business Bay Dubai | Commercial & Home | SBC",
    metaDesc:    "Expert cleaning services in Business Bay Dubai. Office & apartment cleaning near Dubai Canal. Fast turnaround. Call SBC +971 52 133 7528.",
  },
  {
    id:          "downtown",
    name:        "Downtown Dubai",
    slug:        "cleaning-services-downtown-dubai",
    description: "Premium cleaning services for Downtown Dubai apartments, penthouses, and luxury residences.",
    landmarks:   ["Burj Khalifa", "Dubai Mall", "Dubai Fountain", "The Address Hotels", "Opera District"],
    metaTitle:   "Cleaning Services Downtown Dubai | Luxury Apartments | SBC",
    metaDesc:    "Premium cleaning services in Downtown Dubai. Specialists in luxury apartments & penthouses near Burj Khalifa. Call SBC: +971 52 133 7528.",
  },
  {
    id:          "jumeirah",
    name:        "Jumeirah",
    slug:        "cleaning-services-jumeirah-dubai",
    description: "Villa and apartment cleaning across Jumeirah 1, 2, and 3, plus Umm Suqeim and Satwa.",
    landmarks:   ["Jumeirah Beach", "Kite Beach", "La Mer", "City Walk", "Jumeirah Mosque"],
    metaTitle:   "Cleaning Services Jumeirah Dubai | Villa Cleaning | SBC",
    metaDesc:    "Professional villa & apartment cleaning in Jumeirah Dubai. Serving Jumeirah 1, 2, 3 and surrounding areas. Call SBC: +971 52 133 7528.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export type Testimonial = {
  name:   string;
  role:   string;
  area:   string;
  rating: number;
  text:   string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name:   "Sarah Al-Mansoori",
    role:   "Apartment Resident",
    area:   "Dubai Marina",
    rating: 5,
    text:   "Team always on time, thorough, and respectful. Best cleaning service in Dubai Marina.",
  },
  {
    name:   "Ahmed Khalid",
    role:   "Office Manager",
    area:   "Business Bay",
    rating: 5,
    text:   "Office has never looked better. Works around our business hours. Highly recommend.",
  },
  {
    name:   "Priya Sharma",
    role:   "Villa Owner",
    area:   "Jumeirah",
    rating: 5,
    text:   "Transformed our villa in one day. Incredibly thorough — even areas I'd forgotten were spotless.",
  },
  {
    name:   "James Whitfield",
    role:   "Property Manager",
    area:   "JLT",
    rating: 5,
    text:   "Manage 40+ units in JLT. SBC handles all move-in/out cleans. Reliable, fast, great value.",
  },
  {
    name:   "Fatima Hassan",
    role:   "Homeowner",
    area:   "Downtown Dubai",
    rating: 5,
    text:   "Sofa looks brand new. Stains I thought were permanent — completely gone. 5 stars.",
  },
  {
    name:   "Ravi Menon",
    role:   "Restaurant Owner",
    area:   "JBR",
    rating: 5,
    text:   "Post-renovation clean was flawless. Place was ready to open in 48 hours. Amazing team.",
  },
];

// ─── FAQs ────────────────────────────────────────────────────────────────────

export type FAQ = {
  question: string;
  answer:   string;
};

export const HOME_FAQS: FAQ[] = [
  {
    question: "Do you bring your own cleaning supplies and equipment?",
    answer:   "Yes, our teams arrive fully equipped with professional-grade, eco-friendly cleaning products and equipment. You don't need to provide anything.",
  },
  {
    question: "Are your cleaners vetted and insured?",
    answer:   "All SBC cleaning staff undergo thorough background checks, training, and are fully insured. Your home and belongings are in safe hands.",
  },
  {
    question: "Do you offer same-day cleaning services in Dubai?",
    answer:   "Yes, subject to availability. We offer same-day and next-day cleaning across all Dubai service areas. Call or WhatsApp us for urgent bookings.",
  },
  {
    question: "Which areas of Dubai do you cover?",
    answer:   "We serve all major Dubai areas including Dubai Marina, JLT, Business Bay, Downtown Dubai, Jumeirah, Palm Jumeirah, DIFC, Deira, Bur Dubai, Mirdif, Al Barsha, Arabian Ranches, and more.",
  },
  {
    question: "Can I book a regular weekly or monthly cleaning service?",
    answer:   "Yes. We offer flexible recurring cleaning packages — daily, weekly, bi-weekly, or monthly. Regular clients receive preferential rates and priority scheduling.",
  },
];

// ─── Why Choose Us ────────────────────────────────────────────────────────────

export const WHY_CHOOSE_US = [
  { icon: "✅", title: "Licensed & Insured",    desc: "All staff fully insured. Your home is in safe hands." },
  { icon: "⭐", title: "5-Star Rated",           desc: "Rated 4.9★ by hundreds of satisfied Dubai clients." },
  { icon: "🕐", title: "On-Time, Every Time",    desc: "We respect your schedule and always arrive on time." },
  { icon: "🌿", title: "Eco-Friendly Products",  desc: "Safe for children and pets. Professional-grade." },
  { icon: "📱", title: "Easy WhatsApp Booking",  desc: "Book in minutes. We reply within 30 minutes." },
  { icon: "🔄", title: "Satisfaction Guarantee", desc: "Not happy? We come back and fix it, free of charge." },
];
