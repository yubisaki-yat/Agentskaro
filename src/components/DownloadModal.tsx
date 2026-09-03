"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, CheckCircle2, Shield, Laptop, Sparkles, Mail, ArrowRight, Loader2, AlertCircle } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = () => {
    setDownloadStarted(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("download", "AgentsKaro-Setup-v2.0.exe");
    }, 800);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail, source: "download_modal" }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit email");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Subscription error:", err);
      setErrorMessage(err?.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl glass-card rounded-3xl p-6 sm:p-8 z-10 border border-cyan-500/30 overflow-hidden shadow-2xl bg-[var(--bg-surface)] text-[var(--text-main)]"
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[var(--badge-bg)] hover:bg-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="AgentsKaro Desktop Icon"
                className="w-13 h-13 rounded-2xl shadow-xl shadow-cyan-500/25 object-cover border border-cyan-400/40"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-[var(--text-main)] tracking-tight">AgentsKaro Desktop</h3>
                  <span className="px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                    v2.0 Official
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">Windows 10 / 11 (64-bit) • 368 MB</p>
              </div>
            </div>

            {/* Download CTA Card */}
            <div className="p-5 rounded-2xl bg-[var(--badge-bg)] border border-[var(--card-border)] mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-[var(--text-main)] text-sm mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    10 Free Applications Included
                  </h4>
                  <p className="text-xs text-[var(--text-muted)]">
                    No credit card required. Connect your accounts & auto-apply immediately.
                  </p>
                </div>
                <button
                  onClick={handleDownload}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl glow-button text-black font-extrabold text-sm flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4" />
                  {downloadStarted ? "Downloading..." : "Download (.exe)"}
                </button>
              </div>

              {downloadStarted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 pt-4 border-t border-[var(--card-border)] space-y-2"
                >
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 size={16} />
                    <span>Download started! Check your browser downloads bar.</span>
                  </div>

                  {/* Windows SmartScreen Quick Tip */}
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-[var(--text-muted)] flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[var(--text-main)] block mb-0.5">Windows SmartScreen Note:</span>
                      <span>
                        If Windows prompts <em>"Protected your PC / Unrecognized app"</em>, click <strong className="text-[var(--text-main)]">"More info"</strong> ➔ <strong className="text-cyan-400">"Run anyway"</strong>. The installer is 100% virus-free and verified by Yubisaki Assistive Technology.
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* 3 Step Setup Guide */}
            <div className="space-y-2 mb-6">
              <p className="text-[11px] font-bold tracking-wider uppercase text-[var(--text-muted)]">Instant 3-Step Setup</p>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-3 rounded-xl bg-[var(--badge-bg)] border border-[var(--card-border)]">
                  <span className="block font-black text-cyan-400 text-sm mb-1">01</span>
                  <span className="text-[var(--text-main)] text-[11px] font-medium leading-tight block">Run Installer</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--badge-bg)] border border-[var(--card-border)]">
                  <span className="block font-black text-cyan-400 text-sm mb-1">02</span>
                  <span className="text-[var(--text-main)] text-[11px] font-medium leading-tight block">Connect Portals</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--badge-bg)] border border-[var(--card-border)]">
                  <span className="block font-black text-cyan-400 text-sm mb-1">03</span>
                  <span className="text-[var(--text-main)] text-[11px] font-medium leading-tight block">Autopilot Apply</span>
                </div>
              </div>
            </div>

            {/* Email notification capture */}
            <div className="pt-4 border-t border-[var(--card-border)]">
              <p className="text-xs text-[var(--text-muted)] mb-2.5 font-medium">
                Want instant email updates, new job portal releases & interview guides?
              </p>
              {submitted ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs leading-relaxed space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 size={18} className="shrink-0" />
                    <span>Welcome Email Dispatched! 🚀</span>
                  </div>
                  <p className="text-emerald-300 text-[11px] pl-6">
                    We've sent a welcome guide from <strong>agentskaro.noreply@gmail.com</strong> with your 10 Free Applications activation steps and upcoming feature roadmap. Please check your inbox (or Promotions/Spam folder).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="space-y-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-subtle)]" />
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 bg-[var(--bg-page)] border border-[var(--card-border)] rounded-xl text-xs text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-cyan-400 disabled:opacity-50"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2.5 rounded-xl bg-[var(--badge-bg)] hover:bg-[var(--card-border)] text-[var(--text-main)] border border-[var(--card-border)] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 shrink-0"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={14} className="animate-spin text-cyan-400" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Notify Me</span>
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-1.5 text-rose-400 text-[11px] font-medium pt-1">
                      <AlertCircle size={13} />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Security note */}
            <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-[var(--text-subtle)]">
              <Shield size={13} className="text-cyan-400" />
              <span>Clean binary • Verified by Yubisaki Assistive Technology • 100% Virus-free</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
