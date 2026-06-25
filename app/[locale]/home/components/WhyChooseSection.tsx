import { HOME_CONTENT } from "@/app/[locale]/home/content";
import styles from "@/app/[locale]/home/components/WhyChooseSection.module.css";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import { getWhatsAppUrl } from "@/lib/constants/contact";
import type { Locale } from "@/lib/i18n/config";

export type WhyChooseSectionContent = {
  eyebrow: { ar: string; en: string };
  heading: { ar: string; en: string };
  subline: { ar: string; en: string };
  reasons: ReadonlyArray<{
    id: string;
    color: "teal" | "blue" | "amber" | "orange" | "indigo";
    title: { ar: string; en: string };
    description: { ar: string; en: string };
  }>;
  ctaCard: {
    title: { ar: string; en: string };
    description: { ar: string; en: string };
    button: { ar: string; en: string };
  };
};

type WhyChooseSectionProps = {
  locale: Locale;
  content?: WhyChooseSectionContent;
  headingId?: string;
};

const ICON_BADGE_CLASS = {
  teal: "icon-badge--teal",
  blue: "icon-badge--blue",
  amber: "icon-badge--amber",
  orange: "icon-badge--orange",
  indigo: "icon-badge--indigo",
} as const;

export function WhyChooseSection({
  locale,
  content = HOME_CONTENT.whyChoose,
  headingId = "home-why-choose-heading",
}: WhyChooseSectionProps) {
  const whyChoose = content;

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{whyChoose.eyebrow[locale]}</span>
          </p>

          <h2 id={headingId} className={styles.title}>
            {whyChoose.heading[locale]}
          </h2>

          <p className={styles.subline}>{whyChoose.subline[locale]}</p>
        </header>

        <div className={styles.grid}>
          {whyChoose.reasons.map((reason, index) => (
            <article
              key={reason.id}
              className={`${styles.card} fade-up`}
              style={{ animationDelay: `${0.06 + index * 0.04}s` }}
            >
              <span
                className={`${styles.iconBadge} icon-badge ${ICON_BADGE_CLASS[reason.color]}`}
                aria-hidden="true"
              >
                <ReasonIcon id={reason.id} className={`${styles.iconGlyph} icon-glyph`} />
              </span>

              <h3 className={styles.cardTitle}>{reason.title[locale]}</h3>
              <p className={styles.cardText}>{reason.description[locale]}</p>
            </article>
          ))}

          <aside className={`${styles.ctaCard} fade-up fade-up--delay-2`}>
            <h3 className={styles.ctaTitle}>{whyChoose.ctaCard.title[locale]}</h3>
            <p className={styles.ctaText}>{whyChoose.ctaCard.description[locale]}</p>
            <a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <WhatsAppIcon />
              <span>{whyChoose.ctaCard.button[locale]}</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

type ReasonIconProps = {
  id: WhyChooseSectionContent["reasons"][number]["id"];
  className?: string;
};

function ReasonIcon({ id, className }: ReasonIconProps) {
  switch (id) {
    case "technicians":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.75" />
          <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M16 5.5l1.5 1.5M8 5.5L6.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="10.5" y="3.5" width="3" height="1.5" rx="0.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M8.5 14.5 7 17l2.6-.9"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 3.5a8.5 8.5 0 0 0-7.2 13L3.5 20.5l4.1-1.1A8.5 8.5 0 1 0 12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M9.2 10.2h.01M12 10.2h.01M14.8 10.2h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "inspection":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="5" width="11" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M15 8h3l2 2v3h-5V8Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <circle cx="18.5" cy="15.5" r="3" stroke="currentColor" strokeWidth="1.75" />
          <path d="M20.4 17.4 22 19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "homes-businesses":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 10.5 12 4l8 6.5V20H4v-9.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M9.5 20v-6h5v6" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <rect x="15.5" y="8" width="4.5" height="12" rx="0.8" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case "pricing":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="6" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="16.5" cy="14" r="1.2" fill="currentColor" stroke="none" />
          <path d="M12 3v3M8.5 4.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true" className={styles.ctaWaIcon}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
