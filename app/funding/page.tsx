"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { CreditCard, Building2, Wallet, Bitcoin, Shield, Clock, Check, Globe, AlertTriangle } from "lucide-react";
import Link from "next/link";

const acceptedCurrencies = ["AUD", "USD", "GBP", "EUR", "AED", "SGD", "CAD", "CHF", "HKD", "INR", "NZD"];

const depositMethods = [
  { icon: CreditCard, name: "Credit / Debit Card", fee: "Free", time: "Instant", min: "$50", currencies: "USD, EUR, GBP, AED, INR" },
  { icon: Building2, name: "Bank Wire Transfer", fee: "Free", time: "1-3 days", min: "$100", currencies: "All accepted currencies" },
  { icon: Wallet, name: "Skrill", fee: "Free", time: "Instant", min: "$50", currencies: "USD, EUR, GBP" },
  { icon: Wallet, name: "Neteller", fee: "Free", time: "Instant", min: "$50", currencies: "USD, EUR, GBP" },
  { icon: Bitcoin, name: "Crypto (BTC/ETH/USDT)", fee: "Free", time: "10-60 min", min: "$50 equivalent", currencies: "BTC, ETH, USDT" },
];

const withdrawalMethods = [
  { method: "Credit / Debit Card", fee: "Free", time: "1-3 business days", min: "$20" },
  { method: "Bank Wire Transfer", fee: "$25", time: "1-2 business days", min: "$100" },
  { method: "Skrill / Neteller", fee: "Free", time: "Within 24 hours", min: "$20" },
  { method: "Crypto", fee: "Network fee only", time: "Within 24 hours", min: "$50 equivalent" },
];

export default function FundingPage() {
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
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Funding</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[var(--text-h1)] font-bold mt-4 mb-6">
            Deposits & <span className="gradient-text">Withdrawals</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto">
            Fund your GIO4X trading account quickly and securely. We accept 11 currencies, charge no internal
            deposit fees, and process withdrawals within 1-2 business days. Your funds are always held in
            segregated accounts across reliable banks.
          </motion.p>
        </div>
      </section>

      {/* Key Points */}
      <section className="pb-16">
        <div className="max-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Segregated Accounts", desc: "Client funds held separately in reliable banks, never used for company operations" },
              { icon: Clock, title: "Fast Processing", desc: "Instant deposits, 1-2 business day withdrawal processing" },
              { icon: CreditCard, title: "Zero Deposit Fees", desc: "No internal deposit fees charged by GIO4X on any payment method" },
            ].map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.1}>
                <div className="glass-panel p-6 text-center">
                  <p.icon className="w-10 h-10 text-[#29ABE2] mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Accepted Currencies */}
      <section className="pb-12">
        <div className="max-site">
          <AnimateOnScroll>
            <div className="glass-panel p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-[#29ABE2]" />
                <h3 className="font-semibold">Accepted Currencies</h3>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                GIO4X accepts deposits in 11 major currencies. Fund your account in the currency most convenient for you.
              </p>
              <div className="flex flex-wrap gap-2">
                {acceptedCurrencies.map((currency) => (
                  <span key={currency} className="px-3 py-1.5 text-sm font-mono font-semibold rounded-lg bg-[rgba(41,171,226,0.1)] text-[#29ABE2]">
                    {currency}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Deposit Methods */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="Deposits" title="Deposit Methods" subtitle="Multiple secure deposit methods with zero internal fees. Fund your account instantly and start trading." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {depositMethods.map((m, i) => (
              <AnimateOnScroll key={m.name} delay={i * 0.08}>
                <Card className="h-full">
                  <m.icon className="w-8 h-8 text-[#29ABE2] mb-3" />
                  <h3 className="font-semibold mb-4">{m.name}</h3>
                  <div className="space-y-2 text-sm">
                    <Row label="Fee" value={m.fee} />
                    <Row label="Processing" value={m.time} />
                    <Row label="Minimum" value={m.min} />
                    <Row label="Currencies" value={m.currencies} />
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Withdrawal Methods */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading eyebrow="Withdrawals" title="Withdrawal Methods" subtitle="Withdrawals are processed within 1-2 business days. Forms submitted before 7 AM IST are processed the same day." />
          <AnimateOnScroll>
            <div className="glass-panel overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Method</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Fee</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Processing Time</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Minimum</th>
                  </tr>
                </thead>
                <tbody>
                  {withdrawalMethods.map((w) => (
                    <tr key={w.method} className="border-b border-[var(--color-border)] last:border-b-0">
                      <td className="px-6 py-4 text-sm font-medium">{w.method}</td>
                      <td className="px-6 py-4 text-right text-sm text-[var(--color-text-secondary)]">{w.fee}</td>
                      <td className="px-6 py-4 text-right text-sm text-[var(--color-text-secondary)]">{w.time}</td>
                      <td className="px-6 py-4 text-right text-sm font-mono text-[#29ABE2]">{w.min}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Processing Details */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Processing" title="Deposit & Withdrawal Processing Details" />
          <AnimateOnScroll>
            <div className="glass-panel p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Same-Day Processing</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    Withdrawal forms submitted before <strong className="text-[var(--color-text)]">7:00 AM IST</strong> are processed
                    on the same business day. Forms submitted after this cutoff are processed on the next business day.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Standard Processing Time</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    Most withdrawals are processed within <strong className="text-[var(--color-text)]">1-2 business days</strong>.
                    Bank wire transfers may take an additional 1-3 days for the funds to arrive at your bank account, depending on your bank.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">No Internal Deposit Fees</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    GIO4X does not charge any internal fees on deposits. However, your payment provider or bank may apply their own
                    charges for international transfers.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section-padding">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Important" title="Funding Guidelines" />
          <div className="space-y-4">
            {[
              "All deposits must come from accounts in the client's name.",
              "First withdrawals require full identity verification (KYC).",
              "Withdrawals are processed to the same method used for deposit, up to the deposited amount.",
              "Profits above the deposited amount can be withdrawn via bank wire or e-wallet.",
              "Third-party transactions are strictly restricted — deposits and withdrawals must be in the account holder's name only.",
              "GIO4X may request additional documentation for compliance purposes.",
              "Processing times are estimates and may vary during holidays or high-volume periods.",
              "Forms submitted before 7 AM IST are processed the same business day.",
            ].map((note, i) => (
              <AnimateOnScroll key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#29ABE2] shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--color-text-secondary)]">{note}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Restriction Notice */}
      <section className="pb-16">
        <div className="max-site max-w-3xl">
          <AnimateOnScroll>
            <div className="glass-panel p-6 border-amber-500/30">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Third-Party Transaction Restrictions</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    For the security of our clients, GIO4X does not accept third-party deposits or process third-party withdrawals.
                    All transactions must be made from accounts held in the same name as the GIO4X trading account. This policy
                    is in place to comply with anti-money laundering (AML) regulations and to protect your funds.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Internal links */}
      <section className="pb-16">
        <div className="max-site max-w-3xl">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/accounts" className="text-sm text-[#29ABE2] hover:underline">View Account Types &rarr;</Link>
            <Link href="/about" className="text-sm text-[#29ABE2] hover:underline">About GIO4X &rarr;</Link>
            <Link href="/platforms" className="text-sm text-[#29ABE2] hover:underline">GIO4X Raptor Platform &rarr;</Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-[var(--color-border)] last:border-b-0">
      <span className="text-[var(--color-text-secondary)]">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
