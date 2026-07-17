"use client";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { RAPTOR_BASE, SITE } from "@/lib/constants";
import Link from "next/link";
import {
  Database, Radar, BookOpen, MessageSquare, Landmark, Compass,
  LineChart, Brain, Cog, FlaskConical, Shield, Trophy, Vote, Zap, Radio,
  Globe, Bot, GitBranch, Lock, CheckCircle2, AlertTriangle,
  Sparkles, Blocks, Workflow, PieChart, Plug, ScrollText,
} from "lucide-react";

const LAB_URL = `${RAPTOR_BASE}/ai-lab/`;

const agents = [
  { icon: Database, name: "Market Data", desc: "Price, volume, depth, ticks, funding, open interest & correlations across venues." },
  { icon: Radar, name: "Global Scanner", desc: "Ranks every enabled instrument by momentum, breakout potential & unusual volume." },
  { icon: BookOpen, name: "Research", desc: "Mines quant papers & filings for alpha ideas — with exact source attribution." },
  { icon: MessageSquare, name: "News & Sentiment", desc: "Scores news, filings & social sentiment by reliability, relevance and impact." },
  { icon: Landmark, name: "Fundamentals", desc: "Earnings, valuation, macro, rates, inflation & currency exposure analysis." },
  { icon: Compass, name: "Market Regime", desc: "Classifies trending / ranging / volatile / risk-on-off regimes with evidence." },
  { icon: LineChart, name: "Indicators", desc: "SMA, RSI, MACD, ATR, Bollinger, Supertrend, VWAP, Ichimoku & price action." },
  { icon: Brain, name: "Strategy Generation", desc: "Synthesises rule-based, factor, statistical & ML strategy hypotheses." },
  { icon: Cog, name: "Backtesting", desc: "Tick/bar backtests with spread, slippage, swap & commission modelling." },
  { icon: FlaskConical, name: "Robustness", desc: "Walk-forward, Monte Carlo, stress & parameter-sensitivity testing." },
  { icon: Shield, name: "Risk Check", desc: "Validates drawdown, leverage, exposure, correlation & tail-risk limits." },
  { icon: Trophy, name: "Ranking", desc: "Weighted multi-metric scoring — never ranked by return alone." },
  { icon: Vote, name: "Debate & Vote", desc: "Agents debate each candidate; a weighted consensus vote decides." },
  { icon: Zap, name: "Execution", desc: "Deterministic order routing, reconciliation & duplicate-order guards." },
  { icon: Radio, name: "Monitoring", desc: "Watches P&L, drawdown, drift, data-feed & broker health in real time." },
];

const pipeline = [
  "Data ingestion", "Market scanning", "News & sentiment", "Research extraction",
  "Regime detection", "Strategy hypothesis", "Indicator & rule construction",
  "Algorithm & code generation", "Backtesting", "Walk-forward & robustness",
  "Risk validation", "Multi-agent debate & voting", "Strategy ranking",
  "User approval", "Paper / testnet deployment", "Live deployment (on approval)",
  "Trade execution", "Real-time monitoring", "Performance review",
  "Modify, suspend or terminate",
];

const markets = [
  { title: "Indian Markets", items: ["NSE & BSE equities", "NIFTY 50, SENSEX, BANKNIFTY, FINNIFTY", "Index & currency derivatives", "MCX & NCDEX commodities"] },
  { title: "Global Equities & Indices", items: ["NYSE, Nasdaq, LSE, Euronext", "TSE, HKEX, SGX, ASX", "S&P 500, Nasdaq, DAX, FTSE, Nikkei", "ETFs & CFDs"] },
  { title: "Forex & Metals", items: ["41+ FX pairs", "Spot & currency futures", "Gold, silver, platinum", "Energy & agricultural commodities"] },
  { title: "Crypto", items: ["Binance, Coinbase, Kraken, Bybit, OKX", "CoinDCX, WazirX (India)", "Spot, futures & perpetuals", "Funding, OI & liquidation data"] },
];

const exportTargets = ["Raptor-native", "MetaTrader 4 (MQL4)", "MetaTrader 5 (MQL5)", "TradingView (Pine Script)", "cTrader (C#)", "Python", "JavaScript / TypeScript", "FIX / REST / WebSocket"];

const modules = [
  { icon: Sparkles, name: "Command Bar", desc: "Describe a strategy in plain English — the agents research, build and rank it live." },
  { icon: Workflow, name: "Pipeline", desc: "Interactive 15-agent flow graph; every stage streams into a live timeline." },
  { icon: Blocks, name: "Strategy Builder", desc: "Four synced views — natural language, visual blocks, pseudocode and platform code." },
  { icon: Trophy, name: "Strategies", desc: "Full result cards: metrics, agent votes, equity/DD charts, EA export & approval." },
  { icon: PieChart, name: "Portfolio Lab", desc: "Combine strategies, allocate capital, blend equity curves and stress-test the basket." },
  { icon: Plug, name: "Connections Vault", desc: "Broker-neutral, exchange-neutral connectors with withdrawal-disabled key safety." },
  { icon: ScrollText, name: "Audit Trail", desc: "Every action timestamped, attributed, tamper-evident and exportable." },
  { icon: Shield, name: "Risk & Modes", desc: "Demo / Paper / Live modes, layered risk limits and an always-on kill switch." },
];

const safety = [
  { icon: AlertTriangle, title: "Demo, Paper & Live — clearly separated", desc: "The lab starts in a simulated demo environment. Paper/testnet uses live or delayed data with no live orders. Live mode activates only after a secure broker connection and explicit approval — it never silently falls back from paper to live." },
  { icon: Lock, title: "AI recommends, engines execute", desc: "AI agents may propose actions, but only the deterministic execution and risk engines can place orders. Every action is logged, timestamped and attributed in a tamper-evident audit trail." },
  { icon: Shield, title: "Layered risk controls & kill switch", desc: "Per-trade, per-strategy, per-account and global limits — max risk per trade, daily-loss caps, drawdown limits, exposure caps — plus an always-visible emergency kill switch." },
  { icon: CheckCircle2, title: "You approve every strategy", desc: "No live strategy deploys without explicit approval of that exact version. Any change creates a new version and requires fresh approval." },
];

export default function AiLabPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Strategy Lab"
        image="raptor30.png"
        title={<>The <span className="gradient-text">AI Strategy Lab</span></>}
        caption="A visual, multi-agent laboratory built into the GIO4X Raptor ecosystem. Specialised AI agents research markets, build strategies, backtest and stress-test them, debate and vote — then hand you the final candidates for approval. Every stage is visible, explainable and logged."
        ctas={[
          { label: "Launch the Lab (Demo)", href: LAB_URL },
          { label: "Explore Raptor", href: "/platforms", variant: "secondary" },
        ]}
      />

      {/* Demo notice */}
      <section className="pb-12">
        <div className="max-site">
          <AnimateOnScroll>
            <div className="glass-panel p-6 border-[#29ABE2]/30 text-center">
              <p className="text-sm text-[var(--color-text-secondary)] max-w-3xl mx-auto">
                <span className="font-semibold text-[#29ABE2]">Institutional-grade research environment.</span>{" "}
                The public lab runs in a fully simulated <strong>demo mode</strong> so you can explore every agent,
                chart and workflow safely — no live orders are placed. Live automated trading is available only
                after a secure broker connection and your explicit approval.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* The 15 agents */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading
            eyebrow="Multi-Agent System"
            title="Fifteen specialised AI agents, one pipeline"
            subtitle="Each agent owns one job and shows its work — the data it used, its confidence, and why it reached its conclusion."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((a, i) => (
              <AnimateOnScroll key={a.name} delay={(i % 3) * 0.08}>
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                      <a.icon className="w-5 h-5 text-[#29ABE2]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{a.name}</h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">{a.desc}</p>
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 20-stage pipeline */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading
            eyebrow="The Workflow"
            title="From raw data to a monitored, live strategy"
            subtitle="Twenty visible stages. You watch each one run, inspect its output, and stay in control at every step."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {pipeline.map((step, i) => (
              <AnimateOnScroll key={step} delay={(i % 4) * 0.06}>
                <div className="glass-panel p-4 h-full flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[#29ABE2] w-7 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm">{step}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Market coverage */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading
            eyebrow="Global Coverage"
            title="Built for global markets — with India first-class"
            subtitle="Forex, equities, indices, commodities, metals, crypto and derivatives across the world's major venues. Market access always depends on the relevant broker, data-vendor and exchange permissions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {markets.map((m, i) => (
              <AnimateOnScroll key={m.title} delay={i * 0.08}>
                <Card className="h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-5 h-5 text-[#29ABE2]" />
                    <h3 className="font-semibold">{m.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {m.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the lab — modules */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading
            eyebrow="Inside the Lab"
            title="A full research-to-deployment workspace"
            subtitle="Eight connected modules — not a single dashboard. Move from a plain-English request to a monitored, approved strategy without leaving the lab."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m, i) => (
              <AnimateOnScroll key={m.name} delay={(i % 4) * 0.08}>
                <Card className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(41,171,226,0.1)] flex items-center justify-center mb-3">
                    <m.icon className="w-5 h-5 text-[#29ABE2]" />
                  </div>
                  <h3 className="font-semibold mb-1">{m.name}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{m.desc}</p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Code export */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-5xl">
          <SectionHeading
            eyebrow="One Strategy, Every Platform"
            title="Approved strategies become deployable code"
            subtitle="From a single approved strategy, the lab generates a complete Expert Advisor, indicator or trading bot for your chosen platform — with editable inputs, risk settings and safety guards baked in."
          />
          <AnimateOnScroll>
            <div className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-5">
                <Bot className="w-6 h-6 text-[#29ABE2]" />
                <h3 className="font-bold">Export targets</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {exportTargets.map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm">
                    <GitBranch className="w-4 h-4 text-[#29ABE2] shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] mt-6 leading-relaxed">
                The lab warns you when a feature cannot be reproduced exactly on another platform because of
                differences in order types, indicator calculations, market data, execution models or scripting limits.
                Any code, parameter or platform change creates a new version and requires fresh approval.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Safety & compliance */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading
            eyebrow="Safety First"
            title="Execution safety, transparency & control"
            subtitle="A serious trading environment, not a decorative dashboard — with guardrails at every layer."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safety.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.08}>
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-[#29ABE2]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{s.title}</h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">{s.desc}</p>
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a href={LAB_URL} className="text-sm text-[#29ABE2] hover:underline" target="_blank" rel="noopener noreferrer">Launch the AI Strategy Lab &rarr;</a>
            <Link href="/platforms" className="text-sm text-[#29ABE2] hover:underline">GIO4X Raptor Platform &rarr;</Link>
            <Link href="/tools/gio-bots" className="text-sm text-[#29ABE2] hover:underline">GIO Bots &rarr;</Link>
          </div>

          <p className="text-center text-xs text-[var(--color-text-secondary)]/70 max-w-3xl mx-auto mt-8">
            Trading leveraged products carries significant risk. Backtested and simulated results are not a
            guarantee of future performance. The AI Strategy Lab is a research and testing environment; all live
            trading remains subject to approval, risk controls and applicable regulation.
          </p>
        </div>
      </section>

      {/* Launch CTA */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">See the agents at work</h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Open the lab, hit <strong>Generate Strategies</strong>, and watch fifteen AI agents research,
              build, backtest and rank strategies live — then review the candidates and their full result cards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" href={LAB_URL}>Launch the Lab (Demo)</Button>
              <Button size="lg" variant="secondary" href={SITE.signUpUrl}>Open a Trading Account</Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABand />
    </>
  );
}
