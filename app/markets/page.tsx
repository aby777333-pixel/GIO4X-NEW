"use client";

import { PageHero } from "@/components/ui/PageHero";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { FOREX_PAIRS, METALS, CFDS, COMMODITIES, INDICES, CRYPTO, SITE } from "@/lib/constants";

const tabs = [
  {
    id: "forex",
    label: "Forex",
    data: FOREX_PAIRS,
    desc: "Trade 60+ currency pairs with spreads from 0.0 pips and up to 1:500 leverage. Access majors, minors, and exotics with deep interbank liquidity.",
  },
  {
    id: "metals",
    label: "Metals",
    data: METALS,
    desc: "Trade precious metals including gold, silver, platinum, and palladium against the US dollar with institutional-grade pricing.",
  },
  {
    id: "commodities",
    label: "Commodities",
    data: COMMODITIES,
    desc: "Access energy markets including Brent crude, WTI, and natural gas with tight spreads and flexible lot sizes.",
  },
  {
    id: "indices",
    label: "Indices",
    data: INDICES,
    desc: "Trade major global indices — Dow Jones, S&P 500, NASDAQ, FTSE, DAX, and Nikkei — with fractional lot sizes and low margin requirements.",
  },
  {
    id: "cfds",
    label: "CFDs",
    data: CFDS,
    desc: "Trade share CFDs on the world's largest companies. Go long or short with leverage and no ownership of the underlying asset.",
  },
  {
    id: "crypto",
    label: "Crypto",
    data: CRYPTO,
    desc: "Trade Bitcoin, Ethereum, Solana, and other major cryptocurrencies 24/7 with competitive leverage and fast execution.",
  },
] as const;

export default function MarketsPage() {
  const [activeTab, setActiveTab] = useState("forex");
  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Markets"
        image="gio4x7.png"
        title={<>Global Markets, <span className="gradient-text">One Account</span></>}
        caption="Trade forex, metals, commodities, indices, CFDs, and cryptocurrencies — all with competitive spreads and deep liquidity."
        ctas={[
          { label: "Open Live Account", href: SITE.signUpUrl },
          { label: "Try Demo Free", href: SITE.demoUrl, variant: "secondary" },
        ]}
      />

      {/* Tabs + Table */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-pill ${activeTab === tab.id ? "tab-pill--active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Category Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab + "-desc"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm text-[var(--color-text-secondary)] text-center max-w-2xl mx-auto mb-8"
            >
              {currentTab.desc}
            </motion.p>
          </AnimatePresence>

          {/* Table */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="glass-panel overflow-hidden"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Symbol</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)] hidden md:table-cell">Description</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Spread From</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)] hidden sm:table-cell">Leverage</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-[var(--color-text-secondary)] hidden sm:table-cell">Min Lot</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTab.data.map((item) => (
                    <tr key={item.symbol} className="border-b border-[var(--color-border)] last:border-b-0 hover:bg-[var(--color-glass-bg)] transition-colors">
                      <td className="px-6 py-4 font-mono font-semibold text-sm">{item.symbol}</td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)] hidden md:table-cell">{item.name}</td>
                      <td className="px-6 py-4 text-right font-mono text-sm text-[#29ABE2]">{item.spread}</td>
                      <td className="px-6 py-4 text-right font-mono text-sm text-[var(--color-text-secondary)] hidden sm:table-cell">{item.leverage}</td>
                      <td className="px-6 py-4 text-right font-mono text-sm text-[var(--color-text-secondary)] hidden sm:table-cell">{item.minLot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Trading Conditions */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading
            eyebrow="Conditions"
            title="Why Trade Markets with GIO4X"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "0.0", unit: "pips", label: "Spreads from" },
              { value: "1:500", unit: "", label: "Maximum Leverage" },
              { value: "<10", unit: "ms", label: "Execution Speed" },
              { value: "200+", unit: "", label: "Instruments" },
            ].map((stat, i) => (
              <AnimateOnScroll key={stat.label} delay={i * 0.1}>
                <div className="glass-panel p-8 text-center">
                  <p className="text-3xl font-bold text-[#29ABE2] font-mono">
                    {stat.value}<span className="text-lg">{stat.unit}</span>
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2">{stat.label}</p>
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
