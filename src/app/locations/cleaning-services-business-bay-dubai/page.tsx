import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS, SERVICES, COMPANY } from "@/lib/data";
import LocationHero from "@/components/locations/LocationHero";
import ServiceCTA   from "@/components/services/ServiceCTA";
import { BreadcrumbSchema, ServiceSchema } from "@/components/shared/SchemaMarkup";

const loc = LOCATIONS.find((l) => l.slug === "cleaning-services-business-bay-dubai")!;

export const metadata: Metadata = {
  title:       loc.metaTitle,
  description: loc.metaDesc,
  alternates:  { canonical: `${COMPANY.siteUrl}/locations/${loc.slug}` },
  openGraph:   { title: loc.metaTitle, description: loc.metaDesc, url: `${COMPANY.siteUrl}/locations/${loc.slug}` },
};

export default function BusinessBayCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", url: `${COMPANY.siteUrl}/locations` }, { name: `Cleaning Services ${loc.name}`, url: `${COMPANY.siteUrl}/locations/${loc.slug}` }]} />
      <ServiceSchema name={`Cleaning Services in ${loc.name}`} description={loc.description} url={`${COMPANY.siteUrl}/locations/${loc.slug}`} priceRange="AED 200 – AED 2,000" />

      <LocationHero locationName={loc.name} description={loc.description} breadcrumb={[{ label: "Locations", href: "/locations" }, { label: loc.name }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-brand-dark">Cleaning Services in Business Bay Dubai</h2>
              <p className="text-brand-gray leading-relaxed">Business Bay is Dubai&apos;s central business district — a high-density mix of corporate towers, luxury residential buildings, hotels, and waterfront dining along the Dubai Canal. SBC Cleaning Services is a trusted cleaning partner for Business Bay&apos;s office tenants, residential tower residents, and hospitality operators.</p>
              <p className="text-brand-gray leading-relaxed">For residential clients in Business Bay, we offer comprehensive apartment cleaning including regular maintenance, deep cleaning, and move-in/move-out end-of-tenancy cleans. Properties along the canal command premium rental values, and our cleaning standard is matched to this expectation.</p>
              <p className="text-brand-gray leading-relaxed">Business Bay&apos;s commercial office spaces are another core area of our service. We clean offices in Bay Square, Executive Towers, Opus Tower, and across the district&apos;s many commercial buildings. Our office cleaning teams are security-cleared, professionally uniformed, and operate on flexible schedules to minimise business disruption.</p>
              <p className="text-brand-gray leading-relaxed">Post-construction and fit-out cleaning is in high demand in Business Bay due to the area&apos;s constant development activity. Whether you&apos;re opening a new restaurant on Bay Avenue, fitting out a new office, or completing a residential renovation, our specialist post-construction clean teams can turn around your handover in 24–48 hours.</p>

              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Key Landmarks in Business Bay</h3>
                <div className="flex flex-wrap gap-2">
                  {loc.landmarks.map((lm) => (
                    <span key={lm} className="bg-white text-brand-gray text-sm px-3 py-1.5 rounded-full border border-gray-100">{lm}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Services in Business Bay</h3>
                <ul className="space-y-2">
                  {SERVICES.map((s) => (
                    <li key={s.id}><Link href={`/services/${s.slug}`} className="text-brand-gray text-sm hover:text-brand-pink transition-colors flex items-center gap-2"><span>{s.icon}</span>{s.title}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm text-center">
                <p className="font-bold text-brand-dark mb-2">Book Cleaning in Business Bay</p>
                <a href={`tel:${COMPANY.phone}`} className="block w-full bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold py-3 rounded-xl transition-colors text-sm mb-2">Call {COMPANY.phoneDisplay}</a>
                <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(`Hi, I need cleaning in Business Bay Dubai`)}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA serviceName={`Cleaning Services in ${loc.name}`} />
    </>
  );
}
