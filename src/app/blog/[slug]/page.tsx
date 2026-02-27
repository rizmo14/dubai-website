import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blogContent";
import { COMPANY } from "@/lib/data";
import Breadcrumb from "@/components/shared/Breadcrumb";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title:       post.metaTitle,
    description: post.metaDesc,
    alternates:  { canonical: `${COMPANY.siteUrl}/blog/${post.slug}` },
    openGraph: {
      title:       post.metaTitle,
      description: post.metaDesc,
      url:         `${COMPANY.siteUrl}/blog/${post.slug}`,
      type:        "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  // JSON-LD for blog post
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY.siteUrl}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-white bg-white/20 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-white/70">{post.readTime}</span>
            <span className="text-xs text-white/70">
              {new Date(post.date).toLocaleDateString("en-AE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
            {post.title}
          </h1>
          <p className="text-white/85 text-lg max-w-2xl">{post.excerpt}</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="space-y-6">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-brand-gray text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </article>

          {/* CTA */}
          <div className="mt-12 bg-brand-light rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-brand-dark mb-3">
              Need professional cleaning in Dubai?
            </h2>
            <p className="text-brand-gray mb-6">
              Get a free quote from SBC Cleaning Services — licensed, insured,
              and 5-star rated.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-brand-pink hover:bg-brand-pink-dark text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Book Now
              </Link>
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(COMPANY.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Related articles */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-brand-dark mb-6">
              More Cleaning Tips
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BLOG_POSTS.filter((p) => p.slug !== post.slug)
                .slice(0, 4)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <span className="text-xs text-brand-pink font-semibold">
                      {related.category}
                    </span>
                    <h4 className="font-bold text-brand-dark text-sm mt-1 leading-snug">
                      {related.title}
                    </h4>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
