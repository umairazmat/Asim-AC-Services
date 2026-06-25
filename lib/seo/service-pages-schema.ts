import { BRAND } from "@/lib/constants/brand";
import { CONTACT } from "@/lib/constants/contact";
import { SCHEMA_AREA_SERVED } from "@/lib/constants/geo-seo";
import type { Locale } from "@/lib/i18n/config";
import { getPageHref, PAGES } from "@/lib/i18n/pages";
import { getSiteUrl } from "@/lib/site-url";
import { getServicePageContent } from "@/app/[locale]/shared/service-pages/content";
import type { ServicePageId } from "@/app/[locale]/shared/service-pages/types";

type ServicePageGraph = {
  "@context": "https://schema.org";
  "@graph": Array<Record<string, unknown>>;
};

function buildBreadcrumb(pageId: ServicePageId, locale: Locale) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${getPageHref(locale, pageId)}`;
  const isHub = pageId === "ac-services-riyadh";

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: locale === "ar" ? "الرئيسية" : "Home",
      item: `${siteUrl}${getPageHref(locale, "home")}`,
    },
  ];

  if (!isHub) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: PAGES["ac-services-riyadh"].title[locale],
      item: `${siteUrl}${getPageHref(locale, "ac-services-riyadh")}`,
    });
  }

  items.push({
    "@type": "ListItem",
    position: isHub ? 2 : 3,
    name: PAGES[pageId].title[locale],
    item: pageUrl,
  });

  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items,
  };
}

export function buildServicePageSchema(pageId: ServicePageId, locale: Locale): ServicePageGraph {
  const content = getServicePageContent(pageId);
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${getPageHref(locale, pageId)}`;
  const businessId = `${siteUrl}/#localbusiness`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.metadata.title[locale],
        description: content.metadata.description[locale],
        inLanguage: locale === "ar" ? "ar-SA" : "en-US",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${pageUrl}#service` },
      },
      buildBreadcrumb(pageId, locale),
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
        "@id": `${pageUrl}#service`,
        name: content.schema.serviceName[locale],
        description: content.schema.serviceDescription[locale],
        provider: { "@id": businessId },
        serviceType: content.schema.serviceType[locale],
        areaServed: [...SCHEMA_AREA_SERVED],
      },
    ],
  };
}
