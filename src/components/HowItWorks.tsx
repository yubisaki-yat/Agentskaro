"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, KeyRound, SlidersHorizontal, Rocket } from "lucide-react";

interface HowItWorksProps {
  onOpenDownload: () => void;
}

const STEPS = [
  {
    num: "01",
    icon: Download,
    title: "Download for Windows",
    desc: "Install the verified desktop client on Windows 10 or 11. No complex setup, no Python, no command line — just a standard .exe installer.",
    tag: "368 MB · Windows Only",
  },
  {
    num: "02",
    icon: KeyRound,
    title: "Connect Your Portals",
    desc: "One-time browser login to Internshala, Naukri, or Indeed. Your session cookies are encrypted locally — nothing ever leaves your machine.",
    tag: "AES-GCM Local Encryption",
  },
  {
    num: "03",
    icon: SlidersHorizontal,
    title: "Set Your Preferences",
    desc: "Pick target roles, preferred locations, salary expectations, and daily application limits. Upload your resume for ATS match scoring.",
    tag: "Customizable Filters",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch & Let Go",
    desc: "Run background autopilot while you study or sleep — or get WhatsApp pings for each match and reply YES to apply with one tap.",
    tag: "Autopilot or WhatsApp",
  },
];

export default function HowItWorks({ onOpenDownload }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-24 relative section-surface border-t border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section header — editorial, no cyan badge */}
        <div className="max-w-2xl mb-16">
          <span className="section-label">How it works</span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-[var(--text-main)] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From download to first application
            <br />
            <span className="text-[var(--text-muted)] font-medium">in under 3 minutes.</span>
          </h2>
        </div>

        {/* Steps — numbered timeline, not identical 4-col grid */}
        <div className="space-y-0">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === STEPS.length - 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`relative flex gap-6 sm:gap-10 pb-10 ${isLast ? "" : ""}`}
              >
                {/* Left: number + connector line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-11 h-11 rounded-full border-2 border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-subtle)] text-sm font-bold font-mono shrink-0 z-10 relative">
                    {step.num}
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 mt-3 bg-gradient-to-b from-[var(--border)] to-transparent min-h-[2rem]" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-8 flex-1 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                    {/* Icon */}
                    <div className="hidden sm:flex w-10 h-10 rounded-xl bg-[var(--badge-bg)] border border-[var(--border)] items-center justify-center text-[var(--text-subtle)] shrink-0 group-hover:border-[var(--primary)] group-hover:text-[var(--primary)] transition-all">
                      <Icon size={18} />
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3
                          className="text-lg sm:text-xl font-semibold text-[var(--text-main)] tracking-tight"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {step.title}
                        </h3>
                        <span className="hidden sm:inline-block text-[10px] font-medium text-[var(--text-subtle)] bg-[var(--badge-bg)] border border-[var(--border)] px-2 py-0.5 rounded-full">
                          {step.tag}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-4 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            No technical knowledge required. If you can use a browser, you can use AgentsKaro.
          </p>
          <button
            onClick={onOpenDownload}
            className="btn-primary shrink-0 px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
          >
            <Download size={15} />
            Start with 10 Free Applications
          </button>
        </div>
      </div>
    </section>
  );
}
