"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface NavbarProps {
  onOpenDownload: () => void;
}

const NAV_LINKS = [
  { href: "#platforms", label: "Platforms" },
  { href: "#features", label: "AI Agents" },
  { href: "#whatsapp", label: "WhatsApp Agent", isLive: true, badge: "LIVE" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar({ onOpenDownload }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--border)] py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="relative">
            <img
              src="/logo.png"
              alt="AgentsKaro Logo"
              className="w-10 h-10 rounded-2xl object-cover shadow-sm border border-[var(--border)] group-hover:scale-105 transition-all duration-200"
            />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[var(--bg-page)]"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span
                className="text-lg font-extrabold tracking-tight text-[var(--text-main)] leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                AgentsKaro
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 leading-none">
                v3.1.0
              </span>
            </div>
            <span className="block text-[11px] text-[var(--text-subtle)] font-medium tracking-wide mt-0.5">
              by Yubisaki
            </span>
          </div>
        </a>

        {/* Desktop Nav — flat links, no pill container */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors duration-150 relative group flex items-center gap-1.5"
            >
              {link.label}
              {link.isLive && (
                <span className="relative flex h-2 w-2" title="Live Feature">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              )}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[var(--primary)] group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="p-2 rounded-lg text-[var(--text-subtle)] hover:text-[var(--text-main)] hover:bg-[var(--badge-bg)] transition-all cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-slate-600" />
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenDownload}
            aria-label="Download AgentsKaro for Windows"
            className="btn-primary hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm cursor-pointer active:scale-95 transition-all"
          >
            <Download size={15} className="stroke-[2.5]" />
            <span className="font-semibold">Download Free</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--badge-bg)] transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] border-b border-[var(--border)] px-5 py-5">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--badge-bg)] transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.isLive && (
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    LIVE
                  </span>
                )}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDownload();
            }}
            className="mt-4 w-full btn-primary py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download size={16} />
            Download for Windows (.exe)
          </button>
        </div>
      )}
    </header>
  );
}
