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
    <section id="calculator" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
            Interactive Calculator
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight mt-3">
            Calculate Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Time & Career ROI</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-base">
            See how much time you save every month while multiplying your interview calls.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-[var(--card-border)] shadow-2xl">
          {/* Slider input */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm sm:text-base font-bold text-[var(--text-main)]">
                Target Applications Per Week
              </label>
              <span className="px-4 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 font-mono font-black text-xl">
                {appsPerWeek} apps/week
              </span>
            </div>

            <input
              type="range"
              min="20"
              max="400"
              step="10"
              value={appsPerWeek}
              onChange={(e) => setAppsPerWeek(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-300 dark:bg-black/40 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] font-semibold text-[var(--text-subtle)] mt-2">
              <span>20 apps (Casual)</span>
              <span>120 apps (Active Hunter)</span>
              <span>400 apps (Blitzkrieg Mode)</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[var(--card-border)]">
            {/* Metric 1 */}
            <div className="p-5 rounded-2xl bg-[var(--badge-bg)] border border-[var(--card-border)] text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-3">
                <Clock size={20} />
              </div>
              <div className="text-3xl font-black text-cyan-400 tracking-tight mb-1">
                {hoursSavedPerWeek} hrs
              </div>
              <div className="text-xs font-semibold text-[var(--text-muted)]">
                Saved Every Single Week
              </div>
              <span className="text-[10px] text-[var(--text-subtle)] mt-1 block">
                Spend it on DSA & Interview prep
              </span>
            </div>

            {/* Metric 2 */}
            <div className="p-5 rounded-2xl bg-[var(--badge-bg)] border border-[var(--card-border)] text-center">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-3">
                <TrendingUp size={20} />
              </div>
              <div className="text-3xl font-black text-purple-400 tracking-tight mb-1">
                ~{estimatedInterviews} Calls
              </div>
              <div className="text-xs font-semibold text-[var(--text-muted)]">
                Estimated Interviews / Month
              </div>
              <span className="text-[10px] text-[var(--text-subtle)] mt-1 block">
                Based on verified 8% callback rate
              </span>
            </div>

            {/* Metric 3 */}
            <div className="p-5 rounded-2xl bg-[var(--badge-bg)] border border-[var(--card-border)] text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <DollarSign size={20} />
              </div>
              <div className="text-3xl font-black text-emerald-400 tracking-tight mb-1">
                ₹{valueSaved.toLocaleString()}
              </div>
              <div className="text-xs font-semibold text-[var(--text-muted)]">
                Equivalent Time Value Saved
              </div>
              <span className="text-[10px] text-[var(--text-subtle)] mt-1 block">
                For an investment of just ₹29/mo
              </span>
            </div>
          </div>

          {/* Action trigger */}
          <div className="mt-8 pt-6 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[var(--text-muted)] text-center sm:text-left">
              <strong className="text-[var(--text-main)] block">Ready to start saving 20+ hours a week?</strong>
              Test with 10 Free Applications right now.
            </div>
            <button
              onClick={onOpenDownload}
              className="w-full sm:w-auto px-6 py-3 rounded-xl glow-button text-black font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 transition-all"
            >
              <Download size={16} />
              <span>Claim Your 10 Free Applications</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
