"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/constants";
import {
  Shield, Landmark, ShieldCheck, Scale, Lock, CheckCircle
} from "lucide-react";

const securityFeatures = [
  {
    icon: Landmark,
    title: "Segregated Accounts",
    desc: "All client funds are held in segregated accounts at tier-1 banks, completely separate from GIO4X's operational funds. This means your money is ring-fenced and cannot be used for any company purpose. In the unlikely event of insolvency, your funds remain protected and identifiable as your property.",
  },
  {
    icon: Shield,
    title: "Tier-1 Banking Partners",
    desc: "We bank exclusively with the world's leading financial institutions. Our banking partners are among the safest and most well-capitalized banks globally, providing an additional layer of security and stability for your deposited funds.",
  },
  {
    icon: ShieldCheck,
    title: "Negative Balance Protection",
    desc: "Your account can never go below zero. In the event of extreme market volatility that causes your account to enter a negative balance, GIO4X will absorb the loss and reset your balance to zero. You will never owe us more than you have deposited.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    desc: "GIO4X operates under strict regulatory oversight and adheres to all applicable financial regulations. We undergo regular audits, maintain adequate capital reserves well above minimum requirements, and follow best practices for client fund protection and corporate governance.",
  },
  {
    icon: Lock,
    title: "Fund Insurance",
    desc: "In addition to segregated accounts, GIO4X maintains professional indemnity insurance to provide an extra layer of protection for client funds. This insurance covers events beyond our control, adding another safeguard to your capital.",
  },
];

const trustIndicators = [
  { value: "$500M+", label: "Client Funds Protected" },
  { value: "Tier-1", label: "Banking Partners Only" },
  { value: "100%", label: "Fund Segregation" },
  { value: "24/5", label: "Monitoring & Oversight" },
];

export default function ClientFundSecurityPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Security"
        image="raptor24.png"
        title={<>Client Fund <span className="gradient-text">Security</span></>}
        caption="Your capital is protected by multiple layers of security, from segregated banking to negative balance protection."
        ctas={[
          { label: "Open an Account", href: SITE.signUpUrl },
          { label: "Contact Us", href: "/contact", variant: "secondary" },
        ]}
      />

      {/* Trust Indicators */}
      <section className="pb-12">
        <div className="max-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustIndicators.map((item, i) => (
              <AnimateOnScroll key={item.label} delay={i * 0.08}>
                <div className="glass-panel p-5 text-center">
                  <p className="text-2xl font-bold text-[#29ABE2] font-mono">{item.value}</p>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">{item.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="Protection" title="How We Safeguard Your Funds" subtitle="Every layer of our infrastructure is designed with one goal: protecting your capital." />
          <div className="space-y-6 max-w-3xl mx-auto">
            {securityFeatures.map((feature, i) => (
              <AnimateOnScroll key={feature.title} delay={i * 0.1}>
                <div className="glass-panel p-6 flex gap-5">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Commitment" title="Our Security Promise" />
          <AnimateOnScroll>
            <div className="glass-panel p-8">
              <div className="space-y-4">
                {[
                  "Client funds are never used for hedging, operations, or any company activity",
                  "Daily reconciliation of all client accounts with banking records",
                  "Independent external audits conducted regularly",
                  "Real-time risk monitoring systems operating 24/5",
                  "Strict internal controls and compliance frameworks",
                  "Negative balance protection on all retail accounts",
                  "Professional indemnity insurance coverage",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--color-text-secondary)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABand />
    </>
  );
}
