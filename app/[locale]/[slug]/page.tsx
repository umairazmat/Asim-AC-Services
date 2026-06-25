import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { AboutPage } from "@/app/[locale]/about/AboutPage";

import { generateAboutMetadata } from "@/app/[locale]/about/metadata";

import { AlOlayaPage } from "@/app/[locale]/ac-service-al-olaya/AlOlayaPage";

import { generateAlOlayaMetadata } from "@/app/[locale]/ac-service-al-olaya/metadata";

import { ContactPage } from "@/app/[locale]/contact/ContactPage";

import { generateContactMetadata } from "@/app/[locale]/contact/metadata";

import { ServiceAreasPage } from "@/app/[locale]/service-areas/ServiceAreasPage";

import { generateServiceAreasMetadata } from "@/app/[locale]/service-areas/metadata";

import { isServicePageId } from "@/app/[locale]/shared/service-pages/content";

import { generateServicePageMetadata } from "@/app/[locale]/shared/service-pages/metadata";

import { ServicePage } from "@/app/[locale]/shared/service-pages/ServicePage";

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



  if (pageId === "contact") {

    return generateContactMetadata(locale);

  }



  if (pageId === "about") {

    return generateAboutMetadata(locale);

  }



  if (pageId === "service-areas-riyadh") {

    return generateServiceAreasMetadata(locale);

  }



  if (pageId === "ac-service-al-olaya-riyadh") {

    return generateAlOlayaMetadata(locale);

  }



  if (isServicePageId(pageId)) {

    return generateServicePageMetadata(locale, pageId);

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



  if (pageId === "contact") {

    return <ContactPage locale={locale} />;

  }



  if (pageId === "about") {

    return <AboutPage locale={locale} />;

  }



  if (pageId === "service-areas-riyadh") {

    return <ServiceAreasPage locale={locale} />;

  }



  if (pageId === "ac-service-al-olaya-riyadh") {

    return <AlOlayaPage locale={locale} />;

  }



  if (isServicePageId(pageId)) {

    return <ServicePage locale={locale} pageId={pageId} />;

  }



  return <PagePlaceholder locale={locale} title={page.title} />;

}


