import { HeroSection } from "@/app/[locale]/home/components/HeroSection";
import { PainStripSection } from "@/app/[locale]/home/components/PainStripSection";
import { QuickQuoteSection } from "@/app/[locale]/home/components/QuickQuoteSection";
import { QuickQuoteProvider } from "@/components/providers/QuickQuoteProvider";
import type { Locale } from "@/lib/i18n/config";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  return (
    <QuickQuoteProvider>
      <div className="home-page">
        <HeroSection locale={locale} />
        <PainStripSection locale={locale} />
        <QuickQuoteSection locale={locale} />
      </div>
    </QuickQuoteProvider>
  );
}
