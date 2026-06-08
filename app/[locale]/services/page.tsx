import { PagePlaceholder } from "@/components/pages/PagePlaceholder";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PagePlaceholder locale={locale} title={{ ar: "خدماتنا", en: "Services" }} />;
}
