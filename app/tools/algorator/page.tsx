"use client";

import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { Cpu, TestTube, Zap, Shield, Settings, BarChart3, TrendingUp, GitBranch } from "lucide-react";

const features = [
  { icon: Settings, title: "Strategy Builder", desc: "Visual drag-and-drop interface to create trading strategies without writing a single line of code." },
  { icon: TestTube, title: "Backtesting Engine", desc: "Test your strategies against years of historical data with tick-level accuracy and detailed reports." },
  { icon: Zap, title: "Auto-Execution", desc: "Deploy strategies directly to your live account with one click. Trades execute in milliseconds." },
  { icon: Shield, title: "Risk Controls", desc: "Built-in position limits, daily loss caps, and max drawdown safeguards to protect your capital." },
];

const steps = [
  { num: "01", title: "Define Your Strategy", desc: "Use the visual builder or code editor to define entry/exit rules, indicators, and conditions." },
  { num: "02", title: "Backtest & Optimise", desc: "Run your strategy against historical data, review metrics, and fine-tune parameters for optimal performance." },
  { num: "03", title: "Paper Trade", desc: "Validate in real-time market conditions with a simulated account before committing capital." },
  { num: "04", title: "Go Live", desc: "Deploy to your live GIO4X account and monitor performance through the Algorator dashboard." },
];

const strategies = [
  { icon: TrendingUp, name: "Trend Following", desc: "MA crossovers, breakout systems, and momentum strategies." },
  { icon: GitBranch, name: "Mean Reversion", desc: "Bollinger Band bounce, RSI oversold/overbought, and range trading." },
  { icon: BarChart3, name: "Statistical Arbitrage", desc: "Pair trading, correlation-based strategies, and spread trading." },
  { icon: Cpu, name: "Golden Ratio Algorithms", desc: "Fibonacci-based entry/exit systems using 0.618 and 1.618 levels." },
];

export default function AlgoratorPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Algorator"
        image="raptor25.png"
        title={<>GIO4X Algorator — <span className="gradient-text">Algorithmic Trading Made Easy</span></>}
        caption="Build, backtest, and deploy automated trading strategies with no coding required. Harness the power of algorithms with an intuitive visual interface."
        ctas={[
          { label: "Get Started", href: "/accounts" },
          { label: "Explore Features", href: "#features", variant: "secondary" },
        ]}
      />

      {/* Features */}
      <section id="features" className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="Features" title="Everything You Need to Algo Trade" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 0.1}>
                <Card className="h-full text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-[#29ABE2]" />
                  </div>
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{f.desc}</p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Process" title="How It Works" />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 0.1}>
                <div className="glass-panel p-6 flex gap-5 items-start">
                  <span className="text-3xl font-bold text-[#29ABE2] font-mono shrink-0">{step.num}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{step.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Strategies */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="Strategies" title="Supported Strategy Types" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((s, i) => (
              <AnimateOnScroll key={s.name} delay={i * 0.1}>
                <Card className="h-full">
                  <s.icon className="w-8 h-8 text-[#29ABE2] mb-3" />
                  <h3 className="font-semibold mb-2">{s.name}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{s.desc}</p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
