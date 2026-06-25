import Image from "next/image";
import { ABOUT_CONTENT } from "@/app/[locale]/about/content";
import styles from "@/app/[locale]/about/components/about-section.module.css";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import type { Locale } from "@/lib/i18n/config";

type AboutWhoWeAreSectionProps = {
  locale: Locale;
};

export function AboutWhoWeAreSection({ locale }: AboutWhoWeAreSectionProps) {
  const { whoWeAre } = ABOUT_CONTENT;

  return (
    <section
      className={`${styles.section} ${styles.sectionAlt}`}
      aria-labelledby="about-who-we-are-heading"
    >
      <div className={styles.shell}>
        <div className={`${styles.textImage} fade-up`}>
          <div className={styles.copyColumn}>
            <header className={styles.copyHeader}>
              <p className={styles.eyebrow}>
                <SnowflakeIcon className={styles.eyebrowIcon} />
                <span>{whoWeAre.eyebrow[locale]}</span>
              </p>
              <h2 id="about-who-we-are-heading" className={styles.title}>
                {whoWeAre.heading[locale]}
              </h2>
            </header>

            <div className={styles.textBlock}>
              {whoWeAre.paragraphs.map((paragraph) => (
                <p key={paragraph[locale]} className={styles.paragraph}>
                  {paragraph[locale]}
                </p>
              ))}
            </div>
          </div>

          <div className={`${styles.imageWrap} ${styles.imageWrapFeatured}`}>
            <Image
              src={whoWeAre.image.src}
              alt={whoWeAre.image.alt[locale]}
              fill
              sizes="(min-width: 48rem) 40vw, 100vw"
              className={styles.image}
              style={{ objectPosition: whoWeAre.image.position }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
