"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Download,
  CheckCircle2,
  Zap,
  Play,
  RotateCcw,
  Film,
  Layers,
  Activity,
  FileCheck,
  Scissors,
  Sliders,
  ExternalLink,
} from "lucide-react";

interface PresetItem {
  id: string;
  name: string;
  url: string;
  platform: string;
  badgeColor: string;
  sampleTitle: string;
  sampleSize: string;
  sampleDuration: string;
  sampleSpeed: string;
}

const PRESETS: PresetItem[] = [
  {
    id: "yt",
    name: "YouTube 4K HDR",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    platform: "YouTube",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
    sampleTitle: "Rick Astley - Never Gonna Give You Up (Official 4K Remaster)",
    sampleSize: "142.8 MB",
    sampleDuration: "3:32",
    sampleSpeed: "64.2 MB/s",
  },
  {
    id: "tiktok",
    name: "TikTok HD",
    url: "https://www.tiktok.com/@perfected.praise4/video/7675215846851022111",
    platform: "TikTok",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    sampleTitle: "Yahweh (Refuge) — No Watermark HD",
    sampleSize: "10.5 MB",
    sampleDuration: "0:50",
    sampleSpeed: "42.1 MB/s",
  },
  {
    id: "bilibili",
    name: "Bilibili 1080p60",
    url: "https://www.bilibili.com/video/BV1xx411c7mD",
    platform: "Bilibili",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    sampleTitle: "Genshin Impact Anime Cutscene [FLAC Audio]",
    sampleSize: "89.4 MB",
    sampleDuration: "2:15",
    sampleSpeed: "55.8 MB/s",
  },
  {
    id: "magnet",
    name: "BitTorrent Swarm",
    url: "magnet:?xt=urn:btih:ubuntu-24.04-desktop-amd64.iso",
    platform: "Torrent",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    sampleTitle: "Ubuntu 24.04 LTS Desktop Image (ISO)",
    sampleSize: "4.8 GB",
    sampleDuration: "Torrent",
    sampleSpeed: "92.4 MB/s",
  },
];

export function AppShowcase() {
  const [activeTab, setActiveTab] = useState<"screenshot" | "simulator">("screenshot");
  const [selectedPreset, setSelectedPreset] = useState<PresetItem>(PRESETS[0]);
  const [simProgress, setSimProgress] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [threads, setThreads] = useState<number[]>(new Array(16).fill(0));

  // Run simulated 16-thread Aria2 download progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating) {
      interval = setInterval(() => {
        setSimProgress((prev) => {
          if (prev >= 100) {
            setIsSimulating(false);
            return 100;
          }
          const increment = Math.random() * 8 + 4;
          // Randomize thread activity
          setThreads((old) => old.map(() => Math.floor(Math.random() * 100)));
          return Math.min(100, prev + increment);
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleStartSim = (preset: PresetItem) => {
    setSelectedPreset(preset);
    setSimProgress(0);
    setIsSimulating(true);
  };

  return (
    <section id="showcase" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Crafted for desktop mastery.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Explore the clean, high-performance interface or test the multi-connection engine live.
        </p>

        {/* Tab Switcher */}
        <div className="pt-4 flex items-center justify-center">
          <div className="inline-flex p-1 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setActiveTab("screenshot")}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "screenshot"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-cyan-900/30"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Native Desktop App UI
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("simulator");
                if (simProgress === 0 && !isSimulating) handleStartSim(selectedPreset);
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === "simulator"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-cyan-900/30"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Live Engine Simulator
            </button>
          </div>
        </div>
      </div>

      {/* Realistic macOS App Showcase Container */}
      <div className="relative rounded-3xl bg-zinc-900/80 border border-zinc-800/90 shadow-2xl shadow-black/80 backdrop-blur-2xl overflow-hidden group">
        {/* macOS Window Top Chrome */}
        <div className="px-4 py-3 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/40" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/40" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 border border-green-600/40" />
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
            <img src="/downlink-square.png" alt="Logo" className="w-4 h-4 rounded" />
            <span>Downlink — {activeTab === "screenshot" ? "Production Interface" : "Aria2 Parallel Engine"}</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-cyan-400 font-semibold">16x Chunks</span>
          </div>
        </div>

        {/* Viewport Content */}
        {activeTab === "screenshot" ? (
          <div className="relative p-2 sm:p-4 bg-zinc-950/90">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-inner">
              <img
                src="/screenshot1.png"
                alt="Downlink Desktop Application Interface"
                className="w-full h-auto object-cover rounded-2xl"
              />

              {/* Hotspot Floating Feature Callouts */}
              <div className="hidden lg:block absolute top-6 left-6 p-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 backdrop-blur-xl shadow-xl text-left max-w-xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Real-Time Stream Extraction</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-tight">
                  Auto-detects 4K/8K resolutions, audio bitrates, and video containers.
                </p>
              </div>

              <div className="hidden lg:block absolute bottom-6 right-6 p-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 backdrop-blur-xl shadow-xl text-left max-w-xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SponsorBlock & Subtitles</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-tight">
                  Automatically cuts sponsor segments and embeds multi-language captions.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Live Interactive Engine Simulator */
          <div className="p-6 sm:p-8 bg-zinc-950/95 space-y-6">
            {/* Presets Row */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Select a Test Platform to Simulate:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleStartSim(preset)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedPreset.id === preset.id
                        ? "bg-cyan-500/10 border-cyan-500/50 text-white shadow-md shadow-cyan-900/20"
                        : "bg-zinc-900/70 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">{preset.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded border font-mono ${preset.badgeColor}`}>
                        {preset.platform}
                      </span>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono truncate mt-1">{preset.url}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Download Progress Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                    <Film className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{selectedPreset.sampleTitle}</div>
                    <div className="text-xs text-zinc-400 flex items-center gap-3">
                      <span>Size: {selectedPreset.sampleSize}</span>
                      <span>•</span>
                      <span>Format: MP4 (H.264 + AAC)</span>
                      <span>•</span>
                      <span className="text-cyan-400 font-mono font-bold">Speed: {selectedPreset.sampleSpeed}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleStartSim(selectedPreset)}
                    className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Re-Run</span>
                  </button>
                </div>
              </div>

              {/* Progress Meter */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    {simProgress >= 100 ? "Post-Processing & Tag Embedding Complete" : "16-Chunk Aria2 Acceleration Active"}
                  </span>
                  <span className="text-cyan-400 font-bold">{Math.floor(simProgress)}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-200"
                    style={{ width: `${simProgress}%` }}
                  />
                </div>
              </div>

              {/* 16 Parallel Aria2 Thread Visualization */}
              <div className="pt-2 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>16x Concurrent TCP Streams</span>
                  <span>Saturating Bandwidth</span>
                </div>
                <div className="grid grid-cols-8 sm:grid-cols-16 gap-1">
                  {threads.map((val, idx) => (
                    <div key={idx} className="h-4 rounded bg-zinc-800/80 overflow-hidden flex flex-col justify-end">
                      <div
                        className="bg-cyan-500/80 transition-all duration-300"
                        style={{ height: simProgress >= 100 ? "100%" : `${val}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
