import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Fund Security",
  description:
    "GIO4X client fund security — learn how we protect your trading capital with segregated accounts, negative balance protection, and tier-1 banking partnerships. Your funds are safe with GIO4X.",
  keywords: [
    "client fund security",
    "segregated accounts",
    "negative balance protection",
    "fund safety",
    "secure forex broker",
    "trading capital protection",
    "tier-1 banks",
    "GIO4X security",
    "safe trading",
    "protected funds",
  ],
  openGraph: {
    title: "Client Fund Security | GIO4X",
    description:
      "Segregated accounts, negative balance protection, and tier-1 banking — your funds are safe with GIO4X.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Fund Security | GIO4X",
    description:
      "Segregated accounts, negative balance protection, and tier-1 banking — your funds are safe with GIO4X.",
  },
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
