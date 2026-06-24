import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/app/[locale]/home/HomePage";
import { generateHomeMetadata } from "@/app/[locale]/home/metadata";
import { isLocale } from "@/lib/i18n/config";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return generateHomeMetadata(locale);
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <HomePage locale={locale} />;
}
