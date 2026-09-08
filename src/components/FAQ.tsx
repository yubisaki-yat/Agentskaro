"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CATEGORIES = [
  {
    label: "Safety",
    faqs: [
      {
        q: "Is my job portal account safe from bans?",
        a: "Yes. AgentsKaro uses custom Stealth Chrome drivers with human-like browsing patterns, randomized mouse movements, realistic scroll trajectories, and variable delays between applications. It never spams API endpoints or triggers bot alerts.",
      },
      {
        q: "Where are my login credentials stored?",
        a: "Your session cookies and credentials are encrypted on your local machine using AES-GCM and stored only on your computer. They are never uploaded to any remote server or shared with third parties.",
      },
    ],
  },
  {
    label: "Features",
    faqs: [
      {
        q: "How does the AI Answer Engine work?",
        a: "When an employer asks custom questions like 'Why should we hire you?' or 'Tell us about your React experience', AgentsKaro analyzes the job description and your resume to craft coherent, ATS-aligned answers in real-time.",
      },
      {
        q: "Can I watch the AI Agent apply in real time?",
        a: "Yes! Toggle between 'Visible Browser Mode' — where Chrome opens so you can watch every click and form submission — and 'Stealth Background Mode' where it runs quietly minimized while you do other work.",
      },
      {
        q: "Does this work for freshers and experienced professionals?",
        a: "Yes. Freshers can target internships and entry-level positions on Internshala and Naukri. Experienced engineers can configure tech stack filters, minimum CTC expectations, and remote/hybrid preferences on Naukri and Indeed.",
      },
    ],
  },
  {
    label: "Getting Started",
    faqs: [
      {
        q: "What are the system requirements and supported operating systems?",
        a: "AgentsKaro currently runs natively on Windows 10 and Windows 11 (64-bit). macOS (Apple Silicon M1/M2/M3 & Intel) and Linux (.deb / AppImage) builds are in closed beta and releasing soon. Requires 4GB RAM minimum, 500MB disk space, and Google Chrome. No coding or developer setup needed.",
      },
      {
        q: "How do I use the 10 Free Applications trial?",
        a: "Click 'Download for Windows (.exe)', run the installer, connect your portal account, and click Launch Agent. The first 10 applications are completely free — no credit card or prepayment required.",
      },
    ],
  },
  {
    label: "Pricing",
    faqs: [
      {
        q: "What happens after the free trial ends?",
        a: "Once you hit 10 applications, you can upgrade to Monthly Pro (₹29/month) or Yearly Elite (₹399/year) via secure Razorpay payments (UPI, cards, netbanking) to enjoy unlimited applications across all supported portals.",
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const handleCategoryChange = (idx: number) => {
    setActiveCategory(idx);
    setOpenIdx(null);
  };

  const currentFaqs = CATEGORIES[activeCategory].faqs;

  return (
    <section id="faq" className="py-24 relative section-surface border-t border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="section-label">FAQ</span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-[var(--text-main)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Questions we get all the time
          </h2>
        </div>

        {/* Two-column layout: categories left, content right */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Category tabs — left column */}
          <div className="lg:w-48 shrink-0">
            <nav className="flex lg:flex-col gap-1" aria-label="FAQ categories">
              {CATEGORIES.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryChange(idx)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all cursor-pointer ${
                    activeCategory === idx
                      ? "bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
                      : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--badge-bg)]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </nav>
          </div>

          {/* FAQ accordion — right column */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {currentFaqs.map((faq, idx) => {
                  const isOpen = openIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="surface-card rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIdx(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${activeCategory}-${idx}`}
                        id={`faq-header-${activeCategory}-${idx}`}
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[var(--bg-card-hover)] transition-colors"
                      >
                        <span className="text-sm sm:text-base font-medium text-[var(--text-main)]">
                          {faq.q}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-lg bg-[var(--badge-bg)] flex items-center justify-center text-[var(--text-subtle)] shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[var(--primary)]" : ""
                          }`}
                        >
                          <ChevronDown size={16} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                            id={`faq-panel-${activeCategory}-${idx}`}
                            role="region"
                            aria-labelledby={`faq-header-${activeCategory}-${idx}`}
                          >
                            <div className="px-5 pb-5 text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border)] pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
