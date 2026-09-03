"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, KeyRound, SlidersHorizontal, Rocket, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onOpenDownload: () => void;
}

const STEPS = [
  {
    step: "01",
    icon: Download,
    title: "Download for Windows",
    desc: "Install the clean, verified 368MB desktop client on Windows 10 or 11. No complex setup or python knowledge required.",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    step: "02",
    icon: KeyRound,
    title: "Connect Your Portals",
    desc: "Complete a simple 1-time login to Internshala, Naukri, or Indeed. Cookies are encrypted locally on your hard drive.",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    step: "03",
    icon: SlidersHorizontal,
    title: "Set Career Preferences",
    desc: "Choose your target roles (e.g. Frontend, React, Python), location, salary expectations, and daily application goals.",
    accent: "from-purple-500 to-pink-500",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Autopilot or WhatsApp YES/NO",
    desc: "Run 100% background autopilot on Windows, or receive job match pings on WhatsApp and reply 'YES' to apply instantly.",
    accent: "from-emerald-500 to-cyan-500",
  },
];

export default function HowItWorks({ onOpenDownload }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-24 relative bg-[var(--bg-surface)] border-y border-[var(--card-border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight mt-3">
            From Download to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Job Applications in 3 Minutes</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-base sm:text-lg">
            No technical background needed. If you can use a browser, you can use AgentsKaro.
          </p>
        </div>

        {/* 4 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-6 sm:p-7 rounded-3xl border border-[var(--card-border)] flex flex-col justify-between relative group hover:border-cyan-500/40 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.accent} p-0.5 shadow-lg`}>
                    <div className="w-full h-full bg-[var(--bg-surface)] rounded-[14px] flex items-center justify-center text-white">
                      <step.icon size={22} />
                    </div>
                  </div>
                  <span className="text-3xl font-black text-[var(--text-subtle)] opacity-40 font-mono group-hover:opacity-80 group-hover:text-cyan-400 transition-all">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">{step.title}</h3>
                <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--card-border)] flex items-center gap-1.5 text-xs font-semibold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Step {step.step} Ready</span>
                <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Fast Action */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl glow-button text-black font-extrabold text-xs sm:text-sm cursor-pointer shadow-lg active:scale-95 transition-all"
          >
            <Download size={16} />
            <span>Get Started with 10 Free Applications</span>
          </button>
        </div>
      </div>
    </section>
  );
}
