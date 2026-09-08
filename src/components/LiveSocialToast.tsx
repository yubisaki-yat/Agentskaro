"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Download, Zap, X } from "lucide-react";

const RECENT_ACTIVITIES = [
  {
    name: "Aryan S.",
    city: "Bengaluru",
    action: "Applied to 24 jobs on Naukri",
    time: "2 mins ago",
    type: "apply",
  },
  {
    name: "Priya M.",
    city: "Pune",
    action: "Applied to 18 internships on Internshala",
    time: "4 mins ago",
    type: "apply",
  },
  {
    name: "Vikram R.",
    city: "Hyderabad",
    action: "Unlocked AgentsKaro Yearly License (₹399)",
    time: "7 mins ago",
    type: "purchase",
  },
  {
    name: "Sneha K.",
    city: "Delhi NCR",
    action: "Received 3 interview callbacks via WhatsApp Bot",
    time: "11 mins ago",
    type: "apply",
  },
  {
    name: "Rohan D.",
    city: "Mumbai",
    action: "Downloaded AgentsKaro Desktop v2.0 (.exe)",
    time: "Just now",
    type: "download",
  },
];

export default function LiveSocialToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    // Show first toast after 3 seconds
    const initialTimer = setTimeout(() => {
      if (!closed) setVisible(true);
    }, 3000);

    // Cycle toasts every 9 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        if (!closed) {
          setIndex((prev) => (prev + 1) % RECENT_ACTIVITIES.length);
          setVisible(true);
        }
      }, 800);
    }, 9500);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [closed]);

  if (closed) return null;

  const current = RECENT_ACTIVITIES[index];

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-sm hidden sm:block pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto surface-card rounded-2xl p-3.5 shadow-xl border border-[var(--border)] flex items-center gap-3 backdrop-blur-md bg-[var(--bg-card)]/95"
          >
            {/* Live radar beacon */}
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--text-main)] truncate">
                <span>{current.name}</span>
                <span className="text-[10px] text-[var(--text-subtle)] font-normal">({current.city})</span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] truncate mt-0.5">
                {current.action}
              </p>
              <span className="text-[9px] text-[var(--text-subtle)] font-mono block mt-0.5">
                • {current.time}
              </span>
            </div>

            <button
              onClick={() => setClosed(true)}
              aria-label="Dismiss notification"
              className="p-1 rounded-md text-[var(--text-subtle)] hover:text-[var(--text-main)] transition-colors cursor-pointer shrink-0"
            >
              <X size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
