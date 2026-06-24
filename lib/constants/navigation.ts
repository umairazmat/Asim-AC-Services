import type { Locale } from "@/lib/i18n/config";
import { getPageHref, getPageIdFromPathname, type PageId } from "@/lib/i18n/pages";

export const NAV_ITEMS = [
  {
    id: "home",
    pageId: "home",
    label: { ar: "الرئيسية", en: "Home" },
  },
  {
    id: "about",
    pageId: "about",
    label: { ar: "من نحن", en: "About Us" },
  },
  {
    id: "services",
    pageId: "ac-services-riyadh",
    label: { ar: "خدماتنا", en: "Services" },
  },
  {
    id: "contact",
    pageId: "contact",
    label: { ar: "اتصل بنا", en: "Contact" },
  },
] as const;

export type NavItemId = (typeof NAV_ITEMS)[number]["id"];

export function getNavHref(locale: Locale, pageId: PageId): string {
  return getPageHref(locale, pageId);
}

export function isNavActive(pathname: string, locale: Locale, pageId: PageId): boolean {
  return getPageIdFromPathname(pathname) === pageId;
}
