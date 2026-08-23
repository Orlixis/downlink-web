"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Download,
  Captions,
  Scissors,
  Database,
  Search,
  Settings,
  Clipboard,
  Check,
  Loader2,
  Clock,
  CloudDownload,
  FolderOpen,
  Film,
  Zap,
  Activity,
  RotateCcw,
  Sparkles,
  Layers,
  ChevronDown,
} from "lucide-react";

interface PresetItem {
  id: string;
  name: string;
  url: string;
  platform: string;
  platformColor: string;
  title: string;
  author: string;
  resolution: string;
  size: string;
  targetBytes: number;
  duration: string;
  thumbnail: string;
}

const PRESETS: PresetItem[] = [
  {
    id: "yt",
    name: "YouTube 4K HDR",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    platform: "YouTube",
    platformColor: "text-red-400 bg-red-500/10 border-red-500/20",
    title: "Rick Astley - Never Gonna Give You Up (Official 4K Remaster)",
    author: "Rick Astley • 1.6B views",
    resolution: "4K 2160p60 (HDR) • MP4",
    size: "142.8 MB",
    targetBytes: 142.8,
    duration: "3:32",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop&q=80",
  },
  {
    id: "tiktok",
    name: "TikTok HD",
    url: "https://www.tiktok.com/@perfected.praise4/video/7675215846851022111",
    platform: "TikTok",
    platformColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    title: "Yahweh (Refuge) — No Watermark HD Stream",
    author: "perfected.praise4 • 240k likes",
    resolution: "1080x1920 • 60fps • MP4",
    size: "10.5 MB",
    targetBytes: 10.5,
    duration: "0:50",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=240&fit=crop&q=80",
  },
  {
    id: "bilibili",
    name: "Bilibili 1080p60",
    url: "https://www.bilibili.com/video/BV1xx411c7mD",
    platform: "Bilibili",
    platformColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    title: "Genshin Impact Anime Cutscene [FLAC Audio]",
    author: "MiHoYo Anime • 8.4M views",
    resolution: "1080p60 • FLAC Lossless",
    size: "89.4 MB",
    targetBytes: 89.4,
    duration: "2:15",
    thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=240&fit=crop&q=80",
  },
  {
    id: "torrent",
    name: "BitTorrent Swarm",
    url: "magnet:?xt=urn:btih:ubuntu-24.04-desktop-amd64.iso",
    platform: "Torrent",
    platformColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "Ubuntu 24.04 LTS Desktop Image (ISO)",
    author: "Canonical • 248 Peers",
    resolution: "SHA256 BitTorrent Checksum",
    size: "4.8 GB",
    targetBytes: 4800,
    duration: "Swarm",
    thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=240&fit=crop&q=80",
  },
];

export function AppShowcase() {
  const [selectedPreset, setSelectedPreset] = useState<PresetItem>(PRESETS[0]);
  const [urlInput, setUrlInput] = useState(PRESETS[0].url);
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(true);
  const [sponsorBlockEnabled, setSponsorBlockEnabled] = useState(true);
  const [embedMetaEnabled, setEmbedMetaEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState<"downloads" | "history">("downloads");

  const [progress, setProgress] = useState(62);
  const [speed, setSpeed] = useState(64.8);
  const [isDownloading, setIsDownloading] = useState(true);
  const [threads, setThreads] = useState<number[]>(new Array(16).fill(60));

  // Simulated live Aria2 16-thread stream progress loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isDownloading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsDownloading(false);
            return 100;
          }
          const next = prev + Math.random() * 3.5 + 1.5;
          setSpeed(parseFloat((Math.random() * 20 + 58).toFixed(1)));
          setThreads((old) =>
            old.map((_, i) => Math.min(100, Math.floor(next + (i % 4) * 6 + Math.random() * 8)))
          );
          return Math.min(100, next);
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isDownloading]);

  const handleSelectPreset = (preset: PresetItem) => {
    setSelectedPreset(preset);
    setUrlInput(preset.url);
    setProgress(0);
    setSpeed(68.2);
    setIsDownloading(true);
    setActiveTab("downloads");
  };

  const currentDownloaded = ((progress / 100) * selectedPreset.targetBytes).toFixed(1);

  return (
    <section id="showcase" className="relative px-6 max-w-6xl mx-auto pt-4 pb-28 space-y-8">
      {/* Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent blur-[160px] pointer-events-none -z-10" />

      {/* Section Subtitle */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.03em] text-white">
          The Desktop Experience. Live.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Try the genuine native interface below. Select any media preset to watch real-time stream resolution and 16x acceleration.
        </p>
      </div>

      {/* 1-Click Interactive Presets Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => handleSelectPreset(preset)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
              selectedPreset.id === preset.id
                ? "bg-white text-zinc-950 shadow-md shadow-white/10 font-bold scale-105"
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

      {/* ─── The Exact Native Desktop App Replica ────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-white/[0.08] bg-[#0c0d12] shadow-2xl shadow-black/95 backdrop-blur-2xl overflow-hidden text-left"
      >
        {/* 1. HeaderBar (macOS Traffic lights, URL bar, action button) */}
        <div className="px-4 py-3 bg-[#111218] border-b border-white/[0.06] flex items-center justify-between gap-3">
          {/* Traffic lights */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50" />
          </div>

          {/* URL Search & Paste input */}
          <div className="flex-1 max-w-2xl relative flex items-center">
            <div className="absolute left-3 flex items-center pointer-events-none text-zinc-500">
              <Search className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              readOnly
              value={urlInput}
              placeholder="Paste one or more video URLs here..."
              className="w-full pl-9 pr-24 py-1.5 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-xs text-zinc-200 font-mono focus:outline-none placeholder:text-zinc-600"
            />
            <div className="absolute right-1.5 flex items-center gap-1">
              <button
                type="button"
                onClick={() => handleSelectPreset(selectedPreset)}
                className="px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-[11px] font-medium text-zinc-300 flex items-center gap-1 transition-colors"
              >
                <Clipboard className="w-3 h-3 text-cyan-400" />
                <span>Paste</span>
              </button>
            </div>
          </div>

          {/* Right gear & badge */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="hidden sm:flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              16x Engine
            </span>
            <div className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-white/[0.04]">
              <Settings className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* 2. Main 2-Panel Workspace */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
          {/* Left Panel: Preview & Format Selector (7 cols) */}
          <div className="md:col-span-7 p-5 border-r border-white/[0.06] flex flex-col justify-between space-y-4 bg-zinc-950/40">
            {/* Video Preview Card */}
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-900 group aspect-[16/9] max-h-[200px]">
                <img
                  src={selectedPreset.thumbnail}
                  alt={selectedPreset.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-cyan-300 border border-white/[0.1]">
                      {selectedPreset.resolution}
                    </span>
                    <div className="text-xs font-bold text-white truncate max-w-[280px]">
                      {selectedPreset.title}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-black/80 text-zinc-200">
                    {selectedPreset.duration}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="text-zinc-400">{selectedPreset.author}</span>
                <span className="font-mono text-cyan-400">{selectedPreset.size}</span>
              </div>
            </div>

            {/* ActionBar (Subtitles, SponsorBlock, Embed Meta, Download Button) */}
            <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setSubtitlesEnabled(!subtitlesEnabled)}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
                    subtitlesEnabled
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-900/40"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  <Captions className="h-3.5 w-3.5" />
                  <span>Subtitles</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSponsorBlockEnabled(!sponsorBlockEnabled)}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
                    sponsorBlockEnabled
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-900/40"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  <Scissors className="h-3.5 w-3.5" />
                  <span>SponsorBlock</span>
                </button>

                <button
                  type="button"
                  onClick={() => setEmbedMetaEnabled(!embedMetaEnabled)}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
                    embedMetaEnabled
                      ? "bg-emerald-600 text-white shadow-sm shadow-emerald-900/40"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  <Database className="h-3.5 w-3.5" />
                  <span>Embed Meta</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleSelectPreset(selectedPreset)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-4 py-2 text-xs shadow-md shadow-cyan-900/30 active:scale-95 transition-all"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    <span>Downloading…</span>
                  </>
                ) : (
                  <>
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Panel: Download Queue / Live Progress (5 cols) */}
          <div className="md:col-span-5 p-4 flex flex-col justify-between space-y-4 bg-zinc-950/80">
            {/* Queue Tabs Header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
              <div className="flex items-center gap-3 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setActiveTab("downloads")}
                  className={`flex items-center gap-1.5 pb-1 border-b-2 transition-colors ${
                    activeTab === "downloads"
                      ? "border-cyan-400 text-white"
                      : "border-transparent text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <CloudDownload className="w-3.5 h-3.5" />
                  <span>Downloads ({progress >= 100 ? 0 : 1})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("history")}
                  className={`flex items-center gap-1.5 pb-1 border-b-2 transition-colors ${
                    activeTab === "history"
                      ? "border-cyan-400 text-white"
                      : "border-transparent text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>History ({progress >= 100 ? 1 : 0})</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleSelectPreset(selectedPreset)}
                className="p-1 rounded text-zinc-500 hover:text-zinc-300 transition-colors"
                title="Restart stream"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Queue Item Body */}
            <div className="flex-1 space-y-3">
              {activeTab === "downloads" ? (
                progress >= 100 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-2 text-zinc-500">
                    <Check className="w-8 h-8 text-emerald-400" />
                    <div className="text-xs font-semibold text-zinc-300">All downloads completed</div>
                    <div className="text-[11px] text-zinc-500">Check History tab or pick another preset above</div>
                  </div>
                ) : (
                  /* Active Download Card */
                  <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-white/[0.08] space-y-3">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400">
                        <Film className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-white truncate">{selectedPreset.title}</div>
                        <div className="text-[10px] text-zinc-400 flex items-center gap-2 mt-0.5">
                          <span className="text-cyan-400 font-mono font-semibold">{speed} MB/s</span>
                          <span>•</span>
                          <span className="font-mono">{currentDownloaded} / {selectedPreset.size}</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                        <span>16x Aria2 Acceleration</span>
                        <span className="text-cyan-400 font-bold">{Math.floor(progress)}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-150"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    {/* 16 Concurrent Segment Streams */}
                    <div className="space-y-1 pt-1">
                      <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                        <span>16 Parallel TCP Streams</span>
                        <span>Saturating Bandwidth</span>
                      </div>
                      <div className="grid grid-cols-8 gap-1">
                        {threads.slice(0, 8).map((val, idx) => (
                          <div key={idx} className="h-3 rounded bg-zinc-950 border border-white/[0.04] overflow-hidden flex flex-col justify-end">
                            <div className="bg-cyan-500/80 transition-all" style={{ height: `${val}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              ) : (
                /* History Tab */
                <div className="p-3 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5 truncate">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-300 font-medium truncate">{selectedPreset.title}</span>
                  </div>
                  <button type="button" className="p-1 text-zinc-500 hover:text-zinc-300">
                    <FolderOpen className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Bottom mini status bar */}
            <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] text-zinc-500 font-mono">
              <span>Status: Engine Ready</span>
              <span>Downlink v0.1.64</span>
            </div>
          </div>
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
