"use client";

import { useState, useMemo } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Calculator, AlertTriangle, CheckCircle } from "lucide-react";

export function RiskCalculator() {
  const [balance, setBalance] = useState(10000);
  const [riskPct, setRiskPct] = useState(2);
  const [stopPips, setStopPips] = useState(30);
  const [pipValue, setPipValue] = useState(10); // $10/pip for 1 standard lot

  const calc = useMemo(() => {
    const riskAmount = balance * (riskPct / 100);
    const lotSize = riskAmount / (stopPips * pipValue);
    const rewardAmount1to2 = riskAmount * 2;
    const rewardAmount1to3 = riskAmount * 3;
    const tradesTo50PctLoss = Math.ceil(50 / riskPct);
    return {
      riskAmount: riskAmount.toFixed(2),
      lotSize: lotSize.toFixed(2),
      lots: (lotSize).toFixed(2),
      microLots: (lotSize * 100).toFixed(0),
      rewardAmount1to2: rewardAmount1to2.toFixed(2),
      rewardAmount1to3: rewardAmount1to3.toFixed(2),
      tradesTo50PctLoss,
      riskLevel: riskPct <= 1 ? "Conservative" : riskPct <= 2 ? "Moderate" : riskPct <= 5 ? "Aggressive" : "Dangerous",
      riskColor: riskPct <= 1 ? "text-emerald-400" : riskPct <= 2 ? "text-[#29ABE2]" : riskPct <= 5 ? "text-amber-400" : "text-rose-400",
    };
  }, [balance, riskPct, stopPips, pipValue]);

  return (
    <section className="section-padding bg-[var(--color-bg)]">
      <div className="max-site max-w-4xl">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Interactive Tool</span>
            <h2 className="text-[var(--text-h2)] font-bold mt-3 mb-4">
              Position Size <span className="gradient-text">Calculator</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Calculate your optimal lot size based on account balance, risk percentage, and stop-loss distance. Professional risk management starts with correct position sizing.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Panel */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-5 h-5 text-[#29ABE2]" />
                <h3 className="font-bold">Input Parameters</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-sm text-[var(--color-text-secondary)] mb-1.5 block">Account Balance ($)</label>
                  <input
                    type="number"
                    value={balance}
                    onChange={(e) => setBalance(Number(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[#29ABE2]/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1.5">
                    <label className="text-sm text-[var(--color-text-secondary)]">Risk Per Trade</label>
                    <span className={`text-sm font-bold ${calc.riskColor}`}>{riskPct}%</span>
                  </div>
                  <input
                    type="range"
                    min={0.5}
                    max={10}
                    step={0.5}
                    value={riskPct}
                    onChange={(e) => setRiskPct(Number(e.target.value))}
                    className="w-full accent-[#29ABE2]"
                  />
                  <div className="flex justify-between text-[10px] text-[var(--color-text-secondary)] mt-1">
                    <span>0.5%</span><span>2% (Recommended)</span><span>10%</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-[var(--color-text-secondary)] mb-1.5 block">Stop-Loss Distance (Pips)</label>
                  <input
                    type="number"
                    value={stopPips}
                    onChange={(e) => setStopPips(Number(e.target.value) || 1)}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[#29ABE2]/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-[var(--color-text-secondary)] mb-1.5 block">Pip Value ($) — Standard Lot</label>
                  <input
                    type="number"
                    value={pipValue}
                    onChange={(e) => setPipValue(Number(e.target.value) || 1)}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[#29ABE2]/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="space-y-4">
              {/* Position Size */}
              <div className="rounded-2xl border border-[#29ABE2]/30 bg-[#29ABE2]/5 p-6">
                <span className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Recommended Position Size</span>
                <div className="text-4xl font-bold text-[#29ABE2] mt-1">{calc.lots} lots</div>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">= {calc.microLots} micro lots</p>
              </div>

              {/* Risk Amount */}
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] p-5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[var(--color-text-secondary)]">Risk Amount</span>
                  <span className="font-bold text-lg">${calc.riskAmount}</span>
                </div>
              </div>

              {/* R:R Targets */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] p-4 text-center">
                  <span className="text-xs text-[var(--color-text-secondary)]">1:2 R:R Target</span>
                  <p className="font-bold text-emerald-400 text-lg mt-1">+${calc.rewardAmount1to2}</p>
                </div>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] p-4 text-center">
                  <span className="text-xs text-[var(--color-text-secondary)]">1:3 R:R Target</span>
                  <p className="font-bold text-emerald-400 text-lg mt-1">+${calc.rewardAmount1to3}</p>
                </div>
              </div>

              {/* Risk Level */}
              <div className={`rounded-2xl border p-4 flex items-center gap-3 ${
                riskPct <= 2 ? "border-emerald-500/30 bg-emerald-500/5" : riskPct <= 5 ? "border-amber-500/30 bg-amber-500/5" : "border-rose-500/30 bg-rose-500/5"
              }`}>
                {riskPct <= 2 ? <CheckCircle className="w-5 h-5 text-emerald-400" /> : <AlertTriangle className="w-5 h-5 text-amber-400" />}
                <div>
                  <span className={`font-bold text-sm ${calc.riskColor}`}>{calc.riskLevel}</span>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {calc.tradesTo50PctLoss} consecutive losses to lose 50% of capital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
