import Breadcrumb, { type BreadcrumbItem } from "@/components/shared/Breadcrumb";
import { COMPANY } from "@/lib/data";

type Props = {
  locationName: string;
  description:  string;
  breadcrumb:   BreadcrumbItem[];
};

export default function LocationHero({ locationName, description, breadcrumb }: Props) {
  const whatsappHref = `https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    `Hi, I need cleaning services in ${locationName}, Dubai`
  )}`;

  return (
    <section className="bg-hero-gradient pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Breadcrumb items={breadcrumb} />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Cleaning Services in {locationName}, Dubai
        </h1>
        <p className="text-white/85 text-lg mb-8 max-w-2xl leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30">📍 {locationName}</span>
          <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30">✅ Same-Day Available</span>
          <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30">⭐ 5-Star Rated</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center justify-center gap-2 bg-white text-brand-purple font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all">
            Call {COMPANY.phoneDisplay}
          </a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all">
            WhatsApp for a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
