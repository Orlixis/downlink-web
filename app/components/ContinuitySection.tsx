"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  Radio,
  Wifi,
  Cloud,
  Send,
  CheckCircle2,
  ArrowRight,
  QrCode,
  Sparkles,
  Zap,
} from "lucide-react";

export function ContinuitySection() {
  const [testUrl, setTestUrl] = useState("https://youtu.be/dQw4w9WgXcQ");
  const [beamed, setBeamed] = useState(false);
  const [beamChannel, setBeamChannel] = useState<"wifi" | "cloud">("cloud");

  const handleBeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testUrl) return;
    setBeamed(true);
    setTimeout(() => setBeamed(false), 3500);
  };

  return (
    <section id="continuity" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>Zero-Config Dual-Channel Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Browse on your phone. <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
            Download on your desktop.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          No cable, no accounts, no complex network setup. Downlink bridges your mobile browser directly to your Mac or PC.
        </p>
      </div>

      {/* Dual Channel Cards + Interactive Beam Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Explanatory Channel Cards (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Channel A: Direct Local Wi-Fi */}
          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl space-y-3 hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Channel 1: Direct Local Wi-Fi</h3>
                  <p className="text-xs text-zinc-400">Zero-latency sub-millisecond local network synchronization</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-blue-400 border border-blue-500/20 font-bold">
                Port 3984
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              When connected to the same home or office Wi-Fi, Downlink uses Bonjour / mDNS and high-speed Axum HTTP to beam downloads locally with zero cloud hops.
            </p>
          </div>

          {/* Channel B: Universal Cloud Relay */}
          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl space-y-3 hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Channel 2: Universal Cloud Relay</h3>
                  <p className="text-xs text-zinc-400">Remote cellular 5G/LTE beaming via ephemeral room codes</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-cyan-400 border border-cyan-500/20 font-bold">
                Vercel Serverless
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              On the road or outside your home Wi-Fi? The Companion PWA uses an ephemeral 4-digit Room Code (<code className="text-cyan-400 font-mono">DL-9482</code>) to queue links that your desktop catches immediately.
            </p>
          </div>

          {/* PWA Direct Link CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/mobile"
              className="px-5 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 active:scale-95 text-xs font-bold flex items-center gap-2 transition-all"
            >
              <Smartphone className="w-4 h-4" />
              <span>Open Mobile Companion PWA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-xs text-zinc-500">Works on iOS Safari & Android Chrome • Zero App Store Install</span>
          </div>
        </div>

        {/* Right Column: Interactive Mobile Phone Mockup Frame (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[320px] rounded-[40px] bg-zinc-950 border-4 border-zinc-800 shadow-2xl p-4 space-y-4 relative overflow-hidden">
            {/* Phone Notch */}
            <div className="w-24 h-4 bg-zinc-800 rounded-full mx-auto" />

            {/* Mobile PWA Top Bar */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <img src="/downlink-square.png" alt="Downlink" className="w-5 h-5 rounded-md" />
                <span className="text-xs font-bold text-white">Downlink Mobile</span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Connected
              </span>
            </div>

            {/* Simulated Link Input */}
            <form onSubmit={handleBeam} className="space-y-3 pt-2">
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Paste Media Link
                </label>
                <input
                  type="text"
                  value={testUrl}
                  onChange={(e) => setTestUrl(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 font-mono focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Channel Selector */}
              <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800 text-[10px]">
                <button
                  type="button"
                  onClick={() => setBeamChannel("cloud")}
                  className={`py-1 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${
                    beamChannel === "cloud" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" : "text-zinc-500"
                  }`}
                >
                  <Cloud className="w-3 h-3" />
                  <span>Cloud Relay</span>
                </button>
                <button
                  type="button"
                  onClick={() => setBeamChannel("wifi")}
                  className={`py-1 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${
                    beamChannel === "wifi" ? "bg-blue-500/20 text-blue-300 border border-blue-500/30" : "text-zinc-500"
                  }`}
                >
                  <Wifi className="w-3 h-3" />
                  <span>Local Wi-Fi</span>
                </button>
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-cyan-900/30 active:scale-95 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Beam to Desktop</span>
              </button>
            </form>

            {/* Beam Success Notification Toast */}
            {beamed && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in zoom-in-95 duration-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Dispatched over {beamChannel === "cloud" ? "Cloud Relay" : "Local Wi-Fi"}! Desktop downloading…</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
