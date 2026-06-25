import Link from "next/link";
import { ABOUT_CONTENT } from "@/app/[locale]/about/content";
import styles from "@/app/[locale]/about/components/about-section.module.css";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import { getPageHref } from "@/lib/i18n/pages";
import type { Locale } from "@/lib/i18n/config";

type AboutAudienceSectionProps = {
  locale: Locale;
};

export function AboutAudienceSection({ locale }: AboutAudienceSectionProps) {
  const { audience } = ABOUT_CONTENT;

  return (
    <section className={styles.section} aria-labelledby="about-audience-heading">
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{audience.eyebrow[locale]}</span>
          </p>
          <h2 id="about-audience-heading" className={styles.title}>
            {audience.heading[locale]}
          </h2>
          <p className={styles.subline}>{audience.subline[locale]}</p>
        </header>

        <ul className={`${styles.chips} fade-up fade-up--delay-1`} aria-label={audience.heading[locale]}>
          {audience.types.map((type) => (
            <li key={type.id} className={styles.chip}>
              {type.label[locale]}
            </li>
          ))}
        </ul>

        <div className={`${styles.grid} ${styles.gridTwo} fade-up fade-up--delay-2`} style={{ marginTop: "1.25rem" }}>
          {audience.cards.map((card) => (
            <Link key={card.id} href={getPageHref(locale, card.pageId)} className={styles.cardLinkWrap}>
              <h3 className={styles.cardTitle}>{card.title[locale]}</h3>
              <p className={styles.cardText}>{card.description[locale]}</p>
              <span className={styles.cardLink}>
                {locale === "ar" ? "عرض الخدمة" : "View service"}
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={14} height={14} aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
