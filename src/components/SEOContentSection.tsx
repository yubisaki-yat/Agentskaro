"use client";

import React, { useState } from "react";
import { BookOpen, ChevronRight, ShieldCheck, Zap, Sparkles, CheckCircle2 } from "lucide-react";

export default function SEOContentSection() {
  const [activeTab, setActiveTab] = useState(0);

  const TOPICS = [
    {
      id: "ai-job-bots",
      title: "How AI Job Application Bots Work in 2025",
      badge: "Industry Guide",
      content: (
        <div className="space-y-4 text-sm text-[var(--text-muted)] leading-relaxed">
          <p>
            An <strong className="text-[var(--text-main)] font-semibold">AI Job Application Bot</strong> is an autonomous software agent designed to scan career portals (such as <em>Naukri.com</em>, <em>Internshala</em>, <em>Indeed</em>, and <em>LinkedIn</em>), extract job descriptions, evaluate ATS keyword compatibility against a candidate’s resume, and automatically complete screening questions and form submissions.
          </p>
          <p>
            Historically, job seekers spent an average of 10 to 15 minutes per application manually copying answers to repetitive questions like <em>"Why are you interested in this position?"</em> or calculating total relevant experience. With <strong className="text-[var(--text-main)] font-semibold">AgentsKaro Desktop v3.1.0</strong>, autonomous algorithms evaluate recruiter questions in milliseconds and compose truthful, customized responses aligned with the specific job description.
          </p>
          <div className="p-5 rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border)]">
            <h4 className="font-semibold text-sm text-[var(--text-main)] mb-2">Key Ranking Factors for Job Search Automation:</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span><strong className="text-[var(--text-main)] font-semibold">ATS Keyword Alignment:</strong> Matching resume skills with employer job descriptions before submitting.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span><strong className="text-[var(--text-main)] font-semibold">Submission Velocity:</strong> Applying within 5 to 15 minutes of a job being posted increases callback rates by up to 400%.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span><strong className="text-[var(--text-main)] font-semibold">Anti-Ban Stealth Emulation:</strong> Avoiding rate limits and bot detection via randomized human-like browsing patterns.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "whatsapp-automation",
      title: "Applying to Jobs via WhatsApp (1-Click Apply)",
      badge: "Mobile Workflow",
      content: (
        <div className="space-y-4 text-sm text-[var(--text-muted)] leading-relaxed">
          <p>
            The traditional limitation of desktop job automation was the requirement to remain in front of a computer. <strong className="text-[var(--text-main)] font-semibold">AgentsKaro WhatsApp Integration</strong> bridges this gap by turning WhatsApp into an interactive recruiter cockpit.
          </p>
          <p>
            When AgentsKaro's background engine identifies a 90%+ match on Naukri or Internshala, it dispatches an instant WhatsApp notification detailing the company name, position, salary/stipend range, and ATS match score.
          </p>
          <p>
            By replying <strong className="text-[var(--text-main)] font-semibold">"YES"</strong> directly in the chat, the local Windows client automatically submits the candidate's tailored resume and AI-generated screening responses. Replying <strong className="text-[var(--text-main)] font-semibold">"NO"</strong> instructs the bot to archive the listing and search for the next match.
          </p>
        </div>
      ),
    },
    {
      id: "naukri-internshala-safety",
      title: "Account Safety, Anti-Ban & Undetected Chrome Architecture",
      badge: "Security & Privacy",
      content: (
        <div className="space-y-4 text-sm text-[var(--text-muted)] leading-relaxed">
          <p>
            A common concern among job seekers is whether automated applying violates job board terms of service or risks account suspension. Generic browser extensions frequently fail because they fire rapid, inhuman HTTP requests directly against portal APIs.
          </p>
          <p>
            <strong className="text-[var(--text-main)] font-semibold">AgentsKaro</strong> operates completely differently: it utilizes a native Windows client paired with <strong className="text-[var(--text-main)] font-semibold">Undetected Chromium (UC-Mode)</strong> drivers. This ensures:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-[var(--text-main)] font-semibold">Natural Typing Cadence:</strong> Simulates human typing speeds with random micro-pauses between keystrokes.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-[var(--text-main)] font-semibold">Bézier Curve Mouse Paths:</strong> Cursor movements mimic organic human trajectories rather than direct coordinate jumps.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-[var(--text-main)] font-semibold">Variable Application Intervals:</strong> Randomized delays between job submissions prevent rate-limiting triggers.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-[var(--text-main)] font-semibold">Local Credential Encryption:</strong> Session cookies are stored exclusively on your local hard drive using AES-256 encryption.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "ats-optimization",
      title: "Beating the Applicant Tracking System (ATS)",
      badge: "Interview Conversion",
      content: (
        <div className="space-y-4 text-sm text-[var(--text-muted)] leading-relaxed">
          <p>
            Over <strong className="text-[var(--text-main)] font-semibold">75% of resumes</strong> submitted to online job postings are rejected by automated ATS filters before a human hiring manager ever reviews them. Rejections occur when candidate resumes lack exact keywords, relevant hard skills, or proper formatting.
          </p>
          <p>
            AgentsKaro includes a built-in <strong className="text-[var(--text-main)] font-semibold">ATS Compatibility Engine</strong> that compares your uploaded resume against the job description in real-time. Roles with low match scores are automatically bypassed to protect your application quota, while high-fit roles receive priority submission.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-24 relative section-surface border-t border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="section-label">Knowledge Base</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight">
            How job search automation actually works.
          </h2>
          <p className="mt-3 text-[var(--text-muted)] text-base">
            Everything you need to know about automated job bots, ATS algorithms, and landing more interviews in 2025.
          </p>
        </div>

        {/* Tabbed Guide Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Topic List (4 cols) */}
          <div className="lg:col-span-4 space-y-2" role="tablist" aria-label="Knowledge base topics">
            {TOPICS.map((topic, idx) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(idx)}
                role="tab"
                aria-selected={activeTab === idx}
                aria-controls={`seo-panel-${idx}`}
                id={`seo-tab-${idx}`}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                  activeTab === idx
                    ? "bg-[var(--bg-card)] border-[var(--primary)] text-[var(--text-main)] shadow-sm font-semibold"
                    : "bg-[var(--bg-subtle)] border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--text-main)]"
                }`}
              >
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider block mb-0.5 ${
                    activeTab === idx ? "text-[var(--primary)]" : "text-[var(--text-subtle)]"
                  }`}>
                    {topic.badge}
                  </span>
                  <span className="text-sm block">{topic.title}</span>
                </div>
                <ChevronRight
                  size={16}
                  className={`shrink-0 transition-transform ${
                    activeTab === idx ? "translate-x-1 text-[var(--primary)]" : "text-[var(--text-subtle)]"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Column: Detailed Topic Body (8 cols) */}
          <div
            className="lg:col-span-8 surface-card p-6 sm:p-8 rounded-2xl"
            role="tabpanel"
            aria-labelledby={`seo-tab-${activeTab}`}
            id={`seo-panel-${activeTab}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[var(--bg-subtle)] text-[var(--primary)] border border-[var(--border)]">
                {TOPICS[activeTab].badge}
              </span>
              <span className="text-xs text-[var(--text-subtle)]">• 3 min read</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
              {TOPICS[activeTab].title}
            </h3>

            {TOPICS[activeTab].content}
          </div>
        </div>

        {/* SEO Keywords Cloud Pill Footer */}
        <div className="mt-14 pt-8 border-t border-[var(--border)]">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-subtle)] block mb-3">
            Indexed Topics & Integrations
          </span>
          <div className="flex flex-wrap gap-2 text-xs text-[var(--text-muted)]">
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">Naukri Auto Apply Bot</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">Internshala Auto Apply Bot</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">Indeed Job Bot Windows</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">LinkedIn Easy Apply Bot</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">WhatsApp Job Application Bot</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">ATS Resume Compatibility Checker</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">AI Subjective Question Answerer</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">Excel Report Tracker (.xlsx)</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">Free Job Applying Tool India</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)]">Yubisaki Assistive Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
}
