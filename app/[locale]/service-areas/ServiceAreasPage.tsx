import { ServiceAreasFaqJsonLd } from "@/app/[locale]/service-areas/components/ServiceAreasFaqJsonLd";

import { ServiceAreasJsonLd } from "@/app/[locale]/service-areas/components/ServiceAreasJsonLd";

import {

  getServiceAreasDistricts,

  SERVICE_AREAS_CONTENT,

} from "@/app/[locale]/service-areas/content";

import { AreaHeroSection } from "@/app/[locale]/shared/area-pages/AreaHeroSection";

import { AreaPageCtaSection } from "@/app/[locale]/shared/area-pages/AreaPageCtaSection";

import { AreaPremiumProcessSection } from "@/app/[locale]/shared/area-pages/AreaPremiumProcessSection";

import { AreaSplitSection } from "@/app/[locale]/shared/area-pages/AreaSplitSection";

import {

  AreaDistrictGridSection,

  AreaInternalLinksSection,

  AreaServiceCardsSection,

} from "@/app/[locale]/shared/area-pages/AreaSections";

import { FaqSection } from "@/app/[locale]/home/components/FaqSection";

import { getPageHref, PAGES } from "@/lib/i18n/pages";

import type { Locale } from "@/lib/i18n/config";



type ServiceAreasPageProps = {

  locale: Locale;

};



export function ServiceAreasPage({ locale }: ServiceAreasPageProps) {

  const content = SERVICE_AREAS_CONTENT;

  const districts = getServiceAreasDistricts();



  return (

    <div className="service-areas-page">

      <ServiceAreasJsonLd locale={locale} />



      <AreaHeroSection

        locale={locale}

        headingId="service-areas-hero-heading"

        eyebrow={content.hero.eyebrow}

        h1={content.hero.h1}

        subheadline={content.hero.subheadline}

        entitySummary={content.hero.entitySummary}

        image={content.hero.image}

        scrollCta={{

          label: content.hero.scrollCta,

          targetId: content.districts.sectionId,

        }}

      />



      <AreaSplitSection

        locale={locale}

        sectionId={content.primaryArea.sectionId}

        eyebrow={content.primaryArea.eyebrow}

        heading={content.primaryArea.heading}

        body={content.primaryArea.body}

        image={content.primaryArea.image}

        chips={content.primaryArea.chips}

        altBackground

      />



      <AreaDistrictGridSection

        locale={locale}

        sectionId={content.districts.sectionId}

        eyebrow={content.districts.eyebrow}

        heading={content.districts.heading}

        intro={content.districts.intro}

        districts={districts}

        getPageHref={getPageHref}

      />



      <AreaServiceCardsSection

        locale={locale}

        sectionId={content.services.sectionId}

        eyebrow={content.services.eyebrow}

        heading={content.services.heading}

        cards={content.services.cards}

        getPageHref={getPageHref}

        altBackground

      />



      <AreaSplitSection

        locale={locale}

        sectionId={content.audience.sectionId}

        eyebrow={content.audience.eyebrow}

        heading={content.audience.heading}

        body={content.audience.body}

        image={content.audience.image}

      />



      <AreaPremiumProcessSection

        locale={locale}

        sectionId={content.confirmArea.sectionId}

        eyebrow={content.confirmArea.eyebrow}

        heading={content.confirmArea.heading}

        headline={content.confirmArea.headline}

        image={content.confirmArea.image}

        steps={content.confirmArea.steps}

      />



      <FaqSection locale={locale} content={content.faq} sectionId="service-areas-faq" />

      <ServiceAreasFaqJsonLd locale={locale} />



      <AreaInternalLinksSection

        locale={locale}

        sectionId={content.internalLinks.sectionId}

        eyebrow={content.internalLinks.eyebrow}

        heading={content.internalLinks.heading}

        pageIds={content.internalLinks.pageIds}

        getPageHref={getPageHref}

        getPageTitle={(pageLocale, pageId) => PAGES[pageId].title[pageLocale]}

      />



      <AreaPageCtaSection

        locale={locale}

        headingId="service-areas-cta-heading"

        eyebrow={content.cta.eyebrow}

        heading={content.cta.heading}

        subline={content.cta.subline}

        contactHref={getPageHref(locale, content.cta.contactPageId)}

        contactLabel={content.cta.contactLabel}

      />

    </div>

  );

}


