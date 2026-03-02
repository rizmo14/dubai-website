"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import { trackPhoneClick, trackWhatsAppClick, trackBookNowClick } from "@/lib/analytics";

/* ─── Slide data ──────────────────────────────────────────────────────────── */
const SLIDES = [
  {
    id: 1,
    titleKey: "hero.slide1.title",
    subtitleKey: "hero.slide1.subtitle",
    image: "/images/team-skyline.png",
  },
  {
    id: 2,
    titleKey: "hero.slide2.title",
    subtitleKey: "hero.slide2.subtitle",
    image: "/images/deep-cleaning.png",
  },
  {
    id: 3,
    titleKey: "hero.slide3.title",
    subtitleKey: "hero.slide3.subtitle",
    image: "/images/apartment-cleaning.png",
  },
] as const;

const SLIDE_INTERVAL = 5000;

export default function Hero() {
  const { t, lang, dir } = useLanguage();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const whatsappHref = `https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    COMPANY.whatsappMsg
  )}`;

  // Preload images in background
  useEffect(() => {
    SLIDES.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // Auto-play
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current]);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-brand-purple"
      style={{ height: "100vh", minHeight: 600, maxHeight: 1000 }}
      dir={dir}
      aria-label="Hero slider"
    >
      {/* ── Background slides ─────────────────────────────────────────────── */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className="absolute inset-0"
          style={{
            opacity: index === current ? 1 : 0,
            transform: index === current ? "scale(1)" : "scale(1.05)",
            transition: "opacity 800ms ease-in-out, transform 800ms ease-in-out",
            zIndex: index === current ? 2 : 1,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-brand-purple/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>
      ))}

      {/* ── Content — always visible ─────────────────────────────────────── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-5 py-2.5 rounded-full mb-8 border border-white/25">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              {t("general.availableToday")}
            </div>

            {/* Slide text */}
            <div className="relative" style={{ minHeight: 220 }}>
              {SLIDES.map((slide, index) => (
                <div
                  key={slide.id}
                  style={{
                    position: index === current ? "relative" : "absolute",
                    top: 0, left: 0, right: 0,
                    opacity: index === current ? 1 : 0,
                    transform: index === current ? "translateY(0)" : "translateY(30px)",
                    transition: "opacity 600ms ease-out, transform 600ms ease-out",
                    pointerEvents: index === current ? "auto" : "none",
                  }}
                >
                  <h1
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.05] mb-6 whitespace-pre-line ${
                      lang === "ar" ? "font-arabic" : ""
                    }`}
                    style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
                  >
                    {t(slide.titleKey)}
                  </h1>
                  <p
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-medium mb-8 max-w-2xl"
                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
                  >
                    {t(slide.subtitleKey)}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons — always visible */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/book"
                onClick={() => trackBookNowClick("hero")}
                className="inline-flex items-center gap-2 sm:gap-3 bg-brand-pink hover:bg-brand-pink-dark text-white font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-2xl shadow-2xl transition-all hover:-translate-y-1 text-base sm:text-lg lg:text-xl"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {t("hero.cta.book")}
              </Link>

              <a
                href={`tel:${COMPANY.phone}`}
                onClick={trackPhoneClick}
                className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-2xl border-2 border-white/40 transition-all hover:-translate-y-1 text-base sm:text-lg lg:text-xl"
                aria-label={`Call SBC: ${COMPANY.phoneDisplay}`}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t("hero.cta.call")}
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="inline-flex items-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-2xl shadow-2xl transition-all hover:-translate-y-1 text-base sm:text-lg lg:text-xl"
                aria-label="WhatsApp SBC Cleaning"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Slide dots ────────────────────────────────────────────────────── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: index === current ? 48 : 12,
              height: 12,
              backgroundColor: index === current ? "#f5687c" : "rgba(255,255,255,0.5)",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* ── Arrows ────────────────────────────────────────────────────────── */}
      <button
        onClick={() => goToSlide((current - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((current + 1) % SLIDES.length)}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ── Bottom stats bar ──────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-center gap-x-8 sm:gap-x-10 gap-y-2">
          {[
            { value: "500+", label: lang === "ar" ? "عميل سعيد" : "Happy Clients" },
            { value: "6", label: lang === "ar" ? "خدمات" : "Services" },
            { value: "4.9★", label: lang === "ar" ? "التقييم" : "Rating" },
            { value: "30min", label: lang === "ar" ? "رد واتساب" : "WhatsApp Reply" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-white">
              <span className="text-base sm:text-lg font-bold">{s.value}</span>
              <span className="text-white/60 text-xs sm:text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
