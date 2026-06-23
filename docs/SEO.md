# SEO Strategy & Implementation Guide
# دليل استراتيجية وتحسين محركات البحث

**Asim AC Services** · خدمة المكيفات عاصم  
**Target market:** Riyadh, Saudi Arabia · Arabic-first · English for trust  
**Prepared for:** Umair — development, design, and content implementation

> **Public repository notice:** This document is a sanitized SEO specification. Live contact details, social URLs, and deployment secrets are managed privately with the client.

---

## Table of Contents

1. [Strategy Overview](#1-strategy-overview)
2. [Keyword Targets](#2-keyword-targets)
3. [Local SEO (Beyond the Website)](#3-local-seo-beyond-the-website)
4. [Keyword Usage Rules](#4-keyword-usage-rules)
5. [URL Structure & hreflang](#5-url-structure--hreflang)
6. [Pages to Build](#6-pages-to-build)
7. [Service Page Content Template](#7-service-page-content-template)
8. [Service Area Pages](#8-service-area-pages)
9. [Website Navigation](#9-website-navigation)
10. [Homepage Blueprint](#10-homepage-blueprint)
11. [FAQ Content](#11-faq-content)
12. [AI / GEO Optimization](#12-ai--geo-optimization)
13. [Mobile Conversion Rules](#13-mobile-conversion-rules)
14. [Conversion Tracking](#14-conversion-tracking)
15. [Next.js SEO Implementation](#15-nextjs-seo-implementation)
16. [Sitemap, Robots & Search Console](#16-sitemap-robots--search-console)
17. [Structured Data (Schema)](#17-structured-data-schema)
18. [Image SEO](#18-image-seo)
19. [Ranking Plan](#19-ranking-plan)
20. [Blog Topics (Post-Launch)](#20-blog-topics-post-launch)
21. [Minimum Launch Checklist](#21-minimum-launch-checklist)

---

## 1. Strategy Overview

### Core positioning

| Priority | Language | Purpose |
| --- | --- | --- |
| **1st** | Arabic | Primary audience — Riyadh customers search in Arabic |
| **2nd** | English | Trust and credibility for bilingual / expat customers |

The main keyword is **not** only “AC Services Riyadh.” In the Saudi market, Arabic search terms matter more for local discovery and conversion.

### Arabic-first recommendation

- Arabic should be the **default** and **strongest** content — not a thin translation of English.
- English supports trust but the real SEO competition in Riyadh is Arabic keywords.
- Default locale: `/ar` · Secondary: `/en`

### Document scope

This guide covers **SEO strategy**, **page metadata**, **content structure**, **conversion UX**, **technical implementation**, and **post-launch indexing** — not titles and descriptions alone.

---

## 2. Keyword Targets

### Primary Arabic keywords

| Keyword | Intent |
| --- | --- |
| خدمة مكيفات الرياض | Broad AC services |
| صيانة مكيفات الرياض | AC maintenance |
| تنظيف مكيفات الرياض | AC cleaning |
| تصليح مكيفات الرياض | AC repair |
| تعبئة فريون مكيفات الرياض | AC gas refill |
| فني مكيفات الرياض | AC technician |

### Primary English keywords

| Keyword | Intent |
| --- | --- |
| AC services Riyadh | Broad AC services |
| AC repair Riyadh | AC repair |
| AC cleaning Riyadh | AC cleaning |
| AC gas refill Riyadh | Gas check & refill |
| AC technician Riyadh | Technician search |
| emergency AC repair Riyadh | Urgent service |

---

## 3. Local SEO (Beyond the Website)

Google local ranking is based mainly on **relevance**, **distance**, and **prominence**. Website SEO alone is not enough.

### Required off-site and local factors

| Factor | Action |
| --- | --- |
| **Google Business Profile** | Same phone, email, website, and service area as the website |
| **Reviews** | Collect real customer reviews — do not fake ratings |
| **Citations** | Consistent NAP (name, address, phone) across directories |
| **WhatsApp** | Primary conversion channel; add click tracking |
| **Location consistency** | Riyadh + confirmed neighborhoods only — no fake coverage |

> Google states local ranking cannot be directly paid or requested. It depends on relevance, distance, prominence, and consistent business signals.

---

## 4. Keyword Usage Rules

### Do NOT use `<meta name="keywords">`

Google does **not** use the meta keywords tag for Search ranking. Do not waste time on it.

### Where to use keywords

Use target keywords naturally in:

- Page title (`<title>`)
- H1
- Body content
- H2 / H3 headings
- Image `alt` text
- Internal links (anchor text)
- Structured data (Schema.org)
- FAQ sections

---

## 5. URL Structure & hreflang

### Locale prefixes

Because the website is Arabic-default:

```
https://www.asimacservices.com/ar
https://www.asimacservices.com/en
```

Use **separate URLs** for Arabic and English, and add **hreflang** between them. Google recommends different URLs per language with `hreflang` to indicate localized versions.

### Slug strategy

| Approach | Example | Notes |
| --- | --- | --- |
| Arabic slugs (recommended) | `/ar/خدمة-مكيفات-الرياض` | Stronger for Arabic users; may encode when copied |
| English slugs (alternative) | `/ar/ac-services-riyadh` | Easier technical handling; weaker local signal |
| **Project recommendation** | `/ar/خدمة-مكيفات-الرياض` + `/en/ac-services-riyadh` | Arabic-first, better Saudi positioning |

### hreflang pattern

Every localized page should declare:

- `ar` → Arabic URL
- `en` → English URL
- `x-default` → Arabic URL (default locale)

---

## 6. Pages to Build

### 6.1 Home Page

| Item | Arabic | English |
| --- | --- | --- |
| **URL** | `/ar` | `/en` |
| **Page name** | الرئيسية | Home |
| **SEO title** | خدمة مكيفات في الرياض \| عاصم لخدمات المكيفات | AC Services in Riyadh \| Asim AC Services |
| **H1** | خدمة مكيفات في الرياض بسرعة وجودة عالية | Fast AC Services in Riyadh |
| **Meta description** | خدمة مكيفات عاصم في الرياض: تنظيف مكيفات، صيانة، فحص غاز، تعبئة فريون، تركيب وكشف تسربات. تواصل عبر واتساب الآن. | Asim AC Services in Riyadh for AC cleaning, repair, gas check, refill, installation, and leak detection. Fast WhatsApp booking. |
| **Primary keywords** | خدمة مكيفات الرياض، صيانة مكيفات الرياض | AC services Riyadh, AC repair Riyadh |

**Note:** Home targets the broad brand + city keyword. Do not try to cover every service deeply on this page. See [§10 Homepage Blueprint](#10-homepage-blueprint) for full section structure.

---

### 6.2 Main Money Page (highest SEO priority)

| Item | Arabic | English |
| --- | --- | --- |
| **URL** | `/ar/خدمة-مكيفات-الرياض` | `/en/ac-services-riyadh` |
| **Page name** | خدمة مكيفات الرياض | AC Services Riyadh |
| **SEO title** | خدمة مكيفات الرياض \| تنظيف وصيانة وتركيب \| عاصم | AC Services Riyadh \| Repair, Cleaning & Installation |
| **H1** | خدمة مكيفات الرياض — تنظيف، صيانة، تعبئة فريون وتركيب | AC Services in Riyadh — Cleaning, Repair, Gas Refill & Installation |
| **Meta description** | احجز خدمة مكيفات في الرياض مع عاصم: تنظيف شامل، فحص غاز، تعبئة فريون، تحسين التبريد، تركيب وصيانة للمنازل والمحلات. | Book AC services in Riyadh with Asim: complete cleaning, gas check, refill, cooling improvement, installation, and maintenance for homes and shops. |

**Content length target:**

- Arabic: **1,200–1,800 words**
- English: **800–1,200 words**

Follow the [service page template](#7-service-page-content-template).

---

### 6.3 AC Repair Page

| Item | Arabic | English |
| --- | --- | --- |
| **URL** | `/ar/تصليح-مكيفات-الرياض` | `/en/ac-repair-riyadh` |
| **Page name** | تصليح مكيفات الرياض | AC Repair Riyadh |
| **SEO title** | تصليح مكيفات الرياض \| فني مكيفات سريع \| عاصم | AC Repair Riyadh \| Fast AC Technician |
| **H1** | تصليح مكيفات في الرياض للمنازل والمحلات | AC Repair in Riyadh for Homes & Shops |
| **Meta description** | فني تصليح مكيفات في الرياض لفحص الأعطال، ضعف التبريد، التسريب، صوت المكيف، ومشاكل التشغيل. اطلب الخدمة عبر واتساب. | AC repair technician in Riyadh for cooling problems, leaks, noise, faults, and AC not working. Request fast service on WhatsApp. |
| **Keywords** | تصليح مكيفات الرياض، فني مكيفات الرياض، المكيف لا يبرد | AC repair Riyadh, AC technician Riyadh, AC not cooling Riyadh |

---

### 6.4 AC Cleaning Page

| Item | Arabic | English |
| --- | --- | --- |
| **URL** | `/ar/تنظيف-مكيفات-الرياض` | `/en/ac-cleaning-riyadh` |
| **Page name** | تنظيف مكيفات الرياض | AC Cleaning Riyadh |
| **SEO title** | تنظيف مكيفات الرياض \| تنظيف سبليت ومكيفات منزلية | AC Cleaning Riyadh \| Split AC Cleaning Service |
| **H1** | تنظيف مكيفات في الرياض لتحسين التبريد وجودة الهواء | AC Cleaning in Riyadh for Better Cooling & Air Quality |
| **Meta description** | خدمة تنظيف مكيفات في الرياض تشمل تنظيف الفلاتر والوحدة الداخلية وتحسين تدفق الهواء للمنازل والمحلات. احجز عبر واتساب. | AC cleaning service in Riyadh for filters, indoor units, better airflow, and improved cooling for homes and shops. Book on WhatsApp. |
| **Keywords** | تنظيف مكيفات الرياض، تنظيف مكيف سبليت الرياض | AC cleaning Riyadh, split AC cleaning Riyadh |

---

### 6.5 Gas Check & Refill Page

| Item | Arabic | English |
| --- | --- | --- |
| **URL** | `/ar/تعبئة-فريون-مكيفات-الرياض` | `/en/ac-gas-refill-riyadh` |
| **Page name** | تعبئة فريون مكيفات الرياض | AC Gas Refill Riyadh |
| **SEO title** | تعبئة فريون مكيفات الرياض \| فحص غاز المكيف | AC Gas Refill Riyadh \| AC Gas Check |
| **H1** | فحص غاز وتعبئة فريون مكيفات في الرياض | AC Gas Check & Refill in Riyadh |
| **Meta description** | فحص غاز المكيف وتعبئة فريون في الرياض مع كشف التسربات وتحسين التبريد للمكيفات السبليت والمركزية. | AC gas check and refill in Riyadh with leak detection and cooling improvement for split and central AC units. |
| **Keywords** | تعبئة فريون مكيفات الرياض، فحص غاز المكيف الرياض | AC gas refill Riyadh, AC gas check Riyadh |

---

### 6.6 AC Installation Page

| Item | Arabic | English |
| --- | --- | --- |
| **URL** | `/ar/تركيب-مكيفات-الرياض` | `/en/ac-installation-riyadh` |
| **Page name** | تركيب مكيفات الرياض | AC Installation Riyadh |
| **SEO title** | تركيب مكيفات الرياض \| تركيب مكيف سبليت ومركزي | AC Installation Riyadh \| Split & Central AC |
| **H1** | تركيب مكيفات في الرياض باحترافية | Professional AC Installation in Riyadh |
| **Meta description** | خدمة تركيب مكيفات في الرياض للمنازل والمحلات، تشمل مكيفات سبليت، شباك، مخفي، كاسيت ومكيفات مركزية. | Professional AC installation in Riyadh for homes and shops, including split, window, concealed, cassette, and central AC units. |
| **Keywords** | تركيب مكيفات الرياض، تركيب مكيف سبليت الرياض | AC installation Riyadh, split AC installation Riyadh |

---

### 6.7 Emergency AC Repair Page

High conversion priority — capture urgent search intent.

| Item | Arabic | English |
| --- | --- | --- |
| **URL** | `/ar/صيانة-مكيفات-طارئة-الرياض` | `/en/emergency-ac-repair-riyadh` |
| **Page name** | صيانة مكيفات طارئة الرياض | Emergency AC Repair Riyadh |
| **SEO title** | صيانة مكيفات طارئة الرياض \| خدمة سريعة | Emergency AC Repair Riyadh \| Fast Service |
| **H1** | صيانة مكيفات طارئة في الرياض | Emergency AC Repair in Riyadh |
| **Meta description** | المكيف توقف أو لا يبرد؟ اطلب صيانة مكيفات طارئة في الرياض مع فني مكيفات لخدمة سريعة عبر واتساب. | AC stopped working or not cooling? Request emergency AC repair in Riyadh with fast WhatsApp service. |
| **Keywords** | صيانة مكيفات طارئة الرياض، فني مكيفات سريع الرياض | emergency AC repair Riyadh, urgent AC service Riyadh |

---

### 6.8 Commercial HVAC Page

| Item | Arabic | English |
| --- | --- | --- |
| **URL** | `/ar/صيانة-مكيفات-تجارية-الرياض` | `/en/commercial-hvac-riyadh` |
| **Page name** | صيانة مكيفات تجارية الرياض | Commercial HVAC Riyadh |
| **SEO title** | صيانة مكيفات تجارية الرياض \| HVAC للمحلات والشركات | Commercial HVAC Riyadh \| Shops & Businesses |
| **H1** | صيانة مكيفات تجارية وأنظمة HVAC في الرياض | Commercial HVAC Maintenance in Riyadh |
| **Meta description** | خدمات صيانة مكيفات تجارية وأنظمة HVAC في الرياض للمحلات، المكاتب، المطاعم والشركات. اطلب عرض سعر. | Commercial HVAC maintenance in Riyadh for shops, offices, restaurants, and businesses. Request a quote. |
| **Keywords** | صيانة مكيفات تجارية الرياض، HVAC الرياض | commercial HVAC Riyadh, HVAC maintenance Riyadh |

---

### 6.9 About Page

Supports brand trust, E-E-A-T, and AI/GEO entity clarity. Not a primary keyword page, but required for navigation and credibility.

| Item | Arabic | English |
| --- | --- | --- |
| **URL** | `/ar/من-نحن` | `/en/about` |
| **Page name** | من نحن | About |
| **SEO title** | من نحن \| عاصم لخدمات المكيفات في الرياض | About Asim AC Services \| AC Technicians in Riyadh |
| **H1** | من نحن — خدمة المكيفات عاصم في الرياض | About Asim AC Services in Riyadh |
| **Meta description** | تعرف على عاصم لخدمات المكيفات في الرياض: فريق فنيين محترفين، خدمة سريعة للمنازل والمحلات، وتغطية الرياض والعليا. | Learn about Asim AC Services in Riyadh: professional technicians, fast service for homes and shops, covering Riyadh and Al Olaya. |

#### About page content structure

Build in this order:

1. **Brand story** — who Asim AC Services is and the service promise
2. **Years in business** — 1 year 2 months (update when changed)
3. **Service area** — Riyadh + Al Olaya coverage
4. **Residential and commercial focus** — homes, villas, shops, offices
5. **Technician experience** — skills, approach, quality standards
6. **Photos** — team, service van, tools (with SEO filenames and alt text)
7. **Trust badges** — fast service, quality, affordable pricing
8. **WhatsApp CTA** — primary conversion action

---

### 6.10 Contact Page

| Item | Arabic | English |
| --- | --- | --- |
| **URL** | `/ar/اتصل-بنا` | `/en/contact` |
| **Page name** | اتصل بنا | Contact |
| **SEO title** | اتصل بنا \| خدمة مكيفات الرياض \| عاصم | Contact Asim AC Services \| AC Services Riyadh |
| **H1** | تواصل مع عاصم لخدمات المكيفات في الرياض | Contact Asim AC Services in Riyadh |
| **Meta description** | احجز خدمة مكيفات في الرياض عبر واتساب أو نموذج التواصل. نخدم الرياض والعليا للمنازل والمحلات. | Book AC services in Riyadh via WhatsApp or contact form. We serve Riyadh and Al Olaya for homes and shops. |

Include: lead form, WhatsApp button, phone, email, service area text (Riyadh + Al Olaya), map/coverage display.

---

### Internal linking

Link between all service pages using natural anchor text (Arabic ↔ Arabic, English ↔ English). Example flows:

- Home → Main money page → individual service pages
- AC Repair ↔ Emergency AC Repair
- AC Services ↔ AC Cleaning, Repair, Gas Refill, Installation
- Commercial HVAC ↔ AC Services (commercial section)
- About ↔ Home, Service Areas hub
- Service Areas hub → Al Olaya page + individual service pages

---

## 7. Service Page Content Template

Every service page (§6.2–6.8) must follow this layout. Metadata alone is not enough — each page needs **full on-page content**.

### Standard section order

| # | Section | Purpose |
| --- | --- | --- |
| 1 | **Hero** | Service keyword + Riyadh + primary CTA (WhatsApp) |
| 2 | **Problem / pain** | Symptoms and customer frustrations |
| 3 | **What the service includes** | Deliverables and scope |
| 4 | **When you need this service** | Triggers and timing |
| 5 | **Service process** | Inspect → explain → fix → test |
| 6 | **AC types supported** | Split, window, central, cassette, etc. |
| 7 | **Why choose Asim** | Trust, speed, experience |
| 8 | **Service area** | Riyadh, Al Olaya, link to hub |
| 9 | **FAQ** | 4–6 service-specific questions |
| 10 | **WhatsApp CTA** | Final conversion block |
| 11 | **Related services** | Internal links to sibling pages |

### Content length targets

| Page type | Arabic | English |
| --- | --- | --- |
| Main money page | 1,200–1,800 words | 800–1,200 words |
| Individual service pages | 800–1,200 words | 600–900 words |
| Emergency page | 600–900 words | 500–700 words |

---

### Example: AC Repair page H2 structure

**Arabic H1:**  
تصليح مكيفات في الرياض للمنازل والمحلات

**Arabic H2 headings:**

| H2 |
| --- |
| متى تحتاج إلى تصليح المكيف؟ |
| أسباب ضعف تبريد المكيف |
| كيف نفحص عطل المكيف؟ |
| خدمة تصليح مكيفات للمنازل والمحلات |
| أسئلة شائعة عن تصليح المكيفات في الرياض |

**English H1:**  
AC Repair in Riyadh for Homes & Shops

**English H2 headings:**

| H2 |
| --- |
| When Do You Need AC Repair? |
| Common Causes of Weak AC Cooling |
| How We Diagnose AC Faults |
| AC Repair for Homes and Shops |
| Frequently Asked Questions About AC Repair in Riyadh |

---

### H2 templates for other service pages

Adapt the pattern above per service. Use the primary keyword naturally in at least one H2.

| Page | Arabic H2 examples | English H2 examples |
| --- | --- | --- |
| **AC Services (money)** | ماذا تشمل خدمة مكيفات الرياض؟ / متى تحتاج فني مكيفات؟ / خدماتنا للمنازل والمحلات | What AC Services Do We Provide in Riyadh? / When Should You Call an AC Technician? / Services for Homes and Shops |
| **AC Cleaning** | لماذا تنظيف المكيف مهم في الرياض؟ / ماذا يشمل تنظيف مكيف سبليت؟ / كم مرة تحتاج تنظيف المكيف؟ | Why AC Cleaning Matters in Riyadh / What Does Split AC Cleaning Include? / How Often Should You Clean Your AC? |
| **Gas Refill** | علامات نقص فريون المكيف / متى تحتاج فحص غاز المكيف؟ / خطوات فحص الغاز والتعبئة | Signs Your AC Needs Gas Refill / When to Check AC Gas Levels / Our Gas Check and Refill Process |
| **Installation** | أنواع المكيفات التي نركبها / تركيب مكيف سبليت في الرياض / ماذا يشمل التركيب الاحترافي؟ | AC Types We Install / Split AC Installation in Riyadh / What Professional Installation Includes |
| **Emergency** | متى تحتاج صيانة مكيفات طارئة؟ / خدمة سريعة عبر واتساب / أعطال المكيف التي نعالجها فوراً | When Is Emergency AC Repair Needed? / Fast WhatsApp Booking / Urgent AC Problems We Fix |
| **Commercial HVAC** | صيانة مكيفات للمحلات والمكاتب / أنظمة HVAC التجارية / عقود صيانة للشركات | HVAC for Shops and Offices / Commercial AC Systems We Maintain / Maintenance for Businesses |

---

## 8. Service Area Pages

### 8.1 Service Areas hub (required at launch)

Central index page linked from navigation (“مناطق الخدمة” / “Service Areas”).

| Item | Arabic | English |
| --- | --- | --- |
| **URL** | `/ar/مناطق-خدمة-المكيفات-الرياض` | `/en/service-areas-riyadh` |
| **Page name** | مناطق خدمة المكيفات في الرياض | AC Service Areas in Riyadh |
| **SEO title** | مناطق خدمة المكيفات في الرياض \| عاصم | AC Service Areas in Riyadh \| Asim AC Services |
| **H1** | مناطق خدمة المكيفات في الرياض | AC Service Areas in Riyadh |
| **Meta description** | نقدم خدمة مكيفات في الرياض والعليا للمنازل والفلل والمحلات والمكاتب. اكتشف مناطق التغطية واحجز عبر واتساب. | We provide AC services in Riyadh and Al Olaya for homes, villas, shops, and offices. Explore coverage areas and book on WhatsApp. |

#### Hub page should link to

- **Riyadh** (city-wide) → main money page
- **Al Olaya** → neighborhood page
- **Nearby areas** → only when real coverage is confirmed
- **Homes / villas** → residential angle on AC Services page
- **Shops / offices** → Commercial HVAC page

Do not list 30 neighborhoods at launch. Start with confirmed areas only.

---

### 8.2 Al Olaya neighborhood page (launch now)

| URL | Page name | SEO target |
| --- | --- | --- |
| `/ar/صيانة-مكيفات-العليا-الرياض` | صيانة مكيفات العليا الرياض | Al Olaya Riyadh |
| `/en/ac-service-al-olaya-riyadh` | AC Service Al Olaya Riyadh | Al Olaya AC Service |

Follow the [service page template](#7-service-page-content-template) with neighborhood-specific copy.

---

### 8.3 Add later (only when service is real in that area)

Do **not** create thin location pages. Thin neighborhood pages look spammy and hurt trust.

| Arabic URL | English URL |
| --- | --- |
| `/ar/صيانة-مكيفات-الملقا-الرياض` | `/en/ac-service-al-malqa-riyadh` |
| `/ar/صيانة-مكيفات-الياسمين-الرياض` | `/en/ac-service-al-yasmin-riyadh` |
| `/ar/صيانة-مكيفات-النرجس-الرياض` | `/en/ac-service-al-narjis-riyadh` |
| `/ar/صيانة-مكيفات-الروضة-الرياض` | `/en/ac-service-al-rawdah-riyadh` |
| `/ar/صيانة-مكيفات-السليمانية-الرياض` | `/en/ac-service-al-sulaimaniyah-riyadh` |

**Current requirement:** Launch with **Riyadh**, **Service Areas hub**, and **Al Olaya** only.

---

## 9. Website Navigation

Use “AC Services” instead of generic “Services” — it carries the target keyword.

### Arabic menu

| Label | Route |
| --- | --- |
| الرئيسية | `/ar` |
| خدمات المكيفات | `/ar/خدمة-مكيفات-الرياض` |
| من نحن | `/ar/من-نحن` |
| مناطق الخدمة | `/ar/مناطق-خدمة-المكيفات-الرياض` |
| اتصل بنا | `/ar/اتصل-بنا` |

### English menu

| Label | Route |
| --- | --- |
| Home | `/en` |
| AC Services | `/en/ac-services-riyadh` |
| About | `/en/about` |
| Service Areas | `/en/service-areas-riyadh` |
| Contact | `/en/contact` |

---

## 10. Homepage Blueprint

Use this **exact section order** for design, development, SEO, and conversion. This is the full homepage specification — not a summary.

| # | Section | Dev / UX notes |
| --- | --- | --- |
| 1 | **Top Contact Bar** | Phone, WhatsApp, hours; visible on desktop; compact on mobile |
| 2 | **Header / Navigation** | Logo, menu, language switch, mobile hamburger |
| 3 | **Hero Section** | H1, subheadline, primary WhatsApp CTA, secondary call CTA; short copy only |
| 4 | **Trust Badges** | Quality, fast service, affordable, Riyadh coverage |
| 5 | **Quick Quote / Problem Selector Form** | Service type + problem dropdown; submits to WhatsApp or lead handler |
| 6 | **AC Services We Provide** | Cards linking to each service page |
| 7 | **Emergency AC Repair Block** | Urgent messaging + direct WhatsApp; links to emergency page |
| 8 | **Why Choose Asim AC Services** | Differentiators, experience, local focus |
| 9 | **AC Types We Service** | Split, window, central, cassette, duct, packaged |
| 10 | **AC Brands We Handle** | Major brands serviced (LG, Samsung, Carrier, etc. — confirm with client) |
| 11 | **Homes & Businesses Section** | Residential + commercial split with internal links |
| 12 | **Service Areas in Riyadh** | Riyadh + Al Olaya; link to Service Areas hub |
| 13 | **Work Gallery** | 10–15 real before/after photos; WebP; SEO alt text |
| 14 | **Customer Testimonials** | Real reviews only; no fake ratings in schema |
| 15 | **FAQs** | 5 core questions; FAQ schema on homepage |
| 16 | **Final WhatsApp CTA** | Full-width conversion block |
| 17 | **Footer** | NAP, service links, service areas, social, language, SEO footer links |

### Mobile-only additions (see [§13](#13-mobile-conversion-rules))

- Sticky WhatsApp button (persistent)
- Sticky Call button (persistent)
- Popup / bottom sheet for quick quote (once per session)

### H2 heading examples

**Arabic:**

| Section | H2 |
| --- | --- |
| AC Services We Provide | تشمل خدمة المكيفات |
| Emergency block | صيانة مكيفات طارئة في الرياض |
| Why choose us | لماذا تختار عاصم لخدمات المكيفات؟ |
| AC types | أنواع المكيفات التي نقوم بصيانتها |
| AC brands | ماركات المكيفات التي نخدمها |
| Homes & businesses | خدمة مكيفات للمنازل والمحلات في الرياض |
| Service areas | مناطق الخدمة في الرياض |
| FAQ | أسئلة شائعة |
| Entity summary (AI/GEO) | *(see [§12](#12-ai--geo-optimization))* |

**English:**

| Section | H2 |
| --- | --- |
| AC Services We Provide | AC Services We Provide |
| Emergency block | Emergency AC Repair in Riyadh |
| Why choose us | Why Choose Asim AC Services? |
| AC types | AC Types We Service |
| AC brands | AC Brands We Handle |
| Homes & businesses | AC Services for Homes and Shops in Riyadh |
| Service areas | Service Areas in Riyadh |
| FAQ | Frequently Asked Questions |

### Footer SEO content

Footer should include crawlable links to:

- All main service pages
- About, Contact, Service Areas hub
- Al Olaya page
- Privacy policy (if applicable)

---

## 11. FAQ Content

FAQ sections help capture long-tail searches. Add **FAQPage** schema only on pages where these FAQs actually appear.

### Arabic FAQ

**هل توفرون خدمة مكيفات في الرياض؟**  
نعم، نقدم خدمة مكيفات في الرياض تشمل التنظيف، الصيانة، فحص الغاز، التعبئة، التركيب وكشف التسربات.

**هل تقدمون تنظيف مكيفات سبليت؟**  
نعم، نوفر تنظيف مكيفات سبليت لتحسين التبريد وتدفق الهواء وتقليل الغبار.

**متى يحتاج المكيف إلى تعبئة فريون؟**  
إذا كان المكيف لا يبرد جيداً أو يوجد ضعف في التبريد، قد يحتاج إلى فحص الغاز أو كشف تسرب قبل التعبئة.

**هل تعملون في حي العليا؟**  
نعم، نقدم خدمة مكيفات في الرياض ومنطقة العليا حسب توفر الموعد.

**هل يوجد أسعار ثابتة؟**  
الأسعار تعتمد على نوع الخدمة وحالة المكيف. يمكنك طلب عرض سعر عبر واتساب.

### English FAQ

**Do you provide AC services in Riyadh?**  
Yes, we provide AC services in Riyadh including cleaning, repair, gas check, refill, installation, and leak detection.

**Do you clean split AC units?**  
Yes, we provide split AC cleaning to improve cooling, airflow, and indoor air quality.

**When does an AC need gas refill?**  
If the AC is not cooling properly, it may need gas checking or leak detection before refill.

**Do you serve Al Olaya?**  
Yes, we provide AC services in Riyadh and Al Olaya based on appointment availability.

**Do you show fixed prices?**  
Prices depend on the service type and AC condition. You can request a quote on WhatsApp.

---

## 12. AI / GEO Optimization

Generative Engine Optimization (GEO) and AI summaries work best when every main page clearly answers five entity questions.

### Required on every main page

Each page must make it obvious:

| Question | What to state |
| --- | --- |
| **Who** is Asim AC Services? | Local AC service provider in Riyadh |
| **What** services are provided? | Cleaning, repair, gas check, refill, installation, leak detection, duct work, HVAC |
| **Where** are services available? | Riyadh, Al Olaya (expand only when real) |
| **Who** are services for? | Homes, villas, shops, offices, businesses |
| **How** can customers book? | WhatsApp (primary), phone, contact form |
| **What problems** are solved? | Not cooling, leaks, noise, gas loss, installation, emergency breakdown |

### Homepage entity summary block

Place a short, visible paragraph on the homepage (and repeat a variant on About). This helps Google, AI overviews, and users understand the business immediately.

**English:**

> Asim AC Services is an AC service provider in Riyadh, Saudi Arabia, offering AC cleaning, repair, gas check, gas refill, installation, leak detection, duct work, and HVAC services for homes, villas, shops, offices, and businesses.

**Arabic:**

> خدمة المكيفات عاصم تقدم خدمات تنظيف وصيانة وتصليح وتركيب المكيفات في الرياض، وتشمل فحص الغاز، تعبئة الفريون، كشف التسربات، أعمال الدكت وأنظمة HVAC للمنازل والفلل والمحلات والمكاتب.

### Implementation rules

- Use plain language — no keyword stuffing
- Keep entity facts consistent across website, GBP, and social profiles
- Match structured data to visible on-page content (no misleading schema)

---

## 13. Mobile Conversion Rules

Most AC service leads in Riyadh come from **mobile search**. Design mobile-first, not desktop-first with mobile as an afterthought.

Google documents mobile-first indexing — keep equivalent metadata and primary content on mobile and desktop.

### Rules

| Rule | Requirement |
| --- | --- |
| **Sticky WhatsApp** | Persistent floating button on all pages |
| **Sticky Call** | Persistent phone button alongside WhatsApp |
| **Hero CTA** | Full-width primary button above the fold |
| **Form touch targets** | Minimum 44×44px; large inputs; minimal fields |
| **Above-the-fold copy** | Short headline + CTA — no long paragraph blocks |
| **Popup behavior** | Quick quote popup appears **once per session** only |
| **Modal on mobile** | Popup becomes bottom sheet on small screens |
| **Images** | WebP, lazy-loaded, optimized for LCP |
| **Page speed** | Target good Core Web Vitals on mobile |

### Mobile CTA priority

1. WhatsApp click
2. Call click
3. Quick quote form / popup submit
4. Full contact form

---

## 14. Conversion Tracking

SEO without conversion tracking is incomplete. Implement event tracking from day one.

### Events to track

| Event name | Trigger |
| --- | --- |
| `whatsapp_click` | Any WhatsApp link or button tap |
| `call_click` | `tel:` link tap |
| `lead_form_submit` | Contact page form submission |
| `popup_open` | Quick quote popup opened |
| `popup_submit` | Quick quote popup submitted |
| `service_card_click` | Service card tap on homepage or hub |
| `language_switch` | Arabic ↔ English toggle |
| `map_location_click` | Service area / map interaction |

### Priority conversions (report weekly)

1. **WhatsApp click** — primary lead channel
2. **Call click** — secondary urgent channel
3. **Lead form submit** — contact page
4. **Popup submit** — homepage quick quote

### Implementation notes

- Pass `service` and `page` as event parameters where possible
- Use Google Analytics 4 (or agreed analytics stack)
- Optionally link GA4 to Google Ads if paid campaigns are added later
- Do not block page render waiting for analytics scripts

---

## 15. Next.js SEO Implementation

Use Next.js **Metadata API** (`metadata` export or `generateMetadata`) on every page. See [Next.js Metadata docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata).

### Example: Main money page (Arabic)

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدمة مكيفات الرياض | تنظيف وصيانة وتركيب | عاصم",
  description:
    "احجز خدمة مكيفات في الرياض مع عاصم: تنظيف شامل، فحص غاز، تعبئة فريون، تحسين التبريد، تركيب وصيانة للمنازل والمحلات.",
  alternates: {
    canonical: "https://www.asimacservices.com/ar/خدمة-مكيفات-الرياض",
    languages: {
      ar: "https://www.asimacservices.com/ar/خدمة-مكيفات-الرياض",
      en: "https://www.asimacservices.com/en/ac-services-riyadh",
      "x-default": "https://www.asimacservices.com/ar/خدمة-مكيفات-الرياض",
    },
  },
  openGraph: {
    title: "خدمة مكيفات الرياض | عاصم لخدمات المكيفات",
    description:
      "تنظيف وصيانة وتركيب وتعبئة فريون مكيفات في الرياض. تواصل عبر واتساب الآن.",
    url: "https://www.asimacservices.com/ar/خدمة-مكيفات-الرياض",
    siteName: "Asim AC Services",
    locale: "ar_SA",
    type: "website",
  },
};
```

### Per-page metadata checklist

- [ ] Unique `title` and `description`
- [ ] `alternates.canonical` — full absolute URL
- [ ] `alternates.languages` — `ar`, `en`, `x-default`
- [ ] Open Graph title, description, url, locale
- [ ] Single H1 matching the spec (in page content, not metadata)
- [ ] No `<meta name="keywords">`
- [ ] Mobile and desktop serve equivalent primary content

---

## 16. Sitemap, Robots & Search Console

### `app/sitemap.ts`

Next.js supports a [sitemap file convention](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap). Generate entries for **all** Arabic and English URLs:

- Home, About, Contact
- All 8 service pages
- Service Areas hub
- Al Olaya neighborhood page
- Blog posts (when published)

```ts
import type { MetadataRoute } from "next";

const BASE = "https://www.asimacservices.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { ar: "/ar", en: "/en" },
    { ar: "/ar/خدمة-مكيفات-الرياض", en: "/en/ac-services-riyadh" },
    { ar: "/ar/تصليح-مكيفات-الرياض", en: "/en/ac-repair-riyadh" },
    // ... all localized page pairs
  ];

  return pages.flatMap(({ ar, en }) => [
    { url: `${BASE}${ar}`, lastModified: new Date(), alternates: { languages: { ar: `${BASE}${ar}`, en: `${BASE}${en}` } } },
    { url: `${BASE}${en}`, lastModified: new Date(), alternates: { languages: { ar: `${BASE}${ar}`, en: `${BASE}${en}` } } },
  ]);
}
```

### `app/robots.ts`

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.asimacservices.com/sitemap.xml",
  };
}
```

### Post-launch indexing checklist

| Task | Tool |
| --- | --- |
| Verify domain ownership | Google Search Console |
| Verify domain ownership | Bing Webmaster Tools |
| Submit sitemap | GSC + Bing |
| URL inspection for key pages | GSC (home, money page, top services) |
| Check indexed pages | GSC Coverage report |
| Check mobile usability | GSC Mobile Usability |
| Check Core Web Vitals | GSC + PageSpeed Insights |
| Fix 404 errors | GSC + server logs |
| Confirm hreflang | GSC International Targeting |
| Match GBP website URL | Google Business Profile |

Run this checklist within **48 hours** of production launch, then weekly for the first month.

---

## 17. Structured Data (Schema)

Add **LocalBusiness** structured data on all main service pages, homepage, About, and Contact. Google uses this to understand business details for Search and Maps-type results.

Structured data must match **visible page content** and must not be misleading.

### Enhanced LocalBusiness example

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Asim AC Services",
  "alternateName": "خدمة المكيفات عاصم",
  "description": "AC cleaning, repair, gas refill, installation, leak detection, duct work, and HVAC services in Riyadh.",
  "telephone": "+966547524002",
  "email": "asimacservices@gmail.com",
  "url": "https://www.asimacservices.com",
  "priceRange": "Request a Quote",
  "areaServed": ["Riyadh", "Al Olaya"],
  "availableLanguage": ["Arabic", "English"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Riyadh",
    "addressRegion": "Riyadh Province",
    "addressCountry": "SA"
  },
  "sameAs": [
    "https://www.facebook.com/PLACEHOLDER",
    "https://www.instagram.com/PLACEHOLDER",
    "https://www.tiktok.com/PLACEHOLDER"
  ]
}
```

Replace `PLACEHOLDER` social URLs with real client profiles before launch.

### Schema by page type

| Page type | Schema types |
| --- | --- |
| Homepage | LocalBusiness, FAQPage |
| Service pages | LocalBusiness, FAQPage (if FAQ present), Service |
| About | LocalBusiness, Organization |
| Contact | LocalBusiness |
| Service Areas hub | LocalBusiness, ItemList (area links) |
| Blog posts | Article, FAQPage (if FAQ in post) |

### Rules

- **Do not** add fake reviews or fake `aggregateRating`.
- Only add **Review** schema when real testimonials are published with verifiable content.
- Add **FAQPage** schema only where the FAQ block exists on that page.
- Keep `areaServed` aligned with real coverage — do not list neighborhoods you do not serve.

---

## 18. Image SEO

### File naming (before upload)

| Filename |
| --- |
| `asim-ac-service-riyadh-technician.webp` |
| `asim-ac-cleaning-riyadh-villa.webp` |
| `asim-ac-repair-riyadh-emergency.webp` |
| `asim-ac-services-team-riyadh.webp` |
| `commercial-hvac-service-riyadh.webp` |
| `asim-ac-service-van-riyadh.webp` |

### Alt text examples

**Arabic:**

- فني مكيفات من خدمة المكيفات عاصم يقوم بصيانة مكيف في الرياض
- فريق عاصم لخدمات المكيفات في الرياض
- سيارة خدمة مكيفات عاصم في الرياض
- صيانة مكيفات تجارية وأنظمة HVAC في الرياض

**English:**

- Asim AC Services technician repairing an AC unit in Riyadh
- Asim AC Services team in Riyadh
- Asim AC service van in Riyadh
- Commercial HVAC maintenance service in Riyadh

---

## 19. Ranking Plan

Execute in this order to compete for **خدمة مكيفات الرياض** and **AC services Riyadh**:

| Step | Action |
| --- | --- |
| 1 | Build all core SEO pages + About + Service Areas hub (see [§21](#21-minimum-launch-checklist)) |
| 2 | Implement homepage blueprint with conversion sections (§10) |
| 3 | Write Arabic content first — original, full-length per service template (§7) |
| 4 | Add entity summary block on homepage and About (§12) |
| 5 | Implement `sitemap.ts` and `robots.ts` (§16) |
| 6 | Set up conversion tracking events (§14) |
| 7 | Set up Google Business Profile (matching NAP + service area) |
| 8 | Collect and display real customer reviews |
| 9 | Add 10–15 real before/after work photos |
| 10 | Implement LocalBusiness + FAQ schema (§17) |
| 11 | Internal-link all service and area pages |
| 12 | Submit sitemap to GSC and Bing (§16) |
| 13 | Publish 2 helpful blog posts per month (see [§20](#20-blog-topics-post-launch)) |

---

## 20. Blog Topics (Post-Launch)

Publish **2 posts per month** after launch. Arabic posts should be substantive and locally relevant, not keyword-stuffed.

### Arabic topics

1. لماذا المكيف لا يبرد؟ أهم الأسباب والحلول
2. متى تحتاج إلى تنظيف مكيف سبليت؟
3. علامات نقص فريون المكيف
4. أفضل وقت لصيانة المكيفات في الرياض
5. الفرق بين تنظيف المكيف وصيانة المكيف

### English topics

1. Why Is My AC Not Cooling in Riyadh?
2. When Should You Clean a Split AC?
3. Signs Your AC Needs Gas Refill
4. Best Time for AC Maintenance in Riyadh
5. AC Cleaning vs AC Repair: What Do You Need?

---

## 21. Minimum Launch Checklist

Do **not** launch with only 4 pages. Minimum viable SEO + conversion launch:

| # | Page | Arabic | English |
| --- | --- | --- | --- |
| 1 | Home | `/ar` | `/en` |
| 2 | AC Services Riyadh (money page) | `/ar/خدمة-مكيفات-الرياض` | `/en/ac-services-riyadh` |
| 3 | AC Repair | `/ar/تصليح-مكيفات-الرياض` | `/en/ac-repair-riyadh` |
| 4 | AC Cleaning | `/ar/تنظيف-مكيفات-الرياض` | `/en/ac-cleaning-riyadh` |
| 5 | AC Gas Refill | `/ar/تعبئة-فريون-مكيفات-الرياض` | `/en/ac-gas-refill-riyadh` |
| 6 | AC Installation | `/ar/تركيب-مكيفات-الرياض` | `/en/ac-installation-riyadh` |
| 7 | Emergency AC Repair | `/ar/صيانة-مكيفات-طارئة-الرياض` | `/en/emergency-ac-repair-riyadh` |
| 8 | Commercial HVAC | `/ar/صيانة-مكيفات-تجارية-الرياض` | `/en/commercial-hvac-riyadh` |
| 9 | About | `/ar/من-نحن` | `/en/about` |
| 10 | Service Areas hub | `/ar/مناطق-خدمة-المكيفات-الرياض` | `/en/service-areas-riyadh` |
| 11 | Al Olaya | `/ar/صيانة-مكيفات-العليا-الرياض` | `/en/ac-service-al-olaya-riyadh` |
| 12 | Contact | `/ar/اتصل-بنا` | `/en/contact` |

### Technical launch checklist

- [ ] All pages use `generateMetadata` with canonical + hreflang
- [ ] `app/sitemap.ts` includes all Arabic and English URLs
- [ ] `app/robots.ts` points to sitemap
- [ ] LocalBusiness schema on homepage and service pages
- [ ] FAQPage schema where FAQs exist
- [ ] Conversion events: WhatsApp, call, form, popup
- [ ] Sticky mobile WhatsApp + call buttons
- [ ] Homepage follows 17-section blueprint (§10)
- [ ] Service pages follow content template (§7)
- [ ] Entity summary block on homepage (§12)
- [ ] GSC + Bing verification and sitemap submitted
- [ ] GBP matches website NAP and service area
- [ ] No fake reviews or ratings in schema or UI

### Final recommendation

- **Arabic** = default locale, strongest content, `x-default` hreflang.
- **English** = trust layer for bilingual customers.
- The real SEO battle in Riyadh is Arabic: صيانة مكيفات الرياض، تنظيف مكيفات الرياض، تصليح مكيفات الرياض، فني مكيفات الرياض، تعبئة فريون مكيفات الرياض.

---

## Related documents

- [Website Requirements](./REQUIREMENTS.md) — business, design, and technical specification
- [README](../README.md) — project overview and stack
