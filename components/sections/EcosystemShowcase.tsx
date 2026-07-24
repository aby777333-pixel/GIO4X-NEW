"use client";

// EcosystemShowcase — a premium, screenshot-style tour of the GIO ecosystem.
// The flagship terminal leads (golden-ratio split), a module grid shows breadth,
// and a phone block closes it. All UI is on-brand representative illustration —
// see MockUI.tsx. Honest caption at the foot.

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PremiumDivider } from "@/components/ui/PremiumDivider";
import { BrowserFrame, PhoneFrame } from "@/components/ui/DeviceFrame";
import { TerminalMock, DashboardMock, MobileMock, MiniMock } from "@/components/ui/MockUI";
import { SITE } from "@/lib/constants";
import { CheckCircle2, Users, LayoutDashboard, Handshake, ShieldCheck, Gauge, BarChart3, Copy } from "lucide-react";

type Variant = "grid" | "chart" | "list" | "gauge";

const modules: { icon: typeof Users; name: string; desc: string; mock: Variant | "dash" }[] = [
  { icon: Users, name: "Staff CRM", desc: "Lead routing, KYC review, client 360° and compliance — one command center.", mock: "dash" },
  { icon: LayoutDashboard, name: "Client Portal", desc: "Onboarding, funding, statements and account controls in a refined self-serve hub.", mock: "grid" },
  { icon: Handshake, name: "IB / Partner Portal", desc: "Referral links, multi-tier commissions and real-time attribution for partners.", mock: "list" },
  { icon: ShieldCheck, name: "Risk Management — Shield", desc: "Equity-floor kill switch, loss circuit-breakers and per-order gating.", mock: "gauge" },
  { icon: Gauge, name: "Dealer Console", desc: "A/B-book control, exposure heatmaps and live position oversight.", mock: "chart" },
  { icon: BarChart3, name: "Analytics Dashboard", desc: "Volumes, P&L, spreads-by-session and cohort intelligence at a glance.", mock: "dash" },
];

function ModuleScreen({ mock }: { mock: Variant | "dash" }) {
  return (
    <div className="overflow-hidden rounded-lg ring-1 ring-white/10" style={{ height: 132 }}>
      {mock === "dash" ? <DashboardMock /> : <MiniMock variant={mock} />}
    </div>
  );
}

export function EcosystemShowcase() {
  return (
    <section className="section-aurora py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="The ecosystem"
          title="One ecosystem. Every role."
          subtitle="Traders, partners, dealers and staff each get a purpose-built surface — all sharing one platform, one design language, one source of truth."
        />

        {/* ---- Flagship: the Raptor terminal — golden-ratio split ---- */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.618fr_1fr]">
          <AnimateOnScroll>
            <BrowserFrame url="raptor.gio4x.com/terminal">
              <TerminalMock />
            </BrowserFrame>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-sky)]">GIO4X Raptor Terminal</span>
              <h3 className="mt-2 text-2xl font-bold text-[var(--color-text)]">The trading floor, refined</h3>
              <p className="mt-3 leading-relaxed text-[var(--color-text-secondary)]">
                Level-2 depth, one-click execution, 100+ indicators and the EMIL intelligence layer — in a single, sub-10ms proprietary terminal.
              </p>
              <ul className="mt-5 space-y-2.5">
                {["Real-time charting & DOM", "Native AI + Shield protection", "Web, desktop & mobile — one account"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-sky)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href={SITE.demoUrl} className="mt-6">Open the live terminal</Button>
            </div>
          </AnimateOnScroll>
        </div>

        <PremiumDivider className="my-16" />

        {/* ---- Module grid ---- */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <AnimateOnScroll key={m.name} delay={(i % 3) * 0.05} className="h-full">
              <Card className="flex h-full flex-col p-4">
                <ModuleScreen mock={m.mock} />
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(41,171,226,0.10)] text-[var(--color-sky)] ring-1 ring-[rgba(41,171,226,0.22)]">
                    <m.icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-semibold text-[var(--color-text)]">{m.name}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{m.desc}</p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <PremiumDivider className="my-16" />

        {/* ---- Mobile + Copy trading — golden-ratio split ---- */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.618fr]">
          <AnimateOnScroll className="flex justify-center">
            <PhoneFrame className="w-[220px]">
              <MobileMock />
            </PhoneFrame>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Mobile &amp; Copy Trading</span>
              <h3 className="mt-2 text-2xl font-bold text-[var(--color-text)]">Your markets, in your pocket</h3>
              <p className="mt-3 leading-relaxed text-[var(--color-text-secondary)]">
                Native iOS &amp; Android apps with biometric sign-in, push price alerts and one-tap execution — plus copy trading to mirror proven strategies automatically.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Copy, t: "Copy Trading", d: "Follow and mirror top traders with transparent history." },
                  { icon: ShieldCheck, t: "Protected on the go", d: "Shield rules travel with your account, everywhere." },
                ].map((b) => (
                  <div key={b.t} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                    <b.icon className="h-5 w-5 text-[var(--color-sky)]" />
                    <p className="mt-2 font-semibold text-[var(--color-text)]">{b.t}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{b.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <p className="mt-12 text-center text-[11px] text-[var(--color-text-tertiary)]">
          Interface representations shown for illustration. Actual platform surfaces may vary.
        </p>
      </div>
    </section>
  );
}
