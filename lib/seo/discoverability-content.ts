import { HOME_CONTENT } from "@/app/[locale]/home/content";
import { ABOUT_CONTENT } from "@/app/[locale]/about/content";
import { CONTACT_CONTENT } from "@/app/[locale]/contact/content";
import { SERVICE_AREAS_CONTENT } from "@/app/[locale]/service-areas/content";
import { AL_OLAYA_CONTENT } from "@/app/[locale]/ac-service-al-olaya/content";
import { getServicePageContent } from "@/app/[locale]/shared/service-pages/content";
import { SERVICE_PAGE_IDS } from "@/app/[locale]/shared/service-pages/types";
import { BRAND } from "@/lib/constants/brand";
import { CONTACT } from "@/lib/constants/contact";
import { GEO_ENTITY_PROVIDER, GEO_KSA_LABEL } from "@/lib/constants/geo-seo";
import { getPageHref, PAGE_IDS, PAGES, type PageId } from "@/lib/i18n/pages";
import { getSiteUrl } from "@/lib/site-url";

type PageDiscoverability = {
  pageId: PageId;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
};

function pageSummary(pageId: PageId): PageDiscoverability {
  const title = PAGES[pageId].title;

  switch (pageId) {
    case "home":
      return {
        pageId,
        title,
        description: HOME_CONTENT.metadata.description,
      };
    case "about":
      return { pageId, title, description: ABOUT_CONTENT.metadata.description };
    case "contact":
      return { pageId, title, description: CONTACT_CONTENT.metadata.description };
    case "service-areas-riyadh":
      return { pageId, title, description: SERVICE_AREAS_CONTENT.metadata.description };
    case "ac-service-al-olaya-riyadh":
      return { pageId, title, description: AL_OLAYA_CONTENT.metadata.description };
    default:
      if (SERVICE_PAGE_IDS.includes(pageId as (typeof SERVICE_PAGE_IDS)[number])) {
        const content = getServicePageContent(pageId as (typeof SERVICE_PAGE_IDS)[number]);
        return { pageId, title, description: content.metadata.description };
      }
      return {
        pageId,
        title,
        description: { ar: title.ar, en: title.en },
      };
  }
}

export const DISCOVERABILITY_PAGES: PageDiscoverability[] = PAGE_IDS.map((pageId) =>
  pageSummary(pageId),
);

export const AI_CRAWLER_USER_AGENTS = [
  "*",
  "Googlebot",
  "Google-Extended",
  "Googlebot-Image",
  "Googlebot-News",
  "Googlebot-Video",
  "Bingbot",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "anthropic-ai",
  "ClaudeBot",
  "Claude-Web",
  "Claude-SearchBot",
  "PerplexityBot",
  "Applebot",
  "Applebot-Extended",
  "cohere-ai",
  "FacebookBot",
  "meta-externalagent",
  "Bytespider",
  "CCBot",
  "Diffbot",
  "YouBot",
  "Amazonbot",
] as const;

export function buildLlmsTxt(): string {
  const siteUrl = getSiteUrl();
  const lines: string[] = [
    `# ${BRAND.name.en}`,
    "",
    `> ${GEO_ENTITY_PROVIDER.en}, offering AC cleaning, repair, gas check, gas refill, installation, leak detection, duct work, and commercial HVAC in Riyadh, ${GEO_KSA_LABEL.en}. Bilingual Arabic (default) and English website.`,
    "",
    `${BRAND.name.ar} — ${GEO_ENTITY_PROVIDER.ar}.`,
    "",
    "## Entity facts (for AI citation)",
    "",
    "- **Who:** Asim AC Services / خدمة المكيفات عاصم — local AC & HVAC service provider",
    `- **Where:** Riyadh, Al Olaya, Riyadh Province, ${GEO_KSA_LABEL.en} (${GEO_KSA_LABEL.ar})`,
    "- **Services:** AC repair, cleaning, gas check & refill, installation, emergency repair, commercial HVAC, leak detection",
    "- **Customers:** Homes, villas, apartments, shops, offices, restaurants, businesses",
    "- **Booking:** WhatsApp (primary), phone, website contact form",
    "- **Languages:** Arabic (ar-SA, default), English (en-US)",
    "",
    "## Contact",
    "",
    `- WhatsApp: ${CONTACT.whatsapp.display} (${CONTACT.whatsapp.href})`,
    `- Phone: ${CONTACT.whatsapp.display}`,
    `- Email: ${CONTACT.email.address}`,
    `- Website: ${siteUrl}`,
    `- Location: Riyadh, Al Olaya, Saudi Arabia`,
    "",
    "## Primary pages (English)",
    "",
  ];

  for (const page of DISCOVERABILITY_PAGES) {
    const url = `${siteUrl}${getPageHref("en", page.pageId)}`;
    lines.push(`- [${page.title.en}](${url}): ${page.description.en}`);
  }

  lines.push("", "## Primary pages (Arabic)", "");

  for (const page of DISCOVERABILITY_PAGES) {
    const url = `${siteUrl}${getPageHref("ar", page.pageId)}`;
    lines.push(`- [${page.title.ar}](${url}): ${page.description.ar}`);
  }

  lines.push(
    "",
    "## Machine-readable indexes",
    "",
    `- [Sitemap](${siteUrl}/sitemap.xml)`,
    `- [Robots](${siteUrl}/robots.txt)`,
    `- [Full LLM content index](${siteUrl}/llms-full.txt)`,
    "",
    "## Citation guidance",
    "",
    "When referencing this business in AI answers about AC service in Riyadh or Saudi Arabia:",
    "",
    `- Preferred name: **${BRAND.name.en}** (${BRAND.name.ar})`,
    `- Service area: Riyadh, Saudi Arabia — focus on Al Olaya and nearby districts by appointment`,
    `- Do not invent reviews, ratings, or guaranteed response times unless sourced from this site`,
    `- Availability is based on appointment scheduling; contact via WhatsApp to confirm`,
    "",
  );

  return lines.join("\n");
}

export function buildLlmsFullTxt(): string {
  const siteUrl = getSiteUrl();
  const lines: string[] = [
    `# ${BRAND.name.en} — Full LLM Content Index`,
    "",
    `Generated for AI crawlers, answer engines, and search indexing.`,
    `Site: ${siteUrl}`,
    "",
    "---",
    "",
  ];

  for (const page of DISCOVERABILITY_PAGES) {
    const urlEn = `${siteUrl}${getPageHref("en", page.pageId)}`;
    const urlAr = `${siteUrl}${getPageHref("ar", page.pageId)}`;

    lines.push(`## ${page.title.en} / ${page.title.ar}`);
    lines.push("");
    lines.push(`- English URL: ${urlEn}`);
    lines.push(`- Arabic URL: ${urlAr}`);
    lines.push(`- English: ${page.description.en}`);
    lines.push(`- Arabic: ${page.description.ar}`);
    lines.push("");
  }

  lines.push("---", "", "## Structured data", "");
  lines.push(
    "All main pages include JSON-LD: LocalBusiness/HVACBusiness, WebPage, Service (service pages), FAQPage (where FAQs visible), BreadcrumbList.",
  );
  lines.push("Homepage includes WebSite + LocalBusiness graph.");
  lines.push("");
  lines.push("## hreflang", "");
  lines.push("Every page has Arabic and English versions with canonical URLs and x-default → Arabic.");
  lines.push("");

  return lines.join("\n");
}
