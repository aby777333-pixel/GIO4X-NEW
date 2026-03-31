"use client";

import { useEffect, useState } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wifi } from "lucide-react";

interface SpreadRow {
  instrument: string;
  spread: number;
  min: number;
  typical: number;
  prev: number;
}

const baseData = [
  { instrument: "EUR/USD", base: 0.1, min: 0.0, typical: 0.2 },
  { instrument: "GBP/USD", base: 0.3, min: 0.1, typical: 0.4 },
  { instrument: "XAU/USD", base: 0.3, min: 0.2, typical: 0.4 },
  { instrument: "USD/JPY", base: 0.2, min: 0.1, typical: 0.3 },
  { instrument: "AUD/USD", base: 0.4, min: 0.2, typical: 0.5 },
  { instrument: "EUR/GBP", base: 0.5, min: 0.3, typical: 0.6 },
  { instrument: "USD/CHF", base: 0.4, min: 0.2, typical: 0.5 },
  { instrument: "BTC/USD", base: 25.0, min: 18.0, typical: 30.0 },
];

// Deterministic jitter seeded by current second — gives everyone the same value at the same second
function seededJitter(seed: number, scale: number): number {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return ((x - Math.floor(x)) - 0.5) * scale;
}

export function LiveSpreads() {
  const [data, setData] = useState<SpreadRow[]>(
    baseData.map((d) => ({ instrument: d.instrument, spread: d.base, min: d.min, typical: d.typical, prev: d.base }))
  );
  const [lastUpdate, setLastUpdate] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const now = Math.floor(Date.now() / 2000); // changes every 2s
      setData((prev) =>
        prev.map((row, i) => {
          const jitter = seededJitter(now + i * 17, row.typical > 10 ? 4 : 0.08);
          const newSpread = Math.max(baseData[i].min, +(baseData[i].base + jitter).toFixed(row.typical > 10 ? 1 : 1));
          return { ...row, prev: row.spread, spread: newSpread };
        })
      );
      setLastUpdate(new Date().toLocaleTimeString());
    };
    tick();
    const timer = setInterval(tick, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding">
      <div className="max-site">
        <SectionHeading
          eyebrow="Spreads"
          title="Live Spreads"
          subtitle="Competitive spreads across major instruments, updated in real time."
        />
        <AnimateOnScroll>
          <div className="glass-panel overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Instrument</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Spread (pips)</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)] hidden sm:table-cell">Min</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)] hidden sm:table-cell">Typical</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  const flash = item.spread !== item.prev;
                  return (
                    <tr key={item.instrument} className="border-b border-[var(--color-border)] last:border-b-0 hover:bg-[var(--color-glass-bg)] transition-colors">
                      <td className="px-6 py-4 font-mono font-semibold text-sm">{item.instrument}</td>
                      <td className={`px-6 py-4 text-right font-mono text-sm transition-colors duration-500 ${
                        flash ? (item.spread < item.prev ? "text-emerald-400" : "text-amber-400") : "text-[#29ABE2]"
                      }`}>
                        {item.spread.toFixed(1)}
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-sm text-[var(--color-text-secondary)] hidden sm:table-cell">
                        {item.min.toFixed(1)}
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-sm text-[var(--color-text-secondary)] hidden sm:table-cell">
                        {item.typical.toFixed(1)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* Live footer */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-[var(--color-border)] bg-[var(--color-glass-bg)]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <Wifi className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] text-emerald-400 font-semibold uppercase">Live</span>
              </div>
              {lastUpdate && (
                <span className="text-[10px] text-[var(--color-text-secondary)] font-mono">
                  Last update: {lastUpdate}
                </span>
              )}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
