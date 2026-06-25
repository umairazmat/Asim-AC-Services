import { buildWorkGallerySchema } from "@/lib/seo/work-gallery-schema";
import type { Locale } from "@/lib/i18n/config";

type WorkGalleryJsonLdProps = {
  locale: Locale;
};

export function WorkGalleryJsonLd({ locale }: WorkGalleryJsonLdProps) {
  const schema = buildWorkGallerySchema(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
