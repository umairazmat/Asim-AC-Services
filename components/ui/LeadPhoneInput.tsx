"use client";

import PhoneInput, { type Value } from "react-phone-number-input/max";
import ar from "react-phone-number-input/locale/ar.json";
import en from "react-phone-number-input/locale/en.json";
import type { Locale } from "@/lib/i18n/config";

import "react-phone-number-input/style.css";

type LeadPhoneInputProps = {
  locale: Locale;
  value: Value | undefined;
  onChange: (value: Value) => void;
  hasError?: boolean;
};

export function LeadPhoneInput({ locale, value, onChange, hasError }: LeadPhoneInputProps) {
  return (
    <PhoneInput
      international
      defaultCountry="SA"
      countryCallingCodeEditable={false}
      value={value}
      onChange={onChange}
      labels={locale === "ar" ? ar : en}
      className={`lead-phone-input${hasError ? " lead-phone-input--error" : ""}`}
      numberInputProps={{
        className: "lead-phone-input__number",
        dir: "ltr",
      }}
    />
  );
}
