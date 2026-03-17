"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { Shield, BarChart3, Wallet, PieChart, Users, TrendingUp, CheckCircle } from "lucide-react";

const benefits = [
  { icon: Users, title: "Professional Management", desc: "Your capital is managed by experienced traders with verified track records and strict risk parameters." },
  { icon: BarChart3, title: "Transparent Performance", desc: "Full real-time visibility into all trading activity, PnL, and performance metrics on your dashboard." },
  { icon: Wallet, title: "Flexible Investment", desc: "Start with as little as $500 and add or withdraw funds at the end of each trading period." },
  { icon: PieChart, title: "Risk Diversification", desc: "Spread your investment across multiple PAMM managers to reduce exposure to any single strategy." },
];

const forInvestors = [
  "No trading experience required",
  "Professional portfolio management",
  "Full transparency and reporting",
  "Flexible deposit and withdrawal",
  "Diversify across managers",
  "Performance-based fees only",
];

const forManagers = [
  "Attract investor capital globally",
  "Earn performance fees on profits",
  "Institutional-grade execution",
  "Advanced risk management tools",
  "Scalable account infrastructure",
  "Dedicated manager dashboard",
];

export default function PAMMPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-72 pb-60 relative overflow-hidden">
        {/* Hero Visual Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
          <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
        </div>
        <div className="max-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">PAMM</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-h1)] font-bold mt-4 mb-6"
          >
            PAMM <span className="gradient-text">Investment Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto mb-8"
          >
            Percentage Allocation Management Module — invest with professional traders
            or manage investor capital through a single master account.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex gap-4 justify-center">
            <Button href="/accounts">Invest Now</Button>
            <Button variant="secondary" href="#how-it-works">How It Works</Button>
          </motion.div>
        </div>
      </section>

      {/* How PAMM Works */}
      <section id="how-it-works" className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Overview" title="How PAMM Works" />
          <AnimateOnScroll>
            <div className="glass-panel p-8">
              <div className="space-y-6">
                {[
                  { step: "1", title: "Money Manager Opens Master Account", desc: "An experienced trader creates a PAMM master account on GIO4X, depositing their own capital as a stake." },
                  { step: "2", title: "Investors Allocate Capital", desc: "Investors browse available PAMM managers, review their performance history, and allocate funds to their chosen manager." },
                  { step: "3", title: "Manager Trades the Pooled Funds", desc: "The money manager executes trades on the master account. Profits and losses are distributed proportionally based on each investor's share." },
                  { step: "4", title: "Profits Are Distributed", desc: "At the end of each trading period, net profits are calculated and distributed. The manager earns a performance fee on profits generated." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-r from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading eyebrow="Benefits" title="Why Choose GIO4X PAMM" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 0.1}>
                <Card className="h-full text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                    <b.icon className="w-6 h-6 text-[#29ABE2]" />
                  </div>
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{b.desc}</p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* For Investors vs For Managers */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="Choose Your Role" title="Investor or Manager?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll>
              <Card glow className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#29ABE2]" />
                  </div>
                  <h3 className="text-lg font-bold">For Investors</h3>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                  Let professionals grow your capital. Invest in verified PAMM managers with transparent performance records and withdraw at any time.
                </p>
                <ul className="space-y-3 mb-6">
                  {forInvestors.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#29ABE2] shrink-0" />
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/accounts" size="sm">Start Investing</Button>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <Card glow className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#29ABE2]" />
                  </div>
                  <h3 className="text-lg font-bold">For Money Managers</h3>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                  Showcase your trading skills, attract global investors, and earn performance fees on profits you generate.
                </p>
                <ul className="space-y-3 mb-6">
                  {forManagers.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#29ABE2] shrink-0" />
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/accounts" size="sm">Become a Manager</Button>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
