"use client";

import { useState, useMemo } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { DollarSign } from "lucide-react";

const pairs = [
  { symbol: "EUR/USD", pipSize: 0.0001, pipValueStd: 10 },
  { symbol: "GBP/USD", pipSize: 0.0001, pipValueStd: 10 },
  { symbol: "USD/JPY", pipSize: 0.01, pipValueStd: 6.67 },
  { symbol: "USD/CHF", pipSize: 0.0001, pipValueStd: 10.2 },
  { symbol: "AUD/USD", pipSize: 0.0001, pipValueStd: 10 },
  { symbol: "NZD/USD", pipSize: 0.0001, pipValueStd: 10 },
  { symbol: "USD/CAD", pipSize: 0.0001, pipValueStd: 7.4 },
  { symbol: "XAU/USD", pipSize: 0.01, pipValueStd: 1 },
];

export function PipCalculator() {
  const [pairIdx, setPairIdx] = useState(0);
  const [lots, setLots] = useState(0.1);
  const [pips, setPips] = useState(50);

  const result = useMemo(() => {
    const pair = pairs[pairIdx];
    const pipValue = pair.pipValueStd * lots;
    const profit = pipValue * pips;
    return { pipValue: pipValue.toFixed(2), profit: profit.toFixed(2), pair };
  }, [pairIdx, lots, pips]);

  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="max-site max-w-3xl">
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Interactive Tool</span>
            <h2 className="text-[var(--text-h2)] font-bold mt-3 mb-3">
              Pip Value <span className="gradient-text">Calculator</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Instantly calculate pip values and potential profit/loss for any forex pair and lot size.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              <div>
                <label className="text-sm text-[var(--color-text-secondary)] mb-1.5 block">Currency Pair</label>
                <select
                  value={pairIdx}
                  onChange={(e) => setPairIdx(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[#29ABE2]/50 focus:outline-none"
                >
                  {pairs.map((p, i) => <option key={p.symbol} value={i}>{p.symbol}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm text-[var(--color-text-secondary)] mb-1.5 block">Lot Size</label>
                <input
                  type="number"
                  value={lots}
                  step={0.01}
                  min={0.01}
                  onChange={(e) => setLots(Number(e.target.value) || 0.01)}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[#29ABE2]/50 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-[var(--color-text-secondary)] mb-1.5 block">Pips Gained/Lost</label>
                <input
                  type="number"
                  value={pips}
                  onChange={(e) => setPips(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[#29ABE2]/50 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#29ABE2]/5 border border-[#29ABE2]/20 p-4 text-center">
                <DollarSign className="w-5 h-5 text-[#29ABE2] mx-auto mb-1" />
                <p className="text-2xl font-bold text-[#29ABE2] font-mono">${result.pipValue}</p>
                <span className="text-xs text-[var(--color-text-secondary)]">Per Pip</span>
              </div>
              <div className={`rounded-xl p-4 text-center border ${
                pips >= 0 ? "bg-emerald-500/5 border-emerald-500/20" : "bg-rose-500/5 border-rose-500/20"
              }`}>
                <DollarSign className={`w-5 h-5 mx-auto mb-1 ${pips >= 0 ? "text-emerald-400" : "text-rose-400"}`} />
                <p className={`text-2xl font-bold font-mono ${pips >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                  {pips >= 0 ? "+" : ""}${result.profit}
                </p>
                <span className="text-xs text-[var(--color-text-secondary)]">Profit / Loss</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
