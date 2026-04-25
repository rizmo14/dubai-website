import type { Metadata } from "next";
import Hero             from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs      from "@/components/home/WhyChooseUs";
import Testimonials     from "@/components/home/Testimonials";
import {
  LocalBusinessSchema,
  FAQSchema,
} from "@/components/shared/SchemaMarkup";
import { SERVICES, TESTIMONIALS, HOME_FAQS, COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title:       "SBC Cleaning Services Dubai | Professional Cleaning Company UAE",
  description: "Professional cleaning services in Dubai — deep cleaning, office cleaning, villa cleaning, sofa & carpet cleaning. Fully licensed & insured. Call +971 52 133 7528.",
  alternates:  { canonical: COMPANY.siteUrl },
  openGraph: {
    title:       "SBC Cleaning Services Dubai | Professional Cleaning Company UAE",
    description: "Professional cleaning services in Dubai — deep cleaning, office cleaning, villa cleaning. Licensed, insured, 5-star rated.",
    url:         COMPANY.siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <LocalBusinessSchema />
      <FAQSchema faqs={HOME_FAQS} />

      {/* Page sections */}
      <Hero />
      <WhyChooseUs />
      <ServicesOverview services={SERVICES} />
      <Testimonials testimonials={TESTIMONIALS} />
    </>
  );
}
