import { AcTypesBrandsSection } from "@/app/[locale]/home/components/AcTypesBrandsSection";
import { WhyChooseSection } from "@/app/[locale]/home/components/WhyChooseSection";
import { MainServicesSection } from "@/app/[locale]/home/components/MainServicesSection";
import { EmergencyRepairSection } from "@/app/[locale]/home/components/EmergencyRepairSection";
import { HomeEntitySummarySection } from "@/app/[locale]/home/components/HomeEntitySummarySection";
import { HomeJsonLd } from "@/app/[locale]/home/components/HomeJsonLd";
import { RiyadhServiceAreaSection } from "@/app/[locale]/home/components/RiyadhServiceAreaSection";
import { HeroSection } from "@/app/[locale]/home/components/HeroSection";
import { PainStripSection } from "@/app/[locale]/home/components/PainStripSection";
import { CustomerFeedbackSection } from "@/app/[locale]/home/components/CustomerFeedbackSection";
import { WorkGallerySection } from "@/app/[locale]/home/components/WorkGallerySection";
import { WorkGalleryJsonLd } from "@/app/[locale]/home/components/WorkGalleryJsonLd";
import { FaqSection } from "@/app/[locale]/home/components/FaqSection";
import { FaqSectionJsonLd } from "@/app/[locale]/home/components/FaqSectionJsonLd";
import type { Locale } from "@/lib/i18n/config";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  return (
    <div className="home-page">
      <HomeJsonLd />
      <HeroSection locale={locale} />
      <PainStripSection locale={locale} />
      <MainServicesSection locale={locale} />
      <EmergencyRepairSection locale={locale} />
      <WhyChooseSection locale={locale} />
      <AcTypesBrandsSection locale={locale} />
      <RiyadhServiceAreaSection locale={locale} />
      <HomeEntitySummarySection locale={locale} />
      <WorkGallerySection locale={locale} />
      <WorkGalleryJsonLd locale={locale} />
      <CustomerFeedbackSection locale={locale} />
      <FaqSection locale={locale} />
      <FaqSectionJsonLd locale={locale} />
    </div>
  );
}
