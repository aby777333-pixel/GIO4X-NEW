import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact GIO4X | 24/7 Forex Broker Support",
  description:
    "Get in touch with GIO4X — 24/7 customer support via live chat, email, and phone. Contact our multilingual team for trading assistance, account inquiries, partnership opportunities, and more.",
  keywords: [
    "contact GIO4X",
    "forex broker support",
    "24/7 support",
    "live chat",
    "trading support",
    "customer service",
    "forex help",
    "broker contact",
    "GIO4X email",
    "GIO4X phone",
  ],
  openGraph: {
    title: "Contact GIO4X | 24/7 Forex Broker Support",
    description:
      "Reach GIO4X 24/7 via live chat, email, or phone. Multilingual support for all your trading needs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact GIO4X | 24/7 Forex Broker Support",
    description:
      "Reach GIO4X 24/7 via live chat, email, or phone. Multilingual support for all your trading needs.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
