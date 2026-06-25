import { buildLocalBusinessSchema } from "@/lib/seo/local-business-schema";

export function HomeJsonLd() {
  const schema = buildLocalBusinessSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
