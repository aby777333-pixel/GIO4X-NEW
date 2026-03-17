"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Bot, Zap, Server, Shield, Code, TrendingUp } from "lucide-react";

const features = [
  { icon: Bot, title: "Full EA Support", desc: "Run any Expert Advisor or trading robot on MT4, MT5, and Raptor without restrictions." },
  { icon: Zap, title: "Ultra-Low Latency", desc: "Sub-10ms execution speeds optimised for high-frequency algorithmic strategies." },
  { icon: Server, title: "Free VPS Hosting", desc: "Qualifying accounts receive complimentary VPS to keep your bots running 24/7." },
  { icon: Shield, title: "No Strategy Limits", desc: "Scalping, hedging, grid trading, martingale — all strategies are welcome." },
  { icon: Code, title: "Golden Ratio Algos", desc: "Built-in Fibonacci and golden-ratio indicators for strategy development." },
  { icon: TrendingUp, title: "Backtesting Suite", desc: "Test strategies against years of tick-level historical data before going live." },
];

export function EARobotFriendly() {
  return (
    <section className="section-padding">
      <div className="max-site">
        <SectionHeading
          eyebrow="Algo Trading"
          title="EA & Robot Friendly"
          subtitle="GIO4X is built for automated trading. Run your Expert Advisors, custom bots, and algorithmic strategies with zero restrictions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimateOnScroll key={f.title} delay={i * 0.08}>
              <Card className="h-full">
                <div className="w-10 h-10 mb-3 rounded-lg bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-[#29ABE2]" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{f.desc}</p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
