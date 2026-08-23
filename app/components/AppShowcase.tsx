"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CloudDownload,
  Clock,
  Trash2,
  FolderOpen,
  X,
  Play,
  RotateCcw,
  Pencil,
  Pause,
  AlertCircle,
  Loader2,
  Video,
  Captions,
  Scissors,
  Database,
  Download,
  Settings,
  ClipboardPaste,
  Check,
} from "lucide-react";

interface MediaPreset {
  id: string;
  name: string;
  url: string;
  platform: string;
  platformColor: string;
  title: string;
  uploader: string;
  qualityTag: string;
  thumbnail: string;
  duration: string;
  size: string;
  targetBytes: number;
}

const PRESETS: MediaPreset[] = [
  {
    id: "yt",
    name: "YouTube 4K HDR",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    platform: "YouTube",
    platformColor: "text-red-400 bg-red-500/10 border-red-500/20",
    title: "Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)",
    uploader: "Rick Astley",
    qualityTag: "4 K",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=280&fit=crop&q=80",
    duration: "3:32",
    size: "229.2 MB",
    targetBytes: 229.2,
  },
  {
    id: "tiktok",
    name: "TikTok HD",
    url: "https://www.tiktok.com/@perfected.praise4/video/7675215846851022111",
    platform: "TikTok",
    platformColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    title: "Yahweh (Refuge) — No Watermark HD Stream",
    uploader: "perfected.praise4",
    qualityTag: "1080p",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=280&fit=crop&q=80",
    duration: "0:50",
    size: "18.4 MB",
    targetBytes: 18.4,
  },
  {
    id: "bilibili",
    name: "Bilibili 1080p60",
    url: "https://www.bilibili.com/video/BV1xx411c7mD",
    platform: "Bilibili",
    platformColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    title: "Genshin Impact Anime Cutscene [FLAC Audio]",
    uploader: "MiHoYo Anime",
    qualityTag: "1080p60",
    thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=280&fit=crop&q=80",
    duration: "2:15",
    size: "89.4 MB",
    targetBytes: 89.4,
  },
  {
    id: "torrent",
    name: "BitTorrent Swarm",
    url: "magnet:?xt=urn:btih:ubuntu-24.04-desktop-amd64.iso",
    platform: "Torrent",
    platformColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "Ubuntu 24.04 LTS Desktop Image (ISO)",
    uploader: "Canonical",
    qualityTag: "ISO",
    thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=500&h=280&fit=crop&q=80",
    duration: "Swarm",
    size: "4.8 GB",
    targetBytes: 4800,
  },
];

export function AppShowcase() {
  const [selectedPreset, setSelectedPreset] = useState<MediaPreset>(PRESETS[0]);
  const [urlInput, setUrlInput] = useState("");
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(false);
  const [sponsorBlockEnabled, setSponsorBlockEnabled] = useState(false);
  const [embedMetaEnabled, setEmbedMetaEnabled] = useState(false);

  const [activeQueueTab, setActiveQueueTab] = useState<"queue" | "history">("queue");
  const [downloadProgress, setDownloadProgress] = useState(15.4);
  const [downloadSpeed, setDownloadSpeed] = useState(14.1);
  const [isSimulating, setIsSimulating] = useState(true);

  // Live real-time download simulation loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      timer = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            return 100;
          }
          const next = prev + Math.random() * 2 + 0.8;
          setDownloadSpeed(parseFloat((Math.random() * 4 + 12.8).toFixed(1)));
          return Math.min(100, next);
        });
      }, 250);
    }
    return () => clearInterval(timer);
  }, [isSimulating]);

  const handleSelectPreset = (preset: MediaPreset) => {
    setSelectedPreset(preset);
    setUrlInput(preset.url);
    setDownloadProgress(0);
    setDownloadSpeed(14.5);
    setIsSimulating(true);
    setActiveQueueTab("queue");
  };

  const currentDownloaded = ((downloadProgress / 100) * selectedPreset.targetBytes).toFixed(1);

  return (
    <section id="showcase" className="relative px-4 sm:px-6 max-w-6xl mx-auto pt-4 pb-28 space-y-8">
      {/* Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent blur-[160px] pointer-events-none -z-10" />

      {/* Preset Action Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => handleSelectPreset(preset)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
              selectedPreset.id === preset.id
                ? "bg-white text-zinc-950 shadow-lg shadow-white/10 scale-105"
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
        className="rounded-2xl border border-zinc-800/90 bg-[#121318] shadow-2xl shadow-black/95 overflow-hidden text-left"
      >
        {/* Exact HeaderBar */}
        <div className="relative flex items-center border-b border-zinc-800/80 bg-[#121318] px-4 py-3">
          {/* Traffic lights on the far left */}
          <div className="flex items-center gap-2 pr-4 flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50" />
          </div>

          {/* Logo mark */}
          <div className="flex-shrink-0 pr-3">
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm">
              <img src="/downlink-square.png" alt="Downlink" className="w-6 h-6 rounded-md" />
            </div>
          </div>

          {/* URL Search & Paste input */}
          <div className="relative flex-1">
            <input
              type="text"
              readOnly
              value={urlInput}
              placeholder="Paste one or more video URLs here..."
              className="w-full rounded-lg border border-zinc-700/70 bg-zinc-900 py-2 pl-3 pr-10 text-sm leading-5 text-white placeholder-zinc-500 outline-none focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20 font-mono"
            />
            <div className="absolute right-1.5 top-1.5 flex items-center gap-1">
              <button
                type="button"
                onClick={() => handleSelectPreset(selectedPreset)}
                className="flex h-6 w-6 items-center justify-center rounded text-zinc-500 hover:bg-zinc-800 hover:text-blue-400"
                title="Paste from clipboard (⌘V)"
              >
                <ClipboardPaste className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Settings button on the far right */}
          <div className="pl-3 flex-shrink-0">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Exact 2-Panel Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px] bg-[#121318]">
          {/* ── Left Column: EmptyDropState or Preview (7 cols) ────────── */}
          <div className="md:col-span-7 p-6 border-r border-zinc-800/80 flex flex-col justify-between space-y-4">
            {/* EmptyDropState view matching production desktop app */}
            <div className="flex flex-col items-center text-center my-auto px-4 w-full max-w-md mx-auto">
              {/* Floating icon with animated pull-down arrows */}
              <div className="relative mb-8 mt-2">
                {/* Ambient glow */}
                <div className="absolute inset-0 blur-2xl opacity-40 rounded-full bg-gradient-to-br from-blue-500/50 to-cyan-500/30 scale-150" />

                {/* Icon container */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 ring-1 ring-white/10 shadow-xl">
                  <CloudDownload className="h-10 w-10 text-blue-400" />
                </div>

                {/* Staggered chevron arrows pulling downward */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                      <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="url(#empty-arrow-mock)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient id="empty-arrow-mock" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

              {/* Heading */}
              <h1 className="mb-2 mt-4 text-xl font-bold tracking-tight text-white">
                Paste a video URL to begin
              </h1>
              <p className="mb-6 text-xs text-zinc-400 leading-relaxed max-w-sm">
                Supports YouTube, Vimeo, TikTok, Twitter, Instagram &amp; 1,000+ other sites
              </p>

              {/* Keyboard hint */}
              <div className="mb-7 flex items-center gap-2 text-zinc-500">
                <kbd className="inline-flex items-center rounded-md border border-zinc-700 bg-zinc-800/80 px-2 py-1 text-xs font-medium text-zinc-300 shadow-sm font-mono">
                  ⌘V
                </kbd>
                <span className="text-xs">to paste from clipboard</span>
              </div>

              {/* Ghost example URLs */}
              <div className="w-full space-y-2">
                <p className="mb-2 text-[10px] uppercase tracking-wider text-zinc-500 font-semibold text-left">
                  EXAMPLE PATTERNS
                </p>
                {[
                  { label: "SINGLE VIDEO", url: "youtube.com/watch?v=…" },
                  { label: "EPISODE RANGE", url: "site.com/episode-[1-24]" },
                  { label: "PLAYLIST", url: "youtube.com/playlist?list=…" },
                ].map(({ label, url }) => (
                  <div
                    key={url}
                    className="flex items-center gap-2.5 rounded-lg border border-zinc-800/80 bg-zinc-900/40 px-3 py-2 text-left"
                  >
                    <span className="min-w-[85px] text-[10px] font-medium text-zinc-500 uppercase tracking-wide font-mono">
                      {label}
                    </span>
                    <span className="flex-1 truncate font-mono text-[11px] text-zinc-500">
                      {url}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exact ActionBar */}
            <div className="border-t border-zinc-800/80 pt-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setSubtitlesEnabled(!subtitlesEnabled)}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
                    subtitlesEnabled
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  <Captions className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>Subtitles</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSponsorBlockEnabled(!sponsorBlockEnabled)}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
                    sponsorBlockEnabled
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  <Scissors className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>SponsorBlock</span>
                </button>

                <button
                  type="button"
                  onClick={() => setEmbedMetaEnabled(!embedMetaEnabled)}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
                    embedMetaEnabled
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  <Database className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>Embed Meta</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleSelectPreset(selectedPreset)}
                className="flex min-w-[120px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-blue-900/30 active:scale-95 transition-all"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* ── Right Column: DownloadQueue (5 cols) ─────────────────── */}
          <div className="md:col-span-5 flex flex-col justify-between bg-[#101116] border-l border-zinc-800/80">
            {/* Top Queue Capsule Header */}
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800/80 p-3 pb-2.5">
                <div className="flex rounded-lg bg-white/[0.04] p-0.5 ring-1 ring-white/[0.05]">
                  <button
                    type="button"
                    onClick={() => setActiveQueueTab("queue")}
                    className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                      activeQueueTab === "queue"
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <CloudDownload className="h-3.5 w-3.5" />
                    <span>Queue</span>
                    <span className="rounded-full bg-blue-500 px-1.5 py-0.2 text-[10px] font-semibold text-white">
                      3
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveQueueTab("history")}
                    className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                      activeQueueTab === "history"
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <Clock className="h-3.5 w-3.5" />
                    <span>History</span>
                    <span className="rounded-full bg-white/10 px-1.5 py-0.2 text-[10px] text-zinc-300">
                      18
                    </span>
                  </button>
                </div>

                <span className="text-[11px] text-zinc-500 font-mono">3 tasks</span>
              </div>

              {/* Active downloads summary strip */}
              {activeQueueTab === "queue" && (
                <div className="flex items-center justify-between border-b border-blue-500/10 bg-blue-500/5 px-3 py-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[11px] font-medium text-blue-300">
                      1 downloading
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-400 tabular-nums font-mono">
                    {downloadSpeed} MB/s
                  </span>
                </div>
              )}
            </div>

            {/* Queue Item Cards */}
            <div className="flex-1 overflow-y-auto p-2.5 space-y-2">
              {activeQueueTab === "queue" ? (
                <>
                  {/* Task Card 1: Active Downloading Item */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-3 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5 min-w-0">
                        {/* Thumbnail */}
                        <div className="relative w-14 h-9 flex-shrink-0 rounded-lg overflow-hidden bg-black border border-white/10">
                          <img
                            src={selectedPreset.thumbnail}
                            alt={selectedPreset.title}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-0.5 left-0.5 text-[8px] font-mono font-bold px-1 rounded bg-black/80 text-white">
                            {selectedPreset.qualityTag}
                          </span>
                        </div>

                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-white truncate">
                            {selectedPreset.title}
                          </div>
                          <div className="text-[10px] text-zinc-400">
                            {selectedPreset.uploader}
                          </div>
                          <div className="mt-1 flex items-center gap-1.5">
                            <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold leading-none bg-blue-500/15 text-blue-400">
                              <Loader2 className="h-2.5 w-2.5 animate-spin" />
                              Downloading video (1/2)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons top right */}
                      <div className="flex items-center gap-1 text-zinc-500">
                        <button type="button" className="p-1 hover:text-zinc-300">
                          <Pause className="h-3 w-3" />
                        </button>
                        <button type="button" className="p-1 hover:text-zinc-300">
                          <FolderOpen className="h-3 w-3" />
                        </button>
                        <button type="button" className="p-1 hover:text-zinc-300">
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    {/* Telemetry info */}
                    <div className="flex justify-between text-[10px] font-mono text-zinc-400 px-0.5">
                      <span>{downloadSpeed} MB/s &nbsp; 14s left</span>
                    </div>

                    {/* Glowing Progress bar */}
                    <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-200"
                        style={{ width: `${downloadProgress}%` }}
                      />
                    </div>

                    <div className="flex justify-between text-[10px] font-mono text-zinc-500 px-0.5">
                      <span>{selectedPreset.size}</span>
                      <span>{downloadProgress.toFixed(1)}%</span>
                    </div>
                  </div>

                  {/* Task Card 2: Interrupted */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-3 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">
                          <Video className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-medium text-white truncate">
                            Video from...
                          </div>
                          <div className="mt-1 flex items-center gap-1.5">
                            <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold leading-none bg-orange-500/15 text-orange-400">
                              <Play className="h-2.5 w-2.5" />
                              Interrupted — Resume
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-zinc-500">
                        <button type="button" className="p-1 hover:text-zinc-300">
                          <RotateCcw className="h-3 w-3" />
                        </button>
                        <button type="button" className="p-1 hover:text-zinc-300">
                          <Pencil className="h-3 w-3" />
                        </button>
                        <button type="button" className="p-1 hover:text-zinc-300">
                          <FolderOpen className="h-3 w-3" />
                        </button>
                        <button type="button" className="p-1 hover:text-zinc-300">
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-yellow-400"
                        style={{ width: "65%" }}
                      />
                    </div>
                  </div>

                  {/* Task Card 3: Failed */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-3 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">
                          <Video className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-medium text-white truncate">
                            Video from...
                          </div>
                          <div className="mt-1 flex items-center gap-1.5">
                            <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold leading-none bg-red-500/15 text-red-400">
                              <AlertCircle className="h-2.5 w-2.5" />
                              Failed
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-zinc-500">
                        <button type="button" className="p-1 hover:text-zinc-300">
                          <RotateCcw className="h-3 w-3" />
                        </button>
                        <button type="button" className="p-1 hover:text-zinc-300">
                          <Pencil className="h-3 w-3" />
                        </button>
                        <button type="button" className="p-1 hover:text-zinc-300">
                          <FolderOpen className="h-3 w-3" />
                        </button>
                        <button type="button" className="p-1 hover:text-zinc-300">
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* History Tab */
                <div className="space-y-2">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-2.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 truncate">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="text-zinc-300 truncate">Rick Astley - Never Gonna Give You Up (4K)</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">229.2 MB</span>
                  </div>
                </div>
              )}
            </div>

            {/* Clear Queue button at bottom */}
            <div className="border-t border-white/[0.06] p-2">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs text-zinc-500 transition-colors hover:bg-white/5 hover:text-zinc-300"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Clear Queue</span>
              </button>
            </div>
          </div>
        </div>

        {/* Exact Desktop Footer Status Bar */}
        <div className="flex items-center justify-between border-t border-zinc-800/80 bg-[#121318] px-4 py-2 text-xs select-none">
          {/* Left: App Branding & Release Version */}
          <div className="flex items-center gap-2">
            <img src="/downlink-square.png" alt="Downlink" className="w-3.5 h-3.5 rounded opacity-70" />
            <span className="text-[11px] font-medium text-zinc-500">Downlink v0.1.64</span>
          </div>

          {/* Right: Engine Ready */}
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/90 animate-pulse" />
            <span>Engine Ready</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
