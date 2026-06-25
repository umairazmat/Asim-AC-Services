import Image from "next/image";
import Link from "next/link";
import styles from "@/app/[locale]/about/components/about-section.module.css";
import cardStyles from "@/app/[locale]/shared/area-pages/AreaServiceCardsSection.module.css";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import type { Locale } from "@/lib/i18n/config";
import type { PageId } from "@/lib/i18n/pages";

type Bilingual = { ar: string; en: string };

type AreaChipsSectionProps = {
  locale: Locale;
  sectionId: string;
  eyebrow: Bilingual;
  heading: Bilingual;
  body: Bilingual;
  chips: ReadonlyArray<{ id: string; label: Bilingual }>;
  altBackground?: boolean;
};

export function AreaChipsSection({
  locale,
  sectionId,
  eyebrow,
  heading,
  body,
  chips,
  altBackground = false,
}: AreaChipsSectionProps) {
  return (
    <section
      id={sectionId}
      className={`${styles.section} ${altBackground ? styles.sectionAlt : ""}`}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{eyebrow[locale]}</span>
          </p>
          <h2 id={`${sectionId}-heading`} className={styles.title}>
            {heading[locale]}
          </h2>
          <p className={styles.subline}>{body[locale]}</p>
        </header>

        <ul className={`${styles.chips} fade-up fade-up--delay-1`} aria-label={heading[locale]}>
          {chips.map((chip) => (
            <li key={chip.id} className={styles.chip}>
              {chip.label[locale]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type AreaDistrictGridSectionProps = {
  locale: Locale;
  sectionId: string;
  eyebrow: Bilingual;
  heading: Bilingual;
  intro: Bilingual;
  districts: ReadonlyArray<{ id: string; label: Bilingual; pageId?: PageId }>;
  getPageHref: (locale: Locale, pageId: PageId) => string;
  altBackground?: boolean;
};

export function AreaDistrictGridSection({
  locale,
  sectionId,
  eyebrow,
  heading,
  intro,
  districts,
  getPageHref,
  altBackground = false,
}: AreaDistrictGridSectionProps) {
  return (
    <section
      id={sectionId}
      className={`${styles.section} ${altBackground ? styles.sectionAlt : ""}`}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{eyebrow[locale]}</span>
          </p>
          <h2 id={`${sectionId}-heading`} className={styles.title}>
            {heading[locale]}
          </h2>
          <p className={styles.subline}>{intro[locale]}</p>
        </header>

        <ul className={`${styles.chips} fade-up fade-up--delay-1`} aria-label={heading[locale]}>
          {districts.map((district) => (
            <li key={district.id} className={styles.chip}>
              {district.pageId ? (
                <Link href={getPageHref(locale, district.pageId)} className={styles.cardLink}>
                  {district.label[locale]}
                </Link>
              ) : (
                district.label[locale]
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type AreaServiceCardsSectionProps = {
  locale: Locale;
  sectionId: string;
  eyebrow: Bilingual;
  heading: Bilingual;
  cards: ReadonlyArray<{
    id: string;
    pageId: PageId;
    title: Bilingual;
    description: Bilingual;
    image?: string;
    imagePosition?: string;
  }>;
  getPageHref: (locale: Locale, pageId: PageId) => string;
  altBackground?: boolean;
};

export function AreaServiceCardsSection({
  locale,
  sectionId,
  eyebrow,
  heading,
  cards,
  getPageHref,
  altBackground = false,
}: AreaServiceCardsSectionProps) {
  return (
    <section
      className={`${styles.section} ${altBackground ? styles.sectionAlt : ""}`}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{eyebrow[locale]}</span>
          </p>
          <h2 id={`${sectionId}-heading`} className={styles.title}>
            {heading[locale]}
          </h2>
        </header>

        <div className={`${cardStyles.grid} fade-up fade-up--delay-1`}>
          {cards.map((card) => {
            const learnMoreLabel = locale === "ar" ? "اقرأ المزيد" : "Learn more";
            const href = getPageHref(locale, card.pageId);

            return (
              <Link
                key={card.id}
                href={href}
                className={cardStyles.card}
                aria-label={`${card.title[locale]} — ${learnMoreLabel}`}
              >
                {card.image ? (
                  <div className={cardStyles.imageWrap}>
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(min-width: 64rem) 28vw, (min-width: 40rem) 45vw, 100vw"
                      className={cardStyles.image}
                      style={card.imagePosition ? { objectPosition: card.imagePosition } : undefined}
                    />
                  </div>
                ) : null}
                <div className={cardStyles.body}>
                  <h3 className={cardStyles.title}>{card.title[locale]}</h3>
                  <p className={cardStyles.text}>{card.description[locale]}</p>
                  <span className={cardStyles.linkHint}>
                    <span>{learnMoreLabel}</span>
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type AreaTextSectionProps = {
  locale: Locale;
  sectionId: string;
  eyebrow: Bilingual;
  heading: Bilingual;
  body: Bilingual;
  altBackground?: boolean;
};

export function AreaTextSection({
  locale,
  sectionId,
  eyebrow,
  heading,
  body,
  altBackground = false,
}: AreaTextSectionProps) {
  return (
    <section
      className={`${styles.section} ${altBackground ? styles.sectionAlt : ""}`}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{eyebrow[locale]}</span>
          </p>
          <h2 id={`${sectionId}-heading`} className={styles.title}>
            {heading[locale]}
          </h2>
          <p className={styles.subline}>{body[locale]}</p>
        </header>
      </div>
    </section>
  );
}

type AreaStepsSectionProps = {
  locale: Locale;
  sectionId: string;
  eyebrow: Bilingual;
  heading: Bilingual;
  steps: ReadonlyArray<{
    id: string;
    title: Bilingual;
    description: Bilingual;
  }>;
  altBackground?: boolean;
};

export function AreaStepsSection({
  locale,
  sectionId,
  eyebrow,
  heading,
  steps,
  altBackground = false,
}: AreaStepsSectionProps) {
  return (
    <section
      className={`${styles.section} ${altBackground ? styles.sectionAlt : ""}`}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{eyebrow[locale]}</span>
          </p>
          <h2 id={`${sectionId}-heading`} className={styles.title}>
            {heading[locale]}
          </h2>
        </header>

        <ol className={`${styles.grid} fade-up fade-up--delay-1`}>
          {steps.map((step, index) => (
            <li key={step.id} className={styles.card}>
              <p className={styles.eyebrow}>
                {locale === "ar" ? `الخطوة ${index + 1}` : `Step ${index + 1}`}
              </p>
              <h3 className={styles.cardTitle}>{step.title[locale]}</h3>
              {step.description[locale].trim() ? (
                <p className={styles.cardText}>{step.description[locale]}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

type AreaProblemsSectionProps = {
  locale: Locale;
  sectionId: string;
  eyebrow: Bilingual;
  heading: Bilingual;
  cards: ReadonlyArray<{
    id: string;
    label: Bilingual;
  }>;
  altBackground?: boolean;
};

export function AreaProblemsSection({
  locale,
  sectionId,
  eyebrow,
  heading,
  cards,
  altBackground = false,
}: AreaProblemsSectionProps) {
  return (
    <section
      className={`${styles.section} ${altBackground ? styles.sectionAlt : ""}`}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{eyebrow[locale]}</span>
          </p>
          <h2 id={`${sectionId}-heading`} className={styles.title}>
            {heading[locale]}
          </h2>
        </header>

        <ul className={`${styles.chips} fade-up fade-up--delay-1`} aria-label={heading[locale]}>
          {cards.map((card) => (
            <li key={card.id} className={styles.chip}>
              {card.label[locale]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type AreaInternalLinksSectionProps = {
  locale: Locale;
  sectionId: string;
  eyebrow: Bilingual;
  heading: Bilingual;
  pageIds: ReadonlyArray<PageId>;
  getPageHref: (locale: Locale, pageId: PageId) => string;
  getPageTitle: (locale: Locale, pageId: PageId) => string;
};

export function AreaInternalLinksSection({
  locale,
  sectionId,
  eyebrow,
  heading,
  pageIds,
  getPageHref,
  getPageTitle,
}: AreaInternalLinksSectionProps) {
  return (
    <section className={styles.section} aria-labelledby={`${sectionId}-heading`}>
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{eyebrow[locale]}</span>
          </p>
          <h2 id={`${sectionId}-heading`} className={styles.title}>
            {heading[locale]}
          </h2>
        </header>

        <ul className={`${styles.chips} fade-up fade-up--delay-1`}>
          {pageIds.map((pageId) => (
            <li key={pageId} className={styles.chip}>
              <Link href={getPageHref(locale, pageId)} className={styles.cardLink}>
                {getPageTitle(locale, pageId)}
              </Link>
            </li>
          ))}
        </ul>
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
