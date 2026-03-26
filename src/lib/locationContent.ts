import type { FAQ } from "./data";

export type LocationPageContent = {
  heading:        string;
  intro:          string;
  body:           string[];
  propertyTypes:  string[];
  keyAreas:       string[];
  faqs:           FAQ[];
};

export const LOCATION_CONTENT: Record<string, LocationPageContent> = {

  "cleaning-services-marina-dubai": {
    heading: "Professional Cleaning Services in Dubai Marina",
    intro: "Dubai Marina is one of the city's most prestigious waterfront communities, home to over 200 residential towers, luxury apartments, and the vibrant Walk at JBR. SBC Cleaning Services has been trusted by Dubai Marina residents for professional apartment and home cleaning, delivering reliable, high-quality results across all towers in the community.",
    body: [
      "With towers ranging from compact studios to expansive 4-bedroom penthouses, Dubai Marina properties vary greatly in size and layout. Our teams are experienced in all Marina tower types, from Cayan Tower and Marina Gate to Princess Tower and Damac Heights. We work around building access requirements and can coordinate with building management where needed.",
      "Marina's coastal location brings unique cleaning challenges. Salt air from the Arabian Gulf accelerates corrosion on balcony fixtures and leaves a fine film on windows and glass surfaces. Desert dust combines with marine humidity to create stubborn build-up on AC vents, window tracks, and ceiling fans. Our deep cleaning process specifically addresses these Dubai Marina challenges.",
      "For Marina residents who require regular maintenance cleaning, we offer flexible weekly, bi-weekly, and monthly contracts. Regular clients benefit from priority scheduling, a consistent cleaning team who knows their property, and preferential rates. Same-day cleaning is often available for urgent bookings.",
      "Many Dubai Marina apartment owners are investors or internationally mobile professionals who spend extended periods abroad. We offer empty-property maintenance packages that keep your Marina apartment dust-free, aired, and ready for your return — or for tenant viewings at short notice.",
      "Our Dubai Marina cleaning service covers deep cleaning, move-in/move-out cleaning, sofa and carpet cleaning, office cleaning for Marina commercial spaces in the podium levels, and post-renovation cleaning. All teams are professionally trained, uniformed, and fully insured.",
      "Building access in Dubai Marina varies from tower to tower. Some require advance notice to security, guest registration, or service elevator booking. Our operations team handles all building coordination on your behalf, ensuring our cleaners arrive on time and ready to work without any inconvenience to you.",
    ],
    propertyTypes: ["Studios", "1-4 Bedroom Apartments", "Penthouses", "Serviced Apartments", "Podium Offices", "Retail Spaces"],
    keyAreas: ["Cayan Tower", "Princess Tower", "Marina Gate", "Damac Heights", "Infinity Tower", "Marina Pinnacle", "The Torch", "Marina Promenade"],
    faqs: [
      { question: "Do you clean high-rise apartments in Dubai Marina?", answer: "Yes, we clean apartments at all levels in every Dubai Marina tower, from ground-floor studios to the highest penthouses. Our teams are experienced in working with building management and security requirements across all Marina towers." },
      { question: "Can you coordinate with Marina tower building management?", answer: "Absolutely. Our operations team handles all building access coordination — from security registration to service elevator booking. You don't need to worry about logistics; we manage it all." },
      { question: "What are typical cleaning costs in Dubai Marina?", answer: "A standard studio apartment clean in Marina starts from AED 200. One-bedroom apartments from AED 250, two-bedroom from AED 350. Deep cleaning costs 40-60% more. Contact us for a precise quote based on your unit." },
      { question: "How often should Dubai Marina apartments be deep cleaned?", answer: "We recommend every 3-4 months for Marina apartments due to the combination of salt air, humidity, and fine desert dust that accumulates faster in coastal high-rise properties." },
      { question: "Do you offer regular weekly cleaning contracts for Marina residents?", answer: "Yes, we offer weekly, bi-weekly, and monthly cleaning contracts with preferential rates. Regular clients get a consistent team who knows their property, priority scheduling, and same-day emergency bookings when available." },
      { question: "Can you clean my Marina apartment while I'm abroad?", answer: "Yes, we offer empty-property maintenance packages for absentee owners. We'll keep your apartment dust-free, check for issues, air the property, and ensure it's ready for your return or tenant viewings." },
    ],
  },

  "cleaning-services-jlt-dubai": {
    heading: "Professional Cleaning Services in JLT Dubai",
    intro: "Jumeirah Lake Towers (JLT) is a vibrant mixed-use community within the DMCC Free Zone, comprising 80 towers across 26 clusters arranged around three artificial lakes. With a dense mix of residential apartments, corporate offices, retail outlets, restaurants, and hospitality venues, JLT requires cleaning professionals who understand the unique demands of this dynamic community.",
    body: [
      "SBC Cleaning Services provides residential and commercial cleaning throughout all JLT clusters — from Cluster A to Cluster Z. Whether you live in Bonnington Tower, Goldcrest Views, Platinum Tower, Saba Tower, or any of the community's residential buildings, our teams are experienced in navigating JLT's building access protocols and delivering consistent, high-quality results.",
      "JLT's unique layout means towers share clusters with commercial offices, restaurants, and retail outlets. This creates higher foot traffic, shared parking, and different access requirements compared to purely residential communities. Our teams understand JLT's rhythms and schedule cleaning around the community's busy periods.",
      "For JLT businesses — from small DMCC-registered offices to large corporate floor spaces — we offer daily, weekly, and monthly commercial cleaning contracts. Our office cleaning teams in JLT work around your business hours, typically early morning or evening, to avoid interruption to your operations.",
      "JLT's lake-adjacent microclimate creates higher humidity levels than surrounding areas, which accelerates mould growth in bathrooms, kitchens, and poorly ventilated spaces. Our deep cleaning service includes anti-mould treatment and preventive measures to keep your JLT apartment healthy and fresh between cleans.",
      "Sofa and carpet cleaning is another popular service among JLT residents. Dubai's dust levels, combined with JLT's humidity, means upholstery and carpets require regular professional cleaning. Our specialist steam-cleaning teams serve all JLT towers with flexible scheduling.",
      "Move-in and move-out cleaning is a constant in JLT's active rental market. With high tenant turnover across the community, our end-of-tenancy cleaning teams are experienced in meeting the RERA inspection standards that JLT property management companies require.",
    ],
    propertyTypes: ["Studios", "1-3 Bedroom Apartments", "DMCC Offices", "Retail Outlets", "Restaurants", "Shared Workspaces"],
    keyAreas: ["Bonnington Tower", "Goldcrest Views", "Platinum Tower", "Saba Tower", "Lake Terrace Tower", "Green Lakes Towers", "Jumeirah Bay X1", "Cluster D-Y"],
    faqs: [
      { question: "Do you cover all JLT clusters?", answer: "Yes, we provide cleaning services across all 26 JLT clusters, from Cluster A to Cluster Z. Our teams are familiar with each tower's building access requirements and parking arrangements." },
      { question: "Do you offer office cleaning for DMCC businesses in JLT?", answer: "Yes, we have extensive experience cleaning DMCC-registered offices in JLT. We offer daily, weekly, and monthly contracts with flexible scheduling to work around your business hours." },
      { question: "How do you handle mould issues in JLT apartments?", answer: "JLT's lake-adjacent location creates higher humidity. Our deep cleaning includes anti-mould treatment for bathrooms, kitchens, and AC vents. We also advise on ventilation improvements to prevent recurrence between cleans." },
      { question: "What's the cost of apartment cleaning in JLT?", answer: "JLT studio apartments start from AED 200 for a standard clean. One-bedroom units from AED 250, two-bedroom from AED 350. Deep cleaning and end-of-tenancy cleans are priced based on property condition and size." },
      { question: "Can you clean both my JLT apartment and office?", answer: "Absolutely. Many of our JLT clients use us for both residential and commercial cleaning. Combined contracts enjoy preferential rates and a single point of contact for all your cleaning needs." },
    ],
  },

  "cleaning-services-business-bay-dubai": {
    heading: "Cleaning Services in Business Bay Dubai",
    intro: "Business Bay is Dubai's central business district — a high-density mix of corporate towers, luxury residential buildings, hotels, and waterfront dining along the Dubai Canal. SBC Cleaning Services is a trusted cleaning partner for Business Bay's office tenants, residential tower residents, and hospitality operators.",
    body: [
      "For residential clients in Business Bay, we offer comprehensive apartment cleaning including regular maintenance, deep cleaning, and move-in/move-out end-of-tenancy cleans. Properties along the canal command premium rental values, and our cleaning standard is matched to this expectation — attention to detail, premium products, and consistently high results.",
      "Business Bay's commercial office spaces are a core area of our service. We clean offices in Bay Square, Executive Towers, Opus by Zaha Hadid, The Vogue, Noora Tower, and across the district's many commercial buildings. Our office cleaning teams are security-cleared, professionally uniformed, and operate on flexible schedules to minimise business disruption.",
      "The constant development activity in Business Bay drives strong demand for post-construction and fit-out cleaning. Whether you're opening a new restaurant on Bay Avenue, fitting out a new office space, or completing a residential renovation, our specialist post-construction clean teams can turn around your handover in 24-48 hours.",
      "Business Bay's position along the Dubai Canal creates a stunning living environment but also brings fine dust from nearby construction and increased humidity from the waterway. Our deep cleaning protocols address these specific environmental factors, ensuring interiors stay fresh and well-maintained.",
      "For Business Bay property managers handling multiple units, we offer portfolio cleaning contracts with dedicated teams, priority scheduling, and monthly reporting. We currently manage regular cleaning for several Business Bay property management companies covering both residential and commercial portfolios.",
      "End-of-tenancy cleaning in Business Bay requires meeting the high standards set by premium property management firms. Our teams are trained to deliver inspection-ready results that satisfy even the most demanding landlords and letting agents.",
    ],
    propertyTypes: ["Luxury Apartments", "Corporate Offices", "Co-working Spaces", "Hotel Apartments", "Restaurants & F&B", "Retail Showrooms"],
    keyAreas: ["Executive Towers", "Bay Square", "Opus by Zaha Hadid", "The Vogue", "Noora Tower", "Bay Avenue", "Majestic Tower", "Churchill Towers"],
    faqs: [
      { question: "Do you offer office cleaning contracts in Business Bay?", answer: "Yes, we provide daily, weekly, and monthly office cleaning contracts across Business Bay. Our commercial teams are security-cleared, insured, and work around your business hours for zero disruption." },
      { question: "Can you do post-construction cleaning in Business Bay?", answer: "Absolutely. Post-construction and fit-out cleaning is one of our most popular services in Business Bay due to the constant development activity. We can turn around a property in 24-48 hours." },
      { question: "What does apartment cleaning cost in Business Bay?", answer: "Standard apartment cleaning in Business Bay starts from AED 250 for a one-bedroom unit. Prices vary based on apartment size, condition, and service type. Contact us for a free, no-obligation quote." },
      { question: "Do you clean along the Dubai Canal area?", answer: "Yes, we cover all canal-side residential towers and commercial buildings in Business Bay. Our teams understand the specific cleaning requirements of canal-adjacent properties, including humidity-related maintenance." },
      { question: "Can you manage cleaning for multiple Business Bay properties?", answer: "Yes, we offer portfolio cleaning contracts for property managers with dedicated teams, priority scheduling, and monthly reporting. We currently manage cleaning for several Business Bay property management companies." },
    ],
  },

  "cleaning-services-downtown-dubai": {
    heading: "Premium Cleaning Services in Downtown Dubai",
    intro: "Downtown Dubai is home to some of the world's most iconic architecture — Burj Khalifa, The Dubai Mall, the Dubai Fountain, and the Opera District. The residential properties here, from The Address Residences to Boulevard Crescent and Burj Vista, represent the pinnacle of luxury Dubai living. SBC Cleaning Services provides premium cleaning for Downtown Dubai's discerning residents.",
    body: [
      "Cleaning luxury apartments and penthouses in Downtown Dubai requires not only technical cleaning expertise but also an understanding of high-end furnishings, delicate surfaces, art, and designer interiors. Our Downtown Dubai cleaning teams are trained in the specific care requirements of luxury properties — using appropriate products and techniques for marble, natural stone, hardwood flooring, and premium upholstery.",
      "Many Downtown Dubai residents are internationally mobile — spending weeks or months abroad and returning to properties that have accumulated dust in their absence. We offer empty-property maintenance cleaning contracts, ensuring your Downtown Dubai apartment is always ready for your return, guest visits, or short-term rental turnovers.",
      "The Address Residences, Burj Vista, Boulevard Crescent, 29 Boulevard, and Claren Towers are among the premium developments we regularly service. Each building has its own access procedures and management requirements, and our operations team maintains relationships with all major Downtown building management companies.",
      "Sofa and carpet cleaning is particularly popular in Downtown Dubai's luxury properties. High-specification interiors with bespoke furnishings and premium flooring benefit enormously from specialist professional cleaning. Our technicians assess each piece individually to apply the safest and most effective cleaning method.",
      "For Downtown Dubai residents who entertain frequently — whether for private events, business dinners, or family gatherings — we offer pre-event and post-event cleaning services. A thorough clean before your event ensures your home is showcase-ready, and a fast turnaround post-event clean means you can relax the next morning.",
      "Regular maintenance cleaning in Downtown Dubai is tailored to the premium expectations of this community. Our weekly and bi-weekly contracts include detailed cleaning checklists, quality inspections, and a dedicated account manager who ensures consistency across every visit.",
    ],
    propertyTypes: ["Luxury Apartments", "Penthouses", "Serviced Residences", "Hotel Apartments", "Duplex Units", "Premium Offices"],
    keyAreas: ["Burj Vista", "The Address Residences", "Boulevard Crescent", "29 Boulevard", "Claren Towers", "Opera Grand", "The Distinction", "Burj Khalifa Residences"],
    faqs: [
      { question: "Do you clean luxury penthouses in Downtown Dubai?", answer: "Yes, we specialise in cleaning luxury penthouses and high-end apartments in Downtown Dubai. Our teams are trained to handle premium materials including marble, natural stone, hardwood, silk furnishings, and designer interiors." },
      { question: "Can you maintain my Downtown apartment while I'm overseas?", answer: "Absolutely. We offer empty-property maintenance packages for internationally mobile residents. We'll keep your apartment dust-free, check appliances, air the property, and ensure it's perfect for your return." },
      { question: "What cleaning products do you use for luxury interiors?", answer: "We use pH-neutral, surface-specific products suitable for marble, natural stone, hardwood, and delicate fabrics. All products are eco-friendly, non-abrasive, and chosen specifically for high-end residential properties." },
      { question: "How much does premium cleaning cost in Downtown Dubai?", answer: "Premium apartment cleaning in Downtown Dubai starts from AED 300 for a one-bedroom. Penthouses and larger units are quoted individually based on size, materials, and scope. Contact us for a tailored quote." },
      { question: "Do you offer pre-event and post-event cleaning?", answer: "Yes, we provide both pre-event preparation cleaning (to make your home showcase-ready) and post-event turnaround cleaning (fast next-morning service). This is popular with Downtown residents who entertain regularly." },
      { question: "Which Downtown Dubai towers do you service?", answer: "We service all Downtown Dubai residential towers including Burj Vista, The Address Residences, Boulevard Crescent, 29 Boulevard, Claren Towers, Opera Grand, and all other developments in the district." },
    ],
  },

  "cleaning-services-jumeirah-dubai": {
    heading: "Cleaning Services in Jumeirah Dubai",
    intro: "Jumeirah is one of Dubai's most established and prestigious residential areas, stretching along the coast from Satwa to Umm Suqeim. With Jumeirah 1, 2, and 3 offering a mix of beachfront villas, townhouses, and apartments, alongside popular destinations like Kite Beach, City Walk, and La Mer, Jumeirah attracts families, long-term residents, and high-net-worth individuals.",
    body: [
      "SBC Cleaning Services has extensive experience in Jumeirah villa cleaning — one of our most requested services in this area. The spacious, multi-bedroom villas common in Jumeirah require large cleaning teams and extended service windows. We typically deploy teams of 3-6 cleaners for Jumeirah villas, ensuring comprehensive coverage of all bedrooms, living areas, kitchens, and outdoor spaces in a single visit.",
      "Jumeirah's beachfront location means properties face the combined effects of sand, salt air, and intense sunlight. Outdoor furniture degrades faster, window tracks fill with fine sand, and interior dust levels are higher than in inland communities. Our deep cleaning service for Jumeirah villas addresses all of these coastal challenges with specialised treatment for outdoor and indoor areas.",
      "Move-in and move-out cleaning is in constant demand in Jumeirah's active rental market. We service property handovers across Jumeirah 1, 2, and 3, Umm Suqeim, and Satwa, helping tenants get their deposits back and preparing properties for new occupants. Our end-of-tenancy service meets the standards required by Jumeirah's major property management companies.",
      "For Jumeirah households with children and pets, our eco-friendly, allergen-reducing deep clean is a popular choice. We use child-safe and pet-safe products throughout, and our thorough vacuuming, sofa-cleaning, and mattress-cleaning services dramatically reduce indoor allergen levels — essential for families in this residential community.",
      "Many Jumeirah villas have private gardens, pools, and outdoor entertaining areas that require additional cleaning attention. Our villa cleaning packages include outdoor terrace cleaning, BBQ area cleaning, and garden furniture maintenance. We coordinate with pool and garden maintenance companies to ensure the complete property is managed holistically.",
      "Jumeirah's community includes a significant number of compound villas managed by property management firms. We offer compound-wide cleaning contracts with dedicated teams, ensuring consistent quality across all units and common areas within a single development.",
    ],
    propertyTypes: ["Beachfront Villas", "Townhouses", "Compound Villas", "Garden Apartments", "Family Homes", "Luxury Estates"],
    keyAreas: ["Jumeirah 1", "Jumeirah 2", "Jumeirah 3", "Umm Suqeim", "Satwa", "Kite Beach Area", "City Walk", "La Mer"],
    faqs: [
      { question: "How many cleaners do you send for Jumeirah villa cleaning?", answer: "For Jumeirah villas, we typically deploy teams of 3-6 cleaners depending on the villa size. A 3-bedroom villa usually needs 3-4 cleaners, while 5+ bedroom villas require 5-6 cleaners for comprehensive coverage in a single visit." },
      { question: "Do you use pet-safe and child-safe cleaning products?", answer: "Yes, all our products are eco-friendly, non-toxic, and safe for children and pets. This is particularly important for Jumeirah's family-oriented community. We can also accommodate specific product preferences or allergy requirements." },
      { question: "Do you clean outdoor areas like gardens and pool decks?", answer: "Yes, our Jumeirah villa cleaning packages include outdoor terrace cleaning, BBQ areas, garden furniture, and pool deck cleaning. We coordinate with your pool and garden maintenance teams for holistic property care." },
      { question: "What does villa cleaning cost in Jumeirah?", answer: "Jumeirah villa cleaning starts from AED 500 for a 3-bedroom villa (standard clean). Deep cleaning ranges from AED 700-1,500 depending on villa size and condition. Larger villas and estates are quoted individually." },
      { question: "Can you handle end-of-tenancy cleaning for Jumeirah villas?", answer: "Absolutely. Move-out cleaning is one of our most requested services in Jumeirah. We clean to the standard required by major Jumeirah property management companies, helping tenants receive their full deposit refund." },
      { question: "Do you offer compound-wide cleaning contracts?", answer: "Yes, we provide compound-wide cleaning contracts for Jumeirah property management firms. This includes dedicated teams, consistent scheduling, quality reporting, and coverage of both individual units and common areas." },
    ],
  },
};
