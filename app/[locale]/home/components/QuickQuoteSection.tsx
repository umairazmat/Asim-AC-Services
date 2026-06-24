"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
import type { Value } from "react-phone-number-input";
import { HOME_CONTENT } from "@/app/[locale]/home/content";
import styles from "@/app/[locale]/home/components/QuickQuoteSection.module.css";
import { useQuickQuote } from "@/components/providers/QuickQuoteProvider";
import { LeadPhoneInput } from "@/components/ui/LeadPhoneInput";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import { LEAD_STORAGE_KEYS } from "@/lib/constants/lead-form";
import { QUOTE_ISSUES } from "@/lib/constants/quote-issues";
import { RIYADH_AREAS } from "@/lib/constants/riyadh-areas";
import { TRUST_BADGES } from "@/lib/constants/services";
import { buildLeadPayload } from "@/lib/leads/build-lead-payload";
import { submitLead } from "@/lib/leads/submit-lead";
import type { Locale } from "@/lib/i18n/config";

type QuickQuoteSectionProps = {
  locale: Locale;
};

type FormErrors = {
  service?: string;
  phone?: string;
  generic?: string;
};

export function QuickQuoteSection({ locale }: QuickQuoteSectionProps) {
  const headingId = useId();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { registerSection, pendingIssueId, consumePendingIssue } = useQuickQuote();
  const { quickQuote } = HOME_CONTENT;

  const [issueId, setIssueId] = useState("");
  const [areaId, setAreaId] = useState("");
  const [phoneE164, setPhoneE164] = useState<Value>();
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const setSectionRef = useCallback(
    (element: HTMLElement | null) => {
      sectionRef.current = element;
      registerSection(element);
    },
    [registerSection],
  );

  useEffect(() => {
    if (!pendingIssueId) return;
    setIssueId(pendingIssueId);
    consumePendingIssue();
  }, [pendingIssueId, consumePendingIssue]);

  const validate = useCallback((): boolean => {
    const next: FormErrors = {};

    if (!issueId) next.service = quickQuote.errors.service[locale];
    if (!phoneE164 || !isValidPhoneNumber(phoneE164)) {
      next.phone = quickQuote.errors.phone[locale];
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }, [issueId, phoneE164, locale, quickQuote.errors]);

  const handleSubmit = async (openWhatsApp: boolean) => {
    if (!validate()) return;

    const lead = buildLeadPayload({
      locale,
      issueId,
      phoneE164: phoneE164!,
      areaId: areaId || undefined,
      note,
    });

    if (!lead) {
      setErrors({ phone: quickQuote.errors.phone[locale] });
      return;
    }

    setSubmitting(true);
    setErrors({});

    try {
      const result = await submitLead(lead, { openWhatsApp });
      if (!result.ok) {
        setErrors({ generic: quickQuote.errors.generic[locale] });
        return;
      }

      localStorage.setItem(LEAD_STORAGE_KEYS.submitted, "1");
      setSuccess(true);
    } catch {
      setErrors({ generic: quickQuote.errors.generic[locale] });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      ref={setSectionRef}
      id="quick-quote"
      className={styles.section}
      aria-labelledby={headingId}
    >
      <div className={styles.shell}>
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{quickQuote.eyebrow[locale]}</span>
          </p>
          <h2 id={headingId} className={styles.title}>
            {quickQuote.heading[locale]}
          </h2>
          <p className={styles.subline}>{quickQuote.subline[locale]}</p>
          <p className={styles.trustLine}>{quickQuote.trustLine[locale]}</p>
        </header>

        <div className={styles.grid}>
          <div className={styles.formCol}>
            {success ? (
              <div className={styles.success} role="status">
                <div className={styles.successIcon} aria-hidden="true">
                  ✓
                </div>
                <p className={styles.successTitle}>{quickQuote.success.title[locale]}</p>
                <p className={styles.successMessage}>{quickQuote.success.message[locale]}</p>
              </div>
            ) : (
              <form
                className={styles.formCard}
                onSubmit={(event) => {
                  event.preventDefault();
                  void handleSubmit(true);
                }}
                noValidate
              >
                <label className={styles.field}>
                  <span className={styles.label}>{quickQuote.form.service[locale]}</span>
                  <select
                    className={styles.select}
                    value={issueId}
                    onChange={(event) => setIssueId(event.target.value)}
                    required
                    data-quick-quote-focus
                  >
                    <option value="">{quickQuote.form.servicePlaceholder[locale]}</option>
                    {QUOTE_ISSUES.map((issue) => (
                      <option key={issue.id} value={issue.id}>
                        {issue.label[locale]}
                      </option>
                    ))}
                  </select>
                  {errors.service ? <span className={styles.error}>{errors.service}</span> : null}
                </label>

                <div className={`${styles.field} ${styles.fieldPhone}`}>
                  <span className={styles.label}>{quickQuote.form.phone[locale]}</span>
                  <LeadPhoneInput
                    locale={locale}
                    value={phoneE164}
                    onChange={setPhoneE164}
                    hasError={Boolean(errors.phone)}
                  />
                  {errors.phone ? <span className={styles.error}>{errors.phone}</span> : null}
                </div>

                <label className={styles.field}>
                  <span className={styles.label}>{quickQuote.form.district[locale]}</span>
                  <select
                    className={styles.select}
                    value={areaId}
                    onChange={(event) => setAreaId(event.target.value)}
                  >
                    <option value="">{quickQuote.form.districtPlaceholder[locale]}</option>
                    {RIYADH_AREAS.map((area) => (
                      <option key={area.id} value={area.id}>
                        {area.label[locale]}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>{quickQuote.form.note[locale]}</span>
                  <textarea
                    className={styles.textarea}
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    placeholder={quickQuote.form.notePlaceholder[locale]}
                    rows={3}
                  />
                </label>

                {errors.generic ? (
                  <p className={`${styles.error} ${styles.errorBlock}`}>{errors.generic}</p>
                ) : null}

                <div className={styles.actions}>
                  <button
                    type="submit"
                    className={`${styles.cta} ${styles.ctaPrimary}`}
                    disabled={submitting}
                  >
                    <WhatsAppIcon />
                    <span>
                      {submitting ? quickQuote.submitting[locale] : quickQuote.ctaPrimary[locale]}
                    </span>
                  </button>
                  <button
                    type="button"
                    className={`${styles.cta} ${styles.ctaSecondary}`}
                    disabled={submitting}
                    onClick={() => void handleSubmit(false)}
                  >
                    <span>
                      {submitting
                        ? quickQuote.submitting[locale]
                        : quickQuote.ctaSecondary[locale]}
                    </span>
                  </button>
                </div>

                <ul className={styles.badges} aria-label={quickQuote.trustLine[locale]}>
                  {TRUST_BADGES.map((badge) => (
                    <li key={badge.id} className={styles.badge}>
                      {badge.label[locale]}
                    </li>
                  ))}
                </ul>
              </form>
            )}
          </div>

          <aside className={styles.mediaCol} aria-label={quickQuote.image.alt[locale]}>
            <div className={styles.imageCard}>
              <Image
                src={quickQuote.image.src}
                alt={quickQuote.image.alt[locale]}
                fill
                sizes="(max-width: 47.99rem) 100vw, 42vw"
                className={styles.image}
                priority={false}
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={18}
      height={18}
      aria-hidden="true"
      className={styles.ctaIcon}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
