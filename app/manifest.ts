import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants/brand";
import { LOCAL_BUSINESS_DESCRIPTION } from "@/lib/constants/geo-seo";
import { getSiteUrl } from "@/lib/site-url";

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl = getSiteUrl();

  return {
    name: `${BRAND.name.en} | ${BRAND.name.ar}`,
    short_name: BRAND.name.en,
    description: LOCAL_BUSINESS_DESCRIPTION,
    start_url: `${siteUrl}/ar`,
    scope: siteUrl,
    display: "standalone",
    background_color: "#0a1628",
    theme_color: "#1B3A6B",
    lang: "ar",
    dir: "rtl",
    categories: ["business", "utilities"],
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
