import { PagePlaceholder } from "@/components/pages/PagePlaceholder";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PagePlaceholder locale={locale} title={{ ar: "تواصل معنا", en: "Contact Us" }} />;
}
