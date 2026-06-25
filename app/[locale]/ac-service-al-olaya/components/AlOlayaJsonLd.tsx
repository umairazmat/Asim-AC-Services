import { buildAlOlayaPageSchema } from "@/lib/seo/area-pages-schema";
import type { Locale } from "@/lib/i18n/config";

type AlOlayaJsonLdProps = {
  locale: Locale;
};

export function AlOlayaJsonLd({ locale }: AlOlayaJsonLdProps) {
  const schema = buildAlOlayaPageSchema(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
