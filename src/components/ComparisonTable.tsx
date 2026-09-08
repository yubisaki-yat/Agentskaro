"use client";

import React from "react";
import { X, Check, ArrowRight } from "lucide-react";

interface ComparisonProps {
  onOpenDownload?: () => void;
}

const OLD_WAY = [
  { title: "10–15 mins per application", desc: "Tedious form-filling that burns you out before interviews even start." },
  { title: "Generic copy-paste answers", desc: "Identical screening answers recruiters and ATS scanners filter out immediately." },
  { title: "High account ban risk", desc: "Browser extensions fire rapid requests, triggering platform bot detection." },
  { title: "Tied to your screen for hours", desc: "3+ hours every evening refreshing job portals tab by tab." },
  { title: "Blind guesswork on ATS fit", desc: "Submitting to roles where your resume lacks the right keywords." },
  { title: "Zero application tracking", desc: "No record of what you applied to, when, or what salary you asked for." },
];

const AGENTSKARO_WAY = [
  { title: "0 mins manual work", desc: "Runs fully in the background on Windows 10/11 while you sleep or study." },
  { title: "Dynamic AI-crafted answers", desc: "Custom screening responses tailored to each employer's JD in real-time." },
  { title: "Undetected stealth Chrome", desc: "Bézier mouse paths, organic typing cadences, randomized pauses — no bans." },
  { title: "WhatsApp 1-click YES apply", desc: "Get job pings on your phone. Reply YES to apply from anywhere, instantly." },
  { title: "ATS pre-evaluation (95%+ match)", desc: "Analyzes JD keywords against your CV and skips low-callback roles." },
  { title: "Automatic Excel tracking", desc: "Every application logged: title, link, salary, timestamp — exportable." },
];

const BENCHMARKS = [
  { label: "Time per 50 jobs", before: "10 hrs", after: "0 mins", afterColor: "text-[var(--primary)]" },
  { label: "AI screening answers", before: "Copy-paste", after: "Dynamic AI", afterColor: "text-purple-400" },
  { label: "Mobile apply", before: "None", after: "WhatsApp YES", afterColor: "text-emerald-400" },
  { label: "Anti-ban protection", before: "High risk", after: "100% safe", afterColor: "text-emerald-400" },
];

export default function ComparisonTable({ onOpenDownload }: ComparisonProps) {
  return (
    <section id="comparison" className="py-24 relative section-surface border-t border-[var(--border)] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <span className="section-label">The difference</span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-[var(--text-main)] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Manual grind vs.
            <br />
            <span className="text-[var(--text-muted)] font-medium">AgentsKaro autopilot.</span>
          </h2>
        </div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

          {/* Old way */}
          <div className="rounded-2xl p-7 bg-rose-950/[0.08] border border-rose-500/[0.15]">
            <div className="flex items-center justify-between mb-6 pb-5 border-b border-rose-500/[0.12]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400 block mb-1">The Old Way</span>
                <h3
                  className="text-lg font-semibold text-[var(--text-main)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Manual applying & extensions
                </h3>
              </div>
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <X size={18} className="stroke-[2.5]" />
              </div>
            </div>
            <ul className="space-y-4">
              {OLD_WAY.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={10} className="stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[var(--text-main)]">{item.title}</span>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-7 pt-5 border-t border-rose-500/[0.12]">
              <span className="text-xs font-medium text-rose-400/80">Result: 80+ hours wasted monthly · 2–3 interview calls</span>
            </div>
          </div>

          {/* AgentsKaro way */}
          <div className="rounded-2xl p-7 bg-[var(--primary)]/[0.05] border border-[var(--primary)]/[0.2] relative overflow-hidden">
            {/* Corner tag */}
            <div className="absolute top-0 right-0 bg-[var(--primary)] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
              v2.0 Engine
            </div>
            <div className="flex items-center justify-between mb-6 pb-5 border-b border-[var(--border)]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--primary)] block mb-1">The Modern Way</span>
                <h3
                  className="text-lg font-semibold text-[var(--text-main)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  AgentsKaro Desktop Engine
                </h3>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)]">
                <Check size={18} className="stroke-[2.5]" />
              </div>
            </div>
            <ul className="space-y-4">
              {AGENTSKARO_WAY.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={10} className="stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[var(--text-main)]">{item.title}</span>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-7 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs font-medium text-emerald-400">Result: 0 manual minutes · 12–20+ interview calls / month</span>
              {onOpenDownload && (
                <button
                  onClick={onOpenDownload}
                  className="shrink-0 btn-primary px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
                >
                  Try Free
                  <ArrowRight size={13} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Quick benchmark strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
          {BENCHMARKS.map((b, idx) => (
            <div key={idx} className="bg-[var(--bg-surface)] px-5 py-5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-subtle)] block mb-2">{b.label}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-sm line-through text-rose-400">{b.before}</span>
                <span className={`text-lg font-bold ${b.afterColor}`} style={{ fontFamily: "var(--font-display)" }}>
                  {b.after}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
