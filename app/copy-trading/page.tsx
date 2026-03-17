"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import {
  Users, Settings, Eye, Bot, BarChart3,
  ChevronDown, UserPlus, CreditCard, Copy, Monitor,
  DollarSign, Clock, Shield, Target
} from "lucide-react";
import Link from "next/link";

const steps = [
  { icon: UserPlus, title: "Open Account", desc: "Register a live trading account with GIO4X in minutes. Fund your account with a minimum deposit to get started." },
  { icon: CreditCard, title: "Complete Subscription", desc: "Choose a subscription plan and browse top-performing strategy providers with transparent, verified track records." },
  { icon: Copy, title: "Subscribe to Provider", desc: "Select and subscribe to a strategy provider that matches your goals. You can only copy one trader at a time to maintain focus." },
  { icon: Monitor, title: "Monitor Portfolio", desc: "Track performance in real time, adjust your copy amount, set take-profit and stop-loss levels, or stop copying at any time." },
];

const features = [
  { icon: Bot, title: "Fully Automated Trading", desc: "Trades execute automatically — no need to monitor charts 24/7. Set it and let the experts trade for you." },
  { icon: Users, title: "Verified Strategy Providers", desc: "Choose from a curated pool of verified traders with transparent track records. Each provider is limited to a maximum of 200 copiers." },
  { icon: Settings, title: "Adjustable Copy Amount", desc: "Your copy amount is fully adjustable. Increase or decrease allocation at any time to match your risk appetite." },
  { icon: Eye, title: "Full Transparency", desc: "Real-time reporting on every trade, with detailed performance metrics, drawdown data, and complete trade history." },
  { icon: Target, title: "Take Profit & Stop Loss", desc: "Built-in take-profit and stop-loss controls let you manage risk and lock in gains automatically." },
  { icon: BarChart3, title: "In-Depth Reports", desc: "Weekly and monthly performance summaries with drawdown, Sharpe ratio, win rate, and more." },
];

const keyDetails = [
  { icon: DollarSign, label: "Profit Sharing", value: "10% of profits", desc: "Strategy providers earn 10% of net profits generated for copiers" },
  { icon: Clock, label: "Payout Schedule", value: "Every Monday", desc: "Performance fees calculated weekly and paid out every Monday" },
  { icon: Users, label: "Max Copiers", value: "200 per trader", desc: "Each strategy provider is limited to 200 active copiers for execution quality" },
  { icon: Shield, label: "Copy Limit", value: "1 provider at a time", desc: "You can only copy one strategy provider at a time to ensure focused allocation" },
];

const manualVsCopy = [
  { aspect: "Time Required", manual: "Hours daily", copy: "Minutes to set up" },
  { aspect: "Knowledge Needed", manual: "Advanced", copy: "Basic" },
  { aspect: "Emotional Discipline", manual: "Critical", copy: "Delegated" },
  { aspect: "Diversification", manual: "Limited by time", copy: "Multiple providers" },
  { aspect: "Risk Control", manual: "Self-managed", copy: "Built-in TP/SL controls" },
  { aspect: "Scalability", manual: "Difficult", copy: "Easy" },
  { aspect: "Profit Sharing", manual: "N/A", copy: "10% of profits" },
];

const faqs = [
  {
    q: "How does profit sharing work?",
    a: "Strategy providers earn 10% of the net profits generated for copiers. Fees are calculated weekly and paid every Monday. If no profit is generated in a given week, no performance fee is charged.",
  },
  {
    q: "What is the minimum deposit to start copy trading?",
    a: "You can start copy trading with a minimum deposit of $200. However, we recommend at least $500 for adequate diversification and to give strategies room to perform.",
  },
  {
    q: "How many copiers can a strategy provider have?",
    a: "Each strategy provider can have a maximum of 200 active copiers. This limit ensures execution quality is maintained and prevents slippage from oversized copy volumes.",
  },
  {
    q: "Can I copy more than one trader at a time?",
    a: "No. To maintain focused allocation and clear performance tracking, you can only copy one strategy provider at a time. You can switch providers at any time.",
  },
  {
    q: "Can I stop copying at any time?",
    a: "Yes. You can stop copying a provider instantly from your dashboard. Open positions copied from that provider can be closed immediately or left to run.",
  },
  {
    q: "Can I adjust the copy amount?",
    a: "Yes. Your copy amount is fully adjustable. You can increase or decrease the amount allocated to copying at any time through your account dashboard.",
  },
  {
    q: "Is take-profit and stop-loss available?",
    a: "Yes. You can set take-profit and stop-loss levels on your copy trading subscription. These controls help you manage risk and lock in gains automatically.",
  },
  {
    q: "Are there any additional fees?",
    a: "No additional fees beyond standard trading spreads and the 10% performance fee. There are no subscription fees or management charges.",
  },
  {
    q: "How are strategy providers vetted?",
    a: "All providers must maintain a minimum 3-month verified track record, pass risk management checks, and adhere to our maximum drawdown guidelines before being listed.",
  },
];

export default function CopyTradingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-56 pb-44 relative overflow-hidden">
        {/* Hero Visual Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
          <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
        </div>
        <div className="max-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Copy Trading</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-h1)] font-bold mt-4 mb-6"
          >
            Copy Trading — <span className="gradient-text">Make Trading Easy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto mb-8"
          >
            Mirror the strategies of proven traders automatically. With just 10% profit sharing paid every Monday,
            a maximum of 200 copiers per provider, and built-in take-profit and stop-loss controls, GIO4X Copy Trading
            makes professional forex trading accessible to everyone — no experience required.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex gap-4 justify-center">
            <Button href="/accounts">Start Copying</Button>
            <Button variant="secondary" href="#how-it-works">Learn More</Button>
          </motion.div>
        </div>
      </section>

      {/* Key Details */}
      <section className="pb-12">
        <div className="max-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyDetails.map((detail, i) => (
              <AnimateOnScroll key={detail.label} delay={i * 0.1}>
                <div className="glass-panel p-6 text-center">
                  <detail.icon className="w-8 h-8 text-[#29ABE2] mx-auto mb-3" />
                  <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">{detail.label}</p>
                  <p className="text-xl font-bold text-[#29ABE2] font-mono mb-2">{detail.value}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">{detail.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="How It Works" title="4 Simple Steps to Start Copy Trading" subtitle="Open Account, Complete Subscription, Subscribe to Provider, Monitor Portfolio — it is that easy." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.title} delay={i * 0.1}>
                <Card className="h-full text-center relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center text-white text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#29ABE2]" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{step.desc}</p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading eyebrow="Features" title="Why Copy Trade with GIO4X" subtitle="Automated trading, verified providers, adjustable allocation, and transparent profit sharing." />
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

      {/* Manual vs Copy Trading */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Comparison" title="Manual vs Copy Trading" subtitle="See how copy trading compares to trading on your own." />
          <AnimateOnScroll>
            <div className="glass-panel overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Aspect</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Manual</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-[#29ABE2]">Copy Trading</th>
                  </tr>
                </thead>
                <tbody>
                  {manualVsCopy.map((row) => (
                    <tr key={row.aspect} className="border-b border-[var(--color-border)] last:border-b-0">
                      <td className="px-6 py-3 text-sm font-medium">{row.aspect}</td>
                      <td className="px-6 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.manual}</td>
                      <td className="px-6 py-3 text-sm text-center text-[#29ABE2] font-medium">{row.copy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Become a Strategy Provider */}
      <section className="section-padding">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="For Traders" title="Become a Strategy Provider" />
          <AnimateOnScroll>
            <div className="glass-panel p-8 text-center">
              <h3 className="text-lg font-bold mb-3">Earn 10% of Profits Every Week</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                If you are an experienced trader with a proven track record, become a strategy provider on GIO4X.
                Earn 10% of the profits generated for your copiers, paid every Monday. With up to 200 copiers
                per provider, top traders can build a significant secondary income stream.
              </p>
              <ul className="space-y-2 text-left max-w-md mx-auto mb-6">
                {[
                  "Earn 10% performance fee on copier profits",
                  "Weekly payouts every Monday",
                  "Maximum 200 copiers per provider",
                  "Transparent performance metrics",
                  "Build your reputation and following",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/accounts">Apply as Strategy Provider</Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Copy Trading — Frequently Asked Questions" />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 0.05}>
                <div className="glass-panel overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="font-medium text-sm">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#29ABE2] shrink-0 ml-4 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-sm text-[var(--color-text-secondary)]">{faq.a}</p>
                  </motion.div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/accounts" className="text-sm text-[#29ABE2] hover:underline">Open a Trading Account &rarr;</Link>
            <Link href="/funding" className="text-sm text-[#29ABE2] hover:underline">Deposit & Withdrawal Methods &rarr;</Link>
            <Link href="/education" className="text-sm text-[#29ABE2] hover:underline">Learn Forex Trading &rarr;</Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
