import { PagePlaceholder } from "@/components/pages/PagePlaceholder";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PagePlaceholder locale={locale} title={{ ar: "من نحن", en: "About Us" }} />;
}
