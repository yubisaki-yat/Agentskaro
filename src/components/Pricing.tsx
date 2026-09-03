"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";

interface PricingProps {
  onOpenDownload: () => void;
}

const PLANS = [
  {
    name: "Monthly Pro",
    tagline: "Ideal for quick job searches & internship hunting",
    price: "₹29",
    period: "/month",
    popular: false,
    badge: null,
    features: [
      "10 Free Applications trial included",
      "Unlimited applications on Internshala",
      "Unlimited applications on Naukri.com",
      "Unlimited applications on Indeed",
      "AI Subjective Answer Engine",
      "Stealth anti-bot bypass mode",
      "Excel report exports (.xlsx)",
      "Standard email support",
    ],
    buttonText: "Start with Free Trial",
    buttonAccent: "bg-[var(--badge-bg)] hover:bg-[var(--card-border)] text-[var(--text-main)] border border-[var(--card-border)]",
  },
  {
    name: "Yearly Elite",
    tagline: "Most popular for active job seekers & career switchers",
    price: "₹399",
    period: "/year",
    popular: true,
    badge: "MOST POPULAR • SAVE 60%",
    features: [
      "Everything in Monthly Pro",
      "Full 12-month unlimited access",
      "Continuous background auto-apply",
      "Multi-device license",
      "ATS Resume Match scoring",
      "Priority portal bot updates",
      "VIP fast-lane support",
      "Early access to LinkedIn bot",
    ],
    buttonText: "Get Yearly Elite (.exe)",
    buttonAccent: "glow-button text-black font-black",
  },
  {
    name: "Lifetime Master",
    tagline: "One-time payment for lifetime career automation",
    price: "₹799",
    period: "one-time",
    popular: false,
    badge: "LIFETIME VALUE",
    features: [
      "Everything in Yearly Elite",
      "Pay once, use forever",
      "Company Career Portal Crawler PRO",
      "All future bot updates included",
      "Direct developer Discord access",
      "Priority feature requests",
      "100% money-back guarantee",
    ],
    buttonText: "Claim Lifetime Master",
    buttonAccent: "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg",
  },
];

export default function Pricing({ onOpenDownload }: PricingProps) {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
            Unbeatable Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight mt-3">
            Land Your Dream Job for Less Than <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">₹1 a Day</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-base sm:text-lg">
            Every plan starts with <strong className="text-[var(--text-main)]">10 Free Applications</strong>. No credit card required to download and test.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-3xl p-8 flex flex-col justify-between relative transition-all ${
                plan.popular
                  ? "border-cyan-400/50 shadow-2xl shadow-cyan-500/15 ring-1 ring-cyan-400/30 lg:-translate-y-2"
                  : "border-[var(--card-border)]"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-[10px] font-black tracking-wider uppercase shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-1">{plan.name}</h3>
                <p className="text-xs text-[var(--text-muted)] min-h-[32px] leading-relaxed">{plan.tagline}</p>

                {/* Price Display */}
                <div className="my-6 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-[var(--text-subtle)] text-sm font-semibold">{plan.period}</span>
                </div>

                {/* Features list */}
                <div className="space-y-3 pt-6 border-t border-[var(--card-border)]">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-muted)]">
                      <div className="p-0.5 rounded-full bg-cyan-400/20 text-cyan-400 mt-0.5 shrink-0">
                        <Check size={13} className="stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action button */}
              <div className="mt-8 pt-6 border-t border-[var(--card-border)]">
                <button
                  onClick={onOpenDownload}
                  className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 cursor-pointer transition-all ${plan.buttonAccent}`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment & Guarantee Trust Note */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--text-muted)] font-medium">
          <span className="flex items-center gap-1.5">
            <Shield size={14} className="text-cyan-400" />
            <span>Secure Indian Payments (UPI, Cards, NetBanking via Razorpay)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Zap size={14} className="text-amber-400" />
            <span>Instant License Activation</span>
          </span>
        </div>
      </div>
    </section>
  );
}
