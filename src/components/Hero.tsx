"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Sparkles, Shield, ArrowRight, Laptop, CheckCircle2, Star, Zap } from "lucide-react";
import LiveSoftwareMockup from "./LiveSoftwareMockup";

interface HeroProps {
  onOpenDownload: () => void;
}

export default function Hero({ onOpenDownload }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background Lighting Gradients & Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[480px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-12 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-24 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Product Release Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--badge-bg)] border border-cyan-400/35 backdrop-blur-md shadow-lg shadow-cyan-500/10 badge-shimmer">
            <img src="/logo.png" alt="AgentsKaro" className="w-5 h-5 rounded-md object-cover shrink-0 border border-cyan-400/40 shadow-sm" />
            <span className="text-xs font-bold tracking-wide text-[var(--text-main)]">
              AgentsKaro Desktop v2.0 • Autonomous Multi-Portal Automation
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-400/20 text-cyan-400 border border-cyan-400/30">
              NEW
            </span>
          </div>
        </motion.div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-[76px] font-black tracking-[-0.03em] text-[var(--text-main)] leading-[1.08]"
          >
            Apply to <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent glow-text-cyan">500+ Jobs</span> on Autopilot While You Sleep
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Stop wasting 20+ hours manually applying. AgentsKaro automates job applications across <span className="text-[var(--text-main)] font-bold">Internshala, Naukri & Indeed</span> — with <span className="text-cyan-400 font-bold">15+ top national & international platforms</span> rolling out soon (LinkedIn, Wellfound, Hirist, Cutshort & Global Remote Portals).
          </motion.p>
        </div>

        {/* CTA & Conversion Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          {/* Primary Download Button */}
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glow-button text-black font-black text-sm sm:text-base flex items-center justify-center gap-3 cursor-pointer shadow-xl active:scale-95 transition-all"
          >
            <Download size={20} className="stroke-[2.5]" />
            <span>Download for Windows (.exe)</span>
          </button>

          {/* Secondary Action */}
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[var(--badge-bg)] hover:bg-[var(--card-border)] border border-[var(--card-border)] text-[var(--text-main)] font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>See How It Works</span>
            <ArrowRight size={18} className="text-cyan-400" />
          </a>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[var(--text-muted)] font-semibold mb-14"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-cyan-400" />
            <span>Windows 10 / 11 (64-bit)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-cyan-400" />
            <span>10 Free Applications Included</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-cyan-400" />
            <span>Undetectable Stealth Mode</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield size={15} className="text-emerald-400" />
            <span>Zero Password Sharing • Local Data</span>
          </div>
        </motion.div>

        {/* Interactive Live Desktop Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
        >
          <LiveSoftwareMockup />
        </motion.div>

        {/* Real-time stats bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "45,000+", label: "Applications Automated", accent: "text-cyan-400" },
            { value: "98.4%", label: "ATS Resume Fit", accent: "text-purple-400" },
            { value: "22 hrs", label: "Saved Per Week / User", accent: "text-amber-400" },
            { value: "3 Top Portals", label: "Internshala • Naukri • Indeed", accent: "text-emerald-400" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-card text-center border border-[var(--card-border)]"
            >
              <div className={`text-2xl sm:text-3xl font-black ${stat.accent} mb-1 tracking-tight`}>
                {stat.value}
              </div>
              <div className="text-xs text-[var(--text-muted)] font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
