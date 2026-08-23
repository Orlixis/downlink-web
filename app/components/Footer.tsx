"use client";

import React from "react";
import Link from "next/link";
import { FiSmartphone, FiDownload, FiHeart } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

interface FooterProps {
  version: string;
  githubUrl: string;
}

export function Footer({ version, githubUrl }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07080a]/90 pt-24 pb-16 px-6 sm:px-8 text-zinc-400">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14">
          {/* Brand Col (Span 5) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group inline-flex">
              <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <img
                  src="/downlink-square.png"
                  alt="Downlink"
                  className="w-7 h-7 rounded-lg"
                />
              </div>
              <div className="flex items-center gap-2.5">
                <span className="font-extrabold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors font-sans">
                  Downlink
                </span>
                <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/[0.05] text-zinc-400 border border-white/[0.08]">
                  {version}
                </span>
              </div>
            </Link>

            <p className="text-[13px] text-zinc-400 leading-relaxed max-w-sm font-normal">
              The high-performance, open-source media downloader. Engineered in native Rust and Tauri with 16x multi-threading, SponsorBlock removal, and zero-config mobile continuity.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                100% Free &amp; MIT Licensed
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.05] text-zinc-400 border border-white/[0.08] text-[11px] font-mono">
                Zero Telemetry &amp; No Ads
              </span>
            </div>
          </div>

          {/* Col 2: Product (Span 2) */}
          <div className="md:col-span-2 space-y-3.5">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-medium">
              Product
            </div>
            <ul className="space-y-2.5 text-[13px] font-medium text-zinc-400">
              <li>
                <a href="#showcase" className="hover:text-zinc-100 transition-colors">
                  Interactive Showcase
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-zinc-100 transition-colors">
                  Core Features
                </a>
              </li>
              <li>
                <a href="#continuity" className="hover:text-zinc-100 transition-colors">
                  Cloud Relay &amp; Wi-Fi
                </a>
              </li>
              <li>
                <a href="#compare" className="hover:text-zinc-100 transition-colors">
                  Feature Matrix
                </a>
              </li>
              <li>
                <Link
                  href="/mobile"
                  className="hover:text-zinc-100 transition-colors flex items-center gap-1.5"
                >
                  <FiSmartphone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Mobile Companion</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Downloads (Span 2) */}
          <div className="md:col-span-2 space-y-3.5">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-medium">
              Downloads
            </div>
            <ul className="space-y-2.5 text-[13px] font-medium text-zinc-400">
              <li>
                <a href="#downloads" className="hover:text-zinc-100 transition-colors">
                  macOS Apple Silicon
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-zinc-100 transition-colors">
                  macOS Intel x86
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-zinc-100 transition-colors">
                  Windows 10 / 11
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-zinc-100 transition-colors">
                  Linux .AppImage
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-zinc-100 transition-colors">
                  Homebrew &amp; WinGet
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Source (Span 3) */}
          <div className="md:col-span-3 space-y-3.5">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-medium">
              Open Source
            </div>
            <ul className="space-y-2.5 text-[13px] font-medium text-zinc-400">
              <li>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-100 transition-colors flex items-center gap-1.5"
                >
                  <SiGithub className="w-3.5 h-3.5 text-zinc-400" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href={`${githubUrl}/releases`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-100 transition-colors"
                >
                  Release Notes &amp; Tags
                </a>
              </li>
              <li>
                <a
                  href={`${githubUrl}/issues`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-100 transition-colors"
                >
                  Report an Issue / Bug
                </a>
              </li>
              <li>
                <a
                  href={`${githubUrl}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-100 transition-colors"
                >
                  MIT License Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Downlink. Built with precision for the open web.
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Crafted with</span>
            <FiHeart className="w-3 h-3 text-red-500 fill-red-500 inline" />
            <span>by the Downlink Core Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
