"use client";

import React from "react";
import Link from "next/link";
import { Github, Smartphone, Download, ExternalLink, Heart } from "lucide-react";

interface FooterProps {
  version: string;
  githubUrl: string;
}

export function Footer({ version, githubUrl }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.06] bg-zinc-950/60 pt-16 pb-12 px-6 text-xs text-zinc-400">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Col (Span 2) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-md">
                <img src="/downlink-square.png" alt="Downlink" className="w-7 h-7 rounded-lg" />
              </div>
              <span className="text-base font-extrabold tracking-tight text-white">Downlink</span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {version}
              </span>
            </div>

            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm font-normal">
              The high-performance, open-source media downloader. Engineered in Rust &amp; Tauri with 16x multi-threading, SponsorBlock, and mobile continuity.
            </p>

            <div className="flex items-center gap-3 text-zinc-500">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                100% Free &amp; MIT Licensed
              </span>
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase text-[11px] font-mono tracking-wider">
              Product
            </div>
            <ul className="space-y-2 text-zinc-500 font-medium">
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Interactive Showcase
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Core Features
                </a>
              </li>
              <li>
                <a href="#continuity" className="hover:text-white transition-colors">
                  Cloud Relay &amp; Wi-Fi
                </a>
              </li>
              <li>
                <a href="#compare" className="hover:text-white transition-colors">
                  Comparison Matrix
                </a>
              </li>
              <li>
                <Link href="/mobile" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <Smartphone className="w-3 h-3" />
                  Mobile Companion
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Downloads */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase text-[11px] font-mono tracking-wider">
              Downloads
            </div>
            <ul className="space-y-2 text-zinc-500 font-medium">
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  macOS Apple Silicon (.dmg)
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  macOS Intel (.dmg)
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  Windows 10/11 (.exe)
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  Linux x86_64 (.AppImage)
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  Homebrew &amp; WinGet CLI
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Open Source */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase text-[11px] font-mono tracking-wider">
              Community
            </div>
            <ul className="space-y-2 text-zinc-500 font-medium">
              <li>
                <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <Github className="w-3 h-3" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href={`${githubUrl}/releases`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Release Notes
                </a>
              </li>
              <li>
                <a href={`${githubUrl}/issues`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Report an Issue
                </a>
              </li>
              <li>
                <a href={`${githubUrl}/blob/main/LICENSE`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-[11px]">
          <div>
            © {new Date().getFullYear()} Downlink. Built with precision for the open web.
          </div>
          <div className="flex items-center gap-1 text-zinc-500">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>by the Downlink Core Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
