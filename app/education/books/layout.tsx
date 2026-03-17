import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Forex Trading Books | Recommended Reading",
  description:
    "Discover the best forex trading books recommended by GIO4X. Curated reading list covering technical analysis, price action, trading psychology, risk management, and market fundamentals for all skill levels.",
  keywords: [
    "forex trading books",
    "best trading books",
    "forex books for beginners",
    "technical analysis books",
    "trading psychology books",
    "price action books",
    "recommended trading books",
    "forex reading list",
    "learn trading books",
    "GIO4X books",
  ],
  openGraph: {
    title: "Best Forex Trading Books | GIO4X Recommended Reading",
    description:
      "Curated list of the best forex trading books — technical analysis, price action, trading psychology, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Forex Trading Books | GIO4X Recommended Reading",
    description:
      "Curated list of the best forex trading books — technical analysis, price action, trading psychology, and more.",
  },
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
