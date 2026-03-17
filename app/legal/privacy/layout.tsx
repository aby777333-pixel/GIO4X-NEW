import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "GIO4X Privacy Policy — learn how we collect, use, store, and protect your personal data. GDPR compliant data processing, cookie policy, and your rights regarding personal information.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR",
    "personal data",
    "cookie policy",
    "data privacy",
    "GIO4X privacy",
    "information security",
    "data collection",
    "user privacy",
  ],
  openGraph: {
    title: "Privacy Policy | GIO4X",
    description:
      "Learn how GIO4X collects, uses, and protects your personal data. GDPR compliant privacy policy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | GIO4X",
    description:
      "Learn how GIO4X collects, uses, and protects your personal data. GDPR compliant privacy policy.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
