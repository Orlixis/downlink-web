"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How does 16x multi-threading work?",
    answer:
      "Downlink embeds an optimized Aria2 engine that establishes up to 16 parallel TCP connections to remote media servers. By pulling different byte segments simultaneously, it saturates your bandwidth and prevents single-stream throttling.",
  },
  {
    question: "How does the Mobile Companion connect to my desktop?",
    answer:
      "Downlink features a dual-channel architecture: When your phone and computer are on the same Wi-Fi, it connects directly via an ultra-low-latency local HTTP gateway on port 3984 with Bonjour/mDNS auto-discovery. If you are on cellular LTE/5G, it uses an ephemeral room code (e.g. DL-9482) via our Vercel Serverless Relay with zero account registration.",
  },
  {
    question: "Is Downlink completely free and private?",
    answer:
      "Yes. Downlink is 100% free and open source under the MIT license. There are zero ads, zero tracking telemetry, and no accounts required. All downloads and metadata resolution happen strictly on your machine.",
  },
  {
    question: "How are yt-dlp and extractors updated?",
    answer:
      "Downlink automatically checks for extractor engine updates in the background. When video platforms make player changes, you can update with a single click inside Settings → Updates with zero terminal commands.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 px-6 max-w-3xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-white">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? "bg-white/[0.04] border-white/[0.12]"
                  : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.1]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-sm font-semibold text-zinc-200">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="px-5 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
