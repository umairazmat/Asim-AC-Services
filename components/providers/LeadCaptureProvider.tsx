"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { LeadCaptureModal } from "@/components/ui/LeadCaptureModal";
import {
  LEAD_MODAL_TIMING,
  LEAD_STORAGE_KEYS,
} from "@/lib/constants/lead-form";
import type { Locale } from "@/lib/i18n/config";

type LeadCaptureContextValue = {
  openModal: () => void;
  closeModal: () => void;
};

const LeadCaptureContext = createContext<LeadCaptureContextValue | null>(null);

export function useLeadCapture(): LeadCaptureContextValue {
  const context = useContext(LeadCaptureContext);
  if (!context) {
    return {
      openModal: () => {},
      closeModal: () => {},
    };
  }
  return context;
}

type LeadCaptureProviderProps = {
  locale: Locale;
  children: ReactNode;
};

function hasSubmitted(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(LEAD_STORAGE_KEYS.submitted) === "1";
}

function isDismissCooldownActive(): boolean {
  if (typeof window === "undefined") return false;
  const dismissedAt = sessionStorage.getItem(LEAD_STORAGE_KEYS.dismissedAt);
  if (!dismissedAt) return false;
  const elapsed = Date.now() - Number(dismissedAt);
  return elapsed < LEAD_MODAL_TIMING.dismissCooldownMs;
}

export function LeadCaptureProvider({ locale, children }: LeadCaptureProviderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const initialShownRef = useRef(false);
  const prevPathRef = useRef(pathname);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const canAutoShow = useCallback(() => {
    return !hasSubmitted() && !isDismissCooldownActive() && !open;
  }, [open]);

  const scheduleOpen = useCallback(
    (delayMs: number) => {
      clearTimer();
      if (!canAutoShow()) return;

      timerRef.current = setTimeout(() => {
        if (canAutoShow()) {
          setOpen(true);
        }
      }, delayMs);
    },
    [canAutoShow, clearTimer],
  );

  const openModal = useCallback(() => {
    clearTimer();
    setOpen(true);
  }, [clearTimer]);

  const closeModal = useCallback(() => {
    setOpen(false);
    if (!hasSubmitted()) {
      sessionStorage.setItem(LEAD_STORAGE_KEYS.dismissedAt, String(Date.now()));
    }
  }, []);

  const handleSubmitted = useCallback(() => {
    localStorage.setItem(LEAD_STORAGE_KEYS.submitted, "1");
    setOpen(false);
  }, []);

  // Initial 3-second delay
  useEffect(() => {
    if (initialShownRef.current || hasSubmitted()) return;
    initialShownRef.current = true;
    scheduleOpen(LEAD_MODAL_TIMING.initialDelayMs);
    return clearTimer;
  }, [scheduleOpen, clearTimer]);

  // Re-show on page navigation if not submitted
  useEffect(() => {
    if (prevPathRef.current === pathname) return;
    prevPathRef.current = pathname;
    scheduleOpen(LEAD_MODAL_TIMING.pageChangeDelayMs);
  }, [pathname, scheduleOpen]);

  // Re-show on scroll past threshold (once per session)
  useEffect(() => {
    if (hasSubmitted()) return;

    const onScroll = () => {
      if (sessionStorage.getItem(LEAD_STORAGE_KEYS.scrollShown) === "1") return;
      if (!canAutoShow()) return;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const ratio = window.scrollY / scrollable;
      if (ratio >= LEAD_MODAL_TIMING.scrollThreshold) {
        sessionStorage.setItem(LEAD_STORAGE_KEYS.scrollShown, "1");
        setOpen(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [canAutoShow]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <LeadCaptureContext.Provider value={{ openModal, closeModal }}>
      {children}
      <LeadCaptureModal
        locale={locale}
        open={open}
        onClose={closeModal}
        onSubmitted={handleSubmitted}
      />
    </LeadCaptureContext.Provider>
  );
}
