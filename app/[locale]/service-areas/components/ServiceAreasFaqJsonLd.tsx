import { buildServiceAreasFaqPageSchema } from "@/lib/seo/faq-page-schema";
import type { Locale } from "@/lib/i18n/config";

type ServiceAreasFaqJsonLdProps = {
  locale: Locale;
};

export function ServiceAreasFaqJsonLd({ locale }: ServiceAreasFaqJsonLdProps) {
  const schema = buildServiceAreasFaqPageSchema(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
