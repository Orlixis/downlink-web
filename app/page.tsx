"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection, type ReleaseInfo } from "./components/HeroSection";
import { AppShowcase } from "./components/AppShowcase";
import { ContinuitySection } from "./components/ContinuitySection";
import { FeatureGrid } from "./components/FeatureGrid";
import { ComparisonTable } from "./components/ComparisonTable";
import { DownloadMatrix } from "./components/DownloadMatrix";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";

const GITHUB_REPO = "https://github.com/Orlixis/downlink";
const DEFAULT_VERSION = "v0.1.64";

export default function LandingPage() {
  const [detectedOs, setDetectedOs] = useState<"mac-arm" | "mac-intel" | "windows" | "linux">("mac-arm");
  const [releaseInfo, setReleaseInfo] = useState<ReleaseInfo>({
    version: DEFAULT_VERSION,
    armDmg: `${GITHUB_REPO}/releases/download/${DEFAULT_VERSION}/Downlink_${DEFAULT_VERSION.replace("v", "")}_aarch64.dmg`,
    intelDmg: `${GITHUB_REPO}/releases/download/${DEFAULT_VERSION}/Downlink_${DEFAULT_VERSION.replace("v", "")}_x64.dmg`,
    winExe: `${GITHUB_REPO}/releases/download/${DEFAULT_VERSION}/Downlink_${DEFAULT_VERSION.replace("v", "")}_x64-setup.exe`,
    linuxAppImage: `${GITHUB_REPO}/releases/download/${DEFAULT_VERSION}/downlink_${DEFAULT_VERSION.replace("v", "")}_amd64.AppImage`,
  });

  useEffect(() => {
    // OS Detection
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent.toLowerCase();
      if (ua.includes("win")) {
        setDetectedOs("windows");
      } else if (ua.includes("linux")) {
        setDetectedOs("linux");
      } else if (ua.includes("mac")) {
        setDetectedOs("mac-arm");
      }
    }

    // Dynamic GitHub latest release synchronization
    fetch("https://api.github.com/repos/Orlixis/downlink/releases/latest")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data || !data.tag_name) return;
        const tag = data.tag_name;
        const clean = tag.replace(/^v/, "");
        const arm = data.assets?.find((a: { name: string; browser_download_url: string }) =>
          a.name.includes("aarch64.dmg")
        )?.browser_download_url;
        const intel = data.assets?.find((a: { name: string; browser_download_url: string }) =>
          a.name.includes("x64.dmg")
        )?.browser_download_url;
        const exe = data.assets?.find((a: { name: string; browser_download_url: string }) =>
          a.name.endsWith(".exe") || a.name.endsWith(".msi")
        )?.browser_download_url;
        const appImg = data.assets?.find((a: { name: string; browser_download_url: string }) =>
          a.name.endsWith(".AppImage")
        )?.browser_download_url;

        setReleaseInfo({
          version: tag,
          armDmg: arm || `${GITHUB_REPO}/releases/download/${tag}/Downlink_${clean}_aarch64.dmg`,
          intelDmg: intel || `${GITHUB_REPO}/releases/download/${tag}/Downlink_${clean}_x64.dmg`,
          winExe: exe || `${GITHUB_REPO}/releases/download/${tag}/Downlink_${clean}_x64-setup.exe`,
          linuxAppImage: appImg || `${GITHUB_REPO}/releases/download/${tag}/downlink_${clean}_amd64.AppImage`,
        });
      })
      .catch(() => {});
  }, []);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-[160px]" />
        <div className="absolute top-[1600px] right-[-200px] w-[600px] h-[600px] bg-gradient-to-b from-purple-500/10 via-blue-600/5 to-transparent blur-[160px]" />
        <div className="absolute top-[3200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-b from-cyan-500/10 via-teal-600/5 to-transparent blur-[160px]" />
      </div>

      {/* Navigation */}
      <Navbar version={releaseInfo.version} githubUrl={GITHUB_REPO} />

      {/* Main Content Sections */}
      <main className="space-y-4">
        <HeroSection
          detectedOs={detectedOs}
          releaseInfo={releaseInfo}
          onSelectOs={setDetectedOs}
        />

        <AppShowcase />

        <FeatureGrid />

        <ContinuitySection />

        <ComparisonTable />

        <DownloadMatrix releaseInfo={releaseInfo} githubUrl={GITHUB_REPO} />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer version={releaseInfo.version} githubUrl={GITHUB_REPO} />
    </div>
  );
}
