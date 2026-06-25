import Image from "next/image";
import Link from "next/link";
import { HOME_CONTENT } from "@/app/[locale]/home/content";
import styles from "@/app/[locale]/home/components/HomeEntitySummarySection.module.css";
import { BOOK_SERVICE_SECTION_ID } from "@/lib/constants/book-service-content";
import { HOME_ENTITY_LINKS } from "@/lib/constants/home-seo-links";
import { getPageHref, PAGES } from "@/lib/i18n/pages";
import type { Locale } from "@/lib/i18n/config";

type HomeEntitySummarySectionProps = {
  locale: Locale;
};

export function HomeEntitySummarySection({ locale }: HomeEntitySummarySectionProps) {
  const { entitySummary } = HOME_CONTENT;
  const { visual } = entitySummary;

  return (
    <section className={styles.section} aria-labelledby="home-entity-summary-heading" lang={locale}>
      <div className={styles.shell}>
        <div className={`${styles.card} fade-up`}>
          <div className={styles.mediaBackdrop} aria-hidden="true">
            <Image
              src={visual.src}
              alt=""
              fill
              sizes="(min-width: 48rem) 55vw, 100vw"
              className={styles.image}
              style={{ objectPosition: visual.position }}
            />
            <div className={styles.mediaOverlay} />
            <span className={styles.mediaBadge}>{visual.badge[locale]}</span>
          </div>

          <div className={styles.contentPanel}>
            <h2 id="home-entity-summary-heading" className={styles.heading}>
              {entitySummary.heading[locale]}
            </h2>

            <p className={styles.paragraph}>{entitySummary.paragraph[locale]}</p>

            <div className={styles.linksBlock}>
              <p className={styles.linksLabel}>{entitySummary.linksLabel[locale]}</p>
              <ul className={styles.linkList} aria-label={entitySummary.linksLabel[locale]}>
                {HOME_ENTITY_LINKS.map((pageId) => (
                  <li key={pageId}>
                    <Link href={getPageHref(locale, pageId)} className={styles.link}>
                      {PAGES[pageId].title[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href={`#${BOOK_SERVICE_SECTION_ID}`} className={styles.cta}>
              <span>{entitySummary.cta[locale]}</span>
              <ArrowIcon className={styles.ctaArrow} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
