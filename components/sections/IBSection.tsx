"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";
import { CheckCircle, Users } from "lucide-react";

const benefits = [
  "Competitive rebates on every trade your clients execute",
  "Real-time reporting dashboard with full transparency",
  "Multi-tier sub-IB programme with unlimited earning potential",
  "Dedicated IB account manager and priority support",
  "Marketing materials and co-branded landing pages",
  "Fast, reliable weekly payouts to your preferred method",
];

export function IBSection() {
  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="max-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <AnimateOnScroll>
            <div>
              <SectionHeading
                eyebrow="Introducing Brokers"
                title="Maximise Your Earnings: Top Rebates for IBs"
                centered={false}
              />
              <p className="text-[var(--color-text-secondary)] text-sm mb-6">
                Partner with GIO4X and earn industry-leading rebates on every lot your referred clients trade.
                Our IB programme is designed for professionals who want to build a sustainable revenue stream.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#29ABE2] shrink-0 mt-0.5" />
                    <span className="text-[var(--color-text-secondary)]">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button href={SITE.ibUrl} size="md">
                  Register as IB
                </Button>
                <Button variant="secondary" href="/partners" size="md">
                  Learn More
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Visual Card */}
          <AnimateOnScroll delay={0.2}>
            <div className="glass-panel p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">IB Partner Programme</h3>
              <p className="text-[var(--color-text-secondary)] text-sm mb-6">
                Join hundreds of partners earning daily with GIO4X.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "Up to $15", label: "Per Lot Rebate" },
                  { value: "Weekly", label: "Payouts" },
                  { value: "Unlimited", label: "Sub-IBs" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-lg font-bold text-[#29ABE2] font-mono">{stat.value}</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
