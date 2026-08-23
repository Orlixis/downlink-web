"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

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
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      if (!trackRef.current) return;

      // GSAP infinite linear scroll without layout thrashing
      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 32,
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.play();
  };

  return (
    <section
      ref={containerRef}
      className="relative py-12 border-y border-white/[0.04] bg-white/[0.01] overflow-hidden select-none"
    >
      {/* Side Fade Masks for seamless optical edges */}
      <div className="absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-[#09090b] via-[#09090b]/80 to-transparent z-10 pointer-events-none" />

      {/* Header Label */}
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center pointer-events-none">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-80" />
          Seamless Extraction from 1,000+ Platforms &amp; Protocols
        </p>
      </div>

      {/* GSAP Hardware-Accelerated Ticker Track */}
      <div
        className="flex overflow-hidden cursor-default"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-12 shrink-0 will-change-transform"
        >
          {/* Set 1 */}
          {BRAND_ITEMS.map(({ name, Icon }, i) => (
            <div
              key={`brand-a-${i}`}
              className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-200 opacity-60 hover:opacity-100 shrink-0 pr-2"
              title={name}
            >
              <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-semibold tracking-tight text-zinc-300 group-hover:text-white transition-colors font-sans">
                {name}
              </span>
            </div>
          ))}

          {/* Set 2 (Exact Duplicate for seamless infinite loop) */}
          {BRAND_ITEMS.map(({ name, Icon }, i) => (
            <div
              key={`brand-b-${i}`}
              className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-200 opacity-60 hover:opacity-100 shrink-0 pr-2"
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
