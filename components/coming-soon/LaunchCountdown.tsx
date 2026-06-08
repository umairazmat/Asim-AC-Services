"use client";

import { useEffect, useState } from "react";
import { getLaunchTargetMs, LAUNCH_COUNTDOWN } from "@/lib/constants/launch";

type LaunchCountdownProps = {
  locale: "ar" | "en";
  className?: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
};

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

function getTimeLeft(targetMs: number): TimeLeft {
  const total = Math.max(0, targetMs - Date.now());
  const seconds = Math.floor(total / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return { days, hours, minutes, seconds: secs, total };
}

const PLACEHOLDER_UNITS = [
  { value: "00", labelKey: "days" as const },
  { value: "00", labelKey: "hours" as const },
  { value: "00", labelKey: "minutes" as const },
  { value: "00", labelKey: "seconds" as const },
];

export function LaunchCountdown({ locale, className = "" }: LaunchCountdownProps) {
  const targetMs = getLaunchTargetMs();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(targetMs));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  const units = timeLeft
    ? [
        { value: String(timeLeft.days), label: LAUNCH_COUNTDOWN.units.days[locale], pad: false },
        { value: pad(timeLeft.hours), label: LAUNCH_COUNTDOWN.units.hours[locale], pad: true },
        { value: pad(timeLeft.minutes), label: LAUNCH_COUNTDOWN.units.minutes[locale], pad: true },
        { value: pad(timeLeft.seconds), label: LAUNCH_COUNTDOWN.units.seconds[locale], pad: true },
      ]
    : PLACEHOLDER_UNITS.map((unit) => ({
        value: unit.value,
        label: LAUNCH_COUNTDOWN.units[unit.labelKey][locale],
        pad: true,
      }));

  if (timeLeft && timeLeft.total <= 0) {
    return (
      <div className={`countdown-wrap ${className}`.trim()}>
        <p className="countdown-live text-sm font-bold sm:text-base">
          {LAUNCH_COUNTDOWN.live[locale]}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`countdown-wrap ${className}`.trim()}
      aria-live={timeLeft ? "polite" : "off"}
      aria-busy={!timeLeft}
      aria-label={LAUNCH_COUNTDOWN.title[locale]}
    >
      <p className="countdown-title mb-2.5 text-[0.65rem] font-bold tracking-[0.12em] text-[var(--color-gold-light)] uppercase sm:text-xs">
        {LAUNCH_COUNTDOWN.title[locale]}
      </p>

      <div className="countdown-grid-wrap">
        <div className="countdown-grid" dir="ltr">
        {units.map((unit, index) => (
          <div key={unit.label} className="countdown-unit">
            <span className="countdown-value">{unit.value}</span>
            <span className="countdown-label">{unit.label}</span>
            {index < units.length - 1 ? (
              <span className="countdown-separator" aria-hidden="true">
                :
              </span>
            ) : null}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
