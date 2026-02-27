import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, COMPANY } from "@/lib/data";
import { SERVICE_CONTENT } from "@/lib/serviceContent";
import ServiceHero  from "@/components/services/ServiceHero";
import ServiceFAQ   from "@/components/services/ServiceFAQ";
import ServiceCTA   from "@/components/services/ServiceCTA";
import {
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/shared/SchemaMarkup";

const service = SERVICES.find((s) => s.slug === "sofa-carpet-cleaning-dubai")!;
const content = SERVICE_CONTENT["sofa-carpet-cleaning-dubai"];

export const metadata: Metadata = {
  title:       service.metaTitle,
  description: service.metaDesc,
  alternates:  { canonical: `${COMPANY.siteUrl}/services/${service.slug}` },
  openGraph: {
    title:       service.metaTitle,
    description: service.metaDesc,
    url:         `${COMPANY.siteUrl}/services/${service.slug}`,
  },
};

export default function SofaCarpetCleaningPage() {
  return (
    <>
      <ServiceSchema
        name={service.title}
        description={service.shortDesc}
        url={`${COMPANY.siteUrl}/services/${service.slug}`}
      />
      <FAQSchema faqs={content.faqs} />
      <BreadcrumbSchema items={[
        { name: "Services", url: `${COMPANY.siteUrl}/services` },
        { name: service.title, url: `${COMPANY.siteUrl}/services/${service.slug}` },
      ]} />

      <ServiceHero
        heading={service.heroHeading}
        subtitle={service.heroSubtitle}
        serviceId={service.shortTitle}
        breadcrumb={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <article className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <p className="text-brand-gray leading-relaxed text-lg">{content.intro}</p>

          <div className="bg-brand-light rounded-2xl p-6">
            <h2 className="text-xl font-bold text-brand-dark mb-5">What&apos;s Included</h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {content.whatIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-brand-gray text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-purple rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <p className="font-bold text-lg">Ready to book?</p>
              <p className="text-white/70 text-sm">Takes 60 seconds. We confirm within 30 mins.</p>
            </div>
            <Link
              href={`/book?service=${encodeURIComponent(service.shortTitle)}`}
              className="bg-brand-pink hover:bg-brand-pink-dark text-white font-bold px-8 py-3.5 rounded-xl transition-colors whitespace-nowrap"
            >
              Book Now →
            </Link>
          </div>

          <div>
            <h3 className="font-bold text-brand-dark mb-3 text-sm uppercase tracking-wide">Other Services</h3>
            <div className="flex flex-wrap gap-2">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-brand-gray bg-brand-light hover:bg-brand-light-2 px-4 py-2 rounded-full transition-colors"
                >
                  {s.icon} {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <ServiceFAQ faqs={content.faqs} serviceTitle={service.title} />
      <ServiceCTA serviceName={service.title} />
    </>
  );
}
