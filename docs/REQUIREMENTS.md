# Website Requirements Document
# وثيقة متطلبات الموقع الإلكتروني

**Asim AC Services** · خدمة المكيفات عاصم  
**HIGH QUALITY • FAST SERVICE • AFFORDABLE PRICES**  
Riyadh, KSA · Bilingual (Arabic / English) · Prepared for Client Sign-off

> **Public repository notice:** This document is a sanitized specification for portfolio and development reference. Contact details, credentials, social links, and deployment secrets are omitted and managed privately with the client.

---

## Table of Contents

1. [Business Overview](#1-business-overview)
2. [Contact & Lead Channels](#2-contact--lead-channels)
3. [Services Offered](#3-services-offered)
4. [Service Area / Coverage](#4-service-area--coverage)
5. [Website Structure](#5-website-structure)
6. [Language, Layout & Direction (RTL)](#6-language-layout--direction-rtl)
7. [Header & Navigation](#7-header--navigation)
8. [Design & Branding](#8-design--branding)
9. [Technical Architecture](#9-technical-architecture)
10. [Hosting & Deployment](#10-hosting--deployment)
11. [Open Items — Client Deliverables](#11-open-items--client-deliverables)
12. [Credits](#12-credits)

---

## 1. Business Overview
### نظرة عامة على النشاط التجاري

| Field | Value |
| --- | --- |
| **Brand Name** | Asim AC Services |
| **Business Type** | Air-conditioning services (residential & commercial) |
| **Tagline** | HIGH QUALITY • FAST SERVICE • AFFORDABLE PRICES |
| **Slogan (footer)** | Cool Air... Better Life / هواء بارد... حياة أفضل |
| **Header line** | Don't worry about the heat! / لا تقلق من الحر! |
| **Years in Business** | 1 year 2 months |
| **Service Region** | Riyadh, Saudi Arabia |

---

## 2. Contact & Lead Channels
### وسائل التواصل والتواصل مع العملاء

Contact channels (phone, WhatsApp, email, and social media) are configured at deployment and are **not published in this public repository**.

### Contact form fields

| Field | Arabic label (example) |
| --- | --- |
| Name | الاسم |
| Phone number | رقم الجوال |
| Service required | الخدمة المطلوبة |
| Message | الرسالة |
| Price / budget | الميزانية |
| Location | الموقع |

### Map / location display

- No exact GPS pin required
- Display **Riyadh + Al Olaya** as a text-based coverage area

---

## 3. Services Offered
### الخدمات المقدمة

**Section title:** تشمل الخدمة / SERVICE INCLUDES

| Arabic | English |
| --- | --- |
| تنظيف شامل للمكيف | Complete AC Cleaning |
| فحص الغاز وإعادة التعبئة | Gas Check & Refill |
| تحسين التبريد والأداء | Improve Cooling & Performance |
| كشف وإصلاح التسربات والمشاكل الأخرى | Leak Detection & Repair / Other Issues |
| — | AC Installation |
| — | Duct Work — Packaged Units / HVAC |

### AC types serviced

- Central AC
- Split Units
- Window Units
- Concealed Units
- Cassette AC

### AC brands handled

- LG
- GREE
- Midea
- Panasonic *(spelling to be confirmed with client)*
- Mando

### Packages & pricing

- Annual Maintenance Contracts (AMC)
- Subscription packages
- **Pricing display:** "Request a Quote" only — no fixed prices shown on the website

---

## 4. Service Area / Coverage
### منطقة الخدمة والتغطية

| Field | Value |
| --- | --- |
| **Main City** | Riyadh |
| **District / Zone** | Al Olaya |
| **Display** | Text-based service area (no exact map pin) |

---

## 5. Website Structure
### هيكل الموقع الإلكتروني

### Pages

| English | العربية | Route |
| --- | --- | --- |
| Home | الرئيسية | `/` |
| About | من نحن | `/about` |
| Services | الخدمات | `/services` |
| Contact | اتصل بنا | `/contact` |

### Target audience

Shop owners and home owners (residential + commercial).

### Shared sections (across pages)

- Customer testimonials
- Trust badges: Fast Service On Time, Customer Satisfaction Guaranteed, Experienced Technicians
- Prominent **Call Now** and **WhatsApp** action buttons

---

## 6. Language, Layout & Direction (RTL)
### اللغة والتخطيط واتجاه الصفحة

**Default language: Arabic.** English is an optional switch.  
**اللغة الافتراضية للموقع هي العربية، مع إمكانية التبديل إلى الإنجليزية.**

### English requirements

- Site loads in **Arabic by default** with full **RTL** (right-to-left) layout
- Language switch toggles to **English (LTR)** layout
- The **entire layout mirrors** on switch: header, navigation, sections, forms, and content direction
- Arabic uses a suitable web font (e.g. Cairo, Tajawal, or IBM Plex Arabic)
- All content, buttons, forms, and labels are provided in **both languages**

### Arabic requirements / المتطلبات بالعربية

- يفتح الموقع باللغة العربية افتراضياً مع تخطيط كامل من اليمين إلى اليسار
- زر تبديل اللغة ينقل الموقع إلى الإنجليزية (من اليسار إلى اليمين)
- يتغير اتجاه التخطيط بالكامل عند التبديل: الرأس والقائمة والأقسام والمحتوى
- استخدام خط عربي مناسب للويب (مثل Cairo أو Tajawal)
- جميع المحتويات والأزرار والنماذج متوفرة باللغتين

### Global language switcher

- Persistent toggle in the header (AR / EN)
- Locale preference stored for return visits (cookie or local storage)
- `html` element receives correct `lang` and `dir` attributes on every route

---

## 7. Header & Navigation
### هيكل الرأس والتنقل

### Header order (RTL in Arabic, mirrored in LTR English)

1. Logo
2. Language switch button (AR / EN)
3. Navigation: Home, About, Services, Contact

### Mobile

Header collapses to: **Logo + language switch + hamburger menu**. All section headers follow the active language direction.

### Navigation labels

| English | العربية |
| --- | --- |
| Home | الرئيسية |
| About | من نحن |
| Services | الخدمات |
| Contact | اتصل بنا |

---

## 8. Design & Branding
### التصميم والهوية البصرية

### Color palette

| Role | Color | Hex | Usage |
| --- | --- | --- | --- |
| Primary | Deep Navy Blue | `#1B3A6B` | Headers, nav, footer, headings |
| Secondary | Sky Blue | `#2E8BC0` | Icons, buttons, section accents |
| Accent | Red | `#D32F2F` | Call Now, WhatsApp, urgent CTAs only |
| Neutral | White / Light Grey / Black | — | Backgrounds, body text |

### Global theme (light / dark mode)

- Single theme provider at the application root
- CSS custom properties (design tokens) for all brand colors
- Dark mode variants defined for backgrounds, text, borders, and surfaces
- User preference persisted across sessions
- Respects `prefers-color-scheme` as the initial default when no saved preference exists

### Visual style

- Clean, modern design aligned with existing marketing materials
- Circular badge feel matching brand poster
- Snowflake motifs and AC service imagery
- High-resolution / vector logo (client-provided)

**النمط:** تصميم نظيف وعصري يتماشى مع الإعلان الحالي، مع عناصر ثلجية وصور تنظيف المكيفات.

---

## 9. Technical Architecture
### الهندسة التقنية

### Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Hosting | Vercel |

WordPress is **not** used — Vercel hosting requires a custom Next.js build, which natively supports RTL/LTR locale switching and edge performance.

### Code quality goals

| Principle | Implementation |
| --- | --- |
| **Clean Code** | Typed components, single-responsibility modules, consistent file naming |
| **Clean Architecture** | UI components separated from content, config, and business logic |
| **Scalable Code** | Feature folders, shared layout primitives, reusable section blocks |
| **Industry Standard** | ESLint, semantic HTML, responsive breakpoints, accessible forms and CTAs |
| **Global Color Scheme** | Central `tokens` / CSS variables — no hard-coded colors in components |
| **Global Dark / Light Mode** | Theme context + `data-theme` or class strategy on `<html>` |
| **Global Language Switcher** | i18n dictionary files per locale; layout direction driven by active locale |

### Suggested project structure (target)

```
app/
  [locale]/           # ar (default) | en
    page.tsx          # Home
    about/
    services/
    contact/
components/
  layout/             # Header, Footer, Nav, LanguageSwitcher, ThemeToggle
  sections/           # Hero, Services, Testimonials, TrustBadges, ContactForm
  ui/                 # Button, Card, Input, Badge
lib/
  i18n/               # Locale dictionaries and helpers
  theme/              # Theme provider and tokens
  constants/          # Brand colors, routes, feature flags
public/
  assets/             # Logo, icons, optimized images
docs/
  REQUIREMENTS.md     # This document
```

### Performance & SEO

- Optimized images (Next.js `Image` component)
- Per-locale metadata (`title`, `description`, Open Graph)
- Mobile-first responsive layout
- Fast Time to First Byte via Vercel edge network

---

## 10. Hosting & Deployment
### المتطلبات التقنية والاستضافة

| Item | Detail |
| --- | --- |
| **Domain** | Client-registered domain (production) |
| **Hosting** | Vercel |
| **DNS** | Client DNS pointed to Vercel (managed privately) |
| **Timeline** | 2–4 weeks from development kickoff |

نظراً لأن الاستضافة على Vercel، سيتم بناء الموقع باستخدام Next.js الذي يدعم التبديل بين العربية والإنجليزية بسلاسة. المدة المتوقعة من أسبوعين إلى أربعة أسابيع.

### Style reference

Client-approved reference: [projectcare-sa.com](https://projectcare-sa.com) (layout and tone inspiration).

---

## 11. Open Items — Client Deliverables
### البنود المعلقة — مطلوبة من العميل

The following items are required before final launch. They are tracked privately with the client:

| Item | Status |
| --- | --- |
| Logo file (vector / high-resolution) | Pending |
| Social media profile links | Pending |
| Real photos of work / team | Pending |
| Customer testimonials (with permission) | Pending |
| DNS access for production domain | Pending |
| Brand name confirmations (e.g. Panasonic spelling) | Pending |
| Operating hours / emergency service policy | Pending |
| Post-launch maintenance ownership | Pending |
| Primary phone number for main Call CTA | Pending |

---

## 12. Credits
### الاعتماد

| Role | Name |
| --- | --- |
| **Client** | Asim AC Services |
| **Development Agency** | [Devlotech](https://devlotech.com) |
| **Lead Developer** | Umair Azmat |

---

## Sign-off
### الاعتماد والتوقيع

| Field | Value |
| --- | --- |
| **Project** | Asim AC Services — Bilingual Website |
| **Reference Site** | projectcare-sa.com |
| **Approved By** | _______________________________ |
| **Date** | _______________________________ |

---

*Document version: 1.0 · Last updated: June 2026 · Maintained by Devlotech*
