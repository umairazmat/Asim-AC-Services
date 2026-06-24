import { HeroSection } from "@/app/[locale]/home/components/HeroSection";
import type { Locale } from "@/lib/i18n/config";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  return (
    <div className="home-page">
      <HeroSection locale={locale} />
    </div>
  );
}
