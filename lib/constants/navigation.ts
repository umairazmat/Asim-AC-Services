import type { Locale } from "@/lib/i18n/config";
import { BOOK_SERVICE_SECTION_ID } from "@/lib/constants/book-service-content";
import { getPageHref, getPageIdFromPathname, PAGES, type PageId } from "@/lib/i18n/pages";

type NavLabel = { ar: string; en: string };

type NavChild = {
  pageId: PageId;
  label?: NavLabel;
};

type NavPageEntry = {
  id: string;
  type: "page";
  pageId: PageId;
  label: NavLabel;
};

export type NavGroupEntry = {
  id: string;
  type: "group";
  pageId: PageId;
  label: NavLabel;
  hubLabel: NavLabel;
  children: readonly NavChild[];
  wideMenu?: boolean;
};

export type NavEntry = NavPageEntry | NavGroupEntry;

export const NAV_ENTRIES: readonly NavEntry[] = [
  {
    id: "home",
    type: "page",
    pageId: "home",
    label: { ar: "الرئيسية", en: "Home" },
  },
  {
    id: "services",
    type: "group",
    pageId: "ac-services-riyadh",
    label: { ar: "خدمات المكيفات", en: "AC Services" },
    hubLabel: { ar: "جميع خدمات المكيفات", en: "All AC Services" },
    wideMenu: true,
    children: [
      { pageId: "ac-services-riyadh" },
      { pageId: "ac-repair-riyadh" },
      { pageId: "ac-cleaning-riyadh" },
      { pageId: "ac-gas-refill-riyadh" },
      { pageId: "ac-installation-riyadh" },
      { pageId: "emergency-ac-repair-riyadh" },
      { pageId: "commercial-hvac-riyadh" },
    ],
  },
  {
    id: "service-areas",
    type: "group",
    pageId: "service-areas-riyadh",
    label: { ar: "مناطق الخدمة", en: "Service Areas" },
    hubLabel: { ar: "جميع مناطق الخدمة", en: "All Service Areas" },
    children: [
      { pageId: "service-areas-riyadh" },
      { pageId: "ac-service-al-olaya-riyadh" },
    ],
  },
  {
    id: "about",
    type: "page",
    pageId: "about",
    label: { ar: "من نحن", en: "About Us" },
  },
  {
    id: "contact",
    type: "page",
    pageId: "contact",
    label: { ar: "اتصل بنا", en: "Contact" },
  },
] as const;

/** Top-level links for footer and legacy consumers. */
export const NAV_ITEMS = NAV_ENTRIES.map((entry) => ({
  id: entry.id,
  type: "page" as const,
  pageId: entry.pageId,
  label: entry.label,
}));

export const NAV_BOOK_ITEM = {
  id: "book-service",
  type: "anchor" as const,
  hash: `#${BOOK_SERVICE_SECTION_ID}`,
} as const;

export type NavItemId = (typeof NAV_ITEMS)[number]["id"];

export function getNavHref(locale: Locale, pageId: PageId): string {
  return getPageHref(locale, pageId);
}

export function getNavPageLabel(locale: Locale, pageId: PageId): string {
  return PAGES[pageId].title[locale];
}

export function getNavChildLabel(locale: Locale, child: NavChild): string {
  return child.label?.[locale] ?? PAGES[child.pageId].title[locale];
}

export function isNavActive(pathname: string, locale: Locale, pageId: PageId): boolean {
  return getPageIdFromPathname(pathname) === pageId;
}

export function isNavEntryActive(pathname: string, locale: Locale, entry: NavEntry): boolean {
  if (entry.type === "page") {
    return isNavActive(pathname, locale, entry.pageId);
  }

  if (isNavActive(pathname, locale, entry.pageId)) {
    return true;
  }

  return entry.children.some((child) => isNavActive(pathname, locale, child.pageId));
}

export function isBookNavActive(): boolean {
  if (typeof window === "undefined") return false;
  return window.location.hash === NAV_BOOK_ITEM.hash;
}
