"use client";

import { useEffect, useRef, useState } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { TrendingUp, Users, Globe, Zap, BarChart3, Clock } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 500, suffix: "+", label: "Instruments Available", desc: "Forex, Metals, Indices, Crypto & CFDs" },
  { icon: Users, value: 25, suffix: "K+", label: "Active Traders Worldwide", desc: "Trusted by traders across 50+ countries" },
  { icon: Zap, value: 12, suffix: "ms", label: "Average Execution Speed", desc: "Ultra-fast institutional-grade execution" },
  { icon: Globe, value: 50, suffix: "+", label: "Countries Served", desc: "Global access to world-class trading" },
  { icon: BarChart3, value: 99.9, suffix: "%", label: "Platform Uptime", desc: "Enterprise-level reliability and stability" },
  { icon: Clock, value: 24, suffix: "/7", label: "Customer Support", desc: "Dedicated multi-lingual support team" },
];

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start * 10) / 10);
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  const display = target % 1 === 0 ? Math.round(count) : count.toFixed(1);
  return <span>{display}{suffix}</span>;
}

export function TradingStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0A0E1A 0%, #1B3A6B 50%, #0A0E1A 100%)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, #29ABE2 1px, transparent 1px), radial-gradient(circle at 75% 75%, #C9A84C 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="max-site relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">By The Numbers</span>
            <h2 className="text-[var(--text-h1)] font-bold text-white mt-3 mb-4">
              Why Traders Choose <span className="gradient-text">GIO4X</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Institutional-grade infrastructure delivering exceptional trading conditions for retail and professional traders alike.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <AnimateOnScroll key={s.label} delay={i * 0.08}>
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#29ABE2]/20 to-[#1B3A6B]/20 flex items-center justify-center group-hover:from-[#29ABE2]/30 group-hover:to-[#1B3A6B]/30 transition-all duration-500">
                  <s.icon className="w-7 h-7 text-[#29ABE2]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter target={s.value} suffix={s.suffix} isVisible={visible} />
                </div>
                <h3 className="text-white font-semibold mb-1">{s.label}</h3>
                <p className="text-white/50 text-sm">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
