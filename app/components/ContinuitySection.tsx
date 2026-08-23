"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Smartphone, Wifi, Cloud, Send, CheckCircle2, ArrowRight } from "lucide-react";

export function ContinuitySection() {
  const [testUrl, setTestUrl] = useState("https://youtube.com/watch?v=dQw4w9WgXcQ");
  const [beamed, setBeamed] = useState(false);

  const handleBeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testUrl) return;
    setBeamed(true);
    setTimeout(() => setBeamed(false), 3000);
  };

  return (
    <section id="continuity" className="py-28 px-6 max-w-6xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white">
          Browse on your phone. <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300 bg-clip-text text-transparent">
            Download on your desktop.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Zero accounts, zero configuration. Send video links from mobile Safari or Chrome directly to your computer.
        </p>
      </div>

      {/* Dual Channel Pacing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Channels */}
        <div className="lg:col-span-7 space-y-5">
          {/* Channel 1 */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all space-y-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Wifi className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Local Wi-Fi Discovery (0ms Latency)</h3>
                <p className="text-xs text-zinc-400">Automatic Bonjour &amp; mDNS peer discovery over LAN</p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed pl-12 font-normal">
              When on the same Wi-Fi network, Downlink connects directly through a local Rust Axum HTTP gateway on port 3984 with sub-millisecond dispatch.
            </p>
          </motion.div>

          {/* Channel 2 */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all space-y-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Cloud className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Universal Cloud Relay (5G / LTE)</h3>
                <p className="text-xs text-zinc-400">Ephemeral Room Codes for cellular remote beaming</p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed pl-12 font-normal">
              Outside home? The Mobile Companion PWA uses an ephemeral 4-digit room code (<code className="text-cyan-400 font-mono">DL-9482</code>) to queue links that your computer catches in real time.
            </p>
          </motion.div>

          {/* CTA Link */}
          <div className="pt-2">
            <Link
              href="/mobile"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-semibold text-cyan-300 transition-all"
            >
              <Smartphone className="w-4 h-4" />
              <span>Launch Companion Web PWA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-[300px] rounded-[36px] bg-zinc-950 border-4 border-zinc-800 shadow-2xl p-4 space-y-3 relative overflow-hidden">
            {/* Phone Notch */}
            <div className="w-20 h-3.5 bg-zinc-800 rounded-full mx-auto" />

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <img src="/downlink-square.png" alt="Logo" className="w-4 h-4 rounded" />
                <span className="text-xs font-bold text-white">Downlink Mobile</span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Live Sync
              </span>
            </div>

            <form onSubmit={handleBeam} className="space-y-3 pt-2">
              <div className="space-y-1 text-left">
                <label className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">
                  Paste Media Link
                </label>
                <input
                  type="text"
                  value={testUrl}
                  onChange={(e) => setTestUrl(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 font-mono focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-cyan-900/30 active:scale-95 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Beam to Desktop</span>
              </button>
            </form>

            {beamed && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center gap-2 text-left"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Link dispatched! Desktop downloading…</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
