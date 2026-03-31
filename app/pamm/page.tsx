"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { Shield, BarChart3, Wallet, PieChart, Users, TrendingUp, CheckCircle, DollarSign, Clock, Target } from "lucide-react";

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

      {/* PAMM Performance Snapshot */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0A0E1A 0%, #1B3A6B 50%, #0A0E1A 100%)" }} />
        <div className="max-site relative z-10">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase">Live Performance</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                PAMM Manager <span className="text-[#29ABE2]">Leaderboard</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">Model performance data from top GIO4X PAMM managers.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-5 py-4 text-xs font-semibold text-white/40">Manager</th>
                    <th className="text-right px-5 py-4 text-xs font-semibold text-white/40">Monthly Return</th>
                    <th className="text-right px-5 py-4 text-xs font-semibold text-white/40">Max DD</th>
                    <th className="text-right px-5 py-4 text-xs font-semibold text-white/40">Investors</th>
                    <th className="text-right px-5 py-4 text-xs font-semibold text-white/40">Win Rate</th>
                    <th className="text-right px-5 py-4 text-xs font-semibold text-white/40">AUM</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "AlphaFX Pro", ret: "+4.8%", dd: "-3.2%", inv: 142, wr: "68%", aum: "$2.4M" },
                    { name: "GoldenEdge Capital", ret: "+3.5%", dd: "-2.1%", inv: 89, wr: "72%", aum: "$1.8M" },
                    { name: "Systematic Macro", ret: "+6.2%", dd: "-5.4%", inv: 67, wr: "61%", aum: "$950K" },
                    { name: "Forex Sentinel", ret: "+2.9%", dd: "-1.8%", inv: 203, wr: "74%", aum: "$3.1M" },
                    { name: "Fibonacci Flow", ret: "+5.1%", dd: "-4.0%", inv: 54, wr: "65%", aum: "$720K" },
                  ].map((m, i) => (
                    <tr key={m.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center text-white text-[10px] font-bold">
                            {i + 1}
                          </div>
                          <span className="text-white font-semibold">{m.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-right text-emerald-400 font-mono font-bold">{m.ret}</td>
                      <td className="px-5 py-3.5 text-right text-rose-400 font-mono">{m.dd}</td>
                      <td className="px-5 py-3.5 text-right text-white/60 font-mono">{m.inv}</td>
                      <td className="px-5 py-3.5 text-right text-[#29ABE2] font-mono">{m.wr}</td>
                      <td className="px-5 py-3.5 text-right text-[#C9A84C] font-mono font-bold">{m.aum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>

          {/* Key PAMM Metrics */}
          <AnimateOnScroll delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: DollarSign, value: "$8.9M+", label: "Total AUM", color: "#C9A84C" },
                { icon: Users, value: "555+", label: "Active Investors", color: "#29ABE2" },
                { icon: Target, value: "68%", label: "Avg Win Rate", color: "#10B981" },
                { icon: Clock, value: "Weekly", label: "Profit Distribution", color: "#8B5CF6" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                  <s.icon className="w-5 h-5 mx-auto mb-2" style={{ color: s.color }} />
                  <p className="text-2xl font-bold text-white font-mono">{s.value}</p>
                  <span className="text-[10px] text-white/40 uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PAMM vs Self-Trading Comparison */}
      <section className="section-padding">
        <div className="max-site max-w-4xl">
          <SectionHeading eyebrow="Compare" title="PAMM vs Self-Directed Trading" subtitle="Understand the differences to make the right choice for your goals." />
          <AnimateOnScroll>
            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass-bg)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="px-5 py-4 text-left text-xs font-semibold text-[var(--color-text-secondary)]">Factor</th>
                    <th className="px-5 py-4 text-center text-xs font-semibold text-[#29ABE2]">PAMM Investing</th>
                    <th className="px-5 py-4 text-center text-xs font-semibold text-[#C9A84C]">Self-Trading</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: "Experience Required", pamm: "None", self: "Extensive" },
                    { factor: "Time Commitment", pamm: "Minimal (passive)", self: "Several hours daily" },
                    { factor: "Emotional Stress", pamm: "Low", self: "High" },
                    { factor: "Risk Management", pamm: "Professional", self: "Self-managed" },
                    { factor: "Diversification", pamm: "Multi-manager possible", self: "Single strategy" },
                    { factor: "Minimum Investment", pamm: "$500", self: "$150" },
                    { factor: "Control Over Trades", pamm: "Delegated", self: "Full control" },
                    { factor: "Fee Structure", pamm: "Performance-based", self: "Spreads only" },
                  ].map((row) => (
                    <tr key={row.factor} className="border-b border-[var(--color-border)] last:border-0">
                      <td className="px-5 py-3 font-medium">{row.factor}</td>
                      <td className="px-5 py-3 text-center text-[var(--color-text-secondary)]">{row.pamm}</td>
                      <td className="px-5 py-3 text-center text-[var(--color-text-secondary)]">{row.self}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Questions" title="PAMM FAQ" />
          <div className="space-y-4">
            {[
              { q: "What is the minimum PAMM investment?", a: "The minimum allocation to a PAMM manager on GIO4X is $500. You retain full ownership and withdrawal capability at all times." },
              { q: "How are profits distributed?", a: "Profits and losses are allocated proportionally based on each investor's share of the total pool. Distribution occurs at the end of each trading period (typically weekly)." },
              { q: "Can I withdraw at any time?", a: "Yes. You can submit a withdrawal request at any time. Funds will be processed at the end of the current trading period to maintain fair allocation." },
              { q: "What fees do PAMM managers charge?", a: "Managers set their own performance fee (typically 10-30% of profits). Fees are only charged on net profits — if the manager doesn't make money, neither do they charge." },
              { q: "Is my money safe?", a: "Your funds remain in your own GIO4X trading account at all times. The manager trades on the master account, and your allocation mirrors those trades proportionally. You maintain full visibility and withdrawal control." },
            ].map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 0.05}>
                <div className="glass-panel p-5">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{faq.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
