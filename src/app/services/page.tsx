import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, COMPANY } from "@/lib/data";
import { BreadcrumbSchema } from "@/components/shared/SchemaMarkup";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title:       "Cleaning Services Dubai | All Services | SBC Cleaning",
  description: "Browse all SBC cleaning services in Dubai: deep cleaning, office cleaning, villa cleaning, sofa cleaning, move-in/out cleaning & post-construction. From AED 150.",
  alternates:  { canonical: `${COMPANY.siteUrl}/services` },
  openGraph: {
    title:       "Cleaning Services Dubai — SBC",
    description: "All professional cleaning services in Dubai. Licensed, insured, 5-star rated.",
    url:         `${COMPANY.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", url: `${COMPANY.siteUrl}/services` }]} />

      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Services" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Cleaning Services in Dubai
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            Professional, reliable cleaning across all Dubai communities. Every service delivered by trained, background-checked, fully insured staff.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-brand-pink hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-5xl mb-5">{service.icon}</div>
                <h2 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-purple transition-colors">
                  {service.title}
                </h2>
                <p className="text-brand-gray text-sm leading-relaxed mb-5">
                  {service.shortDesc}
                </p>
                <div className="flex items-center justify-end">
                  <span className="text-brand-purple font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    View details
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-brand-gray mb-8">
            Call or WhatsApp us — we&apos;ll recommend the right service for your property and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-pink hover:bg-brand-pink-dark text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Call {COMPANY.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(COMPANY.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
