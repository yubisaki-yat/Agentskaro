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
import LiveSocialToast from "@/components/LiveSocialToast";
import { Download } from "lucide-react";
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

  const openDownload = () => {
    // Trigger direct .exe download instantly — zero gates, zero required fields
    const exeUrl =
      process.env.NEXT_PUBLIC_EXE_URL ||
      "https://github.com/yubisaki-yat/Agentskaro/releases/download/v1.0.0/AgentsKaro-Setup.exe";
    const link = document.createElement("a");
    link.href = exeUrl;
    link.setAttribute("download", "AgentsKaro-Setup-v2.0.exe");
    document.body.appendChild(link);
    link.click();
    link.remove();

    // Also display the setup instructions & Windows guide
    setIsDownloadOpen(true);
  };
  const closeDownload = () => setIsDownloadOpen(false);

  return (
    <main id="main-content" className="min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] relative bg-mesh-grid transition-colors duration-300">
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

      {/* Live Social Proof Activity Ticker */}
      <LiveSocialToast />

      {/* Floating Bottom Quick-Download Bar (appears on scroll) */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-lg surface-card rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-4 shadow-2xl border border-[var(--border)]"
          >
            <div className="flex items-center gap-3 pl-1">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="AgentsKaro"
                  className="w-8 h-8 rounded-xl object-cover shadow-sm border border-[var(--border)] shrink-0"
                />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-bold text-[var(--text-main)] leading-none" style={{ fontFamily: "var(--font-display)" }}>
                  AgentsKaro Desktop v2.0
                </div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                  10 Free Applications Included
                </div>
              </div>
            </div>

            <button
              onClick={openDownload}
              className="btn-primary px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-2 cursor-pointer shrink-0 active:scale-95 transition-all shadow-md"
            >
              <Download size={14} className="stroke-[2.5]" />
              <span>Download for Windows (.exe)</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
