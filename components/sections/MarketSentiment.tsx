"use client";

import { useEffect, useState } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { TrendingUp, TrendingDown, Minus, RefreshCw } from "lucide-react";

interface SentimentItem {
  pair: string;
  bulls: number;
  bears: number;
  bias: string;
  signal: string;
}

// Base sentiment with slight drift every refresh
const baseSentiment = [
  { pair: "EUR/USD", bulls: 62, bears: 38, baseBulls: 62 },
  { pair: "GBP/USD", bulls: 55, bears: 45, baseBulls: 55 },
  { pair: "USD/JPY", bulls: 41, bears: 59, baseBulls: 41 },
  { pair: "XAU/USD", bulls: 74, bears: 26, baseBulls: 74 },
  { pair: "BTC/USD", bulls: 68, bears: 32, baseBulls: 68 },
  { pair: "US500",   bulls: 51, bears: 49, baseBulls: 51 },
];

function deriveBias(bulls: number): { bias: string; signal: string } {
  if (bulls >= 70) return { bias: "Strongly Bullish", signal: "Buy" };
  if (bulls >= 60) return { bias: "Bullish", signal: "Buy Dips" };
  if (bulls >= 55) return { bias: "Neutral-Bullish", signal: "Range" };
  if (bulls >= 45) return { bias: "Neutral", signal: "Wait" };
  if (bulls >= 40) return { bias: "Neutral-Bearish", signal: "Range" };
  if (bulls >= 30) return { bias: "Bearish", signal: "Sell Rallies" };
  return { bias: "Strongly Bearish", signal: "Sell" };
}

// Time-seeded drift so all users see the same value at the same minute
function seededDrift(seed: number, range: number): number {
  const x = Math.sin(seed * 9.8 + 7.3) * 43758.5453;
  return Math.round(((x - Math.floor(x)) - 0.5) * range);
}

function SentimentBar({ bulls, bears }: { bulls: number; bears: number }) {
  return (
    <div className="flex items-center gap-2 w-full">
      <span className="text-xs text-emerald-400 font-mono w-10 text-right">{bulls}%</span>
      <div className="flex-1 h-2 rounded-full overflow-hidden bg-[var(--color-glass-bg)] flex">
        <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-l-full transition-all duration-700" style={{ width: `${bulls}%` }} />
        <div className="h-full bg-gradient-to-r from-rose-400 to-rose-500 rounded-r-full transition-all duration-700" style={{ width: `${bears}%` }} />
      </div>
      <span className="text-xs text-rose-400 font-mono w-10">{bears}%</span>
    </div>
  );
}

function BiasIcon({ bias }: { bias: string }) {
  if (bias.includes("Bullish")) return <TrendingUp className="w-4 h-4 text-emerald-400" />;
  if (bias.includes("Bearish")) return <TrendingDown className="w-4 h-4 text-rose-400" />;
  return <Minus className="w-4 h-4 text-amber-400" />;
}

export function MarketSentiment() {
  const [data, setData] = useState<SentimentItem[]>([]);
  const [lastUpdate, setLastUpdate] = useState("");

  const refresh = () => {
    const minuteSeed = Math.floor(Date.now() / 60000); // changes every minute
    const newData = baseSentiment.map((item, i) => {
      const drift = seededDrift(minuteSeed + i * 13, 8); // ±4 points
      const bulls = Math.max(20, Math.min(80, item.baseBulls + drift));
      const bears = 100 - bulls;
      const { bias, signal } = deriveBias(bulls);
      return { pair: item.pair, bulls, bears, bias, signal };
    });
    setData(newData);
    setLastUpdate(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    refresh();
    const timer = setInterval(refresh, 60_000); // refresh every 60s
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section-padding bg-[var(--color-bg)]">
      <div className="max-site">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase">Live Pulse</span>
            <h2 className="text-[var(--text-h1)] font-bold mt-3 mb-4">
              Market Sentiment <span className="gradient-text">Dashboard</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
              Trader sentiment analysis across major forex pairs, gold, crypto, and indices — refreshed every 60 seconds.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, i) => (
            <AnimateOnScroll key={item.pair} delay={i * 0.06}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] backdrop-blur-xl p-5 hover:border-[#29ABE2]/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg">{item.pair}</h3>
                  <div className="flex items-center gap-1.5">
                    <BiasIcon bias={item.bias} />
                    <span className={`text-xs font-semibold ${item.bias.includes("Bullish") ? "text-emerald-400" : item.bias.includes("Bearish") ? "text-rose-400" : "text-amber-400"}`}>
                      {item.bias}
                    </span>
                  </div>
                </div>
                <SentimentBar bulls={item.bulls} bears={item.bears} />
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-[var(--color-text-secondary)]">Bulls vs Bears</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#29ABE2]/10 text-[#29ABE2]">
                    {item.signal}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase">Auto-refreshing</span>
              {lastUpdate && <span className="text-[10px] text-[var(--color-text-secondary)] font-mono ml-2">{lastUpdate}</span>}
            </div>
            <button onClick={refresh} className="flex items-center gap-1 text-[10px] text-[var(--color-text-secondary)] hover:text-[#29ABE2] transition-colors">
              <RefreshCw className="w-3 h-3" />
              Refresh
            </button>
          </div>
          <p className="text-center text-xs text-[var(--color-text-secondary)] mt-4">
            Sentiment data is indicative and for educational purposes. Not financial advice. Trade responsibly.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
