import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Security & Data Protection",
  description:
    "GIO4X online security measures — SSL encryption, two-factor authentication, data protection policies, and cybersecurity best practices to keep your trading account and personal data safe.",
  keywords: [
    "online security",
    "data protection",
    "SSL encryption",
    "two-factor authentication",
    "2FA",
    "cybersecurity",
    "trading account security",
    "secure trading",
    "data privacy",
    "GIO4X online security",
  ],
  openGraph: {
    title: "Online Security & Data Protection | GIO4X",
    description:
      "SSL encryption, 2FA, and robust data protection policies to keep your trading account and personal data safe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Security & Data Protection | GIO4X",
    description:
      "SSL encryption, 2FA, and robust data protection policies to keep your trading account and personal data safe.",
  },
};

export default function OnlineSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
