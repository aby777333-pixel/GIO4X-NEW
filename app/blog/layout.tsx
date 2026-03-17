import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIO4X Blog | Forex Market Analysis & Trading Tips",
  description:
    "Stay informed with the GIO4X blog — daily forex market analysis, trading tips, strategy guides, economic news, and expert insights to help you navigate the currency markets.",
  keywords: [
    "forex blog",
    "market analysis",
    "trading tips",
    "forex news",
    "trading strategies",
    "economic calendar",
    "forex signals",
    "currency analysis",
    "trading insights",
    "GIO4X blog",
    "forex commentary",
  ],
  openGraph: {
    title: "GIO4X Blog | Forex Market Analysis & Trading Tips",
    description:
      "Daily forex market analysis, trading tips, strategy guides, and expert insights from GIO4X.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIO4X Blog | Forex Market Analysis & Trading Tips",
    description:
      "Daily forex market analysis, trading tips, strategy guides, and expert insights from GIO4X.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
