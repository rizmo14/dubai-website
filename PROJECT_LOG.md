# SBC Cleaning Services Dubai — Project Log

## Project Overview

**Website:** [https://sbccleaningservices.ae](https://sbccleaningservices.ae)
**Business:** Sumanawathi Building Cleaning Services LLC
**Domain:** sbccleaningservices.ae (purchased from AEserver)
**Hosting:** Vercel (Hobby plan)
**Repository:** [github.com/rizmo14/dubai-website](https://github.com/rizmo14/dubai-website)
**Tech Stack:** Next.js 14.2.35, React 18, TypeScript, Tailwind CSS

---

## What Was Built

A fully responsive, bilingual (English/Arabic) website for a Dubai-based professional cleaning company. The site features:

- **Hero carousel** with 3 rotating slides showcasing services
- **6 service pages** — Deep Cleaning, Move-In/Move-Out, Office Cleaning, Sofa & Carpet, Villa Cleaning, Post-Construction
- **5 location pages** — Marina, JLT, Business Bay, Downtown, Jumeirah
- **6 blog posts** — SEO-optimized articles targeting Dubai cleaning-related keywords
- **Booking page** with WhatsApp integration
- **Contact page** with phone, WhatsApp, and email
- **About page** with company information
- **Privacy Policy & Terms** pages
- **Multi-language support** — English and Arabic via LanguageContext toggle
- **WhatsApp floating button** for instant customer contact
- **Structured data (Schema.org)** for SEO — LocalBusiness, Service, FAQ markup

---

## Tech Stack Details

| Component       | Technology                  |
|----------------|-----------------------------|
| Framework      | Next.js 14.2.35 (App Router) |
| Language       | TypeScript                   |
| Styling        | Tailwind CSS 3.4.1           |
| Hosting        | Vercel (auto-deploy from GitHub) |
| DNS            | Vercel DNS (ns1/ns2.vercel-dns.com) |
| Domain         | sbccleaningservices.ae (AEserver registrar) |
| Sitemap        | next-sitemap 4.2.3           |
| Analytics      | Google Analytics 4 (GA4)     |
| Images         | Next.js `<Image>` component with optimized JPGs |

---

## Key Milestones & Timeline

### 1. Initial Website Build
- Created Next.js project with App Router
- Built responsive layout with Tailwind CSS
- Implemented hero slider with 3 rotating slides
- Created 6 service detail pages with SEO metadata
- Added English/Arabic language toggle
- Integrated WhatsApp click-to-chat functionality

### 2. SEO Improvements
- Added 6 blog posts targeting Dubai cleaning keywords
- Created Privacy Policy and Terms pages
- Integrated Google Analytics 4 (GA4) tracking
- Added OpenGraph (OG) image generation route (`/og`)
- Implemented hreflang tags for multilingual SEO
- Added Schema.org structured data (LocalBusiness, Service, FAQ)
- Created comprehensive sitemap with prioritized URLs

### 3. Branded Image Replacement
- Replaced all Unsplash stock photos with AI-generated branded SBC images
- 6 custom images created for services and hero slides:
  - `team-skyline.jpg` — Team with Dubai skyline backdrop
  - `deep-cleaning.jpg` — Deep cleaning service
  - `apartment-cleaning.jpg` — Apartment/move-in cleaning
  - `sofa-carpet-cleaning.jpg` — Sofa and carpet cleaning
  - `villa-cleaning.jpg` — Villa cleaning service
  - `post-construction-cleaning.jpg` — Post-construction cleanup

### 4. Vercel Deployment & GitHub Integration
- Connected Vercel to `rizmo14/dubai-website` GitHub repository
- Set up auto-deployment on push to `main` branch
- Encountered Vercel infrastructure outage (Dubai dxb1 region) — Middleware Functions deploy globally and were blocked
- Build region: Washington D.C. (iad1), Function region: North America
- Successfully deployed after Vercel resolved the outage (~7 hours)

### 5. Domain Purchase & DNS Configuration
- Researched domain registrars: compared IONOS ($30/yr) vs AEserver ($34/yr)
- Chose **AEserver** — UAE-based, TDRA-accredited since 2008, 4.9/5 Trustpilot rating, lower renewal ($39.50/yr vs $60/yr)
- Purchased `sbccleaningservices.ae` domain
- Configured nameservers to Vercel:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`
- Added domain to Vercel project:
  - `sbccleaningservices.ae` → redirects to `www.sbccleaningservices.ae`
  - `www.sbccleaningservices.ae` → Production
  - Both showing "Valid Configuration" with SSL

### 6. Performance Optimization
- **Before:** Lighthouse Performance score: **81**
- Converted 6 PNG images to optimized JPGs using macOS `sips` tool:
  - Total size reduced from **3.9MB → 803KB (80% reduction)**
  - Individual file sizes:
    | Image | PNG Size | JPG Size | Savings |
    |-------|----------|----------|---------|
    | apartment-cleaning | 650KB | 129KB | 80% |
    | deep-cleaning | 576KB | 109KB | 81% |
    | post-construction-cleaning | 681KB | 146KB | 79% |
    | sofa-carpet-cleaning | 614KB | 119KB | 81% |
    | team-skyline | 643KB | 130KB | 80% |
    | villa-cleaning | 750KB | 170KB | 77% |
- Updated all image references across codebase (data.ts, Hero.tsx)
- Verified Next.js `<Image>` component already used in service cards with `fill`, `sizes`, and lazy loading
- **After:** Lighthouse Performance score: **91** (+10 points)

### 7. Domain & SEO Updates
- Updated `siteUrl` from `sbcservicesuae.com` to `sbccleaningservices.ae` in:
  - `src/lib/data.ts` (COMPANY.siteUrl)
  - `next-sitemap.config.js` (sitemap generation)
  - `src/app/og/route.tsx` (OG image text)
- Regenerated `sitemap.xml` and `sitemap-0.xml` with correct domain URLs
- Updated `robots.txt` with new domain host and sitemap URL

### 8. Google Search Console Setup (Completed)
- Added Google Search Console verification TXT record to Vercel DNS:
  - Record type: TXT
  - Value: `google-site-verification=ajbScyhxq19AlJkVtDsyH3lV8oFz-9DF25yc5_tb`
- DNS TXT verification was slow for `.ae` TLD — switched to **URL prefix** method
- Created HTML verification file (`public/googledfb4366bc9e760c5.html`) and deployed to Vercel
- **Ownership verified successfully** via HTML file method
- Submitted sitemap (`sitemap.xml`) to Google Search Console
- Google now crawling all 27 pages of the site
- Expect pages to appear in Google search results within 1-2 weeks

---

## Current Lighthouse Scores

| Metric          | Score |
|-----------------|-------|
| Performance     | **91** |
| Accessibility   | **92** |
| Best Practices  | **100** |
| SEO             | **100** |

*Note: Chrome extensions were affecting the Performance score during testing. Real score in incognito mode is likely 93-95+.*

---

## Site Architecture

```
sbccleaningservices.ae/
├── /                          → Homepage (hero slider, services overview, stats)
├── /services                  → Services index
│   ├── /deep-cleaning-dubai
│   ├── /move-in-move-out-cleaning-dubai
│   ├── /office-cleaning-dubai
│   ├── /sofa-carpet-cleaning-dubai
│   ├── /villa-cleaning-dubai
│   └── /post-construction-cleaning-dubai
├── /locations                 → Locations index
│   ├── /cleaning-services-marina-dubai
│   ├── /cleaning-services-jlt-dubai
│   ├── /cleaning-services-business-bay-dubai
│   ├── /cleaning-services-downtown-dubai
│   └── /cleaning-services-jumeirah-dubai
├── /blog                      → Blog index
│   ├── /how-much-does-cleaning-cost-in-dubai
│   ├── /best-cleaning-company-dubai-how-to-choose
│   ├── /deep-cleaning-before-ramadan-dubai
│   ├── /move-out-cleaning-deposit-dubai
│   ├── /office-cleaning-dubai-guide
│   └── /sofa-cleaning-dubai-how-often
├── /book                      → Booking page (WhatsApp integration)
├── /contact                   → Contact page
├── /about                     → About page
├── /privacy-policy            → Privacy Policy
├── /terms                     → Terms & Conditions
├── /og                        → Dynamic OG image generation
├── /sitemap.xml               → Sitemap index
├── /sitemap-0.xml             → URL sitemap
└── /robots.txt                → Robots configuration
```

---

## Git Commit History

```
d62bf6a Add Google Search Console verification file
b5e7206 Add detailed project log documenting all milestones and achievements
c3a98a6 Update sitemap and robots.txt to new sbccleaningservices.ae domain
6522271 Optimize images: convert PNGs to JPGs (80% size reduction) and update domain
55f426d Retry Vercel deployment
a4fea9b Trigger deployment after connecting rizmo14/dubai-website to Vercel
1d69d9a Trigger Vercel build after reconnecting Git
741dfef Trigger Vercel deployment
28c97fc Replace Unsplash stock images with branded SBC generated images
f506efe Fix: remove unused SERVICES import in blog post page
581a766 SEO improvements: blog posts, legal pages, GA4 tracking, OG image, hreflang
07117a1 Initial commit: SBC Cleaning website with hero slider and EN/AR toggle
85f3450 Initial commit from Create Next App
```

---

## Completed Checklist

- [x] Build responsive bilingual website (EN/AR)
- [x] Create 6 service pages with SEO metadata
- [x] Create 5 location pages targeting Dubai areas
- [x] Write 6 SEO blog posts
- [x] Add Schema.org structured data
- [x] Integrate Google Analytics 4
- [x] Replace stock images with branded AI-generated images
- [x] Deploy to Vercel with GitHub auto-deploy
- [x] Purchase sbccleaningservices.ae domain
- [x] Configure DNS and SSL
- [x] Optimize images (PNG → JPG, 80% size reduction)
- [x] Improve Lighthouse Performance (81 → 91)
- [x] Update sitemap and robots.txt to new domain
- [x] Verify Google Search Console ownership
- [x] Submit sitemap to Google for indexing

## Pending / Next Steps

- [ ] **Google My Business** — Set up GMB listing for local search visibility in Dubai
- [ ] **WhatsApp chatbot** — Research and integrate automated WhatsApp chatbot for customer inquiries
- [ ] **Hero carousel optimization** — Consider converting CSS `backgroundImage` to Next.js `<Image>` component for better performance (currently the only images not using Next.js optimization)
- [ ] **Email setup** — Configure business email (e.g., info@sbccleaningservices.ae) via domain email provider
- [ ] **Monitoring** — Set up uptime monitoring and error tracking
- [ ] **Content updates** — Regular blog posts for ongoing SEO improvement
- [ ] **DNS TXT verification** — Retry Google Search Console domain-level verification once `.ae` TXT record fully propagates (currently verified via URL prefix method)

---

## Key Accounts & Access

| Service | Account | Purpose |
|---------|---------|---------|
| Vercel | rizanmoham14@gmail.com | Hosting & deployment |
| GitHub | rizmo14 | Source code repository |
| AEserver | — | Domain registrar for sbccleaningservices.ae |
| Google Search Console | rizanmoham14@gmail.com (personal) | Search indexing & SEO monitoring |
| Google Analytics | GA4 | Website traffic analytics |

---

*Last updated: March 3, 2026*
