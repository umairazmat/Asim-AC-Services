"use client";

import { BookServiceSection } from "@/app/[locale]/home/components/BookServiceSection";
import { QuickQuoteProvider } from "@/components/providers/QuickQuoteProvider";
import type { Locale } from "@/lib/i18n/config";

type SiteQuickQuoteShellProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function SiteQuickQuoteShell({ locale, children }: SiteQuickQuoteShellProps) {
  return (
    <QuickQuoteProvider>
      {children}
      <BookServiceSection locale={locale} />
    </QuickQuoteProvider>
  );
}
