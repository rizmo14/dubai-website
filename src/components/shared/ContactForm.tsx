"use client";

import { useState } from "react";
import { SERVICES, LOCATIONS, COMPANY } from "@/lib/data";

type FormState = "idle" | "submitting" | "success" | "error";

type Props = {
  servicePrefill?: string;
};

export default function ContactForm({ servicePrefill }: Props) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name:    "",
    phone:   "",
    email:   "",
    service: servicePrefill ?? "",
    area:    "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Track form submission event
    if (typeof window !== "undefined" && "gtag" in window) {
      // @ts-expect-error gtag global
      window.gtag("event", "form_submit", {
        event_category: "engagement",
        event_label:    "contact_form",
      });
    }

    // Simulate submission (replace with real API call)
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  };

  if (formState === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 mb-4">
          Thank you! We&apos;ll contact you within 30 minutes during business hours.
        </p>
        <a
          href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(COMPANY.whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Or WhatsApp Us Now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">
            Full Name <span className="text-brand-pink">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1">
            Phone / WhatsApp <span className="text-brand-pink">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+971 5X XXX XXXX"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-brand-dark mb-1">
            Service Required <span className="text-brand-pink">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent text-sm bg-white"
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-brand-dark mb-1">
            Your Area in Dubai
          </label>
          <select
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent text-sm bg-white"
          >
            <option value="">Select area</option>
            {LOCATIONS.map((l) => (
              <option key={l.id} value={l.name}>
                {l.name}
              </option>
            ))}
            <option value="Other">Other Dubai area</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Property size, preferred date, any special requirements..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold py-4 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {formState === "submitting" ? "Sending…" : "Get a Free Quote →"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We respond within 30 minutes · No spam, ever
      </p>
    </form>
  );
}
