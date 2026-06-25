import { buildServicePageSchema } from "@/lib/seo/service-pages-schema";
import type { ServicePageId } from "@/app/[locale]/shared/service-pages/types";
import type { Locale } from "@/lib/i18n/config";

type ServicePageJsonLdProps = {
  locale: Locale;
  pageId: ServicePageId;
};

export function ServicePageJsonLd({ locale, pageId }: ServicePageJsonLdProps) {
  const schema = buildServicePageSchema(pageId, locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
