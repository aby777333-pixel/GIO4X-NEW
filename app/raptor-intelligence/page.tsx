"use client";

// Raptor Intelligence — trader-friendly showcase of the GIO RAPTOR
// platform's intelligence stack: EMIL, Lara, ABIN, Shield, Guardian,
// Scanner, Hedge Engine, Digital Twin, World Command and Always Learning.
// Marketing copy stays honest: decision support and bounded automation,
// never guaranteed profits; simulated pricing until the live LP.

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { RAPTOR_BASE } from "@/lib/constants";
import {
  Brain, Satellite, Shield, Eye, Radar, Shuffle, Sparkles, Globe,
  Mic, BookOpen, Lock, CheckCircle2, Languages, LineChart,
} from "lucide-react";

const TERMINAL = `${RAPTOR_BASE}/terminal`;

const pillars = [
  {
    icon: Brain,
    name: "EMIL — your AI trading intelligence",
    desc: "A nine-agent council reads every market you trade — regime, entry zones, news, risk, behaviour — and explains itself in plain language. Arm the Autonomous Pilot inside a typed-consent risk envelope and EMIL scans, enters, manages stops to break-even and beyond, hedges adverse positions and banks your daily target. It refuses what it cannot read: No-Trade is always a valid decision.",
    href: `${TERMINAL}/emil`,
    cta: "Open EMIL",
  },
  {
    icon: Satellite,
    name: "ABIN — Advanced Brokerage Intelligence Network",
    desc: "One institutional workspace: universal search across instruments, countries, central banks and events (English or your language), security master pages, Calendar Pro with your open-exposure flags, and a command bar that understands “compare EURUSD and GBPUSD” or “find hedge for gold”.",
    href: `${TERMINAL}/abin`,
    cta: "Open ABIN",
  },
  {
    icon: Languages,
    name: "Lara — speak your language",
    desc: "Voice and text in Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi, Odia or Urdu. Say “गोल्ड 0.1 लॉट खरीदो” — Lara transcribes and translates, the platform reads the order back, and nothing executes without your explicit confirm. Language can never trade on its own.",
    href: `${TERMINAL}/emil`,
    cta: "Meet Lara",
  },
  {
    icon: Shield,
    name: "Shield — 12-rule capital protection",
    desc: "Daily loss circuit-breaker, mandatory stops, risk-per-trade caps, revenge-trade guard, overtrading governor, equity-floor kill switch and more — every rule yours to switch, every order gated before it reaches the market.",
    href: TERMINAL,
    cta: "See Shield in the terminal",
  },
  {
    icon: Eye,
    name: "Guardian — the watchdog EMIL cannot silence",
    desc: "Independent checks inside the order path itself: duplicate orders, missing stops, stale quotes, abnormal spreads, unreadable markets. Even a fully-armed AI pilot passes the Guardian on every single order.",
    href: TERMINAL,
    cta: "How orders are protected",
  },
  {
    icon: Radar,
    name: "Global Trade Scanner",
    desc: "Ranked, transparent opportunities from scalping to positional — every card shows its full scoring breakdown, entry plan, risk-reward, news risk and honest reasons NOT to trade. Arm EMIL on any card; execution always needs your confirmation.",
    href: `${TERMINAL}/scan-trade`,
    cta: "Open Scan & Trade",
  },
  {
    icon: Shuffle,
    name: "AI Correlation Hedge Engine",
    desc: "Live multi-timeframe correlations, honest hedge viability (it refuses weak hedges), ATR-adjusted ratios, stress-lab replays and combined position monitoring with drift alerts — portfolio protection like an institutional desk.",
    href: `${TERMINAL}/hedge-trade`,
    cta: "Open Hedge & Trade",
  },
  {
    icon: Sparkles,
    name: "Digital Financial Twin",
    desc: "Before capital commits, the Twin rehearses 300 plausible futures from the instrument's own measured behaviour: target-first odds, stop-first odds, worst-case excursions. A statistical rehearsal — clearly labelled, never a promise.",
    href: `${TERMINAL}/world`,
    cta: "Rehearse a trade",
  },
  {
    icon: Globe,
    name: "World Command Center",
    desc: "An interactive world map with measured risk scores per region, country intelligence, Portfolio DNA (your risk profile at a glance), the AI News Studio, the Watchdog auditor and Memory Search over your own trading history.",
    href: `${TERMINAL}/world`,
    cta: "Open the World map",
  },
  {
    icon: BookOpen,
    name: "Always Learning",
    desc: "EMIL measures spreads by session, validates correlations, remembers how every news release actually moved the market, scores its own forecasts honestly — and a Knowledge-to-Trading Firewall keeps every learned fact away from live execution until it passes risk, Guardian and your permission.",
    href: `${TERMINAL}/emil`,
    cta: "See the knowledge engine",
  },
  {
    icon: Mic,
    name: "Voice Trading",
    desc: "“Buy 0.1 EURUSD.” “Close all.” Spoken in English or your language — every command is read back with a mandatory confirm and a 10-second auto-cancel. Fast hands-free control that never skips your approval.",
    href: TERMINAL,
    cta: "Try voice trading",
  },
  {
    icon: LineChart,
    name: "Trader cockpit & discipline tools",
    desc: "Discipline score, session game plans with deviation warnings, edge meter, tilt-o-meter, trade grades, regime-change alerts, economic-calendar guard — built to stop preventable losses and compound good habits.",
    href: TERMINAL,
    cta: "Open the terminal",
  },
];

const principles = [
  "You stay in control — AI prepares, you confirm; autonomy exists only inside a typed-consent risk envelope you define",
  "No black boxes — every signal, score and decision shows its evidence, and “I don’t know” is an honest answer",
  "Capital first — protection rules, budgets and kill switches outrank every opportunity",
  "Probabilities, never promises — nothing on the platform guarantees profit, and estimates are labelled as estimates",
];

export default function RaptorIntelligencePage() {
  return (
    <>
      <PageHero
        eyebrow="GIO RAPTOR platform"
        image="raptor31.png"
        title={<>A trading terminal that <span className="gradient-text">thinks with you</span></>}
        caption="EMIL, ABIN, Lara, Shield, Guardian, the Scanner, the Hedge Engine and the Digital Twin — one institutional-grade intelligence stack, built trader-first: explainable, multilingual, and always under your control."
        ctas={[
          { label: "Open the Raptor Terminal", href: TERMINAL },
          { label: "Explore Platforms", href: "/platforms", variant: "secondary" },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The intelligence stack"
            title="Everything works together — and answers to you"
            subtitle="Discover through ABIN, understand through EMIL, find opportunity through the Scanner, control exposure through the Hedge Engine, verify through Shield and Guardian — then you confirm, and Raptor executes."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <AnimateOnScroll key={p.name} delay={i * 0.05}>
                <Card className="flex h-full flex-col p-6">
                  <p.icon className="mb-4 h-8 w-8 text-[var(--accent)]" />
                  <h3 className="mb-2 text-lg font-semibold">{p.name}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">{p.desc}</p>
                  <Button href={p.href} variant="secondary" size="sm">
                    {p.cta}
                  </Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Built trader-first" title="Our promises to every trader" />
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {principles.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                <p className="text-[var(--text-secondary)]">{p}</p>
              </div>
            ))}
            <div className="flex items-start gap-3">
              <Lock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
              <p className="text-sm text-[var(--text-tertiary)]">
                Trading leveraged products involves substantial risk and may result in the loss of your capital.
                AI features are decision-support and bounded automation — they do not guarantee profits or prevent
                losses, and all trading decisions remain your responsibility. The terminal currently runs
                platform-feed pricing ahead of live liquidity connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
