import { notFound } from "next/navigation";
import { ComingSoonPage } from "@/components/coming-soon/ComingSoonPage";
import { isLocale } from "@/lib/i18n/config";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <ComingSoonPage key={locale} locale={locale} />;
}
