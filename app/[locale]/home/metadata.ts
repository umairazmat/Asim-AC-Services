import type { Metadata } from "next";
import { HOME_CONTENT } from "@/app/[locale]/home/content";
import type { Locale } from "@/lib/i18n/config";
import { getPageAlternates } from "@/lib/i18n/pages";
export function generateHomeMetadata(locale: Locale): Metadata {
  const { metadata } = HOME_CONTENT;
  const isArabic = locale === "ar";

  return {
    title: metadata.title[locale],
    description: metadata.description[locale],
    alternates: getPageAlternates("home", locale),
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_SA" : "en_US",
      alternateLocale: isArabic ? ["en_US"] : ["ar_SA"],
      title: metadata.openGraphTitle[locale],
      description: metadata.openGraphDescription[locale],
      url: `/${locale}`,
      images: ["/brand/poster.png"],
    },
  };
}
