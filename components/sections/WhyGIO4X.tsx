"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Zap, Droplets, Headphones, Cpu } from "lucide-react";
import { SITE } from "@/lib/constants";

const reasons = [
  {
    icon: Zap,
    title: "Institutional Execution",
    desc: "Ultra-low latency execution powered by Equinix LD4/NY4 data centers. Your orders are filled in milliseconds — every time.",
  },
  {
    icon: Droplets,
    title: "Deep Liquidity",
    desc: "Connected to tier-1 banks and prime brokers, ensuring razor-tight spreads and minimal slippage, even in fast markets.",
  },
  {
    icon: Headphones,
    title: "Award-Winning Support",
    desc: "A multilingual desk available 24/5 via live chat, email and phone. VIP clients receive a dedicated account manager.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    desc: "The proprietary GIO4X Raptor platform — AI-powered analytics, advanced charting and algorithmic trading, built in-house.",
  },
];

export function WhyGIO4X() {
  return (
    <section className="section-aurora section-padding bg-[var(--color-surface)]">
      <div className="max-site">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.618fr] lg:gap-20">
          {/* Editorial intro — sticky on desktop */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <AnimateOnScroll>
              <p className="text-[#29ABE2] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Why GIO4X</p>
              <h2 className="font-display text-[var(--text-h1)] font-medium text-[var(--color-text)] mb-5 text-balance">
                The GIO4X Advantage
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed measure mb-8">
                Built from the ground up for traders who demand more — the infrastructure of an institution,
                the experience of a private bank.
              </p>
              <div className="hr-gold mb-8 max-w-[180px]" />
              <Button href={SITE.signUpUrl}>Open Your Account</Button>
            </AnimateOnScroll>
          </div>

          {/* Numbered chapters */}
          <div>
            {reasons.map((reason, i) => (
              <AnimateOnScroll key={reason.title} delay={i * 0.08}>
                <div className="group flex items-start gap-6 border-t border-[var(--color-border)] py-8 first:border-t-0 first:pt-0">
                  <span className="font-display shrink-0 text-4xl font-medium leading-none text-[var(--color-gold)] tabular-nums opacity-80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="icon-chip icon-chip--solid h-10 w-10">
                        <reason.icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-xl font-semibold text-[var(--color-text)]">{reason.title}</h3>
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed measure">{reason.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
