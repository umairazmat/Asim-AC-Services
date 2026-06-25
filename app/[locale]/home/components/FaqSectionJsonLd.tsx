import { buildHomeFaqPageSchema } from "@/lib/seo/faq-page-schema";
import type { Locale } from "@/lib/i18n/config";

type FaqSectionJsonLdProps = {
  locale: Locale;
};

export function FaqSectionJsonLd({ locale }: FaqSectionJsonLdProps) {
  const schema = buildHomeFaqPageSchema(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
