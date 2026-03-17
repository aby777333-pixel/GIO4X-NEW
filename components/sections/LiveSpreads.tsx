"use client";

import { useEffect, useState } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

const baseData = [
  { instrument: "EUR/USD", spread: 0.1, min: 0.0, typical: 0.2 },
  { instrument: "GBP/USD", spread: 0.3, min: 0.1, typical: 0.4 },
  { instrument: "XAU/USD", spread: 0.3, min: 0.2, typical: 0.4 },
  { instrument: "USD/JPY", spread: 0.2, min: 0.1, typical: 0.3 },
  { instrument: "AUD/USD", spread: 0.4, min: 0.2, typical: 0.5 },
  { instrument: "EUR/GBP", spread: 0.5, min: 0.3, typical: 0.6 },
];

export function LiveSpreads() {
  const [data, setData] = useState(baseData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => ({
          ...item,
          spread: Math.max(0, item.spread + (Math.random() - 0.5) * 0.1),
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding">
      <div className="max-site">
        <SectionHeading
          eyebrow="Spreads"
          title="Live Spreads"
          subtitle="Real-time competitive spreads across major instruments."
        />
        <AnimateOnScroll>
          <div className="glass-panel overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Instrument</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Spread</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)] hidden sm:table-cell">Min</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)] hidden sm:table-cell">Typical</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.instrument} className="border-b border-[var(--color-border)] last:border-b-0 hover:bg-[var(--color-glass-bg)] transition-colors">
                    <td className="px-6 py-4 font-mono font-semibold text-sm">{item.instrument}</td>
                    <td className="px-6 py-4 text-right font-mono text-sm text-[#29ABE2]">
                      {item.spread.toFixed(1)}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-sm text-[var(--color-text-secondary)] hidden sm:table-cell">
                      {item.min.toFixed(1)}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-sm text-[var(--color-text-secondary)] hidden sm:table-cell">
                      {item.typical.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
