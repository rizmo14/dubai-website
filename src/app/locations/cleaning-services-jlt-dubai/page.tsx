import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS, SERVICES, COMPANY } from "@/lib/data";
import LocationHero from "@/components/locations/LocationHero";
import ServiceCTA   from "@/components/services/ServiceCTA";
import { BreadcrumbSchema, ServiceSchema } from "@/components/shared/SchemaMarkup";

const loc = LOCATIONS.find((l) => l.slug === "cleaning-services-jlt-dubai")!;

export const metadata: Metadata = {
  title:       loc.metaTitle,
  description: loc.metaDesc,
  alternates:  { canonical: `${COMPANY.siteUrl}/locations/${loc.slug}` },
  openGraph:   { title: loc.metaTitle, description: loc.metaDesc, url: `${COMPANY.siteUrl}/locations/${loc.slug}` },
};

export default function JLTCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", url: `${COMPANY.siteUrl}/locations` }, { name: `Cleaning Services ${loc.name}`, url: `${COMPANY.siteUrl}/locations/${loc.slug}` }]} />
      <ServiceSchema name={`Cleaning Services in ${loc.name}`} description={loc.description} url={`${COMPANY.siteUrl}/locations/${loc.slug}`} priceRange="AED 200 – AED 2,000" />

      <LocationHero locationName={loc.name} description={loc.description} breadcrumb={[{ label: "Locations", href: "/locations" }, { label: loc.name }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-brand-dark">Professional Cleaning Services in JLT Dubai</h2>
              <p className="text-brand-gray leading-relaxed">Jumeirah Lake Towers (JLT) is a vibrant mixed-use community within the DMCC Free Zone, comprising 80 towers across 26 clusters arranged around three artificial lakes. With a dense mix of residential apartments, corporate offices, retail outlets, restaurants, and hospitality venues, JLT requires cleaning professionals who understand the unique demands of this community.</p>
              <p className="text-brand-gray leading-relaxed">SBC Cleaning Services provides residential and commercial cleaning throughout all JLT clusters — from Cluster A to Cluster Z. Whether you live in Bonnington Tower, Goldcrest Views, Platinum Tower, or any of the community&apos;s residential buildings, our teams are experienced in navigating JLT building access and delivering consistent, high-quality results.</p>
              <p className="text-brand-gray leading-relaxed">For JLT businesses — from small DMCC-registered offices to large corporate floor spaces — we offer daily, weekly, and monthly commercial cleaning contracts. Our office cleaning teams in JLT work around your business hours, typically early morning or evening, to avoid interruption to your operations.</p>
              <p className="text-brand-gray leading-relaxed">Sofa and carpet cleaning is another popular service among JLT residents. Dubai&apos;s dust levels, combined with JLT&apos;s lake-adjacent microclimate, means upholstery and carpets require regular professional cleaning. Our specialist steam-cleaning teams serve all JLT towers with flexible scheduling.</p>

              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Nearby Areas & Landmarks</h3>
                <div className="flex flex-wrap gap-2">
                  {loc.landmarks.map((lm) => (
                    <span key={lm} className="bg-white text-brand-gray text-sm px-3 py-1.5 rounded-full border border-gray-100">{lm}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Services in JLT</h3>
                <ul className="space-y-2">
                  {SERVICES.map((s) => (
                    <li key={s.id}><Link href={`/services/${s.slug}`} className="text-brand-gray text-sm hover:text-brand-pink transition-colors flex items-center gap-2"><span>{s.icon}</span>{s.title}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm text-center">
                <p className="font-bold text-brand-dark mb-2">Book Cleaning in JLT</p>
                <p className="text-brand-gray text-sm mb-4">Same-day available · Free quotes</p>
                <a href={`tel:${COMPANY.phone}`} className="block w-full bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold py-3 rounded-xl transition-colors text-sm mb-2">Call {COMPANY.phoneDisplay}</a>
                <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(`Hi, I need cleaning in JLT Dubai`)}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA serviceName={`Cleaning Services in ${loc.name}`} />
    </>
  );
}
