"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { Target, Eye, Globe, Shield, Zap, Heart, Users, TrendingUp, Building2, GraduationCap, Lock } from "lucide-react";
import Link from "next/link";

const timeline = [
  { year: "2012", title: "Founded", desc: "GIO4X was established with a clear vision: to bring institutional-grade forex trading to retail clients worldwide. From day one, our commitment to transparency and technology set us apart." },
  { year: "2014", title: "Global Expansion Begins", desc: "Opened support offices in India and began serving traders across Asia, the Middle East, and Africa." },
  { year: "2016", title: "41 Currency Pairs", desc: "Expanded our instrument offering to 41 currency pairs, covering majors, minors, and exotics with real-time rates and deep liquidity." },
  { year: "2018", title: "$1B Daily Volume", desc: "Surpassed US$1 billion in daily trading volume, establishing GIO4X as a serious force in global forex." },
  { year: "2019", title: "Raptor Platform Launch", desc: "Launched the first version of the GIO4X Raptor trading platform — our proprietary engine built for speed and precision." },
  { year: "2020", title: "ECN DMA NDD Accounts", desc: "Introduced ECN Direct Market Access with No Dealing Desk execution, offering spreads from 0.2 pips for professional traders." },
  { year: "2021", title: "Copy Trading & Education", desc: "Launched GIO4X Copy Trading and the GIO4X Academy, empowering both new and experienced traders." },
  { year: "2022", title: "Raptor 2.0 & Algo Trading", desc: "Major platform upgrade with algorithmic trading IDE, AI-powered analytics, and full EA/Robot support." },
  { year: "2023", title: "$5.55B Daily Volume", desc: "Reached US$5.55 billion in daily trades — a milestone reflecting the trust of our growing global trader community." },
  { year: "2024", title: "Institutional & White Label", desc: "Launched white-label and institutional liquidity services, expanding our B2B partnerships globally." },
  { year: "2025", title: "Next Chapter", desc: "Raptor 3.0, continued expansion into emerging markets, and deeper educational offerings across webinars, seminars, and Zoom classes." },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "We operate with full transparency. Client funds are segregated across reliable banks, ensuring your capital is always protected." },
  { icon: Zap, title: "Innovation", desc: "We invest heavily in technology — from our proprietary Raptor platform to algo trading tools — to deliver the best trading experience." },
  { icon: Heart, title: "Client First", desc: "Every decision starts with the question: how does this serve our traders? From beginners to professionals, your success is our priority." },
  { icon: Globe, title: "Global Reach", desc: "With offices in the UK, UAE, Singapore, South Africa, and India, we serve traders worldwide with localized support and services." },
];

const stats = [
  { value: "$5.55B", label: "Daily Trading Volume" },
  { value: "41", label: "Currency Pairs" },
  { value: "1:1000", label: "Max Leverage" },
  { value: "Since 2012", label: "Years of Operation" },
  { value: "<10ms", label: "Execution Speed" },
  { value: "24/5", label: "Support Available" },
];

const team = [
  { name: "Alexander Reid", role: "Chief Executive Officer", initials: "AR" },
  { name: "Sophia Chen", role: "Chief Technology Officer", initials: "SC" },
  { name: "Marcus Okonkwo", role: "Head of Trading", initials: "MO" },
  { name: "Elena Petrova", role: "Head of Compliance", initials: "EP" },
];

const globalPresence = [
  { region: "United Kingdom", city: "London", type: "Office" },
  { region: "UAE", city: "Dubai", type: "Office" },
  { region: "Singapore", city: "Singapore", type: "Office" },
  { region: "South Africa", city: "Johannesburg", type: "Office" },
  { region: "India", city: "Chennai, Coimbatore, Mumbai, Bangalore, Vellore, Kochi", type: "Support Offices" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-36 relative overflow-hidden">
        {/* Hero Visual Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
          <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
        </div>
        <div className="max-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">About GIO4X</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[var(--text-h1)] font-bold mt-4 mb-6">
            The Gentleman&apos;s <span className="gradient-text">Forex Broker</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto">
            Since 2012, GIO4X has been delivering institutional-grade trading conditions to retail and professional traders worldwide.
            With US$5.55 billion in daily trades, 41 currency pairs, and leverage up to 1:1000, we provide the tools,
            technology, and transparency that every serious trader deserves — regardless of account size.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16">
        <div className="max-site">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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

      {/* Founding Story */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-4xl">
          <SectionHeading eyebrow="Our Story" title="Trading Excellence Since 2012" />
          <AnimateOnScroll>
            <div className="glass-panel p-8 md:p-10">
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                GIO4X was founded in 2012 with a singular purpose: to bridge the gap between institutional and retail forex trading.
                We believed that every trader — whether a beginner learning the basics or a seasoned professional executing complex strategies —
                deserves access to prime liquidity, razor-thin spreads, and lightning-fast execution.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Over the past decade, we have grown from a focused startup to a globally recognized forex broker, now processing
                <strong className="text-[var(--color-text)]"> US$5.55 billion in daily trades</strong>. Our commitment to innovation led us to develop the
                <strong className="text-[var(--color-text)]"> GIO4X Raptor platform</strong> — a proprietary trading engine that supports
                <strong className="text-[var(--color-text)]"> 41 currency pairs</strong>, leverage up to
                <strong className="text-[var(--color-text)]"> 1:1000</strong> (ECN DMA NDD: 1:100), and is fully compatible with all Expert Advisors and Trading Robots.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Registered at Reg.No: 15807, Hamchako, Mutsamudu, Autonomous Island of Anjouan, Union of Comoros, with a support office at
                No 48 Immanual Complex, Thirunagar Katpadi, Vellore - 632006, Tamilnadu, India, GIO4X serves traders from offices in the
                UK, UAE, Singapore, South Africa, and across India.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimateOnScroll>
              <div className="glass-panel p-8 h-full">
                <Target className="w-10 h-10 text-[#29ABE2] mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  To democratize access to global financial markets by providing every trader — from
                  beginner to institutional — with the tools, technology, and conditions previously
                  reserved for the world&apos;s largest banks and hedge funds. We deliver real-time rates
                  across 41 currency pairs with prime liquidity and institutional-grade execution.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
              <div className="glass-panel p-8 h-full">
                <Eye className="w-10 h-10 text-[#29ABE2] mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  To become the world&apos;s most trusted and innovative forex broker — recognized for
                  our cutting-edge Raptor platform, uncompromising integrity, and the premium experience
                  we deliver to every client. We envision a trading ecosystem where transparency, education,
                  and technology work together to empower traders at every level.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why GIO4X - Key Differentiators */}
      <section id="why" className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="Why GIO4X" title="What Sets Us Apart" subtitle="From fund security to education, here is why traders across the globe choose GIO4X." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Lock, title: "Your Funds Are Safe", desc: "Client funds are fully segregated across reliable banks, kept separate from company operational accounts. Your capital is always protected and accessible." },
              { icon: TrendingUp, title: "Real-Time Rates & Prime Liquidity", desc: "Access real-time pricing across 41 currency pairs with deep institutional liquidity, ensuring tight spreads and minimal slippage on every trade." },
              { icon: Zap, title: "Leverage Up to 1:1000", desc: "Flexible leverage options up to 1:1000 on standard accounts and 1:100 on ECN DMA NDD accounts, allowing you to trade with the exposure that suits your strategy." },
              { icon: GraduationCap, title: "Education & Research", desc: "GIO4X Academy offers free webinars, live seminars, Zoom classes, and comprehensive research reports to help you sharpen your skills at every level." },
              { icon: Users, title: "Copy Trading", desc: "Mirror the strategies of proven traders automatically. Earn or copy with transparent profit sharing — no experience required to get started." },
              { icon: Building2, title: "Global Presence", desc: "Offices in the UK, UAE, Singapore, South Africa, and India (Chennai, Coimbatore, Mumbai, Bangalore, Vellore, Kochi) ensure localized support wherever you are." },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 0.08}>
                <div className="glass-panel p-6 h-full">
                  <item.icon className="w-10 h-10 text-[#29ABE2] mb-4" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading eyebrow="Values" title="What We Stand For" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center">
                    <v.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Journey" title="Our Story — From 2012 to Today" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <AnimateOnScroll key={item.year} delay={i * 0.08}>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-16 text-right">
                    <span className="font-mono font-bold text-[#29ABE2]">{item.year}</span>
                  </div>
                  <div className="w-px bg-[var(--color-border)] shrink-0" />
                  <div className="pb-6">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading eyebrow="Worldwide" title="Our Global Presence" subtitle="GIO4X operates from strategic locations across the world, ensuring localized support and seamless service for traders everywhere." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {globalPresence.map((loc, i) => (
              <AnimateOnScroll key={loc.region} delay={i * 0.1}>
                <div className="glass-panel p-6 text-center">
                  <Globe className="w-8 h-8 text-[#29ABE2] mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">{loc.region}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{loc.city}</p>
                  <p className="text-xs text-[#29ABE2] mt-1">{loc.type}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Education Offerings Highlight */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-4xl">
          <SectionHeading eyebrow="Education" title="Empowering Traders Through Knowledge" />
          <AnimateOnScroll>
            <div className="glass-panel p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-3">GIO4X Academy</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Our comprehensive education program is designed to help traders at every level build confidence
                    and sharpen their skills. All educational resources are free for GIO4X clients.
                  </p>
                  <Link href="/education" className="text-[#29ABE2] text-sm font-semibold hover:underline">
                    Explore GIO4X Academy &rarr;
                  </Link>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">What We Offer</h3>
                  <ul className="space-y-2">
                    {[
                      "Live Webinars with market experts",
                      "In-person Seminars across key cities",
                      "Interactive Zoom Classes for hands-on learning",
                      "Weekly Research Reports and market analysis",
                      "Comprehensive articles on technical and fundamental analysis",
                      "Platform tutorials for GIO4X Raptor",
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

      {/* Leadership */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading eyebrow="Leadership" title="Our Team" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {team.map((m, i) => (
              <AnimateOnScroll key={m.name} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center text-white text-xl font-bold">
                    {m.initials}
                  </div>
                  <h3 className="font-semibold text-sm">{m.name}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)]">{m.role}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Regulation & Compliance */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Regulation" title="Compliance & Registration" />
          <AnimateOnScroll>
            <div className="glass-panel p-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Registration Details</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    GIO4X is registered at Reg.No: 15807, Hamchako, Mutsamudu, Autonomous Island of Anjouan, Union of Comoros.
                    We adhere to strict compliance protocols to ensure the safety and security of our clients&apos; funds and data.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Fund Security</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    All client funds are held in segregated accounts across reliable banking institutions.
                    GIO4X never uses client funds for operational purposes. Your capital remains fully protected
                    and available for withdrawal at any time.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Support Office</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    No 48 Immanual Complex, Thirunagar Katpadi, Vellore - 632006, Tamilnadu, India
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABand />
    </>
  );
}
