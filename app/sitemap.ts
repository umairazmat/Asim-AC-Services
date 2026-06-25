import type { MetadataRoute } from "next";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import { getSitemapEntries, getPageBySlug, PAGE_IDS, PAGES, type PageId } from "@/lib/i18n/pages";
import {
  getSitemapChangeFrequency,
  SITEMAP_PRIORITY,
} from "@/lib/seo/sitemap-priority";
import { getSiteUrl } from "@/lib/site-url";

function getPageIdFromHref(href: string): PageId {
  if (href === `/${defaultLocale}` || href === "/en") {
    return href === `/${defaultLocale}` ? "home" : "home";
  }

  for (const locale of locales) {
    const prefix = `/${locale}`;
    if (href === prefix) return "home";
    if (href.startsWith(`${prefix}/`)) {
      const slug = href.slice(prefix.length + 1);
      const pageId = getPageBySlug(locale, slug);
      if (pageId) return pageId;
    }
  }

  return "home";
}

function buildLanguageAlternates(ar: string, en: string) {
  const baseUrl = getSiteUrl();
  return {
    ar: `${baseUrl}${ar}`,
    en: `${baseUrl}${en}`,
    "x-default": `${baseUrl}${ar}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return getSitemapEntries().flatMap(({ ar, en }) => {
    const pageId = getPageIdFromHref(ar);
    const priority = SITEMAP_PRIORITY[pageId];
    const changeFrequency = getSitemapChangeFrequency(pageId);
    const languages = buildLanguageAlternates(ar, en);

    return (["ar", "en"] as Locale[]).map((locale) => {
      const href = locale === "ar" ? ar : en;
      return {
        url: `${baseUrl}${href}`,
        lastModified: new Date(),
        changeFrequency,
        priority: locale === defaultLocale ? priority : Math.max(priority - 0.05, 0.5),
        alternates: { languages },
      };
    });
  });
}

/** Ensures PAGE_IDS is referenced so sitemap stays in sync when pages are added. */
void PAGE_IDS;
void PAGES;
