import Link from "next/link";
import { ABOUT_CONTENT } from "@/app/[locale]/about/content";
import { HOME_CONTENT } from "@/app/[locale]/home/content";
import styles from "@/app/[locale]/about/components/about-section.module.css";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import { getPageHref } from "@/lib/i18n/pages";
import type { Locale } from "@/lib/i18n/config";

type AboutWhatWeDoSectionProps = {
  locale: Locale;
};

export function AboutWhatWeDoSection({ locale }: AboutWhatWeDoSectionProps) {
  const { whatWeDo } = ABOUT_CONTENT;
  const { cards } = HOME_CONTENT.mainServices;

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="about-what-we-do-heading">
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{whatWeDo.eyebrow[locale]}</span>
          </p>
          <h2 id="about-what-we-do-heading" className={styles.title}>
            {whatWeDo.heading[locale]}
          </h2>
          <p className={styles.subline}>{whatWeDo.subline[locale]}</p>
        </header>

        <div className={`${styles.grid} ${styles.gridServices} fade-up fade-up--delay-1`}>
          {cards.map((card) => (
            <article key={card.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title[locale]}</h3>
              <p className={styles.cardText}>{card.description[locale]}</p>
              <Link href={getPageHref(locale, card.pageId)} className={styles.cardLink}>
                <span>{locale === "ar" ? "اقرأ المزيد" : "Learn more"}</span>
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>

        <div className={`${styles.header} fade-up fade-up--delay-2`} style={{ marginTop: "1.25rem", marginBottom: 0 }}>
          <Link href={getPageHref(locale, whatWeDo.hubLink.pageId)} className={styles.linkButton}>
            {whatWeDo.hubLink.label[locale]}
            <ArrowIcon />
          </Link>
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
