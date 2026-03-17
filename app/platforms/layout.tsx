import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIO4X Raptor Trading Platform | Desktop, Web & Mobile",
  description:
    "Experience the GIO4X Raptor trading platform — a next-generation trading solution available on desktop, web, and mobile. Advanced charting, one-click trading, algorithmic strategies, and institutional-grade execution.",
  keywords: [
    "trading platform",
    "GIO4X Raptor",
    "forex trading platform",
    "web trading",
    "mobile trading",
    "desktop trading",
    "MetaTrader alternative",
    "advanced charting",
    "one-click trading",
    "algorithmic trading platform",
  ],
  openGraph: {
    title: "GIO4X Raptor Trading Platform | Desktop, Web & Mobile",
    description:
      "Trade on the powerful GIO4X Raptor platform with advanced charting, one-click execution, and multi-device support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIO4X Raptor Trading Platform | Desktop, Web & Mobile",
    description:
      "Trade on the powerful GIO4X Raptor platform with advanced charting, one-click execution, and multi-device support.",
  },
};

export default function PlatformsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
