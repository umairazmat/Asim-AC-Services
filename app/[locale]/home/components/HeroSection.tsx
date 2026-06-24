import { HOME_CONTENT } from "@/app/[locale]/home/content";
import { HeroCtas } from "@/app/[locale]/home/components/HeroCtas";
import { HeroGalleryDesktop, HeroGalleryMobile } from "@/app/[locale]/home/components/HeroGallery";
import { HeroStatsBar } from "@/app/[locale]/home/components/HeroStatsBar";
import { HeroTrustBadge } from "@/app/[locale]/home/components/HeroTrustBadge";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import { BRAND } from "@/lib/constants/brand";
import { CONTACT } from "@/lib/constants/contact";
import type { Locale } from "@/lib/i18n/config";

type HeroSectionProps = {
  locale: Locale;
};

export function HeroSection({ locale }: HeroSectionProps) {  const { hero } = HOME_CONTENT;

  return (
    <section className="home-hero" aria-labelledby="home-hero-heading">
      <div className="home-hero__ambient" aria-hidden="true">
        <span className="home-hero__orb home-hero__orb--one" />
        <span className="home-hero__orb home-hero__orb--two" />
      </div>

      <div className="home-hero__frame">
        <div className="home-hero__main">
          <div className="home-hero__copy fade-up">
            <p className="home-hero__eyebrow">
              <SnowflakeIcon className="home-hero__eyebrow-icon" />
              <span>{hero.eyebrow[locale]}</span>
            </p>

            <h1 id="home-hero-heading" className="home-hero__title">
              <span className="home-hero__title-lead">{hero.h1Lead[locale]}</span>{" "}
              <span className="home-hero__title-tail">{hero.h1Tail[locale]}</span>
            </h1>

            <p className="home-hero__subheadline">{hero.subheadline[locale]}</p>

            <p className="home-hero__location">
              <LocationIcon />
              <span>{CONTACT.location.label[locale]}</span>
              <span className="home-hero__tagline">{BRAND.tagline[locale]}</span>
            </p>

            <HeroTrustBadge locale={locale} />

            <ul className="home-hero__points">
              {hero.points.map((point) => (
                <li key={point.id} className="home-hero__point">
                  <CheckIcon />
                  <span>{point.label[locale]}</span>
                </li>
              ))}
            </ul>

            <HeroCtas locale={locale} />
          </div>

          <aside className="home-hero__media fade-up fade-up--delay-1" aria-label={locale === "ar" ? "صور خدمات المكيفات" : "AC service photos"}>
            <HeroGalleryMobile locale={locale} />
            <HeroGalleryDesktop locale={locale} />
          </aside>        </div>

        <HeroStatsBar locale={locale} />
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <span className="home-hero__point-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M20 6 9 17l-5-5"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5 shrink-0">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
    </svg>
  );
}
