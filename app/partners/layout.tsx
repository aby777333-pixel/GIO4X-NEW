import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnership Programs | IB, White Label & Affiliate",
  description:
    "Join GIO4X partnership programs — Introducing Broker (IB), White Label, and Affiliate programs with competitive commissions, real-time tracking, and dedicated partner support. Grow your business with GIO4X.",
  keywords: [
    "forex partnership",
    "introducing broker",
    "IB program",
    "white label forex",
    "affiliate program",
    "forex affiliate",
    "partner commissions",
    "forex referral",
    "broker partnership",
    "GIO4X partners",
    "trading affiliate",
  ],
  openGraph: {
    title: "Partnership Programs | IB, White Label & Affiliate | GIO4X",
    description:
      "Join GIO4X IB, White Label, or Affiliate programs with competitive commissions and dedicated partner support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnership Programs | IB, White Label & Affiliate | GIO4X",
    description:
      "Join GIO4X IB, White Label, or Affiliate programs with competitive commissions and dedicated partner support.",
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
