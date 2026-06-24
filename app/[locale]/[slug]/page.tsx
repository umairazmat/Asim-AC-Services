import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/pages/PagePlaceholder";
import { isLocale, locales } from "@/lib/i18n/config";
import {
  getPageAlternates,
  getPageBySlug,
  PAGE_IDS,
  PAGES,
  type PageId,
} from "@/lib/i18n/pages";

type SlugPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    PAGE_IDS.filter((pageId) => pageId !== "home").map((pageId) => ({
      locale,
      slug: PAGES[pageId].slug[locale],
    })),
  );
}

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const pageId = getPageBySlug(locale, slug);

  if (!pageId) {
    return {};
  }

  const page = PAGES[pageId];

  return {
    title: page.title[locale],
    alternates: getPageAlternates(pageId, locale),
  };
}

export default async function SlugPage({ params }: SlugPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const pageId = getPageBySlug(locale, slug);

  if (!pageId || pageId === "home") {
    notFound();
  }

  const page = PAGES[pageId as Exclude<PageId, "home">];

  return <PagePlaceholder locale={locale} title={page.title} />;
}
