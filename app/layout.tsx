import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carina — AI Command Center",
  description: "An interactive concept for voice, agent coordination, projects, and operational signals.",
  openGraph: {
    title: "Carina — AI Command Center",
    description: "A human-centered interface concept for coordinating AI systems.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Carina AI command center" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carina — AI Command Center",
    description: "A human-centered interface concept for coordinating AI systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
