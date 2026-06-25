"use client";

import Image from "next/image";
import Link from "next/link";
import heroStyles from "@/app/[locale]/contact/components/ContactHeroSection.module.css";
import { HeroCtas } from "@/app/[locale]/home/components/HeroCtas";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import type { ServiceId } from "@/lib/constants/services";
import type { Locale } from "@/lib/i18n/config";

type Bilingual = { ar: string; en: string };

type AreaHeroSectionProps = {
  locale: Locale;
  headingId: string;
  eyebrow: Bilingual;
  h1: Bilingual;
  subheadline: Bilingual;
  entitySummary?: Bilingual;
  image: {
    src: string;
    alt: Bilingual;
    position?: string;
  };
  scrollCta?: {
    label: Bilingual;
    targetId: string;
  };
  bookServiceId?: ServiceId;
};

export function AreaHeroSection({
  locale,
  headingId,
  eyebrow,
  h1,
  subheadline,
  entitySummary,
  image,
  scrollCta,
  bookServiceId,
}: AreaHeroSectionProps) {
  return (
    <section className={heroStyles.section} aria-labelledby={headingId}>
      <div className={heroStyles.ambient} aria-hidden="true">
        <span className={`${heroStyles.orb} ${heroStyles.orbOne}`} />
        <span className={`${heroStyles.orb} ${heroStyles.orbTwo}`} />
      </div>

      <div className={heroStyles.shell}>
        <div className={heroStyles.layout}>
          <div className={`${heroStyles.copy} fade-up`}>
            <p className={heroStyles.eyebrow}>
              <SnowflakeIcon className={heroStyles.eyebrowIcon} />
              <span>{eyebrow[locale]}</span>
            </p>

            <h1 id={headingId} className={heroStyles.title}>
              {h1[locale]}
            </h1>

            <p className={heroStyles.subheadline}>{subheadline[locale]}</p>

            {entitySummary ? (
              <p className={heroStyles.entitySummary}>{entitySummary[locale]}</p>
            ) : null}

            <div className="home-hero__ctas">
              <HeroCtas locale={locale} serviceId={bookServiceId} />
              {scrollCta ? (
                <Link
                  href={`#${scrollCta.targetId}`}
                  className="home-hero__cta home-hero__cta--secondary"
                >
                  <span>{scrollCta.label[locale]}</span>
                </Link>
              ) : null}
            </div>
          </div>

          <div className={`${heroStyles.mediaBlock} fade-up fade-up--delay-1`}>
            <div className={heroStyles.heroImageWrap}>
              <Image
                src={image.src}
                alt={image.alt[locale]}
                fill
                sizes="(min-width: 64rem) 40vw, 100vw"
                className={heroStyles.heroImage}
                style={image.position ? { objectPosition: image.position } : undefined}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
