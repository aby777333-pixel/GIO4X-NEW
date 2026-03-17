import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | GIO4X Forex Broker",
  description:
    "Find answers to frequently asked questions about GIO4X — account opening, deposits, withdrawals, trading platforms, leverage, spreads, and more. Everything you need to know about trading with GIO4X.",
  keywords: [
    "forex FAQ",
    "trading questions",
    "GIO4X FAQ",
    "how to open trading account",
    "forex broker questions",
    "trading help",
    "deposit FAQ",
    "withdrawal FAQ",
    "leverage FAQ",
    "spreads FAQ",
  ],
  openGraph: {
    title: "Frequently Asked Questions | GIO4X Forex Broker",
    description:
      "Find answers to all your questions about trading with GIO4X — accounts, deposits, platforms, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | GIO4X Forex Broker",
    description:
      "Find answers to all your questions about trading with GIO4X — accounts, deposits, platforms, and more.",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
