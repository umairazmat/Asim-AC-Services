import { buildServiceAreasPageSchema } from "@/lib/seo/area-pages-schema";
import type { Locale } from "@/lib/i18n/config";

type ServiceAreasJsonLdProps = {
  locale: Locale;
};

export function ServiceAreasJsonLd({ locale }: ServiceAreasJsonLdProps) {
  const schema = buildServiceAreasPageSchema(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
