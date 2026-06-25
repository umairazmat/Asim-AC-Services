import { AboutAudienceSection } from "@/app/[locale]/about/components/AboutAudienceSection";
import { AboutCtaSection } from "@/app/[locale]/about/components/AboutCtaSection";
import { AboutHeroSection } from "@/app/[locale]/about/components/AboutHeroSection";
import { AboutHowWeWorkSection } from "@/app/[locale]/about/components/AboutHowWeWorkSection";
import { AboutJsonLd } from "@/app/[locale]/about/components/AboutJsonLd";
import { AboutWhatWeDoSection } from "@/app/[locale]/about/components/AboutWhatWeDoSection";
import { AboutWhoWeAreSection } from "@/app/[locale]/about/components/AboutWhoWeAreSection";
import { ABOUT_CONTENT } from "@/app/[locale]/about/content";
import { WorkGallerySection } from "@/app/[locale]/home/components/WorkGallerySection";
import { WorkGalleryJsonLd } from "@/app/[locale]/home/components/WorkGalleryJsonLd";
import { WhyChooseSection } from "@/app/[locale]/home/components/WhyChooseSection";
import { AreaInternalLinksSection } from "@/app/[locale]/shared/area-pages/AreaSections";
import { SITE_FULL_INTERNAL_LINKS } from "@/lib/constants/geo-seo";
import { getPageHref, PAGES } from "@/lib/i18n/pages";
import type { Locale } from "@/lib/i18n/config";

type AboutPageProps = {
  locale: Locale;
};

export function AboutPage({ locale }: AboutPageProps) {
  return (
    <div className="about-page">
      <AboutJsonLd />
      <AboutHeroSection locale={locale} />
      <AboutWhoWeAreSection locale={locale} />
      <AboutWhatWeDoSection locale={locale} />
      <AboutAudienceSection locale={locale} />
      <AboutHowWeWorkSection locale={locale} />
      <WhyChooseSection
        locale={locale}
        content={ABOUT_CONTENT.whyChoose}
        headingId="about-why-choose-heading"
      />
      <AreaInternalLinksSection
        locale={locale}
        sectionId="about-site-links"
        eyebrow={{ ar: "روابط مفيدة", en: "USEFUL LINKS" }}
        heading={{
          ar: "خدمات المكيفات في الرياض والمملكة العربية السعودية",
          en: "AC Services in Riyadh & Saudi Arabia",
        }}
        pageIds={SITE_FULL_INTERNAL_LINKS}
        getPageHref={getPageHref}
        getPageTitle={(pageLocale, pageId) => PAGES[pageId].title[pageLocale]}
      />
      <WorkGallerySection
        locale={locale}
        variant="full"
        sectionId="work-gallery"
        headingId="about-work-gallery-heading"
      />
      <WorkGalleryJsonLd locale={locale} />
      <AboutCtaSection locale={locale} />
    </div>
  );
}
