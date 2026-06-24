import { isLocale, locales, type Locale } from "@/lib/i18n/config";

export const PAGE_IDS = [
  "home",
  "ac-services-riyadh",
  "ac-repair-riyadh",
  "ac-cleaning-riyadh",
  "ac-gas-refill-riyadh",
  "ac-installation-riyadh",
  "emergency-ac-repair-riyadh",
  "commercial-hvac-riyadh",
  "about",
  "service-areas-riyadh",
  "ac-service-al-olaya-riyadh",
  "contact",
] as const;

export type PageId = (typeof PAGE_IDS)[number];

type PageDefinition = {
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
};

export const PAGES: Record<PageId, PageDefinition> = {
  home: {
    slug: { ar: "", en: "" },
    title: { ar: "الرئيسية", en: "Home" },
  },
  "ac-services-riyadh": {
    slug: { ar: "خدمة-مكيفات-الرياض", en: "ac-services-riyadh" },
    title: { ar: "خدمة مكيفات الرياض", en: "AC Services Riyadh" },
  },
  "ac-repair-riyadh": {
    slug: { ar: "تصليح-مكيفات-الرياض", en: "ac-repair-riyadh" },
    title: { ar: "تصليح مكيفات الرياض", en: "AC Repair Riyadh" },
  },
  "ac-cleaning-riyadh": {
    slug: { ar: "تنظيف-مكيفات-الرياض", en: "ac-cleaning-riyadh" },
    title: { ar: "تنظيف مكيفات الرياض", en: "AC Cleaning Riyadh" },
  },
  "ac-gas-refill-riyadh": {
    slug: { ar: "تعبئة-فريون-مكيفات-الرياض", en: "ac-gas-refill-riyadh" },
    title: { ar: "تعبئة فريون مكيفات الرياض", en: "AC Gas Refill Riyadh" },
  },
  "ac-installation-riyadh": {
    slug: { ar: "تركيب-مكيفات-الرياض", en: "ac-installation-riyadh" },
    title: { ar: "تركيب مكيفات الرياض", en: "AC Installation Riyadh" },
  },
  "emergency-ac-repair-riyadh": {
    slug: { ar: "صيانة-مكيفات-طارئة-الرياض", en: "emergency-ac-repair-riyadh" },
    title: { ar: "صيانة مكيفات طارئة الرياض", en: "Emergency AC Repair Riyadh" },
  },
  "commercial-hvac-riyadh": {
    slug: { ar: "صيانة-مكيفات-تجارية-الرياض", en: "commercial-hvac-riyadh" },
    title: { ar: "صيانة مكيفات تجارية الرياض", en: "Commercial HVAC Riyadh" },
  },
  about: {
    slug: { ar: "من-نحن", en: "about" },
    title: { ar: "من نحن", en: "About" },
  },
  "service-areas-riyadh": {
    slug: { ar: "مناطق-خدمة-المكيفات-الرياض", en: "service-areas-riyadh" },
    title: { ar: "مناطق خدمة المكيفات في الرياض", en: "AC Service Areas in Riyadh" },
  },
  "ac-service-al-olaya-riyadh": {
    slug: { ar: "صيانة-مكيفات-العليا-الرياض", en: "ac-service-al-olaya-riyadh" },
    title: { ar: "صيانة مكيفات العليا الرياض", en: "AC Service Al Olaya Riyadh" },
  },
  contact: {
    slug: { ar: "اتصل-بنا", en: "contact" },
    title: { ar: "اتصل بنا", en: "Contact" },
  },
};

function normalizeSlug(slug: string): string {
  try {
    return decodeURIComponent(slug).normalize("NFC");
  } catch {
    return slug.normalize("NFC");
  }
}

const slugIndex = (() => {
  const index = new Map<string, PageId>();

  for (const pageId of PAGE_IDS) {
    for (const locale of locales) {
      const slug = PAGES[pageId].slug[locale];
      if (slug) {
        index.set(`${locale}:${normalizeSlug(slug)}`, pageId);
      }
    }
  }

  return index;
})();

export function getPageHref(locale: Locale, pageId: PageId): string {
  const slug = PAGES[pageId].slug[locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function getPageBySlug(locale: Locale, slug: string): PageId | null {
  return slugIndex.get(`${locale}:${normalizeSlug(slug)}`) ?? null;
}

export function getPageIdFromPathname(pathname: string): PageId | null {
  const normalized = pathname.replace(/\/$/, "") || "/";
  const match = normalized.match(/^\/(ar|en)(?:\/(.+))?$/);

  if (!match || !isLocale(match[1])) {
    return null;
  }

  const locale = match[1];
  const slugPart = match[2];

  if (!slugPart) {
    return "home";
  }

  return getPageBySlug(locale, slugPart);
}

export function getPageAlternates(pageId: PageId, locale: Locale) {
  return {
    canonical: getPageHref(locale, pageId),
    languages: {
      ar: getPageHref("ar", pageId),
      en: getPageHref("en", pageId),
      "x-default": getPageHref("ar", pageId),
    },
  };
}

export function getSitemapEntries() {
  return PAGE_IDS.map((pageId) => ({
    ar: getPageHref("ar", pageId),
    en: getPageHref("en", pageId),
  }));
}

export function getLocalePath(pathname: string, locale: Locale): string {
  const pageId = getPageIdFromPathname(pathname);

  if (pageId) {
    return getPageHref(locale, pageId);
  }

  const normalized = pathname.replace(/\/$/, "") || "/";
  const stripped = normalized.replace(/^\/(ar|en)(?=\/|$)/, "") || "";
  const suffix = stripped === "/" ? "" : stripped;
  return `/${locale}${suffix}`;
}
