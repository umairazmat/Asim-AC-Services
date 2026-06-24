"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import type { Value } from "react-phone-number-input";
import { LeadPhoneInput } from "@/components/ui/LeadPhoneInput";
import { LEAD_FORM, LEAD_STORAGE_KEYS } from "@/lib/constants/lead-form";
import { RIYADH_AREAS } from "@/lib/constants/riyadh-areas";
import { SERVICES } from "@/lib/constants/services";
import type { LeadLocation, LeadPayload } from "@/lib/leads/types";
import { getLeadWhatsAppUrl, openLeadWhatsApp } from "@/lib/leads/whatsapp-lead-url";
import type { Locale } from "@/lib/i18n/config";
import type { ServiceId } from "@/lib/constants/services";

type LeadCaptureModalProps = {
  locale: Locale;
  open: boolean;
  initialIssue?: string;
  initialServiceId?: ServiceId;
  onClose: () => void;
  onSubmitted: () => void;
};

type FormErrors = {
  service?: string;
  area?: string;
  phone?: string;
  generic?: string;
};

export function LeadCaptureModal({
  locale,
  open,
  initialIssue = "",
  initialServiceId,
  onClose,
  onSubmitted,
}: LeadCaptureModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  const [serviceId, setServiceId] = useState("");
  const [areaId, setAreaId] = useState("");
  const [phoneE164, setPhoneE164] = useState<Value>();
  const [issue, setIssue] = useState("");
  const [location, setLocation] = useState<LeadLocation | null>(null);
  const [locationError, setLocationError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [savedLead, setSavedLead] = useState<LeadPayload | null>(null);

  const t = LEAD_FORM;

  const resetForm = useCallback(() => {
    setServiceId("");
    setAreaId("");
    setPhoneE164(undefined);
    setIssue("");
    setLocation(null);
    setLocationError("");
    setErrors({});
    setSuccess(false);
    setSavedLead(null);
  }, []);

  useEffect(() => {
    if (!open) {
      resetForm();
      return;
    }

    if (initialServiceId) {
      setServiceId(initialServiceId);
    }

    if (initialIssue) {
      setIssue(initialIssue);
    }
  }, [open, initialIssue, initialServiceId, resetForm]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    panelRef.current?.focus();

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const attachLocation = () => {
    setLocationError("");
    if (!navigator.geolocation) {
      setLocationError(t.errors.locationDenied[locale]);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setLocationError(t.errors.locationDenied[locale]);
      },
      { enableHighAccuracy: true, timeout: 12000 },
    );
  };

  const validate = (): boolean => {
    const next: FormErrors = {};

    if (!serviceId) next.service = t.errors.service[locale];
    if (!areaId) next.area = t.errors.area[locale];

    if (!phoneE164 || !isValidPhoneNumber(phoneE164)) {
      next.phone = t.errors.phone[locale];
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildLeadPayload = (): LeadPayload | null => {
    if (!phoneE164) return null;

    const parsed = parsePhoneNumber(phoneE164);
    if (!parsed) return null;

    const serviceLabel =
      serviceId === "other"
        ? t.otherService[locale]
        : SERVICES.find((s) => s.id === serviceId)?.label[locale];

    const area = RIYADH_AREAS.find((a) => a.id === areaId);
    if (!serviceLabel || !area) return null;

    return {
      locale,
      serviceId,
      serviceLabel,
      areaId: area.id,
      areaLabel: area.label[locale],
      countryIso: parsed.country ?? "SA",
      countryDial: parsed.countryCallingCode,
      phone: parsed.nationalNumber,
      issue: issue.trim() || undefined,
      location: location ?? undefined,
      pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
    };
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    const lead = buildLeadPayload();
    if (!lead) {
      setErrors({ phone: t.errors.phone[locale] });
      return;
    }

    setSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      let data: { ok?: boolean } = {};
      try {
        data = (await response.json()) as { ok?: boolean };
      } catch {
        data = {};
      }

      if (!response.ok || !data.ok) {
        setErrors({ generic: t.errors.generic[locale] });
        return;
      }

      setSavedLead(lead);
      openLeadWhatsApp(lead);
      setSuccess(true);
      localStorage.setItem(LEAD_STORAGE_KEYS.submitted, "1");
      window.setTimeout(() => onSubmitted(), 3500);
    } catch {
      setErrors({ generic: t.errors.generic[locale] });
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="lead-modal" role="presentation">
      <button
        type="button"
        className="lead-modal__backdrop"
        aria-label={t.close[locale]}
        onClick={onClose}
      />

      <div
        ref={panelRef}
        className="lead-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <div className="lead-modal__topbar">
          <button type="button" className="lead-modal__later" onClick={onClose}>
            {t.later[locale]}
          </button>
          <button
            type="button"
            className="lead-modal__close"
            onClick={onClose}
            aria-label={t.close[locale]}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        {success && savedLead ? (
          <div className="lead-modal__success">
            <div className="lead-modal__success-icon" aria-hidden="true">
              ✓
            </div>
            <h2 id={titleId} className="lead-modal__title lead-modal__title--center">
              {t.success.title[locale]}
            </h2>
            <p className="lead-modal__subtitle lead-modal__subtitle--center">
              {t.success.message[locale]}
            </p>
            <a
              href={getLeadWhatsAppUrl(savedLead)}
              target="_blank"
              rel="noopener noreferrer"
              className="lead-modal__submit lead-modal__submit--link"
            >
              {t.success.whatsappCta[locale]}
            </a>
          </div>
        ) : (
          <>
            <header className="lead-modal__header">
              <div className="lead-modal__header-top">
                <span className="lead-modal__eyebrow">{t.eyebrow[locale]}</span>
                <h2 id={titleId} className="lead-modal__title">
                  {t.title[locale]}
                </h2>
              </div>
              <p className="lead-modal__subtitle">{t.subtitle[locale]}</p>
            </header>

            <form className="lead-modal__form" onSubmit={handleSubmit} noValidate>
              <div className="lead-modal__fields">
                <label className="lead-modal__field">
                  <span className="lead-modal__label">{t.fields.service[locale]}</span>
                  <select
                    className="lead-modal__input lead-modal__select"
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    required
                  >
                    <option value="">{t.fields.servicePlaceholder[locale]}</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.label[locale]}
                      </option>
                    ))}
                    <option value="other">{t.otherService[locale]}</option>
                  </select>
                  {errors.service ? (
                    <span className="lead-modal__error">{errors.service}</span>
                  ) : null}
                </label>

                <label className="lead-modal__field">
                  <span className="lead-modal__label">{t.fields.area[locale]}</span>
                  <select
                    className="lead-modal__input lead-modal__select"
                    value={areaId}
                    onChange={(e) => setAreaId(e.target.value)}
                    required
                  >
                    <option value="">{t.fields.areaPlaceholder[locale]}</option>
                    {RIYADH_AREAS.map((area) => (
                      <option key={area.id} value={area.id}>
                        {area.label[locale]}
                      </option>
                    ))}
                  </select>
                  {errors.area ? <span className="lead-modal__error">{errors.area}</span> : null}
                </label>

                <div className="lead-modal__field lead-modal__field--phone">
                  <span className="lead-modal__label">{t.fields.phone[locale]}</span>
                  <LeadPhoneInput
                    locale={locale}
                    value={phoneE164}
                    onChange={setPhoneE164}
                    hasError={Boolean(errors.phone)}
                  />
                  {errors.phone ? <span className="lead-modal__error">{errors.phone}</span> : null}
                </div>

                <div className="lead-modal__field lead-modal__field--issue">
                  <span className="lead-modal__label">{t.fields.issue[locale]}</span>
                  <div className="lead-modal__input-group">
                    <input
                      type="text"
                      className="lead-modal__input lead-modal__input--with-action"
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                      placeholder={t.fields.issuePlaceholder[locale]}
                    />
                    {location ? (
                      <>
                        <a
                          href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="lead-modal__pin-btn lead-modal__pin-btn--active"
                          title={t.fields.locationAttached[locale]}
                          aria-label={t.fields.locationAttached[locale]}
                        >
                          <MapPinIcon />
                        </a>
                        <button
                          type="button"
                          className="lead-modal__pin-clear"
                          onClick={() => setLocation(null)}
                          aria-label={t.fields.locationRemove[locale]}
                        >
                          ×
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        className="lead-modal__pin-btn"
                        onClick={attachLocation}
                        title={t.fields.locationHint[locale]}
                        aria-label={t.fields.locationHint[locale]}
                      >
                        <MapPinIcon />
                      </button>
                    )}
                  </div>
                  {locationError ? (
                    <span className="lead-modal__hint lead-modal__hint--warn">{locationError}</span>
                  ) : null}
                </div>
              </div>

              {errors.generic ? (
                <p className="lead-modal__error lead-modal__error--block">{errors.generic}</p>
              ) : null}

              <div className="lead-modal__footer">
                <p className="lead-modal__secure">
                  <LockIcon />
                  <span>{t.secure[locale]}</span>
                </p>
                <button type="submit" className="lead-modal__submit" disabled={submitting}>
                  <WhatsAppIcon />
                  <span>{submitting ? t.submitting[locale] : t.submit[locale]}</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5 shrink-0">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
