"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { Badge } from "@/components/ui/Badge";
import {
  Target, Eye, Rocket, Globe, Users, TrendingUp, Shield, Zap
} from "lucide-react";

const stats = [
  { value: "$5.55B", label: "Daily Trading Volume" },
  { value: "100+", label: "Countries Served" },
  { value: "200+", label: "Trading Instruments" },
  { value: "24/5", label: "Global Support" },
];

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To democratize access to global financial markets by providing every trader — from beginner to institutional — with the tools, technology, and conditions previously reserved for the world's largest banks and hedge funds. We believe that transparent pricing, honest execution, and premium service should be the standard, not the exception.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To become the world's most trusted and innovative forex broker — recognized for our cutting-edge technology, uncompromising integrity, and the premium experience we deliver to every client. We envision a world where access to financial markets is truly democratized and every trader has a fair chance to succeed.",
  },
  {
    icon: Rocket,
    title: "Our Future",
    desc: "We are investing heavily in next-generation trading technology, including AI-powered analytics, algorithmic trading infrastructure, and seamless cross-device experiences. Our Raptor platform continues to evolve, and we are expanding into new markets, new asset classes, and new partnerships to deliver even greater value to our growing global community.",
  },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "Full transparency in pricing, execution, and operations. No hidden fees, no conflicts of interest." },
  { icon: Zap, title: "Innovation", desc: "We invest in technology that gives our traders a genuine competitive edge in the markets." },
  { icon: Users, title: "Client First", desc: "Every decision starts with the question: how does this serve our traders better?" },
  { icon: Globe, title: "Global Reach", desc: "Localized support and services in 100+ countries, with multi-language capabilities." },
  { icon: TrendingUp, title: "Excellence", desc: "We hold ourselves to institutional standards in everything from execution to customer service." },
  { icon: Rocket, title: "Growth", desc: "We grow alongside our traders, continuously expanding our offerings and improving our platform." },
];

export default function WhatWeArePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-64 pb-52 relative overflow-hidden">
        {/* Hero Visual Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
          <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
        </div>
        <div className="max-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="sky">Since 2012</Badge>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[var(--text-h1)] font-bold mt-4 mb-4">
            What We <span className="gradient-text">Are</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            GIO4X has been empowering traders worldwide since 2012. We combine institutional-grade infrastructure with a genuine commitment to every client&apos;s success.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-12">
        <div className="max-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <AnimateOnScroll key={s.label} delay={i * 0.08}>
                <div className="glass-panel p-5 text-center">
                  <p className="text-2xl font-bold text-[#29ABE2] font-mono">{s.value}</p>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">{s.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About Body */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          <AnimateOnScroll>
            <div className="glass-panel p-8 mb-10">
              <h2 className="text-xl font-bold mb-4">The GIO4X Story</h2>
              <div className="space-y-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  Founded in 2012, GIO4X was born from a simple observation: retail traders were being underserved. Institutional players had access to the best technology, the tightest spreads, and the fastest execution, while retail traders were left with sub-par platforms and opaque pricing.
                </p>
                <p>
                  We set out to change that. Over the past decade, GIO4X has grown from a small startup into a global brokerage serving traders in over 100 countries, processing $5.55 billion in daily trading volume across more than 200 instruments including forex, metals, CFDs, commodities, indices, and cryptocurrencies.
                </p>
                <p>
                  Our proprietary Raptor platform was built from the ground up to deliver the speed, reliability, and feature depth that serious traders demand. From advanced charting to algorithmic trading, from copy trading to professional money management tools, every feature is designed with one goal: giving our traders a competitive edge.
                </p>
                <p>
                  Behind the technology is a team of passionate professionals spanning trading, technology, compliance, and customer support. We are traders ourselves, and we understand what it takes to succeed in the markets. That shared experience drives everything we do.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission, Vision, Future */}
      <section className="section-padding">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Purpose" title="Mission, Vision & Future" />
          <div className="space-y-6">
            {pillars.map((pillar, i) => (
              <AnimateOnScroll key={pillar.title} delay={i * 0.1}>
                <div className="glass-panel p-6 flex gap-5">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{pillar.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="Values" title="What Drives Us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 0.08}>
                <div className="glass-panel p-6 text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center">
                    <v.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="People" title="Our Team" />
          <AnimateOnScroll>
            <div className="glass-panel p-8 text-center">
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                GIO4X is powered by a diverse, global team of professionals spanning trading, technology, compliance, and customer support. Our leadership brings decades of combined experience from tier-1 banks, fintech startups, and leading brokerages. We are united by a shared passion for the markets and a commitment to delivering the best possible trading experience for every client.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABand />
    </>
  );
}
