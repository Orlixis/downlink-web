"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Smartphone, ExternalLink, Menu, X, Github, Sparkles } from "lucide-react";

interface NavbarProps {
  version: string;
  githubUrl: string;
}

export function Navbar({ version, githubUrl }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#09090b]/80 border-b border-zinc-800/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/downlink-square.png"
            alt="Downlink Logo"
            className="w-8 h-8 rounded-xl shadow-md shadow-cyan-500/20 group-hover:scale-105 group-hover:shadow-cyan-500/40 transition-all"
          />
          <div className="flex items-center gap-2">
            <span className="font-extrabold tracking-tight text-lg text-white group-hover:text-cyan-200 transition-colors">
              Downlink
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-zinc-900/90 text-cyan-400 border border-cyan-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {version}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#showcase" className="hover:text-white transition-colors">
            Interactive Demo
          </a>
          <a href="#continuity" className="hover:text-white transition-colors">
            Cloud Continuity
          </a>
          <a href="#downloads" className="hover:text-white transition-colors">
            Downloads
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <Link
            href="/mobile"
            className="hover:text-cyan-300 flex items-center gap-1.5 text-zinc-300 transition-colors"
          >
            <Smartphone className="w-4 h-4 text-cyan-400" />
            <span>Companion PWA</span>
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/mobile"
            className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 active:scale-95 text-xs font-semibold flex items-center gap-1.5 transition-all"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Launch PWA</span>
          </Link>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 active:scale-95 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Github className="w-3.5 h-3.5 text-zinc-400" />
            <span>Star on GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 border-b border-zinc-800 bg-[#09090b]/95 backdrop-blur-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-zinc-300">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-800/60 transition-colors"
            >
              Features
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-800/60 transition-colors"
            >
              Interactive Demo
            </a>
            <a
              href="#continuity"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-800/60 transition-colors"
            >
              Cloud Continuity
            </a>
            <a
              href="#downloads"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-800/60 transition-colors"
            >
              Downloads
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-800/60 transition-colors"
            >
              FAQ
            </a>
            <Link
              href="/mobile"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                Mobile Companion PWA
              </span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center text-xs font-semibold text-zinc-200 flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
