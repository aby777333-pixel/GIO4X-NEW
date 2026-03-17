import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forex Trading Education & Academy",
  description:
    "Learn forex trading with GIO4X Academy — free educational resources, trading courses, webinars, tutorials, and guides for beginner to advanced traders. Master technical analysis, risk management, and trading psychology.",
  keywords: [
    "forex education",
    "trading academy",
    "learn forex trading",
    "forex courses",
    "trading tutorials",
    "forex for beginners",
    "technical analysis",
    "risk management",
    "trading psychology",
    "forex webinars",
    "GIO4X education",
  ],
  openGraph: {
    title: "Forex Trading Education & Academy | GIO4X",
    description:
      "Free forex education — courses, webinars, tutorials, and guides for beginner to advanced traders at GIO4X Academy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forex Trading Education & Academy | GIO4X",
    description:
      "Free forex education — courses, webinars, tutorials, and guides for beginner to advanced traders at GIO4X Academy.",
  },
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
