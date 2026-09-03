"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Terminal, CheckCircle2, Shield, Activity, Sparkles, RefreshCw, Cpu, Layers } from "lucide-react";

const PLATFORMS = [
  { id: "internshala", name: "Internshala Bot", badge: "Internships & Jobs", count: 18 },
  { id: "naukri", name: "Naukri Scraper", badge: "Fast Apply", count: 24 },
  { id: "indeed", name: "Indeed Bot", badge: "Global Roles", count: 12 },
];

const INITIAL_LOGS = [
  { time: "10:14:02", tag: "CONNECT", text: "Chrome driver initialized in Stealth Mode (Anti-Bot Bypass: Active)", color: "text-cyan-400" },
  { time: "10:14:08", tag: "AUTH", text: "Session cookies validated. Logged in successfully.", color: "text-emerald-400" },
  { time: "10:14:15", tag: "SEARCH", text: "Discovered 42 matching roles for 'Fullstack / React / Python'", color: "text-blue-400" },
  { time: "10:14:22", tag: "AI MATCH", text: "JD score: 96.4% match with user resume keywords.", color: "text-purple-400" },
  { time: "10:14:29", tag: "AUTO-FILL", text: "Answered: 'Why are you a good fit?' via AI Answer Engine.", color: "text-amber-400" },
  { time: "10:14:35", tag: "APPLIED", text: "Application submitted to Razorpay [Fullstack Developer]. Excel updated.", color: "text-emerald-400" },
];

export default function LiveSoftwareMockup() {
  const [activePlatform, setActivePlatform] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [appliedCount, setAppliedCount] = useState(54);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];
      const jobTitles = ["Senior Frontend Engineer", "AI Product Intern", "Python Backend Dev", "Fullstack Specialist"];
      const companies = ["Swiggy", "Cred", "Zomato", "PhonePe", "Groww"];
      const randJob = jobTitles[Math.floor(Math.random() * jobTitles.length)];
      const randComp = companies[Math.floor(Math.random() * companies.length)];

      const newLog = {
        time: timeStr,
        tag: "APPLIED",
        text: `Submitted application to ${randComp} [${randJob}] • Response saved`,
        color: "text-emerald-400",
      };

      setLogs((prev) => [...prev.slice(-6), newLog]);
      setAppliedCount((c) => c + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="w-full max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden border border-[var(--card-border)] shadow-2xl relative">
      {/* Top Window Bar */}
      <div className="bg-[#0b1120] px-4 sm:px-6 py-3 border-b border-white/[0.08] flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <img src="/logo.png" alt="App Icon" className="w-4 h-4 rounded ml-2 object-cover" />
          <span className="ml-1.5 text-xs font-mono font-medium text-gray-400 hidden sm:inline">
            AgentsKaro Desktop Simulator • Windows 10/11
          </span>
        </div>

        {/* Live Indicator */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-semibold transition-all cursor-pointer"
          >
            {isRunning ? (
              <>
                <Pause size={13} className="text-amber-400" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play size={13} className="text-emerald-400" />
                <span>Resume</span>
              </>
            )}
          </button>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
              {isRunning ? "Engine Active" : "Standby"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Software Dashboard Area */}
      <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gradient-to-b from-[#090e1a] to-[#04060c] text-white">
        {/* Left Side: Stats & Platform Selection (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Platform Switcher */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">
              Select Automated Platform
            </span>
            <div className="grid grid-cols-3 gap-2">
              {PLATFORMS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePlatform(idx)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    activePlatform === idx
                      ? "bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/15"
                      : "bg-white/[0.03] border-white/10 text-gray-300 hover:bg-white/[0.08]"
                  }`}
                >
                  <span className="block text-xs font-bold truncate">{p.name.split(" ")[0]}</span>
                  <span className="text-[9px] text-gray-400 truncate block">{p.badge}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Total Applied
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-cyan-400">{appliedCount}</span>
                <span className="text-xs text-emerald-400 font-semibold">+14/hr</span>
              </div>
              <span className="text-[10px] text-gray-400 mt-1 block">Live autonomous sync</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                AI Match Score
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-purple-400">96.8%</span>
                <span className="text-xs text-purple-300 font-semibold">ATS Fit</span>
              </div>
              <span className="text-[10px] text-gray-400 mt-1 block">Keyword aligned</span>
            </div>
          </div>

          {/* Stealth Mode Indicator */}
          <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                <Shield size={16} />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Stealth Human Emulation</span>
                <span className="text-[10px] text-gray-300">Randomized mouse paths & click delays</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-cyan-400/20 text-cyan-300">
              Active
            </span>
          </div>
        </div>

        {/* Right Side: Live Terminal Console (7 cols) */}
        <div className="lg:col-span-7 flex flex-col h-full min-h-[300px] rounded-2xl bg-black/85 border border-white/15 overflow-hidden shadow-inner">
          {/* Terminal Title */}
          <div className="px-4 py-2.5 bg-white/[0.05] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
              <Terminal size={14} className="text-cyan-400" />
              <span>live_engine_stream.log</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[10px] font-mono text-cyan-400">Streaming</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 font-mono text-xs space-y-3 flex-1 overflow-y-auto terminal-scroll text-gray-200">
            {logs.map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-2.5 leading-relaxed"
              >
                <span className="text-gray-400 shrink-0 select-none">[{log.time}]</span>
                <span className={`font-bold shrink-0 text-[10px] uppercase px-1.5 py-0.2 rounded bg-white/10 ${log.color}`}>
                  {log.tag}
                </span>
                <span className="text-gray-200 break-words">{log.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Terminal Command Input Footer */}
          <div className="px-4 py-2.5 bg-white/[0.03] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">❯</span>
              <span className="text-gray-300">Running auto_apply_loop() • Excel export enabled</span>
            </div>
            <span className="text-cyan-400 font-bold">100% Autonomous</span>
          </div>
        </div>
      </div>
    </div>
  );
}
