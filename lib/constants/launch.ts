/** Launch countdown — update target when the go-live date is confirmed */
export const LAUNCH_COUNTDOWN = {
  /** 2 weeks from project kickoff (June 6 → June 20, 2026), end of day Riyadh */
  targetIso: "2026-06-20T23:59:59+03:00",
  title: {
    ar: "العد التنازلي للإطلاق",
    en: "Launch Countdown",
  },
  units: {
    days: { ar: "يوم", en: "Days" },
    hours: { ar: "ساعة", en: "Hours" },
    minutes: { ar: "دقيقة", en: "Mins" },
    seconds: { ar: "ثانية", en: "Secs" },
  },
  live: {
    ar: "موقعنا متاح الآن!",
    en: "We're live now!",
  },
} as const;

export function getLaunchTargetMs(): number {
  return new Date(LAUNCH_COUNTDOWN.targetIso).getTime();
}
