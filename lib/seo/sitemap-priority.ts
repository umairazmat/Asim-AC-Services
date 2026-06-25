import type { PageId } from "@/lib/i18n/pages";

/** Crawl priority hints for sitemap.xml (0.0–1.0). */
export const SITEMAP_PRIORITY: Record<PageId, number> = {
  home: 1,
  "ac-services-riyadh": 0.95,
  "ac-repair-riyadh": 0.9,
  "ac-cleaning-riyadh": 0.9,
  "ac-gas-refill-riyadh": 0.9,
  "ac-installation-riyadh": 0.9,
  "emergency-ac-repair-riyadh": 0.88,
  "commercial-hvac-riyadh": 0.88,
  "service-areas-riyadh": 0.85,
  "ac-service-al-olaya-riyadh": 0.85,
  about: 0.75,
  contact: 0.8,
};

export const SITEMAP_CHANGE_FREQUENCY = {
  home: "weekly",
  service: "weekly",
  area: "weekly",
  static: "monthly",
} as const;

export function getSitemapChangeFrequency(pageId: PageId): "weekly" | "monthly" {
  if (pageId === "home") return "weekly";
  if (pageId === "about") return "monthly";
  if (pageId === "contact") return "monthly";
  return "weekly";
}
