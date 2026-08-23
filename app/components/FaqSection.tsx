"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How does Downlink achieve 16x multi-threaded download speeds?",
    answer:
      "Downlink embeds an optimized Aria2 engine that establishes up to 16 concurrent TCP connections to remote media servers. By pulling different byte segments simultaneously, it saturates your bandwidth and avoids single-stream bandwidth throttling imposed by servers.",
  },
  {
    question: "How does the Mobile Companion PWA connect to my desktop?",
    answer:
      "Downlink features a dual-channel architecture: When your phone and computer are on the same Wi-Fi, it connects directly via an ultra-low-latency local HTTP gateway on port 3984 with Bonjour/mDNS auto-discovery. If you are on cellular LTE/5G outside home, it uses an ephemeral room code (e.g. DL-9482) via our Vercel Serverless Relay with zero account registration.",
  },
  {
    question: "Does Downlink collect telemetry or sell my data?",
    answer:
      "No. Downlink is 100% free and open-source under the MIT license. There are no tracking scripts, analytics SDKs, telemetry daemons, or user accounts. All metadata resolution and downloads occur strictly on your local machine.",
  },
  {
    question: "How are yt-dlp and FFmpeg updated?",
    answer:
      "Downlink checks for yt-dlp extractor releases in the background and provides 1-click automatic updates directly within Settings → Updates. When video platforms update their player code, your downloader remains up-to-date with zero manual terminal commands.",
  },
  {
    question: "Can I download entire playlists and batch URLs?",
    answer:
      "Yes. Simply paste a playlist link or multiple URLs separated by newlines or commas. Downlink automatically detects playlists, displays an interactive item selector, and queues all videos sequentially or concurrently.",
  },
  {
    question: "How does Downlink handle anti-bot challenges on platforms like TikTok?",
    answer:
      "Downlink features a resilient multi-tier fallback architecture: If yt-dlp is challenged by modern web rehydration blockers, Downlink's engine automatically engages a fallback direct stream resolver to extract clean, unwatermarked HD video and original audio.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-400">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Everything you need to know.
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? "bg-zinc-900/80 border-cyan-500/30 shadow-lg shadow-cyan-950/20"
                  : "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-sm sm:text-base font-bold text-zinc-200">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/40 pt-3 animate-in fade-in duration-150">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
