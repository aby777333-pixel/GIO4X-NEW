"use client";

import { useState, useMemo } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { motion } from "framer-motion";
import { Play, RotateCcw, TrendingUp, TrendingDown, Target } from "lucide-react";

// Simulated price path using random walk
function generatePath(start: number, steps: number, vol: number): number[] {
  const path = [start];
  for (let i = 1; i < steps; i++) {
    const drift = (Math.random() - 0.48) * vol;
    path.push(+(path[i - 1] + drift).toFixed(5));
  }
  return path;
}

export function TradeSimulator() {
  const [balance] = useState(10000);
  const [direction, setDirection] = useState<"long" | "short">("long");
  const [lots, setLots] = useState(0.1);
  const [tp, setTp] = useState(30);
  const [sl, setSl] = useState(15);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<{ outcome: "win" | "loss" | ""; pnl: number; path: number[] } | null>(null);

  const pipValue = lots * 10; // $10/pip for standard lot

  const runSimulation = () => {
    setRunning(true);
    setResult(null);

    const entry = 1.10000;
    const path = generatePath(entry, 200, 0.00025);

    let outcome: "win" | "loss" = "loss";
    let exitPrice = path[path.length - 1];
    const trimmedPath: number[] = [];

    for (let i = 0; i < path.length; i++) {
      trimmedPath.push(path[i]);
      const pips = direction === "long" ? (path[i] - entry) / 0.0001 : (entry - path[i]) / 0.0001;
      if (pips >= tp) { outcome = "win"; exitPrice = path[i]; break; }
      if (pips <= -sl) { outcome = "loss"; exitPrice = path[i]; break; }
    }

    const finalPips = direction === "long" ? (exitPrice - entry) / 0.0001 : (entry - exitPrice) / 0.0001;
    const pnl = finalPips * pipValue;

    setTimeout(() => {
      setResult({ outcome, pnl: +pnl.toFixed(2), path: trimmedPath });
      setRunning(false);
    }, 800);
  };

  const chartHeight = 120;
  const chartWidth = 400;

  const svgPath = useMemo(() => {
    if (!result?.path.length) return "";
    const p = result.path;
    const min = Math.min(...p);
    const max = Math.max(...p);
    const range = max - min || 0.001;
    return p.map((v, i) => {
      const x = (i / (p.length - 1)) * chartWidth;
      const y = chartHeight - ((v - min) / range) * (chartHeight - 20) - 10;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    }).join(" ");
  }, [result]);

  return (
    <section className="section-padding bg-[var(--color-bg)]">
      <div className="max-site max-w-3xl">
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase">Practice</span>
            <h2 className="text-[var(--text-h2)] font-bold mt-3 mb-3">
              Trade <span className="gradient-text">Simulator</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Practice your risk management skills. Set your direction, lot size, take-profit and stop-loss — then watch the market move.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] p-6">
            {/* Controls */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Direction</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setDirection("long")}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${direction === "long" ? "bg-emerald-500 text-white" : "bg-[var(--color-bg)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"}`}
                  >
                    <TrendingUp className="w-4 h-4 mx-auto" />
                  </button>
                  <button
                    onClick={() => setDirection("short")}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${direction === "short" ? "bg-rose-500 text-white" : "bg-[var(--color-bg)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"}`}
                  >
                    <TrendingDown className="w-4 h-4 mx-auto" />
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Lots</label>
                <input type="number" value={lots} step={0.01} min={0.01} onChange={(e) => setLots(Number(e.target.value) || 0.01)} className="w-full px-3 py-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[#29ABE2]/50" />
              </div>
              <div>
                <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">TP (pips)</label>
                <input type="number" value={tp} min={1} onChange={(e) => setTp(Number(e.target.value) || 1)} className="w-full px-3 py-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[#29ABE2]/50" />
              </div>
              <div>
                <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">SL (pips)</label>
                <input type="number" value={sl} min={1} onChange={(e) => setSl(Number(e.target.value) || 1)} className="w-full px-3 py-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[#29ABE2]/50" />
              </div>
            </div>

            {/* Info bar */}
            <div className="flex flex-wrap gap-4 mb-6 text-xs text-[var(--color-text-secondary)]">
              <span>Balance: <strong className="text-[var(--color-text)]">${balance.toLocaleString()}</strong></span>
              <span>Pip Value: <strong className="text-[var(--color-text)]">${pipValue.toFixed(2)}</strong></span>
              <span>Risk: <strong className="text-[var(--color-text)]">${(sl * pipValue).toFixed(2)}</strong> ({((sl * pipValue / balance) * 100).toFixed(1)}%)</span>
              <span>Reward: <strong className="text-[var(--color-text)]">${(tp * pipValue).toFixed(2)}</strong></span>
              <span>R:R: <strong className="text-[#29ABE2]">1:{(tp / sl).toFixed(1)}</strong></span>
            </div>

            {/* Run button */}
            <div className="flex gap-3 mb-6">
              <motion.button
                onClick={runSimulation}
                disabled={running}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#1B3A6B] to-[#29ABE2] text-white font-semibold disabled:opacity-50"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Play className="w-4 h-4" />
                {running ? "Simulating..." : "Run Simulation"}
              </motion.button>
              <button onClick={() => setResult(null)} className="px-4 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Chart + Result */}
            {result && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                {/* Price chart */}
                <div className="rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[var(--color-text-secondary)]">EUR/USD Price Path</span>
                    <span className="text-xs font-mono text-[var(--color-text-secondary)]">{result.path.length} candles</span>
                  </div>
                  <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-32">
                    <path d={svgPath} fill="none" stroke={result.outcome === "win" ? "#10B981" : "#EF4444"} strokeWidth={1.5} />
                    {/* Entry line */}
                    <line x1={0} y1={chartHeight / 2} x2={chartWidth} y2={chartHeight / 2} stroke="#29ABE2" strokeWidth={0.5} strokeDasharray="4,4" opacity={0.4} />
                  </svg>
                </div>

                {/* Result card */}
                <div className={`rounded-xl p-5 text-center border ${
                  result.outcome === "win" ? "bg-emerald-500/5 border-emerald-500/20" : "bg-rose-500/5 border-rose-500/20"
                }`}>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Target className={`w-5 h-5 ${result.outcome === "win" ? "text-emerald-400" : "text-rose-400"}`} />
                    <span className={`font-bold text-lg ${result.outcome === "win" ? "text-emerald-400" : "text-rose-400"}`}>
                      {result.outcome === "win" ? "Take Profit Hit!" : "Stop Loss Hit"}
                    </span>
                  </div>
                  <p className={`text-3xl font-bold font-mono ${result.outcome === "win" ? "text-emerald-400" : "text-rose-400"}`}>
                    {result.pnl >= 0 ? "+" : ""}${result.pnl.toFixed(2)}
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-2">
                    {result.outcome === "win"
                      ? "Great trade! Your risk management paid off."
                      : "Loss contained by your stop-loss. This is proper risk management in action."}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
