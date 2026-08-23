"use client";

import React from "react";
import { Download, Laptop, Terminal, ExternalLink, ArrowRight, Puzzle, Sparkles } from "lucide-react";
import type { ReleaseInfo } from "./HeroSection";

interface DownloadMatrixProps {
  releaseInfo: ReleaseInfo;
  githubUrl: string;
}

export function DownloadMatrix({ releaseInfo, githubUrl }: DownloadMatrixProps) {
  const cleanVersion = releaseInfo.version.replace(/^v/, "");

  return (
    <section id="downloads" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Download Downlink
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Native standalone binaries for all major platforms. Version <code className="text-cyan-400 font-mono font-bold">{releaseInfo.version}</code>.
        </p>
      </div>

      {/* Main OS Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Apple Silicon */}
        <a
          href={releaseInfo.armDmg}
          className="p-6 rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/50 flex items-center justify-between group transition-all backdrop-blur-xl shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white flex items-center gap-2">
                <span>macOS Apple Silicon</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  M1 / M2 / M3 / M4
                </span>
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Downlink_{cleanVersion}_aarch64.dmg • Universal
              </div>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
        </a>

        {/* Card 2: macOS Intel */}
        <a
          href={releaseInfo.intelDmg}
          className="p-6 rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/50 flex items-center justify-between group transition-all backdrop-blur-xl shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white flex items-center gap-2">
                <span>macOS Intel</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                  x86_64
                </span>
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Downlink_{cleanVersion}_x64.dmg • Intel Core
              </div>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
        </a>

        {/* Card 3: Windows */}
        <a
          href={releaseInfo.winExe}
          className="p-6 rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-blue-500/50 flex items-center justify-between group transition-all backdrop-blur-xl shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white flex items-center gap-2">
                <span>Windows 10 / 11 Installer</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                  64-bit
                </span>
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Downlink_{cleanVersion}_x64-setup.exe • Direct Installer
              </div>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
        </a>

        {/* Card 4: Linux AppImage */}
        <a
          href={releaseInfo.linuxAppImage}
          className="p-6 rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-emerald-500/50 flex items-center justify-between group transition-all backdrop-blur-xl shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white flex items-center gap-2">
                <span>Linux AppImage</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                  Portable
                </span>
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                downlink_{cleanVersion}_amd64.AppImage • Standalone
              </div>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
        </a>
      </div>

      {/* Browser Extensions Row */}
      <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <Puzzle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">Browser Extensions (Chrome, Edge, Firefox, Safari)</div>
            <div className="text-xs text-zinc-400">Install the extension to capture video links with a single right-click.</div>
          </div>
        </div>

        <a
          href={`${githubUrl}#browser-extensions`}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 flex items-center gap-1.5 transition-colors flex-shrink-0"
        >
          <span>View Extensions</span>
          <ExternalLink className="w-3 h-3 opacity-60" />
        </a>
      </div>
    </section>
  );
}
