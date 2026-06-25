import { AC_SERVICES_HUB_CONTENT } from "@/app/[locale]/shared/service-pages/content/hub";
import {
  AC_REPAIR_CONTENT,
  AC_CLEANING_CONTENT,
} from "@/app/[locale]/shared/service-pages/content/child-pages-part1";
import {
  AC_GAS_REFILL_CONTENT,
  AC_INSTALLATION_CONTENT,
  EMERGENCY_AC_REPAIR_CONTENT,
  COMMERCIAL_HVAC_CONTENT,
} from "@/app/[locale]/shared/service-pages/content/child-pages-part2";
import type { ServicePageContent, ServicePageId } from "@/app/[locale]/shared/service-pages/types";

export const SERVICE_PAGE_CONTENT: Record<ServicePageId, ServicePageContent> = {
  "ac-services-riyadh": AC_SERVICES_HUB_CONTENT,
  "ac-repair-riyadh": AC_REPAIR_CONTENT,
  "ac-cleaning-riyadh": AC_CLEANING_CONTENT,
  "ac-gas-refill-riyadh": AC_GAS_REFILL_CONTENT,
  "ac-installation-riyadh": AC_INSTALLATION_CONTENT,
  "emergency-ac-repair-riyadh": EMERGENCY_AC_REPAIR_CONTENT,
  "commercial-hvac-riyadh": COMMERCIAL_HVAC_CONTENT,
};

export function getServicePageContent(pageId: ServicePageId): ServicePageContent {
  return SERVICE_PAGE_CONTENT[pageId];
}

export function isServicePageId(pageId: string): pageId is ServicePageId {
  return pageId in SERVICE_PAGE_CONTENT;
}
