"use client";

import React from "react";
import {
  SiYoutube,
  SiTiktok,
  SiInstagram,
  SiX,
  SiBilibili,
  SiBittorrent,
  SiTwitch,
  SiSoundcloud,
  SiVimeo,
  SiFacebook,
  SiReddit,
  SiSpotify,
  SiDailymotion,
  SiThreads,
} from "react-icons/si";

interface BrandItem {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const BRAND_ITEMS: BrandItem[] = [
  { name: "YouTube", Icon: SiYoutube },
  { name: "TikTok", Icon: SiTiktok },
  { name: "Instagram", Icon: SiInstagram },
  { name: "X / Twitter", Icon: SiX },
  { name: "Bilibili", Icon: SiBilibili },
  { name: "BitTorrent", Icon: SiBittorrent },
  { name: "Twitch", Icon: SiTwitch },
  { name: "SoundCloud", Icon: SiSoundcloud },
  { name: "Vimeo", Icon: SiVimeo },
  { name: "Facebook", Icon: SiFacebook },
  { name: "Reddit", Icon: SiReddit },
  { name: "Spotify", Icon: SiSpotify },
  { name: "Dailymotion", Icon: SiDailymotion },
  { name: "Threads", Icon: SiThreads },
];

export function PlatformMarquee() {
  return (
    <section className="relative py-12 border-y border-white/[0.04] bg-white/[0.01] overflow-hidden select-none">
      {/* Side Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-80" />
          Seamless Extraction from 1,000+ Platforms &amp; Protocols
        </p>
      </div>

      {/* Pure Smooth Hardware-Accelerated Marquee: Official React Icons + Brand Names */}
      <div className="flex overflow-hidden">
        {/* Track 1 */}
        <div className="flex items-center gap-12 min-w-full shrink-0 animate-marquee hover:[animation-play-state:paused] will-change-transform pr-12">
          {BRAND_ITEMS.map(({ name, Icon }, i) => (
            <div
              key={`brand-1-${i}`}
              className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-all duration-200 opacity-60 hover:opacity-100 cursor-default group shrink-0"
              title={name}
            >
              <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-semibold tracking-tight text-zinc-300 group-hover:text-white transition-colors font-sans">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate seamless loop) */}
        <div
          aria-hidden="true"
          className="flex items-center gap-12 min-w-full shrink-0 animate-marquee hover:[animation-play-state:paused] will-change-transform pr-12"
        >
          {BRAND_ITEMS.map(({ name, Icon }, i) => (
            <div
              key={`brand-2-${i}`}
              className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-all duration-200 opacity-60 hover:opacity-100 cursor-default group shrink-0"
              title={name}
            >
              <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-semibold tracking-tight text-zinc-300 group-hover:text-white transition-colors font-sans">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
