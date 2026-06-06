export const locales = ["ar", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

export const localeLabels: Record<
  Locale,
  {
    native: string;
    flag: "sa" | "us";
    ariaLabel: string;
  }
> = {
  ar: {
    native: "العربية",
    flag: "sa",
    ariaLabel: "Arabic",
  },
  en: {
    native: "English",
    flag: "us",
    ariaLabel: "English",
  },
};

export const LOCALE_COOKIE = "NEXT_LOCALE";

export function getLocalePath(pathname: string, locale: Locale): string {
  const normalized = pathname.replace(/\/$/, "") || "/";
  const stripped =
    normalized.replace(/^\/(ar|en)(?=\/|$)/, "") || "";
  const suffix = stripped === "/" ? "" : stripped;
  return `/${locale}${suffix}`;
}
