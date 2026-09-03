"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface NavbarProps {
  onOpenDownload: () => void;
}

export default function Navbar({ onOpenDownload }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--nav-bg)] backdrop-blur-2xl border-b border-[var(--card-border)] shadow-xl py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="relative">
            <img
              src="/logo.png"
              alt="AgentsKaro Official Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 group-hover:shadow-cyan-500/40 transition-all object-cover border border-cyan-400/30"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[var(--bg-page)]" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-[var(--text-main)] flex items-center gap-1.5 leading-none">
              AgentsKaro
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </span>
            <span className="text-[9px] font-bold text-[var(--text-subtle)] tracking-wider uppercase mt-0.5">
              By Yubisaki
            </span>
          </div>
        </a>

        {/* Clean, Centered & High-End Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--card-border)] backdrop-blur-md shadow-sm">
          {/* Platforms (with 200+ badge) */}
          <a
            href="#platforms"
            className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[var(--text-muted)] hover:text-cyan-400 hover:bg-white/5 transition-all flex items-center gap-1.5"
          >
            <span>Platforms</span>
            <span className="px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-400 text-[9px] font-black tracking-wider border border-cyan-400/30">
              200+
            </span>
          </a>

          {/* WhatsApp Bot */}
          <a
            href="#whatsapp"
            className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[var(--text-muted)] hover:text-emerald-400 hover:bg-white/5 transition-all flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>WhatsApp Bot</span>
          </a>

          {/* Features */}
          <a
            href="#features"
            className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-white/5 transition-all"
          >
            Features
          </a>

          {/* Pricing */}
          <a
            href="#pricing"
            className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-white/5 transition-all"
          >
            Pricing
          </a>

          {/* FAQ */}
          <a
            href="#faq"
            className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-white/5 transition-all"
          >
            FAQ
          </a>
        </nav>

        {/* Right Side Actions: Theme Switcher & Download CTA */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-cyan-400 hover:border-cyan-400/40 transition-all cursor-pointer shadow-sm"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-amber-400 transition-transform rotate-0 hover:rotate-45" />
            ) : (
              <Moon size={16} className="text-blue-600 transition-transform -rotate-12 hover:rotate-0" />
            )}
          </button>

          {/* Primary Download Action Button */}
          <button
            onClick={onOpenDownload}
            className="glow-button px-5 py-2.5 rounded-xl font-black text-xs text-black flex items-center gap-2 cursor-pointer shadow-lg active:scale-95 transition-all"
          >
            <Download size={14} className="stroke-[2.5]" />
            <span className="hidden sm:inline">Download (.exe)</span>
            <span className="sm:hidden">Download</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--card-border)] text-[var(--text-main)] cursor-pointer"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] backdrop-blur-2xl border-b border-[var(--card-border)] px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-2 font-semibold text-sm text-[var(--text-main)]">
            <a
              href="#platforms"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-white/5 flex items-center justify-between text-cyan-400 font-bold"
            >
              <span>Platforms & Portals</span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-[10px] font-black">200+</span>
            </a>
            <a
              href="#whatsapp"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-white/5 flex items-center justify-between text-emerald-400 font-bold"
            >
              <span>WhatsApp Bot Apply</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-[10px] font-black">HOT</span>
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-white/5 hover:text-cyan-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-white/5 hover:text-cyan-400 transition-colors"
            >
              Comparison
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-white/5 hover:text-cyan-400 transition-colors"
            >
              ROI Calculator
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-white/5 hover:text-cyan-400 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-white/5 hover:text-cyan-400 transition-colors"
            >
              FAQ
            </a>
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDownload();
            }}
            className="w-full glow-button py-3 rounded-xl font-black text-sm text-black flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Download size={16} />
            <span>Download for Windows (.exe)</span>
          </button>
        </div>
      )}
    </header>
  );
}
