"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
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
      <section className="pt-72 pb-60 relative overflow-hidden">
        {/* Hero Visual Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
          <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
        </div>
        <div className="max-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Algorator</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-h1)] font-bold mt-4 mb-6"
          >
            GIO4X Algorator — <span className="gradient-text">Algorithmic Trading Made Easy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto mb-8"
          >
            Build, backtest, and deploy automated trading strategies with no coding required.
            Harness the power of algorithms with an intuitive visual interface.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex gap-4 justify-center">
            <Button href="/accounts">Get Started</Button>
            <Button variant="secondary" href="#features">Explore Features</Button>
          </motion.div>
        </div>
      </section>

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
