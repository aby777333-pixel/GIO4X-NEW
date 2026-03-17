import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support | Help Center",
  description:
    "GIO4X Help Center — get assistance with your trading account, platform setup, deposits, withdrawals, and technical issues. 24/7 multilingual support via live chat, email, and phone.",
  keywords: [
    "customer support",
    "help center",
    "trading support",
    "forex help",
    "live chat support",
    "technical support",
    "account help",
    "GIO4X support",
    "broker support",
    "24/7 help",
  ],
  openGraph: {
    title: "Customer Support | Help Center | GIO4X",
    description:
      "24/7 multilingual support — get help with your trading account, platform, deposits, and more at GIO4X.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Support | Help Center | GIO4X",
    description:
      "24/7 multilingual support — get help with your trading account, platform, deposits, and more at GIO4X.",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
