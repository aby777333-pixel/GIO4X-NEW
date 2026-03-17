import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at GIO4X | Join Our Team",
  description:
    "Join the GIO4X team — explore career opportunities in fintech, forex trading technology, marketing, compliance, and customer support. Work with a global team shaping the future of online trading.",
  keywords: [
    "GIO4X careers",
    "forex jobs",
    "fintech careers",
    "trading company jobs",
    "broker jobs",
    "forex broker careers",
    "join GIO4X",
    "trading technology jobs",
    "financial services careers",
    "GIO4X hiring",
  ],
  openGraph: {
    title: "Careers at GIO4X | Join Our Team",
    description:
      "Explore career opportunities at GIO4X — fintech, trading technology, marketing, compliance, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at GIO4X | Join Our Team",
    description:
      "Explore career opportunities at GIO4X — fintech, trading technology, marketing, compliance, and more.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
