import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Information & Regulatory Documents",
  description:
    "GIO4X legal documentation — terms and conditions, privacy policy, risk disclosure, AML policy, and regulatory information. Transparent and compliant forex broker operations.",
  keywords: [
    "legal information",
    "forex regulation",
    "terms and conditions",
    "privacy policy",
    "risk disclosure",
    "AML policy",
    "regulated broker",
    "GIO4X legal",
    "compliance",
    "broker regulation",
  ],
  openGraph: {
    title: "Legal Information & Regulatory Documents | GIO4X",
    description:
      "Access GIO4X legal documents — terms, privacy policy, risk disclosure, AML policy, and regulatory information.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Information & Regulatory Documents | GIO4X",
    description:
      "Access GIO4X legal documents — terms, privacy policy, risk disclosure, AML policy, and regulatory information.",
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
