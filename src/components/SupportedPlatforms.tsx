"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Globe, ArrowRight, ShieldCheck, Sparkles, ExternalLink, Building2 } from "lucide-react";

interface SupportedPlatformsProps {
  onOpenDownload: () => void;
}

const CATEGORIES = [
  { id: "all", label: "All Platforms (200+)" },
  { id: "active", label: "Active Live (3)" },
  { id: "direct-ats", label: "Direct Company ATS" },
  { id: "india", label: "Indian Job Boards" },
  { id: "remote", label: "Remote & Tech" },
  { id: "global", label: "Global Portals" },
];

const PLATFORMS_LIST = [
  // Active Live
  { name: "Internshala", category: "active", type: "Internships & Fresher Jobs", status: "Live & Active", accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20", live: true },
  { name: "Naukri.com", category: "active", type: "India's #1 Job Portal", status: "Live & Active", accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20", live: true },
  { name: "Indeed", category: "active", type: "Global Job Search Engine", status: "Live & Active", accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20", live: true },

  // Direct ATS Crawlers (Flagship Upcoming)
  { name: "Workday ATS", category: "direct-ats", type: "Fortune 500 Enterprise ATS", status: "Crawler Beta", accent: "text-sky-500 bg-sky-500/10 border-sky-500/20", live: false },
  { name: "Greenhouse", category: "direct-ats", type: "Top Tech ATS Crawler", status: "Crawler Beta", accent: "text-sky-500 bg-sky-500/10 border-sky-500/20", live: false },
  { name: "Lever", category: "direct-ats", type: "High-Growth Tech ATS", status: "Crawler Beta", accent: "text-sky-500 bg-sky-500/10 border-sky-500/20", live: false },
  { name: "Ashby", category: "direct-ats", type: "Next-Gen AI & SaaS ATS", status: "Crawler Beta", accent: "text-sky-500 bg-sky-500/10 border-sky-500/20", live: false },
  { name: "Taleo (Oracle)", category: "direct-ats", type: "MNC Corporate Portals", status: "Crawler In Dev", accent: "text-sky-500 bg-sky-500/10 border-sky-500/20", live: false },
  { name: "SmartRecruiters", category: "direct-ats", type: "Enterprise Hiring Portal", status: "Crawler In Dev", accent: "text-sky-500 bg-sky-500/10 border-sky-500/20", live: false },

  // Indian Job Boards
  { name: "Hirist", category: "india", type: "Premium Tech Jobs India", status: "Coming Soon", accent: "text-purple-400 bg-purple-400/10 border-purple-400/20", live: false },
  { name: "Instahyre", category: "india", type: "Curated Tech Roles", status: "Coming Soon", accent: "text-purple-400 bg-purple-400/10 border-purple-400/20", live: false },
  { name: "Foundit (Monster)", category: "india", type: "Pan-India Corporate Jobs", status: "Coming Soon", accent: "text-purple-400 bg-purple-400/10 border-purple-400/20", live: false },
  { name: "Cutshort", category: "india", type: "Fast-Track Startups", status: "Coming Soon", accent: "text-purple-400 bg-purple-400/10 border-purple-400/20", live: false },
  { name: "Unstop", category: "india", type: "Early Careers & Challenges", status: "Coming Soon", accent: "text-purple-400 bg-purple-400/10 border-purple-400/20", live: false },
  { name: "Apna", category: "india", type: "Regional & Mid-Level Jobs", status: "Coming Soon", accent: "text-purple-400 bg-purple-400/10 border-purple-400/20", live: false },

  // Remote & Tech
  { name: "Wellfound (AngelList)", category: "remote", type: "Global Startup Ecosystem", status: "Coming Soon", accent: "text-amber-400 bg-amber-400/10 border-amber-400/20", live: false },
  { name: "RemoteOK", category: "remote", type: "Worldwide Remote Roles", status: "Coming Soon", accent: "text-amber-400 bg-amber-400/10 border-amber-400/20", live: false },
  { name: "WeWorkRemotely", category: "remote", type: "100% Remote Positions", status: "Coming Soon", accent: "text-amber-400 bg-amber-400/10 border-amber-400/20", live: false },
  { name: "Turing", category: "remote", type: "US Remote Software Eng", status: "Coming Soon", accent: "text-amber-400 bg-amber-400/10 border-amber-400/20", live: false },
  { name: "Himalayas", category: "remote", type: "Modern Remote Job Board", status: "Coming Soon", accent: "text-amber-400 bg-amber-400/10 border-amber-400/20", live: false },

  // Global Portals
  { name: "LinkedIn Jobs", category: "global", type: "Global Professional Network", status: "In Active Dev", accent: "text-sky-400 bg-sky-400/10 border-sky-400/20", live: false },
  { name: "Glassdoor", category: "global", type: "Reviews & Career Openings", status: "Coming Soon", accent: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20", live: false },
  { name: "ZipRecruiter", category: "global", type: "US & UK Hiring Marketplace", status: "Coming Soon", accent: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20", live: false },
  { name: "Deel", category: "global", type: "Global Payroll & Roles", status: "Coming Soon", accent: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20", live: false },
];

export default function SupportedPlatforms({ onOpenDownload }: SupportedPlatformsProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPlatforms = selectedCategory === "all"
    ? PLATFORMS_LIST
    : PLATFORMS_LIST.filter((p) => p.category === selectedCategory || (selectedCategory === "active" && p.live));

  return (
    <section id="platforms" className="py-20 sm:py-24 relative overflow-hidden section-surface border-t border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="section-label">Supported platforms</span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-[var(--text-main)] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            One desktop engine.
            <br />
            <span className="text-[var(--text-muted)] font-medium">Every company on earth.</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-base">
            Stop switching between browser tabs. AgentsKaro connects to 3 active portals now and is continuously integrating <strong className="text-[var(--text-main)] font-semibold">200+ company career ATS systems</strong>.
          </p>
        </div>

        {/* Flagship Crawler Feature Card */}
        <div className="mb-14 rounded-2xl p-6 sm:p-8 bg-[#0b1120] border border-white/[0.1] shadow-2xl text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] text-[10px] font-bold uppercase tracking-wider border border-[var(--primary)]/30">
                  Flagship Crawler
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400/15 text-amber-300 text-[10px] font-medium tracking-wider border border-amber-400/20">
                  Coming Soon
                </span>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Direct Company Career Pages Crawler
              </h3>
              <p className="text-sm text-gray-400 max-w-2xl mt-2 leading-relaxed">
                Applies directly into official career portals (Google, Microsoft, Swiggy, TCS, etc.) running on <strong className="text-gray-200">Workday, Greenhouse, Lever, Ashby &amp; Taleo</strong> — completely skipping crowded 3rd-party job boards.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-center">
                <span className="block text-xl font-bold text-[var(--primary)]" style={{ fontFamily: "var(--font-display)" }}>0</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wide">Middlemen</span>
              </div>
              <div className="px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-center">
                <span className="block text-xl font-bold text-emerald-400" style={{ fontFamily: "var(--font-display)" }}>5x</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wide">Callbacks</span>
              </div>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-4 gap-3 pt-6 text-xs">
            {[
              { step: "01", title: "ATS Role Discovery", desc: "Scans official career pages 24/7" },
              { step: "02", title: "Resume Keyword Match", desc: "95%+ ATS fit before submitting" },
              { step: "03", title: "AI Form Auto-Fill", desc: "Solves multi-page screening forms" },
              { step: "04", title: "Direct HR Submission", desc: "Lands straight in recruiter inbox" },
            ].map((s) => (
              <div key={s.step} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-[var(--primary)] font-semibold block mb-1">STEP {s.step}</span>
                <span className="font-semibold text-white block mb-0.5">{s.title}</span>
                <span className="text-[11px] text-gray-400">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              aria-pressed={selectedCategory === cat.id}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-[var(--primary)] text-white shadow-sm"
                  : "bg-[var(--bg-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Platform Directory Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-14">
          {filteredPlatforms.map((platform, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: idx * 0.02 }}
              className={`p-3.5 sm:p-4 rounded-xl surface-card flex items-center justify-between gap-3 ${
                platform.live
                  ? "ring-1 ring-emerald-500/30 border-emerald-500/30"
                  : ""
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

              <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider border shrink-0 flex items-center gap-1.5 ${platform.accent}`}>
                {platform.live && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                )}
                {platform.live ? "LIVE" : "SOON"}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Clean Callout Guarantee */}
        <div className="text-center p-6 sm:p-8 rounded-2xl surface-card max-w-2xl mx-auto">
          <span className="text-sm sm:text-base font-bold text-[var(--text-main)] block mb-1.5">
            200+ Platforms &amp; Direct Crawlers Being Added in Weekly Updates
          </span>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-5 max-w-xl mx-auto leading-relaxed">
            Download the desktop client today with 10 Free Applications. All future portal additions are automatically included with zero upgrade fee.
          </p>
          <button
            onClick={onOpenDownload}
            className="btn-primary px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer shadow-md active:scale-95 transition-all"
          >
            <span>Claim 10 Free Applications (.exe)</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
