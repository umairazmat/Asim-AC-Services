"use client";

import { HOME_CONTENT } from "@/app/[locale]/home/content";
import { useQuickQuote } from "@/components/providers/QuickQuoteProvider";
import { PAIN_CARD_TO_QUOTE_ISSUE } from "@/lib/constants/quote-issues";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import type { Locale } from "@/lib/i18n/config";

type PainStripSectionProps = {
  locale: Locale;
};

const ICON_BADGE_CLASS = {
  teal: "icon-badge--teal",
  orange: "icon-badge--orange",
  blue: "icon-badge--blue",
  amber: "icon-badge--amber",
  rose: "icon-badge--rose",
} as const;

export function PainStripSection({ locale }: PainStripSectionProps) {
  const { scrollToQuote } = useQuickQuote();
  const { painStrip } = HOME_CONTENT;

  function openPainCard(card: (typeof painStrip.cards)[number]) {
    const issueId = PAIN_CARD_TO_QUOTE_ISSUE[card.id];
    scrollToQuote(issueId ? { issueId } : undefined);
  }

  return (
    <section className="home-pain-strip" aria-labelledby="home-pain-heading">
      <div className="home-pain-strip__inner">
        <header className="home-pain-strip__header fade-up">
          <p className="home-pain-strip__eyebrow">
            <SnowflakeIcon className="home-pain-strip__eyebrow-icon" />
            <span>{painStrip.eyebrow[locale]}</span>
          </p>

          <h2 id="home-pain-heading" className="home-pain-strip__title">
            {painStrip.heading[locale]}
          </h2>

          <p className="home-pain-strip__subline">{painStrip.subline[locale]}</p>
        </header>

        <ul className="home-pain-strip__grid">
          {painStrip.cards.map((card, index) => (
            <li key={card.id} className="home-pain-strip__item">
              <button
                type="button"
                className={`home-pain-strip__card home-pain-strip__card--${card.color} fade-up`}
                style={{ animationDelay: `${0.06 + index * 0.04}s` }}
                onClick={() => openPainCard(card)}
                aria-label={`${card.label[locale]} — ${painStrip.cardAction[locale]}`}
              >
                <span
                  className={`home-pain-strip__icon icon-badge ${ICON_BADGE_CLASS[card.color]}`}
                  aria-hidden="true"
                >
                  <PainIcon id={card.id} />
                </span>

                <span className="home-pain-strip__copy">
                  <span className="home-pain-strip__label">{card.label[locale]}</span>
                  <span className="home-pain-strip__desc">{card.description[locale]}</span>
                </span>

                <span className="home-pain-strip__pill" aria-hidden="true">
                  <span className="home-pain-strip__pill-text">{painStrip.cardAction[locale]}</span>
                  <ArrowIcon className="home-pain-strip__pill-arrow" />
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="home-pain-strip__footer fade-up fade-up--delay-2">
          <button
            type="button"
            className="home-pain-strip__cta home-pain-strip__cta--whatsapp"
            onClick={() => scrollToQuote()}
          >
            <WhatsAppIcon className="home-pain-strip__cta-wa" />
            <span>{painStrip.cta[locale]}</span>
            <ArrowIcon className="home-pain-strip__cta-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}

type PainIconProps = {
  id: (typeof HOME_CONTENT.painStrip.cards)[number]["id"];
};

function PainIcon({ id }: PainIconProps) {
  const className = "home-pain-strip__icon-glyph icon-glyph";

  switch (id) {
    case "not-cooling":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3v18M9 6l3-3 3 3M9 18l3 3 3-3M3 12h18M6 9l-3 3 3 3M18 9l3 3-3 3M5 5l14 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "weak-cooling":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 9.5c2.6 0 2.6-2 5.2-2 2.6 0 2.6 2 5.2 2s2.6-2 5.2-2M3 14.5c2.6 0 2.6-2 5.2-2 2.6 0 2.6 2 5.2 2s2.6-2 5.2-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M7 18.8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "water-leak":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 5h12M8 8h8M12 11c-1.8 2.2-2.8 3.7-2.8 5a2.8 2.8 0 1 0 5.6 0c0-1.3-1-2.8-2.8-5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M5 12h2m10 0h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "loud-noise":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 10h3l4-3v10l-4-3H4v-4Zm11.5-2.5a4.5 4.5 0 0 1 0 9m2.8-11.8a8.2 8.2 0 0 1 0 14.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "low-gas":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 6h6v12H9V6Zm2-2h2m-5 14h8M16 9h1.8a1.2 1.2 0 0 1 1.2 1.2V14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.5a2.5 2.5 0 1 0 2.2 1.3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="13" r="0.8" fill="currentColor" />
        </svg>
      );
    case "needs-service":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 17h8M6 14h8M8 11h6m5.8-5.8-6.6 6.6m0 0-2.4-.8.8-2.4 6.6-6.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M15.6 5.4l2.9 2.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2a9.8 9.8 0 0 0-8.5 14.8L2 22l5.2-1.4A9.8 9.8 0 1 0 12 2.2Zm0 17.7a7.8 7.8 0 0 1-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3a7.8 7.8 0 1 1 6.7 3.7Zm4.3-5.8c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1-.1.2-.6.7-.7.8-.1.1-.3.1-.5 0a6.3 6.3 0 0 1-1.8-1.1 7 7 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.3-.3.2-.3c.1-.1.1-.3 0-.4l-.7-1.7c-.2-.4-.3-.3-.5-.3h-.4c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.1 1.6 2.5 3.8 3.4.5.2 1 .4 1.3.5.6.2 1.1.2 1.6.1.5-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.2Z" />
    </svg>
  );
}
