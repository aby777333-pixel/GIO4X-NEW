import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Money Managers Program",
  description:
    "GIO4X Money Managers Program — manage client funds through PAMM and MAM solutions with competitive performance fees, advanced allocation methods, and full trading flexibility on the GIO4X Raptor platform.",
  keywords: [
    "money managers",
    "fund manager program",
    "MAM accounts",
    "PAMM manager",
    "forex fund management",
    "manage client funds",
    "trading fund",
    "performance fees",
    "allocation methods",
    "GIO4X money managers",
  ],
  openGraph: {
    title: "Money Managers Program | GIO4X",
    description:
      "Manage client funds with PAMM and MAM solutions — competitive fees, advanced allocation, and full flexibility.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Money Managers Program | GIO4X",
    description:
      "Manage client funds with PAMM and MAM solutions — competitive fees, advanced allocation, and full flexibility.",
  },
};

export default function MoneyManagersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
