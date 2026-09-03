"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Building2, Cpu, Zap, Layers, Server, Search, ExternalLink } from "lucide-react";

interface SupportedPlatformsProps {
  onOpenDownload: () => void;
}

const CATEGORIES = [
  { id: "all", label: "All Platforms (200+)" },
  { id: "active", label: "🟢 Active Now (v2.0)" },
  { id: "enterprise", label: "Tech MNCs & IT" },
  { id: "unicorns", label: "High-Growth Startups" },
  { id: "global", label: "Global Remote ($ USD)" },
];

const PLATFORMS_LIST = [
  // Active
  { name: "Internshala", category: "active", type: "Portal", status: "Active in v2.0", accent: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30", live: true },
  { name: "Naukri.com", category: "active", type: "Portal", status: "Active in v2.0", accent: "text-blue-400 bg-blue-400/10 border-blue-400/30", live: true },
  { name: "Indeed", category: "active", type: "Portal", status: "Active in v2.0", accent: "text-indigo-400 bg-indigo-400/10 border-indigo-400/30", live: true },

  // Enterprise MNCs
  { name: "Google Careers", category: "enterprise", type: "Workday / Direct", status: "Coming Soon", accent: "text-rose-400 bg-rose-400/10 border-rose-400/20", live: false },
  { name: "Microsoft Careers", category: "enterprise", type: "Direct ATS", status: "Coming Soon", accent: "text-blue-400 bg-blue-400/10 border-blue-400/20", live: false },
  { name: "Amazon.jobs", category: "enterprise", type: "Internal ATS", status: "Coming Soon", accent: "text-amber-400 bg-amber-400/10 border-amber-400/20", live: false },
  { name: "TCS iBegin", category: "enterprise", type: "TCS NextStep", status: "Coming Soon", accent: "text-cyan-300 bg-cyan-400/10 border-cyan-400/20", live: false },
  { name: "Infosys Career", category: "enterprise", type: "Direct Portal", status: "Coming Soon", accent: "text-blue-300 bg-blue-400/10 border-blue-400/20", live: false },
  { name: "Wipro Careers", category: "enterprise", type: "Direct ATS", status: "Coming Soon", accent: "text-purple-300 bg-purple-400/10 border-purple-400/20", live: false },
  { name: "Uber Careers", category: "enterprise", type: "Workday ATS", status: "Coming Soon", accent: "text-slate-300 bg-slate-400/10 border-slate-400/20", live: false },
  { name: "Oracle Cloud", category: "enterprise", type: "Taleo ATS", status: "Coming Soon", accent: "text-red-400 bg-red-400/10 border-red-400/20", live: false },

  // Unicorns & Tech Startups
  { name: "LinkedIn Easy Apply", category: "unicorns", type: "Global Network", status: "Coming Soon", accent: "text-blue-400 bg-blue-400/10 border-blue-400/30", live: false },
  { name: "Swiggy", category: "unicorns", type: "Greenhouse", status: "Coming Soon", accent: "text-orange-400 bg-orange-400/10 border-orange-400/20", live: false },
  { name: "Zomato", category: "unicorns", type: "Lever ATS", status: "Coming Soon", accent: "text-rose-400 bg-rose-400/10 border-rose-400/20", live: false },
  { name: "CRED", category: "unicorns", type: "Ashby HQ", status: "Coming Soon", accent: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20", live: false },
  { name: "Razorpay", category: "unicorns", type: "Greenhouse", status: "Coming Soon", accent: "text-blue-400 bg-blue-400/10 border-blue-400/20", live: false },
  { name: "Flipkart", category: "unicorns", type: "Workday", status: "Coming Soon", accent: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20", live: false },
  { name: "Groww", category: "unicorns", type: "Lever ATS", status: "Coming Soon", accent: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20", live: false },
  { name: "Zepto", category: "unicorns", type: "Ashby ATS", status: "Coming Soon", accent: "text-purple-400 bg-purple-400/10 border-purple-400/20", live: false },
  { name: "Meesho", category: "unicorns", type: "Workday", status: "Coming Soon", accent: "text-pink-400 bg-pink-400/10 border-pink-400/20", live: false },
  { name: "Hirist Tech", category: "unicorns", type: "High-CTC Bot", status: "Coming Soon", accent: "text-amber-400 bg-amber-400/10 border-amber-400/20", live: false },
  { name: "Cutshort", category: "unicorns", type: "AI Matching", status: "Coming Soon", accent: "text-teal-400 bg-teal-400/10 border-teal-400/20", live: false },
  { name: "Instahyre", category: "unicorns", type: "Talent Radar", status: "Coming Soon", accent: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20", live: false },

  // Global Remote
  { name: "Wellfound (AngelList)", category: "global", type: "US Startups", status: "Coming Soon", accent: "text-rose-400 bg-rose-400/10 border-rose-400/30", live: false },
  { name: "WeWorkRemotely", category: "global", type: "USD Remote", status: "Coming Soon", accent: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20", live: false },
  { name: "RemoteOK", category: "global", type: "Worldwide $", status: "Coming Soon", accent: "text-blue-400 bg-blue-400/10 border-blue-400/20", live: false },
  { name: "Automattic", category: "global", type: "100% Remote", status: "Coming Soon", accent: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20", live: false },
  { name: "GitLab", category: "global", type: "All-Remote", status: "Coming Soon", accent: "text-orange-400 bg-orange-400/10 border-orange-400/20", live: false },
  { name: "Deel", category: "global", type: "Global Payroll", status: "Coming Soon", accent: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20", live: false },
];

export default function SupportedPlatforms({ onOpenDownload }: SupportedPlatformsProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPlatforms = selectedCategory === "all"
    ? PLATFORMS_LIST
    : PLATFORMS_LIST.filter((p) => p.category === selectedCategory || (selectedCategory === "active" && p.live));

  return (
    <section id="platforms" className="py-20 sm:py-24 relative overflow-hidden bg-[var(--bg-surface)] border-t border-[var(--card-border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Globe size={14} />
            <span>200+ Career Portals Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight leading-tight">
            One Desktop Engine. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Every Company On Earth.
            </span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-base sm:text-lg">
            Stop switching between 10 browser tabs. AgentsKaro connects to active portals now and is continuously integrating <strong className="text-[var(--text-main)]">200+ company career ATS systems</strong>.
          </p>
        </div>

        {/* FEATURE HIGHLIGHT: Direct Career Pages Crawler Architecture Card */}
        <div className="mb-14 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0c1424] via-[#080d18] to-[#050810] border border-cyan-500/30 shadow-2xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-[10px] font-black uppercase tracking-wider border border-cyan-400/30">
                  FLAGSHIP CRAWLER
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400/15 text-amber-300 text-[10px] font-bold tracking-wider border border-amber-400/25">
                  🚀 COMING SOON
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Direct Company Career Pages Crawler
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mt-1 leading-relaxed">
                Applies directly into official career portals (Google, Microsoft, Swiggy, TCS, etc.) running on <strong>Workday, Greenhouse, Lever, Ashby & Taleo</strong> — completely skipping crowded 3rd-party job boards.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <span className="block text-lg font-black text-cyan-400">0</span>
                <span className="text-[10px] text-gray-400 uppercase font-bold">Middlemen</span>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <span className="block text-lg font-black text-emerald-400">5x</span>
                <span className="text-[10px] text-gray-400 uppercase font-bold">Callbacks</span>
              </div>
            </div>
          </div>

          {/* Workflow Pipeline Display */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-4 gap-3 pt-6 text-xs">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">STEP 01</span>
              <span className="font-bold text-white block mb-0.5">ATS Role Discovery</span>
              <span className="text-[11px] text-gray-400">Scans official career pages 24/7</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">STEP 02</span>
              <span className="font-bold text-white block mb-0.5">Resume Keyword Match</span>
              <span className="text-[11px] text-gray-400">95%+ ATS fit before submitting</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">STEP 03</span>
              <span className="font-bold text-white block mb-0.5">AI Form Auto-Fill</span>
              <span className="text-[11px] text-gray-400">Solves multi-page screening forms</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">STEP 04</span>
              <span className="font-bold text-white block mb-0.5">Direct HR Submission</span>
              <span className="text-[11px] text-gray-400">Lands straight in recruiter inbox</span>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-cyan-400 text-black shadow-md shadow-cyan-400/20"
                  : "bg-[var(--badge-bg)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--card-border)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Handcrafted Platform Directory Grid (Clean, Authentic Pill Badges) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-14">
          {filteredPlatforms.map((platform, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: idx * 0.02 }}
              className={`p-3.5 sm:p-4 rounded-2xl glass-card border transition-all flex items-center justify-between gap-3 ${
                platform.live
                  ? "border-emerald-500/40 bg-emerald-500/[0.03] shadow-md shadow-emerald-500/5 ring-1 ring-emerald-500/20"
                  : "border-[var(--card-border)] hover:border-cyan-400/30"
              }`}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-[var(--text-main)] truncate">
                    {platform.name}
                  </span>
                </div>
                <span className="text-[10px] text-[var(--text-subtle)] font-medium block truncate mt-0.5">
                  {platform.type}
                </span>
              </div>

              <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider border shrink-0 ${platform.accent}`}>
                {platform.live ? "LIVE" : "SOON"}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Clean Callout Guarantee */}
        <div className="text-center p-6 rounded-3xl glass-card border border-[var(--card-border)] max-w-2xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-[var(--text-main)] block mb-1">
            200+ Platforms & Direct Crawlers Being Added in Weekly Updates
          </span>
          <p className="text-xs text-[var(--text-muted)] mb-4">
            Download the desktop client today with 10 Free Applications. All future portal additions are automatically included with zero upgrade fee.
          </p>
          <button
            onClick={onOpenDownload}
            className="glow-button px-6 py-2.5 rounded-xl font-black text-xs text-black inline-flex items-center gap-2 cursor-pointer shadow-md active:scale-95 transition-all"
          >
            <span>Claim 10 Free Applications (.exe)</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
