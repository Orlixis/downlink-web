"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface FooterProps {
  version: string;
  githubUrl: string;
}

export function Footer({ version, githubUrl }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.06] py-16 px-6 text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/downlink-square.png" alt="Downlink" className="w-5 h-5 rounded" />
          <span className="font-semibold text-zinc-300">Downlink {version}</span>
          <span>•</span>
          <span>MIT License</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/mobile" className="hover:text-zinc-300 transition-colors">
            Mobile Companion
          </Link>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
            GitHub
          </a>
          <a href={`${githubUrl}/releases`} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
            Releases
          </a>
          <a href={`${githubUrl}/issues`} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
            Issues
          </a>
        </div>
      </div>
    </footer>
  );
}
