"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, CheckCircle2, Shield, ShieldCheck, Sparkles, Mail, ArrowRight, Loader2, AlertCircle, Laptop, Apple, Terminal } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type OperatingSystem = "windows" | "macos" | "linux";

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [selectedOS, setSelectedOS] = useState<OperatingSystem>("windows");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [downloadStarted, setDownloadStarted] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const EXE_DOWNLOAD_URL = process.env.NEXT_PUBLIC_EXE_URL || null;

  const handleDownload = () => {
    setDownloadStarted(true);
    if (EXE_DOWNLOAD_URL) {
      const link = document.createElement("a");
      link.href = EXE_DOWNLOAD_URL;
      link.setAttribute("download", "AgentsKaro-Setup-v2.0.exe");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } else {
      console.log("Download URL not configured yet. Set NEXT_PUBLIC_EXE_URL in env vars.");
    }
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
        body: JSON.stringify({ 
          email: cleanEmail, 
          source: `download_modal_${selectedOS}` 
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit email");
      }

      setSubmitted(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      console.error("Subscription error:", err);
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-modal-title"
            className="relative w-full max-w-xl surface-card rounded-3xl p-6 sm:p-8 z-10 border border-[var(--border)] overflow-hidden shadow-2xl my-8"
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary)]/[0.08] rounded-full blur-3xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close download dialog"
              className="absolute top-5 right-5 p-2 rounded-xl bg-[var(--badge-bg)] hover:bg-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative shrink-0">
                <img
                  src="/logo.png"
                  alt="AgentsKaro Desktop Icon"
                  className="w-14 h-14 rounded-2xl shadow-lg object-cover border border-[var(--border)]"
                />
                <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[var(--bg-card)]"></span>
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 id="download-modal-title" className="text-xl font-bold text-[var(--text-main)] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                    AgentsKaro Desktop
                  </h3>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[var(--primary)]/10 text-[var(--primary)] rounded-full border border-[var(--primary)]/20">
                    v2.0
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">
                  Autonomous AI Job Search &amp; Auto-Apply Agent
                </p>
              </div>
            </div>

            {/* OS Selector Tabs (Windows Available, macOS & Linux Coming Soon) */}
            <div className="mb-6">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[var(--text-subtle)] block mb-2">
                Select Operating System:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {/* Windows Tab */}
                <button
                  type="button"
                  onClick={() => setSelectedOS("windows")}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedOS === "windows"
                      ? "bg-[var(--primary)]/10 border-[var(--primary)] shadow-sm text-[var(--text-main)]"
                      : "bg-[var(--bg-subtle)] border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-hover)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Laptop size={16} className={selectedOS === "windows" ? "text-[var(--primary)]" : "text-[var(--text-subtle)]"} />
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      Available
                    </span>
                  </div>
                  <span className="text-xs font-bold block">Windows</span>
                  <span className="text-[10px] text-[var(--text-subtle)]">10 / 11 (64-bit)</span>
                </button>

                {/* macOS Tab */}
                <button
                  type="button"
                  onClick={() => setSelectedOS("macos")}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedOS === "macos"
                      ? "bg-[var(--primary)]/10 border-[var(--primary)] shadow-sm text-[var(--text-main)]"
                      : "bg-[var(--bg-subtle)] border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-hover)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Apple size={16} className={selectedOS === "macos" ? "text-[var(--primary)]" : "text-[var(--text-subtle)]"} />
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400">
                      Soon
                    </span>
                  </div>
                  <span className="text-xs font-bold block">macOS</span>
                  <span className="text-[10px] text-[var(--text-subtle)]">M1/M2/M3 &amp; Intel</span>
                </button>

                {/* Linux Tab */}
                <button
                  type="button"
                  onClick={() => setSelectedOS("linux")}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedOS === "linux"
                      ? "bg-[var(--primary)]/10 border-[var(--primary)] shadow-sm text-[var(--text-main)]"
                      : "bg-[var(--bg-subtle)] border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-hover)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Terminal size={16} className={selectedOS === "linux" ? "text-[var(--primary)]" : "text-[var(--text-subtle)]"} />
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400">
                      Soon
                    </span>
                  </div>
                  <span className="text-xs font-bold block">Linux</span>
                  <span className="text-[10px] text-[var(--text-subtle)]">.deb &amp; AppImage</span>
                </button>
              </div>
            </div>

            {/* Content Based on OS Selection */}
            {selectedOS === "windows" ? (
              /* Windows Download Card */
              <div className="p-5 rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border)] mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-[var(--text-main)] text-sm mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      10 Free Applications Included
                    </h4>
                    <p className="text-xs text-[var(--text-muted)]">
                      Windows 10 / 11 (64-bit) • 368 MB installer • No credit card needed.
                    </p>
                  </div>
                  <button
                    onClick={handleDownload}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl btn-primary text-sm font-semibold flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md active:scale-95 transition-all"
                  >
                    <Download className="w-4 h-4 stroke-[2.5]" />
                    {downloadStarted ? "Downloading..." : "Download (.exe)"}
                  </button>
                </div>

                {downloadStarted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-[var(--border)] space-y-2"
                  >
                    <div className="flex items-center gap-2 text-emerald-500 text-xs font-semibold">
                      <CheckCircle2 size={16} />
                      <span>Download initiated! Check your browser downloads bar.</span>
                    </div>

                    {/* Windows SmartScreen Quick Tip */}
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-[var(--text-muted)] flex items-start gap-2.5">
                      <ShieldCheck size={16} className="text-[var(--primary)] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[var(--text-main)] block mb-0.5">Windows SmartScreen Note:</span>
                        <span>
                          If Windows shows <em>&ldquo;Protected your PC / Unrecognized app&rdquo;</em>, click <strong className="text-[var(--text-main)]">&ldquo;More info&rdquo;</strong> ➔ <strong className="text-[var(--primary)]">&ldquo;Run anyway&rdquo;</strong>. The installer is 100% virus-free and verified by Yubisaki Assistive Technology.
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              /* macOS & Linux Coming Soon Card */
              <div className="p-5 rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border)] mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                    Coming Soon • Private Beta
                  </span>
                </div>
                <h4 className="font-bold text-[var(--text-main)] text-sm mb-1">
                  {selectedOS === "macos" ? "macOS Build (Apple Silicon & Intel)" : "Linux Build (.deb / AppImage)"} is on the way!
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  The {selectedOS === "macos" ? "macOS" : "Linux"} native client is currently undergoing final beta testing. Leave your email below to receive the direct download link and early VIP access as soon as it goes live.
                </p>
              </div>
            )}

            {/* 3 Step Setup Guide */}
            <div className="space-y-2 mb-6">
              <p className="text-[11px] font-bold tracking-wider uppercase text-[var(--text-subtle)]">
                Instant 3-Step Setup
              </p>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-3 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border)]">
                  <span className="block font-bold text-[var(--primary)] text-sm mb-1">01</span>
                  <span className="text-[var(--text-main)] text-[11px] font-medium leading-tight block">Run Installer</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border)]">
                  <span className="block font-bold text-[var(--primary)] text-sm mb-1">02</span>
                  <span className="text-[var(--text-main)] text-[11px] font-medium leading-tight block">Connect Portals</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border)]">
                  <span className="block font-bold text-[var(--primary)] text-sm mb-1">03</span>
                  <span className="text-[var(--text-main)] text-[11px] font-medium leading-tight block">Launch Agent</span>
                </div>
              </div>
            </div>

            {/* Email Notification Capture */}
            <div className="pt-4 border-t border-[var(--border)]">
              <h5 className="text-xs font-bold text-[var(--text-main)] mb-1">
                Subscribe for regular updates &amp; new AI agent features
              </h5>
              <p className="text-[11px] text-[var(--text-muted)] mb-3">
                Get early release notes, weekly platform additions, and priority notification for {selectedOS === "windows" ? "new feature drops" : `${selectedOS === "macos" ? "macOS" : "Linux"} launch`}.
              </p>
              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs leading-relaxed space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                    <span>You&apos;re on the priority list! 🚀</span>
                  </div>
                  <p className="text-xs opacity-90 pl-6">
                    We&apos;ve registered your email for regular updates, feature releases, and upcoming platform announcements.
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
                        className="w-full pl-10 pr-3 py-2.5 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-xs text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--primary)] disabled:opacity-50"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 rounded-xl btn-primary text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 shrink-0"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={14} className="animate-spin text-white" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Get Updates</span>
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-1.5 text-rose-500 text-[11px] font-medium pt-1">
                      <AlertCircle size={13} />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Security note */}
            <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-[var(--text-subtle)]">
              <Shield size={13} className="text-emerald-500" />
              <span>Clean binary • Verified by Yubisaki Assistive Technology • 100% Virus-free</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
