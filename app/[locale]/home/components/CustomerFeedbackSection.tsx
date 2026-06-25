"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { HOME_CONTENT } from "@/app/[locale]/home/content";
import styles from "@/app/[locale]/home/components/CustomerFeedbackSection.module.css";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import { getWhatsAppUrl } from "@/lib/constants/contact";
import type { Locale } from "@/lib/i18n/config";

type CustomerFeedbackSectionProps = {
  locale: Locale;
};

const AVATAR_CLASS = {
  blue: styles.avatarBlue,
  teal: styles.avatarTeal,
  indigo: styles.avatarIndigo,
  orange: styles.avatarOrange,
  amber: styles.avatarAmber,
  navy: styles.avatarNavy,
} as const;

function getSlidesPerView(width: number): number {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export function CustomerFeedbackSection({ locale }: CustomerFeedbackSectionProps) {
  const { customerFeedback } = HOME_CONTENT;
  const viewportRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const itemCount = customerFeedback.items.length;
  const maxIndex = Math.max(0, itemCount - slidesPerView);
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < maxIndex;

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const scrollToIndex = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    itemRefs.current[clamped]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
    setActiveIndex(clamped);
  }, [maxIndex]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const syncIndexFromScroll = () => {
      const slides = itemRefs.current.filter(Boolean) as HTMLLIElement[];
      if (slides.length === 0) return;

      const viewportRect = viewport.getBoundingClientRect();
      const viewportCenter = viewportRect.left + viewportRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      slides.forEach((slide, index) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(slideCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(Math.min(closestIndex, maxIndex));
    };

    viewport.addEventListener("scroll", syncIndexFromScroll, { passive: true });
    return () => viewport.removeEventListener("scroll", syncIndexFromScroll);
  }, [maxIndex, itemCount]);

  return (
    <section
      className={styles.section}
      aria-labelledby="home-customer-feedback-heading"
      lang={locale}
      id="customer-feedback"
    >
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{customerFeedback.eyebrow[locale]}</span>
          </p>

          <h2 id="home-customer-feedback-heading" className={styles.title}>
            {customerFeedback.heading[locale]}
          </h2>

          <p className={styles.subline}>{customerFeedback.subline[locale]}</p>
        </header>

        <div className={styles.slider}>
          <button
            type="button"
            className={`${styles.navButton} ${styles.navPrev}`}
            aria-label={customerFeedback.slider.prev[locale]}
            disabled={!canGoPrev}
            onClick={() => scrollToIndex(activeIndex - 1)}
          >
            <ArrowIcon direction="prev" />
          </button>

          <div
            ref={viewportRef}
            className={styles.viewport}
            aria-roledescription="carousel"
            aria-label={customerFeedback.heading[locale]}
          >
            <ul
              className={styles.track}
              style={{ "--slides-per-view": slidesPerView } as CSSProperties}
            >
              {customerFeedback.items.map((item, index) => (
                <li
                  key={item.id}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  className={styles.item}
                >
                  <article className={styles.card} aria-labelledby={`feedback-${item.id}-label`}>
                    <div className={`${styles.avatar} ${AVATAR_CLASS[item.color]}`} aria-hidden="true">
                      {item.initials}
                    </div>

                    <div className={styles.meta}>
                      <p id={`feedback-${item.id}-label`} className={styles.customerLabel}>
                        {item.customerLabel[locale]}
                      </p>
                      <p className={styles.metaLine}>
                        <span className={styles.metaLabel}>{locale === "ar" ? "النوع:" : "Type:"}</span>
                        <span>{item.customerType[locale]}</span>
                        <span className={styles.metaSep} aria-hidden="true">
                          ·
                        </span>
                        <span className={styles.metaLabel}>{locale === "ar" ? "الموقع:" : "Location:"}</span>
                        <span>{item.location[locale]}</span>
                      </p>
                      <p className={styles.service}>{item.service[locale]}</p>
                      <p className={styles.problem}>
                        <span className={styles.metaLabel}>{locale === "ar" ? "المشكلة:" : "Issue:"}</span>
                        <span>{item.problem[locale]}</span>
                      </p>
                    </div>

                    <blockquote className={styles.quote} cite={`#feedback-${item.id}-label`}>
                      <p>{item.quote[locale]}</p>
                    </blockquote>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className={`${styles.navButton} ${styles.navNext}`}
            aria-label={customerFeedback.slider.next[locale]}
            disabled={!canGoNext}
            onClick={() => scrollToIndex(activeIndex + 1)}
          >
            <ArrowIcon direction="next" />
          </button>
        </div>

        <p className={styles.reviewNote}>{customerFeedback.reviewNote[locale]}</p>

        <aside className={`${styles.cta} fade-up fade-up--delay-2`}>
          <h3 className={styles.ctaTitle}>{customerFeedback.cta.title[locale]}</h3>
          <a
            href={getWhatsAppUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <WhatsAppIcon />
            <span>{customerFeedback.cta.button[locale]}</span>
          </a>
        </aside>
      </div>
    </section>
  );
}

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "prev" ? "M14 6l-6 6 6 6" : "M10 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
