import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS, SERVICES, COMPANY } from "@/lib/data";
import LocationHero from "@/components/locations/LocationHero";
import ServiceCTA   from "@/components/services/ServiceCTA";
import { BreadcrumbSchema, ServiceSchema } from "@/components/shared/SchemaMarkup";

const loc = LOCATIONS.find((l) => l.slug === "cleaning-services-marina-dubai")!;

export const metadata: Metadata = {
  title:       loc.metaTitle,
  description: loc.metaDesc,
  alternates:  { canonical: `${COMPANY.siteUrl}/locations/${loc.slug}` },
  openGraph:   { title: loc.metaTitle, description: loc.metaDesc, url: `${COMPANY.siteUrl}/locations/${loc.slug}` },
};

export default function MarinaCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", url: `${COMPANY.siteUrl}/locations` }, { name: `Cleaning Services ${loc.name}`, url: `${COMPANY.siteUrl}/locations/${loc.slug}` }]} />
      <ServiceSchema name={`Cleaning Services in ${loc.name}`} description={loc.description} url={`${COMPANY.siteUrl}/locations/${loc.slug}`} priceRange="AED 200 – AED 2,000" />

      <LocationHero locationName={loc.name} description={loc.description} breadcrumb={[{ label: "Locations", href: "/locations" }, { label: loc.name }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-brand-dark">Professional Cleaning Services in Dubai Marina</h2>
              <p className="text-brand-gray leading-relaxed">Dubai Marina is one of the city&apos;s most prestigious waterfront communities, home to iconic residential towers, luxury apartments, and the vibrant Walk at JBR. SBC Cleaning Services has been trusted by Dubai Marina residents for professional apartment and home cleaning, delivering reliable, high-quality results across all towers in the community.</p>
              <p className="text-brand-gray leading-relaxed">With towers ranging from compact studios to expansive 4-bedroom penthouses, Dubai Marina properties vary greatly in size and layout. Our teams are experienced in all Marina tower types, from Cayan Tower and Marina Gate to Princess Tower and Infinity Tower. We work around building access requirements and can coordinate with building management where needed.</p>
              <p className="text-brand-gray leading-relaxed">For Marina residents who require regular maintenance cleaning, we offer flexible weekly, bi-weekly, and monthly contracts. Regular clients benefit from priority scheduling, a consistent cleaning team who knows their property, and preferential rates. Same-day cleaning is often available for urgently needed bookings.</p>
              <p className="text-brand-gray leading-relaxed">Our Dubai Marina cleaning service covers deep cleaning, move-in/move-out cleaning, sofa and carpet cleaning, office cleaning for Marina commercial spaces, and post-renovation cleaning. All teams are professionally trained, uniformed, and fully insured.</p>

              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Nearby Landmarks We Cover</h3>
                <div className="flex flex-wrap gap-2">
                  {loc.landmarks.map((lm) => (
                    <span key={lm} className="bg-white text-brand-gray text-sm px-3 py-1.5 rounded-full border border-gray-100">{lm}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Services We Offer in {loc.name}</h3>
                <ul className="space-y-2">
                  {SERVICES.map((s) => (
                    <li key={s.id}><Link href={`/services/${s.slug}`} className="text-brand-gray text-sm hover:text-brand-pink transition-colors flex items-center gap-2"><span>{s.icon}</span>{s.title}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm text-center">
                <p className="font-bold text-brand-dark mb-2">Book a Cleaning in {loc.name}</p>
                <p className="text-brand-gray text-sm mb-4">Same-day available · Free quotes</p>
                <a href={`tel:${COMPANY.phone}`} className="block w-full bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold py-3 rounded-xl transition-colors text-sm mb-2">Call {COMPANY.phoneDisplay}</a>
                <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(`Hi, I need cleaning in ${loc.name}`)}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA serviceName={`Cleaning Services in ${loc.name}`} />
    </>
  );
}
