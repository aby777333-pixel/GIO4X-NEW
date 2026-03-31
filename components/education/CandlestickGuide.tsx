"use client";

import { useState } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { motion } from "framer-motion";

interface CandlePattern {
  name: string;
  type: "bullish" | "bearish" | "neutral";
  description: string;
  signal: string;
  reliability: number;
  candles: { open: number; close: number; high: number; low: number }[];
}

const patterns: CandlePattern[] = [
  {
    name: "Hammer",
    type: "bullish",
    description: "A single-candle reversal pattern found at the bottom of downtrends. The long lower shadow shows sellers pushed price down, but buyers regained control.",
    signal: "Bullish Reversal",
    reliability: 78,
    candles: [{ open: 65, close: 75, high: 80, low: 20 }],
  },
  {
    name: "Engulfing (Bullish)",
    type: "bullish",
    description: "A two-candle pattern where a large green candle completely engulfs the prior red candle. Shows a decisive shift from selling pressure to buying pressure.",
    signal: "Strong Bullish Reversal",
    reliability: 82,
    candles: [
      { open: 60, close: 40, high: 65, low: 35 },
      { open: 35, close: 70, high: 75, low: 30 },
    ],
  },
  {
    name: "Morning Star",
    type: "bullish",
    description: "A three-candle reversal pattern: large red candle, small-bodied candle (indecision), then large green candle confirming the reversal.",
    signal: "Bullish Reversal",
    reliability: 80,
    candles: [
      { open: 75, close: 45, high: 80, low: 40 },
      { open: 42, close: 38, high: 46, low: 34 },
      { open: 40, close: 72, high: 78, low: 36 },
    ],
  },
  {
    name: "Shooting Star",
    type: "bearish",
    description: "A single-candle pattern at the top of uptrends. The long upper shadow shows buyers pushed price up but sellers took control by the close.",
    signal: "Bearish Reversal",
    reliability: 75,
    candles: [{ open: 35, close: 28, high: 80, low: 24 }],
  },
  {
    name: "Engulfing (Bearish)",
    type: "bearish",
    description: "A large red candle completely engulfs the prior green candle, signaling a powerful shift from buying to selling pressure at key resistance levels.",
    signal: "Strong Bearish Reversal",
    reliability: 83,
    candles: [
      { open: 45, close: 65, high: 68, low: 40 },
      { open: 68, close: 35, high: 72, low: 30 },
    ],
  },
  {
    name: "Evening Star",
    type: "bearish",
    description: "The mirror of morning star: large green candle, small indecision candle, then large red candle confirming bearish reversal at market tops.",
    signal: "Bearish Reversal",
    reliability: 79,
    candles: [
      { open: 30, close: 60, high: 65, low: 25 },
      { open: 62, close: 65, high: 70, low: 58 },
      { open: 63, close: 32, high: 68, low: 28 },
    ],
  },
  {
    name: "Doji",
    type: "neutral",
    description: "Open and close are virtually equal, creating a cross shape. Signals indecision — neither buyers nor sellers won. Context determines direction.",
    signal: "Indecision / Potential Reversal",
    reliability: 65,
    candles: [{ open: 50, close: 51, high: 78, low: 22 }],
  },
  {
    name: "Three White Soldiers",
    type: "bullish",
    description: "Three consecutive large green candles, each opening within the prior body and closing at a new high. Powerful bullish continuation signal.",
    signal: "Strong Bullish Continuation",
    reliability: 85,
    candles: [
      { open: 25, close: 42, high: 44, low: 22 },
      { open: 40, close: 58, high: 60, low: 38 },
      { open: 56, close: 74, high: 78, low: 54 },
    ],
  },
];

function CandleSVG({ candles, width = 120, height = 100 }: { candles: CandlePattern["candles"]; width?: number; height?: number }) {
  const count = candles.length;
  const gap = 8;
  const candleW = Math.min(24, (width - gap * (count + 1)) / count);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} className="mx-auto">
      {candles.map((c, i) => {
        const x = gap + i * (candleW + gap) + (width - (count * (candleW + gap) + gap)) / 2;
        const isBull = c.close > c.open;
        const bodyTop = 100 - Math.max(c.open, c.close);
        const bodyH = Math.abs(c.close - c.open) || 2;
        const wickTop = 100 - c.high;
        const wickBot = 100 - c.low;
        const color = isBull ? "#10B981" : "#EF4444";
        const cx = x + candleW / 2;
        return (
          <g key={i}>
            <line x1={cx} y1={wickTop} x2={cx} y2={wickBot} stroke={color} strokeWidth={1.5} />
            <rect x={x} y={bodyTop} width={candleW} height={bodyH} rx={2} fill={color} />
          </g>
        );
      })}
    </svg>
  );
}

export function CandlestickGuide() {
  const [selected, setSelected] = useState(0);
  const [filter, setFilter] = useState<"all" | "bullish" | "bearish" | "neutral">("all");

  const filtered = filter === "all" ? patterns : patterns.filter((p) => p.type === filter);

  return (
    <section className="section-padding bg-[var(--color-bg)]">
      <div className="max-site">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Visual Reference</span>
            <h2 className="text-[var(--text-h2)] font-bold mt-3 mb-4">
              Candlestick Pattern <span className="gradient-text">Guide</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Master the 8 most important candlestick patterns used by professional forex traders. Each pattern includes a visual diagram, reliability score, and trading signal.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Filter */}
        <div className="flex justify-center gap-2 mb-8">
          {(["all", "bullish", "bearish", "neutral"] as const).map((f) => (
            <button
              key={f}
              onClick={() => { setFilter(f); setSelected(0); }}
              className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-[#1B3A6B] to-[#29ABE2] text-white"
                  : "bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Pattern Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {filtered.map((p, i) => (
            <motion.button
              key={p.name}
              onClick={() => setSelected(i)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                selected === i
                  ? "border-[#29ABE2] bg-[#29ABE2]/5"
                  : "border-[var(--color-border)] bg-[var(--color-glass-bg)] hover:border-[#29ABE2]/30"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CandleSVG candles={p.candles} />
              <h4 className="font-semibold text-sm mt-3 text-center">{p.name}</h4>
              <div className="flex justify-center mt-1">
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                  p.type === "bullish" ? "bg-emerald-500/15 text-emerald-400"
                    : p.type === "bearish" ? "bg-rose-500/15 text-rose-400"
                    : "bg-amber-500/15 text-amber-400"
                }`}>
                  {p.type}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Detail Panel */}
        {filtered[selected] && (
          <AnimateOnScroll>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="flex justify-center">
                  <CandleSVG candles={filtered[selected].candles} width={180} height={140} />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-2">{filtered[selected].name}</h3>
                  <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">{filtered[selected].description}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 rounded-xl bg-[#29ABE2]/10">
                      <span className="text-xs text-[var(--color-text-secondary)]">Signal</span>
                      <p className="font-semibold text-sm text-[#29ABE2]">{filtered[selected].signal}</p>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-[#C9A84C]/10">
                      <span className="text-xs text-[var(--color-text-secondary)]">Reliability</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 rounded-full bg-[var(--color-border)] overflow-hidden">
                          <div className="h-full bg-[#C9A84C] rounded-full" style={{ width: `${filtered[selected].reliability}%` }} />
                        </div>
                        <span className="font-semibold text-sm text-[#C9A84C]">{filtered[selected].reliability}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
