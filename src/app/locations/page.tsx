import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS, COMPANY } from "@/lib/data";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
  title:       "Cleaning Services by Area | All Dubai Locations | SBC",
  description: "SBC Cleaning Services covers all major Dubai areas — Dubai Marina, JLT, Business Bay, Downtown Dubai, Jumeirah, and more. Find cleaning services near you.",
  alternates:  { canonical: `${COMPANY.siteUrl}/locations` },
};

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", url: `${COMPANY.siteUrl}/locations` }]} />

      <section className="bg-hero-gradient pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6"><Breadcrumb items={[{ label: "Locations" }]} /></div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Cleaning Services Across Dubai
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            We cover all major Dubai communities. Find cleaning services near you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.id}
                href={`/locations/${loc.slug}`}
                className="group bg-brand-light hover:bg-brand-light-2 rounded-2xl p-6 transition-colors border border-transparent hover:border-brand-pink"
              >
                <h2 className="font-bold text-brand-dark text-xl mb-3 group-hover:text-brand-purple transition-colors">
                  {loc.name}
                </h2>
                <p className="text-brand-gray text-sm leading-relaxed mb-4">{loc.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {loc.landmarks.slice(0, 3).map((lm) => (
                    <span key={lm} className="text-xs bg-white text-brand-gray px-2 py-0.5 rounded-full border border-gray-100">{lm}</span>
                  ))}
                </div>
                <span className="text-brand-purple text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View services in {loc.name}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
