"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Radio, ArrowUpRight } from "lucide-react";

interface Platform {
  name: string;
  category: string;
  badge: string;
}

const PLATFORMS: Platform[] = [
  { name: "YouTube", category: "4K / 8K HDR", badge: "SponsorBlock" },
  { name: "TikTok", category: "No Watermark", badge: "HD 60fps" },
  { name: "Instagram", category: "Reels & Stories", badge: "Original Bitrate" },
  { name: "X / Twitter", category: "Video & Audio", badge: "Max Res" },
  { name: "Bilibili", category: "1080p60 Anime", badge: "FLAC Audio" },
  { name: "BitTorrent", category: "Multi-Peer Magnet", badge: "16-Chunk Swarms" },
  { name: "Twitch", category: "VODs & Clips", badge: "Source Quality" },
  { name: "SoundCloud", category: "Lossless Audio", badge: "ID3 Metadata" },
  { name: "Vimeo", category: "Pro 4K Videos", badge: "Direct Streams" },
  { name: "Facebook", category: "HD Public Reels", badge: "AAC Muxed" },
  { name: "Reddit", category: "Native Video", badge: "Audio Merged" },
];

export function PlatformMarquee() {
  return (
    <section className="relative py-12 border-y border-white/[0.04] bg-white/[0.01] overflow-hidden select-none">
      {/* Glow Vignette edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07080a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07080a] to-transparent z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-6 text-center">
        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Direct Stream Extraction from 1,000+ Media Sources
        </p>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
        {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((p, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-cyan-500/30 transition-all backdrop-blur-md group"
          >
            <div className="space-y-0.5 text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors">
                  {p.name}
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/[0.04] text-zinc-400 group-hover:text-cyan-300 border border-white/[0.05]">
                  {p.badge}
                </span>
              </div>
              <div className="text-[10px] text-zinc-500 font-mono group-hover:text-zinc-400">
                {p.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
