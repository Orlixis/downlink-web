"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FiSmartphone, FiDownload, FiMenu, FiX } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

interface NavbarProps {
  version: string;
  githubUrl: string;
}

export function Navbar({ version, githubUrl }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#09090b]/80 border-b border-white/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-18 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3.5 group">
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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 text-[13px] font-medium text-zinc-400">
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
        <div className="hidden sm:flex items-center gap-3.5">
          <Link
            href="/mobile"
            className="px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all flex items-center gap-2"
          >
            <FiSmartphone className="w-4 h-4 text-cyan-400" />
            <span>Mobile Web</span>
          </Link>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-medium text-zinc-200 hover:text-white transition-all flex items-center gap-2"
          >
            <SiGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="#downloads"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-xs font-bold text-white shadow-md shadow-cyan-900/25 active:scale-95 transition-all flex items-center gap-2"
          >
            <FiDownload className="w-4 h-4" />
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
          {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/[0.06] bg-[#09090b]/95 backdrop-blur-2xl px-6 py-5 space-y-3"
          >
            <nav className="flex flex-col space-y-3 text-sm text-zinc-300">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#continuity"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-white transition-colors"
              >
                Continuity
              </a>
              <a
                href="#compare"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-white transition-colors"
              >
                Comparison
              </a>
              <a
                href="#downloads"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-white transition-colors"
              >
                Downloads
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <Link
                href="/mobile"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-cyan-400 flex items-center gap-2 font-semibold"
              >
                <FiSmartphone className="w-4 h-4" />
                <span>Launch Mobile Web Companion</span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
