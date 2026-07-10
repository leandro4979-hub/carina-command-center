import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carina — AI Command Center",
  description: "Speak with Carina, coordinate your AI agents and projects, connect OpenClaw, and track token gains.",
  openGraph: {
    title: "Carina — AI Command Center",
    description: "Voice, agents, projects, and token gains in one private command center.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Carina AI command center" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carina — AI Command Center",
    description: "Voice, agents, projects, and token gains in one private command center.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
