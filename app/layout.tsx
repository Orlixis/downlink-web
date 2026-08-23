import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Downlink — Download Videos from YouTube and 1000+ Sites | Free & Open Source",
  description:
    "A fast, lightweight desktop app for downloading videos from YouTube and 1000+ websites. Powered by yt-dlp & Aria2. Available for macOS, Windows, and Linux.",
  metadataBase: new URL("https://downlink-web.vercel.app"),
  icons: {
    icon: "/downlink-square.png",
    shortcut: "/downlink-square.png",
    apple: "/downlink-square.png",
  },
  openGraph: {
    type: "website",
    url: "https://downlink-web.vercel.app",
    title: "Downlink — Download Videos from Anywhere | Free",
    description:
      "A fast, lightweight desktop app for downloading videos from YouTube and 1000+ websites. Powered by yt-dlp & Aria2. Available for macOS, Windows, and Linux.",
    siteName: "Downlink",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Downlink - Download videos from anywhere. A fast, lightweight desktop app.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Downlink — Download Videos from Anywhere | Free",
    description:
      "A fast, lightweight desktop app for downloading videos from YouTube and 1000+ websites. Powered by yt-dlp & Aria2. Available for macOS, Windows, and Linux.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#09090b] text-zinc-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        {children}
      </body>
    </html>
  );
}
