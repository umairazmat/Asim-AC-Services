import { BRAND } from "@/lib/constants/brand";
import { CONTACT } from "@/lib/constants/contact";
import { SCHEMA_AREA_SERVED } from "@/lib/constants/geo-seo";
import { SERVICE_AREAS_HUB_DISTRICT_IDS } from "@/lib/constants/service-areas-districts";
import { RIYADH_AREAS } from "@/lib/constants/riyadh-areas";
import type { Locale } from "@/lib/i18n/config";
import { getPageHref, PAGES } from "@/lib/i18n/pages";
import { getSiteUrl } from "@/lib/site-url";

type AreaPageGraph = {
  "@context": "https://schema.org";
  "@graph": Array<Record<string, unknown>>;
};

function buildBreadcrumb(pageId: "service-areas-riyadh" | "ac-service-al-olaya-riyadh", locale: Locale) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${getPageHref(locale, pageId)}`;

  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "ar" ? "الرئيسية" : "Home",
        item: `${siteUrl}${getPageHref(locale, "home")}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: PAGES[pageId].title[locale],
        item: pageUrl,
      },
    ],
  };
}

export function buildServiceAreasPageSchema(locale: Locale): AreaPageGraph {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${getPageHref(locale, "service-areas-riyadh")}`;
  const businessId = `${siteUrl}/#localbusiness`;
  const areaMap = new Map(RIYADH_AREAS.map((area) => [area.id, area]));

  const districtItems = SERVICE_AREAS_HUB_DISTRICT_IDS.map((id, index) => {
    const area = areaMap.get(id);
    const name = area?.label[locale] ?? id;

    return {
      "@type": "ListItem",
      position: index + 1,
      name,
      ...(id === "olaya"
        ? { item: `${siteUrl}${getPageHref(locale, "ac-service-al-olaya-riyadh")}` }
        : {}),
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: PAGES["service-areas-riyadh"].title[locale],
        description:
          locale === "ar"
            ? "مناطق خدمة المكيفات في الرياض مع تركيز على العليا والأحياء القريبة."
            : "AC service areas in Riyadh with focus on Al Olaya and nearby districts.",
        inLanguage: locale === "ar" ? "ar-SA" : "en-US",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": businessId },
      },
      buildBreadcrumb("service-areas-riyadh", locale),
      {
        "@type": ["LocalBusiness", "HVACBusiness"],
        "@id": businessId,
        name: BRAND.name.en,
        alternateName: BRAND.name.ar,
        url: siteUrl,
        telephone: "+966547524002",
        email: CONTACT.email.address,
        areaServed: [...SCHEMA_AREA_SERVED],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Riyadh",
          addressRegion: "Riyadh Province",
          addressCountry: "SA",
        },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#districts`,
        name:
          locale === "ar" ? "الأحياء التي نخدمها في الرياض" : "Riyadh Districts We Serve",
        itemListElement: districtItems,
      },
    ],
  };
}

const AL_OLAYA_SERVICES = [
  {
    id: "repair",
    name: { ar: "تصليح مكيفات في العليا", en: "AC Repair in Al Olaya" },
  },
  {
    id: "cleaning",
    name: { ar: "تنظيف مكيفات في العليا", en: "AC Cleaning in Al Olaya" },
  },
  {
    id: "gas",
    name: { ar: "فحص الغاز وتعبئة الفريون في العليا", en: "Gas Check & Refill in Al Olaya" },
  },
  {
    id: "installation",
    name: { ar: "تركيب مكيفات في العليا", en: "AC Installation in Al Olaya" },
  },
  {
    id: "commercial",
    name: { ar: "صيانة HVAC تجارية في العليا", en: "Commercial HVAC in Al Olaya" },
  },
] as const;

export function buildAlOlayaPageSchema(locale: Locale): AreaPageGraph {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${getPageHref(locale, "ac-service-al-olaya-riyadh")}`;
  const businessId = `${siteUrl}/#localbusiness`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: PAGES["ac-service-al-olaya-riyadh"].title[locale],
        description:
          locale === "ar"
            ? "صفحة محلية لخدمة مكيفات في حي العليا بالرياض."
            : "Local landing page for AC service in Al Olaya, Riyadh.",
        inLanguage: locale === "ar" ? "ar-SA" : "en-US",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${pageUrl}#service-area` },
      },
      buildBreadcrumb("ac-service-al-olaya-riyadh", locale),
      {
        "@type": ["LocalBusiness", "HVACBusiness"],
        "@id": businessId,
        name: BRAND.name.en,
        alternateName: BRAND.name.ar,
        url: siteUrl,
        telephone: "+966547524002",
        email: CONTACT.email.address,
        areaServed: [...SCHEMA_AREA_SERVED],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Riyadh",
          addressRegion: "Riyadh Province",
          addressCountry: "SA",
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service-area`,
        name:
          locale === "ar" ? "صيانة مكيفات في العليا الرياض" : "AC Service in Al Olaya, Riyadh",
        provider: { "@id": businessId },
        areaServed: [...SCHEMA_AREA_SERVED],
        serviceType:
          locale === "ar"
            ? "تصليح وتنظيف وتركيب مكيفات وصيانة HVAC"
            : "AC repair, cleaning, installation, and HVAC maintenance",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: locale === "ar" ? "خدمات المكيفات في العليا" : "AC Services in Al Olaya",
          itemListElement: AL_OLAYA_SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name[locale],
            },
          })),
        },
      },
    ],
  };
}
