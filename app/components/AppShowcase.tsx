"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Zap, Scissors, Activity, Play, RotateCcw, CheckCircle2, Film } from "lucide-react";

export function AppShowcase() {
  const [showSim, setShowSim] = useState(false);
  const [progress, setProgress] = useState(74);

  return (
    <section className="relative px-6 max-w-6xl mx-auto pt-4 pb-24">
      {/* Ambient Radial Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Main Elevated Display Chassis */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl border border-white/[0.08] bg-zinc-950/80 p-2 sm:p-3 shadow-2xl shadow-black/90 backdrop-blur-2xl"
      >
        {!showSim ? (
          /* High-Definition Native App View */
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src="/screenshot1.png"
              alt="Downlink Desktop Application Interface"
              className="w-full h-auto object-cover rounded-2xl"
            />

            {/* Quick Interactive Simulator Trigger Pill */}
            <div className="absolute bottom-4 right-4">
              <button
                type="button"
                onClick={() => setShowSim(true)}
                className="px-4 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/[0.1] text-xs font-semibold text-white shadow-xl backdrop-blur-xl flex items-center gap-2 active:scale-95 transition-all"
              >
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Simulate 16x Download</span>
              </button>
            </div>
          </div>
        ) : (
          /* Live 16x Stream Acceleration Visualizer */
          <div className="p-8 space-y-6 text-left rounded-2xl bg-zinc-950/90">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Rick Astley - Never Gonna Give You Up (4K HDR)</div>
                  <div className="text-xs text-zinc-400 font-mono">142.8 MB • 16 Aria2 Concurrent Streams • 64.2 MB/s</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowSim(false)}
                className="px-3.5 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-semibold text-zinc-300 transition-colors"
              >
                View App Screenshot
              </button>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-400">Aria2 Multi-Connection Chunking Active</span>
                <span className="text-cyan-400 font-bold">{progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* 16 Concurrent Segment Streams */}
            <div className="space-y-1.5 pt-2">
              <div className="text-[11px] font-mono text-zinc-500">16 Parallel TCP Segment Buffers</div>
              <div className="grid grid-cols-8 sm:grid-cols-16 gap-1">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="h-6 rounded bg-zinc-900 border border-white/[0.04] overflow-hidden flex flex-col justify-end">
                    <div
                      className="bg-cyan-500/80 transition-all"
                      style={{ height: `${Math.min(100, Math.floor((i + 1) * 6.5))}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Feature Pillar Badges below screenshot */}
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl space-y-1 hover:border-white/[0.12] transition-colors">
          <div className="text-xs font-bold text-white flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>1-Click Format Extraction</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Auto-detects 4K/8K resolutions, high-bitrate video containers, and audio-only streams.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl space-y-1 hover:border-white/[0.12] transition-colors">
          <div className="text-xs font-bold text-white flex items-center gap-2">
            <Scissors className="w-3.5 h-3.5 text-violet-400" />
            <span>SponsorBlock Auto-Cut</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Automatically skips sponsorships, intros, and outro cards for clean uninterrupted offline viewing.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl space-y-1 hover:border-white/[0.12] transition-colors">
          <div className="text-xs font-bold text-white flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Live Transfer Telemetry</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Instant feedback on per-fragment transfer speed, precise time remaining, and completion status.
          </p>
        </div>
      </div>
    </section>
  );
}
