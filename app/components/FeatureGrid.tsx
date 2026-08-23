"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Zap,
  Scissors,
  Captions,
  Music,
  Puzzle,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export function FeatureGrid() {
  const [activeChunk, setActiveChunk] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 px-6 max-w-6xl mx-auto space-y-14">
      {/* Section Header with Consistent Eyebrow */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono uppercase tracking-widest text-cyan-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          Engineered for Performance
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white leading-tight">
          Raw speed. <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            Zero bloatware.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Built in native Rust and Tauri for instant startup, negligible memory footprint, and unthrottled gigabit downloads.
        </p>
      </div>

      {/* Modern Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Bento 1: 16x Aria2 Acceleration (Span 7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/30 p-7 sm:p-8 flex flex-col justify-between space-y-6 transition-all group relative overflow-hidden"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              16x Aria2 Multi-Threaded Chunking
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal max-w-lg">
              Splits large media files into up to 16 concurrent TCP byte streams. Bypasses host server single-connection rate-limits and saturates your fiber connection up to 10 Gbps.
            </p>
          </div>

          {/* Interactive 16-Chunk Visualizer */}
          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/[0.06] space-y-2.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                16 Parallel Chunks Active
              </span>
              <span className="text-cyan-400 font-bold">14.8 MB/s</span>
            </div>

            {/* 16 Chunks Grid */}
            <div className="grid grid-cols-8 gap-1.5">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActiveChunk(i)}
                  onMouseLeave={() => setActiveChunk(null)}
                  className={`h-4 rounded-md transition-all duration-200 cursor-pointer ${
                    activeChunk === i
                      ? "bg-white scale-110 shadow-lg shadow-cyan-400/50"
                      : "bg-cyan-500/30 hover:bg-cyan-400"
                  }`}
                  style={{
                    opacity: 0.4 + (i % 4) * 0.2,
                  }}
                  title={`Thread ${i + 1}: 925 KB/s`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bento 2: SponsorBlock Auto-Cut (Span 5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-violet-500/30 p-7 sm:p-8 flex flex-col justify-between space-y-6 transition-all group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
              <Scissors className="w-5 h-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              SponsorBlock Auto-Cut
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Automatically strips sponsored segments, intros, self-promotions, and subscribe begging directly from the video stream with zero re-encoding loss.
            </p>
          </div>

          {/* Timeline representation */}
          <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/[0.06] space-y-2">
            <div className="flex justify-between text-[10px] font-mono text-zinc-400">
              <span>00:00</span>
              <span className="text-violet-400 font-bold">Auto-Cut: [01:20 - 02:45] Sponsor</span>
              <span>12:40</span>
            </div>
            <div className="h-2 rounded-full bg-zinc-800 flex overflow-hidden">
              <div className="w-[20%] bg-blue-500" />
              <div className="w-[15%] bg-red-500/40 relative" title="Sponsor Segment (Excised)" />
              <div className="w-[65%] bg-blue-500" />
            </div>
          </div>
        </motion.div>

        {/* Bento 3: Lossless Audio & Metadata (Span 4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-emerald-500/30 p-7 flex flex-col justify-between space-y-4 transition-all group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
              <Music className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Lossless Audio Extraction
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Extract pristine FLAC, Opus, and 320kbps MP3 audio with full embedded album artwork and ID3 metadata tags.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 pt-2">
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">FLAC 24-bit</span>
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">Opus 160k</span>
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">MP3 320k</span>
          </div>
        </motion.div>

        {/* Bento 4: Subtitles & Auto-Captions (Span 4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-amber-500/30 p-7 flex flex-col justify-between space-y-4 transition-all group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              <Captions className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Subtitles &amp; Closed Captions
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Downloads official and auto-generated subtitle tracks across all languages, muxing them directly into your output container.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 pt-2">
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">SRT / VTT</span>
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">Multi-Language</span>
          </div>
        </motion.div>

        {/* Bento 5: 100% Free & MIT Licensed (Span 4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-blue-500/30 p-7 flex flex-col justify-between space-y-4 transition-all group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Privacy First &amp; Open Source
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              100% free under the MIT license. Zero telemetry, zero bundled adware, and zero accounts required.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 pt-2">
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">MIT License</span>
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">No Telemetry</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
