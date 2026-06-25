import { getServicePageContent } from "@/app/[locale]/shared/service-pages/content";
import type { ServicePageId } from "@/app/[locale]/shared/service-pages/types";
import { AL_OLAYA_CONTENT } from "@/app/[locale]/ac-service-al-olaya/content";
import { CONTACT_CONTENT } from "@/app/[locale]/contact/content";
import { HOME_CONTENT } from "@/app/[locale]/home/content";
import { SERVICE_AREAS_CONTENT } from "@/app/[locale]/service-areas/content";
import type { Locale } from "@/lib/i18n/config";

type FaqPageSchema = {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
};

type FaqItem = {
  question: { ar: string; en: string };
  answer: { ar: string; en: string };
};

function buildFaqPageSchema(locale: Locale, items: ReadonlyArray<FaqItem>): FaqPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer[locale],
      },
    })),
  };
}

export function buildHomeFaqPageSchema(locale: Locale): FaqPageSchema {
  return buildFaqPageSchema(locale, HOME_CONTENT.faq.items);
}

export function buildContactFaqPageSchema(locale: Locale): FaqPageSchema {
  return buildFaqPageSchema(locale, CONTACT_CONTENT.faq.items);
}

export function buildServiceAreasFaqPageSchema(locale: Locale): FaqPageSchema {
  return buildFaqPageSchema(locale, SERVICE_AREAS_CONTENT.faq.items);
}

export function buildAlOlayaFaqPageSchema(locale: Locale): FaqPageSchema {
  return buildFaqPageSchema(locale, AL_OLAYA_CONTENT.faq.items);
}

export function buildServicePageFaqSchema(locale: Locale, pageId: ServicePageId): FaqPageSchema {
  return buildFaqPageSchema(locale, getServicePageContent(pageId).faq.items);
}
