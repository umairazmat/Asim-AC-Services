"use client";

import { useEffect, useState, type ComponentProps } from "react";
import PhoneInput, { type Value } from "react-phone-number-input/max";
import ar from "react-phone-number-input/locale/ar.json";
import en from "react-phone-number-input/locale/en.json";
import type { Locale } from "@/lib/i18n/config";
import {
  LEAD_PHONE_COUNTRIES,
  LEAD_PHONE_COUNTRY_ORDER,
} from "@/lib/constants/phone-countries";

import "react-phone-number-input/style.css";

type CountryFlags = NonNullable<ComponentProps<typeof PhoneInput>["flags"]>;

type LeadPhoneInputProps = {
  locale: Locale;
  value: Value | undefined;
  onChange: (value: Value) => void;
  hasError?: boolean;
};

export function LeadPhoneInput({ locale, value, onChange, hasError }: LeadPhoneInputProps) {
  const [flags, setFlags] = useState<CountryFlags | undefined>();

  useEffect(() => {
    void import("react-phone-number-input/flags").then((module) => {
      setFlags(module.default);
    });
  }, []);

  if (!flags) {
    return (
      <div
        className={`lead-phone-input lead-phone-input--loading${hasError ? " lead-phone-input--error" : ""}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <PhoneInput
      international
      defaultCountry="SA"
      countries={LEAD_PHONE_COUNTRIES}
      countryOptionsOrder={LEAD_PHONE_COUNTRY_ORDER}
      countryCallingCodeEditable={false}
      flags={flags}
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
