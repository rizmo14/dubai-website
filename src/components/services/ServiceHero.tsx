import Link from "next/link";
import { COMPANY } from "@/lib/data";
import Breadcrumb, { type BreadcrumbItem } from "@/components/shared/Breadcrumb";

type Props = {
  heading:    string;
  subtitle:   string;
  serviceId:  string;
  breadcrumb: BreadcrumbItem[];
};

export default function ServiceHero({ heading, subtitle, serviceId, breadcrumb }: Props) {
  const whatsappHref = `https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    COMPANY.whatsappMsg
  )}`;

  return (
    <section className="bg-hero-gradient pt-28 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={breadcrumb} />
        </div>

        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {heading}
          </h1>
          <p className="text-white/85 text-lg mb-6 leading-relaxed">{subtitle}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30">
              ✅ Licensed & Insured
            </span>
            <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30">
              ⭐ 4.9★ Rated
            </span>
            <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30">
              🕐 Same-Day Available
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/book?service=${encodeURIComponent(serviceId)}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-pink hover:bg-brand-pink-dark text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              📅 Book This Service
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-purple font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {COMPANY.phoneDisplay}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              WhatsApp for a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
