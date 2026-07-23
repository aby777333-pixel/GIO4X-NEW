"use client";

// Raptor Intelligence — trader-friendly showcase of the GIO RAPTOR
// platform's intelligence stack: EMIL, Lara, ABIN, Shield, Guardian,
// Scanner, Hedge Engine, Digital Twin, World Command and Always Learning.
// Marketing copy stays honest: decision support and bounded automation,
// never guaranteed profits; simulated pricing until the live LP.
//
// Layout follows the golden ratio (≈1:1.618): a featured "trinity" block
// at 61.8/38.2, a supporting stack grid, and an honest execution-flow band.
// Accents stay blue-dominant; gold + a restrained emerald appear only as
// premium / protection semantics.

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
  Search, ShieldCheck, MousePointerClick, ArrowRight,
} from "lucide-react";

const TERMINAL = `${RAPTOR_BASE}/terminal`;

/* ---- Accent system: blue stays dominant; gold + emerald are occasional. ---- */
type Accent = "sky" | "gold" | "emerald";

const accentChip: Record<Accent, string> = {
  sky: "bg-[rgba(41,171,226,0.10)] text-[var(--color-sky)] ring-1 ring-[rgba(41,171,226,0.22)]",
  gold: "bg-[rgba(201,168,76,0.12)] text-[var(--color-gold)] ring-1 ring-[rgba(201,168,76,0.26)]",
  emerald: "bg-[rgba(16,185,129,0.10)] text-[#10B981] ring-1 ring-[rgba(16,185,129,0.22)]",
};

const accentBar: Record<Accent, string> = {
  sky: "bg-[var(--color-sky)]",
  gold: "bg-[var(--color-gold)]",
  emerald: "bg-[#10B981]",
};

type Pillar = {
  icon: typeof Brain;
  name: string;
  desc: string;
  href: string;
  cta: string;
  accent: Accent;
};

/* Flagship trio — elevated into the golden-ratio feature block. */
const emil: Pillar = {
  icon: Brain,
  name: "EMIL — your AI trading intelligence",
  desc: "A nine-agent council reads every market you trade — regime, entry zones, news, risk, behaviour — and explains itself in plain language. Arm the Autonomous Pilot inside a typed-consent risk envelope and EMIL scans, enters, manages stops to break-even and beyond, hedges adverse positions and banks your daily target. It refuses what it cannot read: No-Trade is always a valid decision.",
  href: `${TERMINAL}/emil`,
  cta: "Open EMIL",
  accent: "sky",
};

const trinityRight: Pillar[] = [
  {
    icon: Satellite,
    name: "ABIN — Advanced Brokerage Intelligence Network",
    desc: "One institutional workspace: universal search across instruments, countries, central banks and events (English or your language), security master pages, Calendar Pro with your open-exposure flags, and a command bar that understands “compare EURUSD and GBPUSD” or “find hedge for gold”.",
    href: `${TERMINAL}/abin`,
    cta: "Open ABIN",
    accent: "sky",
  },
  {
    icon: Languages,
    name: "Lara — speak your language",
    desc: "Voice and text in Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi, Odia or Urdu. Say “गोल्ड 0.1 लॉट खरीदो” — Lara transcribes and translates, the platform reads the order back, and nothing executes without your explicit confirm. Language can never trade on its own.",
    href: `${TERMINAL}/emil`,
    cta: "Meet Lara",
    accent: "gold",
  },
];

/* Supporting stack — the rest of the intelligence layer. */
const supporting: Pillar[] = [
  {
    icon: Shield,
    name: "Shield — 12-rule capital protection",
    desc: "Daily loss circuit-breaker, mandatory stops, risk-per-trade caps, revenge-trade guard, overtrading governor, equity-floor kill switch and more — every rule yours to switch, every order gated before it reaches the market.",
    href: TERMINAL,
    cta: "See Shield in the terminal",
    accent: "emerald",
  },
  {
    icon: Eye,
    name: "Guardian — the watchdog EMIL cannot silence",
    desc: "Independent checks inside the order path itself: duplicate orders, missing stops, stale quotes, abnormal spreads, unreadable markets. Even a fully-armed AI pilot passes the Guardian on every single order.",
    href: TERMINAL,
    cta: "How orders are protected",
    accent: "emerald",
  },
  {
    icon: Radar,
    name: "Global Trade Scanner",
    desc: "Ranked, transparent opportunities from scalping to positional — every card shows its full scoring breakdown, entry plan, risk-reward, news risk and honest reasons NOT to trade. Arm EMIL on any card; execution always needs your confirmation.",
    href: `${TERMINAL}/scan-trade`,
    cta: "Open Scan & Trade",
    accent: "sky",
  },
  {
    icon: Shuffle,
    name: "AI Correlation Hedge Engine",
    desc: "Live multi-timeframe correlations, honest hedge viability (it refuses weak hedges), ATR-adjusted ratios, stress-lab replays and combined position monitoring with drift alerts — portfolio protection like an institutional desk.",
    href: `${TERMINAL}/hedge-trade`,
    cta: "Open Hedge & Trade",
    accent: "sky",
  },
  {
    icon: Sparkles,
    name: "Digital Financial Twin",
    desc: "Before capital commits, the Twin rehearses 300 plausible futures from the instrument's own measured behaviour: target-first odds, stop-first odds, worst-case excursions. A statistical rehearsal — clearly labelled, never a promise.",
    href: `${TERMINAL}/world`,
    cta: "Rehearse a trade",
    accent: "gold",
  },
  {
    icon: Globe,
    name: "World Command Center",
    desc: "An interactive world map with measured risk scores per region, country intelligence, Portfolio DNA (your risk profile at a glance), the AI News Studio, the Watchdog auditor and Memory Search over your own trading history.",
    href: `${TERMINAL}/world`,
    cta: "Open the World map",
    accent: "sky",
  },
  {
    icon: BookOpen,
    name: "Always Learning",
    desc: "EMIL measures spreads by session, validates correlations, remembers how every news release actually moved the market, scores its own forecasts honestly — and a Knowledge-to-Trading Firewall keeps every learned fact away from live execution until it passes risk, Guardian and your permission.",
    href: `${TERMINAL}/emil`,
    cta: "See the knowledge engine",
    accent: "gold",
  },
  {
    icon: Mic,
    name: "Voice Trading",
    desc: "“Buy 0.1 EURUSD.” “Close all.” Spoken in English or your language — every command is read back with a mandatory confirm and a 10-second auto-cancel. Fast hands-free control that never skips your approval.",
    href: TERMINAL,
    cta: "Try voice trading",
    accent: "sky",
  },
  {
    icon: LineChart,
    name: "Trader cockpit & discipline tools",
    desc: "Discipline score, session game plans with deviation warnings, edge meter, tilt-o-meter, trade grades, regime-change alerts, economic-calendar guard — built to stop preventable losses and compound good habits.",
    href: TERMINAL,
    cta: "Open the terminal",
    accent: "emerald",
  },
];

/* Honest "at a glance" metrics — every figure is stated in the copy above. */
const metrics: { value: string; label: string; accent: Accent }[] = [
  { value: "9", label: "agent council reading every market", accent: "sky" },
  { value: "11", label: "Indian languages, voice & text", accent: "gold" },
  { value: "12", label: "capital-protection rules", accent: "emerald" },
  { value: "300", label: "plausible futures rehearsed per trade", accent: "gold" },
];

/* The honest path an order actually travels — reinforces "answers to you". */
const flow: { icon: typeof Search; step: string; label: string }[] = [
  { icon: Search, step: "Discover", label: "ABIN surfaces the market & the exposure it touches" },
  { icon: Brain, step: "Understand", label: "EMIL reads regime, entry, news & risk — and explains it" },
  { icon: Sparkles, step: "Rehearse", label: "the Digital Twin plays out the odds before capital moves" },
  { icon: ShieldCheck, step: "Protect", label: "Shield & Guardian gate the order on the way to market" },
  { icon: MousePointerClick, step: "You confirm", label: "nothing executes without your explicit approval" },
];

const principles = [
  "You stay in control — AI prepares, you confirm; autonomy exists only inside a typed-consent risk envelope you define",
  "No black boxes — every signal, score and decision shows its evidence, and “I don’t know” is an honest answer",
  "Capital first — protection rules, budgets and kill switches outrank every opportunity",
  "Probabilities, never promises — nothing on the platform guarantees profit, and estimates are labelled as estimates",
];

/* ---- Reusable pillar card (keeps the whole stack visually consistent). ---- */
function PillarCard({ p, featured = false }: { p: Pillar; featured?: boolean }) {
  return (
    <Card className="relative flex h-full flex-col overflow-hidden p-6">
      <span className={`absolute inset-x-0 top-0 h-0.5 ${accentBar[p.accent]}`} aria-hidden="true" />
      <span
        className={`mb-4 inline-flex items-center justify-center rounded-xl ${accentChip[p.accent]} ${
          featured ? "h-14 w-14" : "h-11 w-11"
        }`}
      >
        <p.icon className={featured ? "h-7 w-7" : "h-5 w-5"} />
      </span>
      <h3 className={`mb-2 font-semibold text-[var(--color-text)] ${featured ? "text-2xl" : "text-lg"}`}>
        {p.name}
      </h3>
      <p
        className={`mb-5 flex-1 leading-relaxed text-[var(--color-text-secondary)] ${
          featured ? "text-base" : "text-sm"
        }`}
      >
        {p.desc}
      </p>
      <Button href={p.href} variant="secondary" size="sm" className="self-start">
        {p.cta}
      </Button>
    </Card>
  );
}

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

      {/* ---- At-a-glance metric strip (honest counts, tabular numerals) ---- */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container mx-auto grid grid-cols-2 gap-px overflow-hidden px-4 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center px-4 py-8 text-center">
              <span
                className={`font-bold tabular-nums leading-none ${
                  m.accent === "gold"
                    ? "text-[var(--color-gold)]"
                    : m.accent === "emerald"
                    ? "text-[#10B981]"
                    : "text-[var(--color-sky)]"
                }`}
                style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)" }}
              >
                {m.value}
              </span>
              <span className="mt-2 max-w-[16ch] text-xs leading-snug text-[var(--color-text-secondary)]">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ---- The intelligence trinity — golden-ratio 61.8 / 38.2 ---- */}
      <section className="golden-spiral py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The intelligence stack"
            title="Everything works together — and answers to you"
            subtitle="Discover through ABIN, understand through EMIL, find opportunity through the Scanner, control exposure through the Hedge Engine, verify through Shield and Guardian — then you confirm, and Raptor executes."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.618fr_1fr]">
            <AnimateOnScroll className="h-full">
              <PillarCard p={emil} featured />
            </AnimateOnScroll>
            <div className="grid gap-6">
              {trinityRight.map((p, i) => (
                <AnimateOnScroll key={p.name} delay={0.05 + i * 0.05} className="h-full">
                  <PillarCard p={p} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Supporting stack ---- */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The full stack"
            title="Protection, opportunity and discipline — in one terminal"
            subtitle="Nine more systems surround the core: every one explainable, every one gated by your permission before it ever touches the market."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supporting.map((p, i) => (
              <AnimateOnScroll key={p.name} delay={i * 0.05} className="h-full">
                <PillarCard p={p} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Honest execution flow ---- */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="How an order reaches the market"
            title="Prepared by AI. Approved by you. Gated all the way."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {flow.map((f, i) => (
              <AnimateOnScroll key={f.step} delay={i * 0.06} className="h-full">
                <div className="relative flex h-full flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-6 text-center">
                  <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(41,171,226,0.10)] text-[var(--color-sky)] ring-1 ring-[rgba(41,171,226,0.22)]">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-semibold text-[var(--color-text)]">{f.step}</p>
                  <p className="mt-1 text-xs leading-snug text-[var(--color-text-secondary)]">{f.label}</p>
                  {i < flow.length - 1 && (
                    <ArrowRight
                      className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[var(--color-text-tertiary)] md:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Promises + disclaimer — golden-ratio 61.8 / 38.2 ---- */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Built trader-first" title="Our promises to every trader" />
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.618fr_1fr]">
            <div className="space-y-4">
              {principles.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-sky)]" />
                  <p className="text-[var(--color-text-secondary)]">{p}</p>
                </div>
              ))}
            </div>
            <Card className="p-6">
              <div className="mb-3 flex items-center gap-2">
                <Lock className="h-5 w-5 shrink-0 text-[var(--color-gold)]" />
                <span className="text-sm font-semibold text-[var(--color-text)]">Risk disclosure</span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-text-tertiary)]">
                Trading leveraged products involves substantial risk and may result in the loss of your capital.
                AI features are decision-support and bounded automation — they do not guarantee profits or prevent
                losses, and all trading decisions remain your responsibility. The terminal currently runs
                platform-feed pricing ahead of live liquidity connection.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
