import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS, SERVICES, COMPANY } from "@/lib/data";
import LocationHero from "@/components/locations/LocationHero";
import ServiceCTA   from "@/components/services/ServiceCTA";
import { BreadcrumbSchema, ServiceSchema } from "@/components/shared/SchemaMarkup";

const loc = LOCATIONS.find((l) => l.slug === "cleaning-services-downtown-dubai")!;

export const metadata: Metadata = {
  title:       loc.metaTitle,
  description: loc.metaDesc,
  alternates:  { canonical: `${COMPANY.siteUrl}/locations/${loc.slug}` },
  openGraph:   { title: loc.metaTitle, description: loc.metaDesc, url: `${COMPANY.siteUrl}/locations/${loc.slug}` },
};

export default function DowntownCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", url: `${COMPANY.siteUrl}/locations` }, { name: `Cleaning Services ${loc.name}`, url: `${COMPANY.siteUrl}/locations/${loc.slug}` }]} />
      <ServiceSchema name={`Cleaning Services in ${loc.name}`} description={loc.description} url={`${COMPANY.siteUrl}/locations/${loc.slug}`} priceRange="AED 200 – AED 2,000" />

      <LocationHero locationName={loc.name} description={loc.description} breadcrumb={[{ label: "Locations", href: "/locations" }, { label: loc.name }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-brand-dark">Premium Cleaning Services in Downtown Dubai</h2>
              <p className="text-brand-gray leading-relaxed">Downtown Dubai is home to some of the world&apos;s most iconic architecture — Burj Khalifa, The Dubai Mall, the Dubai Fountain, and the Opera District. The residential properties here, from The Address Residences to Boulevard Crescent and Burj Vista, represent the pinnacle of luxury Dubai living. SBC Cleaning Services provides premium cleaning for Downtown Dubai&apos;s discerning residents.</p>
              <p className="text-brand-gray leading-relaxed">Cleaning luxury apartments and penthouses in Downtown Dubai requires not only technical cleaning expertise but also an understanding of high-end furnishings, delicate surfaces, art, and designer interiors. Our Downtown Dubai cleaning teams are trained in the specific care requirements of luxury properties, using appropriate products and techniques for marble, natural stone, hardwood flooring, and premium upholstery.</p>
              <p className="text-brand-gray leading-relaxed">Many Downtown Dubai residents are internationally mobile — spending weeks or months abroad and returning to properties that have accumulated dust in their absence. We offer empty-property maintenance cleaning contracts, ensuring your Downtown Dubai apartment is always ready for your return.</p>
              <p className="text-brand-gray leading-relaxed">Sofa and carpet cleaning is particularly popular in Downtown Dubai&apos;s luxury properties. High-specification interiors with bespoke furnishings and premium flooring benefit enormously from specialist professional cleaning. Our technicians assess each piece individually to apply the safest and most effective treatment.</p>

              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Iconic Downtown Landmarks Nearby</h3>
                <div className="flex flex-wrap gap-2">
                  {loc.landmarks.map((lm) => (
                    <span key={lm} className="bg-white text-brand-gray text-sm px-3 py-1.5 rounded-full border border-gray-100">{lm}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Services in Downtown Dubai</h3>
                <ul className="space-y-2">
                  {SERVICES.map((s) => (
                    <li key={s.id}><Link href={`/services/${s.slug}`} className="text-brand-gray text-sm hover:text-brand-pink transition-colors flex items-center gap-2"><span>{s.icon}</span>{s.title}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm text-center">
                <p className="font-bold text-brand-dark mb-2">Book Cleaning in Downtown Dubai</p>
                <a href={`tel:${COMPANY.phone}`} className="block w-full bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold py-3 rounded-xl transition-colors text-sm mb-2">Call {COMPANY.phoneDisplay}</a>
                <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(`Hi, I need cleaning in Downtown Dubai`)}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA serviceName={`Cleaning Services in ${loc.name}`} />
    </>
  );
}
