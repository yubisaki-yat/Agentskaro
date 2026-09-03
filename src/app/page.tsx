"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBento from "@/components/FeaturesBento";
import ComparisonTable from "@/components/ComparisonTable";
import HowItWorks from "@/components/HowItWorks";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import DownloadModal from "@/components/DownloadModal";
import WhatsAppFeature from "@/components/WhatsAppFeature";
import SupportedPlatforms from "@/components/SupportedPlatforms";
import SEOContentSection from "@/components/SEOContentSection";
import { Download, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 600px
      setShowStickyCTA(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDownload = () => setIsDownloadOpen(true);
  const closeDownload = () => setIsDownloadOpen(false);

  return (
    <main className="min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] relative bg-mesh-grid transition-colors duration-300">
      {/* Navigation with Theme Switcher */}
      <Navbar onOpenDownload={openDownload} />

      {/* Hero Section with Live Simulator */}
      <Hero onOpenDownload={openDownload} />

      {/* Massive Multi-Portal Ecosystem: Live vs Upcoming National & Global Platforms */}
      <SupportedPlatforms onOpenDownload={openDownload} />

      {/* Bento Grid Core Features */}
      <FeaturesBento />

      {/* Game-Changing WhatsApp AI Assistant & 1-Click Yes/No Auto-Apply */}
      <WhatsAppFeature onOpenDownload={openDownload} />

      {/* AgentsKaro vs The Old Way Comparison */}
      <ComparisonTable onOpenDownload={openDownload} />

      {/* 4-Step How It Works */}
      <HowItWorks onOpenDownload={openDownload} />

      {/* Interactive Time & Money ROI Calculator */}
      <ROICalculator onOpenDownload={openDownload} />

      {/* Transparent 3-Tier Pricing */}
      <Pricing onOpenDownload={openDownload} />

      {/* Verified Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions Accordion */}
      <FAQ />

      {/* SEO & Knowledge Base Content Hub for Search Engines */}
      <SEOContentSection />

      {/* Redesigned Rich Footer with Pre-Footer CTA Banner & Yubisaki Branding */}
      <Footer onOpenDownload={openDownload} />

      {/* Interactive Download / Early Access Modal */}
      <DownloadModal isOpen={isDownloadOpen} onClose={closeDownload} />

      {/* Floating Bottom Quick-Download Bar (appears on scroll) */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-xl glass-card rounded-2xl p-3 sm:p-3.5 border border-cyan-400/35 shadow-2xl flex items-center justify-between gap-4 bg-[var(--card-bg)]"
          >
            <div className="flex items-center gap-3 pl-2">
              <img
                src="/logo.png"
                alt="AgentsKaro"
                className="w-8 h-8 rounded-lg object-cover shadow-sm border border-cyan-400/40 shrink-0"
              />
              <div className="hidden sm:block">
                <div className="text-xs font-bold text-[var(--text-main)] leading-none">AgentsKaro Desktop v2.0</div>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5">10 Free Applications Included</div>
              </div>
            </div>

            <button
              onClick={openDownload}
              className="glow-button px-5 py-2.5 rounded-xl font-black text-xs text-black flex items-center gap-2 cursor-pointer shrink-0 shadow-md active:scale-95 transition-all"
            >
              <Download size={14} className="stroke-[3]" />
              <span>Download for Windows (.exe)</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
