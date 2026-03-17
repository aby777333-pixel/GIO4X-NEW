import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Disclosure",
  description:
    "GIO4X Risk Disclosure Statement — understand the risks associated with forex and CFD trading including leverage risk, market volatility, and potential for loss. Read before trading.",
  keywords: [
    "risk disclosure",
    "forex risk",
    "CFD risk",
    "trading risk",
    "leverage risk",
    "market risk",
    "risk warning",
    "trading losses",
    "GIO4X risk disclosure",
    "financial risk",
  ],
  openGraph: {
    title: "Risk Disclosure | GIO4X",
    description:
      "Understand the risks of forex and CFD trading — leverage, volatility, and potential for loss. GIO4X Risk Disclosure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Risk Disclosure | GIO4X",
    description:
      "Understand the risks of forex and CFD trading — leverage, volatility, and potential for loss. GIO4X Risk Disclosure.",
  },
};

export default function RiskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
