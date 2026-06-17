"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/constants";
import {
  Users, DollarSign, BarChart3, Headphones, Settings, Shield,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Multi-Account Management",
    desc: "Manage multiple client accounts from a single master interface. Execute block trades that are automatically allocated across sub-accounts based on predefined ratios.",
  },
  {
    icon: DollarSign,
    title: "Flexible Performance Fees",
    desc: "Set your own performance fee structure. Choose from high-water mark, hurdle rate, or percentage-based models. Fees are automatically calculated and distributed.",
  },
  {
    icon: BarChart3,
    title: "PAMM/MAM Solutions",
    desc: "Both PAMM (Percentage Allocation Management Module) and MAM (Multi-Account Manager) solutions available. Choose the model that best fits your management style and client base.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Every money manager receives a dedicated partnership manager, priority technical support, and direct access to our institutional desk for large order execution.",
  },
  {
    icon: Settings,
    title: "Advanced Reporting",
    desc: "Comprehensive real-time reporting dashboards showing performance metrics, drawdown analysis, client allocation breakdowns, and fee calculations for full transparency.",
  },
  {
    icon: Shield,
    title: "Risk Management Tools",
    desc: "Granular risk controls including per-account stop-loss limits, maximum drawdown thresholds, position size limits, and automated risk alerts to protect your clients' capital.",
  },
];

const benefits = [
  "No limit on the number of managed accounts",
  "Leverage up to 1:500 on managed accounts",
  "Spreads from 0.0 pips on ECN accounts",
  "Instant trade allocation across all sub-accounts",
  "Full audit trail and compliance reporting",
  "White-label client portal available",
  "Customizable fee structures and payment schedules",
  "API access for programmatic account management",
];

const steps = [
  { step: "01", title: "Apply", desc: "Complete the Money Manager application with your track record and strategy details." },
  { step: "02", title: "Verification", desc: "Our team reviews your application, verifies credentials, and assesses your trading history." },
  { step: "03", title: "Setup", desc: "We configure your master account, set fee structures, and integrate your preferred tools." },
  { step: "04", title: "Launch", desc: "Start managing client funds with full platform access, reporting, and dedicated support." },
];

export default function MoneyManagersPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Partners"
        image="raptor27.png"
        title={<>Money Managers <span className="gradient-text">Program</span></>}
        caption="Professional fund management infrastructure for experienced traders. Manage client capital with institutional-grade tools, transparent fee structures, and dedicated support."
        ctas={[
          { label: "Apply Now", href: SITE.signUpUrl },
          { label: "Talk to Our Team", href: "/contact", variant: "secondary" },
        ]}
      />

      {/* Features */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="Solutions" title="Built for Professional Managers" subtitle="Everything you need to manage client portfolios at scale." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimateOnScroll key={feature.title} delay={i * 0.08}>
                <div className="glass-panel p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{feature.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Advantages" title="Why Manage with GIO4X" />
          <AnimateOnScroll>
            <div className="glass-panel p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--color-text-secondary)]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Process" title="Getting Started" />
          <div className="space-y-6">
            {steps.map((item, i) => (
              <AnimateOnScroll key={item.step} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                  </div>
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
