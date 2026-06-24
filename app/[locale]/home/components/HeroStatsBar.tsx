"use client";

import { useEffect, useRef, useState } from "react";
import { HOME_CONTENT } from "@/app/[locale]/home/content";
import type { Locale } from "@/lib/i18n/config";

type HeroStatsBarProps = {
  locale: Locale;
};

export function HeroStatsBar({ locale }: HeroStatsBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = barRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={barRef}
      className={`home-hero__stats fade-up fade-up--delay-2${visible ? " home-hero__stats--live" : ""}`}
      aria-label={locale === "ar" ? "مؤشرات الثقة" : "Trust indicators"}
    >
      <ul className="home-hero__stats-list">
        {HOME_CONTENT.hero.stats.map((stat, index) => (
          <li
            key={stat.id}
            className="home-hero__stat"
            style={{ animationDelay: `${0.08 * index}s` }}
          >
            <span className="home-hero__stat-value">
              {stat.value !== null ? (
                <AnimatedValue
                  active={visible}
                  value={stat.value}
                  suffix={stat.suffix ?? ""}
                />
              ) : (
                stat.display![locale]
              )}
            </span>
            <span className="home-hero__stat-label">{stat.label[locale]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AnimatedValue({
  active,
  value,
  suffix,
}: {
  active: boolean;
  value: number;
  suffix: string;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCurrent(Math.round(value * eased));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [active, value]);

  return (
    <>
      {current}
      {suffix}
    </>
  );
}
