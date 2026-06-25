import { buildAboutPageSchema } from "@/lib/seo/about-schema";

export function AboutJsonLd() {
  const schema = buildAboutPageSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
