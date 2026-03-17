import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PAMM Investment Solutions | Professional Fund Management",
  description:
    "Invest in professionally managed forex PAMM accounts with GIO4X. Allocate funds to experienced money managers, track performance in real time, and benefit from professional trading strategies.",
  keywords: [
    "PAMM accounts",
    "managed forex accounts",
    "fund management",
    "forex investment",
    "money manager",
    "PAMM trading",
    "managed accounts",
    "forex fund",
    "professional trading",
    "GIO4X PAMM",
    "passive forex investment",
  ],
  openGraph: {
    title: "PAMM Investment Solutions | Professional Fund Management | GIO4X",
    description:
      "Invest in professionally managed PAMM accounts. Allocate funds to expert money managers and track performance in real time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAMM Investment Solutions | Professional Fund Management | GIO4X",
    description:
      "Invest in professionally managed PAMM accounts. Allocate funds to expert money managers and track performance in real time.",
  },
};

export default function PammLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
