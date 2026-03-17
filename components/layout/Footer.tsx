"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/constants";

const footerLinks = {
  Trading: [
    { label: "Forex", href: "/markets?tab=forex" },
    { label: "Metals", href: "/markets?tab=metals" },
    { label: "CFDs", href: "/markets?tab=cfds" },
    { label: "Commodities", href: "/markets?tab=commodities" },
    { label: "Indices", href: "/markets?tab=indices" },
    { label: "Cryptos", href: "/markets?tab=crypto" },
    { label: "Stocks", href: "/markets?tab=cfds" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Why GIO4X", href: "/about/what-we-are" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
    { label: "Partners", href: "/partners" },
    { label: "Money Managers", href: "/partners/money-managers" },
  ],
  Accounts: [
    { label: "Account Types", href: "/accounts" },
    { label: "Funding & Withdrawals", href: "/funding" },
    { label: "Copy Trading", href: "/copy-trading" },
    { label: "PAMM", href: "/pamm" },
    { label: "GIO4X Raptor", href: "/platforms" },
  ],
  Resources: [
    { label: "GIO4X Academy", href: "/education" },
    { label: "Glossary", href: "/education/glossary" },
    { label: "Books", href: "/education/books" },
    { label: "Tools", href: "/tools" },
    { label: "Algorator", href: "/tools/algorator" },
    { label: "GIO Bots", href: "/tools/gio-bots" },
    { label: "FAQs", href: "/faq" },
    { label: "Support", href: "/support" },
  ],
};

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/gio4x",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/gio4x",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/gio4x",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@gio4x",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const legalLinks = [
  { label: "Legal", href: "/legal" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Risk Disclosure", href: "/legal/risk" },
  { label: "AML Policy", href: "/legal/aml" },
];

const restrictedCountries =
  "Afghanistan, Belarus, Burma, Burundi, Central African Republic, China, Congo, Cuba, Egypt, Guinea, Guinea-Bissau, Iraq, Iran, Indonesia, Lebanon, Lesotho, Libya, Malaysia, Maldives, Mali, Moldova, Nicaragua, Nigeria, North Korea, Pakistan, Russia, Somalia, Sudan, South Sudan, Syria, Tunisia, Turkey, Vanuatu, Venezuela, Yemen, Zimbabwe.";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      {/* Newsletter Band */}
      <div className="bg-gradient-to-r from-[#1B3A6B] to-[#29ABE2]">
        <div className="max-site py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-lg">Stay Ahead of the Markets</h3>
            <p className="text-white/70 text-sm">Get trading insights, market analysis, and exclusive offers delivered to your inbox.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-white text-[#1B3A6B] font-semibold text-sm hover:bg-white/90 transition-colors shrink-0"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      <div className="max-site section-padding">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Logo className="h-8 w-auto mb-4" />
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-5">
              {SITE.slogan}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-[var(--color-glass-bg)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[#29ABE2] hover:border-[#29ABE2]/30 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[var(--color-text)] font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[var(--color-text-secondary)] text-sm hover:text-[#29ABE2] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Get In Touch */}
        <div className="border-t border-[var(--color-border)] pt-8 mb-8">
          <h4 className="text-[var(--color-text)] font-semibold text-sm mb-4">Get In Touch</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[var(--color-text-secondary)]">
            <div>
              <p className="font-medium text-[var(--color-text)] mb-1">Headquarters</p>
              <p>{SITE.hq}</p>
            </div>
            <div>
              <p className="font-medium text-[var(--color-text)] mb-1">Support Office</p>
              <p>{SITE.supportOffice}</p>
              <p className="mt-1">Email: {SITE.email}</p>
              <p>Phone: {SITE.phone}</p>
              <p>Hours: {SITE.hours}</p>
            </div>
          </div>
        </div>

        {/* Risk Warning */}
        <div className="border-t border-[var(--color-border)] pt-8 mb-8">
          <p className="text-[var(--color-text-secondary)] text-xs leading-relaxed">
            <strong className="text-[var(--color-text)]">Risk Warning:</strong> Trading foreign exchange on margin
            carries a high level of risk, and may not be suitable for all investors. The high degree of leverage can
            work against you as well as for you. Before deciding to trade foreign exchange you should carefully
            consider your investment objectives, level of experience, and risk appetite. The possibility exists that
            you could sustain a loss of some or all of your initial investment and therefore you should not invest
            money that you cannot afford to lose. GIO4X Ltd, Reg.No: 15807.
          </p>
        </div>

        {/* Legal Links + Copyright */}
        <div className="border-t border-[var(--color-border)] pt-8 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-secondary)]">
            <p>&copy; 2025 GIO4X Ltd. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link, i) => (
                <span key={link.label} className="flex items-center gap-4">
                  <Link href={link.href} className="hover:text-[#29ABE2] transition-colors">
                    {link.label}
                  </Link>
                  {i < legalLinks.length - 1 && <span className="text-[var(--color-border)]">&middot;</span>}
                </span>
              ))}
            </div>
            <p>Contact: <a href={`mailto:${SITE.email}`} className="hover:text-[#29ABE2] transition-colors">{SITE.email}</a></p>
          </div>
        </div>

        {/* Restricted Countries */}
        <div className="text-[10px] text-[var(--color-text-secondary)]/60 leading-relaxed">
          <p>
            <strong>Services are not available to residents of:</strong> {restrictedCountries}
          </p>
        </div>
      </div>
    </footer>
  );
}
