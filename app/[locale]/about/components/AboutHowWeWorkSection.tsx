import { ABOUT_CONTENT } from "@/app/[locale]/about/content";
import styles from "@/app/[locale]/about/components/about-section.module.css";
import processStyles from "@/app/[locale]/about/components/AboutHowWeWorkSection.module.css";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import type { Locale } from "@/lib/i18n/config";

type AboutHowWeWorkSectionProps = {
  locale: Locale;
};

export function AboutHowWeWorkSection({ locale }: AboutHowWeWorkSectionProps) {
  const { howWeWork } = ABOUT_CONTENT;

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="about-how-we-work-heading">
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{howWeWork.eyebrow[locale]}</span>
          </p>
          <h2 id="about-how-we-work-heading" className={styles.title}>
            {howWeWork.heading[locale]}
          </h2>
          <p className={styles.subline}>{howWeWork.subline[locale]}</p>
        </header>

        <ol className={`${processStyles.steps} fade-up fade-up--delay-1`}>
          {howWeWork.steps.map((step, index) => (
            <li key={step.id} className={processStyles.step}>
              <span className={processStyles.stepNumber} aria-hidden="true">
                {index + 1}
              </span>
              <div className={processStyles.stepBody}>
                <h3 className={processStyles.stepTitle}>{step.title[locale]}</h3>
                <p className={processStyles.stepText}>{step.description[locale]}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
