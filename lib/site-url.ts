const DEFAULT_SITE_URL = "http://localhost:3000";

/** Normalize NEXT_PUBLIC_SITE_URL — accepts with or without https:// */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;

  if (/^https?:\/\//i.test(raw)) {
    return raw.replace(/\/$/, "");
  }

  return `https://${raw.replace(/\/$/, "")}`;
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}
