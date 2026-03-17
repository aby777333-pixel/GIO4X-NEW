import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "GIO4X Terms and Conditions — read the full terms governing your use of GIO4X trading services, platforms, and website. Covers account agreements, trading rules, and client obligations.",
  keywords: [
    "terms and conditions",
    "trading terms",
    "client agreement",
    "broker terms",
    "GIO4X terms",
    "trading rules",
    "service agreement",
    "account terms",
    "legal terms",
  ],
  openGraph: {
    title: "Terms & Conditions | GIO4X",
    description:
      "Read the full GIO4X Terms and Conditions governing trading services, platforms, and client agreements.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | GIO4X",
    description:
      "Read the full GIO4X Terms and Conditions governing trading services, platforms, and client agreements.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
