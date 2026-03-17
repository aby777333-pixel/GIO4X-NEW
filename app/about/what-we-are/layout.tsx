import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Are | GIO4X Since 2012",
  description:
    "Discover what GIO4X stands for — a premier forex broker established in 2012, delivering institutional-grade execution, cutting-edge technology, and a client-first approach to global traders.",
  keywords: [
    "what is GIO4X",
    "GIO4X history",
    "forex broker since 2012",
    "about our company",
    "trading company values",
    "GIO4X story",
    "trusted broker",
    "forex broker background",
    "company overview",
  ],
  openGraph: {
    title: "What We Are | GIO4X Since 2012",
    description:
      "A premier forex broker since 2012 — institutional-grade execution, cutting-edge technology, and a client-first approach.",
  },
  twitter: {
    card: "summary_large_image",
    title: "What We Are | GIO4X Since 2012",
    description:
      "A premier forex broker since 2012 — institutional-grade execution, cutting-edge technology, and a client-first approach.",
  },
};

export default function WhatWeAreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
