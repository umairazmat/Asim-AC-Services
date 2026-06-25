import type { PageId } from "@/lib/i18n/pages";

import { SITE_FULL_INTERNAL_LINKS } from "@/lib/constants/geo-seo";



/** Crawlable internal links for homepage entity summary and SEO hubs. */

export const HOME_ENTITY_LINKS: PageId[] = SITE_FULL_INTERNAL_LINKS;



/** Extra service/area pages linked from footer beyond the six service cards. */

export const FOOTER_EXTRA_PAGE_LINKS: PageId[] = [

  "emergency-ac-repair-riyadh",

  "ac-service-al-olaya-riyadh",

];



/** District chips on the homepage that map to dedicated area pages. */

export const HOME_DISTRICT_PAGE_LINKS: Partial<Record<string, PageId>> = {

  olaya: "ac-service-al-olaya-riyadh",

};

/** Featured districts on the homepage service-area teaser (full list on Service Areas page). */
export const HOME_SERVICE_AREA_TEASER_DISTRICT_IDS = [
  "olaya",
  "sulaimaniyah",
  "sahafa",
  "yasmin",
  "malqa",
  "nakheel",
  "hittin",
  "malaz",
] as const;
