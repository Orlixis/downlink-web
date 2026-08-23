"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, Download, Github, Menu, X } from "lucide-react";

interface NavbarProps {
  version: string;
  githubUrl: string;
}

export function Navbar({ version, githubUrl }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#09090b]/75 border-b border-white/[0.06] transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/downlink-square.png"
            alt="Downlink"
            className="w-7 h-7 rounded-lg shadow-sm group-hover:scale-105 transition-transform"
          />
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Downlink
            </span>
            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.08]">
              {version}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-zinc-400">
          <a href="#features" className="hover:text-zinc-100 transition-colors">
            Features
          </a>
          <a href="#continuity" className="hover:text-zinc-100 transition-colors">
            Continuity
          </a>
          <a href="#compare" className="hover:text-zinc-100 transition-colors">
            Comparison
          </a>
          <a href="#downloads" className="hover:text-zinc-100 transition-colors">
            Downloads
          </a>
          <a href="#faq" className="hover:text-zinc-100 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/mobile"
            className="px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center gap-1.5"
          >
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mobile Web</span>
          </Link>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-medium text-zinc-200 hover:text-white transition-all flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="#downloads"
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-xs font-semibold text-white shadow-sm shadow-cyan-900/20 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/[0.06] bg-[#09090b]/95 backdrop-blur-2xl px-6 py-4 space-y-3"
          >
            <nav className="flex flex-col space-y-2 text-sm text-zinc-300">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#continuity"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-white transition-colors"
              >
                Continuity
              </a>
              <a
                href="#compare"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-white transition-colors"
              >
                Comparison
              </a>
              <a
                href="#downloads"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-white transition-colors"
              >
                Downloads
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <Link
                href="/mobile"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-cyan-400 flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                <span>Launch Mobile Companion</span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
