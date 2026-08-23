"use client";

import React from "react";
import { motion } from "motion/react";
import { Zap, Scissors, Captions, Music, Puzzle, Layers } from "lucide-react";

export function FeatureGrid() {
  const cards = [
    {
      icon: Zap,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      title: "16x Aria2 Multi-Threading",
      description:
        "Splits large files into up to 16 concurrent TCP chunks, bypassing server rate-limiting and saturating your full bandwidth up to 10 Gbps.",
    },
    {
      icon: Scissors,
      color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
      title: "SponsorBlock Integration",
      description:
        "Automatically identifies and cuts sponsored promotions, intros, and end screens using the open SponsorBlock database.",
    },
    {
      icon: Captions,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      title: "Subtitles & Auto-Captions",
      description:
        "Downloads official and auto-generated subtitle streams across all languages, embedding them directly into MP4/MKV tracks.",
    },
    {
      icon: Music,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      title: "Lossless Audio Extraction",
      description:
        "Extracts pristine FLAC, Opus, and 320kbps MP3 audio with full embedded album artwork and metadata tags.",
    },
    {
      icon: Layers,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      title: "Playlists & Torrents",
      description:
        "Download entire YouTube channels, playlists, or BitTorrent magnet swarms with batch queuing and automated disk verification.",
    },
    {
      icon: Puzzle,
      color: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      title: "Browser Extensions",
      description:
        "1-click capture extensions for Chrome, Edge, Firefox, and Safari that beam links directly from your browser to Downlink.",
    },
  ];

  return (
    <section id="features" className="py-28 px-6 max-w-6xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white">
          Raw speed. Zero bloat.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Built in native Rust and Tauri for instant startup, low CPU overhead, and rock-solid reliability.
        </p>
      </div>

      {/* Grid of 6 Clean Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all space-y-4 group"
          >
            <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${card.color} group-hover:scale-105 transition-transform`}>
              <card.icon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">{card.title}</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
