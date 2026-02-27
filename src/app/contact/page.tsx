import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ContactForm from "@/components/shared/ContactForm";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
  title:       "Contact SBC Cleaning Services Dubai | Get a Free Quote",
  description: "Contact SBC Cleaning Services in Dubai. Call +971 52 133 7528, WhatsApp, or fill in our form. Free quotes within 30 minutes. Serving all Dubai areas.",
  alternates:  { canonical: `${COMPANY.siteUrl}/contact` },
  openGraph: {
    title:       "Contact SBC Cleaning Services Dubai",
    description: "Get a free cleaning quote in Dubai. Call, WhatsApp, or fill in our form.",
    url:         `${COMPANY.siteUrl}/contact`,
  },
};

const contactMethods = [
  {
    icon: "📞",
    title: "Phone",
    value: COMPANY.phoneDisplay,
    sub:   "Available 7 days a week",
    href:  `tel:${COMPANY.phone}`,
    cta:   "Call Now",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: COMPANY.phone2Display,
    sub:   "Message us any time",
    href:  `https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(COMPANY.whatsappMsg)}`,
    cta:   "WhatsApp Us",
  },
  {
    icon: "📧",
    title: "Email",
    value: COMPANY.email,
    sub:   "We respond within 2 hours",
    href:  `mailto:${COMPANY.email}`,
    cta:   "Send Email",
  },
  {
    icon: "📍",
    title: "Location",
    value: COMPANY.address.full,
    sub:   "Serving all Dubai areas",
    href:  "https://maps.google.com/?q=Dubai,UAE",
    cta:   "View on Map",
  },
];

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Contact", url: `${COMPANY.siteUrl}/contact` }]} />

      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Contact Us" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact SBC Cleaning Services
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            Get a free, no-obligation quote in under 30 minutes. Call, WhatsApp, or fill in the form below.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group text-center"
              >
                <div className="text-3xl mb-3">{method.icon}</div>
                <h3 className="font-bold text-brand-dark mb-1">{method.title}</h3>
                <p className="text-brand-purple font-semibold text-sm mb-1">{method.value}</p>
                <p className="text-brand-gray text-xs mb-3">{method.sub}</p>
                <span className="inline-block bg-brand-light text-brand-purple text-xs font-semibold px-4 py-2 rounded-full group-hover:bg-brand-pink group-hover:text-white transition-colors">
                  {method.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-2">Send Us a Message</h2>
              <p className="text-brand-gray text-sm mb-6">
                We&apos;ll get back to you within 30 minutes during business hours.
              </p>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm text-brand-gray">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-semibold text-brand-dark">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday – Sunday</span>
                    <span className="font-semibold text-brand-dark">Available on request</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span>WhatsApp / Emergency</span>
                    <span className="font-semibold text-green-600">24/7</span>
                  </div>
                </div>
              </div>

              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Areas We Cover</h3>
                <p className="text-brand-gray text-sm leading-relaxed">
                  We serve all major Dubai communities including Dubai Marina, JLT, Business Bay, Downtown Dubai, Jumeirah, Palm Jumeirah, DIFC, Deira, Bur Dubai, Mirdif, Al Barsha, Arabian Ranches, Dubai Hills, and more.
                </p>
              </div>

              {/* Map embed placeholder */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-48 flex items-center justify-center">
                <div className="text-center text-brand-gray">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="font-semibold text-brand-dark">Dubai, UAE</p>
                  <p className="text-sm">Serving all Dubai areas</p>
                  <a
                    href="https://maps.google.com/?q=Dubai,UAE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-brand-pink text-sm font-semibold hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
