import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, SERVICES } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blogContent";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title:       "Cleaning Tips & Blog | SBC Cleaning Services Dubai",
  description: "Expert cleaning tips, guides, and advice for Dubai residents and businesses. How to maintain a clean home in Dubai's climate, cost guides, and more.",
  alternates:  { canonical: `${COMPANY.siteUrl}/blog` },
};

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
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.featuredImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-brand-pink bg-brand-light px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h2 className="font-bold text-brand-dark text-lg mb-3 leading-snug group-hover:text-brand-purple transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="text-brand-gray text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
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
              </Link>
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
