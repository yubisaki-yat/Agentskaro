"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, ShieldCheck, FileSpreadsheet, BrainCircuit, MessageSquare, Zap, CheckCircle2 } from "lucide-react";

const FEATURES = [
  {
    icon: Bot,
    title: "Multi-Portal Automation Engine",
    desc: "Run concurrent automated bots across Internshala, Naukri, and Indeed simultaneously. Customize filters by role, location, salary, and experience level.",
    wide: true,
    accent: "text-[var(--primary)]",
    accentBg: "bg-[var(--primary)]/[0.08]",
    badge: "AUTOPILOT LIVE",
    footer: ["Internshala", "Naukri.com", "Indeed", "LinkedIn (soon)", "Hirist", "Wellfound", "Direct Career Pages"],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp 1-Click Apply",
    desc: "Get instant job match alerts on WhatsApp with AI-calculated fit scores. Reply YES to apply directly without opening your laptop.",
    wide: false,
    accent: "text-emerald-500",
    accentBg: "bg-emerald-500/[0.08]",
    badge: "FLAGSHIP LIVE",
    highlight: true,
  },
  {
    icon: BrainCircuit,
    title: "AI Screening Answer Engine",
    desc: "Dynamically answers recruiter questions like \"Why should we hire you?\" tailored to your resume and the exact job requirements in real-time.",
    wide: false,
    accent: "text-purple-500",
    accentBg: "bg-purple-500/[0.08]",
    badge: "AI 2.0 ACTIVE",
  },
  {
    icon: ShieldCheck,
    title: "Stealth Undetected Chrome",
    desc: "Bézier curve mouse trajectories, randomized human typing cadence, and encrypted local cookies keep your accounts 100% safe from bans.",
    wide: false,
    accent: "text-emerald-500",
    accentBg: "bg-emerald-500/[0.08]",
    badge: "0 BANS VERIFIED",
  },
  {
    icon: FileSpreadsheet,
    title: "Real-Time Logs & Excel Export",
    desc: "Automatically logs company names, job titles, recruiter details, salary range, and timestamps into clean .xlsx spreadsheets.",
    wide: false,
    accent: "text-blue-500",
    accentBg: "bg-blue-500/[0.08]",
    badge: "INSTANT XLSX",
  },
];

export default function FeaturesBento() {
  return (
    <section id="features" className="py-24 relative section-base border-t border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>VERIFIED ENTERPRISE SUITE</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-[var(--text-main)] tracking-tight leading-tight mt-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Engineered to beat the job search grind.
            </h2>
          </div>
          <p className="sm:max-w-xs text-sm text-[var(--text-muted)] leading-relaxed">
            Every feature eliminates a specific manual bottleneck — with stealth browser anti-ban emulation.
          </p>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Wide card — spans 2 cols */}
          {(() => {
            const f = FEATURES[0];
            const Icon = f.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="md:col-span-2 surface-card surface-card-lift rounded-2xl p-7 flex flex-col justify-between gap-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl ${f.accentBg} border border-[var(--border)] flex items-center justify-center ${f.accent}`}>
                      <Icon size={20} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/25">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      {f.badge}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-[var(--text-main)] mb-2 tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">{f.desc}</p>
                  </div>
                </div>

                {/* Portal pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                  {f.footer?.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--border)] text-xs font-medium text-[var(--text-muted)]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })()}

          {/* Tall single col cards */}
          {FEATURES.slice(1).map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (idx + 1) * 0.08 }}
                className={`surface-card surface-card-lift rounded-2xl p-6 flex flex-col justify-between gap-5 ${
                  f.highlight ? "ring-1 ring-emerald-500/40 border-emerald-500/30" : ""
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl ${f.accentBg} border border-[var(--border)] flex items-center justify-center ${f.accent}`}>
                      <Icon size={19} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/25">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      {f.badge}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold text-[var(--text-main)] mb-2 tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
