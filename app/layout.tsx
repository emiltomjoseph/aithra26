import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AITHRA 2026 — Flagship TechFest | Amal Jyothi College of Engineering",
  description:
    "Official website of AITHRA 2026, the flagship TechFest of Amal Jyothi College of Engineering, Kanjirappally. Experience precision engineering, 70+ competitions, ₹6L+ bounty pool, hackathons, and masterclasses. 30 — 31 October 2026.",
  keywords: [
    "AITHRA",
    "AITHRA 2026",
    "TechFest",
    "AJCE",
    "Amal Jyothi College of Engineering",
    "Kanjirappally",
    "Kerala Tech Fest",
    "Hackathon",
    "Masterclasses",
    "Engineering Symposium",
  ],
  authors: [{ name: "AJCE Students' Council" }],
  creator: "AJCE Students' Council",
  metadataBase: new URL("https://aithra.ajce.in"),
  openGraph: {
    title: "AITHRA 2026 — Flagship TechFest | AJCE Kanjirappally",
    description:
      "Enter the future. Kerala's premier tech fest at Amal Jyothi College of Engineering. 30 — 31 October 2026.",
    url: "https://aithra.ajce.in",
    siteName: "AITHRA 2026",
    images: [
      {
        url: "/brand/Aithra LOGO.png",
        width: 1200,
        height: 630,
        alt: "AITHRA 2026",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AITHRA 2026 — Flagship TechFest | AJCE",
    description:
      "Kerala's premier techfest at Amal Jyothi College of Engineering. 70+ competitions, ₹6L+ bounty pool. 30 — 31 October 2026.",
    images: ["/brand/Aithra LOGO.png"],
  },
  icons: {
    icon: "/brand/aithra white.png",
    apple: "/brand/aithra white.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-luxury-obsidian text-luxury-white antialiased selection:bg-luxury-amber selection:text-luxury-obsidian">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
