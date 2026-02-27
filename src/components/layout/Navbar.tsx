"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t, dir } = useLanguage();

  const navLinks = [
    { href: "/",         label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/about",    label: t("nav.about") },
    { href: "/blog",     label: t("nav.blog") },
    { href: "/contact",  label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const whatsappHref = `https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(COMPANY.whatsappMsg)}`;

  return (
    <header
      dir={dir}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="w-10 h-10 rounded-full bg-hero-gradient flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-brand-dark text-lg leading-tight block">
                SBC Cleaning
              </span>
              <span className="text-xs text-brand-gray leading-tight block">
                Services Dubai
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-dark font-medium hover:text-brand-pink transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTAs + Language Toggle */}
          <div className="flex items-center gap-2">
            {/* ── Language Toggle ─────────────────────────────────────────── */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 bg-brand-purple/10 hover:bg-brand-purple/20 text-brand-purple font-semibold px-3 py-2 rounded-lg text-sm transition-colors border border-brand-purple/20"
              aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="font-bold">
                {lang === "en" ? "عربي" : "EN"}
              </span>
            </button>

            {/* Click-to-call */}
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-1.5 bg-brand-light text-brand-purple font-semibold px-3 py-2 rounded-lg text-sm hover:bg-brand-light-2 transition-colors"
              aria-label="Call SBC Cleaning Services"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="hidden sm:inline">{COMPANY.phoneDisplay}</span>
              <span className="sm:hidden">{t("nav.call")}</span>
            </a>

            {/* Book Now — primary CTA */}
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center gap-1.5 bg-brand-pink hover:bg-brand-pink-dark text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              {t("nav.bookNow")}
            </Link>

            {/* WhatsApp CTA — desktop only */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-2 rounded-lg text-sm transition-colors"
              aria-label="WhatsApp SBC Cleaning"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("nav.whatsapp")}
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden text-brand-dark p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="bg-white px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block py-3 px-3 text-brand-dark font-medium rounded-lg hover:bg-brand-light hover:text-brand-purple transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {/* Book Now — mobile menu */}
          <Link
            href="/book"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 py-3 px-3 bg-brand-pink hover:bg-brand-pink-dark text-white font-bold rounded-lg mt-2 transition-colors"
          >
            📅 {t("nav.bookNow")}
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-3 px-3 bg-green-500 text-white font-semibold rounded-lg justify-center"
            onClick={closeMenu}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
