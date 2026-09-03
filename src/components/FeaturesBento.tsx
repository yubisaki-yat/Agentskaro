"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, ShieldCheck, FileSpreadsheet, BrainCircuit, Zap, MessageSquare } from "lucide-react";

export default function FeaturesBento() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap size={13} />
            <span>Built For Maximum Results</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight leading-tight">
            Engineered to Beat the <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Job Search Grind</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-base sm:text-lg">
            Every feature is designed to automate the painful parts of job hunting while keeping your accounts 100% safe.
          </p>
        </div>

        {/* Bento Grid Layout (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Multi-Platform Bot (Spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 glass-card p-8 rounded-3xl glass-card-hover border border-[var(--card-border)] relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                  <Bot size={24} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-[var(--text-main)] tracking-tight">Unified Multi-Portal Automation</h3>
                  <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-cyan-400/20 text-cyan-400 rounded-full">
                    Unified Portals
                  </span>
                </div>
                <p className="text-[var(--text-muted)] text-sm max-w-xl leading-relaxed">
                  Run targeted bots concurrently across all leading job portals. Automatically apply based on custom role filters, location preferences (Remote/Hybrid/In-office), and minimum CTC expectations.
                </p>
              </div>

              {/* Supported Portal Pills */}
              <div className="mt-8 pt-6 border-t border-[var(--card-border)] flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--card-border)] text-xs font-semibold text-[var(--text-main)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Internshala
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--card-border)] text-xs font-semibold text-[var(--text-main)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Naukri.com
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--card-border)] text-xs font-semibold text-[var(--text-main)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  Indeed
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--card-border)] text-xs font-semibold text-[var(--text-main)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  LinkedIn Auto-Apply
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--card-border)] text-xs font-semibold text-[var(--text-main)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Hirist Tech
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--card-border)] text-xs font-semibold text-[var(--text-main)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  Wellfound (AngelList)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--card-border)] text-xs font-semibold text-[var(--text-main)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Direct Career Pages
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: WhatsApp AI Assistant & Yes/No Apply */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 rounded-3xl glass-card-hover border border-emerald-500/30 relative overflow-hidden bg-gradient-to-br from-emerald-950/20 via-[var(--card-bg)] to-[var(--card-bg)]"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-md shadow-emerald-500/10">
              <MessageSquare size={24} />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-[var(--text-main)]">WhatsApp "YES/NO" Apply</h3>
              <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider bg-emerald-400/20 text-emerald-400 rounded-full">
                HOT
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
              Get high-match job pings straight on your WhatsApp with match scores. Reply <strong>"YES"</strong> to apply instantly, or <strong>"NO"</strong> to skip without opening your laptop.
            </p>
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-mono">
              Effortless 1-tap applications on the go.
            </div>
          </motion.div>

          {/* Card 3: AI Answer Engine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl glass-card-hover border border-[var(--card-border)] relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <BrainCircuit size={24} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">Smart AI Answer Engine</h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
              Never get stuck on subjective recruiter questions. The engine dynamically answers "Why should we hire you?", notice periods, and custom screening questions in real-time.
            </p>
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-400 font-mono">
              Auto-fills tailored responses based on your experience.
            </div>
          </motion.div>

          {/* Card 4: ATS Resume Parser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-8 rounded-3xl glass-card-hover border border-[var(--card-border)] relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">ATS Match Intelligence</h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Before applying, AgentsKaro calculates matching scores between your resume and the employer’s JD. Unrelated roles are automatically skipped to maximize interview calls.
            </p>
          </motion.div>

          {/* Card 5: Stealth Human Emulation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-8 rounded-3xl glass-card-hover border border-[var(--card-border)] relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">Stealth Human Simulation</h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Operates through undetectable Chrome drivers with randomized delays, human-like typing cadences, and anti-bot evasion. Your account remains completely safe from bans.
            </p>
          </motion.div>

          {/* Card 6: Real-time Analytics & Excel Export */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-8 rounded-3xl glass-card-hover border border-[var(--card-border)] relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <FileSpreadsheet size={24} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">Live Logs & Excel Export</h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Track every applied job title, recruiter link, salary range, and submission timestamp. Automatically exports clean, ready-to-view Excel spreadsheets (.xlsx).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
