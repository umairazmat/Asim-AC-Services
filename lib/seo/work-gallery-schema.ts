import { HOME_WORK_GALLERY } from "@/lib/constants/home-work-gallery";
import { getSiteUrl } from "@/lib/site-url";
import type { Locale } from "@/lib/i18n/config";

type ItemListSchema = {
  "@context": "https://schema.org";
  "@type": "ItemList";
  name: string;
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    item: {
      "@type": "ImageObject" | "VideoObject";
      name: string;
      description: string;
      contentUrl: string;
      thumbnailUrl?: string;
    };
  }>;
};

const LIST_NAME = {
  ar: "صور وفيديوهات من خدماتنا في الرياض",
  en: "Our AC Service Work in Riyadh",
} as const;

export function buildWorkGallerySchema(locale: Locale): ItemListSchema {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: LIST_NAME[locale],
    itemListElement: HOME_WORK_GALLERY.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": item.type === "video" ? "VideoObject" : "ImageObject",
        name: item.title[locale],
        description: item.caption[locale],
        contentUrl: `${siteUrl}${item.src}`,
        ...(item.poster ? { thumbnailUrl: `${siteUrl}${item.poster}` } : {}),
      },
    })),
  };
}
