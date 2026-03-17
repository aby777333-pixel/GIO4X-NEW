import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AML Policy",
  description:
    "GIO4X Anti-Money Laundering (AML) Policy — our commitment to preventing money laundering and terrorist financing. KYC verification procedures, compliance framework, and reporting obligations.",
  keywords: [
    "AML policy",
    "anti-money laundering",
    "KYC verification",
    "compliance",
    "identity verification",
    "financial crime prevention",
    "GIO4X AML",
    "know your customer",
    "regulatory compliance",
    "due diligence",
  ],
  openGraph: {
    title: "AML Policy | GIO4X",
    description:
      "GIO4X Anti-Money Laundering policy — KYC procedures, compliance framework, and commitment to financial crime prevention.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AML Policy | GIO4X",
    description:
      "GIO4X Anti-Money Laundering policy — KYC procedures, compliance framework, and commitment to financial crime prevention.",
  },
};

export default function AmlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
