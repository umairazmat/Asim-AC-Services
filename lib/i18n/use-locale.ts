"use client";

import { useParams } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";

/** Read the active locale from the URL segment (source of truth on the client). */
export function useLocale(fallback: Locale = defaultLocale): Locale {
  const params = useParams();
  const paramLocale = params?.locale;

  if (typeof paramLocale === "string" && isLocale(paramLocale)) {
    return paramLocale;
  }

  return fallback;
}
