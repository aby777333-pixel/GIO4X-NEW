"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const sentimentData = [
  { pair: "EUR/USD", bulls: 62, bears: 38, bias: "Bullish", signal: "Buy Dips" },
  { pair: "GBP/USD", bulls: 55, bears: 45, bias: "Neutral-Bullish", signal: "Range" },
  { pair: "USD/JPY", bulls: 41, bears: 59, bias: "Bearish", signal: "Sell Rallies" },
  { pair: "XAU/USD", bulls: 74, bears: 26, bias: "Strongly Bullish", signal: "Buy" },
  { pair: "BTC/USD", bulls: 68, bears: 32, bias: "Bullish", signal: "Accumulate" },
  { pair: "US500", bulls: 51, bears: 49, bias: "Neutral", signal: "Wait" },
];

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
              Real-time trader sentiment analysis across major forex pairs, gold, crypto, and indices. See where the smart money is flowing.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sentimentData.map((item, i) => (
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
          <p className="text-center text-xs text-[var(--color-text-secondary)] mt-8">
            Sentiment data is indicative and updated periodically. Not financial advice. Trade responsibly.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
