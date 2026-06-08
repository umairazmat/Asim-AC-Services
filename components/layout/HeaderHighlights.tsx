import { Fragment } from "react";
import { HEADER_HIGHLIGHTS } from "@/lib/constants/highlights";
import { HeaderHighlightIcon } from "@/components/layout/HeaderHighlightIcon";
import type { Locale } from "@/lib/i18n/config";

type HeaderHighlightsProps = {
  locale: Locale;
};

const TONE_CLASS: Record<(typeof HEADER_HIGHLIGHTS)[number]["tone"], string> = {
  cyan: "header-highlight__icon--cyan",
  amber: "header-highlight__icon--amber",
};

export function HeaderHighlights({ locale }: HeaderHighlightsProps) {
  return (
    <>
      {HEADER_HIGHLIGHTS.map((item, index) => (
        <Fragment key={item.id}>
          {index > 0 ? <span className="header-top__divider" aria-hidden="true" /> : null}
          <span className="header-highlight">
            <span
              className={`header-highlight__icon ${TONE_CLASS[item.tone]}`}
              aria-hidden="true"
            >
              <HeaderHighlightIcon name={item.icon} className="h-3 w-3" />
            </span>
            <span className="header-highlight__label header-highlight__label--full">
              {item.label[locale]}
            </span>
            <span className="header-highlight__label header-highlight__label--short">
              {item.labelShort[locale]}
            </span>
          </span>
        </Fragment>
      ))}
    </>
  );
}
