"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { useState } from "react";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

// Simulated monthly performance data
const performanceData = [
  { month: "Jan", pnl: 4.2, trades: 42, winRate: 62, dd: 2.1 },
  { month: "Feb", pnl: -1.8, trades: 38, winRate: 47, dd: 5.3 },
  { month: "Mar", pnl: 6.5, trades: 51, winRate: 67, dd: 1.8 },
  { month: "Apr", pnl: 3.1, trades: 44, winRate: 59, dd: 3.2 },
  { month: "May", pnl: 7.8, trades: 47, winRate: 72, dd: 1.2 },
  { month: "Jun", pnl: -0.5, trades: 35, winRate: 49, dd: 4.1 },
  { month: "Jul", pnl: 5.4, trades: 52, winRate: 65, dd: 2.4 },
  { month: "Aug", pnl: 2.9, trades: 40, winRate: 58, dd: 3.0 },
  { month: "Sep", pnl: 8.2, trades: 55, winRate: 71, dd: 1.5 },
  { month: "Oct", pnl: 4.7, trades: 43, winRate: 63, dd: 2.8 },
  { month: "Nov", pnl: -2.3, trades: 36, winRate: 44, dd: 6.1 },
  { month: "Dec", pnl: 5.1, trades: 48, winRate: 64, dd: 2.0 },
];

const maxPnl = Math.max(...performanceData.map((d) => Math.abs(d.pnl)));
const totalPnl = performanceData.reduce((acc, d) => acc + d.pnl, 0);
const avgWinRate = Math.round(performanceData.reduce((acc, d) => acc + d.winRate, 0) / 12);
const maxDd = Math.max(...performanceData.map((d) => d.dd));
const totalTrades = performanceData.reduce((acc, d) => acc + d.trades, 0);

export function PerformanceChart() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0A0E1A 0%, #1B3A6B 50%, #0A0E1A 100%)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #29ABE2 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-site relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase">Track & Learn</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Model <span className="text-[#29ABE2]">Performance</span> Dashboard
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Study a model disciplined trading year. Learn how professional traders navigate winning months, drawdowns, and maintain consistency.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Summary Stats */}
        <AnimateOnScroll delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Annual Return", value: `+${totalPnl.toFixed(1)}%`, icon: TrendingUp, color: "emerald" },
              { label: "Win Rate", value: `${avgWinRate}%`, icon: BarChart3, color: "sky" },
              { label: "Max Drawdown", value: `-${maxDd.toFixed(1)}%`, icon: TrendingDown, color: "rose" },
              { label: "Total Trades", value: totalTrades.toString(), icon: BarChart3, color: "amber" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                <stat.icon className={`w-5 h-5 mx-auto mb-2 text-${stat.color}-400`} />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <span className="text-xs text-white/40">{stat.label}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Bar Chart */}
        <AnimateOnScroll delay={0.2}>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-white font-bold mb-6">Monthly P&L (%)</h3>
            <div className="flex items-end justify-between gap-2 h-48">
              {performanceData.map((d, i) => {
                const barHeight = (Math.abs(d.pnl) / maxPnl) * 100;
                const isPositive = d.pnl >= 0;
                const isHovered = hoveredIdx === i;
                return (
                  <div
                    key={d.month}
                    className="flex-1 flex flex-col items-center relative"
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    {/* Tooltip */}
                    {isHovered && (
                      <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-[#0A0E1A] border border-white/20 rounded-lg px-3 py-2 text-xs whitespace-nowrap z-10">
                        <p className="text-white font-bold">{d.month}: {d.pnl > 0 ? "+" : ""}{d.pnl}%</p>
                        <p className="text-white/50">{d.trades} trades | {d.winRate}% win rate</p>
                        <p className="text-white/50">Max DD: -{d.dd}%</p>
                      </div>
                    )}
                    <div className="w-full flex flex-col items-center justify-end h-36">
                      <div
                        className={`w-full max-w-[36px] rounded-t-md transition-all duration-300 cursor-pointer ${
                          isPositive ? "bg-emerald-500" : "bg-rose-500"
                        } ${isHovered ? "opacity-100 scale-x-110" : "opacity-70"}`}
                        style={{ height: `${barHeight}%`, minHeight: 4 }}
                      />
                    </div>
                    <span className="text-[10px] text-white/40 mt-2 font-mono">{d.month}</span>
                  </div>
                );
              })}
            </div>

            {/* Insight */}
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-sm leading-relaxed">
                <strong className="text-white">Key Lesson:</strong> Even a profitable strategy with a +43.3% annual return has 3 losing months.
                Professional trading is about managing drawdowns, not avoiding them. Notice how the max drawdown (-6.1%) was quickly recovered
                by maintaining discipline and sticking to the system.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
