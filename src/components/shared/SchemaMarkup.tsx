import { COMPANY } from "@/lib/data";
import type { FAQ } from "@/lib/data";

// ─── LocalBusiness ────────────────────────────────────────────────────────────
export function LocalBusinessSchema() {
  const schema = {
    "@context":       "https://schema.org",
    "@type":          "LocalBusiness",
    "@id":            `${COMPANY.siteUrl}/#business`,
    name:             COMPANY.name,
    legalName:        COMPANY.legalName,
    description:      COMPANY.description,
    url:              COMPANY.siteUrl,
    telephone:        COMPANY.phone,
    email:            COMPANY.email,
    priceRange:       "$$",
    image:            `${COMPANY.siteUrl}/images/logo.png`,
    logo:             `${COMPANY.siteUrl}/images/logo.png`,
    address: {
      "@type":           "PostalAddress",
      addressLocality:   "Dubai",
      addressRegion:     "Dubai",
      addressCountry:    "AE",
    },
    geo: {
      "@type":    "GeoCoordinates",
      latitude:   "25.2048",
      longitude:  "55.2708",
    },
    areaServed: [
      "Dubai Marina", "Jumeirah Lake Towers", "Business Bay",
      "Downtown Dubai", "Jumeirah", "Palm Jumeirah", "DIFC",
      "Deira", "Bur Dubai", "Mirdif", "Al Barsha", "Arabian Ranches",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:    "Cleaning Services",
      itemListElement: [
        { "@type": "Offer", name: "Deep Cleaning Dubai" },
        { "@type": "Offer", name: "Office Cleaning Dubai" },
        { "@type": "Offer", name: "Villa Cleaning Dubai" },
        { "@type": "Offer", name: "Move In / Move Out Cleaning Dubai" },
        { "@type": "Offer", name: "Sofa & Carpet Cleaning Dubai" },
        { "@type": "Offer", name: "Post-Construction Cleaning Dubai" },
      ],
    },
    openingHoursSpecification: [
      {
        "@type":     "OpeningHoursSpecification",
        dayOfWeek:   ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens:       "09:00",
        closes:      "18:00",
      },
    ],
    sameAs: [
      COMPANY.social.facebook,
      COMPANY.social.instagram,
      COMPANY.social.tiktok,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
type FAQSchemaProps = { faqs: FAQ[] };

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type":    "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type":        "Question",
      name:           faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text:    faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Service ──────────────────────────────────────────────────────────────────
type ServiceSchemaProps = {
  name:        string;
  description: string;
  url:         string;
  priceRange?: string;
};

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context":   "https://schema.org",
    "@type":      "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name:    COMPANY.name,
      url:     COMPANY.siteUrl,
    },
    areaServed: {
      "@type": "City",
      name:    "Dubai",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
type BreadcrumbSchemaItem = { name: string; url: string };
type BreadcrumbSchemaProps = { items: BreadcrumbSchemaItem[] };

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.siteUrl },
      ...items.map((item, i) => ({
        "@type":    "ListItem",
        position:   i + 2,
        name:       item.name,
        item:       item.url,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

