"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { QuoteIssueId } from "@/lib/constants/quote-issues";

type QuickQuoteOptions = {
  issueId?: QuoteIssueId;
};

type QuickQuoteContextValue = {
  scrollToQuote: (options?: QuickQuoteOptions) => void;
  registerSection: (element: HTMLElement | null) => void;
  pendingIssueId: QuoteIssueId | null;
  consumePendingIssue: () => QuoteIssueId | null;
};

const QuickQuoteContext = createContext<QuickQuoteContextValue | null>(null);

export function useQuickQuote(): QuickQuoteContextValue {
  const context = useContext(QuickQuoteContext);
  if (!context) {
    return {
      scrollToQuote: () => {},
      registerSection: () => {},
      pendingIssueId: null,
      consumePendingIssue: () => null,
    };
  }
  return context;
}

type QuickQuoteProviderProps = {
  children: ReactNode;
};

export function QuickQuoteProvider({ children }: QuickQuoteProviderProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [pendingIssueId, setPendingIssueId] = useState<QuoteIssueId | null>(null);

  const registerSection = useCallback((element: HTMLElement | null) => {
    sectionRef.current = element;
  }, []);

  const scrollToQuote = useCallback((options?: QuickQuoteOptions) => {
    if (options?.issueId) {
      setPendingIssueId(options.issueId);
    }

    const section = sectionRef.current;
    if (!section) return;

    const headerOffset = Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--site-header-offset"),
    );
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset - 12;

    window.scrollTo({ top, behavior: "smooth" });

    window.setTimeout(() => {
      const focusTarget = section.querySelector<HTMLElement>(
        "[data-quick-quote-focus]",
      );
      focusTarget?.focus({ preventScroll: true });
    }, 450);
  }, []);

  const consumePendingIssue = useCallback(() => {
    const issueId = pendingIssueId;
    if (issueId) {
      setPendingIssueId(null);
    }
    return issueId;
  }, [pendingIssueId]);

  return (
    <QuickQuoteContext.Provider
      value={{
        scrollToQuote,
        registerSection,
        pendingIssueId,
        consumePendingIssue,
      }}
    >
      {children}
    </QuickQuoteContext.Provider>
  );
}
