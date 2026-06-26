# Asim AC Services

**Production bilingual business website** for a Riyadh-based air-conditioning services company — built for local SEO, lead generation, and long-term maintainability.

| | |
| --- | --- |
| **Live site** | [asimacservices.com](https://www.asimacservices.com/) |
| **Arabic (default)** | [asimacservices.com/ar](https://www.asimacservices.com/ar) |
| **English** | [asimacservices.com/en](https://www.asimacservices.com/en) |
| **Client** | Asim AC Services · Riyadh · Al Olaya · KSA |
| **Status** | Launched (production on Vercel) |

---

## Who this README is for

| Audience | What you'll find here |
| --- | --- |
| **Clients & founders** | What the site does, pages included, SEO approach, and how leads are captured |
| **Recruiters & engineers** | Tech stack, architecture, folder structure, and engineering decisions |
| **Partners** | Credits, licensing, and how to contact the development team |

---

## Product overview

A **mobile-first, Arabic-first** marketing website for AC cleaning, repair, gas refill, installation, emergency service, and commercial HVAC in Riyadh.

### Core capabilities

- **12 page types × 2 locales = 24 indexed URLs** (Arabic + English)
- **WhatsApp-first booking** — pain-point cards, service CTAs, sticky mobile button, lead modal
- **Lead capture API** — form submission with optional Resend email + WhatsApp deep link
- **Work gallery** — curated photos and short videos from real field work
- **Service & area landing pages** — dedicated SEO pages per service and district focus (Al Olaya)
- **Light / dark theme** — global theme toggle with shared design tokens
- **RTL / LTR** — full layout mirror; Arabic is the default locale (`/ar`)

### Homepage sections (teaser)

Hero · pain-point strip · main services · emergency repair · why choose us · AC types & brands · Riyadh service areas · entity summary / internal links · work gallery · customer feedback · FAQ · trust & contact · footer lead form

---

## Technology stack

| Layer | Choice |
| --- | --- |
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, React Server Components) |
| **UI** | React 19 · TypeScript 5 |
| **Styling** | Tailwind CSS v4 · CSS Modules (section-scoped) · global design tokens in `globals.css` |
| **i18n** | Custom locale routing (`/ar`, `/en`) · middleware redirect · cookie persistence |
| **Forms & leads** | `react-phone-number-input` · `libphonenumber-js` · Resend (email) · optional CallMeBot |
| **Hosting** | [Vercel](https://vercel.com) |
| **Linting** | ESLint 9 · `eslint-config-next` |

---

## Project structure

```
asim-ac-services/
├── app/
│   ├── [locale]/                 # All public pages (ar / en)
│   │   ├── page.tsx              # Home
│   │   ├── [slug]/page.tsx       # Dynamic slug router (services, about, contact, areas)
│   │   ├── home/                 # Homepage sections + content
│   │   ├── about/                # About + full work gallery
│   │   ├── contact/              # Contact page
│   │   ├── service-areas/        # Riyadh districts hub
│   │   ├── ac-service-al-olaya/  # Al Olaya area landing page
│   │   └── shared/
│   │       ├── service-pages/    # Reusable service page template + content
│   │       └── area-pages/       # Reusable area page sections
│   ├── api/leads/route.ts        # Lead submission endpoint
│   ├── llms.txt/                 # AI discoverability (summary)
│   ├── llms-full.txt/            # AI discoverability (full)
│   ├── ai.txt/                   # AI crawler guidance
│   ├── sitemap.ts                # Dynamic sitemap (24 URLs + hreflang)
│   ├── robots.ts                 # Crawler rules + sitemap reference
│   └── manifest.ts               # PWA web manifest
├── components/
│   ├── layout/                   # Header, footer, nav, book buttons
│   ├── ui/                       # Lead modal, WhatsApp, theme toggle, icons
│   ├── i18n/                     # Locale HTML sync
│   └── providers/                # Theme provider
├── lib/
│   ├── constants/                # Brand, contact, services, gallery, credits, SEO links
│   ├── i18n/                     # Locale config + page registry (PAGE_IDS, slugs)
│   ├── leads/                    # Lead types, notify, WhatsApp URL builder
│   └── seo/                      # JSON-LD schemas, discoverability, sitemap priority
├── public/brand/                 # Logos, photos, videos, AC brand SVGs
├── docs/
│   ├── REQUIREMENTS.md           # Original bilingual specification
│   └── SEO.md                    # SEO strategy & implementation guide
├── middleware.ts                 # Locale detection & redirect
├── .env.example                  # Environment variable template
├── LICENSE.md                    # Copyright & usage terms
└── README.md                     # This file
```

---

## Pages & routing

All pages are registered in `lib/i18n/pages.ts`. Arabic uses localized slugs; English uses readable English slugs.

| Page | Arabic slug | English slug |
| --- | --- | --- |
| Home | `/ar` | `/en` |
| AC Services hub | `/ar/خدمة-مكيفات-الرياض` | `/en/ac-services-riyadh` |
| AC Repair | `/ar/تصليح-مكيفات-الرياض` | `/en/ac-repair-riyadh` |
| AC Cleaning | `/ar/تنظيف-مكيفات-الرياض` | `/en/ac-cleaning-riyadh` |
| AC Gas Refill | `/ar/تعبئة-فريون-مكيفات-الرياض` | `/en/ac-gas-refill-riyadh` |
| AC Installation | `/ar/تركيب-مكيفات-الرياض` | `/en/ac-installation-riyadh` |
| Emergency AC Repair | `/ar/صيانة-مكيفات-طارئة-الرياض` | `/en/emergency-ac-repair-riyadh` |
| Commercial HVAC | `/ar/صيانة-مكيفات-تجارية-الرياض` | `/en/commercial-hvac-riyadh` |
| Service Areas | `/ar/مناطق-خدمة-المكيفات-الرياض` | `/en/service-areas-riyadh` |
| Al Olaya | `/ar/صيانة-مكيفات-العليا-الرياض` | `/en/ac-service-al-olaya-riyadh` |
| About | `/ar/من-نحن` | `/en/about` |
| Contact | `/ar/اتصل-بنا` | `/en/contact` |

Root `/` redirects to `/ar` (default locale) via middleware.

---

## SEO, GEO & AI discoverability

Built for **Google local search**, **Arabic-first keywords**, and **AI answer engines**.

### On-page SEO

- Unique **title + meta description** per page and locale
- **Canonical URLs** and **`hreflang`** alternates (`ar`, `en`, `x-default` → Arabic)
- Semantic HTML headings (single H1 per page, logical H2/H3 hierarchy)
- **Internal linking** — homepage entity block, footer links, service cross-links
- **Image SEO** — descriptive `alt` text, Next.js `Image` optimization, curated `objectPosition`
- **Geo copy** — Riyadh, Al Olaya, KSA entity signals across pages

### Technical SEO

| Asset | Path | Purpose |
| --- | --- | --- |
| Sitemap | `/sitemap.xml` | 24 URLs with priority, change frequency, hreflang |
| Robots | `/robots.txt` | Allow crawlers; disallow `/api/` and `/_next/` |
| Web manifest | `/manifest.webmanifest` | PWA metadata, theme colors, icons |
| LLMs summary | `/llms.txt` | Structured site summary for AI crawlers |
| LLMs full | `/llms-full.txt` | Extended page summaries for AI indexing |
| AI guidance | `/ai.txt` | Crawler / citation guidance |

### Structured data (JSON-LD)

Implemented per page type in `lib/seo/`:

- **LocalBusiness** / provider entity
- **Service** pages schema
- **FAQPage** (homepage + service FAQs)
- **About** organization schema
- **Work gallery** `ImageObject` / video metadata
- **Area pages** local service schema

### Keyword focus (examples)

| Arabic | English |
| --- | --- |
| خدمة مكيفات الرياض | AC services Riyadh |
| تنظيف مكيفات الرياض | AC cleaning Riyadh |
| تصليح مكيفات الرياض | AC repair Riyadh |
| تعبئة فريون مكيفات الرياض | AC gas refill Riyadh |
| صيانة مكيفات العليا | AC service Al Olaya |

See [`docs/SEO.md`](./docs/SEO.md) for the full strategy, checklist, and post-launch indexing steps.

---

## Architecture principles

- **Content separated from UI** — page copy in `content.ts` files; components stay presentational
- **Single source of truth** — `PAGE_IDS`, `PAGES`, `SERVICES`, `CONTACT`, `BRAND` in `lib/constants/`
- **Reusable templates** — service pages and area pages share one layout, different content modules
- **Typed i18n** — `Record<Locale, string>` for all user-facing strings
- **Performance-first** — static generation where possible; optimized images and fonts
- **Accessible** — semantic landmarks, ARIA labels, keyboard-friendly nav, RTL-safe spacing

---

## Brand & design system

| Role | Color | Usage |
| --- | --- | --- |
| Primary | `#1B3A6B` (Deep Navy) | Header, footer, headings |
| Secondary | `#2E8BC0` (Sky Blue) | Buttons, accents, links |
| Accent | `#D32F2F` (Red) | Urgent CTAs |
| WhatsApp | Green gradient | Booking & chat actions |

**Tagline:** HIGH QUALITY • FAST SERVICE • AFFORDABLE PRICES  
**Slogan:** Cool Air... Better Life / هواء بارد... حياة أفضل

---

## Getting started

### Prerequisites

- Node.js 20+
- npm (or pnpm / yarn / bun)

### Install & run

```bash
git clone <repository-url>
cd asim-ac-services
npm install
cp .env.example .env   # then fill in values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — middleware redirects to `/ar`.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build + type check |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

### Environment variables

Copy `.env.example` to `.env` locally. On Vercel, set the same keys under **Project → Settings → Environment Variables**.

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Full site URL (`https://www.asimacservices.com`) |
| `RESEND_API_KEY` | For email leads | Resend API key for `/api/leads` |
| `LEAD_TO_EMAIL` | For email leads | Inbox that receives lead notifications |
| `LEAD_FROM_EMAIL` | For email leads | Verified sender (domain must be verified in Resend) |
| `CALLMEBOT_API_KEY` | Optional | WhatsApp alert to business owner |
| `CALLMEBOT_PHONE` | Optional | Owner phone for CallMeBot |

> **Note:** The lead form returns an error if neither Resend nor CallMeBot is configured. WhatsApp deep link opens only after a successful API response.

---

## Lead capture flow

1. User selects service / pain point and enters WhatsApp number (+ optional district & note)
2. `POST /api/leads` validates and calls `notifyLead()` in `lib/leads/notify-lead.ts`
3. On success → optional email to business + WhatsApp URL opened for the customer
4. Lead payload types defined in `lib/leads/types.ts`

---

## Documentation

| Document | Description |
| --- | --- |
| [`docs/REQUIREMENTS.md`](./docs/REQUIREMENTS.md) | Original bilingual requirements & site specification |
| [`docs/SEO.md`](./docs/SEO.md) | SEO strategy, schema, sitemap, and launch checklist |
| [`LICENSE.md`](./LICENSE.md) | Copyright and usage terms |

---

## Developed by

| | |
| --- | --- |
| **Devlotech** | Global Software Development & AI Solutions |
| **Website** | [devlotech.com](https://devlotech.com) |
| **Email** | [devlotechsocial@gmail.com](mailto:devlotechsocial@gmail.com) |
| **Umair Azmat** | Full-Stack Software Engineer |
| **Website** | [umairazmat.com](https://umairazmat.com) |
| **Email** | [umairazmatdev@gmail.com](mailto:umairazmatdev@gmail.com) |

**Want a website like this?** Contact Devlotech or Umair Azmat for new projects, partnerships, or engineering support.

Site credits also appear in the website footer on every page.

---

## License & copyright

Copyright © 2026 **Devlotech** & **Umair Azmat**. All rights reserved.

This repository and the Asim AC Services website are proprietary client work. Source may be published for portfolio demonstration; **no license is granted** to copy, reuse, or deploy without written permission from the copyright holders and the client.

See [`LICENSE.md`](./LICENSE.md) for full terms.

---

## Security note

Do **not** commit `.env`, API keys, or client credentials. Use Vercel environment variables for production secrets.
