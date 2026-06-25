import type { MetadataRoute } from "next";
import {
  AI_CRAWLER_USER_AGENTS,
} from "@/lib/seo/discoverability-content";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  const allowAll = AI_CRAWLER_USER_AGENTS.map((userAgent) => ({
    userAgent,
    allow: "/" as const,
    disallow: ["/api/", "/_next/"] as string[],
  }));

  return {
    rules: allowAll,
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
