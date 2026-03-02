"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Lang = "en" | "ar";

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// ─── Translations ────────────────────────────────────────────────────────────
const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.home":       { en: "Home",       ar: "الرئيسية" },
  "nav.services":   { en: "Services",   ar: "خدماتنا" },
  "nav.about":      { en: "About",      ar: "من نحن" },
  "nav.blog":       { en: "Blog",       ar: "المدونة" },
  "nav.contact":    { en: "Contact",    ar: "اتصل بنا" },
  "nav.bookNow":    { en: "Book Now",   ar: "احجز الآن" },
  "nav.whatsapp":   { en: "WhatsApp",   ar: "واتساب" },
  "nav.call":       { en: "Call",       ar: "اتصل" },

  // Hero slides
  "hero.slide1.title":    { en: "Sumanawathi Building\nCleaning Services LLC", ar: "سومناواثي لخدمات\nتنظيف المباني ذ.م.م" },
  "hero.slide1.subtitle": { en: "Dubai's Most Trusted Cleaning Company", ar: "شركة التنظيف الأكثر ثقة في دبي" },
  "hero.slide2.title":    { en: "Deep Cleaning\nExperts", ar: "خبراء\nالتنظيف العميق" },
  "hero.slide2.subtitle": { en: "Sanitize & Refresh Every Corner of Your Home", ar: "عقّم وجدد كل زاوية في منزلك" },
  "hero.slide3.title":    { en: "Professional\nHome Cleaning", ar: "تنظيف منزلي\nاحترافي" },
  "hero.slide3.subtitle": { en: "Luxury Apartments Across Dubai, Spotless Every Time", ar: "شقق فاخرة في دبي، نظافة لا تشوبها شائبة" },
  "hero.cta.book":        { en: "Book Now", ar: "احجز الآن" },
  "hero.cta.call":        { en: "Call Us", ar: "اتصل بنا" },

  // Services section
  "services.label":       { en: "Our Services", ar: "خدماتنا" },
  "services.heading":     { en: "What Would You Like Cleaned?", ar: "ماذا تريد أن ننظف؟" },
  "services.bookNow":     { en: "Book Now", ar: "احجز الآن" },
  "services.learnMore":   { en: "Learn more →", ar: "اعرف المزيد ←" },
  "services.notSure":     { en: "Not sure which service you need?", ar: "لست متأكداً من الخدمة التي تحتاجها؟" },
  "services.notSureSub":  { en: "WhatsApp us — we'll recommend the best option.", ar: "راسلنا على واتساب — سنوصي بأفضل خيار." },
  "services.askWhatsApp": { en: "Ask on WhatsApp", ar: "اسأل عبر واتساب" },

  // Why Choose Us
  "why.licensed":     { en: "Licensed & Insured",    ar: "مرخصة ومؤمنة" },
  "why.rated":        { en: "5-Star Rated",           ar: "تقييم 5 نجوم" },
  "why.onTime":       { en: "On-Time, Every Time",    ar: "في الوقت المحدد، دائماً" },
  "why.eco":          { en: "Eco-Friendly Products",  ar: "منتجات صديقة للبيئة" },
  "why.whatsapp":     { en: "Easy WhatsApp Booking",  ar: "حجز سهل عبر واتساب" },
  "why.guarantee":    { en: "Satisfaction Guarantee", ar: "ضمان الرضا" },

  // General
  "general.availableToday": { en: "Available Today Across Dubai", ar: "متاح اليوم في جميع أنحاء دبي" },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[key]?.[lang] ?? key;
    },
    [lang]
  );

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
