"use client";

import React from "react";
import { motion } from "motion/react";
import { Check, X, Sparkles } from "lucide-react";

export function ComparisonTable() {
  const rows = [
    { feature: "16x Multi-Thread TCP Acceleration", downlink: true, idm: true, fourK: false, jdown: true },
    { feature: "Mobile Cloud & LAN Wi-Fi Continuity", downlink: true, idm: false, fourK: false, jdown: false },
    { feature: "SponsorBlock Segment Removal", downlink: true, idm: false, fourK: false, jdown: false },
    { feature: "100% Free & Open Source (MIT)", downlink: true, idm: false, fourK: false, jdown: false },
    { feature: "Zero Bundled Adware or Telemetry", downlink: true, idm: false, fourK: false, jdown: false },
    { feature: "Native macOS, Windows & Linux", downlink: true, idm: false, fourK: true, jdown: true },
    { feature: "Auto-Updating Engine Core", downlink: true, idm: false, fourK: true, jdown: false },
    { feature: "BitTorrent & Magnet Swarm Support", downlink: true, idm: false, fourK: false, jdown: true },
  ];

  return (
    <section id="compare" className="py-24 px-6 max-w-5xl mx-auto space-y-14">
      {/* Section Header with Consistent Eyebrow */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono uppercase tracking-widest text-cyan-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          Feature Matrix
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white leading-tight">
          Engineered without <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            compromise.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Compare Downlink with traditional commercial utilities and bloated legacy downloaders.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/[0.08] bg-zinc-950/80 overflow-hidden shadow-2xl backdrop-blur-xl"
      >
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-white/[0.08] bg-white/[0.02] text-zinc-400">
              <th className="py-4 px-6 font-semibold">Capability</th>
              <th className="py-4 px-4 font-bold text-cyan-400 bg-cyan-500/10 border-x border-cyan-500/20 text-center">
                <span className="flex items-center justify-center gap-1.5 font-sans">
                  <Sparkles className="w-3.5 h-3.5" />
                  Downlink
                </span>
              </th>
              <th className="py-4 px-4 font-semibold text-center text-zinc-400">IDM</th>
              <th className="py-4 px-4 font-semibold text-center text-zinc-400">4K Downloader</th>
              <th className="py-4 px-4 font-semibold text-center text-zinc-400">JDownloader 2</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-6 font-medium text-zinc-200">{row.feature}</td>
                <td className="py-3.5 px-4 text-center bg-cyan-500/5 border-x border-cyan-500/20">
                  <div className="flex justify-center">
                    <span className="p-1 rounded-full bg-cyan-500/20 text-cyan-400">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-center">
                  <div className="flex justify-center">
                    {row.idm ? <Check className="w-3.5 h-3.5 text-zinc-400" /> : <X className="w-3.5 h-3.5 text-zinc-600" />}
                  </div>
                </td>
                <td className="py-3.5 px-4 text-center">
                  <div className="flex justify-center">
                    {row.fourK ? <Check className="w-3.5 h-3.5 text-zinc-400" /> : <X className="w-3.5 h-3.5 text-zinc-600" />}
                  </div>
                </td>
                <td className="py-3.5 px-4 text-center">
                  <div className="flex justify-center">
                    {row.jdown ? <Check className="w-3.5 h-3.5 text-zinc-400" /> : <X className="w-3.5 h-3.5 text-zinc-600" />}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
