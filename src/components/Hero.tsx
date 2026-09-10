"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Shield,
  ArrowRight,
  CheckCircle2,
  Star,
  Zap,
  MessageSquareCode,
  ShieldCheck,
  Sparkles,
  Layers,
  Play,
  Check,
  Laptop,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import LiveSoftwareMockup from "./LiveSoftwareMockup";

interface HeroProps {
  onOpenDownload: () => void;
}

const STATS = [
  { value: "45,000+", label: "Applications Automated", change: "+14% this week" },
  { value: "2,400+", label: "Job Seekers Trust Us", change: "Across India" },
  { value: "22 hrs", label: "Saved Weekly / User", change: "Zero manual burnout" },
  { value: "98.4%", label: "Average ATS Fit Score", change: "Real-time scoring" },
];

const TOP_FEATURES = [
  {
    id: "whatsapp",
    title: "1-Click WhatsApp AI Agent",
    badge: "LIVE NOW",
    desc: "Receive curated job roles directly on WhatsApp and apply instantly just by replying 'YES'.",
    actionText: "Explore WhatsApp Bot",
    href: "#whatsapp",
    icon: MessageSquareCode,
    accentGlow: "rgba(16, 185, 129, 0.12)",
    iconContainer: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25",
    dotClass: "bg-emerald-500",
  },
  {
    id: "stealth",
    title: "Undetected Stealth Engine",
    badge: "0 BANS • SAFE",
    desc: "Human typing cadence, randomized Bézier mouse paths & local AES-256 session cookies.",
    actionText: "View Stealth Driver Specs",
    href: "#features",
    icon: ShieldCheck,
    accentGlow: "rgba(99, 102, 241, 0.12)",
    iconContainer: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    badgeClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/25",
    dotClass: "bg-indigo-500",
  },
  {
    id: "ats",
    title: "ATS Resume Match AI",
    badge: "AI ACTIVE",
    desc: "Scans recruiter screening questions in milliseconds and generates custom, truthful responses.",
    actionText: "See AI Answer Engine",
    href: "#features",
    icon: Sparkles,
    accentGlow: "rgba(245, 158, 11, 0.12)",
    iconContainer: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    badgeClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25",
    dotClass: "bg-amber-500",
  },
  {
    id: "platforms",
    title: "Multi-Portal Autonomous Agent",
    badge: "3 ACTIVE",
    desc: "Parallel background queues on Internshala, Naukri & Indeed with instant Excel export reports.",
    actionText: "View Active Portals",
    href: "#platforms",
    icon: Layers,
    accentGlow: "rgba(14, 165, 233, 0.12)",
    iconContainer: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    badgeClass: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/25",
    dotClass: "bg-sky-500",
  },
];

export default function Hero({ onOpenDownload }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-grid-dots">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[var(--primary)]/15 via-[var(--primary)]/[0.04] to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-cyan-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Official Release Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center flex-wrap justify-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/80 backdrop-blur-md shadow-sm hover:border-[var(--primary)]/40 transition-all">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-extrabold uppercase tracking-wider border border-[var(--primary)]/20">
              v3.1.0 Released
            </span>
            <span className="text-xs text-[var(--text-main)] font-medium">
              1-Click WhatsApp Auto-Apply &amp; Multi-Portal Queues Live
            </span>
            <ArrowRight size={12} className="text-[var(--primary)] ml-0.5" />
          </div>
        </motion.div>

        {/* Hero Heading & Subheading */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-[74px] font-extrabold text-[var(--text-main)] leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Apply to <span className="text-[var(--text-main)]">500+ Jobs</span> on Autopilot{" "}
            <span className="relative inline-block mt-1 sm:mt-0">
              {/* Premium Gradient Headline Accent */}
              <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-blue-400 bg-clip-text text-transparent font-black">
                While You Sleep
              </span>
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[3px] sm:h-[4px] bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-600 rounded-full shadow-[0_2px_12px_rgba(14,165,233,0.4)]" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8 text-base sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed"
          >
            Stop spending 20+ hours on manual applications. AgentsKaro automates
            across <strong className="text-[var(--text-main)] font-semibold">Internshala, Naukri &amp; Indeed</strong> today — with LinkedIn,
            Wellfound &amp; global boards coming soon.
          </motion.p>
        </div>

        {/* High-Converting CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <button
            onClick={onOpenDownload}
            aria-label="Download AgentsKaro for Windows"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-sky-500/25 active:scale-95 transition-all cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Download size={18} className="stroke-[2.5]" />
            </div>
            <div className="text-left">
              <span className="block leading-none font-bold">Download for Windows</span>
              <span className="block text-[11px] text-sky-100/90 font-medium mt-0.5">
                v3.1.0 • .exe • 10 Free Applications Included
              </span>
            </div>
          </button>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--primary)]/50 text-[var(--text-main)] font-semibold text-base flex items-center justify-center gap-2.5 transition-all shadow-sm hover:shadow-md cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-[var(--badge-bg)] flex items-center justify-center shrink-0 text-[var(--primary)] group-hover:scale-110 transition-transform">
              <Play size={14} className="fill-[var(--primary)]" />
            </div>
            <span>See How It Works</span>
            <ArrowRight size={15} className="text-[var(--text-muted)] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Operating System Compatibility Notice */}
        <div className="flex items-center justify-center gap-3 text-xs text-[var(--text-subtle)] mb-8">
          <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Windows 10 / 11 Native (64-bit .exe)
          </span>
          <span>•</span>
          <span className="text-amber-600 dark:text-amber-400 font-medium">macOS &amp; Linux in Private Beta</span>
        </div>

        {/* Rating & Trust Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 p-3 sm:p-4 rounded-2xl bg-[var(--bg-card)]/50 border border-[var(--border)]/60 max-w-4xl mx-auto backdrop-blur-sm"
        >
          {/* Stars rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-[var(--text-main)]">4.9</span>
            <span className="text-xs text-[var(--text-muted)] font-medium">/ 5 from 482 verified reviews</span>
          </div>

          <span className="hidden sm:block text-[var(--border)]" aria-hidden="true">|</span>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[var(--text-muted)] font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-500" />
              10 Free Applications
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-500" />
              Zero Password Sharing
            </span>
            <span className="flex items-center gap-1.5">
              <Zap size={14} className="text-[var(--primary)]" />
              2,400+ Job Seekers Active
            </span>
          </div>
        </motion.div>

        {/* Redesigned Premium 4-Pillar Feature Cards (The Ones Highlighted by User) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto mb-16"
        >
          {TOP_FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <a
                key={feat.id}
                href={feat.href}
                className="group relative rounded-2xl p-5 surface-card hover:border-[var(--primary)]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Subtle corner ambient glow on hover */}
                <div
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: feat.accentGlow }}
                />

                <div>
                  {/* Top row: Themed Glowing Icon + Live Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shadow-sm ${feat.iconContainer}`}
                    >
                      <Icon size={20} className="stroke-[2.2]" />
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border shrink-0 ${feat.badgeClass}`}
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${feat.dotClass}`}></span>
                        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${feat.dotClass}`}></span>
                      </span>
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[15px] font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors tracking-tight leading-snug mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3">
                    {feat.desc}
                  </p>
                </div>

                {/* Bottom Interactive Micro-Action Link */}
                <div className="mt-5 pt-3.5 border-t border-[var(--border)]/60 flex items-center justify-between text-xs font-semibold text-[var(--text-subtle)] group-hover:text-[var(--primary)] transition-colors">
                  <span>{feat.actionText}</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </motion.div>

        {/* Live Software Mockup / Interactive Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <LiveSoftwareMockup />
        </motion.div>

        {/* Bottom Connected Stats Strip */}
        <div className="mt-12 border border-[var(--border)] rounded-2xl overflow-hidden grid grid-cols-2 md:grid-cols-4 bg-[var(--bg-card)] shadow-sm">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`py-6 px-6 text-center transition-colors hover:bg-[var(--bg-card-hover)] ${
                idx < 3 ? "border-r border-[var(--border)]" : ""
              } ${idx < 2 ? "border-b border-[var(--border)] md:border-b-0" : ""}`}
            >
              <div
                className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-[var(--text-main)] font-semibold">{stat.label}</div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">{stat.change}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

