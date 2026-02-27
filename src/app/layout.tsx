import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ClientProviders from "@/components/layout/ClientProviders";
import { COMPANY } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  title: {
    default:  "SBC Cleaning Services Dubai | Professional Cleaning Company UAE",
    template: "%s | SBC Cleaning Services Dubai",
  },
  description:
    "Professional cleaning services in Dubai — deep cleaning, office cleaning, villa cleaning, sofa & carpet cleaning. Fully licensed & insured. Call +971 52 133 7528.",
  keywords: [
    "cleaning services dubai",
    "deep cleaning dubai",
    "office cleaning dubai",
    "villa cleaning dubai",
    "sofa cleaning dubai",
    "move out cleaning dubai",
    "best cleaning company dubai",
    "SBC cleaning services",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  openGraph: {
    type:        "website",
    locale:      "en_AE",
    url:         COMPANY.siteUrl,
    siteName:    COMPANY.name,
    title:       "SBC Cleaning Services Dubai | Professional Cleaning Company UAE",
    description: "Professional cleaning services in Dubai. Deep cleaning, office cleaning, villa cleaning and more. Fully licensed & insured.",
    images: [
      {
        url:    "/images/og-image.jpg",
        width:  1200,
        height: 630,
        alt:    "SBC Cleaning Services Dubai",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "SBC Cleaning Services Dubai",
    description: "Professional cleaning services in Dubai. Licensed, insured & 5-star rated.",
  },
  robots: {
    index:        true,
    follow:       true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },
  alternates: {
    canonical: COMPANY.siteUrl,
    languages: {
      "en-AE": COMPANY.siteUrl,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en-AE" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7f4793" />
        {/* hreflang for UAE English */}
        <link rel="alternate" hrefLang="en-ae" href={COMPANY.siteUrl} />
        {/* GA4 */}
        {gaMeasurementId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans bg-white text-brand-dark antialiased">
        <ClientProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ClientProviders>
      </body>
    </html>
  );
}
