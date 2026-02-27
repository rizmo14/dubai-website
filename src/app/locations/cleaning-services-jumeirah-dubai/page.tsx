import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS, SERVICES, COMPANY } from "@/lib/data";
import LocationHero from "@/components/locations/LocationHero";
import ServiceCTA   from "@/components/services/ServiceCTA";
import { BreadcrumbSchema, ServiceSchema } from "@/components/shared/SchemaMarkup";

const loc = LOCATIONS.find((l) => l.slug === "cleaning-services-jumeirah-dubai")!;

export const metadata: Metadata = {
  title:       loc.metaTitle,
  description: loc.metaDesc,
  alternates:  { canonical: `${COMPANY.siteUrl}/locations/${loc.slug}` },
  openGraph:   { title: loc.metaTitle, description: loc.metaDesc, url: `${COMPANY.siteUrl}/locations/${loc.slug}` },
};

export default function JumeirahCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", url: `${COMPANY.siteUrl}/locations` }, { name: `Cleaning Services ${loc.name}`, url: `${COMPANY.siteUrl}/locations/${loc.slug}` }]} />
      <ServiceSchema name={`Cleaning Services in ${loc.name}`} description={loc.description} url={`${COMPANY.siteUrl}/locations/${loc.slug}`} priceRange="AED 200 – AED 2,000" />

      <LocationHero locationName={loc.name} description={loc.description} breadcrumb={[{ label: "Locations", href: "/locations" }, { label: loc.name }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-brand-dark">Cleaning Services in Jumeirah Dubai</h2>
              <p className="text-brand-gray leading-relaxed">Jumeirah is one of Dubai&apos;s most established and prestigious residential areas, stretching along the coast from Satwa to Umm Suqeim. With Jumeirah 1, 2, and 3 offering a mix of beachfront villas, townhouses, and apartments, alongside popular destinations like Kite Beach, City Walk, and La Mer, Jumeirah attracts families, long-term residents, and high-net-worth individuals.</p>
              <p className="text-brand-gray leading-relaxed">SBC Cleaning Services has extensive experience in Jumeirah villa cleaning — one of our most requested services in this area. The spacious, multi-bedroom villas common in Jumeirah require large cleaning teams and extended service windows. We deploy teams of 3–6 cleaners for Jumeirah villas, ensuring comprehensive coverage in a single visit.</p>
              <p className="text-brand-gray leading-relaxed">Move-in and move-out cleaning is in constant demand in Jumeirah&apos;s active rental market. We service property handovers across Jumeirah 1, 2, and 3, Umm Suqeim, and Satwa, helping tenants get their deposits back and preparing properties for new occupants. Our end-of-tenancy service meets the standards required by Jumeirah&apos;s major property management companies.</p>
              <p className="text-brand-gray leading-relaxed">For Jumeirah households with children and pets, our eco-friendly, allergen-reducing deep clean is a popular choice. We use child-safe and pet-safe products throughout, and our thorough vacuuming and sofa-cleaning services dramatically reduce indoor allergen levels.</p>

              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Jumeirah Landmarks & Nearby Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {loc.landmarks.map((lm) => (
                    <span key={lm} className="bg-white text-brand-gray text-sm px-3 py-1.5 rounded-full border border-gray-100">{lm}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Services in Jumeirah</h3>
                <ul className="space-y-2">
                  {SERVICES.map((s) => (
                    <li key={s.id}><Link href={`/services/${s.slug}`} className="text-brand-gray text-sm hover:text-brand-pink transition-colors flex items-center gap-2"><span>{s.icon}</span>{s.title}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm text-center">
                <p className="font-bold text-brand-dark mb-2">Book Cleaning in Jumeirah</p>
                <a href={`tel:${COMPANY.phone}`} className="block w-full bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold py-3 rounded-xl transition-colors text-sm mb-2">Call {COMPANY.phoneDisplay}</a>
                <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(`Hi, I need cleaning in Jumeirah Dubai`)}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA serviceName={`Cleaning Services in ${loc.name}`} />
    </>
  );
}
