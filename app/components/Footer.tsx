"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, Github, Heart, Shield, Terminal } from "lucide-react";

interface FooterProps {
  version: string;
  githubUrl: string;
}

export function Footer({ version, githubUrl }: FooterProps) {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/60 backdrop-blur-2xl py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <img src="/downlink-square.png" alt="Downlink" className="w-6 h-6 rounded-lg" />
              <span className="font-extrabold text-base text-white tracking-tight">Downlink</span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-zinc-900 text-cyan-400 border border-zinc-800">
                {version}
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              An ultra-fast, cross-platform media downloader powered by yt-dlp, Aria2, and Tauri.
              Built for performance, privacy, and seamless mobile-to-desktop continuity.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500 pt-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Released under the MIT License • 100% Free Software</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-300">Product</div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features & 16x Engine
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Interactive Simulator
                </a>
              </li>
              <li>
                <a href="#continuity" className="hover:text-white transition-colors">
                  Cloud & Wi-Fi Continuity
                </a>
              </li>
              <li>
                <Link href="/mobile" className="hover:text-cyan-300 transition-colors">
                  Mobile Companion PWA
                </Link>
              </li>
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  Direct Downloads
                </a>
              </li>
            </ul>
          </div>

          {/* Open Source & Community */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-300">Open Source</div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={`${githubUrl}/releases`} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
                  <span>Release Notes</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={`${githubUrl}/issues`} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
                  <span>Report an Issue</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={`${githubUrl}/blob/main/LICENSE`} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
                  <span>MIT License</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Downlink Media Technologies. Maintained by Orlixis and open source contributors.
          </div>
          <div className="flex items-center gap-1">
            <span>Powered by</span>
            <a href="https://tauri.app" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors font-medium">Tauri</a>
            <span>•</span>
            <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors font-medium">yt-dlp</a>
            <span>•</span>
            <a href="https://aria2.github.io" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors font-medium">Aria2</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
