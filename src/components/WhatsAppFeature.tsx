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
    <section id="whatsapp" className="py-24 relative overflow-hidden bg-gradient-to-b from-[var(--bg-page)] via-[var(--bg-surface-elevated)] to-[var(--bg-page)] border-t border-[var(--card-border)] transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Feature Pill */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare size={13} className="fill-emerald-400/20" />
            <span>Game-Changing WhatsApp Automation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight leading-tight">
            Apply to Top Jobs on WhatsApp <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Just by Replying "YES"
            </span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto">
            You don't even have to open your laptop. AgentsKaro discovers matching roles across all portals and sends them to your WhatsApp. Just type <strong>YES</strong> to apply instantly with AI-crafted answers.
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
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#1f2c34]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white leading-tight">AgentsKaro AI Bot</span>
                        <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-bold">
                          VERIFIED
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-400 block font-medium">online • instant auto-apply</span>
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
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                Effortless Career Automation
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
                Zero Form Fatigue. Total Control in Your Pocket.
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Whether you're traveling in the metro, sitting in a college lecture, or at the gym, your career search never pauses.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl glass-card border border-[var(--card-border)] flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-main)] mb-0.5">1-Second Yes/No Approval</h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Review company, role, package, and match score right in chat. Reply "YES" and the desktop client executes the full application in the background.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-card border border-[var(--card-border)] flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <BellRing size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-main)] mb-0.5">Apply Within 5 Minutes of Posting</h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Be applicant #1 instead of #1,400. Fresh jobs are fetched within minutes across Internshala, Naukri, Indeed, LinkedIn, and Hirist.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-card border border-[var(--card-border)] flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-main)] mb-0.5">100% Private & Direct Sync</h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Your WhatsApp communicates securely with your local AgentsKaro Windows client. No third-party data selling or spam.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl glow-button text-black font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 transition-all"
              >
                <span>Activate WhatsApp Bot (10 Free Apps)</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
