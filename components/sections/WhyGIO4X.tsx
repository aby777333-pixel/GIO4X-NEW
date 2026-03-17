"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Zap, Droplets, HeadphonesIcon, Cpu } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Institutional Execution",
    desc: "Ultra-low latency execution powered by Equinix data centers. Your orders are filled in milliseconds.",
  },
  {
    icon: Droplets,
    title: "Deep Liquidity",
    desc: "Connected to tier-1 banks and prime brokers, ensuring tight spreads and minimal slippage.",
  },
  {
    icon: HeadphonesIcon,
    title: "Award-Winning Support",
    desc: "Multilingual support team available 24/5 via live chat, email, and phone. VIP clients get a dedicated manager.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    desc: "GIO4X Raptor platform with AI-powered analytics, advanced charting, and algorithmic trading capabilities.",
  },
];

export function WhyGIO4X() {
  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="max-site">
        <SectionHeading
          eyebrow="Why GIO4X"
          title="The GIO4X Advantage"
          subtitle="Built from the ground up for traders who demand more."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={reason.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
