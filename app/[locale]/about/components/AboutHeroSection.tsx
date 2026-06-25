import Image from "next/image";
import { ABOUT_CONTENT } from "@/app/[locale]/about/content";
import heroStyles from "@/app/[locale]/contact/components/ContactHeroSection.module.css";
import { HeroCtas } from "@/app/[locale]/home/components/HeroCtas";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import { TRUST_BADGES } from "@/lib/constants/services";
import { FOOTER } from "@/lib/constants/footer";
import type { Locale } from "@/lib/i18n/config";

type AboutHeroSectionProps = {
  locale: Locale;
};

export function AboutHeroSection({ locale }: AboutHeroSectionProps) {
  const { hero } = ABOUT_CONTENT;

  return (
    <section className={heroStyles.section} aria-labelledby="about-hero-heading">
      <div className={heroStyles.ambient} aria-hidden="true">
        <span className={`${heroStyles.orb} ${heroStyles.orbOne}`} />
        <span className={`${heroStyles.orb} ${heroStyles.orbTwo}`} />
      </div>

      <div className={heroStyles.shell}>
        <div className={heroStyles.layout}>
          <div className={`${heroStyles.copy} fade-up`}>
            <p className={heroStyles.eyebrow}>
              <SnowflakeIcon className={heroStyles.eyebrowIcon} />
              <span>{hero.eyebrow[locale]}</span>
            </p>

            <h1 id="about-hero-heading" className={heroStyles.title}>
              {hero.h1[locale]}
            </h1>

            <p className={heroStyles.subheadline}>{hero.subheadline[locale]}</p>

            <p className={heroStyles.entitySummary}>{hero.entitySummary[locale]}</p>

            <span className={heroStyles.experienceBadge}>{hero.experienceBadge[locale]}</span>

            <HeroCtas locale={locale} />

            <ul className={heroStyles.trustRow} aria-label={locale === "ar" ? "شارات الثقة" : "Trust badges"}>
              {TRUST_BADGES.map((badge) => (
                <li key={badge.id} className={heroStyles.trustBadge}>
                  {FOOTER.barBadges[badge.id][locale]}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${heroStyles.mediaBlock} fade-up fade-up--delay-1`}>
            <div className={heroStyles.heroImageWrap}>
              <Image
                src={hero.image.src}
                alt={hero.image.alt[locale]}
                fill
                sizes="(min-width: 64rem) 40vw, 100vw"
                className={heroStyles.heroImage}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
