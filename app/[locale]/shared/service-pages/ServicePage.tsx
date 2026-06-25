import { ServicePageFaqJsonLd } from "@/app/[locale]/shared/service-pages/components/ServicePageFaqJsonLd";
import { ServicePageJsonLd } from "@/app/[locale]/shared/service-pages/components/ServicePageJsonLd";
import { getServicePageContent } from "@/app/[locale]/shared/service-pages/content";
import type { FaqContent, ServicePageId } from "@/app/[locale]/shared/service-pages/types";
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
import type { FaqSectionContent } from "@/app/[locale]/home/components/FaqSection";
import { HOME_CONTENT } from "@/app/[locale]/home/content";
import { WhyChooseSection } from "@/app/[locale]/home/components/WhyChooseSection";
import { getPageHref, PAGES } from "@/lib/i18n/pages";
import { SITE_AREA_INTERNAL_LINKS } from "@/lib/constants/geo-seo";
import type { Locale } from "@/lib/i18n/config";

type ServicePageProps = {
  locale: Locale;
  pageId: ServicePageId;
};

function toFaqSectionContent(faq: FaqContent): FaqSectionContent {
  return {
    ...HOME_CONTENT.faq,
    eyebrow: faq.eyebrow,
    heading: faq.heading,
    items: faq.items,
  };
}

export function ServicePage({ locale, pageId }: ServicePageProps) {
  const content = getServicePageContent(pageId);
  const slug = pageId.replace(/-/g, "-");

  if (content.kind === "hub") {
    return (
      <div className={`service-page service-page--${slug}`}>
        <ServicePageJsonLd locale={locale} pageId={pageId} />

        <AreaHeroSection
          locale={locale}
          headingId={`${pageId}-hero-heading`}
          eyebrow={content.hero.eyebrow}
          h1={content.hero.h1}
          subheadline={content.hero.subheadline}
          entitySummary={content.hero.entitySummary}
          image={content.hero.image}
          scrollCta={{
            label: content.hero.scrollCta,
            targetId: content.hero.scrollTargetId,
          }}
        />

        <AreaSplitSection
          locale={locale}
          sectionId={content.overview.sectionId}
          eyebrow={content.overview.eyebrow}
          heading={content.overview.heading}
          body={content.overview.body}
          image={content.overview.image}
          chips={content.overview.chips}
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
          sectionId={content.serviceCards.sectionId}
          eyebrow={content.serviceCards.eyebrow}
          heading={content.serviceCards.heading}
          cards={content.serviceCards.cards}
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
          chips={content.audience.chips}
        />

        <AreaSplitSection
          locale={locale}
          sectionId={content.serviceArea.sectionId}
          eyebrow={content.serviceArea.eyebrow}
          heading={content.serviceArea.heading}
          body={content.serviceArea.body}
          image={content.serviceArea.image}
          chips={content.serviceArea.chips}
          altBackground
        />

        <WhyChooseSection
          locale={locale}
          content={content.whyChoose}
          headingId={`${pageId}-why-choose-heading`}
        />

        <FaqSection locale={locale} content={toFaqSectionContent(content.faq)} sectionId={`${pageId}-faq`} />
        <ServicePageFaqJsonLd locale={locale} pageId={pageId} />

        <AreaInternalLinksSection
          locale={locale}
          sectionId={`${pageId}-links`}
          eyebrow={{ ar: "روابط مفيدة", en: "USEFUL LINKS" }}
          heading={{
            ar: "خدمات المكيفات في الرياض والمملكة العربية السعودية",
            en: "AC Services in Riyadh & Saudi Arabia",
          }}
          pageIds={SITE_AREA_INTERNAL_LINKS}
          getPageHref={getPageHref}
          getPageTitle={(pageLocale, linkPageId) => PAGES[linkPageId].title[pageLocale]}
        />

        <AreaPageCtaSection
          locale={locale}
          headingId={`${pageId}-cta-heading`}
          eyebrow={content.cta.eyebrow}
          heading={content.cta.heading}
          subline={content.cta.subline}
          contactHref={getPageHref(locale, content.cta.contactPageId)}
          contactLabel={content.cta.contactLabel}
        />
      </div>
    );
  }

  return (
    <div className={`service-page service-page--${slug}`}>
      <ServicePageJsonLd locale={locale} pageId={pageId} />

      <AreaHeroSection
        locale={locale}
        headingId={`${pageId}-hero-heading`}
        eyebrow={content.hero.eyebrow}
        h1={content.hero.h1}
        subheadline={content.hero.subheadline}
        entitySummary={content.hero.entitySummary}
        image={content.hero.image}
        bookServiceId={content.bookServiceId}
      />

      <AreaSplitSection
        locale={locale}
        sectionId={content.problems.sectionId}
        eyebrow={content.problems.eyebrow}
        heading={content.problems.heading}
        body={content.problems.body}
        image={content.problems.image}
        chips={content.problems.chips}
        bookServiceId={content.bookServiceId}
        altBackground
      />

      <AreaSplitSection
        locale={locale}
        sectionId={content.includes.sectionId}
        eyebrow={content.includes.eyebrow}
        heading={content.includes.heading}
        body={content.includes.body}
        image={content.includes.image}
        chips={content.includes.chips}
        bookServiceId={content.bookServiceId}
      />

      <AreaChipsSection
        locale={locale}
        sectionId={content.acTypes.sectionId}
        eyebrow={content.acTypes.eyebrow}
        heading={content.acTypes.heading}
        body={content.acTypes.body}
        chips={content.acTypes.chips}
        altBackground
      />

      <AreaPremiumProcessSection
        locale={locale}
        sectionId={content.booking.sectionId}
        eyebrow={content.booking.eyebrow}
        heading={content.booking.heading}
        headline={content.booking.headline}
        image={content.booking.image}
        steps={content.booking.steps}
        bookServiceId={content.bookServiceId}
      />

      <WhyChooseSection
        locale={locale}
        content={content.whyChoose}
        headingId={`${pageId}-why-choose-heading`}
      />

      <AreaSplitSection
        locale={locale}
        sectionId={content.serviceArea.sectionId}
        eyebrow={content.serviceArea.eyebrow}
        heading={content.serviceArea.heading}
        body={content.serviceArea.body}
        image={content.serviceArea.image}
        chips={content.serviceArea.chips}
        bookServiceId={content.bookServiceId}
        altBackground
      />

      <AreaServiceCardsSection
        locale={locale}
        sectionId={content.relatedServices.sectionId}
        eyebrow={content.relatedServices.eyebrow}
        heading={content.relatedServices.heading}
        cards={content.relatedServices.cards}
        getPageHref={getPageHref}
      />

      <AreaInternalLinksSection
        locale={locale}
        sectionId={`${pageId}-links`}
        eyebrow={{ ar: "روابط مفيدة", en: "USEFUL LINKS" }}
        heading={{ ar: "صفحات ذات صلة", en: "Related Pages" }}
        pageIds={content.relatedServices.linkPageIds}
        getPageHref={getPageHref}
        getPageTitle={(pageLocale, linkPageId) => PAGES[linkPageId].title[pageLocale]}
      />

      <FaqSection locale={locale} content={toFaqSectionContent(content.faq)} sectionId={`${pageId}-faq`} />
      <ServicePageFaqJsonLd locale={locale} pageId={pageId} />

      <AreaPageCtaSection
        locale={locale}
        headingId={`${pageId}-cta-heading`}
        eyebrow={content.cta.eyebrow}
        heading={content.cta.heading}
        subline={content.cta.subline}
        contactHref={getPageHref(locale, content.cta.contactPageId)}
        contactLabel={content.cta.contactLabel}
        bookServiceId={content.bookServiceId}
      />
    </div>
  );
}
