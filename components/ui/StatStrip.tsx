"use client";

// StatStrip — a premium metric band with count-up figures. Drop it under a
// PageHero to anchor a page with credibility.

import { CountUp } from "./CountUp";
import { AnimateOnScroll } from "./AnimateOnScroll";

export type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  accent?: "sky" | "gold";
};

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container mx-auto grid grid-cols-2 gap-px px-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <AnimateOnScroll key={s.label} delay={i * 0.05}>
            <div className="flex flex-col items-center px-4 py-9 text-center">
              <span
                className={`font-mono font-bold leading-none ${
                  s.accent === "gold" ? "text-[var(--color-gold)]" : "text-[var(--color-sky)]"
                }`}
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
              >
                <CountUp value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="mt-2 text-xs uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
                {s.label}
              </span>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
