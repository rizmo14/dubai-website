import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function TrustBadges() {
  const whatsappHref = `https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    COMPANY.whatsappMsg
  )}`;

  return (
    <section className="py-16 bg-hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Ready for a Spotless Clean?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Get a free, no-obligation quote in under 60 seconds. Book online or call us now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${COMPANY.phone}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-purple font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {COMPANY.phoneDisplay}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            WhatsApp for a Free Quote
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 transition-all"
          >
            Online Enquiry Form
          </Link>
        </div>
      </div>
    </section>
  );
}
