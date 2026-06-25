import type { WhyChooseSectionContent } from "@/app/[locale]/home/components/WhyChooseSection";
import type { ServiceId } from "@/lib/constants/services";
import type { PageId } from "@/lib/i18n/pages";

export type Bilingual = { ar: string; en: string };

export type ServicePageMetadata = {
  title: Bilingual;
  description: Bilingual;
  openGraphTitle: Bilingual;
  openGraphDescription: Bilingual;
};

export type ImageContent = {
  src: string;
  alt: Bilingual;
  position?: string;
};

export type SplitSectionContent = {
  sectionId: string;
  eyebrow: Bilingual;
  heading: Bilingual;
  body: Bilingual;
  image: ImageContent;
  chips?: ReadonlyArray<{ id: string; label: Bilingual }>;
};

export type ProcessSectionContent = {
  sectionId: string;
  eyebrow: Bilingual;
  heading: Bilingual;
  headline: Bilingual;
  image: ImageContent;
  steps: ReadonlyArray<{ id: string; title: Bilingual; description: Bilingual }>;
};

export type FaqContent = {
  eyebrow: Bilingual;
  heading: Bilingual;
  items: ReadonlyArray<{ id: string; question: Bilingual; answer: Bilingual }>;
};

export type ServiceCardContent = {
  id: string;
  pageId: PageId;
  title: Bilingual;
  description: Bilingual;
  image: string;
  imagePosition?: string;
};

export type ServicePageSchemaContent = {
  serviceName: Bilingual;
  serviceDescription: Bilingual;
  serviceType: Bilingual;
};

export type ServicePageCtaContent = {
  eyebrow: Bilingual;
  heading: Bilingual;
  subline: Bilingual;
  contactPageId: PageId;
  contactLabel: Bilingual;
};

export type ServiceHubContent = {
  kind: "hub";
  pageId: "ac-services-riyadh";
  metadata: ServicePageMetadata;
  hero: {
    eyebrow: Bilingual;
    h1: Bilingual;
    subheadline: Bilingual;
    entitySummary: Bilingual;
    image: ImageContent;
    scrollCta: Bilingual;
    scrollTargetId: string;
  };
  overview: SplitSectionContent;
  problems: {
    sectionId: string;
    eyebrow: Bilingual;
    heading: Bilingual;
    cards: ReadonlyArray<{ id: string; label: Bilingual }>;
  };
  serviceCards: {
    sectionId: string;
    eyebrow: Bilingual;
    heading: Bilingual;
    cards: ReadonlyArray<ServiceCardContent>;
  };
  audience: SplitSectionContent;
  serviceArea: SplitSectionContent;
  whyChoose: WhyChooseSectionContent;
  faq: FaqContent;
  cta: ServicePageCtaContent;
  schema: ServicePageSchemaContent;
};

export type ServiceChildContent = {
  kind: "service";
  pageId: Exclude<ServicePageId, "ac-services-riyadh">;
  bookServiceId: ServiceId;
  metadata: ServicePageMetadata;
  hero: {
    eyebrow: Bilingual;
    h1: Bilingual;
    subheadline: Bilingual;
    entitySummary: Bilingual;
    image: ImageContent;
  };
  problems: SplitSectionContent;
  includes: SplitSectionContent;
  acTypes: {
    sectionId: string;
    eyebrow: Bilingual;
    heading: Bilingual;
    body: Bilingual;
    chips: ReadonlyArray<{ id: string; label: Bilingual }>;
  };
  booking: ProcessSectionContent;
  whyChoose: WhyChooseSectionContent;
  serviceArea: SplitSectionContent;
  relatedServices: {
    sectionId: string;
    eyebrow: Bilingual;
    heading: Bilingual;
    cards: ReadonlyArray<ServiceCardContent>;
    linkPageIds: ReadonlyArray<PageId>;
  };
  faq: FaqContent;
  cta: ServicePageCtaContent;
  schema: ServicePageSchemaContent;
};

export const SERVICE_PAGE_IDS = [
  "ac-services-riyadh",
  "ac-repair-riyadh",
  "ac-cleaning-riyadh",
  "ac-gas-refill-riyadh",
  "ac-installation-riyadh",
  "emergency-ac-repair-riyadh",
  "commercial-hvac-riyadh",
] as const satisfies readonly PageId[];

export type ServicePageId = (typeof SERVICE_PAGE_IDS)[number];

export type ServicePageContent = ServiceHubContent | ServiceChildContent;
