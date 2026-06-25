import { buildServicePageFaqSchema } from "@/lib/seo/faq-page-schema";
import type { ServicePageId } from "@/app/[locale]/shared/service-pages/types";
import type { Locale } from "@/lib/i18n/config";

type ServicePageFaqJsonLdProps = {
  locale: Locale;
  pageId: ServicePageId;
};

export function ServicePageFaqJsonLd({ locale, pageId }: ServicePageFaqJsonLdProps) {
  const schema = buildServicePageFaqSchema(locale, pageId);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
