"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Check, AlertTriangle, Sparkles, Zap, ShieldCheck, Clock, MessageSquare, ArrowRight, TrendingUp } from "lucide-react";

interface ComparisonProps {
  onOpenDownload?: () => void;
}

export default function ComparisonTable({ onOpenDownload }: ComparisonProps) {
  const OLD_WAY = [
    {
      title: "10-15 Mins Per Application",
      desc: "Tedious, repetitive form-filling that drains your energy and burns you out before interviews.",
    },
    {
      title: "Copy-Pasting Generic Answers",
      desc: "Copying identical 'Why should we hire you?' answers that recruiters and ATS scanners instantly ignore.",
    },
    {
      title: "High Risk of Account Bans",
      desc: "Generic browser extensions fire rapid API requests, triggering bot detection and account suspension.",
    },
    {
      title: "Tethered to Your Laptop Screen",
      desc: "Forced to sit for 3 painful hours every night refreshing job portals tab-by-tab.",
    },
    {
      title: "Blind Guesswork on ATS Fit",
      desc: "Submitting to jobs where your resume lacks exact keywords, resulting in immediate silent rejections.",
    },
    {
      title: "Messy or Zero Application Tracking",
      desc: "Never knowing which company contacted you, what salary you asked for, or when you applied.",
    },
  ];

  const AGENTSKARO_WAY = [
    {
      title: "0 Minutes Manual Work (100% Autopilot)",
      desc: "Runs quietly in the background on Windows 10/11 while you prepare for coding rounds or sleep.",
      icon: Zap,
      accent: "text-cyan-400",
    },
    {
      title: "Dynamic Contextual AI Answer Engine",
      desc: "Crafts truthful, high-converting screening answers tailored to the employer's exact job description.",
      icon: Sparkles,
      accent: "text-purple-400",
    },
    {
      title: "Undetected Stealth Chrome Drivers",
      desc: "Bézier curve mouse paths, randomized pauses, and organic typing patterns keep your accounts 100% safe.",
      icon: ShieldCheck,
      accent: "text-emerald-400",
    },
    {
      title: "WhatsApp 1-Click 'YES / NO' Auto-Apply",
      desc: "Get instant job alerts on WhatsApp with match scores. Reply 'YES' to apply from your phone anywhere.",
      icon: MessageSquare,
      accent: "text-emerald-400",
    },
    {
      title: "ATS Pre-Evaluation (95%+ Fit Match)",
      desc: "Analyzes JD keywords against your CV in real-time, prioritizing high-callback opportunities.",
      icon: TrendingUp,
      accent: "text-cyan-400",
    },
    {
      title: "Automatic Clean Excel Logs (.xlsx)",
      desc: "Every submission, job link, recruiter name, and timestamp is organized in a clean spreadsheet.",
      icon: Clock,
      accent: "text-blue-400",
    },
  ];

  return (
    <section id="comparison" className="py-24 pb-32 relative overflow-hidden bg-[var(--bg-surface)] border-t border-[var(--card-border)] transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>The Architectural Difference</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight leading-tight">
            The Painful Manual Grind <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
              vs The AgentsKaro Autopilot Engine
            </span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-base sm:text-lg">
            See why candidates spending 3 hours every day on job boards are getting outpaced by autonomous agents.
          </p>
        </div>

        {/* 2-Column Split Benchmark Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: The Old Way (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl p-7 sm:p-8 bg-rose-950/10 border border-rose-500/20 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-rose-500/15 mb-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-400 block mb-1">
                    THE OLD WAY
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-main)]">Manual Applying & Extensions</h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <X size={20} className="stroke-[3]" />
                </div>
              </div>

              <div className="space-y-4">
                {OLD_WAY.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={12} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[var(--text-main)] leading-snug">{item.title}</h4>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-rose-500/15 text-center">
              <span className="text-xs font-semibold text-rose-400/90">
                Result: 80+ hours wasted monthly • 2-3 interview calls
              </span>
            </div>
          </div>

          {/* Right Column: The AgentsKaro Way (7 cols - Premium Elevated Card) */}
          <div className="lg:col-span-7 rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-cyan-950/40 via-[var(--card-bg)] to-[var(--card-bg)] border-2 border-cyan-400/40 shadow-2xl shadow-cyan-500/10 flex flex-col justify-between relative overflow-hidden">
            {/* Top Recommended Tag */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-400 to-blue-500 text-black text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-md">
              OFFICIAL V2.0 ENGINE
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[var(--card-border)] mb-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 block mb-1">
                    THE MODERN WAY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[var(--text-main)] tracking-tight">
                    AgentsKaro Desktop Engine
                  </h3>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-md">
                  <Check size={22} className="stroke-[3]" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {AGENTSKARO_WAY.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[var(--badge-bg)] border border-[var(--card-border)] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`p-1 rounded-lg bg-white/5 ${item.accent}`}>
                          <item.icon size={15} />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-[var(--text-main)] leading-snug">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Proof Strip */}
            <div className="mt-8 pt-6 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Check size={16} className="stroke-[3]" />
                <span>Result: 0 manual minutes • 12 to 20+ interview calls / month</span>
              </div>

              {onOpenDownload && (
                <button
                  onClick={onOpenDownload}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl glow-button text-black font-black text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95 transition-all shrink-0"
                >
                  <span>Start Free Trial (10 Apps)</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Rapid Capability Benchmark Bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl glass-card border border-[var(--card-border)]">
            <span className="text-[10px] font-bold text-[var(--text-subtle)] uppercase block mb-1">Time per 50 Jobs</span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-sm line-through text-rose-400">10 hrs</span>
              <span className="text-lg font-black text-cyan-400">0 mins</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-[var(--card-border)]">
            <span className="text-[10px] font-bold text-[var(--text-subtle)] uppercase block mb-1">AI Screening Answers</span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-sm line-through text-rose-400">Copy-Paste</span>
              <span className="text-lg font-black text-purple-400">Dynamic AI</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-[var(--card-border)]">
            <span className="text-[10px] font-bold text-[var(--text-subtle)] uppercase block mb-1">Mobile Approval</span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-sm line-through text-rose-400">None</span>
              <span className="text-lg font-black text-emerald-400">WhatsApp YES</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-[var(--card-border)]">
            <span className="text-[10px] font-bold text-[var(--text-subtle)] uppercase block mb-1">Anti-Ban Protection</span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-sm line-through text-rose-400">High Risk</span>
              <span className="text-lg font-black text-emerald-400">100% Safe UC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
