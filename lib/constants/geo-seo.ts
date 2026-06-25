import type { PageId } from "@/lib/i18n/pages";

/** Kingdom of Saudi Arabia — visible copy + schema alignment. */
export const GEO_KSA_LABEL = {
  ar: "المملكة العربية السعودية",
  en: "Saudi Arabia",
} as const;

export const GEO_KSA_SHORT = {
  ar: "المملكة",
  en: "KSA",
} as const;

export const GEO_RIYADH_KSA = {
  ar: "في الرياض، المملكة العربية السعودية",
  en: "in Riyadh, Saudi Arabia",
} as const;

export const GEO_ENTITY_PROVIDER = {
  ar: "خدمة المكيفات عاصم مزود خدمة مكيفات في الرياض، المملكة العربية السعودية",
  en: "Asim AC Services is an AC service provider in Riyadh, Saudi Arabia",
} as const;

export const GEO_ENTITY_SERVICES = {
  ar: "تقدم خدمات تنظيف وصيانة وتصليح وتركيب المكيفات، فحص الغاز، تعبئة الفريون، كشف التسربات، أعمال الدكت وأنظمة HVAC",
  en: "offering AC cleaning, repair, gas check, gas refill, installation, leak detection, duct work, and HVAC services",
} as const;

export const GEO_ENTITY_AUDIENCE = {
  ar: "للمنازل والفلل والمحلات والمكاتب",
  en: "for homes, villas, shops, offices, and businesses",
} as const;

export function buildFullEntitySummary(options?: {
  suffix?: { ar: string; en: string };
}): { ar: string; en: string } {
  const suffix = options?.suffix;
  return {
    ar: `${GEO_ENTITY_PROVIDER.ar}، ${GEO_ENTITY_SERVICES.ar} ${GEO_ENTITY_AUDIENCE.ar}${suffix?.ar ? `. ${suffix.ar}` : "."}`,
    en: `${GEO_ENTITY_PROVIDER.en}, ${GEO_ENTITY_SERVICES.en} ${GEO_ENTITY_AUDIENCE.en}${suffix?.en ? `. ${suffix.en}` : "."}`,
  };
}

export function buildServiceEntitySummary(serviceLabel: {
  ar: string;
  en: string;
}): { ar: string; en: string } {
  return {
    ar: `${serviceLabel.ar} ${GEO_RIYADH_KSA.ar}. احجز عبر واتساب ${GEO_ENTITY_AUDIENCE.ar}.`,
    en: `${serviceLabel.en} ${GEO_RIYADH_KSA.en}. Book on WhatsApp ${GEO_ENTITY_AUDIENCE.en}.`,
  };
}

/** Crawlable internal links — full site SEO/GEO hub. */
export const SITE_SERVICE_PAGE_IDS: PageId[] = [
  "ac-services-riyadh",
  "ac-repair-riyadh",
  "ac-cleaning-riyadh",
  "ac-gas-refill-riyadh",
  "ac-installation-riyadh",
  "emergency-ac-repair-riyadh",
  "commercial-hvac-riyadh",
];

export const SITE_CORE_PAGE_IDS: PageId[] = [
  "ac-services-riyadh",
  "service-areas-riyadh",
  "ac-service-al-olaya-riyadh",
  "about",
  "contact",
];

export const SITE_FULL_INTERNAL_LINKS: PageId[] = [
  ...SITE_SERVICE_PAGE_IDS,
  "service-areas-riyadh",
  "ac-service-al-olaya-riyadh",
  "about",
  "contact",
];

export const SITE_AREA_INTERNAL_LINKS: PageId[] = [
  "ac-services-riyadh",
  "service-areas-riyadh",
  "ac-service-al-olaya-riyadh",
  ...SITE_SERVICE_PAGE_IDS.filter((id) => id !== "ac-services-riyadh"),
  "about",
  "contact",
];

export const SCHEMA_AREA_SERVED = [
  { "@type": "City", name: "Riyadh" },
  { "@type": "Place", name: "Al Olaya" },
  { "@type": "AdministrativeArea", name: "Riyadh Province" },
  { "@type": "Country", name: "Saudi Arabia" },
] as const;

export const LOCAL_BUSINESS_DESCRIPTION =
  "AC cleaning, repair, gas refill, installation, leak detection, duct work, and HVAC services in Riyadh, Saudi Arabia (KSA).";
