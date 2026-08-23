"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Zap,
  Scissors,
  Captions,
  Music,
  CheckCircle2,
  Play,
  RotateCcw,
  Film,
  Sparkles,
  Search,
  Download,
  Activity,
  Layers,
} from "lucide-react";

interface PresetItem {
  id: string;
  name: string;
  url: string;
  platform: string;
  platformColor: string;
  title: string;
  resolution: string;
  size: string;
  targetBytes: number;
  duration: string;
  thumbnail: string;
  sponsorSkip: string;
}

const PRESETS: PresetItem[] = [
  {
    id: "yt",
    name: "YouTube 4K HDR",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    platform: "YouTube",
    platformColor: "text-red-400 bg-red-500/10 border-red-500/20",
    title: "Rick Astley - Never Gonna Give You Up (Official 4K Remaster)",
    resolution: "4K 2160p60 • HDR",
    size: "142.8 MB",
    targetBytes: 142.8,
    duration: "3:32",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=120&fit=crop&q=80",
    sponsorSkip: "Skipped 0:24–0:48 (Sponsor Segment)",
  },
  {
    id: "tiktok",
    name: "TikTok HD",
    url: "https://www.tiktok.com/@perfected.praise4/video/7675215846851022111",
    platform: "TikTok",
    platformColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    title: "Yahweh (Refuge) — No Watermark HD Stream",
    resolution: "1080x1920 • 60fps",
    size: "10.5 MB",
    targetBytes: 10.5,
    duration: "0:50",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=120&fit=crop&q=80",
    sponsorSkip: "Clean Direct Stream",
  },
  {
    id: "bilibili",
    name: "Bilibili 1080p60",
    url: "https://www.bilibili.com/video/BV1xx411c7mD",
    platform: "Bilibili",
    platformColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    title: "Genshin Impact Anime Cutscene [FLAC Audio]",
    resolution: "1080p60 • FLAC",
    size: "89.4 MB",
    targetBytes: 89.4,
    duration: "2:15",
    thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=200&h=120&fit=crop&q=80",
    sponsorSkip: "Audio & Video Track Muxed",
  },
  {
    id: "torrent",
    name: "BitTorrent Swarm",
    url: "magnet:?xt=urn:btih:ubuntu-24.04-desktop-amd64.iso",
    platform: "Torrent",
    platformColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "Ubuntu 24.04 LTS Desktop Image (ISO)",
    resolution: "SHA256 Verified",
    size: "4.8 GB",
    targetBytes: 4800,
    duration: "Swarm",
    thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=200&h=120&fit=crop&q=80",
    sponsorSkip: "248 Peers Active",
  },
];

export function AppShowcase() {
  const [activePreset, setActivePreset] = useState<PresetItem>(PRESETS[0]);
  const [progress, setProgress] = useState(65);
  const [speed, setSpeed] = useState(64.2);
  const [sponsorblockActive, setSponsorblockActive] = useState(true);
  const [subtitlesActive, setSubtitlesActive] = useState(true);
  const [isSimulating, setIsSimulating] = useState(true);
  const [threads, setThreads] = useState<number[]>(new Array(16).fill(60));

  // Live real-time download simulation loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsSimulating(false);
            return 100;
          }
          const next = prev + Math.random() * 3 + 1.5;
          // Randomize live speed fluctuation
          setSpeed(parseFloat((Math.random() * 18 + 58).toFixed(1)));
          // Stagger 16 Aria2 parallel chunk stream velocities
          setThreads((old) =>
            old.map((_, i) => Math.min(100, Math.floor(next + (i % 4) * 5 + Math.random() * 10)))
          );
          return Math.min(100, next);
        });
      }, 150);
    }
    return () => clearInterval(timer);
  }, [isSimulating]);

  const handleSelectPreset = (preset: PresetItem) => {
    setActivePreset(preset);
    setProgress(0);
    setSpeed(68.5);
    setIsSimulating(true);
  };

  const currentDownloaded = ((progress / 100) * activePreset.targetBytes).toFixed(1);

  return (
    <section id="showcase" className="relative px-6 max-w-5xl mx-auto pt-4 pb-28 space-y-8">
      {/* Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent blur-[160px] pointer-events-none -z-10" />

      {/* Section Subtitle */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.03em] text-white">
          Experience Downlink in action.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Click any preset link below to watch the live 16-thread Aria2 chunking engine in real time.
        </p>
      </div>

      {/* Preset Action Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => handleSelectPreset(preset)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
              activePreset.id === preset.id
                ? "bg-white text-zinc-950 shadow-lg shadow-white/10 scale-105 font-bold"
                : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
            }`}
          >
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded border ${preset.platformColor}`}>
              {preset.platform}
            </span>
            <span>{preset.name}</span>
          </button>
        ))}
      </div>

      {/* ─── The Living Interactive Native App Canvas ─────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-white/[0.08] bg-[#0d0e12]/95 shadow-2xl shadow-black/95 backdrop-blur-2xl overflow-hidden"
      >
        {/* Native macOS Window Titlebar */}
        <div className="px-4 py-3 bg-zinc-950/80 border-b border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50" />
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
            <img src="/downlink-square.png" alt="Logo" className="w-3.5 h-3.5 rounded" />
            <span>Downlink</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              16x Multi-Stream
            </span>
          </div>
        </div>

        {/* Real App Header Input Bar */}
        <div className="p-4 sm:p-5 border-b border-white/[0.06] bg-zinc-950/40 space-y-3">
          <div className="relative flex items-center">
            <div className="absolute left-3.5 flex items-center pointer-events-none text-zinc-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              readOnly
              value={activePreset.url}
              className="w-full pl-10 pr-32 py-2.5 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-xs sm:text-sm text-zinc-200 font-mono focus:outline-none"
            />
            <div className="absolute right-2 flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleSelectPreset(activePreset)}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs flex items-center gap-1 shadow-sm active:scale-95 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{progress >= 100 ? "Re-Download" : "Downloading"}</span>
              </button>
            </div>
          </div>

          {/* Quick Action Toggles Bar */}
          <div className="flex items-center justify-between text-xs text-zinc-400 pt-0.5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSponsorblockActive(!sponsorblockActive)}
                className={`px-2.5 py-1 rounded-lg font-medium text-[11px] flex items-center gap-1.5 transition-colors ${
                  sponsorblockActive
                    ? "bg-violet-500/20 text-violet-300 border border-violet-500/30 font-semibold"
                    : "bg-white/[0.02] text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Scissors className="w-3 h-3" />
                <span>SponsorBlock {sponsorblockActive ? "ON" : "OFF"}</span>
              </button>

              <button
                type="button"
                onClick={() => setSubtitlesActive(!subtitlesActive)}
                className={`px-2.5 py-1 rounded-lg font-medium text-[11px] flex items-center gap-1.5 transition-colors ${
                  subtitlesActive
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold"
                    : "bg-white/[0.02] text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Captions className="w-3 h-3" />
                <span>Subtitles {subtitlesActive ? "Embed" : "Off"}</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
              Engine: yt-dlp + Aria2 16x
            </span>
          </div>
        </div>

        {/* Active Download Queue Canvas */}
        <div className="p-4 sm:p-6 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePreset.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-2xl bg-zinc-900/60 border border-white/[0.06] space-y-4 text-left shadow-lg"
            >
              {/* Media Title & Telemetry Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/[0.08] overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <Film className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-snug">{activePreset.title}</div>
                    <div className="text-xs text-zinc-400 flex flex-wrap items-center gap-2 mt-1">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono border ${activePreset.platformColor}`}>
                        {activePreset.platform}
                      </span>
                      <span>{activePreset.resolution}</span>
                      <span>•</span>
                      <span>{activePreset.size}</span>
                      {sponsorblockActive && (
                        <>
                          <span>•</span>
                          <span className="text-violet-400 font-mono text-[11px]">{activePreset.sponsorSkip}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:text-right">
                  <div>
                    <div className="text-sm font-bold font-mono text-cyan-400">
                      {progress >= 100 ? "Finished" : `${speed} MB/s`}
                    </div>
                    <div className="text-[11px] text-zinc-500 font-mono">
                      {progress >= 100
                        ? "Merged & Verified"
                        : `${currentDownloaded} / ${activePreset.size}`}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectPreset(activePreset)}
                    className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                    title="Restart Simulation"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Progress Bar with Live Gradient */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    {progress >= 100 ? (
                      <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Download Complete • Formats Merged (AAC + H.264)
                      </span>
                    ) : (
                      <span>16x Multi-Thread Chunking Active</span>
                    )}
                  </span>
                  <span className="text-cyan-400 font-bold">{Math.floor(progress)}%</span>
                </div>

                <div className="w-full h-2 rounded-full bg-zinc-800/80 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* 16 Parallel Aria2 Buffer Streams Grid */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>16 Parallel TCP Segment Buffers</span>
                  <span>{progress >= 100 ? "All Chunks Assembled" : "Saturating Bandwidth"}</span>
                </div>
                <div className="grid grid-cols-8 sm:grid-cols-16 gap-1">
                  {threads.map((val, idx) => (
                    <div
                      key={idx}
                      className="h-5 rounded bg-zinc-950/80 border border-white/[0.04] overflow-hidden flex flex-col justify-end"
                    >
                      <div
                        className="bg-cyan-500/80 transition-all duration-200"
                        style={{ height: progress >= 100 ? "100%" : `${val}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Feature Pillar Badges below canvas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl space-y-1">
          <div className="text-xs font-bold text-white flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>1-Click Format Extraction</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
            Auto-detects 4K/8K resolutions, high-bitrate video containers, and audio-only streams.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl space-y-1">
          <div className="text-xs font-bold text-white flex items-center gap-2">
            <Scissors className="w-3.5 h-3.5 text-violet-400" />
            <span>SponsorBlock Auto-Cut</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
            Automatically skips sponsorships, intros, and outro cards for clean offline viewing.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl space-y-1">
          <div className="text-xs font-bold text-white flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Live Transfer Telemetry</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
            Real-time speeds, precise time remaining, and instant audio/video muxing confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}
