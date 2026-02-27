import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/data";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light pt-20">
      <div className="max-w-2xl mx-auto px-4 text-center py-20">
        <div className="text-8xl mb-6">🧹</div>
        <h1 className="text-4xl font-bold text-brand-dark mb-3">Page Not Found</h1>
        <p className="text-brand-gray text-lg mb-8">
          Oops — looks like this page has been swept away! Let us help you find what you&apos;re looking for.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-pink hover:bg-brand-pink-dark text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-purple font-bold px-8 py-4 rounded-xl border border-gray-200 hover:border-brand-pink transition-colors"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-purple font-bold px-8 py-4 rounded-xl border border-gray-200 hover:border-brand-pink transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wider">
            Popular Services
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-1.5 text-sm text-brand-gray bg-brand-light hover:bg-brand-light-2 px-4 py-2 rounded-full transition-colors"
              >
                {s.icon} {s.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-brand-gray text-sm">
          Need help? Call us on{" "}
          <a href={`tel:${COMPANY.phone}`} className="text-brand-pink font-semibold hover:underline">
            {COMPANY.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
