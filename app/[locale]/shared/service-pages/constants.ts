import type { ServiceId } from "@/lib/constants/services";

import { SITE_CORE_PAGE_IDS } from "@/lib/constants/geo-seo";

import type { PageId } from "@/lib/i18n/pages";

import type { ServicePageId } from "@/app/[locale]/shared/service-pages/types";



export const SERVICE_PAGE_BOOKING_SERVICE: Partial<Record<ServicePageId, ServiceId>> = {

  "ac-repair-riyadh": "repair",

  "ac-cleaning-riyadh": "cleaning",

  "ac-gas-refill-riyadh": "gas",

  "ac-installation-riyadh": "installation",

  "emergency-ac-repair-riyadh": "repair",

  "commercial-hvac-riyadh": "duct",

};



export function buildStandardLinkPageIds(relatedPageIds: ReadonlyArray<PageId>): PageId[] {

  return [...new Set([...relatedPageIds, ...SITE_CORE_PAGE_IDS])];

}


