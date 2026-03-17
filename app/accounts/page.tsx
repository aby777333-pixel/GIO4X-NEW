"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { ACCOUNT_TYPES } from "@/lib/constants";
import { Check, X, ChevronDown, ChevronUp, FileText, Upload, CreditCard, Bot, BarChart3, Droplets, Star } from "lucide-react";
import Link from "next/link";

const bestForColors: Record<string, string> = {
  Beginners: "bg-emerald-500/20 text-emerald-400",
  Experts: "bg-[#29ABE2]/20 text-[#29ABE2]",
  Professionals: "bg-purple-500/20 text-purple-400",
};

const fullFeatures = [
  { key: "minDeposit", label: "Minimum Deposit" },
  { key: "spreadFrom", label: "Spread From" },
  { key: "leverage", label: "Max Leverage" },
  { key: "commission", label: "Commission" },
  { key: "marginCall", label: "Margin Call" },
  { key: "stopOut", label: "Stop Out" },
  { key: "minTrade", label: "Minimum Trade Size" },
  { key: "swap", label: "Swap" },
  { key: "bestFor", label: "Best For" },
  { key: "platforms", label: "Platforms", all: "Raptor, Web, Mobile" },
  { key: "instruments", label: "Instruments", all: "All 200+" },
  { key: "execution", label: "Execution Type", all: "Market Execution" },
  { key: "hedging", label: "Hedging Allowed", all: true },
  { key: "scalping", label: "Scalping Allowed", all: true },
  { key: "ea", label: "Expert Advisors & Robots", all: true },
  { key: "accountManager", label: "Account Manager" },
  { key: "prioritySupport", label: "Priority Support" },
  { key: "freeVPS", label: "Free VPS", standard: false, pro: true, vip: true },
  { key: "marketAnalysis", label: "Daily Market Analysis", standard: false, pro: true, vip: true },
  { key: "exclusiveEvents", label: "Exclusive Events", standard: false, pro: false, vip: true },
] as const;

const highlights = [
  { icon: Bot, title: "EA & Robot Friendly", desc: "All GIO4X accounts are fully adaptable to Expert Advisors and Trading Robots. You can use ours or bring your own." },
  { icon: BarChart3, title: "Advanced Charting Tools", desc: "100+ technical indicators, 9 timeframes, and professional-grade drawing tools across all account types." },
  { icon: Droplets, title: "Prime Liquidity", desc: "Deep institutional liquidity from top-tier providers ensures tight spreads and minimal slippage on every trade." },
  { icon: Star, title: "Margin Call: 100% | Stop Out: 30%", desc: "Consistent risk management across all account types. Margin call at 100% equity and stop out at 30% to protect your capital." },
];

const faqs = [
  {
    q: "How do I open a live trading account?",
    a: "Click 'Open Account' and complete the online application. You'll need to provide identification documents and proof of address. The process typically takes 1-2 business days for full verification.",
  },
  {
    q: "What documents do I need?",
    a: "Government-issued photo ID (passport or national ID) and a recent proof of address (utility bill or bank statement dated within the last 3 months).",
  },
  {
    q: "Can I have multiple accounts?",
    a: "Yes, you can open multiple accounts across different account types. Each account can have a different base currency and leverage setting.",
  },
  {
    q: "How do I upgrade my account?",
    a: "Contact your account manager or our support team to request an upgrade. You'll need to meet the minimum deposit requirement for the new account tier.",
  },
  {
    q: "Is there a demo account?",
    a: "Yes, we offer free demo accounts with $100,000 virtual funds. Demo accounts expire after 30 days but can be renewed upon request.",
  },
  {
    q: "What is the difference between Classic and ECN accounts?",
    a: "Classic accounts are designed for beginners with a low $150 minimum deposit and spreads from 2.5 pips with no commission. ECN accounts are for professionals, offering raw spreads from 0.2 pips with a $3.50/lot commission and Direct Market Access (DMA) with No Dealing Desk (NDD) execution.",
  },
  {
    q: "Are all accounts compatible with Expert Advisors?",
    a: "Yes, all GIO4X account types — Classic, Premium, and ECN — are fully adaptable to all Expert Advisors and Trading Robots. You can use third-party EAs or choose from our proprietary GIO Bots.",
  },
  {
    q: "What leverage is available?",
    a: "Classic and Premium accounts offer leverage up to 1:500. ECN accounts offer leverage up to 1:500 as well. Standard leverage ranges from 1:300 to 1:500 depending on the instrument. GIO4X also offers leverage up to 1:1000 on select configurations.",
  },
  {
    q: "Is the ECN account swap-free?",
    a: "Yes, the ECN account is swap-free by default, making it suitable for traders who prefer Islamic/swap-free trading conditions. Classic and Premium accounts include swaps but swap-free options are available upon request.",
  },
  {
    q: "What are the margin call and stop out levels?",
    a: "All GIO4X accounts have a consistent margin call level at 100% and stop out level at 30%. This protects your account from excessive losses while giving your trades room to breathe.",
  },
];

export default function AccountsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Account Types</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[var(--text-h1)] font-bold mt-4 mb-6">
            Find Your <span className="gradient-text">Perfect Account</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto">
            Three account tiers designed for every level of trader — from beginners exploring the forex markets
            to professionals demanding raw ECN spreads and Direct Market Access. All accounts support Expert Advisors
            and Trading Robots, with prime liquidity and advanced charting tools included.
          </motion.p>
        </div>
      </section>

      {/* Account Cards */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ACCOUNT_TYPES.map((account, i) => (
              <AnimateOnScroll key={account.name} delay={i * 0.15}>
                <Card glow={account.highlighted} className={`h-full flex flex-col ${account.highlighted ? "border-[#29ABE2]/50 ring-1 ring-[#29ABE2]/20" : ""}`}>
                  {account.highlighted && (
                    <div className="text-center -mt-3 mb-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-[#29ABE2] text-white rounded-full">Most Popular</span>
                    </div>
                  )}
                  {/* Best For Badge */}
                  <div className="mb-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${bestForColors[account.bestFor] || "bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)]"}`}>
                      Best for {account.bestFor}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{account.name}</h3>
                  <p className="text-3xl font-bold text-[#29ABE2] font-mono mb-2">{account.minDeposit}</p>
                  <p className="text-xs text-[var(--color-text-secondary)] mb-6">Minimum Deposit</p>

                  <div className="space-y-3 flex-1 mb-6">
                    <Row label="Spread from" value={account.spreadFrom} />
                    <Row label="Leverage" value={account.leverage} />
                    <Row label="Commission" value={account.commission} />
                    <Row label="Margin Call" value={account.marginCall} />
                    <Row label="Stop Out" value={account.stopOut} />
                    <Row label="Min Trade" value={account.minTrade + " lots"} />
                    <Row label="Swap" value={account.swap ? "Yes" : "Swap-Free"} />
                    <Row label="EAs & Robots" value={<Check className="w-4 h-4 text-emerald-400" />} />
                    <Row label="Account Manager" value={account.accountManager ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-[var(--color-text-secondary)]" />} />
                    <Row label="Priority Support" value={account.prioritySupport ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-[var(--color-text-secondary)]" />} />
                  </div>
                  <Button variant={account.highlighted ? "primary" : "secondary"} className="w-full">
                    Open {account.name} Account
                  </Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Account Highlights */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading eyebrow="Included" title="All Accounts Come With" subtitle="Every GIO4X account is packed with professional-grade features to help you trade at your best." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <AnimateOnScroll key={h.title} delay={i * 0.1}>
                <div className="glass-panel p-6 text-center h-full">
                  <h.icon className="w-10 h-10 text-[#29ABE2] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-sm">{h.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{h.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Full Feature Matrix */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="Compare" title="Full Feature Comparison" subtitle="See every detail across our Classic, Premium, and ECN accounts side by side." />
          <AnimateOnScroll>
            <div className="glass-panel overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left px-6 py-4 text-sm font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold">Classic</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-[#29ABE2]">Premium</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold">ECN</th>
                  </tr>
                </thead>
                <tbody>
                  {fullFeatures.map((f) => (
                    <tr key={f.key} className="border-b border-[var(--color-border)] last:border-b-0">
                      <td className="px-6 py-3 text-sm">{f.label}</td>
                      <td className="px-6 py-3 text-center text-sm">{getFeatureValue(f, "standard")}</td>
                      <td className="px-6 py-3 text-center text-sm">{getFeatureValue(f, "pro")}</td>
                      <td className="px-6 py-3 text-center text-sm">{getFeatureValue(f, "vip")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Account Opening Process */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading eyebrow="Get Started" title="Open Your Account in 3 Steps" subtitle="Getting started with GIO4X is quick and straightforward. Begin trading in minutes." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: FileText, step: "1", title: "Register", desc: "Complete the online application form with your personal details. Choose from Classic, Premium, or ECN account." },
              { icon: Upload, step: "2", title: "Verify", desc: "Upload your ID and proof of address for KYC verification. Verification typically takes 1-2 business days." },
              { icon: CreditCard, step: "3", title: "Fund & Trade", desc: "Deposit funds via card, bank transfer, or e-wallet. Start trading 41 currency pairs with leverage up to 1:1000." },
            ].map((s, i) => (
              <AnimateOnScroll key={s.step} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center">
                    <s.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xs text-[#29ABE2] font-semibold mb-2">STEP {s.step}</div>
                  <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link href="/funding" className="text-sm text-[#29ABE2] hover:underline">View Funding Methods &rarr;</Link>
            <Link href="/platforms" className="text-sm text-[#29ABE2] hover:underline">Explore GIO4X Raptor Platform &rarr;</Link>
            <Link href="/copy-trading" className="text-sm text-[#29ABE2] hover:underline">Learn About Copy Trading &rarr;</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know about GIO4X trading accounts." />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 0.05}>
                <div className="glass-panel overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium pr-4">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 shrink-0 text-[#29ABE2]" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="px-5 pb-5">
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
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

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[var(--color-border)]">
      <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

function getFeatureValue(feature: (typeof fullFeatures)[number], tier: "standard" | "pro" | "vip"): React.ReactNode {
  const accountIdx = tier === "standard" ? 0 : tier === "pro" ? 1 : 2;
  const account = ACCOUNT_TYPES[accountIdx];

  if ("all" in feature) {
    if (typeof feature.all === "boolean") return <Check className="w-4 h-4 text-emerald-400 mx-auto" />;
    return <span className="text-[var(--color-text-secondary)]">{feature.all}</span>;
  }

  if (feature.key in account) {
    const val = account[feature.key as keyof typeof account];
    if (typeof val === "boolean") {
      return val ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-[var(--color-text-secondary)] mx-auto" />;
    }
    return <span>{String(val)}</span>;
  }

  if ("standard" in feature) {
    const val = feature[tier as keyof typeof feature];
    if (typeof val === "boolean") {
      return val ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-[var(--color-text-secondary)] mx-auto" />;
    }
  }

  return <span>—</span>;
}
