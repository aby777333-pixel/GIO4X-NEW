"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { useState } from "react";

const pairs = ["EUR/USD", "GBP/USD", "USD/JPY", "USD/CHF", "AUD/USD", "NZD/USD", "USD/CAD", "XAU/USD"];

// Correlation matrix (symmetric, 1.0 on diagonal)
const matrix: number[][] = [
  [ 1.00,  0.88, -0.52, -0.93,  0.72,  0.68, -0.65,  0.45],
  [ 0.88,  1.00, -0.46, -0.85,  0.65,  0.61, -0.58,  0.38],
  [-0.52, -0.46,  1.00,  0.56, -0.30, -0.25,  0.35, -0.15],
  [-0.93, -0.85,  0.56,  1.00, -0.68, -0.64,  0.62, -0.42],
  [ 0.72,  0.65, -0.30, -0.68,  1.00,  0.91, -0.75,  0.52],
  [ 0.68,  0.61, -0.25, -0.64,  0.91,  1.00, -0.70,  0.48],
  [-0.65, -0.58,  0.35,  0.62, -0.75, -0.70,  1.00, -0.35],
  [ 0.45,  0.38, -0.15, -0.42,  0.52,  0.48, -0.35,  1.00],
];

function getColor(val: number): string {
  if (val >= 0.7) return "bg-emerald-500/80 text-white";
  if (val >= 0.4) return "bg-emerald-500/30 text-emerald-300";
  if (val >= 0.1) return "bg-emerald-500/10 text-emerald-400";
  if (val > -0.1) return "bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)]";
  if (val > -0.4) return "bg-rose-500/10 text-rose-400";
  if (val > -0.7) return "bg-rose-500/30 text-rose-300";
  return "bg-rose-500/80 text-white";
}

export function CorrelationMatrix() {
  const [hoveredCell, setHoveredCell] = useState<[number, number] | null>(null);

  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="max-site">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase">Portfolio Intelligence</span>
            <h2 className="text-[var(--text-h2)] font-bold mt-3 mb-4">
              Currency <span className="gradient-text">Correlation Matrix</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Understand how forex pairs move relative to each other. Positive correlation means they move together; negative means they move in opposite directions. Essential for portfolio diversification and hedging strategies.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass-bg)]">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-3 text-left text-xs font-semibold text-[var(--color-text-secondary)]" />
                  {pairs.map((p) => (
                    <th key={p} className="p-3 text-center text-xs font-bold whitespace-nowrap">{p}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pairs.map((row, i) => (
                  <tr key={row}>
                    <td className="p-3 text-xs font-bold whitespace-nowrap">{row}</td>
                    {matrix[i].map((val, j) => {
                      const isHovered = hoveredCell && (hoveredCell[0] === i || hoveredCell[1] === j);
                      const isDiagonal = i === j;
                      return (
                        <td
                          key={j}
                          className={`p-2 text-center transition-all duration-200 ${isDiagonal ? "bg-[#29ABE2]/20" : ""}`}
                          onMouseEnter={() => setHoveredCell([i, j])}
                          onMouseLeave={() => setHoveredCell(null)}
                        >
                          <div className={`rounded-lg px-2 py-1.5 text-xs font-mono font-bold transition-all ${
                            isDiagonal ? "bg-[#29ABE2]/30 text-[#29ABE2]" : getColor(val)
                          } ${isHovered && !isDiagonal ? "ring-1 ring-[#29ABE2]/50 scale-110" : ""}`}>
                            {val > 0 ? "+" : ""}{val.toFixed(2)}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>

        {/* Legend */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-6 h-4 rounded bg-emerald-500/80" />
              <span className="text-[var(--color-text-secondary)]">Strong Positive (+0.7 to +1.0)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-4 rounded bg-emerald-500/30" />
              <span className="text-[var(--color-text-secondary)]">Moderate Positive</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-4 rounded bg-[var(--color-glass-bg)] border border-[var(--color-border)]" />
              <span className="text-[var(--color-text-secondary)]">Weak / Neutral</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-4 rounded bg-rose-500/30" />
              <span className="text-[var(--color-text-secondary)]">Moderate Negative</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-4 rounded bg-rose-500/80" />
              <span className="text-[var(--color-text-secondary)]">Strong Negative (-0.7 to -1.0)</span>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] p-4">
              <h4 className="font-semibold text-sm text-emerald-400 mb-1">Hedging Tip</h4>
              <p className="text-xs text-[var(--color-text-secondary)]">Trade negatively correlated pairs (e.g. EUR/USD & USD/CHF at -0.93) to offset risk. If one trade loses, the other often gains.</p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] p-4">
              <h4 className="font-semibold text-sm text-[#29ABE2] mb-1">Avoid Double Exposure</h4>
              <p className="text-xs text-[var(--color-text-secondary)]">Highly correlated pairs (e.g. AUD/USD & NZD/USD at +0.91) move together. Going long both doubles your risk instead of diversifying it.</p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] p-4">
              <h4 className="font-semibold text-sm text-[#C9A84C] mb-1">Gold Insight</h4>
              <p className="text-xs text-[var(--color-text-secondary)]">XAU/USD has moderate positive correlation with EUR/USD (+0.45). Gold tends to rise when USD weakens — use this for multi-asset strategies.</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
