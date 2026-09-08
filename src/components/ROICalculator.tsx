"use client";

import React, { useState } from "react";
import { Clock, TrendingUp, DollarSign, Download, Sparkles, Zap } from "lucide-react";

interface ROICalculatorProps {
  onOpenDownload: () => void;
}

export default function ROICalculator({ onOpenDownload }: ROICalculatorProps) {
  const [appsPerWeek, setAppsPerWeek] = useState(120);

  // Math models:
  // Manual apply takes ~10 mins per application (search, tailoring, screening questions, form filling)
  const hoursSavedPerWeek = Math.round((appsPerWeek * 10) / 60);
  // Average response rate with high volume & ATS filtering is ~7-10%
  const estimatedInterviews = Math.max(2, Math.round(appsPerWeek * 0.08));
  // Time value calculated at modest ₹400/hr freelance rate
  const valueSaved = hoursSavedPerWeek * 400 * 4;

  return (
    <section id="calculator" className="py-24 relative overflow-hidden section-surface border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-12">
          <span className="section-label">ROI Calculator</span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-[var(--text-main)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            See how much time you get back.
          </h2>
          <p className="mt-3 text-[var(--text-muted)] text-base">
            Drag the slider to see how many hours AgentsKaro saves you — and how many more interview calls you'd get.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="surface-card rounded-2xl p-6 sm:p-10">
          {/* Slider */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-semibold text-[var(--text-main)]">
                Target Applications Per Week
              </label>
              <span className="px-3 py-1 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] font-mono font-bold text-lg">
                {appsPerWeek}/wk
              </span>
            </div>

            <input
              type="range"
              min="20"
              max="400"
              step="10"
              value={appsPerWeek}
              onChange={(e) => setAppsPerWeek(Number(e.target.value))}
              aria-label="Target applications per week"
              aria-valuenow={appsPerWeek}
              aria-valuemin={20}
              aria-valuemax={400}
              className="w-full h-2.5 bg-slate-300 dark:bg-black/40 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] font-semibold text-[var(--text-subtle)] mt-2">
              <span>20 apps (Casual)</span>
              <span>120 apps (Active Hunter)</span>
              <span>400 apps (Blitzkrieg Mode)</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[var(--border)]">
            <div className="p-5 rounded-xl bg-[var(--badge-bg)] border border-[var(--border)] text-center">
              <div className="w-9 h-9 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mx-auto mb-3">
                <Clock size={18} />
              </div>
              <div className="text-3xl font-bold text-[var(--primary)] tracking-tight mb-1" style={{ fontFamily: "var(--font-display)" }}>
                {hoursSavedPerWeek} hrs
              </div>
              <div className="text-xs font-medium text-[var(--text-muted)]">Saved every week</div>
              <span className="text-[10px] text-[var(--text-subtle)] mt-1 block">Spend it on prep &amp; upskilling</span>
            </div>

            <div className="p-5 rounded-xl bg-[var(--badge-bg)] border border-[var(--border)] text-center">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-3">
                <TrendingUp size={18} />
              </div>
              <div className="text-3xl font-bold text-purple-400 tracking-tight mb-1" style={{ fontFamily: "var(--font-display)" }}>
                ~{estimatedInterviews}
              </div>
              <div className="text-xs font-medium text-[var(--text-muted)]">Interview calls / month</div>
              <span className="text-[10px] text-[var(--text-subtle)] mt-1 block">Based on verified 8% callback rate</span>
            </div>

            <div className="p-5 rounded-xl bg-[var(--badge-bg)] border border-[var(--border)] text-center">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <DollarSign size={18} />
              </div>
              <div className="text-3xl font-bold text-emerald-400 tracking-tight mb-1" style={{ fontFamily: "var(--font-display)" }}>
                ₹{valueSaved.toLocaleString()}
              </div>
              <div className="text-xs font-medium text-[var(--text-muted)]">Time value saved / month</div>
              <span className="text-[10px] text-[var(--text-subtle)] mt-1 block">For just ₹29/month</span>
            </div>
          </div>

          {/* Action */}
          <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[var(--text-muted)]">
              <strong className="text-[var(--text-main)] font-semibold block">Ready to save 20+ hours a week?</strong>
              Start with 10 free applications — no credit card.
            </div>
            <button
              onClick={onOpenDownload}
              className="btn-primary shrink-0 px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <Download size={15} />
              Claim Your 10 Free Applications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
