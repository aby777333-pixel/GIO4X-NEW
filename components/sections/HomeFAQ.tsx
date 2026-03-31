"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

const faqs = [
  {
    q: "What is forex trading and how does it work?",
    a: "Forex (foreign exchange) trading is the buying and selling of currencies on the global market — the largest financial market in the world with over $7.5 trillion traded daily. Traders profit from fluctuations in exchange rates between currency pairs like EUR/USD, GBP/USD, and USD/JPY. With GIO4X, you can trade forex 24 hours a day, 5 days a week with leverage up to 500:1.",
  },
  {
    q: "Why should I choose GIO4X as my forex broker?",
    a: "GIO4X offers institutional-grade execution with average speeds of 12ms, spreads from 0.0 pips on ECN accounts, negative balance protection, and the advanced GIO4X Raptor trading platform. We serve traders in 50+ countries with 24/7 multi-lingual support, segregated client funds, and a full suite of trading tools including copy trading, PAMM accounts, and algorithmic trading support.",
  },
  {
    q: "What is the minimum deposit to start trading?",
    a: "You can open a Classic account with as little as $150, a Premium account with $500, or an ECN account with $2,000. All accounts support funding via credit/debit cards, bank wire, e-wallets (Skrill, Neteller), and cryptocurrency. Deposits are processed instantly for cards and e-wallets.",
  },
  {
    q: "Does GIO4X support copy trading and PAMM?",
    a: "Yes. Our copy trading feature lets you automatically mirror the trades of experienced strategy providers in real time. PAMM (Percentage Allocation Management Module) accounts allow professional money managers to trade on behalf of investors with transparent profit-sharing. Both features are available at no additional cost.",
  },
  {
    q: "Can I use automated trading robots (Expert Advisors)?",
    a: "Absolutely. GIO4X fully supports Expert Advisors (EAs), custom algorithms, and automated trading bots on the Raptor platform. Our Algorator tool helps you build, backtest, and deploy automated strategies, and GIO Bots provides pre-built algorithms for various market conditions.",
  },
  {
    q: "Is my money safe with GIO4X?",
    a: "Client fund security is our top priority. All client funds are held in segregated accounts at tier-1 banking institutions, completely separate from company operating funds. We provide negative balance protection on all accounts and employ bank-grade SSL encryption, two-factor authentication, and regular security audits.",
  },
];

// JSON-LD FAQ schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="section-padding bg-[var(--color-bg)]">
        <div className="max-site max-w-3xl">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">
                Frequently Asked Questions
              </span>
              <h2 className="text-[var(--text-h1)] font-bold mt-3 mb-4">
                Got Questions? <span className="gradient-text">We&apos;ve Got Answers.</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg">
                Everything you need to know about trading forex, CFDs, and crypto with GIO4X.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <AnimateOnScroll key={i} delay={i * 0.04}>
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >
                      <span className="font-semibold pr-4">{faq.q}</span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-5 h-5 text-[#29ABE2] flex-shrink-0" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-5 text-[var(--color-text-secondary)] leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          <AnimateOnScroll delay={0.3}>
            <div className="text-center mt-10">
              <a href="/faq" className="text-[#29ABE2] font-semibold hover:underline">
                View All FAQs &rarr;
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
