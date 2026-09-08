"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Check, CheckCheck, Sparkles, Smartphone, Zap, ShieldCheck, ArrowRight, BellRing } from "lucide-react";

interface WhatsAppFeatureProps {
  onOpenDownload: () => void;
}

export default function WhatsAppFeature({ onOpenDownload }: WhatsAppFeatureProps) {
  const [replied, setReplied] = useState(true);

  return (
    <section id="whatsapp" className="py-24 relative overflow-hidden section-base border-t border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section header — left aligned, editorial */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-3.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="uppercase tracking-wider text-[10px]">Official Flagship</span>
            <span>•</span>
            <span>WhatsApp 1-Click AI Agent</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold text-[var(--text-main)] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Apply to jobs on WhatsApp.
            <br />
            <span className="text-[var(--text-muted)] font-medium">Just reply "YES".</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-base leading-relaxed">
            You don't even have to open your laptop. AgentsKaro finds matching roles and sends them to your WhatsApp — complete with ATS match score and salary. Reply <strong className="text-[var(--text-main)] font-semibold">YES</strong> and the autonomous AI agent handles everything.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive WhatsApp Chat Mockup (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="max-w-md mx-auto rounded-[36px] p-3 sm:p-4 bg-gradient-to-b from-slate-800 via-slate-900 to-black border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/15">
              {/* WhatsApp App Frame */}
              <div className="rounded-[28px] overflow-hidden bg-[#0c1317] border border-white/10 flex flex-col text-slate-200">
                {/* WhatsApp Chat Header */}
                <div className="bg-[#1f2c34] px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src="/logo.png"
                        alt="AgentsKaro Bot"
                        className="w-10 h-10 rounded-full object-cover border border-emerald-400/40 shadow-sm"
                      />
                      <span className="absolute bottom-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#1f2c34]"></span>
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white leading-tight">AgentsKaro AI Agent</span>
                        <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-bold">
                          VERIFIED
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                        <span>online • instant auto-apply active</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#111b21] text-[10px] font-mono text-gray-300 border border-white/10">
                      Multi-Portal Sync
                    </span>
                  </div>
                </div>

                {/* WhatsApp Messages Stream */}
                <div className="p-4 space-y-3.5 bg-[#0b141a] text-xs font-sans min-h-[340px] flex flex-col justify-end">
                  {/* Message 1: Incoming Job Match */}
                  <div className="max-w-[88%] bg-[#202c33] rounded-2xl rounded-tl-sm p-3.5 shadow-md space-y-2 border border-white/5">
                    <div className="flex items-center justify-between text-[10px] text-emerald-400 font-bold tracking-wide uppercase">
                      <span>🎯 96.8% ATS Match Found</span>
                      <span className="text-gray-400 font-normal">10:42 AM</span>
                    </div>
                    <div className="text-white text-sm font-bold">
                      Swiggy • Senior Frontend Engineer
                    </div>
                    <div className="text-[11px] text-gray-300 leading-relaxed space-y-0.5">
                      <div>📍 <strong>Location:</strong> Bengaluru / Remote</div>
                      <div>💰 <strong>Package:</strong> ₹22,00,000 - ₹30,00,000 PA</div>
                      <div>🌐 <strong>Portal:</strong> Naukri.com & LinkedIn</div>
                      <div>⚡ <strong>Posted:</strong> Just 8 mins ago</div>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-[11px] text-emerald-300 font-medium bg-emerald-950/30 p-2 rounded-xl border border-emerald-500/20">
                      👉 Reply <strong>YES</strong> to auto-apply with AI tailored answers & resume.
                      <br />
                      👉 Reply <strong>NO</strong> to pass.
                    </div>
                  </div>

                  {/* Message 2: User reply */}
                  {replied && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="self-end max-w-[65%] bg-[#005c4b] text-white rounded-2xl rounded-tr-sm p-3 shadow-md space-y-1"
                    >
                      <span className="text-sm font-bold block">YES</span>
                      <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-200">
                        <span>10:43 AM</span>
                        <CheckCheck size={14} className="text-cyan-300" />
                      </div>
                    </motion.div>
                  )}

                  {/* Message 3: Bot Confirmation */}
                  {replied && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="max-w-[88%] bg-[#202c33] rounded-2xl rounded-tl-sm p-3.5 shadow-md space-y-1.5 border border-emerald-500/30"
                    >
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                        <Check size={14} className="stroke-[3]" />
                        <span>Application Submitted Successfully! 🚀</span>
                      </div>
                      <p className="text-[11px] text-gray-300 leading-relaxed">
                        • Screening question <em>"Why Swiggy?"</em> auto-filled with AI.
                        <br />
                        • Resume uploaded & synced to your Excel report (.xlsx).
                      </p>
                      <span className="text-[9px] text-gray-400 block text-right">10:43 AM</span>
                    </motion.div>
                  )}
                </div>

                {/* Input bar preview */}
                <div className="bg-[#202c33] px-3.5 py-2.5 flex items-center justify-between gap-2 border-t border-white/5">
                  <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-1.5 text-xs text-gray-400 font-medium flex items-center justify-between">
                    <span>Type "YES" or "NO"...</span>
                    <Sparkles size={14} className="text-emerald-400" />
                  </div>
                  <button
                    onClick={() => setReplied(!replied)}
                    aria-label={replied ? "Reset WhatsApp demo" : "Send YES to apply"}
                    className="px-3 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-black font-extrabold text-[11px] transition-all cursor-pointer shadow-md"
                  >
                    {replied ? "Reset Demo" : "Send YES"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Benefits & Time Savings (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3
                className="text-2xl font-bold text-[var(--text-main)] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Total control in your pocket, anywhere.
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Whether you're commuting, in a lecture, or at the gym — your job search never stops.
              </p>
            </div>

            <div className="space-y-3">
              <div className="surface-card rounded-xl p-4 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-[var(--border)] text-emerald-400 flex items-center justify-center shrink-0">
                  <Zap size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-main)] mb-0.5">1-second YES/NO approval</h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Review company, role, package, and match score right in chat. Reply YES and the desktop client applies in the background.
                  </p>
                </div>
              </div>

              <div className="surface-card rounded-xl p-4 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[var(--primary)]/10 border border-[var(--border)] text-[var(--primary)] flex items-center justify-center shrink-0">
                  <BellRing size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-main)] mb-0.5">Apply within 5 mins of posting</h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Be applicant #1 instead of #1,400. Jobs are fetched within minutes across Internshala, Naukri, Indeed, LinkedIn, and Hirist.
                  </p>
                </div>
              </div>

              <div className="surface-card rounded-xl p-4 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-[var(--border)] text-purple-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-main)] mb-0.5">100% private & local</h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Your WhatsApp communicates only with your local AgentsKaro client. Nothing is sold or shared.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenDownload}
                className="btn-primary w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
              >
                Activate WhatsApp AI Agent (10 Free Apps)
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
