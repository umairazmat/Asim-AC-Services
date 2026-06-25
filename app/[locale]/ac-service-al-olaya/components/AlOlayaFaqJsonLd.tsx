import { buildAlOlayaFaqPageSchema } from "@/lib/seo/faq-page-schema";
import type { Locale } from "@/lib/i18n/config";

type AlOlayaFaqJsonLdProps = {
  locale: Locale;
};

export function AlOlayaFaqJsonLd({ locale }: AlOlayaFaqJsonLdProps) {
  const schema = buildAlOlayaFaqPageSchema(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
