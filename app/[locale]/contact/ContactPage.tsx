import { ContactHeroSection } from "@/app/[locale]/contact/components/ContactHeroSection";
import { ContactFaqSectionJsonLd } from "@/app/[locale]/contact/components/ContactFaqSectionJsonLd";
import { FaqSection } from "@/app/[locale]/home/components/FaqSection";
import { HomeJsonLd } from "@/app/[locale]/home/components/HomeJsonLd";
import { RiyadhServiceAreaSection } from "@/app/[locale]/home/components/RiyadhServiceAreaSection";
import { AreaInternalLinksSection } from "@/app/[locale]/shared/area-pages/AreaSections";
import { CONTACT_CONTENT } from "@/app/[locale]/contact/content";
import { SITE_FULL_INTERNAL_LINKS } from "@/lib/constants/geo-seo";
import { getPageHref, PAGES } from "@/lib/i18n/pages";
import type { Locale } from "@/lib/i18n/config";

type ContactPageProps = {
  locale: Locale;
};

export function ContactPage({ locale }: ContactPageProps) {
  return (
    <div className="contact-page">
      <HomeJsonLd />
      <ContactHeroSection locale={locale} />
      <RiyadhServiceAreaSection locale={locale} />
      <AreaInternalLinksSection
        locale={locale}
        sectionId="contact-site-links"
        eyebrow={{ ar: "روابط مفيدة", en: "USEFUL LINKS" }}
        heading={{
          ar: "صفحات خدمة المكيفات في الرياض والمملكة",
          en: "AC Service Pages in Riyadh & KSA",
        }}
        pageIds={SITE_FULL_INTERNAL_LINKS.filter((pageId) => pageId !== "contact")}
        getPageHref={getPageHref}
        getPageTitle={(pageLocale, pageId) => PAGES[pageId].title[pageLocale]}
      />
      <FaqSection locale={locale} content={CONTACT_CONTENT.faq} sectionId="contact-faq" />
      <ContactFaqSectionJsonLd locale={locale} />
    </div>
  );
}
