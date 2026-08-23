"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Download, Laptop, Terminal, ArrowRight, Copy, Check } from "lucide-react";
import type { ReleaseInfo } from "./HeroSection";

interface DownloadMatrixProps {
  releaseInfo: ReleaseInfo;
  githubUrl: string;
}

export function DownloadMatrix({ releaseInfo, githubUrl }: DownloadMatrixProps) {
  const [copied, setCopied] = useState(false);
  const cleanVersion = releaseInfo.version.replace(/^v/, "");
  const brewCmd = "brew install --cask orlixis/tap/downlink";

  const handleCopy = () => {
    navigator.clipboard.writeText(brewCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const platforms = [
    {
      name: "macOS Apple Silicon",
      arch: "M1 / M2 / M3 / M4",
      filename: `Downlink_${cleanVersion}_aarch64.dmg`,
      url: releaseInfo.armDmg,
      icon: Download,
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      name: "macOS Intel",
      arch: "x86_64",
      filename: `Downlink_${cleanVersion}_x64.dmg`,
      url: releaseInfo.intelDmg,
      icon: Download,
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      name: "Windows 10 / 11",
      arch: "64-bit .exe Installer",
      filename: `Downlink_${cleanVersion}_x64-setup.exe`,
      url: releaseInfo.winExe,
      icon: Laptop,
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      name: "Linux Portable",
      arch: "x86_64 .AppImage",
      filename: `downlink_${cleanVersion}_amd64.AppImage`,
      url: releaseInfo.linuxAppImage,
      icon: Terminal,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  return (
    <section id="downloads" className="py-28 px-6 max-w-5xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white">
          Download Downlink
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Native standalone binaries for all desktop architectures. Version <code className="text-cyan-400 font-mono">{releaseInfo.version}</code>.
        </p>
      </div>

      {/* 4-Card Platform Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {platforms.map((p, idx) => (
          <motion.a
            key={idx}
            href={p.url}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${p.accent} group-hover:scale-105 transition-transform`}>
                <p.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{p.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.08]">
                    {p.arch}
                  </span>
                </div>
                <div className="text-xs text-zinc-500 font-mono mt-0.5">{p.filename}</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
          </motion.a>
        ))}
      </div>

      {/* Homebrew Terminal Command Box */}
      <div className="max-w-md mx-auto p-3 rounded-2xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-xl flex items-center justify-between">
        <code className="text-xs font-mono text-zinc-300 pl-2">{brewCmd}</code>
        <button
          type="button"
          onClick={handleCopy}
          className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
          title="Copy Homebrew command"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    </section>
  );
}
