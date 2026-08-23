"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Download,
  Smartphone,
  Zap,
  Shield,
  Laptop,
  Terminal,
  ChevronDown,
  Check,
  Copy,
  Sparkles,
  ArrowRight,
} from "lucide-react";

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
  onSelectOs: (os: "mac-arm" | "mac-intel" | "windows" | "linux") => void;
}

export function HeroSection({ detectedOs, releaseInfo, onSelectOs }: HeroSectionProps) {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [cliTab, setCliTab] = useState<"brew" | "winget" | "curl">("brew");
  const [osDropdownOpen, setOsDropdownOpen] = useState(false);

  const getPrimaryDownload = () => {
    switch (detectedOs) {
      case "windows":
        return {
          label: `Download for Windows`,
          subtext: `${releaseInfo.version} • Windows 10 / 11 (64-bit .exe)`,
          url: releaseInfo.winExe,
          icon: Laptop,
          chip: "EXE Installer",
        };
      case "linux":
        return {
          label: `Download for Linux`,
          subtext: `${releaseInfo.version} • x86_64 Portable AppImage`,
          url: releaseInfo.linuxAppImage,
          icon: Terminal,
          chip: "AppImage",
        };
      case "mac-intel":
        return {
          label: `Download for macOS (Intel)`,
          subtext: `${releaseInfo.version} • x86_64 DMG`,
          url: releaseInfo.intelDmg,
          icon: Download,
          chip: "Intel DMG",
        };
      case "mac-arm":
      default:
        return {
          label: `Download for macOS`,
          subtext: `${releaseInfo.version} • Apple Silicon (M1/M2/M3/M4) .dmg`,
          url: releaseInfo.armDmg,
          icon: Download,
          chip: "Apple Silicon",
        };
    }
  };

  const primary = getPrimaryDownload();

  const getCliCommand = () => {
    switch (cliTab) {
      case "brew":
        return "brew install --cask orlixis/tap/downlink";
      case "winget":
        return "winget install Orlixis.Downlink";
      case "curl":
        return "curl -fsSL https://downlink-web.vercel.app/install.sh | bash";
    }
  };

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
      {/* Release Announcement Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-xl text-xs text-zinc-300 shadow-inner hover:border-zinc-700 transition-all">
        <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="font-semibold text-cyan-400">{releaseInfo.version} Available</span>
        <span className="text-zinc-600">•</span>
        <span>Aria2 Acceleration & Mobile Cloud Relay</span>
        <a href="#features" className="text-zinc-400 hover:text-white flex items-center gap-0.5 ml-1 font-medium">
          Explore <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* Main Title & Value Proposition */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
          Ultra-fast media extraction. <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
            Built for pure perfection.
          </span>
        </h1>
        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          The next-generation, high-performance desktop download manager for YouTube, TikTok, Bilibili, and 1,000+ sites.
          Equipped with 16x multi-threading, SponsorBlock skipping, and instant mobile cloud continuity.
        </p>
      </div>

      {/* Primary Download CTAs & Dropdown */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        {/* Main Glowing Action Button */}
        <div className="relative group">
          <a
            href={primary.url}
            className="flex items-center gap-3.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base shadow-xl shadow-cyan-900/30 hover:shadow-cyan-500/40 active:scale-[0.98] transition-all"
          >
            <primary.icon className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
            <div className="text-left">
              <div className="text-sm sm:text-base font-extrabold tracking-tight">{primary.label}</div>
              <div className="text-[11px] text-cyan-100/80 font-normal">{primary.subtext}</div>
            </div>
          </a>
        </div>

        {/* Dropdown Selector for Other Platforms */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setOsDropdownOpen(!osDropdownOpen)}
            className="flex items-center gap-2 px-4 py-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-xs font-semibold text-zinc-300 hover:text-white transition-all backdrop-blur-xl"
          >
            <span>{primary.chip}</span>
            <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${osDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {osDropdownOpen && (
            <div className="absolute top-full mt-2 right-0 sm:left-0 w-64 rounded-2xl bg-zinc-900/95 border border-zinc-800 shadow-2xl backdrop-blur-2xl p-1.5 z-30 space-y-1 animate-in fade-in zoom-in-95 duration-150 text-left">
              <button
                type="button"
                onClick={() => {
                  onSelectOs("mac-arm");
                  setOsDropdownOpen(false);
                }}
                className={`w-full px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  detectedOs === "mac-arm" ? "bg-cyan-500/10 text-cyan-300 font-semibold" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <span>macOS Apple Silicon (M1–M4)</span>
                {detectedOs === "mac-arm" && <Check className="w-3.5 h-3.5 text-cyan-400" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelectOs("mac-intel");
                  setOsDropdownOpen(false);
                }}
                className={`w-full px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  detectedOs === "mac-intel" ? "bg-cyan-500/10 text-cyan-300 font-semibold" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <span>macOS Intel (x86_64)</span>
                {detectedOs === "mac-intel" && <Check className="w-3.5 h-3.5 text-cyan-400" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelectOs("windows");
                  setOsDropdownOpen(false);
                }}
                className={`w-full px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  detectedOs === "windows" ? "bg-cyan-500/10 text-cyan-300 font-semibold" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <span>Windows 10 / 11 (.exe)</span>
                {detectedOs === "windows" && <Check className="w-3.5 h-3.5 text-cyan-400" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelectOs("linux");
                  setOsDropdownOpen(false);
                }}
                className={`w-full px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  detectedOs === "linux" ? "bg-cyan-500/10 text-cyan-300 font-semibold" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <span>Linux Portable (.AppImage)</span>
                {detectedOs === "linux" && <Check className="w-3.5 h-3.5 text-cyan-400" />}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Companion Launch Button */}
        <Link
          href="/mobile"
          className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-cyan-500/40 text-zinc-300 hover:text-white font-semibold text-sm transition-all active:scale-[0.98] shadow-sm backdrop-blur-xl"
        >
          <Smartphone className="w-4 h-4 text-cyan-400" />
          <span>Launch Mobile Companion</span>
        </Link>
      </div>

      {/* Terminal One-Liner Install Option */}
      <div className="pt-2 max-w-md mx-auto">
        <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl p-2 shadow-inner">
          <div className="flex items-center justify-between px-2 pb-1.5 border-b border-zinc-800/60 text-[11px] text-zinc-400">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setCliTab("brew")}
                className={`px-2 py-0.5 rounded font-mono ${cliTab === "brew" ? "bg-zinc-800 text-cyan-400 font-bold" : "hover:text-zinc-200"}`}
              >
                Homebrew
              </button>
              <button
                type="button"
                onClick={() => setCliTab("winget")}
                className={`px-2 py-0.5 rounded font-mono ${cliTab === "winget" ? "bg-zinc-800 text-blue-400 font-bold" : "hover:text-zinc-200"}`}
              >
                Winget
              </button>
              <button
                type="button"
                onClick={() => setCliTab("curl")}
                className={`px-2 py-0.5 rounded font-mono ${cliTab === "curl" ? "bg-zinc-800 text-emerald-400 font-bold" : "hover:text-zinc-200"}`}
              >
                Curl Script
              </button>
            </div>
            <span className="font-mono text-[10px] text-zinc-600">Terminal Install</span>
          </div>
          <div className="flex items-center justify-between pt-1.5 px-2">
            <code className="text-xs font-mono text-zinc-300 truncate pr-2">{getCliCommand()}</code>
            <button
              type="button"
              onClick={() => handleCopy(getCliCommand())}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors flex-shrink-0"
              title="Copy to clipboard"
            >
              {copiedCmd === getCliCommand() ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Trust & Reassurance Badges */}
      <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span>100% Free & Open Source</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span>Zero Ads or Telemetry</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span>Automatic Engine Updates</span>
        </div>
      </div>
    </section>
  );
}
