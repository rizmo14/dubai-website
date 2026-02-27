import Link from "next/link";
import type { Location } from "@/lib/data";

type Props = { locations: Location[] };

const allAreas = [
  "Dubai Marina", "JLT", "Business Bay", "Downtown Dubai",
  "Jumeirah 1 / 2 / 3", "Palm Jumeirah", "DIFC", "Deira",
  "Bur Dubai", "Mirdif", "Al Barsha", "Arabian Ranches",
  "Dubai Hills", "Meadows & Springs", "Al Quoz", "Satwa",
];

export default function ServiceAreas({ locations }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-pink font-semibold text-sm uppercase tracking-wider mb-2">
            Where We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
            Cleaning Services Across All of Dubai
          </h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            We cover all major Dubai communities and neighbourhoods. Same-day service available in most areas.
          </p>
        </div>

        {/* Featured location cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {locations.map((loc) => (
            <Link
              key={loc.id}
              href={`/locations/${loc.slug}`}
              className="group bg-brand-light hover:bg-brand-light-2 rounded-2xl p-6 transition-colors border border-transparent hover:border-brand-pink"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-brand-dark group-hover:text-brand-purple transition-colors">
                  {loc.name}
                </h3>
                <svg className="w-4 h-4 text-brand-pink mt-0.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-brand-gray text-sm leading-relaxed mb-3">
                {loc.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {loc.landmarks.slice(0, 3).map((landmark) => (
                  <span
                    key={landmark}
                    className="text-xs bg-white text-brand-gray px-2 py-0.5 rounded-full border border-gray-100"
                  >
                    {landmark}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* All areas pill list */}
        <div className="bg-brand-light rounded-2xl p-8">
          <h3 className="font-bold text-brand-dark text-center mb-6">
            All Areas We Cover in Dubai
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {allAreas.map((area) => (
              <span
                key={area}
                className="bg-white text-brand-gray text-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm"
              >
                {area}
              </span>
            ))}
            <span className="bg-brand-pink text-white text-sm px-4 py-2 rounded-full shadow-sm">
              + Many more
            </span>
          </div>
          <p className="text-center text-brand-gray text-sm mt-5">
            Not sure if we cover your area?{" "}
            <Link href="/contact" className="text-brand-pink font-semibold hover:underline">
              Ask us — we probably do.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
