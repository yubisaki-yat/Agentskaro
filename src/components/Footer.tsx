"use client";

import React from "react";
import { Download, ShieldCheck, CheckCircle2, ArrowUpRight, Heart } from "lucide-react";

interface FooterProps {
  onOpenDownload: () => void;
}

const PRODUCT_LINKS = [
  { label: "Autonomous AI Agents", href: "#features" },
  { label: "WhatsApp AI Agent", href: "#whatsapp" },
  { label: "AI Answer Engine", href: "#features" },
  { label: "ATS Resume Match", href: "#features" },
  { label: "Stealth Anti-Ban", href: "#features" },
  { label: "Excel Report Export", href: "#features" },
];

const NAV_LINKS = [
  { label: "Feature Comparison", href: "#comparison" },
  { label: "ROI Calculator", href: "#calculator" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const PORTALS = [
  { name: "Internshala", color: "bg-cyan-400", status: "live" },
  { name: "Naukri.com", color: "bg-blue-500", status: "live" },
  { name: "Indeed", color: "bg-indigo-400", status: "live" },
  { name: "LinkedIn Easy Apply", color: "bg-blue-400", status: "soon" },
  { name: "Wellfound (US)", color: "bg-rose-400", status: "soon" },
  { name: "Company Careers", color: "bg-purple-400", status: "soon" },
];

export default function Footer({ onOpenDownload }: FooterProps) {
  return (
    <footer className="relative bg-[var(--footer-bg)] text-gray-400 overflow-hidden">

      {/* Pre-footer CTA — full-width dark band */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <span className="section-label" style={{ color: "var(--primary)" }}>
              Get started free
            </span>
            <h3
              className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight mt-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to put your job hunt on autopilot?
            </h3>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Download AgentsKaro for Windows 10/11 — your first 10 applications are completely free, no credit card needed. macOS &amp; Linux releasing soon.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onOpenDownload}
              className="w-full sm:w-auto btn-primary px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2.5 cursor-pointer active:scale-95 transition-all shadow-xl"
            >
              <Download size={17} className="stroke-[2.5]" />
              Download for Windows (.exe)
            </button>
            <span className="text-xs text-gray-500">macOS/Linux Waitlist Available</span>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Brand column — 2 cols */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center gap-3.5">
                <img
                  src="/logo.png"
                  alt="AgentsKaro Logo"
                  className="w-12 h-12 rounded-2xl object-cover border border-white/10 shadow-md"
                />
                <div>
                  <span
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    AgentsKaro
                  </span>
                  <span className="block text-[10px] text-gray-500 tracking-wide uppercase mt-0.5">
                    Autonomous AI Agent Suite
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                Autonomous AI desktop software engineered to eliminate manual application fatigue across India's top job boards and beyond.
              </p>

              {/* Parent org */}
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 block mb-1.5">Parent Organization</span>
                <a
                  href="https://yubisaki.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Yubisaki Assistive Technology
                  <ArrowUpRight size={13} className="text-[var(--primary)]" />
                </a>
                <span className="block text-xs text-gray-500 mt-0.5">"Assistive Technology for Everyone"</span>
              </div>

              {/* Operational status */}
              <div className="status-live w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                All systems operational · v3.1.0
              </div>
            </div>

            {/* Product */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Product</h4>
              <ul className="space-y-2 text-sm">
                {PRODUCT_LINKS.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portals */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Portals</h4>
              <ul className="space-y-2 text-sm">
                {PORTALS.map((p) => (
                  <li key={p.name} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${p.color} shrink-0`} />
                      <span>{p.name}</span>
                    </div>
                    {p.status === "live" ? (
                      <span className="status-live text-[9px] py-0">LIVE</span>
                    ) : (
                      <span className="status-soon text-[9px] py-0">SOON</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {NAV_LINKS.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Yubisaki Assistive Technology.</span>
            <span>Made with</span>
            <Heart size={11} className="text-rose-500 fill-rose-500" />
            <span>in India.</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-emerald-500" />
              AES-256 Local Encryption
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-[var(--primary)]" />
              Windows 10/11 Certified
            </span>
            <a
              href="https://agentskaro.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              agentskaro.co.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
