"use client";

import React from "react";
import Link from "next/link";
import { FiSmartphone, FiDownload, FiExternalLink, FiHeart } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

interface FooterProps {
  version: string;
  githubUrl: string;
}

export function Footer({ version, githubUrl }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07080a]/90 pt-28 pb-20 px-6 sm:px-10 text-zinc-400">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Main 4-Column Grid with Generous Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16">
          {/* Brand Col (Span 5 on desktop for roomy presentation) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                <img
                  src="/downlink-square.png"
                  alt="Downlink"
                  className="w-8 h-8 rounded-xl"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                  Downlink
                </span>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {version}
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-md font-normal">
              The high-performance, open-source media downloader. Engineered in native Rust and Tauri with 16x multi-threading, SponsorBlock removal, and zero-config mobile continuity.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                100% Free &amp; MIT Licensed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.08] text-xs font-mono">
                Zero Telemetry &amp; No Ads
              </span>
            </div>
          </div>

          {/* Col 2: Product (Span 2) */}
          <div className="md:col-span-2 space-y-4">
            <div className="font-bold text-white uppercase text-xs font-mono tracking-widest">
              Product
            </div>
            <ul className="space-y-3.5 text-sm text-zinc-400 font-medium">
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Live Engine
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
                  Feature Matrix
                </a>
              </li>
              <li>
                <Link
                  href="/mobile"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 font-semibold"
                >
                  <FiSmartphone className="w-4 h-4" />
                  <span>Mobile Companion</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Downloads (Span 2) */}
          <div className="md:col-span-2 space-y-4">
            <div className="font-bold text-white uppercase text-xs font-mono tracking-widest">
              Downloads
            </div>
            <ul className="space-y-3.5 text-sm text-zinc-400 font-medium">
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  macOS Apple Silicon
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  macOS Intel x86
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  Windows 10 / 11
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  Linux .AppImage
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  Homebrew &amp; WinGet
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Source (Span 3) */}
          <div className="md:col-span-3 space-y-4">
            <div className="font-bold text-white uppercase text-xs font-mono tracking-widest">
              Open Source
            </div>
            <ul className="space-y-3.5 text-sm text-zinc-400 font-medium">
              <li>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <SiGithub className="w-4 h-4 text-zinc-300" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href={`${githubUrl}/releases`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Release Notes &amp; Tags
                </a>
              </li>
              <li>
                <a
                  href={`${githubUrl}/issues`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Report an Issue / Bug
                </a>
              </li>
              <li>
                <a
                  href={`${githubUrl}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip with Plentiful Spacing */}
        <div className="border-t border-white/[0.06] pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-zinc-500 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} Downlink. Built with precision for the open web.
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Crafted with</span>
            <FiHeart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>by the Downlink Core Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
