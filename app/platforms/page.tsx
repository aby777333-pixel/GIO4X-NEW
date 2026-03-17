"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import {
  Monitor, Globe, Smartphone, Zap, BarChart3, Shield,
  Layers, LineChart,
  ArrowRightLeft, Code, Workflow, Bot
} from "lucide-react";
import Link from "next/link";

const raptorFeatures = [
  { icon: Zap, title: "Ultra-Fast Execution", desc: "Millisecond order execution via Equinix LD4/NY4 data centers. Every millisecond counts in forex — Raptor delivers." },
  { icon: BarChart3, title: "Advanced Charting", desc: "100+ technical indicators, 9 timeframes, and custom drawing tools for comprehensive market analysis." },
  { icon: Code, title: "Algo Trading IDE", desc: "Build, backtest, and deploy automated strategies with our integrated development environment." },
  { icon: Bot, title: "EA & Robot Friendly", desc: "We accept all Expert Advisors and Trading Robots — you can have ours too. Full compatibility with third-party and proprietary EAs." },
  { icon: Layers, title: "Multi-Asset Trading", desc: "Trade Forex (41 pairs), Commodities, Indices, Crypto, and Stocks — all from one platform." },
  { icon: LineChart, title: "Depth of Market", desc: "Full Level 2 order book visibility with real-time liquidity data for informed decision making." },
  { icon: ArrowRightLeft, title: "One-Click Trading", desc: "Instant execution with configurable one-click order placement. No delays, no requotes." },
  { icon: Shield, title: "Risk Management", desc: "Built-in stop-loss, take-profit, and trailing stop functionality. Margin call at 100%, stop out at 30%." },
  { icon: Workflow, title: "Custom Layouts", desc: "Drag-and-drop workspace customization with multi-monitor support for professional setups." },
];

const platforms = [
  {
    icon: Monitor,
    name: "GIO4X Raptor Desktop",
    desc: "Our flagship proprietary trading platform, engineered for professionals who demand the fastest execution, deepest analysis, and most flexible trading environment. Available for both Windows and Mac operating systems.",
    features: ["100+ technical indicators", "Algorithmic trading IDE", "Multi-screen support", "Level 2 depth of market", "Custom workspace layouts", "Real-time news integration", "One-click trading", "Full EA & Robot support"],
    badge: "Windows & Mac",
    gradient: true,
  },
  {
    icon: Globe,
    name: "GIO4X WebTrader",
    desc: "Full trading functionality directly in your browser. No downloads, no installations — just log in and trade from any device, anywhere in the world. All features synced with your desktop account.",
    features: ["Zero installation required", "Full charting suite", "Account synced with desktop", "SSL-encrypted connection", "All order types supported", "Trade from any browser", "Responsive design", "Cloud-based watchlists"],
    badge: "Web Browser",
    gradient: false,
  },
  {
    icon: Smartphone,
    name: "GIO4X Mobile",
    desc: "Stay connected to the markets with our native iOS and Android applications. Full trading capabilities, real-time price alerts, and portfolio management from the convenience of your mobile device.",
    features: ["Native iOS & Android apps", "Push price notifications", "Biometric authentication", "One-tap order execution", "Full order management", "Interactive charts", "Economic calendar", "Live market news"],
    badge: "iOS & Android",
    gradient: false,
  },
];

const techSpecs = [
  { label: "Execution Speed", value: "<10ms" },
  { label: "Server Locations", value: "LD4 / NY4 / TY3" },
  { label: "Uptime", value: "99.99%" },
  { label: "Protocol", value: "FIX 4.4" },
  { label: "Max Leverage", value: "500:1" },
  { label: "Spreads From", value: "0.0 pips" },
];

export default function PlatformsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        {/* Hero Visual Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
          <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
        </div>
        <div className="max-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">
              Trading Platforms
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[var(--text-h1)] font-bold mt-4 mb-6"
          >
            Meet <span className="gradient-text">GIO4X Raptor</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto"
          >
            GIO4X Raptor is our proprietary trading platform engineered for speed, precision, and the demands
            of professional traders. With leverage up to 500:1, spreads from 0.0 pips, and full EA and Robot compatibility,
            Raptor is available on iOS, Android, Mac, Windows, and Web.
          </motion.p>
        </div>
      </section>

      {/* EA & Robot Banner */}
      <section className="pb-12">
        <div className="max-site">
          <AnimateOnScroll>
            <div className="glass-panel p-8 border-[#29ABE2]/30 text-center">
              <Bot className="w-12 h-12 text-[#29ABE2] mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-3">We Accept All EAs and Trading Robots — You Can Have Ours Too</h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-4">
                GIO4X Raptor is fully compatible with all Expert Advisors and automated trading robots.
                Whether you bring your own strategies or use our proprietary GIO Bots, our platform provides
                the speed and reliability that algorithmic trading demands.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/tools/gio-bots" className="text-sm text-[#29ABE2] hover:underline font-semibold">Explore GIO Bots &rarr;</Link>
                <Link href="/tools/algorator" className="text-sm text-[#29ABE2] hover:underline font-semibold">Try Algorator &rarr;</Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Raptor Features Grid */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading
            eyebrow="Raptor Engine"
            title="Built for Performance"
            subtitle="Every feature of GIO4X Raptor is engineered to give you a competitive edge in the forex markets."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {raptorFeatures.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 0.08}>
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-[#29ABE2]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{f.title}</h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">{f.desc}</p>
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Versions */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading
            eyebrow="Choose Your Platform"
            title="Trade Your Way — Any Device, Anywhere"
            subtitle="Desktop, web, or mobile — your portfolio follows you everywhere. GIO4X Raptor is available on iOS, Android, Mac, Windows, and any modern web browser."
          />
          <div className="space-y-12">
            {platforms.map((p) => (
              <AnimateOnScroll key={p.name} delay={0.1}>
                <div className={`glass-panel p-8 md:p-12 ${p.gradient ? "border-[#29ABE2]/30" : ""}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center">
                          <p.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-[#29ABE2] uppercase tracking-wider">{p.badge}</span>
                          <h3 className="text-xl font-bold">{p.name}</h3>
                        </div>
                      </div>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">{p.desc}</p>
                      <Button href="/accounts">Get Started</Button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Raptor Over MetaTrader */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-4xl">
          <SectionHeading eyebrow="Why Raptor" title="A Platform Built by Traders, for Traders" />
          <AnimateOnScroll>
            <div className="glass-panel p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-3">Proprietary Technology</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Unlike brokers that rely on third-party platforms, GIO4X Raptor is built in-house. This means we control every
                    aspect of the trading experience — from execution speed to charting tools — and can continuously optimize based
                    on direct trader feedback.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Leverage up to 500:1",
                      "Spreads from 0.0 pips on ECN",
                      "Sub-10ms execution speed",
                      "Full EA and Robot compatibility",
                      "Multi-device sync",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">For Every Trader</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Whether you are a beginner placing your first trade or a professional running complex algorithmic strategies,
                    Raptor adapts to your needs. The intuitive interface is easy to learn, while the advanced features satisfy
                    even the most demanding traders.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Intuitive interface for beginners",
                      "Advanced algo trading IDE for pros",
                      "100+ technical indicators",
                      "Real-time market news and analysis",
                      "Available on 5 platforms: iOS, Android, Mac, Windows, Web",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Technical Specifications"
            subtitle="Enterprise-grade infrastructure powering every trade you make on GIO4X Raptor."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techSpecs.map((spec, i) => (
              <AnimateOnScroll key={spec.label} delay={i * 0.08}>
                <div className="text-center glass-panel p-6">
                  <p className="text-2xl font-bold text-[#29ABE2] font-mono mb-1">{spec.value}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">{spec.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link href="/accounts" className="text-sm text-[#29ABE2] hover:underline">View Account Types &rarr;</Link>
            <Link href="/education" className="text-sm text-[#29ABE2] hover:underline">Platform Tutorials &rarr;</Link>
            <Link href="/tools" className="text-sm text-[#29ABE2] hover:underline">Trading Tools &rarr;</Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
