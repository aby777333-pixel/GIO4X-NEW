"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import {
  Users, Building, Globe, DollarSign, BarChart3,
  Layers, Award, FileText, UserPlus, CheckCircle, Briefcase,
  ChevronDown, TrendingUp, Zap, Shield
} from "lucide-react";
import Link from "next/link";

const partnerTypes = [
  {
    icon: Users,
    title: "Introducing Broker (IB)",
    desc: "Maximise your earnings with industry-leading IB rebate rates. Refer clients and earn competitive commissions on every trade they make. Access marketing materials, real-time tracking dashboards, and dedicated partner support.",
    features: ["Industry-leading rebate rates", "Real-time rebate tracking", "Multi-tier IB/sub-IB structure", "Fast transparent payouts", "Customizable rebate plans", "Dedicated IB Portal", "Daily payouts available", "Marketing resources provided"],
  },
  {
    icon: Building,
    title: "White Label",
    desc: "Launch your own branded forex brokerage powered by GIO4X infrastructure. Full technology stack including the Raptor platform, deep liquidity, back-office support, and regulatory guidance.",
    features: ["Your brand, our technology", "Full Raptor platform", "Custom branding", "Regulatory guidance", "Dedicated tech support", "Deep liquidity access", "Back-office management", "Revenue sharing model"],
  },
  {
    icon: Globe,
    title: "Affiliate Program",
    desc: "Promote GIO4X through your website, social media, or content channels. Earn competitive CPA or revenue share on every qualified lead you send our way.",
    features: ["Up to $800 CPA", "Revenue share option", "Custom tracking links", "Real-time analytics", "30-day cookie window", "Marketing creatives", "Dedicated affiliate manager", "Monthly performance bonuses"],
  },
];

const stats = [
  { value: "$10M+", label: "Paid to Partners" },
  { value: "500+", label: "Active Partners" },
  { value: "50+", label: "Countries" },
  { value: "Daily", label: "Payouts Available" },
];

const ibBenefits = [
  { icon: DollarSign, title: "Industry-Leading Rebates", desc: "Earn the highest rebate rates in the forex industry. Our customizable rebate plans let you structure commissions that work for your business model." },
  { icon: BarChart3, title: "Real-Time Rebate Tracking", desc: "Monitor your earnings, client activity, and rebate balances in real time through the dedicated IB Portal. Full transparency on every transaction." },
  { icon: Layers, title: "Multi-Tier IB/Sub-IB Structure", desc: "Build your own network of sub-IBs and earn rebates on their client activity too. Unlimited tiers mean unlimited earning potential." },
  { icon: Zap, title: "Fast Transparent Payouts", desc: "Daily payouts with instant withdrawals available. No hidden fees, no delays — your commissions are always accessible." },
  { icon: Shield, title: "Partner Loyalty Program", desc: "Quarterly rewards and bonuses for top-performing partners. The more you grow, the more you earn with our tiered loyalty structure." },
  { icon: TrendingUp, title: "Dedicated IB Portal", desc: "Track rebate balances, view your top customers, monitor client trading activity, and access marketing resources — all from one powerful dashboard." },
];

const ibSteps = [
  { icon: FileText, step: "1", title: "Apply", desc: "Fill out the IB application form with your business details and experience. Applications are reviewed within 24 hours." },
  { icon: CheckCircle, step: "2", title: "Verify", desc: "Submit required documentation for verification. Our compliance team will review and approve your application quickly." },
  { icon: UserPlus, step: "3", title: "Onboarding", desc: "Get onboarded with a dedicated partner manager. Receive your unique referral links, marketing materials, and IB Portal access." },
  { icon: Briefcase, step: "4", title: "Start Earning", desc: "Begin referring clients and watch your commissions grow. Daily payouts, instant withdrawals, and full transparency on every trade." },
];

const faqs = [
  {
    q: "How are IB rebates calculated?",
    a: "Rebates are calculated per lot traded by your referred clients. The exact rate depends on your customized rebate plan, which is agreed upon during onboarding. Higher volume partners earn higher rates.",
  },
  {
    q: "When do I get paid?",
    a: "IB payouts are available daily with instant withdrawal options. You can track your rebate balance in real time through the IB Portal and withdraw at any time.",
  },
  {
    q: "Can I have sub-IBs under my account?",
    a: "Yes. GIO4X supports a multi-tier IB/sub-IB structure. You earn rebates not only on your direct clients but also on the clients referred by your sub-IBs, with unlimited tier depth.",
  },
  {
    q: "What marketing resources are provided?",
    a: "We provide a full suite of marketing materials including banners, landing pages, email templates, educational content, and branded materials. Custom resources can also be created upon request.",
  },
  {
    q: "Is there a minimum referral requirement?",
    a: "No minimum referral requirement. Whether you refer 1 client or 1,000, you earn commissions on every trade. The Partner Loyalty Program rewards higher volumes with additional bonuses.",
  },
];

export default function PartnersPage() {
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
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Partnership</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[var(--text-h1)] font-bold mt-4 mb-6">
            Maximise Your Earnings: <span className="gradient-text">Top Rebates for Introducing Brokers</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto">
            Partner with GIO4X and unlock industry-leading rebate rates, real-time tracking, multi-tier IB structures,
            and daily payouts. Whether you are an Introducing Broker, affiliate, or looking to launch your own brand,
            we have a partnership model designed for your success.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16">
        <div className="max-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimateOnScroll key={s.label} delay={i * 0.1}>
                <div className="glass-panel p-6 text-center">
                  <p className="text-2xl font-bold text-[#29ABE2] font-mono">{s.value}</p>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">{s.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="Programs" title="Partnership Models" subtitle="Three ways to grow your business with GIO4X." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.15}>
                <Card className="h-full flex flex-col">
                  <div className="w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center">
                    <p.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">{p.desc}</p>
                  <ul className="space-y-2 flex-1 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]" />{f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="secondary" href="/contact">Apply Now</Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* IB Benefits Deep Dive */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading eyebrow="IB Program" title="Why Top IBs Choose GIO4X" subtitle="Industry-leading rebates, transparent payouts, and a dedicated portal to manage your business." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ibBenefits.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 0.08}>
                <Card className="h-full">
                  <b.icon className="w-8 h-8 text-[#29ABE2] mb-3" />
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{b.desc}</p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* IB Onboarding Steps */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="Get Started" title="Become an IB in 4 Steps" subtitle="Apply, verify, onboard, and start earning — it is that simple." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ibSteps.map((s, i) => (
              <AnimateOnScroll key={s.step} delay={i * 0.12}>
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
        </div>
      </section>

      {/* Partner Loyalty Program */}
      <section className="section-padding">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Loyalty" title="Partner Loyalty Program" />
          <AnimateOnScroll>
            <div className="glass-panel p-8 text-center">
              <Award className="w-12 h-12 text-[#29ABE2] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Quarterly Rewards for Top Partners</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Our Partner Loyalty Program rewards your growth with quarterly bonuses, exclusive perks, and
                priority support. The more clients you refer and the more volume they generate, the higher
                your reward tier — unlocking additional rebate rates, dedicated resources, and VIP event invitations.
              </p>
              <ul className="space-y-2 text-left max-w-md mx-auto mb-6">
                {[
                  "Tiered quarterly bonuses based on volume",
                  "Exclusive rebate rate increases",
                  "VIP event invitations",
                  "Priority partner support",
                  "Custom marketing resources",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/contact">Join the Loyalty Program</Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Partner Program — Frequently Asked Questions" />
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
            <Link href="/accounts" className="text-sm text-[#29ABE2] hover:underline">View Account Types &rarr;</Link>
            <Link href="/about" className="text-sm text-[#29ABE2] hover:underline">About GIO4X &rarr;</Link>
            <Link href="/funding" className="text-sm text-[#29ABE2] hover:underline">Funding Methods &rarr;</Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
