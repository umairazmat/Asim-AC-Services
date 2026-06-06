# Asim AC Services — Bilingual Business Website

A modern, bilingual (Arabic / English) marketing website for an air-conditioning services business in Riyadh, Saudi Arabia. Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, following clean architecture and industry-standard practices for performance, accessibility, and long-term maintainability.

> **Note:** This is a public portfolio repository. Client contact details, credentials, and deployment secrets are intentionally excluded. See [Requirements Document](./docs/REQUIREMENTS.md) for the full project specification.

---

## Highlights

| Feature | Description |
| --- | --- |
| **Default language** | Arabic (RTL) — site loads right-to-left by default |
| **Secondary language** | English (LTR) — full layout mirror on switch |
| **Theme system** | Global light / dark mode with shared design tokens |
| **Color system** | Centralized brand palette (Navy, Sky Blue, Accent Red) |
| **Architecture** | Clean, scalable, feature-based structure |
| **Audience** | Home owners and shop owners (residential + commercial) |

---

## Pages

- **Home** — Hero, services overview, trust badges, testimonials, CTAs
- **About** — Business story and value proposition
- **Services** — AC cleaning, maintenance, installation, and related offerings
- **Contact** — Lead form, service area, and communication channels

---

## Technical Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Arabic web font (Cairo / Tajawal) + Latin companion
- **Hosting:** Vercel
- **i18n / RTL:** Built-in locale switching with `dir` and `lang` attribute handling

---

## Architecture Principles

This project is structured for production quality and team scalability:

- **Clean Code** — Readable components, consistent naming, typed interfaces
- **Clean Architecture** — Separation of UI, content, configuration, and utilities
- **Scalable Layout** — Reusable sections, global theme and locale providers
- **Industry Standards** — Semantic HTML, responsive design, SEO metadata, performance-first assets
- **Global Design Tokens** — Colors, spacing, typography, and themes defined once and reused everywhere

---

## Brand & Design System

| Role | Color | Usage |
| --- | --- | --- |
| Primary | `#1B3A6B` (Deep Navy) | Header, navigation, footer, headings |
| Secondary | `#2E8BC0` (Sky Blue) | Icons, buttons, section accents |
| Accent | `#D32F2F` (Red) | Call Now, WhatsApp, urgent CTAs |
| Neutral | White / Light Grey / Black | Backgrounds, body text |

**Tagline:** HIGH QUALITY • FAST SERVICE • AFFORDABLE PRICES  
**Slogan:** Cool Air... Better Life / هواء بارد... حياة أفضل

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Documentation

- **[Website Requirements Document](./docs/REQUIREMENTS.md)** — Full bilingual specification (Arabic / English), site structure, services, design, and technical requirements.

---

## Project Status

| Phase | Status |
| --- | --- |
| Requirements & specification | Complete |
| Core architecture & design system | In progress |
| Page development | Planned |
| Content & assets from client | Pending |
| DNS & production launch | Planned |

**Estimated timeline:** 2–4 weeks from kickoff to launch.

---

## Credits

**Client** — Asim AC Services (Riyadh, KSA)  
**Developed by** — [Devlotech](https://devlotech.com)  
**Lead Developer** — Umair Azmat

---

## License

Proprietary client project. Source is published for portfolio and demonstration purposes. All rights reserved by the client and Devlotech unless otherwise agreed in writing.
