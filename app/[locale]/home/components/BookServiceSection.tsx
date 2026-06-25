"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
import type { Value } from "react-phone-number-input";
import { BOOK_SERVICE_SECTION } from "@/lib/constants/book-service-content";
import styles from "@/app/[locale]/home/components/BookServiceSection.module.css";
import { useQuickQuote } from "@/components/providers/QuickQuoteProvider";
import { LeadPhoneInput } from "@/components/ui/LeadPhoneInput";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants/contact";
import { LEAD_STORAGE_KEYS } from "@/lib/constants/lead-form";
import { BOOK_FORM_ISSUES, BOOK_FORM_SERVICES } from "@/lib/constants/quote-issues";
import { RIYADH_AREAS } from "@/lib/constants/riyadh-areas";
import { buildLeadPayload } from "@/lib/leads/build-lead-payload";
import { submitLead } from "@/lib/leads/submit-lead";
import type { Locale } from "@/lib/i18n/config";

type BookServiceSectionProps = {
  locale: Locale;
};

type FormErrors = {
  service?: string;
  phone?: string;
  generic?: string;
};

export function BookServiceSection({ locale }: BookServiceSectionProps) {
  const sectionHeadingId = useId();
  const formHeadingId = useId();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { registerSection, pendingIssueId, consumePendingIssue } = useQuickQuote();
  const bookService = BOOK_SERVICE_SECTION;

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

    if (!issueId) next.service = bookService.errors.service[locale];
    if (!phoneE164 || !isValidPhoneNumber(phoneE164)) {
      next.phone = bookService.errors.phone[locale];
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }, [issueId, phoneE164, locale, bookService.errors]);

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
      setErrors({ phone: bookService.errors.phone[locale] });
      return;
    }

    setSubmitting(true);
    setErrors({});

    try {
      const result = await submitLead(lead, { openWhatsApp });
      if (!result.ok) {
        setErrors({ generic: bookService.errors.generic[locale] });
        return;
      }

      localStorage.setItem(LEAD_STORAGE_KEYS.submitted, "1");
      setSuccess(true);
    } catch {
      setErrors({ generic: bookService.errors.generic[locale] });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      ref={setSectionRef}
      id="book-service"
      className={styles.section}
      aria-labelledby={sectionHeadingId}
      lang={locale}
    >
      <div className={styles.shell}>
        <div className={styles.layout}>
          <aside className={`${styles.trustCol} fade-up`} aria-labelledby={sectionHeadingId}>
            <div className={styles.trustCard}>
            <header className={styles.trustHeader}>
              <p className={styles.eyebrow}>
                <SnowflakeIcon className={styles.eyebrowIcon} />
                <span>{bookService.trust.eyebrow[locale]}</span>
              </p>

              <h2 id={sectionHeadingId} className={styles.trustTitle}>
                {bookService.trust.heading[locale]}
              </h2>

              <p className={styles.trustIntro}>{bookService.trust.intro[locale]}</p>
            </header>

            <ul className={styles.trustList}>
              {bookService.trust.points.map((point) => (
                <li key={point.en} className={styles.trustItem}>
                  <span className={styles.trustCheck} aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span>{point[locale]}</span>
                </li>
              ))}
            </ul>

            <div className={styles.contactBlock}>
              <h3 className={styles.contactHeading}>{bookService.contact.heading[locale]}</h3>
              <ul className={styles.contactList}>
                <li>
                  <a
                    href={getWhatsAppUrl(locale)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    <ContactIcon type="whatsapp" />
                    <span className={styles.contactCopy}>
                      <span className={styles.contactLabel}>{bookService.contact.whatsapp[locale]}</span>
                      <span className={styles.contactValue}>{CONTACT.whatsapp.display}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={CONTACT.whatsapp.tel} className={styles.contactLink}>
                    <ContactIcon type="phone" />
                    <span className={styles.contactCopy}>
                      <span className={styles.contactLabel}>{bookService.contact.phone[locale]}</span>
                      <span className={styles.contactValue}>{CONTACT.whatsapp.display}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    <ContactIcon type="location" />
                    <span className={styles.contactCopy}>
                      <span className={styles.contactLabel}>{bookService.contact.location[locale]}</span>
                      <span className={styles.contactValue}>{CONTACT.location.label[locale]}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={CONTACT.email.href} className={styles.contactLink}>
                    <ContactIcon type="email" />
                    <span className={styles.contactCopy}>
                      <span className={styles.contactLabel}>{bookService.contact.email[locale]}</span>
                      <span className={styles.contactValue}>{CONTACT.email.label[locale]}</span>
                    </span>
                  </a>
                </li>
              </ul>
              <p className={styles.contactHours}>{bookService.contact.hours[locale]}</p>
            </div>
            </div>
          </aside>

          <div className={`${styles.formCol} fade-up fade-up--delay-1`}>
            <div className={styles.formCard}>
              <header className={styles.formHeader}>
                <h3 id={formHeadingId} className={styles.formTitle}>
                  {bookService.heading[locale]}
                </h3>
                <p className={styles.formSubline}>{bookService.subline[locale]}</p>
              </header>

              {success ? (
                <div className={styles.success} role="status">
                  <div className={styles.successIcon} aria-hidden="true">
                    ✓
                  </div>
                  <p className={styles.successTitle}>{bookService.success.title[locale]}</p>
                  <p className={styles.successMessage}>{bookService.success.message[locale]}</p>
                </div>
              ) : (
                <form
                  className={styles.form}
                  aria-labelledby={formHeadingId}
                  onSubmit={(event) => {
                    event.preventDefault();
                    void handleSubmit(true);
                  }}
                  noValidate
                >
                  <label className={styles.field}>
                    <span className={styles.label}>{bookService.form.service[locale]}</span>
                    <select
                      className={styles.select}
                      value={issueId}
                      onChange={(event) => setIssueId(event.target.value)}
                      required
                      data-book-service-focus
                    >
                      <option value="">{bookService.form.servicePlaceholder[locale]}</option>
                      <optgroup label={bookService.form.serviceGroupServices[locale]}>
                        {BOOK_FORM_SERVICES.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.label[locale]}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label={bookService.form.serviceGroupIssues[locale]}>
                        {BOOK_FORM_ISSUES.map((issue) => (
                          <option key={issue.id} value={issue.id}>
                            {issue.label[locale]}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                    {errors.service ? <span className={styles.error}>{errors.service}</span> : null}
                  </label>

                  <div className={`${styles.field} ${styles.fieldPhone}`}>
                    <span className={styles.label}>{bookService.form.phone[locale]}</span>
                    <LeadPhoneInput
                      locale={locale}
                      value={phoneE164}
                      onChange={setPhoneE164}
                      hasError={Boolean(errors.phone)}
                    />
                    {errors.phone ? <span className={styles.error}>{errors.phone}</span> : null}
                  </div>

                  <label className={styles.field}>
                    <span className={styles.label}>{bookService.form.district[locale]}</span>
                    <select
                      className={styles.select}
                      value={areaId}
                      onChange={(event) => setAreaId(event.target.value)}
                    >
                      <option value="">{bookService.form.districtPlaceholder[locale]}</option>
                      {RIYADH_AREAS.map((area) => (
                        <option key={area.id} value={area.id}>
                          {area.label[locale]}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>{bookService.form.note[locale]}</span>
                    <textarea
                      className={styles.textarea}
                      value={note}
                      onChange={(event) => setNote(event.target.value)}
                      placeholder={bookService.form.notePlaceholder[locale]}
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
                        {submitting ? bookService.submitting[locale] : bookService.ctaPrimary[locale]}
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
                          ? bookService.submitting[locale]
                          : bookService.ctaSecondary[locale]}
                      </span>
                    </button>
                  </div>

                  <ul className={styles.badges} aria-label={bookService.heading[locale]}>
                    {bookService.trustBadges.map((badge) => (
                      <li key={badge.en} className={styles.badge}>
                        {badge[locale]}
                      </li>
                    ))}
                  </ul>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactIcon({ type }: { type: "whatsapp" | "phone" | "location" | "email" }) {
  const className = styles.contactIcon;

  switch (type) {
    case "whatsapp":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      );
    case "phone":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M8.5 5.5h2l1.2 2.8a1 1 0 0 0 .95.65l2.8-.35a1 1 0 0 1 1.12 1.12l-.7 2.8a12.5 12.5 0 0 0 5.5 5.5l2.8-.7a1 1 0 0 1 1.12 1.12l-.35 2.8a1 1 0 0 0 .65.95l2.8 1.2a1 1 0 0 0 1.15-.25l1.5-1.5a2 2 0 0 0 .45-2.05C22.2 8.8 15.2 1.8 8.5 5.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "location":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case "email":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="6" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="m4 8 8 5 8-5" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      );
  }
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 12.5 10 16.5 18 8"
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
