"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Shield, Zap, Loader2, CheckCircle2, Copy, Download, X } from "lucide-react";

interface PricingProps {
  onOpenDownload: () => void;
}

const PLANS = [
  {
    id: "monthly",
    name: "Monthly",
    subtitle: "Ideal for an active sprint",
    price: "₹29",
    amountNum: 29,
    period: "/month",
    highlight: false,
    badge: null,
    cta: "Get Monthly Access (₹29)",
    ctaClass: "btn-ghost",
    features: [
      "10 free applications to start",
      "Unlimited on Internshala",
      "Unlimited on Naukri.com",
      "Unlimited on Indeed",
      "AI Subjective Answer Engine",
      "Stealth anti-ban Chrome mode",
      "Excel report export (.xlsx)",
      "Email support",
    ],
  },
  {
    id: "yearly",
    name: "Yearly",
    subtitle: "The most popular choice",
    price: "₹399",
    amountNum: 399,
    period: "/year",
    highlight: true,
    badge: "Save 60%",
    cta: "Get Yearly Access (₹399)",
    ctaClass: "btn-primary",
    features: [
      "Everything in Monthly",
      "Full 12-month access",
      "Continuous background auto-apply",
      "Multi-device license",
      "ATS resume match scoring",
      "Priority AI Agent updates",
      "VIP fast-lane support",
      "Early access to LinkedIn AI Agent",
    ],
  },
  {
    id: "lifetime",
    name: "Lifetime",
    subtitle: "Pay once, automate forever",
    price: "₹799",
    amountNum: 799,
    period: "one-time",
    highlight: false,
    badge: "Best Value",
    cta: "Claim Lifetime (₹799)",
    ctaClass: "btn-ghost",
    features: [
      "Everything in Yearly",
      "Lifetime access, one payment",
      "Company Career Portal Crawler",
      "All future AI Agent releases",
      "Discord developer access",
      "Priority feature requests",
      "100% money-back guarantee",
    ],
  },
];

export default function Pricing({ onOpenDownload }: PricingProps) {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    isOpen: boolean;
    planName: string;
    licenseKey: string;
    paymentId: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (typeof window !== "undefined" && (window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async (plan: typeof PLANS[0]) => {
    setLoadingPlan(plan.id);
    try {
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded) {
        alert("Could not load payment gateway. Please check your internet connection.");
        setLoadingPlan(null);
        return;
      }

      // 1. Create order on server
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId: plan.id }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to initialize payment order");
      }

      // 2. Open Razorpay Checkout Modal
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "AgentsKaro",
        description: `${plan.name} License — ${plan.price}${plan.period}`,
        image: "https://agentskaro.co.in/logo.png",
        order_id: data.orderId,
        handler: async function (response: any) {
          try {
            // Verify payment on server
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                planName: plan.name,
              }),
            });

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              setSuccessData({
                isOpen: true,
                planName: plan.name,
                licenseKey: verifyData.licenseKey,
                paymentId: verifyData.paymentId,
              });
            } else {
              alert("Payment received! We'll send your license key via email.");
            }
          } catch (vErr) {
            console.error("Verification error:", vErr);
            alert("Payment successful! Reference ID: " + response.razorpay_payment_id);
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#0ea5e9",
        },
        modal: {
          ondismiss: function () {
            setLoadingPlan(null);
          },
        },
      };

      const razorpayInstance = new (window as any).Razorpay(options);
      razorpayInstance.open();
    } catch (err: any) {
      console.error("Checkout error:", err);
      alert(err.message || "Payment service is unavailable right now. Please try again.");
    } finally {
      setLoadingPlan(null);
    }
  };

  const copyLicense = () => {
    if (!successData?.licenseKey) return;
    navigator.clipboard.writeText(successData.licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden section-base border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <span className="section-label">Pricing &amp; Plans</span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-[var(--text-main)] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Land your dream job for
            <br />
            less than ₹1 a day.
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-base">
            Every plan starts with <strong className="text-[var(--text-main)] font-semibold">10 free applications</strong>. Instant online checkout via UPI, Cards &amp; NetBanking.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all ${
                plan.highlight
                  ? "bg-[#0b1120] text-white border-2 border-[var(--primary)] shadow-2xl relative lg:-translate-y-2 ring-4 ring-[var(--primary)]/10"
                  : "surface-card"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-8 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                    plan.highlight
                      ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25"
                      : "bg-[var(--bg-subtle)] border border-[var(--border)] text-[var(--primary)] font-semibold"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Plan name */}
                <h3
                  className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-[var(--text-main)]"}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {plan.name}
                </h3>
                <p className={`text-xs ${plan.highlight ? "text-slate-400" : "text-[var(--text-subtle)]"}`}>
                  {plan.subtitle}
                </p>

                {/* Price */}
                <div className="mt-6 mb-7 flex items-baseline gap-1.5">
                  <span
                    className={`text-5xl font-extrabold tracking-tight ${plan.highlight ? "text-white" : "text-[var(--text-main)]"}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? "text-slate-400" : "text-[var(--text-subtle)]"}`}>
                    {plan.period}
                  </span>
                </div>

                {/* Divider */}
                <div className={`h-px mb-6 ${plan.highlight ? "bg-white/10" : "bg-[var(--border)]"}`} />

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-sm">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.highlight
                            ? "bg-sky-500/20 text-sky-400"
                            : "bg-[var(--primary)]/10 text-[var(--primary)]"
                        }`}
                      >
                        <Check size={11} className="stroke-[3]" />
                      </div>
                      <span className={plan.highlight ? "text-slate-300" : "text-[var(--text-muted)]"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Checkout CTA Button */}
              <div className="mt-8 pt-4">
                <button
                  onClick={() => handleCheckout(plan)}
                  disabled={loadingPlan === plan.id}
                  className={`w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all disabled:opacity-60 ${
                    plan.highlight
                      ? "btn-primary w-full shadow-lg shadow-sky-500/20"
                      : "surface-card border-[var(--border)] hover:border-[var(--primary)] text-[var(--text-main)] hover:bg-[var(--bg-subtle)]"
                  }`}
                >
                  {loadingPlan === plan.id ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Opening Gateway...</span>
                    </>
                  ) : (
                    <>
                      <span>{plan.cta}</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free trial footnote + Trust line */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-[var(--text-subtle)]">
          <span className="flex items-center gap-2 font-medium">
            <Shield size={14} className="text-[var(--primary)]" />
            Official Razorpay Live Gateway (UPI, GPay, PhonePe, Paytm, Cards)
          </span>
          <span className="flex items-center gap-2 font-medium">
            <Zap size={14} className="text-emerald-500" />
            Instant automated license key delivery
          </span>
        </div>
      </div>

      {/* Payment Success Modal */}
      <AnimatePresence>
        {successData?.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSuccessData(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md surface-card rounded-3xl p-6 sm:p-8 z-10 border border-emerald-500/30 shadow-2xl text-center"
            >
              <button
                onClick={() => setSuccessData(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-[var(--badge-bg)] text-[var(--text-subtle)] hover:text-[var(--text-main)] cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>

              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                Payment Successful! 🎉
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-6">
                Your <strong>{successData.planName}</strong> is now activated.
              </p>

              {/* License Key Box */}
              <div className="p-4 rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border)] mb-6 text-left">
                <span className="text-[10px] uppercase font-bold text-[var(--text-subtle)] tracking-wider block mb-1">
                  Your Official License Key
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                    {successData.licenseKey}
                  </span>
                  <button
                    onClick={copyLicense}
                    className="p-2 rounded-lg bg-[var(--badge-bg)] border border-[var(--border)] text-xs font-semibold flex items-center gap-1 cursor-pointer hover:text-[var(--primary)] transition-colors"
                  >
                    {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={onOpenDownload}
                  className="w-full btn-primary py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Download size={15} />
                  <span>Download Desktop App (.exe)</span>
                </button>
                <p className="text-[11px] text-[var(--text-subtle)] pt-1">
                  Reference ID: <code>{successData.paymentId}</code>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
