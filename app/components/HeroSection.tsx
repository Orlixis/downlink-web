"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Download, Smartphone, ArrowRight } from "lucide-react";

export interface ReleaseInfo {
  version: string;
  armDmg: string;
  intelDmg: string;
  winExe: string;
  linuxAppImage: string;
}

interface HeroSectionProps {
  detectedOs: "mac-arm" | "mac-intel" | "windows" | "linux";
  releaseInfo: ReleaseInfo;
}

export function HeroSection({ detectedOs, releaseInfo }: HeroSectionProps) {
  const getPrimaryDownload = () => {
    switch (detectedOs) {
      case "windows":
        return {
          label: "Download for Windows",
          subtext: "Windows 10 / 11 • 64-bit .exe",
          url: releaseInfo.winExe,
        };
      case "linux":
        return {
          label: "Download for Linux",
          subtext: "x86_64 AppImage • Portable",
          url: releaseInfo.linuxAppImage,
        };
      case "mac-intel":
        return {
          label: "Download for macOS (Intel)",
          subtext: `${releaseInfo.version} • x86_64 .dmg`,
          url: releaseInfo.intelDmg,
        };
      case "mac-arm":
      default:
        return {
          label: "Download for macOS",
          subtext: "Apple Silicon (M1/M2/M3/M4) • .dmg",
          url: releaseInfo.armDmg,
        };
    }
  };

  const primary = getPrimaryDownload();

  return (
    <section className="relative pt-20 pb-8 px-6 max-w-5xl mx-auto text-center space-y-8">
      {/* Release Tag Pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300 backdrop-blur-md hover:border-white/[0.15] transition-colors"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="font-semibold text-white">Downlink {releaseInfo.version} is here</span>
        <span className="text-zinc-600">•</span>
        <a href="#features" className="text-zinc-400 hover:text-white flex items-center gap-1 font-medium transition-colors">
          See what&apos;s new <ArrowRight className="w-3 h-3" />
        </a>
      </motion.div>

      {/* Main Display Headline */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-white leading-[1.06]">
          The high-performance <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            media downloader.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Engineered for raw speed with 16x multi-thread chunking, SponsorBlock auto-skipping, and seamless mobile cloud continuity. Free and open source.
        </p>
      </motion.div>

      {/* Primary Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center gap-3 pt-2"
      >
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={primary.url}
            className="flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-200 font-bold text-sm shadow-xl shadow-white/10 active:scale-[0.98] transition-all"
          >
            <Download className="w-4 h-4 text-zinc-950" />
            <span>{primary.label}</span>
          </a>

          <Link
            href="/mobile"
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white font-medium text-sm active:scale-[0.98] transition-all"
          >
            <Smartphone className="w-4 h-4 text-cyan-400" />
            <span>Open Mobile Companion</span>
          </Link>
        </div>

        <div className="text-xs text-zinc-500 flex items-center gap-2 pt-1">
          <span>{primary.subtext}</span>
          <span>•</span>
          <a href="#downloads" className="hover:text-zinc-300 underline underline-offset-2 transition-colors">
            Other platforms &amp; CLI ↓
          </a>
        </div>
      </motion.div>
    </section>
  );
}
