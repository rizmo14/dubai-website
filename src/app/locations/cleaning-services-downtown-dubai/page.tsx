import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS, SERVICES, COMPANY } from "@/lib/data";
import { LOCATION_CONTENT } from "@/lib/locationContent";
import LocationHero from "@/components/locations/LocationHero";
import ServiceCTA   from "@/components/services/ServiceCTA";
import ServiceFAQ   from "@/components/services/ServiceFAQ";
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";

const loc = LOCATIONS.find((l) => l.slug === "cleaning-services-downtown-dubai")!;
const content = LOCATION_CONTENT["cleaning-services-downtown-dubai"];

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
      <FAQSchema faqs={content.faqs} />

      <LocationHero locationName={loc.name} description={loc.description} breadcrumb={[{ label: "Locations", href: "/locations" }, { label: loc.name }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-brand-dark">{content.heading}</h2>
              <p className="text-brand-gray leading-relaxed">{content.intro}</p>
              {content.body.map((paragraph, i) => (
                <p key={i} className="text-brand-gray leading-relaxed">{paragraph}</p>
              ))}

              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Property Types We Clean</h3>
                <div className="flex flex-wrap gap-2">
                  {content.propertyTypes.map((pt) => (
                    <span key={pt} className="bg-white text-brand-gray text-sm px-3 py-1.5 rounded-full border border-gray-100">{pt}</span>
                  ))}
                </div>
              </div>

              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Key Buildings & Developments</h3>
                <div className="flex flex-wrap gap-2">
                  {content.keyAreas.map((area) => (
                    <span key={area} className="bg-white text-brand-gray text-sm px-3 py-1.5 rounded-full border border-gray-100">{area}</span>
                  ))}
                </div>
              </div>

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
                <p className="text-brand-gray text-sm mb-4">Same-day available · Free quotes</p>
                <a href={`tel:${COMPANY.phone}`} className="block w-full bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold py-3 rounded-xl transition-colors text-sm mb-2">Call {COMPANY.phoneDisplay}</a>
                <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(`Hi, I need cleaning in Downtown Dubai`)}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={content.faqs} serviceTitle={`Cleaning Services in ${loc.name}`} />
      <ServiceCTA serviceName={`Cleaning Services in ${loc.name}`} />
    </>
  );
}
