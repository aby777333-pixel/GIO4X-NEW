"use client";

// Features hub — one category-wise catalogue of everything GIO4X + the GIO
// Raptor platform offer, funnelling into the existing deep pages. Follows the
// raptor-intelligence house style: blue-dominant accents, gold + emerald used
// only as premium / protection semantics; golden-ratio feature block up top.
// Marketing copy stays honest — no guaranteed profits, simulated pricing until
// the live LP connection.

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { PremiumDivider } from "@/components/ui/PremiumDivider";
import { SITE } from "@/lib/constants";
import Link from "next/link";
import {
  Zap, LineChart, Brain, FlaskConical, ShieldCheck, Bot, Users,
  Layers, Wallet, CalendarClock, GraduationCap, Handshake, Lock,
  CheckCircle2, ArrowUpRight,
} from "lucide-react";

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

type Module = {
  icon: typeof Zap;
  name: string;
  desc: string;
  features: string[];
  href: string;
  cta: string;
  accent: Accent;
};

/* Flagship module — elevated into the golden-ratio feature block. */
const flagship: Module = {
  icon: Zap,
  name: "GIO4X Raptor — the core platform",
  desc: "Our proprietary in-house trading engine. Because we own every layer, we tune execution, charting and risk directly on trader feedback instead of a third-party roadmap.",
  features: [
    "Spreads from 0.0 pips on ECN",
    "Leverage up to 500:1",
    "Sub-10ms execution (LD4 / NY4 / TY3)",
    "One-click & Level-2 depth-of-market trading",
    "Full order types — market, limit, stop, OCO, trailing",
    "Web, iOS, Android, Windows & Mac — one synced account",
  ],
  href: "/platforms",
  cta: "Explore the platform",
  accent: "sky",
};

/* The rest of the catalogue, grouped by what a trader actually reaches for. */
const modules: Module[] = [
  {
    icon: LineChart,
    name: "Charting & Analysis",
    desc: "Institutional-grade analysis without leaving the terminal.",
    features: [
      "100+ technical indicators",
      "Multi-chart & detachable layouts",
      "Custom drawing tools & templates",
      "Real-time news on the chart",
    ],
    href: "/platforms",
    cta: "See the charts",
    accent: "sky",
  },
  {
    icon: Brain,
    name: "Raptor Intelligence — AI suite",
    desc: "EMIL, ABIN and Lara: explainable decision-support that always answers to you.",
    features: [
      "EMIL — nine-agent AI trading council",
      "ABIN — universal market intelligence search",
      "Lara — voice & text in 11 Indian languages",
      "Scanner & AI Correlation Hedge Engine",
    ],
    href: "/raptor-intelligence",
    cta: "Meet the AI suite",
    accent: "gold",
  },
  {
    icon: FlaskConical,
    name: "AI Strategy Lab",
    desc: "Turn an idea into a testable strategy with a transparent multi-agent pipeline.",
    features: [
      "15-agent research pipeline",
      "20 visible reasoning stages",
      "EA source generator",
      "India-first, globally aware",
    ],
    href: "/ai-lab",
    cta: "Open the Strategy Lab",
    accent: "gold",
  },
  {
    icon: ShieldCheck,
    name: "Trader Protection — Shield",
    desc: "Capital-protection you won't find native on MT5 or cTrader. Every order gated before it reaches the market.",
    features: [
      "Equity-floor kill switch",
      "Daily loss circuit-breaker",
      "Risk-per-trade caps",
      "Revenge-trade & overtrading guards",
    ],
    href: "/raptor-intelligence",
    cta: "How capital is protected",
    accent: "emerald",
  },
  {
    icon: Bot,
    name: "Automation & Algo",
    desc: "Bring your own robots or use ours — full compatibility, no gatekeeping.",
    features: [
      "Accepts all Expert Advisors & robots",
      "GIO Bots — ready-made strategies",
      "Algorator strategy builder",
      "Integrated backtesting IDE",
    ],
    href: "/tools/gio-bots",
    cta: "Explore automation",
    accent: "sky",
  },
  {
    icon: Users,
    name: "Copy & Social Trading",
    desc: "Follow proven traders or let a professional manage the account.",
    features: [
      "Native copy trading",
      "PAMM managed accounts",
      "Money-manager program",
      "Transparent performance history",
    ],
    href: "/copy-trading",
    cta: "Start copy trading",
    accent: "sky",
  },
  {
    icon: Layers,
    name: "Markets",
    desc: "One account, every major asset class.",
    features: [
      "Forex — 41 pairs",
      "Metals, Indices & Commodities",
      "Share CFDs",
      "Crypto CFDs",
    ],
    href: "/markets",
    cta: "Browse markets",
    accent: "sky",
  },
  {
    icon: Wallet,
    name: "Accounts & Funding",
    desc: "Segregated funds and fast, zero-fee funding across tiers.",
    features: [
      "Classic, Premium & ECN accounts",
      "Segregated client funds",
      "Zero-fee deposits",
      "Fast withdrawals",
    ],
    href: "/pricing",
    cta: "Compare pricing",
    accent: "emerald",
  },
  {
    icon: CalendarClock,
    name: "News, Calendar & Tools",
    desc: "The context and calculators a trade actually needs.",
    features: [
      "Economic calendar",
      "Pip, margin, swap & profit calculators",
      "Embeddable market widgets",
      "Live spreads",
    ],
    href: "/tools",
    cta: "Open the tools",
    accent: "sky",
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "From first trade to funded pro — the GIO4X Academy.",
    features: [
      "Structured Academy courses",
      "Trading glossary",
      "Curated book library",
      "Market blog",
    ],
    href: "/education",
    cta: "Start learning",
    accent: "gold",
  },
  {
    icon: Handshake,
    name: "Partners",
    desc: "Grow with GIO4X as an introducing broker or money manager.",
    features: [
      "Introducing Broker program",
      "Money-manager partnerships",
      "Transparent commission models",
      "Dedicated partner support",
    ],
    href: "/partners",
    cta: "Partner with us",
    accent: "sky",
  },
  {
    icon: Lock,
    name: "Security & Trust",
    desc: "The safeguards behind every account.",
    features: [
      "Segregated client funds",
      "SSL-encrypted connections",
      "AML & compliance controls",
      "Account-security & biometrics",
    ],
    href: "/about/security",
    cta: "See our safeguards",
    accent: "emerald",
  },
];

/* ---- Reusable module card (keeps the whole catalogue visually consistent). ---- */
function ModuleCard({ m, featured = false }: { m: Module; featured?: boolean }) {
  return (
    <Card className="relative flex h-full flex-col overflow-hidden p-6">
      <span className={`absolute inset-x-0 top-0 h-0.5 ${accentBar[m.accent]}`} aria-hidden="true" />
      <span
        className={`mb-4 inline-flex items-center justify-center rounded-xl ${accentChip[m.accent]} ${
          featured ? "h-14 w-14" : "h-11 w-11"
        }`}
      >
        <m.icon className={featured ? "h-7 w-7" : "h-5 w-5"} />
      </span>
      <h3 className={`mb-2 font-semibold text-[var(--color-text)] ${featured ? "text-2xl" : "text-lg"}`}>
        {m.name}
      </h3>
      <p
        className={`mb-4 leading-relaxed text-[var(--color-text-secondary)] ${
          featured ? "text-base" : "text-sm"
        }`}
      >
        {m.desc}
      </p>
      <ul className={`mb-5 flex-1 space-y-2 ${featured ? "sm:columns-2 sm:gap-6" : ""}`}>
        {m.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-sky)]" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button href={m.href} variant="secondary" size="sm" className="self-start">
        {m.cta}
      </Button>
    </Card>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Everything GIO4X"
        image="gio4x14.png"
        title={<>Every feature, <span className="gradient-text">in one place</span></>}
        caption="The complete GIO4X toolkit — platform, intelligence, protection, automation, markets and more — organised category by category. Explore what you get before you open an account."
        ctas={[
          { label: "Open Live Account", href: SITE.signUpUrl },
          { label: "Compare vs MT5 & cTrader", href: "/compare", variant: "secondary" },
        ]}
      />

      {/* ---- Flagship module — golden-ratio 61.8 / 38.2 ---- */}
      <section className="golden-spiral py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Where it starts"
            title="A platform we own end to end"
            subtitle="Most brokers rent a third-party terminal. GIO4X Raptor is built in-house — which is exactly why the intelligence, protection and automation layers below can live inside it."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.618fr_1fr]">
            <AnimateOnScroll className="h-full">
              <ModuleCard m={flagship} featured />
            </AnimateOnScroll>
            <div className="flex flex-col justify-between gap-6">
              <Card className="flex flex-col p-6">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(41,171,226,0.10)] text-[var(--color-sky)] ring-1 ring-[rgba(41,171,226,0.22)]">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <h3 className="mb-2 text-lg font-semibold text-[var(--color-text)]">
                  Switching from MT5 or cTrader?
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Bring your Expert Advisors, keep the familiar workflow, and gain a native AI + capital-protection layer no MetaTrader broker can offer.
                </p>
                <Button href="/compare" variant="secondary" size="sm" className="self-start">
                  See the comparison
                </Button>
              </Card>
              <Card className="flex flex-col p-6">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(201,168,76,0.12)] text-[var(--color-gold)] ring-1 ring-[rgba(201,168,76,0.26)]">
                  <Wallet className="h-5 w-5" />
                </span>
                <h3 className="mb-2 text-lg font-semibold text-[var(--color-text)]">
                  Transparent pricing
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Spreads, commission, swap and leverage across every account tier — no hidden costs.
                </p>
                <Button href="/pricing" variant="secondary" size="sm" className="self-start">
                  View pricing
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ---- The full catalogue ---- */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <PremiumDivider className="mb-14" />
          <SectionHeading
            eyebrow="The full toolkit"
            title="Twelve modules, one account"
            subtitle="Each card links to the full detail. Everything is included with your GIO4X account — you choose what to use."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <AnimateOnScroll key={m.name} delay={(i % 3) * 0.05} className="h-full">
                <ModuleCard m={m} />
              </AnimateOnScroll>
            ))}
          </div>

          {/* Internal links */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/compare" className="text-sm text-[var(--color-sky)] hover:underline">Compare vs MT5 &amp; cTrader &rarr;</Link>
            <Link href="/pricing" className="text-sm text-[var(--color-sky)] hover:underline">Pricing &amp; Spreads &rarr;</Link>
            <Link href="/raptor-intelligence" className="text-sm text-[var(--color-sky)] hover:underline">Raptor Intelligence &rarr;</Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
