# SBC Cleaning Services — Dubai Website

A professional, SEO-optimised Next.js 14 website for **SBC Cleaning Services** (`sbcservicesuae.com`) — Dubai's trusted cleaning company.

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Framework  | Next.js 14 (App Router)           |
| Language   | TypeScript (strict)               |
| Styling    | Tailwind CSS (custom brand palette)|
| CMS        | Headless WordPress + WPGraphQL (ready) |
| Hosting    | Vercel                            |
| Images     | next/image (WebP/AVIF)            |
| Sitemap    | next-sitemap                      |
| SEO        | Next.js Metadata API + JSON-LD    |

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   ├── not-found.tsx           # Custom 404
│   ├── services/
│   │   ├── page.tsx
│   │   ├── deep-cleaning-dubai/
│   │   ├── move-in-move-out-cleaning-dubai/
│   │   ├── office-cleaning-dubai/
│   │   ├── sofa-carpet-cleaning-dubai/
│   │   ├── villa-cleaning-dubai/
│   │   └── post-construction-cleaning-dubai/
│   └── locations/
│       ├── page.tsx
│       ├── cleaning-services-marina-dubai/
│       ├── cleaning-services-jlt-dubai/
│       ├── cleaning-services-business-bay-dubai/
│       ├── cleaning-services-downtown-dubai/
│       └── cleaning-services-jumeirah-dubai/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with mobile menu + CTAs
│   │   └── Footer.tsx          # Full footer with NAP, services, locations
│   ├── home/
│   │   ├── Hero.tsx            # Hero with Call + WhatsApp CTAs
│   │   ├── ServicesOverview.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ServiceAreas.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQSection.tsx
│   │   └── TrustBadges.tsx
│   ├── services/
│   │   ├── ServiceHero.tsx
│   │   ├── ServiceFAQ.tsx
│   │   └── ServiceCTA.tsx
│   ├── locations/
│   │   └── LocationHero.tsx
│   └── shared/
│       ├── WhatsAppButton.tsx  # Floating WhatsApp (all pages)
│       ├── Breadcrumb.tsx
│       ├── ContactForm.tsx
│       └── SchemaMarkup.tsx    # JSON-LD schemas
└── lib/
    ├── data.ts                 # All static content
    ├── api.ts                  # WPGraphQL API with static fallback
    └── serviceContent.ts       # Long-form service page content
```

---

## Local Development Setup

```bash
# 1. Navigate to project
cd sbc-cleaning

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.local.example .env.local

# 4. Start development server
npm run dev

# Open http://localhost:3000
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```env
# WordPress GraphQL (add when connecting Headless WP)
WP_GRAPHQL_URL=https://your-wp-site.com/graphql

# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console verification
NEXT_PUBLIC_GSC_VERIFICATION=your-gsc-code

# Site URL
NEXT_PUBLIC_SITE_URL=https://sbcservicesuae.com
```

---

## Vercel Deployment Steps

```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel --prod
```

1. Go to **Vercel Dashboard → Project → Settings → Environment Variables**
2. Add all variables from `.env.local.example`
3. Redeploy after adding env vars

### Domain Setup on Vercel

1. Go to **Vercel → Project → Settings → Domains**
2. Add `sbcservicesuae.com` and `www.sbcservicesuae.com`
3. Set DNS records at your registrar:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

---

## Connecting Headless WordPress + WPGraphQL

1. Install the **WPGraphQL** plugin on your WordPress site
2. Activate it — endpoint will be at `https://your-site.com/graphql`
3. Set `WP_GRAPHQL_URL=https://your-site.com/graphql` in environment variables
4. Update GraphQL queries in `src/lib/api.ts` to match your schema
5. Register CPTs for services and locations if needed

---

## Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://sbcservicesuae.com`
3. Verify via HTML meta tag
4. Add verification code to `.env.local`:
   ```env
   NEXT_PUBLIC_GSC_VERIFICATION=your-code
   ```
5. Redeploy to Vercel
6. Submit sitemap: `https://sbcservicesuae.com/sitemap.xml`

---

## Cloudflare Configuration (.ae Domain)

1. **SSL/TLS Mode**: Full (Strict)
2. **Always Use HTTPS**: On
3. **Auto Minify**: JS + CSS + HTML
4. **Brotli**: On

DNS (Cloudflare proxied):
```
A       @     76.76.21.21           (Proxied)
CNAME   www   cname.vercel-dns.com  (Proxied)
```

---

## Vercel Deployment Checklist

- [ ] `npm run build` passes locally with zero errors
- [ ] All environment variables set on Vercel
- [ ] Custom domain added, DNS propagated, SSL active
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] Google Search Console property verified
- [ ] Sitemap submitted to GSC
- [ ] GA4 tag firing (check Realtime)
- [ ] WhatsApp button functional on mobile
- [ ] Click-to-call working on mobile
- [ ] Contact form working end-to-end
- [ ] All internal links working
- [ ] No console errors in browser

---

## Brand Colours

| Token             | Hex       | Usage                |
|-------------------|-----------|----------------------|
| `brand-pink`      | `#f5687c` | Primary CTA, accents |
| `brand-pink-dark` | `#e0455a` | Hover states         |
| `brand-purple`    | `#7f4793` | Secondary, headings  |
| `brand-light`     | `#FCEEF5` | Section backgrounds  |
| `brand-dark`      | `#0F172A` | Headings, body       |
| `brand-gray`      | `#454F5E` | Body text            |

---

## Updating Content

All static content is in `src/lib/data.ts`:
- Company info (phone, email, address, hours, social links)
- Services list and pricing
- Location pages
- Testimonials
- FAQs
- Why Choose Us items

Long-form service page content is in `src/lib/serviceContent.ts`.

---

## Adding New Service Pages

1. Add service to `SERVICES` array in `src/lib/data.ts`
2. Add content to `SERVICE_CONTENT` in `src/lib/serviceContent.ts`
3. Create `src/app/services/[slug]/page.tsx` (copy from existing service page)
4. Add to `additionalPaths` in `next-sitemap.config.js`
