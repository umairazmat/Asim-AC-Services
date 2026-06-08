import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/i18n/config";
import { getSiteUrl } from "@/lib/site-url";

const PUBLIC_PATHS = ["", "/about", "/services", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return locales.flatMap((locale) =>
    PUBLIC_PATHS.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" && locale === defaultLocale ? 1 : 0.8,
    })),
  );
}
