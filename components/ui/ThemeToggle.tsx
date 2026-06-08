"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import type { Locale } from "@/lib/i18n/config";

type ThemeToggleProps = {
  locale: Locale;
  className?: string;
};

export function ThemeToggle({ locale, className = "" }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle ${className}`.trim()}
      aria-label={
        isDark
          ? locale === "ar"
            ? "التبديل إلى الوضع الفاتح"
            : "Switch to light mode"
          : locale === "ar"
            ? "التبديل إلى الوضع الداكن"
            : "Switch to dark mode"
      }
      aria-pressed={isDark}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="4.25" />
      <path strokeLinecap="round" d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.55 1.55M17.85 17.85l1.55 1.55M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.55-1.55M17.85 6.15l1.55-1.55" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.384 8.384 0 01-2.8-5.92 8.46 8.46 0 01.13-1.88c.2-1.12-.22-1.57-.49-1.73a1.505 1.505 0 00-1.77.24 8.962 8.962 0 00-2.86 6.48 9.008 9.008 0 009 9 8.962 8.962 0 006.48-2.86 1.505 1.505 0 00.24-1.77z" />
    </svg>
  );
}
