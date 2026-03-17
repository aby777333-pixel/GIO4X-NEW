import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forex Trading Tools & Calculators",
  description:
    "Access powerful GIO4X trading tools including pip calculators, margin calculators, economic calendar, trading signals, and market analysis tools designed to improve your forex trading decisions.",
  keywords: [
    "forex tools",
    "trading calculators",
    "pip calculator",
    "margin calculator",
    "economic calendar",
    "forex signals",
    "trading tools",
    "forex analysis tools",
    "profit calculator",
    "position size calculator",
    "GIO4X tools",
  ],
  openGraph: {
    title: "Forex Trading Tools & Calculators | GIO4X",
    description:
      "Free trading tools and calculators — pip calculator, margin calculator, economic calendar, and more to enhance your trading.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forex Trading Tools & Calculators | GIO4X",
    description:
      "Free trading tools and calculators — pip calculator, margin calculator, economic calendar, and more to enhance your trading.",
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
