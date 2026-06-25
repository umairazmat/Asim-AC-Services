"use client";

import Image from "next/image";
import styles from "@/app/[locale]/shared/area-pages/AreaSplitSection.module.css";
import { HeroCtas } from "@/app/[locale]/home/components/HeroCtas";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import type { ServiceId } from "@/lib/constants/services";
import type { Locale } from "@/lib/i18n/config";

type Bilingual = { ar: string; en: string };

type AreaSplitSectionProps = {
  locale: Locale;
  sectionId: string;
  eyebrow: Bilingual;
  heading: Bilingual;
  body: Bilingual;
  image: {
    src: string;
    alt: Bilingual;
    position?: string;
  };
  chips?: ReadonlyArray<{ id: string; label: Bilingual }>;
  altBackground?: boolean;
  showCtas?: boolean;
  bookServiceId?: ServiceId;
};

export function AreaSplitSection({
  locale,
  sectionId,
  eyebrow,
  heading,
  body,
  image,
  chips,
  altBackground = false,
  showCtas = true,
  bookServiceId,
}: AreaSplitSectionProps) {
  return (
    <section
      id={sectionId}
      className={`${styles.section} ${altBackground ? styles.sectionAlt : ""}`}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className={styles.shell}>
        <div className={`${styles.layout} fade-up`}>
          <div className={styles.copy}>
            <header className={styles.header}>
              <p className={styles.eyebrow}>
                <SnowflakeIcon className={styles.eyebrowIcon} />
                <span>{eyebrow[locale]}</span>
              </p>
              <h2 id={`${sectionId}-heading`} className={styles.title}>
                {heading[locale]}
              </h2>
              <p className={styles.body}>{body[locale]}</p>
            </header>

            {chips?.length ? (
              <ul className={styles.chips} aria-label={heading[locale]}>
                {chips.map((chip) => (
                  <li key={chip.id} className={styles.chip}>
                    {chip.label[locale]}
                  </li>
                ))}
              </ul>
            ) : null}

            {showCtas ? (
              <div className={styles.ctas}>
                <HeroCtas locale={locale} serviceId={bookServiceId} />
              </div>
            ) : null}
          </div>

          <div className={styles.imageWrap}>
            <Image
              src={image.src}
              alt={image.alt[locale]}
              fill
              sizes="(min-width: 48rem) 40vw, 100vw"
              className={styles.image}
              style={image.position ? { objectPosition: image.position } : undefined}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
