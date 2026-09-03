"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "Is my job portal account safe from bans?",
    a: "Yes, 100%. AgentsKaro uses custom Stealth Chrome drivers with human-like browsing patterns, randomized mouse movements, realistic scroll trajectories, and variable delays between applications. It never spams API endpoints or triggers bot alerts.",
  },
  {
    q: "How does the AI Answer Engine answer custom employer questions?",
    a: "When an employer asks questions like 'Why should we hire you?', 'Notice period', or 'Tell us about your React experience', AgentsKaro analyzes the job description and your uploaded resume to craft coherent, ATS-aligned, and truthful answers on the spot.",
  },
  {
    q: "What are the Windows system requirements?",
    a: "AgentsKaro is a lightweight native desktop client built for Windows 10 and Windows 11 (64-bit). It requires just 4GB RAM, 500MB free disk space, and Google Chrome installed on your machine.",
  },
  {
    q: "How do I use the 10 Free Applications trial?",
    a: "Simply click 'Download for Windows (.exe)', run the application, connect your account (Internshala, Naukri, or Indeed), and click Launch Bot. The first 10 applications are completely on us—no credit card or prepayment required.",
  },
  {
    q: "Can I watch the bot apply in real time?",
    a: "Yes! You can toggle between 'Visible Browser Mode' (where Chrome opens visibly so you can watch every click and form submission) and 'Stealth Background Mode' (where it runs quietly minimized while you work on other tasks).",
  },
  {
    q: "Does this work for freshers as well as experienced professionals?",
    a: "Yes. Freshers can target internships, apprentice roles, and entry-level positions on Internshala and Naukri. Experienced engineers can configure specific tech stacks, minimum CTC expectations, and remote/hybrid filters on Naukri and Indeed.",
  },
  {
    q: "Where are my portal login credentials stored?",
    a: "Security and privacy are paramount. Your session cookies and credentials are encrypted on your local machine using AES-GCM and stored only on your computer. They are never uploaded to any remote server or shared with third parties.",
  },
  {
    q: "What happens after the trial ends?",
    a: "Once you hit 10 applications, you can upgrade to Monthly Pro (₹29/month) or Yearly Elite (₹399/year) via secure UPI/Cards to enjoy unlimited applications across all supported portals.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[var(--bg-surface)] border-t border-[var(--card-border)] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle size={13} />
            <span>Answers to Everything</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-base">
            Everything you need to know about safety, automation, and getting started.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-[var(--card-border)] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[var(--text-main)] tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-[var(--badge-bg)] flex items-center justify-center text-[var(--text-muted)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-400 bg-cyan-400/15" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed border-t border-[var(--card-border)] pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
