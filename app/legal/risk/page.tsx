"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    num: 1,
    title: "What Are CFDs",
    content:
      "CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 75% of retail client accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. A Contract for Difference (CFD) is a derivative financial instrument that allows traders to speculate on price movements of underlying assets without owning them. When trading CFDs, you enter into a contract with GIO4X to exchange the difference in the value of an asset from when the contract is opened to when it is closed.",
  },
  {
    num: 2,
    title: "No Investment Advice",
    content:
      "GIO4X does not provide investment advice. Any information provided by GIO4X is for general informational purposes only and should not be construed as investment advice. You should seek independent financial advice before making any investment decisions. GIO4X employees are not authorized to provide personal investment recommendations. Market analysis, research reports, and educational materials are provided for informational purposes only and do not constitute a recommendation to buy or sell any financial instrument.",
  },
  {
    num: 3,
    title: "Product Appropriateness",
    content:
      "CFDs may not be suitable for all investors. Before trading, you should carefully consider your investment objectives, level of experience, and risk appetite. You should not invest money that you cannot afford to lose. You should be aware of all the risks associated with CFD trading and seek advice from an independent financial advisor if you have any doubts.",
  },
  {
    num: 4,
    title: "General Risks of CFD Trading",
    content:
      "The value of CFDs can fluctuate significantly due to market conditions. Past performance is not indicative of future results. You may sustain a total loss of your initial investment and may be required to deposit additional funds to maintain your position. CFD trading involves significant risk of loss. The high degree of leverage that is often obtainable in CFD trading can work against you as well as for you. Currency rates may fluctuate significantly over short periods.",
  },
  {
    num: 5,
    title: "Short Selling Risks",
    content:
      "Short selling involves selling an asset that you do not own in the expectation that the price will fall. If the price rises instead, losses are theoretically unlimited. Short selling carries specific risks including the obligation to buy back at a higher price, potential for unlimited losses, and the risk of short squeezes where rapid price increases force short sellers to cover positions.",
  },
  {
    num: 6,
    title: "Currency Risk",
    content:
      "If you trade in a currency other than your base currency, exchange rate fluctuations may affect your profits and losses. Currency risk applies to all transactions denominated in a currency different from your account's base currency.",
  },
  {
    num: 7,
    title: "Volatility Risk",
    content:
      "Financial markets can be extremely volatile. Prices can change rapidly and significantly, particularly during economic announcements, geopolitical events, and periods of market stress. Volatility can result in significant gains or losses in a very short period.",
  },
  {
    num: 8,
    title: "Gapping Risk",
    content:
      "Prices may gap between trading sessions or during high-impact news events. A gap occurs when the market price moves significantly between two consecutive trading periods without any trading occurring in between. Stop-loss orders may not be executed at the specified price during gap events, resulting in greater losses than anticipated.",
  },
  {
    num: 9,
    title: "Leverage and Margin",
    content:
      "Trading on margin means that you are borrowing money to trade, which amplifies both potential gains and losses. A small adverse market movement can result in substantial losses that exceed your initial deposit. Margin calls may require you to deposit additional funds at short notice. If you fail to meet a margin call, your positions may be liquidated at a loss. GIO4X offers leverage up to 500:1 \u2014 while this increases buying power, it proportionally increases risk.",
  },
  {
    num: 10,
    title: "Electronic Trading Risks",
    content:
      "Trading via electronic platforms carries risks including system failures, communication failures, internet connectivity issues, and software malfunctions. GIO4X is not liable for losses resulting from system failures or delays in order execution due to technical issues. During periods of high market activity, you may experience delays in order execution.",
  },
  {
    num: 11,
    title: "Corporate Actions",
    content:
      "If you hold CFDs on stocks or indices, corporate actions such as dividends, stock splits, mergers, or delistings may affect the value of your position. GIO4X will make reasonable efforts to reflect corporate actions in your account, but timing and adjustments may vary.",
  },
  {
    num: 12,
    title: "Insolvency",
    content:
      "In the unlikely event of GIO4X's insolvency, client funds held in segregated accounts are protected in accordance with applicable regulations. However, there is no guarantee that all funds will be recovered. GIO4X maintains capital adequacy requirements and holds client funds in segregated accounts at reliable banking institutions.",
  },
  {
    num: 13,
    title: "Past Performance",
    content:
      "Past performance is not a reliable indicator of future results. Historical trading results do not guarantee future profits. Market conditions change, and strategies that were profitable in the past may not be profitable in the future.",
  },
  {
    num: 14,
    title: "Regulatory Risk",
    content:
      "Changes in laws, regulations, or government policies may adversely affect your trading activities, the value of your investments, or the ability of GIO4X to provide services. Regulatory requirements may vary by jurisdiction.",
  },
  {
    num: 15,
    title: "Third-Party Risk",
    content:
      "GIO4X may rely on third-party service providers for certain aspects of its operations, including liquidity providers, payment processors, and technology providers. Failures or issues with third-party providers may affect GIO4X's ability to provide services.",
  },
];

const links = [
  { href: "/accounts", label: "View Account Types" },
  { href: "/platforms", label: "Explore Platforms" },
  { href: "/contact", label: "Contact Us" },
];

export default function RiskPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        {/* gradient orbs */}
        <div className="absolute top-20 -left-32 w-[420px] h-[420px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />

        <div className="max-site section-padding relative z-10">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Legal"
              title="Risk Disclosure"
              subtitle="Please read this risk disclosure carefully before opening an account or placing any trades with GIO4X."
            />
          </AnimateOnScroll>

          <p className="text-sm text-[var(--color-text-secondary)] text-center mt-2">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Amber Warning Banner */}
      <section className="section-padding !pt-0">
        <div className="max-site max-w-4xl">
          <AnimateOnScroll>
            <div className="glass-panel p-6 border-amber-500/30 flex gap-4 items-start">
              <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-amber-400 font-semibold text-sm leading-relaxed">
                Trading foreign exchange, CFDs, and other derivative products
                carries a high level of risk and may not be suitable for all
                investors. You should carefully consider your objectives,
                financial situation, and risk tolerance before trading. You may
                lose more than your initial investment.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Sections */}
      <section className="section-padding !pt-0">
        <div className="max-site max-w-4xl space-y-6">
          {sections.map((s) => (
            <AnimateOnScroll key={s.num}>
              <div className="glass-panel p-6">
                <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3 flex items-baseline gap-3">
                  <span className="text-amber-400 font-mono text-sm">
                    {String(s.num).padStart(2, "0")}
                  </span>
                  {s.title}
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {s.content}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="section-padding !pt-0">
        <div className="max-site max-w-4xl">
          <AnimateOnScroll>
            <div className="glass-panel p-6 border-[var(--color-border)]">
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                <strong className="text-[var(--color-text)]">
                  GIO4X Ltd, Reg.No: 15807.
                </strong>{" "}
                By opening an account with GIO4X, you acknowledge that you have
                read, understood, and accepted this Risk Disclosure document in
                its entirety. This document does not disclose all of the risks
                and other significant aspects of trading leveraged products. You
                should not deal in these products unless you understand their
                nature and the extent of your exposure to risk.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding !pt-0">
        <div className="max-site max-w-4xl">
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-4 justify-center">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="glass-panel px-5 py-3 text-sm font-medium text-[var(--color-text)] hover:border-amber-500/40 transition-colors flex items-center gap-2"
                >
                  {l.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABand />
    </>
  );
}
