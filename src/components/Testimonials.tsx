"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rohan Mehta",
    handle: "@rohan_dev",
    role: "Fullstack Developer",
    company: "Placed in 14 Days · ₹12 LPA",
    avatar: "/avatar_rohan.jpg",
    rating: 5,
    text: "Applied to 450+ jobs in 2 weeks while I was busy with DSA prep. Got 6 interview calls and signed an offer. The AI answer engine is genuinely impressive — recruiters couldn't tell it wasn't hand-written.",
    date: "March 2025",
    platform: "Naukri + Indeed",
    featured: true,
  },
  {
    name: "Priya Sharma",
    handle: "@priya_frontend",
    role: "Frontend Engineer",
    company: "Placed @ Unicorn Startup",
    avatar: "/avatar_priya.jpg",
    rating: 5,
    text: "The AI Answer Engine answered 'Tell us about your React experience' better than I would have manually. Total game changer for anyone doing interviews.",
    date: "April 2025",
    platform: "Internshala",
    featured: false,
  },
  {
    name: "Aryan Verma",
    handle: "@aryan_cs24",
    role: "CS Graduate 2024",
    company: "3 Paid Internship Offers",
    avatar: "/avatar_aryan.jpg",
    rating: 5,
    text: "I used to spend 3 painful hours applying every evening. Now I open AgentsKaro in the morning, go to college, and come back to 25 verified applications on my tracker sheet.",
    date: "February 2025",
    platform: "Internshala",
    featured: true,
  },
  {
    name: "Sneha Patil",
    handle: "@sneha_backend",
    role: "Backend Engineer (Python)",
    company: "Remote US Startup · $1,800/mo",
    avatar: "/avatar_sneha.jpg",
    rating: 5,
    text: "Never got a single account warning. The stealth mode actually works. Worth 100x the ₹29 price. Recommended to my entire college group.",
    date: "May 2025",
    platform: "Indeed + Naukri",
    featured: false,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#f59e0b" aria-hidden="true">
          <path d="M6 1l1.4 2.8L10.5 4.3l-2.25 2.2.53 3.1L6 8l-2.78 1.6.53-3.1L1.5 4.3l3.1-.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const featured = TESTIMONIALS.filter((t) => t.featured);
  const compact = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <section className="py-24 relative section-surface border-t border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header — editorial, left-aligned */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label">What people say</span>
            <h2
              className="text-3xl sm:text-5xl font-bold text-[var(--text-main)] tracking-tight mt-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Real results from real job seekers
            </h2>
          </div>
          <div className="shrink-0 flex items-center gap-3 text-sm text-[var(--text-muted)]">
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-2">
                {TESTIMONIALS.map((t, i) => (
                  <img
                    key={i}
                    src={t.avatar}
                    alt={t.name}
                    className="w-7 h-7 rounded-full object-cover border-2 border-[var(--bg-surface)]"
                  />
                ))}
              </div>
              <span className="font-semibold text-[var(--text-main)]">482+</span>
            </div>
            <span>verified reviews</span>
          </div>
        </div>

        {/* Asymmetric layout: 2 featured large + 2 compact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {featured.map((t, idx) => (
            <div
              key={idx}
              className="surface-card rounded-2xl p-7 flex flex-col gap-5"
            >
              {/* Quote */}
              <div>
                <div className="text-5xl font-serif text-[var(--border)] leading-none mb-3 select-none" aria-hidden="true">
                  "
                </div>
                <p className="text-[var(--text-main)] text-base leading-relaxed font-medium">
                  {t.text}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[var(--border)] mt-auto">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[var(--border)]"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-[var(--text-main)]">{t.name}</span>
                      <CheckCircle size={13} className="text-[var(--primary)]" />
                    </div>
                    <span className="text-xs text-[var(--text-subtle)]">{t.role}</span>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating count={t.rating} />
                  <span className="text-[10px] text-[var(--text-subtle)] mt-1 block">{t.date} · {t.platform}</span>
                </div>
              </div>

              {/* Outcome badge */}
              <div className="inline-flex self-start items-center gap-1.5 text-xs font-medium text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {t.company}
              </div>
            </div>
          ))}
        </div>

        {/* Compact row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {compact.map((t, idx) => (
            <div
              key={idx}
              className="surface-card rounded-2xl p-6 flex flex-col gap-4"
            >
              <p className="text-sm text-[var(--text-muted)] leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover border border-[var(--border)]"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold text-[var(--text-main)]">{t.name}</span>
                      <CheckCircle size={12} className="text-[var(--primary)]" />
                    </div>
                    <span className="text-[11px] text-[var(--text-subtle)]">{t.role}</span>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating count={t.rating} />
                  <span className="text-[10px] text-emerald-500 font-medium block mt-0.5">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
