"use client";

import React from "react";
import { motion } from "motion/react";
import { Check, X, Sparkles } from "lucide-react";

export function ComparisonTable() {
  const rows = [
    { feature: "16x Multi-Thread Acceleration", downlink: true, idm: true, fourK: false, jdown: true },
    { feature: "Mobile Cloud & Wi-Fi Continuity", downlink: true, idm: false, fourK: false, jdown: false },
    { feature: "SponsorBlock Segment Removal", downlink: true, idm: false, fourK: false, jdown: false },
    { feature: "100% Free & Open Source (MIT)", downlink: true, idm: false, fourK: false, jdown: false },
    { feature: "Zero Bundled Ads or Telemetry", downlink: true, idm: false, fourK: false, jdown: false },
    { feature: "Native macOS, Windows & Linux", downlink: true, idm: false, fourK: true, jdown: true },
    { feature: "Auto-Updated Extractor Core", downlink: true, idm: false, fourK: true, jdown: false },
  ];

  return (
    <section id="compare" className="py-28 px-6 max-w-5xl mx-auto space-y-16">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-white">
          Why Downlink?
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Compare Downlink with traditional commercial and legacy downloaders.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/[0.08] bg-zinc-950/60 overflow-hidden shadow-2xl backdrop-blur-xl"
      >
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-white/[0.08] bg-white/[0.02] text-zinc-400">
              <th className="py-4 px-6 font-semibold">Capability</th>
              <th className="py-4 px-4 font-bold text-cyan-400 bg-cyan-500/10 border-x border-cyan-500/20 text-center">
                <span className="flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Downlink
                </span>
              </th>
              <th className="py-4 px-4 font-semibold text-center">IDM</th>
              <th className="py-4 px-4 font-semibold text-center">4K Downloader</th>
              <th className="py-4 px-4 font-semibold text-center">JDownloader 2</th>
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
