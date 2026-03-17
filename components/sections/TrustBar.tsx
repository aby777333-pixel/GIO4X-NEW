"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Shield, Monitor, Headphones, ShieldCheck, Banknote } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Tier-1 Liquidity", desc: "Deep institutional pools" },
  { icon: Monitor, label: "GIO4X Raptor", desc: "Next-gen trading platform" },
  { icon: Headphones, label: "24/5 Support", desc: "Dedicated assistance" },
  { icon: ShieldCheck, label: "Negative Balance Protection", desc: "Trade with confidence" },
  { icon: Banknote, label: "Fast Withdrawals", desc: "Same-day processing" },
];

export function TrustBar() {
  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="max-site">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {trustItems.map((item, i) => (
            <AnimateOnScroll key={item.label} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#29ABE2]" />
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">{item.label}</h3>
                <p className="text-xs text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
