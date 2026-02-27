import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/data";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title:       "Cleaning Tips & Blog | SBC Cleaning Services Dubai",
  description: "Expert cleaning tips, guides, and advice for Dubai residents and businesses. How to maintain a clean home in Dubai's climate, cost guides, and more.",
  alternates:  { canonical: `${COMPANY.siteUrl}/blog` },
};

const blogPosts = [
  {
    slug:    "how-much-does-cleaning-cost-in-dubai",
    title:   "How Much Does Cleaning Cost in Dubai? 2024 Price Guide",
    excerpt: "A comprehensive guide to cleaning service prices in Dubai — from studio apartments to large villas. Includes pricing for deep cleaning, move-out cleaning, and office cleaning.",
    date:    "2024-11-15",
    category:"Price Guide",
    readTime:"5 min read",
  },
  {
    slug:    "best-cleaning-company-dubai-how-to-choose",
    title:   "How to Choose the Best Cleaning Company in Dubai",
    excerpt: "Key questions to ask, red flags to watch for, and what to look for when hiring a cleaning company in Dubai. Includes licensing, insurance, and vetting tips.",
    date:    "2024-10-22",
    category:"Tips & Advice",
    readTime:"4 min read",
  },
  {
    slug:    "deep-cleaning-before-ramadan-dubai",
    title:   "Why Deep Cleaning Before Ramadan Matters in Dubai",
    excerpt: "Preparing your home for Ramadan is a Dubai tradition. Here's why a professional deep clean is the best way to start the holy month — and what it should include.",
    date:    "2024-10-05",
    category:"Seasonal",
    readTime:"3 min read",
  },
  {
    slug:    "move-out-cleaning-deposit-dubai",
    title:   "Move-Out Cleaning & Getting Your Deposit Back in Dubai",
    excerpt: "Everything you need to know about end-of-tenancy cleaning in Dubai — what landlords check, what's required under RERA, and how to get your full deposit returned.",
    date:    "2024-09-18",
    category:"Tenant Tips",
    readTime:"6 min read",
  },
  {
    slug:    "office-cleaning-dubai-guide",
    title:   "Office Cleaning in Dubai: A Guide for Businesses",
    excerpt: "How often should your Dubai office be cleaned? What's included in a commercial cleaning contract? And how do you choose a reliable office cleaning company?",
    date:    "2024-08-30",
    category:"Commercial",
    readTime:"5 min read",
  },
  {
    slug:    "sofa-cleaning-dubai-how-often",
    title:   "How Often Should You Clean Your Sofa in Dubai?",
    excerpt: "Dubai's dust levels mean sofas need professional cleaning more often than you might think. Here's a practical guide to sofa cleaning frequency, signs it's time to book, and what to expect.",
    date:    "2024-08-12",
    category:"Sofa & Carpet",
    readTime:"4 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Blog" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Cleaning Tips & Guides for Dubai
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            Expert advice on keeping your home and office clean in Dubai&apos;s climate — from deep cleaning schedules to move-out tips.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                {/* Placeholder image */}
                <div className="h-48 bg-hero-gradient flex items-center justify-center text-white text-4xl">
                  🧹
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-brand-pink bg-brand-light px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-brand-dark text-lg mb-3 leading-snug group-hover:text-brand-purple transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-brand-gray text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-AE", {
                        year: "numeric", month: "long", day: "numeric",
                      })}
                    </span>
                    <span className="text-brand-purple text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Ready to book a professional clean in Dubai?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICES.slice(0, 3).map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 bg-white text-brand-purple border border-gray-200 font-medium px-5 py-2.5 rounded-xl text-sm hover:border-brand-pink hover:text-brand-pink transition-colors"
              >
                {s.icon} {s.title}
              </Link>
            ))}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-brand-pink text-white font-medium px-5 py-2.5 rounded-xl text-sm hover:bg-brand-pink-dark transition-colors"
            >
              All Services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
