"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Download, Laptop, Terminal, ArrowRight, Copy, Check, Apple } from "lucide-react";
import type { ReleaseInfo } from "./HeroSection";

interface DownloadMatrixProps {
  releaseInfo: ReleaseInfo;
  githubUrl: string;
}

export function DownloadMatrix({ releaseInfo, githubUrl }: DownloadMatrixProps) {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const cleanVersion = releaseInfo.version.replace(/^v/, "");

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const platforms = [
    {
      name: "macOS Apple Silicon",
      arch: "M1 / M2 / M3 / M4",
      filename: `Downlink_${cleanVersion}_aarch64.dmg`,
      url: releaseInfo.armDmg,
      icon: Apple,
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      name: "macOS Intel",
      arch: "x86_64",
      filename: `Downlink_${cleanVersion}_x64.dmg`,
      url: releaseInfo.intelDmg,
      icon: Apple,
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

  const cliCommands = [
    { label: "Homebrew (macOS)", cmd: "brew install --cask orlixis/tap/downlink" },
    { label: "WinGet (Windows)", cmd: "winget install Orlixis.Downlink" },
  ];

  return (
    <section id="downloads" className="py-24 px-6 max-w-5xl mx-auto space-y-14">
      {/* Section Header with Consistent Eyebrow */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono uppercase tracking-widest text-cyan-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          Native Desktop Builds
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white leading-tight">
          Ready for your <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            operating system.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Direct standalone installers compiled for Apple Silicon, Intel x86, Windows, and Linux. Version <code className="text-cyan-400 font-mono">{releaseInfo.version}</code>.
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

      {/* CLI Package Manager Install Commands */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        {cliCommands.map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-xl flex items-center justify-between gap-3 text-left"
          >
            <div className="min-w-0">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">{item.label}</div>
              <code className="text-xs font-mono text-zinc-300 truncate block mt-0.5">{item.cmd}</code>
            </div>
            <button
              type="button"
              onClick={() => copyCommand(item.cmd)}
              className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors flex-shrink-0"
              title="Copy command"
            >
              {copiedCmd === item.cmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
