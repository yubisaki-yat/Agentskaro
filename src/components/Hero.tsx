"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Shield, ArrowRight, CheckCircle2, Star, Zap } from "lucide-react";
import LiveSoftwareMockup from "./LiveSoftwareMockup";

interface HeroProps {
  onOpenDownload: () => void;
}

const STATS = [
  { value: "45,000+", label: "Applications Automated" },
  { value: "2,400+", label: "Job Seekers Trust Us" },
  { value: "22 hrs", label: "Saved Per Week / User" },
  { value: "98.4%", label: "ATS Fit Score" },
];

const TOP_FEATURES = [
  {
    title: "1-Click WhatsApp AI Agent",
    badge: "LIVE NOW",
    desc: "Get matching roles on WhatsApp and apply instantly just by replying 'YES'.",
    href: "#whatsapp",
  },
  {
    title: "Undetected Stealth Engine",
    badge: "0 BANS",
    desc: "Human typing cadence, Bézier mouse paths & local AES-256 session cookies.",
    href: "#features",
  },
  {
    title: "ATS Resume Match AI",
    badge: "AI ACTIVE",
    desc: "Evaluates keywords & writes tailored answers for recruiter screening forms.",
    href: "#features",
  },
  {
    title: "Multi-Portal Autonomous Agent",
    badge: "3 ACTIVE",
    desc: "Runs background queues on Internshala, Naukri & Indeed with live Excel logs.",
    href: "#platforms",
  },
];

export default function Hero({ onOpenDownload }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-grid-dots">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[var(--primary)]/[0.06] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[var(--accent-warm)]/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Announcement pill */}
        {/* Live Top Feature Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <a
            href="#whatsapp"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] hover:bg-emerald-500/[0.14] text-[var(--text-main)] text-xs font-semibold transition-all shadow-sm group cursor-pointer"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider">
              OFFICIAL FEATURE
            </span>
            <span>WhatsApp 1-Click Auto-Apply is now Live</span>
            <ArrowRight size={13} className="text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Hero heading — editorial, strong, no gradient text */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-[44px] sm:text-6xl lg:text-[76px] font-bold text-[var(--text-main)] leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Apply to 500+ Jobs{" "}
            <span className="relative inline-block">
              on Autopilot
              {/* Warm underline — the ONLY accent, not a gradient */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 400 8"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 6 Q100 2 200 4 Q300 6 398 3"
                  stroke="var(--accent-warm)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            While You Sleep
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed"
          >
            Stop spending 20+ hours on manual applications. AgentsKaro automates
            across <strong className="text-[var(--text-main)] font-semibold">Internshala, Naukri &amp; Indeed</strong> today — with LinkedIn,
            Wellfound &amp; global boards coming soon.
          </motion.p>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <button
            onClick={onOpenDownload}
            aria-label="Download AgentsKaro for Windows"
            className="w-full sm:w-auto btn-primary px-8 py-4 rounded-xl text-[15px] font-semibold flex items-center justify-center gap-3 active:scale-95 transition-all shadow-lg"
          >
            <Download size={19} className="stroke-[2.5]" />
            Download for Windows
            <span className="text-white/60 text-xs font-normal ml-0.5">(.exe • Free)</span>
          </button>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto btn-ghost px-7 py-4 rounded-xl text-[15px] flex items-center justify-center gap-2 transition-all"
          >
            See how it works
            <ArrowRight size={17} />
          </a>
        </motion.div>

        {/* OS Availability Notice */}
        <div className="flex items-center justify-center gap-2 text-xs text-[var(--text-subtle)] -mt-4 mb-8">
          <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Windows 10/11 Native (.exe)
          </span>
          <span>•</span>
          <span className="text-amber-600 dark:text-amber-400 font-medium">macOS &amp; Linux in Closed Beta</span>
        </div>

        {/* Rating + trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14"
        >
          {/* Stars rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <span className="text-sm font-bold text-[var(--text-main)]">4.9</span>
            <span className="text-xs text-[var(--text-muted)]">/ 5 from 482 reviews</span>
          </div>

          <span className="hidden sm:block text-[var(--border)]" aria-hidden="true">|</span>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[var(--text-subtle)]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" />
              Windows 10 / 11 (Available)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" />
              10 Free Applications
            </span>
            <span className="flex items-center gap-1.5">
              <Shield size={13} className="text-emerald-500" />
              Zero Password Sharing
            </span>
            <span className="flex items-center gap-1.5">
              <Zap size={13} className="text-[var(--primary)]" />
              Trusted by 2,400+ seekers
            </span>
          </div>
        </motion.div>

        {/* Official Top Features Highlight Grid with Live Radar Beacons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto mb-14"
        >
          {TOP_FEATURES.map((feat, idx) => (
            <a
              key={idx}
              href={feat.href}
              className="p-4 rounded-xl surface-card hover:border-[var(--primary)] transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs sm:text-sm font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">
                    {feat.title}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/25 shrink-0">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    {feat.badge}
                  </span>
                </div>
                <p className="text-[12px] text-[var(--text-muted)] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Live Software Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.4 }}
        >
          <LiveSoftwareMockup />
        </motion.div>

        {/* Stats strip — border-connected, not floating cards */}
        <div className="mt-12 border border-[var(--border)] rounded-2xl overflow-hidden grid grid-cols-2 md:grid-cols-4 bg-[var(--bg-card)] shadow-sm">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`py-6 px-6 text-center ${idx < 3 ? "border-r border-[var(--border)]" : ""} ${idx < 2 ? "border-b border-[var(--border)] md:border-b-0" : ""}`}
            >
              <div
                className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] tracking-tight mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-[var(--text-subtle)] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
