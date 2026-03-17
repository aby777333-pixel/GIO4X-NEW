import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deposits & Withdrawals | Zero Fee Funding",
  description:
    "Fund your GIO4X trading account with zero deposit fees. Multiple payment methods — bank wire, credit card, crypto, e-wallets. Fast withdrawals processed within 24 hours. Secure and hassle-free.",
  keywords: [
    "forex deposit",
    "forex withdrawal",
    "zero fee funding",
    "trading account funding",
    "bank wire transfer",
    "crypto deposit",
    "e-wallet funding",
    "fast withdrawal",
    "payment methods",
    "GIO4X funding",
    "free deposits",
  ],
  openGraph: {
    title: "Deposits & Withdrawals | Zero Fee Funding | GIO4X",
    description:
      "Zero deposit fees, multiple payment methods, and fast withdrawals within 24 hours at GIO4X.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deposits & Withdrawals | Zero Fee Funding | GIO4X",
    description:
      "Zero deposit fees, multiple payment methods, and fast withdrawals within 24 hours at GIO4X.",
  },
};

export default function FundingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
