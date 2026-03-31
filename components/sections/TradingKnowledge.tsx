"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BookOpen, Target, LineChart, Shield, Coins, Brain } from "lucide-react";

const topics = [
  {
    icon: LineChart,
    title: "Technical Analysis Mastery",
    desc: "Learn candlestick patterns, support & resistance, trendlines, and indicator-based strategies used by professional forex traders worldwide.",
    link: "/education",
    tag: "Popular",
  },
  {
    icon: Brain,
    title: "Trading Psychology & Discipline",
    desc: "Master the mental game. Understand fear, greed, and how to build a consistent, emotion-free trading routine that protects your capital.",
    link: "/education",
    tag: "Essential",
  },
  {
    icon: Target,
    title: "Risk Management Strategies",
    desc: "Position sizing, stop-loss placement, risk-reward ratios, and portfolio diversification — the skills that separate profitable traders from the rest.",
    link: "/education",
    tag: "Must-Read",
  },
  {
    icon: Coins,
    title: "Forex Fundamentals & News Trading",
    desc: "How interest rates, GDP, employment data, and central bank decisions move currency markets — and how to trade the news profitably.",
    link: "/education",
    tag: "Intermediate",
  },
  {
    icon: BookOpen,
    title: "Fibonacci & Golden Ratio Trading",
    desc: "Discover how the golden ratio (1.618) powers Fibonacci retracements, extensions, and fan lines — the mathematical backbone of price analysis.",
    link: "/blog",
    tag: "GIO4X Special",
  },
  {
    icon: Shield,
    title: "Algorithmic & Automated Trading",
    desc: "Build, backtest, and deploy trading robots with the GIO4X Algorator. From simple EAs to complex multi-timeframe algorithms.",
    link: "/tools/algorator",
    tag: "Advanced",
  },
];

export function TradingKnowledge() {
  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="max-site">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase">Learn & Grow</span>
            <h2 className="text-[var(--text-h1)] font-bold mt-3 mb-4">
              Trading Knowledge <span className="gradient-text">Hub</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
              Free educational resources to sharpen your edge. From beginner forex basics to advanced algorithmic strategies.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((t, i) => (
            <AnimateOnScroll key={t.title} delay={i * 0.06}>
              <a
                href={t.link}
                className="group block h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] p-6 hover:border-[#29ABE2]/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#29ABE2]/15 to-[#1B3A6B]/15 flex items-center justify-center group-hover:from-[#29ABE2]/25 group-hover:to-[#1B3A6B]/25 transition-all">
                    <t.icon className="w-6 h-6 text-[#29ABE2]" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg bg-[#C9A84C]/10 text-[#C9A84C]">
                    {t.tag}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-[#29ABE2] transition-colors">{t.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{t.desc}</p>
                <span className="inline-block mt-4 text-sm text-[#29ABE2] font-semibold group-hover:translate-x-1 transition-transform">
                  Explore &rarr;
                </span>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
