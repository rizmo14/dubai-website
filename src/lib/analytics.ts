/* ─── GA4 Event Tracking Utility ─────────────────────────────────────────── */

type GtagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

/**
 * Fire a GA4 event. Safe to call even if gtag isn't loaded.
 */
export function trackEvent({ action, category, label, value }: GtagEvent) {
  if (typeof window === "undefined") return;
  if (!("gtag" in window)) return;

  // @ts-expect-error gtag global
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// ─── Pre-defined event helpers ──────────────────────────────────────────────

/** User clicked the phone call CTA */
export function trackPhoneClick() {
  trackEvent({
    action: "phone_click",
    category: "engagement",
    label: "phone_cta",
  });
}

/** User clicked the WhatsApp CTA */
export function trackWhatsAppClick() {
  trackEvent({
    action: "whatsapp_click",
    category: "engagement",
    label: "whatsapp_cta",
  });
}

/** User clicked Book Now */
export function trackBookNowClick(source: string = "unknown") {
  trackEvent({
    action: "book_now_click",
    category: "conversion",
    label: source,
  });
}

/** User started a booking (step 1 of wizard) */
export function trackBookingStart(service: string) {
  trackEvent({
    action: "booking_start",
    category: "conversion",
    label: service,
  });
}

/** User completed a booking (step 4 of wizard) */
export function trackBookingComplete(service: string) {
  trackEvent({
    action: "booking_complete",
    category: "conversion",
    label: service,
  });
}

/** User submitted the contact form */
export function trackContactFormSubmit() {
  trackEvent({
    action: "contact_form_submit",
    category: "conversion",
    label: "contact_page",
  });
}

/** User toggled language */
export function trackLanguageToggle(lang: string) {
  trackEvent({
    action: "language_toggle",
    category: "engagement",
    label: lang,
  });
}

/** User viewed a service page */
export function trackServiceView(service: string) {
  trackEvent({
    action: "service_view",
    category: "engagement",
    label: service,
  });
}

/** User viewed a blog post */
export function trackBlogView(slug: string) {
  trackEvent({
    action: "blog_view",
    category: "engagement",
    label: slug,
  });
}
