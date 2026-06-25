import { AlOlayaFaqJsonLd } from "@/app/[locale]/ac-service-al-olaya/components/AlOlayaFaqJsonLd";

import { AlOlayaJsonLd } from "@/app/[locale]/ac-service-al-olaya/components/AlOlayaJsonLd";

import { AL_OLAYA_CONTENT, getAlOlayaNearbyAreas } from "@/app/[locale]/ac-service-al-olaya/content";

import { AreaHeroSection } from "@/app/[locale]/shared/area-pages/AreaHeroSection";

import { AreaPageCtaSection } from "@/app/[locale]/shared/area-pages/AreaPageCtaSection";

import { AreaPremiumProcessSection } from "@/app/[locale]/shared/area-pages/AreaPremiumProcessSection";

import { AreaSplitSection } from "@/app/[locale]/shared/area-pages/AreaSplitSection";

import {

  AreaChipsSection,

  AreaInternalLinksSection,

  AreaProblemsSection,

  AreaServiceCardsSection,

} from "@/app/[locale]/shared/area-pages/AreaSections";

import { FaqSection } from "@/app/[locale]/home/components/FaqSection";

import { getPageHref, PAGES } from "@/lib/i18n/pages";

import type { Locale } from "@/lib/i18n/config";



type AlOlayaPageProps = {

  locale: Locale;

};



export function AlOlayaPage({ locale }: AlOlayaPageProps) {

  const content = AL_OLAYA_CONTENT;

  const nearbyAreas = getAlOlayaNearbyAreas();



  return (

    <div className="al-olaya-page">

      <AlOlayaJsonLd locale={locale} />



      <AreaHeroSection

        locale={locale}

        headingId="al-olaya-hero-heading"

        eyebrow={content.hero.eyebrow}

        h1={content.hero.h1}

        subheadline={content.hero.subheadline}

        entitySummary={content.hero.entitySummary}

        image={content.hero.image}

      />



      <AreaSplitSection

        locale={locale}

        sectionId={content.localIntro.sectionId}

        eyebrow={content.localIntro.eyebrow}

        heading={content.localIntro.heading}

        body={content.localIntro.body}

        image={content.localIntro.image}

        altBackground

      />



      <AreaProblemsSection

        locale={locale}

        sectionId={content.problems.sectionId}

        eyebrow={content.problems.eyebrow}

        heading={content.problems.heading}

        cards={content.problems.cards}

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

        sectionId={content.booking.sectionId}

        eyebrow={content.booking.eyebrow}

        heading={content.booking.heading}

        headline={content.booking.headline}

        image={content.booking.image}

        steps={content.booking.steps}

      />



      <AreaChipsSection

        locale={locale}

        sectionId={content.nearby.sectionId}

        eyebrow={content.nearby.eyebrow}

        heading={content.nearby.heading}

        body={content.nearby.body}

        chips={nearbyAreas}

        altBackground

      />



      <FaqSection locale={locale} content={content.faq} sectionId="al-olaya-faq" />

      <AlOlayaFaqJsonLd locale={locale} />



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

        headingId="al-olaya-cta-heading"

        eyebrow={content.cta.eyebrow}

        heading={content.cta.heading}

        subline={content.cta.subline}

        contactHref={getPageHref(locale, content.cta.contactPageId)}

        contactLabel={content.cta.contactLabel}

      />

    </div>

  );

}


