import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/i18n/config";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === defaultLocale ? 1 : 0.8,
  }));
}
