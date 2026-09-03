"use client";

import React from "react";
import { Star, CheckCircle } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rohan Mehta",
    role: "Fullstack Developer @ FinTech Startup",
    company: "Placed in 14 Days",
    avatar: "RM",
    rating: 5,
    text: "Applied to 450+ jobs in 2 weeks while preparing for DSA interviews. Landed 6 interview calls and signed an offer at ₹12 LPA. Best productivity tool hands down.",
    badge: "Naukri + Indeed Bot User",
  },
  {
    name: "Priya Sharma",
    role: "Frontend Engineer",
    company: "Placed @ Unicorn",
    avatar: "PS",
    rating: 5,
    text: "The AI Answer Engine is pure genius. It answered custom recruiter questions like 'Tell us about your React experience' better than my manual answers. Total game changer.",
    badge: "Internshala Bot User",
  },
  {
    name: "Aryan Verma",
    role: "2024 Computer Science Graduate",
    company: "3 Paid Internship Offers",
    avatar: "AV",
    rating: 5,
    text: "I used to spend 3 painful hours every evening applying one-by-one. Now I launch AgentsKaro, go to college, and come back to 25 verified applications on my Excel tracker.",
    badge: "Yearly Elite Member",
  },
  {
    name: "Sneha Patil",
    role: "Backend Engineer (Python / FastAPI)",
    company: "Remote US Startup ($1,800/mo)",
    avatar: "SP",
    rating: 5,
    text: "Never got account warnings or captchas because of the stealth human delays. Worth 100x the ₹29 monthly cost. Highly recommended to every serious job hunter!",
    badge: "Verified Candidate",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--bg-surface-elevated)] border-t border-[var(--card-border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
            Real Candidate Results
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight mt-3">
            Loved by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Job Seekers Across India</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-base sm:text-lg">
            From freshers landing their first internships to senior engineers switching careers.
          </p>
        </div>

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-3xl border border-[var(--card-border)] flex flex-col justify-between glass-card-hover shadow-sm"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6 italic font-medium">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[var(--card-border)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-black text-xs text-black shrink-0 shadow-md">
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-[var(--text-main)] truncate">
                      {t.name}
                    </span>
                    <CheckCircle size={12} className="text-cyan-400 shrink-0" />
                  </div>
                  <span className="text-[10px] text-[var(--text-subtle)] truncate block">
                    {t.role}
                  </span>
                  <span className="text-[9px] font-bold text-emerald-500 truncate block mt-0.5">
                    {t.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
