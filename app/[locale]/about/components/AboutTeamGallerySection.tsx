import Image from "next/image";
import { ABOUT_CONTENT } from "@/app/[locale]/about/content";
import styles from "@/app/[locale]/about/components/about-section.module.css";
import galleryStyles from "@/app/[locale]/about/components/AboutTeamGallerySection.module.css";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import type { Locale } from "@/lib/i18n/config";

type AboutTeamGallerySectionProps = {
  locale: Locale;
};

export function AboutTeamGallerySection({ locale }: AboutTeamGallerySectionProps) {
  const { teamGallery } = ABOUT_CONTENT;

  return (
    <section className={styles.section} aria-labelledby="about-team-gallery-heading">
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{teamGallery.eyebrow[locale]}</span>
          </p>
          <h2 id="about-team-gallery-heading" className={styles.title}>
            {teamGallery.heading[locale]}
          </h2>
          <p className={styles.subline}>{teamGallery.subline[locale]}</p>
        </header>

        <ul className={`${galleryStyles.grid} fade-up fade-up--delay-1`}>
          {teamGallery.images.map((item) => (
            <li key={item.id} className={galleryStyles.item}>
              <div className={galleryStyles.imageWrap}>
                <Image
                  src={item.src}
                  alt={item.alt[locale]}
                  fill
                  sizes="(min-width: 64rem) 28vw, (min-width: 40rem) 45vw, 100vw"
                  className={galleryStyles.image}
                  style={{ objectPosition: item.position }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
