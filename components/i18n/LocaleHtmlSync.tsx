"use client";

import { useEffect } from "react";
import { useLocale } from "@/lib/i18n/use-locale";

export function LocaleHtmlSync() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.classList.remove("locale-switching");
  }, [locale]);

  return null;
}
