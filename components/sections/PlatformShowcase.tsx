"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Monitor, Globe, Smartphone } from "lucide-react";

const platforms = [
  {
    icon: Monitor,
    name: "GIO4X Raptor Desktop",
    desc: "Our flagship proprietary platform engineered for professional traders. Lightning-fast execution, advanced charting, and algorithmic trading capabilities.",
    features: ["One-click trading", "100+ indicators", "Algo trading support", "Multi-screen layout", "Real-time news feed"],
    cta: "Download Raptor",
  },
  {
    icon: Globe,
    name: "WebTrader",
    desc: "Trade directly from your browser with zero installations. Full platform functionality accessible from any device, anywhere in the world.",
    features: ["No download required", "Full charting suite", "Synced with desktop", "Secure SSL encryption", "Trade from any browser"],
    cta: "Launch WebTrader",
  },
  {
    icon: Smartphone,
    name: "Mobile Trading",
    desc: "Stay connected to the markets with our iOS and Android apps. Full trading capabilities, real-time quotes, and instant notifications.",
    features: ["iOS & Android", "Push notifications", "Biometric login", "One-tap trading", "Full order management"],
    cta: "Get the App",
  },
];

export function PlatformShowcase() {
  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="max-site">
        <SectionHeading
          eyebrow="Platforms"
          title="Powerful Trading Platforms"
          subtitle="Whether you trade from desktop, web, or mobile — GIO4X Raptor delivers institutional-grade tools everywhere."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, i) => (
            <AnimateOnScroll key={platform.name} delay={i * 0.15}>
              <Card className="h-full flex flex-col">
                <div className="w-16 h-16 mb-5 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center">
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{platform.name}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-5 leading-relaxed">{platform.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {platform.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" size="sm" href="/platforms">
                  {platform.cta}
                </Button>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
