"use client";

import Image from "next/image";
import Link from "next/link";
import { HOME_CONTENT } from "@/app/[locale]/home/content";
import styles from "@/app/[locale]/home/components/MainServicesSection.module.css";
import { useQuickQuote } from "@/components/providers/QuickQuoteProvider";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import { MAIN_SERVICE_CARD_TO_BOOK_FORM } from "@/lib/constants/quote-issues";
import { getPageHref } from "@/lib/i18n/pages";
import type { PageId } from "@/lib/i18n/pages";
import type { Locale } from "@/lib/i18n/config";

type MainServicesSectionProps = {
  locale: Locale;
};

export function MainServicesSection({ locale }: MainServicesSectionProps) {
  const { scrollToQuote } = useQuickQuote();
  const { mainServices } = HOME_CONTENT;

  function openBookForm(cardId: string) {
    const issueId = MAIN_SERVICE_CARD_TO_BOOK_FORM[cardId];
    scrollToQuote(issueId ? { issueId } : undefined);
  }

  return (
    <section className={styles.section} aria-labelledby="home-main-services-heading">
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{mainServices.eyebrow[locale]}</span>
          </p>

          <h2 id="home-main-services-heading" className={styles.title}>
            {mainServices.heading[locale]}
          </h2>

          <p className={styles.subline}>{mainServices.subline[locale]}</p>
        </header>

        <div className={styles.layout}>
          <aside className={`${styles.intro} fade-up fade-up--delay-1`}>
            <div className={styles.introImageWrap}>
              <Image
                src={mainServices.intro.image}
                alt={mainServices.intro.imageAlt[locale]}
                fill
                sizes="(min-width: 64rem) 34vw, 100vw"
                className={styles.introImage}
                style={{ objectPosition: mainServices.intro.imagePosition }}
                priority
              />
            </div>

            <div className={styles.introOverlay}>
              <div className={styles.introCopy}>
                <h3 className={styles.introTitle}>{mainServices.intro.title[locale]}</h3>
                <p className={styles.introText}>{mainServices.intro.text[locale]}</p>
              </div>

              <Link
                href={getPageHref(locale, "ac-services-riyadh" satisfies PageId)}
                className={styles.viewAllCta}
              >
                <span>{mainServices.viewAllCta[locale]}</span>
                <ArrowIcon className={styles.viewAllArrow} />
              </Link>
            </div>
          </aside>

          <ul className={styles.grid} aria-label={mainServices.heading[locale]}>
            {mainServices.cards.map((card, index) => {
              const pageHref = getPageHref(locale, card.pageId);
              const cardTitle = card.title[locale];

              return (
                <li key={card.id} className={styles.gridItem}>
                  <article
                    className={`${styles.card} fade-up`}
                    style={{ animationDelay: `${0.08 + index * 0.05}s` }}
                  >
                    <Link
                      href={pageHref}
                      className={styles.thumb}
                      aria-label={cardTitle}
                      tabIndex={-1}
                    >
                      <Image
                        src={card.image}
                        alt=""
                        fill
                        sizes="(min-width: 64rem) 88px, 72px"
                        className={styles.thumbImage}
                        style={{ objectPosition: card.imagePosition }}
                      />
                    </Link>

                    <div className={styles.copy}>
                      <h3 className={styles.cardTitle}>
                        <Link href={pageHref} className={styles.cardTitleLink}>
                          {cardTitle}
                        </Link>
                      </h3>
                      <p className={styles.cardDesc}>{card.description[locale]}</p>

                      <div className={styles.cardActions}>
                        <Link href={pageHref} className={styles.readMore}>
                          <span>{mainServices.cardCta[locale]}</span>
                          <ArrowIcon className={styles.readMoreArrow} />
                        </Link>

                        <button
                          type="button"
                          className={styles.bookNow}
                          onClick={() => openBookForm(card.id)}
                          aria-label={`${cardTitle}, ${mainServices.bookNowCta[locale]}`}
                        >
                          <span>{mainServices.bookNowCta[locale]}</span>
                          <ArrowIcon className={styles.bookNowArrow} />
                        </button>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
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
