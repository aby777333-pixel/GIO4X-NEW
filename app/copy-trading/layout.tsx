import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copy Trading | Follow Expert Traders",
  description:
    "Copy top-performing forex traders automatically with GIO4X Copy Trading. Follow expert strategies, mirror trades in real time, and grow your portfolio — no experience required. Start copy trading today.",
  keywords: [
    "copy trading",
    "social trading",
    "follow expert traders",
    "mirror trading",
    "forex copy trading",
    "automated trading",
    "copy trading platform",
    "trade copier",
    "signal provider",
    "GIO4X copy trading",
    "passive trading",
  ],
  openGraph: {
    title: "Copy Trading | Follow Expert Traders | GIO4X",
    description:
      "Automatically copy top-performing forex traders. Mirror trades in real time and grow your portfolio with GIO4X.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Copy Trading | Follow Expert Traders | GIO4X",
    description:
      "Automatically copy top-performing forex traders. Mirror trades in real time and grow your portfolio with GIO4X.",
  },
};

export default function CopyTradingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
