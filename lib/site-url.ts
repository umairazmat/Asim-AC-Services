export const PRODUCTION_SITE_URL = "https://asimacservices.com";

const LOCAL_SITE_URL = "http://localhost:3000";

function normalizeSiteUrl(raw: string): string {
  if (/^https?:\/\//i.test(raw)) {
    return raw.replace(/\/$/, "");
  }

  return `https://${raw.replace(/\/$/, "")}`;
}

/** Normalize NEXT_PUBLIC_SITE_URL — accepts with or without https:// */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return normalizeSiteUrl(raw);

  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_SITE_URL;
  }

  return LOCAL_SITE_URL;
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}
