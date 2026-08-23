"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Smartphone,
  Wifi,
  Cloud,
  Send,
  CheckCircle2,
  ArrowRight,
  QrCode,
  Sparkles,
} from "lucide-react";

export function ContinuitySection() {
  const [testUrl, setTestUrl] = useState("https://youtube.com/watch?v=dQw4w9WgXcQ");
  const [beamed, setBeamed] = useState(false);
  const [activeChannel, setActiveChannel] = useState<"wifi" | "cloud">("wifi");

  const handleBeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testUrl) return;
    setBeamed(true);
    setTimeout(() => setBeamed(false), 3000);
  };

  return (
    <section id="continuity" className="py-24 px-6 max-w-6xl mx-auto space-y-14">
      {/* Section Header with Consistent Eyebrow */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono uppercase tracking-widest text-cyan-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          Seamless Continuity &amp; Cloud Relay
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white leading-tight">
          Browse on your phone. <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            Download on your desktop.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Zero accounts, zero configuration. Instantly beam video URLs from mobile Safari, Chrome, or TikTok directly to your computer.
        </p>
      </div>

      {/* 2-Column Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Channels */}
        <div className="lg:col-span-7 space-y-4">
          {/* Channel 1: Local LAN Wi-Fi */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setActiveChannel("wifi")}
            className={`p-6 rounded-3xl border transition-all cursor-pointer ${
              activeChannel === "wifi"
                ? "bg-white/[0.04] border-cyan-500/40 shadow-xl shadow-cyan-500/5 ring-1 ring-cyan-500/20"
                : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Channel A: Local Wi-Fi Gateway</h3>
                  <p className="text-xs text-zinc-400">Automatic Bonjour &amp; mDNS broadcast over LAN</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                0ms Latency
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed pt-3 font-normal">
              When your mobile device is on the same local Wi-Fi, Downlink communicates directly through an embedded Rust Axum HTTP gateway on port <code className="text-cyan-300 font-mono">3984</code> without touching external servers.
            </p>
          </motion.div>

          {/* Channel 2: Cellular Cloud Relay */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => setActiveChannel("cloud")}
            className={`p-6 rounded-3xl border transition-all cursor-pointer ${
              activeChannel === "cloud"
                ? "bg-white/[0.04] border-blue-500/40 shadow-xl shadow-blue-500/5 ring-1 ring-blue-500/20"
                : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Channel B: Ephemeral Cloud Relay</h3>
                  <p className="text-xs text-zinc-400">Global 5G &amp; LTE remote link dispatch</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                Global 5G / LTE
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed pt-3 font-normal">
              Away from home? The Mobile Companion PWA uses an ephemeral 4-digit room code (<code className="text-blue-300 font-mono">DL-9482</code>) to queue links that your computer catches in real time with end-to-end isolation.
            </p>
          </motion.div>

          {/* CTA Link */}
          <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/mobile"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-200 font-bold text-xs shadow-lg active:scale-95 transition-all"
            >
              <Smartphone className="w-4 h-4 text-zinc-950" />
              <span>Launch Companion Web PWA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Realistic Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-[320px] rounded-[40px] bg-[#0c0d12] border-4 border-zinc-800 shadow-2xl p-5 space-y-4 relative overflow-hidden text-left">
            {/* Phone Island */}
            <div className="w-24 h-4 bg-zinc-900 rounded-full mx-auto" />

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <img src="/downlink-square.png" alt="Logo" className="w-5 h-5 rounded-md" />
                <div>
                  <div className="text-xs font-bold text-white">Downlink Mobile</div>
                  <div className="text-[9px] font-mono text-zinc-500">Connected: DL-9482</div>
                </div>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Sync
              </span>
            </div>

            <form onSubmit={handleBeam} className="space-y-3 pt-2">
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                  Paste Media Link
                </label>
                <input
                  type="text"
                  value={testUrl}
                  onChange={(e) => setTestUrl(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 font-mono focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-900/30 active:scale-95 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Beam to Desktop</span>
              </button>
            </form>

            {beamed ? (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Link dispatched! Desktop is downloading…</span>
              </motion.div>
            ) : (
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-[10px] text-zinc-500 leading-relaxed font-mono">
                Tip: Add this companion PWA to your iOS/Android home screen for native share sheet support.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
