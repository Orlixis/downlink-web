"use client";

import React from "react";
import {
  Zap,
  Scissors,
  Captions,
  Music,
  Radio,
  Puzzle,
  Shield,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function FeatureGrid() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      {/* Section Title */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Engineered Without Compromise</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Everything you need. <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Nothing you don't.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Built on lightweight native Rust and modern web standards. No ads, no telemetry, no subscription fees.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bento 1: 16x Aria2 Multi-Threading (Spans 2 cols on md) */}
        <div className="md:col-span-2 p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl space-y-4 hover:border-zinc-700 transition-all group relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">16x Multi-Thread Chunking Engine</h3>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
              Downlink splits files into 16 parallel chunks using an optimized Aria2 engine, bypassing ISP throttling and saturating your full bandwidth up to 10 Gbps.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-cyan-300">
            <span className="px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/60">Aria2 Multi-Stream</span>
            <span className="px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/60">Auto-Resume Resilient</span>
            <span className="px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/60">Checksum Verified</span>
          </div>
        </div>

        {/* Bento 2: SponsorBlock AI */}
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl space-y-4 hover:border-zinc-700 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
            <Scissors className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">SponsorBlock Auto-Cut</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Automatically cuts sponsored promotions, intros, and outros from your downloaded videos for a clean viewing experience.
          </p>
        </div>

        {/* Bento 3: Smart Subtitles */}
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl space-y-4 hover:border-zinc-700 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
            <Captions className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Subtitles & Captions</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Extracts auto-generated and official subtitle streams in multiple languages, embedding them cleanly as SRT, VTT, or ASS tracks.
          </p>
        </div>

        {/* Bento 4: Lossless Audio */}
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl space-y-4 hover:border-zinc-700 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
            <Music className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Lossless Audio & Tagging</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Extract pure FLAC, Opus, or 320kbps MP3 audio with embedded album cover art, artist tags, and metadata ready for your music library.
          </p>
        </div>

        {/* Bento 5: BitTorrent & Browser Extensions */}
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl space-y-4 hover:border-zinc-700 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
            <Puzzle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Browser Extensions</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            1-click capture extensions for Chrome, Edge, Firefox, and Safari that instantly intercept downloads and stream URLs into Downlink.
          </p>
        </div>
      </div>
    </section>
  );
}
