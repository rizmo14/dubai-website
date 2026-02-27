"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/data";

type Props = { faqs: FAQ[] };

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-brand-light transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-brand-dark text-sm sm:text-base">
          {faq.question}
        </span>
        <svg
          className={`w-5 h-5 text-brand-pink flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <p className="px-6 py-4 text-brand-gray text-sm leading-relaxed bg-white border-t border-gray-50">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-pink font-semibold text-sm uppercase tracking-wider mb-2">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-gray">
            Everything you need to know about our cleaning services in Dubai.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
