import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forex Trading Glossary | Trading Terms A-Z",
  description:
    "Complete forex trading glossary — learn the meaning of every trading term from A to Z. Definitions for pips, lots, leverage, margin, spread, stop-loss, and hundreds more forex and CFD trading terms.",
  keywords: [
    "forex glossary",
    "trading terms",
    "forex terminology",
    "what is a pip",
    "forex definitions",
    "trading vocabulary",
    "CFD terms",
    "leverage definition",
    "spread meaning",
    "forex dictionary",
    "trading jargon",
  ],
  openGraph: {
    title: "Forex Trading Glossary | Trading Terms A-Z | GIO4X",
    description:
      "Complete forex trading glossary — learn the meaning of every trading term from A to Z with GIO4X.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forex Trading Glossary | Trading Terms A-Z | GIO4X",
    description:
      "Complete forex trading glossary — learn the meaning of every trading term from A to Z with GIO4X.",
  },
};

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
