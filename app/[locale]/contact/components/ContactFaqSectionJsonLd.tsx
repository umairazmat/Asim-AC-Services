import { buildContactFaqPageSchema } from "@/lib/seo/faq-page-schema";
import type { Locale } from "@/lib/i18n/config";

type ContactFaqSectionJsonLdProps = {
  locale: Locale;
};

export function ContactFaqSectionJsonLd({ locale }: ContactFaqSectionJsonLdProps) {
  const schema = buildContactFaqPageSchema(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
