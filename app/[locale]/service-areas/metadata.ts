import type { Metadata } from "next";
import { SERVICE_AREAS_CONTENT } from "@/app/[locale]/service-areas/content";
import { BRAND } from "@/lib/constants/brand";
import type { Locale } from "@/lib/i18n/config";
import { getPageAlternates } from "@/lib/i18n/pages";

export function generateServiceAreasMetadata(locale: Locale): Metadata {
  const { metadata } = SERVICE_AREAS_CONTENT;
  const isArabic = locale === "ar";

  return {
    title: metadata.title[locale],
    description: metadata.description[locale],
    alternates: getPageAlternates("service-areas-riyadh", locale),
    openGraph: {
      type: "website",
      siteName: BRAND.name[locale],
      locale: isArabic ? "ar_SA" : "en_US",
      alternateLocale: isArabic ? ["en_US"] : ["ar_SA"],
      title: metadata.openGraphTitle[locale],
      description: metadata.openGraphDescription[locale],
      url: getPageAlternates("service-areas-riyadh", locale).canonical,
      images: ["/brand/poster.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.openGraphTitle[locale],
      description: metadata.openGraphDescription[locale],
      images: ["/brand/poster.png"],
    },
  };
}
