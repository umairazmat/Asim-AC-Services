import type { MetadataRoute } from "next";
import { defaultLocale } from "@/lib/i18n/config";
import { getSitemapEntries } from "@/lib/i18n/pages";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return getSitemapEntries().flatMap(({ ar, en }) => [
    {
      url: `${baseUrl}${ar}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: ar === `/${defaultLocale}` ? 1 : 0.8,
      alternates: {
        languages: {
          ar: `${baseUrl}${ar}`,
          en: `${baseUrl}${en}`,
        },
      },
    },
    {
      url: `${baseUrl}${en}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: en === "/en" ? 0.9 : 0.8,
      alternates: {
        languages: {
          ar: `${baseUrl}${ar}`,
          en: `${baseUrl}${en}`,
        },
      },
    },
  ]);
}
