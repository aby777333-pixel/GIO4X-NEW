import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { themeScript } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gio4x.com"),
  title: {
    default: "GIO4X — The Gentleman's Forex Broker | Trade Forex, CFDs, Crypto",
    template: "%s | GIO4X",
  },
  description:
    "GIO4X is a premier online forex broker offering institutional-grade execution, spreads from 0.0 pips, and the GIO4X Raptor trading platform. Trade Forex, Metals, Indices, Commodities, Crypto & CFDs.",
  keywords: [
    "forex broker",
    "online trading",
    "CFD trading",
    "forex trading platform",
    "currency trading",
    "GIO4X",
    "copy trading",
    "PAMM",
    "algorithmic trading",
    "ECN broker",
    "forex spreads",
    "trading platform",
  ],
  authors: [{ name: "GIO4X Ltd" }],
  creator: "GIO4X",
  publisher: "GIO4X Ltd",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gio4x.com",
    siteName: "GIO4X",
    title: "GIO4X — The Gentleman's Forex Broker",
    description:
      "Trade Forex, Metals, Indices, Crypto & CFDs with spreads from 0.0 pips. Institutional-grade execution on the GIO4X Raptor platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GIO4X Forex Broker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIO4X — The Gentleman's Forex Broker",
    description:
      "Trade Forex, Metals, Indices, Crypto & CFDs with spreads from 0.0 pips.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
