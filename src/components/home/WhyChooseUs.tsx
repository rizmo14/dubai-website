export default function WhyChooseUs() {
  const badges = [
    { icon: "✅", label: "Licensed & Insured" },
    { icon: "⭐", label: "4.9★ Rated" },
    { icon: "🕐", label: "Same-Day Service" },
    { icon: "🌿", label: "Eco-Friendly" },
    { icon: "🔄", label: "Satisfaction Guarantee" },
    { icon: "📱", label: "30-min WhatsApp Reply" },
  ];

  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {badges.map((b, i) => (
            <div key={b.label} className="flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">{b.icon}</span>
              <span className="text-sm font-semibold text-brand-dark whitespace-nowrap">{b.label}</span>
              {i < badges.length - 1 && (
                <span className="hidden sm:block text-gray-200 ml-6 select-none" aria-hidden="true">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
