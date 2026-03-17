import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About GIO4X | The Gentleman's Forex Broker",
  description:
    "Learn about GIO4X — the gentleman's forex broker since 2012. Discover our mission, values, regulatory framework, and commitment to providing transparent, institutional-grade trading services worldwide.",
  keywords: [
    "about GIO4X",
    "forex broker",
    "regulated broker",
    "gentleman's broker",
    "trading company",
    "forex broker history",
    "GIO4X mission",
    "trusted forex broker",
    "online broker",
    "institutional trading",
  ],
  openGraph: {
    title: "About GIO4X | The Gentleman's Forex Broker",
    description:
      "The gentleman's forex broker since 2012 — transparent, regulated, and committed to institutional-grade trading services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About GIO4X | The Gentleman's Forex Broker",
    description:
      "The gentleman's forex broker since 2012 — transparent, regulated, and committed to institutional-grade trading services.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
