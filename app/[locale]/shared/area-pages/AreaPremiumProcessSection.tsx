"use client";

import Image from "next/image";
import styles from "@/app/[locale]/shared/area-pages/AreaPremiumProcessSection.module.css";
import { HeroCtas } from "@/app/[locale]/home/components/HeroCtas";
import type { ServiceId } from "@/lib/constants/services";
import type { Locale } from "@/lib/i18n/config";

type Bilingual = { ar: string; en: string };

type ProcessStep = {
  id: string;
  title: Bilingual;
  description: Bilingual;
};

type AreaPremiumProcessSectionProps = {
  locale: Locale;
  sectionId: string;
  eyebrow: Bilingual;
  heading: Bilingual;
  headline: Bilingual;
  image: {
    src: string;
    alt: Bilingual;
    position?: string;
  };
  steps: ReadonlyArray<ProcessStep>;
  bookServiceId?: ServiceId;
};

export function AreaPremiumProcessSection({
  locale,
  sectionId,
  eyebrow,
  heading,
  headline,
  image,
  steps,
  bookServiceId,
}: AreaPremiumProcessSectionProps) {
  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className={styles.shell}>
        <div className={`${styles.card} fade-up`}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span>{eyebrow[locale]}</span>
            </p>

            <h2 id={`${sectionId}-heading`} className={styles.title}>
              {headline[locale]}
            </h2>

            <div className={styles.imageWrap}>
              <Image
                src={image.src}
                alt={image.alt[locale]}
                fill
                sizes="(min-width: 64rem) 40vw, 100vw"
                className={styles.image}
                style={image.position ? { objectPosition: image.position } : undefined}
              />
            </div>

            <div className={styles.ctas}>
              <HeroCtas locale={locale} serviceId={bookServiceId} />
            </div>
          </div>

          <ol className={styles.timeline} aria-label={heading[locale]}>
            {steps.map((step, index) => (
              <li key={step.id} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{step.title[locale]}</h3>
                  <p className={styles.stepText}>{step.description[locale]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
