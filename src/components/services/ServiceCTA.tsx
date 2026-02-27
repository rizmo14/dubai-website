import ContactForm from "@/components/shared/ContactForm";
import { COMPANY } from "@/lib/data";

type Props = { serviceName: string };

export default function ServiceCTA({ serviceName }: Props) {
  const whatsappHref = `https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    `Hi, I'm interested in ${serviceName} in Dubai`
  )}`;

  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <div>
            <span className="inline-block text-brand-pink font-semibold text-sm uppercase tracking-wider mb-3">
              Get a Free Quote
            </span>
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Book Your {serviceName} Today
            </h2>
            <p className="text-brand-gray leading-relaxed mb-6">
              Fill in the form and we&apos;ll get back to you within 30 minutes with a transparent, no-obligation quote.
            </p>

            <div className="space-y-4">
              {[
                { icon: "🕐", text: "We respond within 30 minutes" },
                { icon: "💰", text: "Free, no-obligation quotes" },
                { icon: "📅", text: "Flexible scheduling — same-day available" },
                { icon: "✅", text: "Fully insured, vetted cleaners" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-brand-gray">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="font-bold text-brand-dark text-lg mb-5">
              Request a Free Quote
            </h3>
            <ContactForm servicePrefill={serviceName} />
          </div>
        </div>
      </div>
    </section>
  );
}
