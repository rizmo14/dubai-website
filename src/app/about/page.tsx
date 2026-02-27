import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, WHY_CHOOSE_US } from "@/lib/data";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
  title:       "About SBC Cleaning Services Dubai | Licensed Cleaning Company UAE",
  description: "Learn about SBC Cleaning Services — Dubai's trusted, fully licensed & insured cleaning company. Professional staff, 500+ satisfied clients, 5-star rated service.",
  alternates:  { canonical: `${COMPANY.siteUrl}/about` },
  openGraph: {
    title:       "About SBC Cleaning Services Dubai",
    description: "Dubai's trusted cleaning company — licensed, insured, 5-star rated. Serving all major Dubai areas.",
    url:         `${COMPANY.siteUrl}/about`,
  },
};

export default function AboutPage() {
  const whatsappHref = `https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(COMPANY.whatsappMsg)}`;

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "About", url: `${COMPANY.siteUrl}/about` }]} />

      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "About Us" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About SBC Cleaning Services
          </h1>
          <p className="text-white/85 text-xl max-w-2xl leading-relaxed">
            Dubai&apos;s trusted professional cleaning company — licensed, insured, and 5-star rated by hundreds of satisfied clients.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-brand-pink font-semibold text-sm uppercase tracking-wider mb-3">Our Story</span>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Dubai&apos;s Most Trusted Cleaning Company
              </h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  Sumanawathi Building Cleaning Services LLC — operating as SBC Cleaning Services — was founded with one mission: to provide the residents and businesses of Dubai with a cleaning service they can genuinely rely on.
                </p>
                <p>
                  In a city that moves at an extraordinary pace, finding a trustworthy, professional, and affordable cleaning service shouldn&apos;t be a challenge. SBC was built to solve that problem — delivering consistent, high-quality cleaning results to hundreds of Dubai homes, offices, and commercial properties.
                </p>
                <p>
                  We carefully screen every member of our cleaning team. Background checks, professional training, and ongoing quality audits ensure that when an SBC team arrives at your door, you can trust them completely. Your home and your belongings are in safe hands.
                </p>
                <p>
                  Today, SBC serves clients across all major Dubai communities — from Dubai Marina and JLT to Business Bay, Downtown, Jumeirah, and beyond. Our team of trained cleaning professionals is committed to one standard: exceptional.
                </p>
              </div>
            </div>

            <div className="bg-brand-light rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "500+",  label: "Happy Clients",       icon: "😊" },
                  { value: "4.9★",  label: "Average Rating",      icon: "⭐" },
                  { value: "6",     label: "Services Offered",    icon: "🧹" },
                  { value: "All",   label: "Dubai Areas Covered", icon: "📍" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-5 text-center shadow-sm">
                    <div className="text-3xl mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold text-brand-purple">{stat.value}</div>
                    <div className="text-xs text-brand-gray mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={`tel:${COMPANY.phone}`} className="flex-1 text-center bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold py-3 rounded-xl text-sm transition-colors">
                  Call Us
                </a>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl text-sm transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-3">Why Choose SBC?</h2>
            <p className="text-brand-gray max-w-xl mx-auto">What sets us apart from other cleaning companies in Dubai.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Promise to You</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            Every SBC cleaning job comes with our satisfaction guarantee. If you&apos;re not completely happy with any aspect of our service, we will return and make it right — at no additional cost. We don&apos;t consider a job done until you&apos;re satisfied.
          </p>
          <p className="text-brand-gray leading-relaxed mb-8">
            We are fully licensed in Dubai, carry comprehensive insurance, and maintain a zero-tolerance policy on substandard work. When you book with SBC, you&apos;re booking with a cleaning company that stands behind every job it does.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-brand-pink hover:bg-brand-pink-dark text-white font-bold px-8 py-4 rounded-xl transition-colors">
              Get a Free Quote
            </Link>
            <Link href="/services" className="bg-brand-light hover:bg-brand-light-2 text-brand-purple font-bold px-8 py-4 rounded-xl transition-colors border border-brand-light-2">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
