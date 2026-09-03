"use client";

import React, { useState } from "react";
import { BookOpen, ChevronRight, Cpu, Search, ShieldCheck, Sparkles, Terminal } from "lucide-react";

export default function SEOContentSection() {
  const [activeTab, setActiveTab] = useState(0);

  const TOPICS = [
    {
      id: "ai-job-bots",
      title: "How AI Job Application Bots Work in 2025",
      badge: "Industry Guide",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          <p>
            An <strong>AI Job Application Bot</strong> is an autonomous software agent designed to scan career portals (such as <em>Naukri.com</em>, <em>Internshala</em>, <em>Indeed</em>, and <em>LinkedIn</em>), extract job descriptions, evaluate ATS keyword compatibility against a candidate’s resume, and automatically complete screening questions and form submissions.
          </p>
          <p>
            Historically, job seekers spent an average of <strong>10 to 15 minutes per application</strong> manually copying answers to repetitive questions like <em>"Why are you interested in this position?"</em> or calculating total relevant experience. With <strong>AgentsKaro Desktop v2.0</strong>, autonomous algorithms evaluate recruiter questions in milliseconds and compose truthful, customized responses aligned with the specific job description.
          </p>
          <div className="p-4 rounded-2xl bg-[var(--badge-bg)] border border-[var(--card-border)]">
            <h4 className="font-bold text-[var(--text-main)] mb-1">Key Ranking Factors for Job Search Automation:</h4>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li><strong>ATS Keyword Alignment:</strong> Matching resume skills with employer job descriptions before submitting.</li>
              <li><strong>Submission Velocity:</strong> Applying within 5 to 15 minutes of a job being posted increases callback rates by up to 400%.</li>
              <li><strong>Anti-Ban Stealth Emulation:</strong> Avoiding rate limits and bot detection via randomized human-like browsing patterns.</li>
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
        <div className="space-y-4 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          <p>
            The traditional limitation of desktop job automation was the requirement to remain in front of a computer. <strong>AgentsKaro WhatsApp Integration</strong> bridges this gap by turning WhatsApp into an interactive recruiter cockpit.
          </p>
          <p>
            When AgentsKaro's background engine identifies a 90%+ match on Naukri or Internshala, it dispatches an instant WhatsApp notification detailing the company name, position, salary/stipend range, and ATS match score.
          </p>
          <p>
            By replying <strong>"YES"</strong> directly in the chat, the local Windows client automatically submits the candidate's tailored resume and AI-generated screening responses. Replying <strong>"NO"</strong> instructs the bot to archive the listing and search for the next match.
          </p>
        </div>
      ),
    },
    {
      id: "naukri-internshala-safety",
      title: "Account Safety, Anti-Ban & Undetected Chrome Architecture",
      badge: "Security & Privacy",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          <p>
            A common concern among job seekers is whether automated applying violates job board terms of service or risks account suspension. Generic browser extensions frequently fail because they fire rapid, inhuman HTTP requests directly against portal APIs.
          </p>
          <p>
            <strong>AgentsKaro</strong> operates completely differently: it utilizes a native Windows client paired with <strong>Undetected Chromium (UC-Mode)</strong> drivers. This ensures:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Natural Typing Cadence:</strong> Simulates human typing speeds with random micro-pauses between keystrokes.</li>
            <li><strong>Bézier Curve Mouse Paths:</strong> Cursor movements mimic organic human trajectories rather than direct coordinate jumps.</li>
            <li><strong>Variable Application Intervals:</strong> Randomized delays between job submissions prevent rate-limiting triggers.</li>
            <li><strong>Local Credential Encryption:</strong> Session cookies are stored exclusively on the user's hard drive using AES-256 encryption.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "ats-optimization",
      title: "Beating the Applicant Tracking System (ATS)",
      badge: "Interview Conversion",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          <p>
            Over <strong>75% of resumes</strong> submitted to online job postings are rejected by automated ATS filters before a human hiring manager ever reviews them. Rejections occur when candidate resumes lack exact keywords, relevant hard skills, or proper formatting.
          </p>
          <p>
            AgentsKaro includes a built-in <strong>ATS Compatibility Engine</strong> that compares your uploaded resume against the job description in real-time. Roles with low match scores are automatically bypassed to protect your application quota, while high-fit roles receive priority submission.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 relative bg-[var(--bg-surface)] border-t border-[var(--card-border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen size={13} />
            <span>Job Search Automation Knowledge Base</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[var(--text-main)] tracking-tight">
            The Ultimate Guide to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Job Search Automation</span>
          </h2>
          <p className="mt-3 text-[var(--text-muted)] text-sm sm:text-base">
            Everything you need to know about automated job bots, ATS algorithms, and landing more interviews in 2025.
          </p>
        </div>

        {/* Tabbed Guide Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Topic List (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {TOPICS.map((topic, idx) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  activeTab === idx
                    ? "bg-[var(--badge-bg)] border-cyan-400/50 shadow-md text-[var(--text-main)]"
                    : "border-[var(--card-border)] text-[var(--text-muted)] hover:border-cyan-400/30"
                }`}
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 block mb-0.5">
                    {topic.badge}
                  </span>
                  <span className="text-xs sm:text-sm font-bold block">{topic.title}</span>
                </div>
                <ChevronRight
                  size={16}
                  className={`shrink-0 transition-transform ${
                    activeTab === idx ? "translate-x-1 text-cyan-400" : "text-[var(--text-subtle)]"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Column: Detailed Topic Body (8 cols) */}
          <div className="lg:col-span-8 glass-card p-6 sm:p-8 rounded-3xl border border-[var(--card-border)] shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-400/15 text-cyan-400 border border-cyan-400/30">
                {TOPICS[activeTab].badge}
              </span>
              <span className="text-xs text-[var(--text-subtle)] font-mono">• 3 min read</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[var(--text-main)] mb-6 tracking-tight">
              {TOPICS[activeTab].title}
            </h3>

            {TOPICS[activeTab].content}
          </div>
        </div>

        {/* SEO Keywords Cloud Pill Footer */}
        <div className="mt-16 pt-8 border-t border-[var(--card-border)]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-subtle)] block mb-3">
            Indexed Topics & Integrations:
          </span>
          <div className="flex flex-wrap gap-2 text-[11px] text-[var(--text-muted)]">
            <span className="px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--card-border)]">Naukri Auto Apply Bot</span>
            <span className="px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--card-border)]">Internshala Auto Apply Bot</span>
            <span className="px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--card-border)]">Indeed Job Bot Windows</span>
            <span className="px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--card-border)]">LinkedIn Easy Apply Bot</span>
            <span className="px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--card-border)]">WhatsApp Job Application Bot</span>
            <span className="px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--card-border)]">ATS Resume Compatibility Checker</span>
            <span className="px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--card-border)]">AI Subjective Question Answerer</span>
            <span className="px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--card-border)]">Excel Report Tracker .xlsx</span>
            <span className="px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--card-border)]">Free Job Applying Tool India</span>
            <span className="px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] border border-[var(--card-border)]">Yubisaki Assistive Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
}
