import type { FAQ } from "./data";

export type ServicePageContent = {
  intro:     string;
  body:      string[];
  whatIncluded: string[];
  pricing: { label: string; price: string }[];
  faqs:    FAQ[];
};

export const SERVICE_CONTENT: Record<string, ServicePageContent> = {

  "deep-cleaning-dubai": {
    intro: `Deep cleaning in Dubai goes far beyond a regular weekly tidy. It's a thorough, systematic clean of every surface, corner, appliance, and fixture in your home — from inside the oven to behind furniture, from ceiling fans to skirting boards. SBC Cleaning Services delivers professional deep cleaning across Dubai, trusted by apartment residents, villa owners, and property managers.`,
    body: [
      `Whether you're moving into a new property, preparing for Ramadan, hosting family, or simply want to reset your home to immaculate condition, a professional deep clean is the most efficient solution. Our Dubai deep cleaning teams use professional-grade, eco-friendly products that are safe for children, pets, and all surface types.`,
      `In Dubai's climate, dust accumulates rapidly. AC vents, window tracks, and ceiling fans collect fine desert dust that standard cleaning misses. Our deep cleaning process specifically addresses these Dubai-specific challenges, ensuring your home isn't just visually clean but genuinely hygienic.`,
      `All SBC cleaners are background-checked, trained, and insured. We provide all equipment and cleaning supplies — you don't need to lift a finger. Our teams work methodically through a comprehensive checklist, ensuring nothing is missed. After every deep clean, a supervisor inspection is conducted before sign-off.`,
      `Pricing for deep cleaning in Dubai is based on the number of bedrooms and the current condition of the property. A standard 2-bedroom apartment deep clean typically takes 4–6 hours. For properties that haven't been deep-cleaned in over 6 months, we recommend our intensive deep clean package for best results.`,
    ],
    whatIncluded: [
      "Kitchen deep clean — inside appliances, cupboards, tiles, rangehood",
      "Bathroom scrub — grout, tiles, toilet, sink, mirrors, exhaust fans",
      "All bedroom surfaces, under beds, inside wardrobes",
      "Living & dining areas — sofas, shelves, TV units, ceiling fans",
      "Window frames and tracks (inside)",
      "All floors — sweep, mop, and spot-clean carpets",
      "Skirting boards, door frames, light switches",
      "Balcony (if applicable)",
    ],
    pricing: [
      { label: "Studio / 1-bedroom apartment", price: "AED 300 – AED 450" },
      { label: "2-bedroom apartment",           price: "AED 450 – AED 600" },
      { label: "3-bedroom apartment",           price: "AED 600 – AED 800" },
      { label: "3-bedroom villa",               price: "AED 700 – AED 1,000" },
      { label: "4–5 bedroom villa",             price: "AED 1,000 – AED 1,500" },
    ],
    faqs: [
      { question: "How often should I get a deep clean in Dubai?", answer: "We recommend a professional deep clean every 3–6 months in Dubai, given the high dust levels from the desert climate. Many clients schedule deep cleans before and after Ramadan, before Eid gatherings, and after moving." },
      { question: "How long does a deep clean take?", answer: "A 1-bedroom apartment typically takes 3–4 hours with a team of 2. A 3-bedroom villa may take 6–8 hours. We'll give you a time estimate when you book." },
      { question: "Do I need to be home during the deep clean?", answer: "You don't need to be present throughout. Many clients give us access and return to a spotless home. We are fully insured and all staff are background-checked." },
      { question: "What's the difference between a regular clean and a deep clean?", answer: "A regular clean maintains cleanliness on an ongoing basis (1–2 hours). A deep clean is a top-to-bottom comprehensive clean of every surface and fixture, including inside appliances, behind furniture, and hard-to-reach areas. It typically takes 3–8 hours depending on property size." },
      { question: "Do you bring cleaning supplies and equipment?", answer: "Yes, we bring everything — professional-grade, eco-friendly cleaning products and all necessary equipment. You just need to provide access and water." },
      { question: "Can I book a deep clean for a furnished rental property?", answer: "Absolutely. We regularly deep clean furnished Airbnb properties and holiday rentals across Dubai. We can also provide an inspection report and photos for property owners not based in Dubai." },
      { question: "How do I book a deep cleaning service in Dubai?", answer: "Call us on +971 52 133 7528, WhatsApp us, or fill in our online booking form. We'll confirm your slot within 30 minutes and provide a fixed-price quote before we start." },
    ],
  },

  "move-in-move-out-cleaning-dubai": {
    intro: `Moving in or out of a Dubai property? A professional move-in / move-out cleaning service ensures the property is spotless for handover — whether you're returning keys to a landlord, preparing for a new tenant, or moving into your new home. SBC Cleaning Services specialises in end-of-tenancy cleaning across Dubai, helping hundreds of tenants get their full deposit back every year.`,
    body: [
      `Dubai's rental market is highly competitive, and landlords and property management companies maintain strict handover standards. A professional end-of-tenancy clean by SBC meets the cleaning standards required by most Dubai property management companies and RERA-registered agents.`,
      `Our move-out cleaning service is comprehensive: we clean every room from floor to ceiling, tackle grease in the kitchen, limescale in bathrooms, dust from AC vents, and marks on walls. We leave the property in the same pristine condition as when it was first handed over.`,
      `For move-in cleaning, we ensure your new property is genuinely clean before your furniture arrives. Even new builds in Dubai require a thorough clean to remove construction dust, cement residue, and packing materials.`,
      `We work around your schedule — morning, afternoon, or evening appointments available. For same-day handover cleaning, call us early and we'll do our best to accommodate. All our move-in/out teams carry completion certificates that you can provide to your property manager.`,
    ],
    whatIncluded: [
      "Full kitchen deep clean — inside all appliances, cupboards, tiles",
      "All bathrooms — tile, grout, toilet, sink, shower, mirrors",
      "All rooms — floors, walls (spot clean), skirting, doors",
      "Inside all wardrobes and storage units",
      "AC vent and grille cleaning",
      "Window frames, tracks, and sills (inside)",
      "Balcony sweep and mop",
      "Rubbish removal from property",
      "Final inspection and handover report",
    ],
    pricing: [
      { label: "Studio apartment",     price: "AED 400 – AED 550" },
      { label: "1-bedroom apartment",  price: "AED 500 – AED 650" },
      { label: "2-bedroom apartment",  price: "AED 650 – AED 850" },
      { label: "3-bedroom apartment",  price: "AED 850 – AED 1,100" },
      { label: "3-bedroom villa",      price: "AED 1,000 – AED 1,400" },
      { label: "4–5 bedroom villa",    price: "AED 1,400 – AED 2,000" },
    ],
    faqs: [
      { question: "Will a professional move-out clean help me get my deposit back?", answer: "Yes. In the vast majority of cases, a professional end-of-tenancy clean by SBC results in full deposit return. We clean to the standard required by Dubai property managers and RERA-registered agents." },
      { question: "How much does move-out cleaning cost in Dubai?", answer: "Prices start from AED 400 for a studio apartment. A 2-bedroom apartment typically costs AED 650–850. The exact price depends on property size and current condition. We provide a fixed quote before starting." },
      { question: "How long does move-out cleaning take?", answer: "A studio takes 2–3 hours. A 2-bedroom apartment takes 4–5 hours. A large villa may take a full day. We'll give you a time estimate when you book." },
      { question: "Do you offer a re-clean guarantee?", answer: "Yes. If your landlord or property manager raises a specific cleaning concern after our service, we will return to address it free of charge within 48 hours." },
      { question: "Can you clean a property after renovation or construction?", answer: "Yes — we also offer post-renovation and post-construction cleaning as a separate service. See our Post-Construction Cleaning page for details." },
      { question: "Do I need to empty the property before you clean?", answer: "For move-out cleaning, yes — the property should ideally be empty of personal belongings. We clean fixtures, appliances, floors, and all built-in furniture. We can work around items for an additional fee." },
      { question: "Can you provide documentation of the cleaning for my landlord?", answer: "Yes. We can provide a completion certificate and photos taken before and after cleaning for your records and your landlord's." },
    ],
  },

  "office-cleaning-dubai": {
    intro: `A clean office is a productive office. SBC Cleaning Services provides professional commercial and office cleaning across Dubai — from small startup offices in JLT to large corporate headquarters in DIFC and Business Bay. We offer flexible daily, weekly, and contract cleaning plans tailored to your business schedule and budget.`,
    body: [
      `Dubai businesses operate at a high pace. Maintaining a spotless, presentable office environment is essential for staff wellbeing, client impressions, and brand image. Our commercial cleaning teams are trained to work efficiently without disrupting your operations — cleaning during off-hours, early morning, or late evening to minimise interruption.`,
      `We clean offices of all sizes: small executive suites, open-plan co-working spaces, retail showrooms, medical clinics, restaurants, warehouses, and large corporate headquarters. Our services can be combined with periodic deep cleaning, window cleaning, and carpet cleaning for a complete facility management solution.`,
      `All SBC commercial cleaning staff are uniformed, ID-badged, and security-cleared. We maintain detailed cleaning logs, and our supervisors conduct regular quality audits. If you're not satisfied at any point, we return to remedy — no questions asked.`,
      `For businesses that require daily cleaning, we offer monthly contract rates that provide significant savings over ad-hoc bookings. Contracts include a dedicated team assigned to your premises, a named account manager, and monthly reporting.`,
    ],
    whatIncluded: [
      "Reception and entrance — floors, glass doors, reception desk",
      "All offices and meeting rooms — desks, chairs, screens, bins",
      "Kitchenette and staff break room — appliances, surfaces, sink",
      "Bathrooms and washrooms — full sanitisation",
      "Corridors, stairwells, and lift lobbies",
      "Floors — vacuum, sweep, and mop all surfaces",
      "External glass doors and entrance (ground floor)",
      "Waste removal and bin replacement",
      "High-touch surface sanitisation — door handles, switches",
    ],
    pricing: [
      { label: "Small office (up to 500 sq ft)",    price: "AED 200 – AED 350/visit" },
      { label: "Medium office (500–2,000 sq ft)",   price: "AED 350 – AED 700/visit" },
      { label: "Large office (2,000–5,000 sq ft)",  price: "AED 700 – AED 1,500/visit" },
      { label: "Daily contract (monthly rate)",      price: "From AED 1,500/month" },
      { label: "Weekly deep clean add-on",           price: "AED 300 – AED 600" },
    ],
    faqs: [
      { question: "Can you clean our office outside business hours?", answer: "Yes — we can clean early morning (before 8am), evenings, or on weekends. We work around your business schedule to avoid any disruption." },
      { question: "Do you provide cleaning contracts for offices in Dubai?", answer: "Yes. We offer monthly cleaning contracts for daily, bi-weekly, and weekly cleaning. Contract clients receive priority scheduling, a dedicated team, and discounted rates." },
      { question: "Are your office cleaners security-cleared?", answer: "All SBC commercial cleaning staff are background-checked, uniformed, ID-badged, and trained in commercial cleaning standards. We can provide staff clearance documentation if required." },
      { question: "Do you clean in free zones like DIFC, JLT, and Dubai Internet City?", answer: "Yes. We clean offices across all Dubai free zones and business districts including DIFC, JLT, Business Bay, Dubai Internet City, Dubai Media City, and more." },
      { question: "What types of commercial properties do you clean?", answer: "Offices, co-working spaces, retail stores, showrooms, restaurants and F&B outlets, medical and dental clinics, warehouses, gyms, and hotels." },
      { question: "Can you clean our office on a one-off basis?", answer: "Yes. One-off cleans, spring cleans, and event/post-event cleaning are all available alongside recurring contracts." },
      { question: "How do I get a quote for office cleaning?", answer: "Call +971 52 133 7528, WhatsApp us, or complete our online form. We'll visit your office (or assess based on floor plan) and provide a written quote within 24 hours." },
    ],
  },

  "sofa-carpet-cleaning-dubai": {
    intro: `Dubai's dust and humidity can wreak havoc on soft furnishings. SBC Cleaning Services offers professional sofa, carpet, rug, and upholstery cleaning using advanced steam and dry-cleaning techniques. We remove embedded dirt, dust mites, allergens, pet hair, and stubborn stains — restoring your furnishings to like-new condition.`,
    body: [
      `Sofas, carpets, and rugs accumulate dust, bacteria, allergens, and stains far more quickly than hard surfaces — especially in Dubai's dusty climate. Regular vacuuming only removes surface debris; professional steam cleaning penetrates deep into fibres to extract embedded contaminants.`,
      `SBC uses commercial-grade hot water extraction (steam cleaning) and dry-cleaning methods depending on the fabric type. Our technicians assess each item before treatment to select the safest, most effective cleaning method. All products are child-safe, pet-safe, and hypoallergenic.`,
      `We clean all types of upholstery: fabric sofas and sectionals, leather sofas (specialist treatment), armchairs, dining chairs, headboards, and ottomans. For carpets, we clean all pile types including wool, nylon, polyester, and natural fibre rugs. We can clean in situ or collect and deliver rugs for specialist treatment.`,
      `Stain removal is one of our most-requested services. Coffee, wine, food, and pet stains that seem permanent can often be fully or significantly removed by our specialist technicians. We'll give you an honest assessment of what's achievable during booking.`,
    ],
    whatIncluded: [
      "Pre-inspection and fabric/carpet type assessment",
      "Pre-treatment spray for stains and high-traffic areas",
      "Hot water extraction (steam) or dry cleaning as appropriate",
      "Deep fibre cleaning to remove allergens, dust mites, bacteria",
      "Stain treatment — coffee, wine, pet, food stains",
      "Deodorisation treatment",
      "Post-clean grooming and fast-dry process",
      "Leather sofas: specialist conditioning treatment",
    ],
    pricing: [
      { label: "2-seater sofa",          price: "AED 150 – AED 200" },
      { label: "3-seater sofa",          price: "AED 200 – AED 280" },
      { label: "L-shaped sectional",     price: "AED 300 – AED 450" },
      { label: "Armchair",               price: "AED 80 – AED 120" },
      { label: "Small rug (up to 2m²)", price: "AED 100 – AED 150" },
      { label: "Large carpet (room)",    price: "AED 200 – AED 400" },
      { label: "Full sofa set + carpet", price: "AED 400 – AED 700" },
    ],
    faqs: [
      { question: "How long does sofa cleaning take?", answer: "A 3-seater sofa typically takes 1–1.5 hours including drying time. Drying takes 2–4 hours depending on fabric and ventilation. We recommend opening windows and running AC after cleaning." },
      { question: "Will steam cleaning damage my sofa fabric?", answer: "No — our technicians assess the fabric type before cleaning and select the appropriate method. Delicate fabrics that cannot be wet-cleaned are treated with dry-cleaning methods. We never use steam on leather." },
      { question: "Can you remove old stains from carpets and sofas?", answer: "Many stains can be fully or significantly reduced, even old ones. Success depends on the stain type, fabric, and how long it has been set. We'll give you an honest assessment before proceeding." },
      { question: "How often should I professionally clean my sofa in Dubai?", answer: "We recommend every 6–12 months. In Dubai's dusty climate, more frequent cleaning (every 4–6 months) is ideal, especially for households with children or pets." },
      { question: "Do you clean rugs and carpets in Persian or handmade styles?", answer: "Yes. Delicate and handmade rugs are collected for specialist off-site cleaning where appropriate. We handle wool, silk, cotton, and natural fibre rugs with specialist care." },
      { question: "Is the cleaning solution safe for children and pets?", answer: "Yes. All our cleaning products are eco-friendly, non-toxic, and safe for children and pets once fully dry (typically 2–4 hours)." },
      { question: "Can you clean mattresses too?", answer: "Yes. We offer mattress steam cleaning as an add-on service. Mattresses harbour dust mites, allergens, and bacteria that standard cleaning cannot address. Mattress cleaning starts from AED 100." },
    ],
  },

  "villa-cleaning-dubai": {
    intro: `Large Dubai villas require specialist cleaning teams with the capacity and expertise to handle extensive properties. SBC Cleaning Services provides comprehensive villa cleaning for 3–7 bedroom villas across Dubai's premium communities — from Arabian Ranches and Jumeirah to the Meadows, Emirates Hills, and Palm Jumeirah.`,
    body: [
      `Cleaning a large villa is a substantial undertaking. With multiple levels, large living areas, private pools, maids' rooms, and extensive outdoor spaces, villa cleaning requires a coordinated team with specialist equipment. SBC deploys experienced villa cleaning teams of 3–6 staff, ensuring your property is cleaned thoroughly and efficiently in a single day.`,
      `Our villa cleaning packages cover everything from the entrance lobby to the rooftop terrace. We clean all bedrooms, bathrooms, kitchen, living and dining areas, storage rooms, and staff quarters. For pool areas and garden spaces, we offer add-on exterior cleaning services.`,
      `Regular villa cleaning contracts are available for villa owners who require weekly, bi-weekly, or monthly maintenance. Recurring clients receive a dedicated team who learn the specific needs of your property, priority booking, and loyalty discounts.`,
      `For Dubai's premium villa communities, we understand the importance of discretion, professionalism, and working around the schedules of busy families. All SBC villa teams are fully uniformed, vetted, and insured. We treat your home with the respect it deserves.`,
    ],
    whatIncluded: [
      "All bedrooms — full clean, under beds, inside wardrobes",
      "All bathrooms — tiles, grout, fixtures, mirrors",
      "Kitchen and cooking areas — appliances, surfaces, cupboards",
      "Living, dining, and formal reception areas",
      "Hallways, staircase, and landings",
      "All floors — sweep, vacuum, and mop",
      "Ceiling fans, light fittings, window sills",
      "Maids' room and staff quarters (on request)",
      "Balconies and terrace areas",
    ],
    pricing: [
      { label: "3-bedroom villa",                  price: "AED 600 – AED 900" },
      { label: "4-bedroom villa",                  price: "AED 900 – AED 1,200" },
      { label: "5-bedroom villa",                  price: "AED 1,200 – AED 1,600" },
      { label: "6–7 bedroom villa",                price: "AED 1,600 – AED 2,200" },
      { label: "Weekly cleaning contract (3-bed)", price: "From AED 1,800/month" },
    ],
    faqs: [
      { question: "How many cleaners do you send for a villa?", answer: "Typically 3–5 cleaners for a standard 3–4 bedroom villa, and 5–7 for larger properties. The team size is matched to the property to ensure completion within the agreed timeframe." },
      { question: "How long does villa cleaning take?", answer: "A 3-bedroom villa typically takes 4–6 hours with a team of 3–4. Larger villas (5+ bedrooms) may take a full day. We'll give you a time estimate on booking." },
      { question: "Do you offer regular weekly villa cleaning?", answer: "Yes. Monthly contracts for weekly, bi-weekly, or fortnightly villa cleaning are available. Regular clients receive priority scheduling and reduced rates." },
      { question: "Do you clean pool areas and gardens?", answer: "We focus on interior cleaning. Balconies, terraces, and covered outdoor areas are included. Pool cleaning and garden maintenance are not part of our standard service but we can refer trusted partners." },
      { question: "Can you clean while we're away?", answer: "Yes. Many of our villa clients provide access keys or codes. All staff are insured and vetted, and we can provide a completion report and photos." },
      { question: "Which villa communities do you cover in Dubai?", answer: "We cover all major Dubai villa communities: Arabian Ranches, Jumeirah, Meadows, Springs, Emirates Hills, Palm Jumeirah, Mirdif, Al Barsha, Dubai Hills, Victory Heights, and more." },
      { question: "Do you clean maids' rooms and staff quarters?", answer: "Yes, on request. Maids' rooms and staff quarters are included as an add-on to our villa cleaning service." },
    ],
  },

  "post-construction-cleaning-dubai": {
    intro: `After construction, renovation, or fit-out work, your property needs specialist cleaning before it's move-in ready. Builder's clean involves removing cement dust, paint splatter, adhesive residue, construction debris, and deep-embedded dust from every surface. SBC Cleaning Services provides professional post-construction cleaning across Dubai for residential and commercial properties.`,
    body: [
      `Post-construction cleaning is one of the most demanding cleaning tasks. Construction sites leave behind layers of fine cement dust that coats every surface — including inside air conditioning ducts, inside cabinets, under flooring, and on every glass surface. Standard cleaning products and methods are insufficient for this level of contamination.`,
      `SBC's post-construction cleaning teams use industrial vacuums with HEPA filtration, specialist cleaning solutions for cement and paint removal, and systematic room-by-room protocols. We clean in two phases: first a heavy-duty rough clean to remove debris and loose material, then a detailed clean for finishing and polishing.`,
      `We work on all types of post-construction projects: newly built apartments and villas, commercial fit-outs, office renovations, retail shopfits, restaurant openings, and hotel room refurbishments. Our teams are experienced in coordinating with project managers and contractors to deliver handover-ready cleaning on schedule.`,
      `For large commercial post-construction projects, we provide a detailed scope of work and cleaning programme in advance. We can mobilise teams of 5–20 cleaners for large sites with tight handover deadlines. References from previous Dubai construction projects are available on request.`,
    ],
    whatIncluded: [
      "Removal of construction debris, packaging, and waste",
      "Industrial vacuuming of all surfaces — walls, ceilings, floors",
      "Cement dust removal from all surfaces",
      "Paint splatter and adhesive removal from floors and glass",
      "Window cleaning — inside and outside ground floor",
      "Kitchen and bathroom fixture installation clean",
      "Floor polishing and protective coating (on request)",
      "AC vent cleaning — removal of construction dust",
      "Final detailed clean and handover inspection",
    ],
    pricing: [
      { label: "Studio / 1-bedroom apartment",     price: "AED 500 – AED 700" },
      { label: "2–3 bedroom apartment",            price: "AED 700 – AED 1,200" },
      { label: "3–4 bedroom villa",                price: "AED 1,200 – AED 2,000" },
      { label: "Small commercial (up to 500 m²)",  price: "AED 1,500 – AED 3,000" },
      { label: "Large commercial (500–2,000 m²)", price: "AED 3,000 – AED 8,000+" },
    ],
    faqs: [
      { question: "How soon after construction can you clean?", answer: "We can begin as soon as the main construction works are complete and it is safe to enter. We work closely with project managers on handover timelines." },
      { question: "How many cleaning sessions does post-construction require?", answer: "Most projects require 2 sessions: a rough clean to remove debris and bulk dust, followed by a detailed clean 1–2 days later once dust settles. Some large projects benefit from 3 phases." },
      { question: "Can you remove cement from tiles and stone floors?", answer: "Yes. We use specialist cement remover solutions and professional equipment to remove cement splatter from tiles, marble, and natural stone without causing damage." },
      { question: "Do you clean after small renovation jobs, not just full builds?", answer: "Yes. We clean after bathroom renovations, kitchen refits, painting projects, and any size of renovation work — not just full new builds." },
      { question: "How long does post-construction cleaning take?", answer: "A 2-bedroom apartment typically takes 1 full day with a team of 4–5. Larger properties and commercial sites are assessed individually and we provide a time estimate before starting." },
      { question: "Do you provide post-construction cleaning for commercial projects?", answer: "Yes. We work on commercial fit-outs, retail shopfits, restaurant builds, office renovations, and hotel refurbishments across Dubai. We can mobilise large teams for commercial handover deadlines." },
      { question: "Will post-construction cleaning remove all the dust?", answer: "Our industrial HEPA vacuum process removes the vast majority of construction dust. Fine dust can re-settle over 24–48 hours after construction, which is why we recommend a second clean 1–2 days after the initial clean." },
    ],
  },
};
