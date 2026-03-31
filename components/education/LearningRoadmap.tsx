"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BookOpen, BarChart3, Brain, Target, Bot, Trophy } from "lucide-react";

const stages = [
  {
    icon: BookOpen,
    stage: "Stage 1",
    title: "Foundation",
    subtitle: "Weeks 1–4",
    skills: ["Currency pairs & market sessions", "Pips, lots, leverage & margin", "Order types & execution", "GIO4X Raptor platform basics"],
    color: "#29ABE2",
    content: "Build a rock-solid understanding of how the forex market works. Master the vocabulary and mechanics before risking a single dollar.",
  },
  {
    icon: BarChart3,
    stage: "Stage 2",
    title: "Technical Analysis",
    subtitle: "Weeks 5–10",
    skills: ["Candlestick patterns & price action", "Support, resistance & trendlines", "Fibonacci retracement & extensions", "RSI, MACD & Bollinger Bands"],
    color: "#06B6D4",
    content: "Learn to read charts like a professional. Understand what price is telling you and identify high-probability trade setups across all timeframes.",
  },
  {
    icon: Brain,
    stage: "Stage 3",
    title: "Psychology & Discipline",
    subtitle: "Weeks 11–14",
    skills: ["Overcoming fear & greed", "Building a trading journal", "Developing emotional resilience", "Consistency over perfection"],
    color: "#8B5CF6",
    content: "Master the mental game. Trading psychology is what separates consistently profitable traders from everyone else. This stage transforms your mindset.",
  },
  {
    icon: Target,
    stage: "Stage 4",
    title: "Risk Management",
    subtitle: "Weeks 15–18",
    skills: ["Position sizing & lot calculation", "Stop-loss strategies & placement", "Risk-reward ratio optimization", "Portfolio correlation & hedging"],
    color: "#C9A84C",
    content: "Learn the #1 skill that keeps you in the game. Professional risk management protects your capital and ensures longevity in the markets.",
  },
  {
    icon: Bot,
    stage: "Stage 5",
    title: "Strategy & Automation",
    subtitle: "Weeks 19–24",
    skills: ["Building & backtesting strategies", "Expert Advisor (EA) development", "GIO4X Algorator & GIO Bots", "Systematic trading frameworks"],
    color: "#10B981",
    content: "Combine everything you've learned into a systematic, repeatable trading strategy. Explore automation to remove emotion from execution.",
  },
  {
    icon: Trophy,
    stage: "Stage 6",
    title: "Professional Trader",
    subtitle: "Ongoing",
    skills: ["Advanced multi-timeframe analysis", "News trading & fundamentals", "Copy trading & PAMM management", "Continuous performance review"],
    color: "#EF4444",
    content: "Graduate to professional-level trading. Continuously refine your edge, manage capital at scale, and explore income through PAMM and IB programs.",
  },
];

export function LearningRoadmap() {
  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="max-site">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase">Your Journey</span>
            <h2 className="text-[var(--text-h2)] font-bold mt-3 mb-4">
              Forex Trading <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              A structured 24-week learning path from complete beginner to professional forex trader. Every stage builds on the last — no shortcuts, no gaps.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#29ABE2] via-[#C9A84C] to-[#10B981] -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {stages.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimateOnScroll key={s.stage} delay={i * 0.08}>
                  <div className={`relative md:flex md:items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} md:mb-12`}>
                    {/* Card */}
                    <div className={`md:w-[45%] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] p-6 hover:border-[#29ABE2]/30 transition-all">
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${s.color}20` }}>
                            <s.icon className="w-5 h-5" style={{ color: s.color }} />
                          </div>
                          <div className={isLeft ? "md:text-right" : ""}>
                            <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: s.color }}>{s.stage}</span>
                            <h3 className="font-bold text-lg">{s.title}</h3>
                          </div>
                        </div>
                        <span className="text-xs text-[var(--color-text-secondary)] font-semibold">{s.subtitle}</span>
                        <p className="text-sm text-[var(--color-text-secondary)] mt-2 mb-3 leading-relaxed">{s.content}</p>
                        <ul className={`space-y-1 ${isLeft ? "md:text-right" : ""}`}>
                          {s.skills.map((skill) => (
                            <li key={skill} className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Center dot (desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-white/20 items-center justify-center" style={{ background: s.color }}>
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>

                    {/* Spacer for other side */}
                    <div className="hidden md:block md:w-[45%]" />
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
