"use client";

import React from "react";
import { Bot, Download, ShieldCheck, ArrowUpRight, Sparkles, CheckCircle2, Lock, ExternalLink, Heart } from "lucide-react";

interface FooterProps {
  onOpenDownload: () => void;
}

export default function Footer({ onOpenDownload }: FooterProps) {
  return (
    <footer className="relative bg-[#070a13] text-gray-300 border-t border-white/[0.08] overflow-hidden pt-16 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-Footer Action Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 mb-20 overflow-hidden bg-gradient-to-r from-blue-950/80 via-[#0b1428] to-slate-900 border border-cyan-500/30 shadow-2xl">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={13} />
                <span>Start In Under 2 Minutes</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Ready to Put Your Job Hunt on <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Autopilot?</span>
              </h3>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                Download AgentsKaro for Windows 10/11 today. Get your first 10 applications completely free—no credit card required.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl glow-button text-black font-black text-sm flex items-center justify-center gap-2.5 cursor-pointer shadow-xl active:scale-95 transition-all"
              >
                <Download size={18} className="stroke-[2.5]" />
                <span>Download for Windows (.exe)</span>
              </button>
            </div>
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.08]">
          {/* Col 1: Brand & Identity (2 cols on large) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="AgentsKaro Official Logo"
                className="w-12 h-12 rounded-2xl shadow-xl shadow-cyan-500/20 object-cover border border-cyan-400/30"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">AgentsKaro</span>
                <span className="text-[10px] font-bold text-gray-400 -mt-0.5 tracking-wider uppercase">
                  Desktop Automation Suite
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Autonomous AI desktop software engineered to eliminate manual application fatigue across Internshala, Naukri, Indeed, and 15+ upcoming national & global job boards.
            </p>

            {/* Parent Organization */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] max-w-sm">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-1">
                Parent Organization
              </span>
              <a
                href="https://yubisaki.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-white hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <span>Yubisaki Assistive Technology</span>
                <ArrowUpRight size={14} className="text-cyan-400" />
              </a>
              <span className="text-[11px] text-gray-400 block mt-0.5">
                "Assistive Technology for Everyone"
              </span>
            </div>

            {/* Live Operational Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational • v2.0 Live</span>
            </div>
          </div>

          {/* Col 2: Product Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Product</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  Autonomous Bots
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  AI Answer Engine
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  ATS Resume Match
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  Stealth Anti-Ban
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  Excel Report Export
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Supported Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Portals & Ecosystem</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-gray-300">Internshala</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/15 px-1.5 py-0.2 rounded">LIVE</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-gray-300">Naukri.com</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/15 px-1.5 py-0.2 rounded">LIVE</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="text-gray-300">Indeed</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/15 px-1.5 py-0.2 rounded">LIVE</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-gray-300">LinkedIn Easy Apply</span>
                </div>
                <span className="text-[9px] font-bold text-cyan-400 bg-cyan-500/15 px-1.5 py-0.2 rounded">SOON</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span className="text-gray-300">Wellfound (US Startups)</span>
                </div>
                <span className="text-[9px] font-bold text-amber-400 bg-amber-500/15 px-1.5 py-0.2 rounded">SOON</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span className="text-gray-300">Direct Company Careers</span>
                </div>
                <span className="text-[9px] font-bold text-purple-400 bg-purple-500/15 px-1.5 py-0.2 rounded">SOON</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Comparison & Pricing */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#comparison" className="hover:text-cyan-400 transition-colors">
                  Feature Comparison
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors">
                  ROI & Time Calculator
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  Pricing (from ₹29/mo)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ & Account Safety
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Yubisaki Assistive Technology. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
            <div className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck size={14} />
              <span>AES-256 Local Encryption</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1 text-cyan-400">
              <CheckCircle2 size={14} />
              <span>Windows 10/11 64-bit Certified</span>
            </div>
            <span>•</span>
            <a href="https://agentskaro.co.in" className="hover:text-white transition-colors">
              agentskaro.co.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
