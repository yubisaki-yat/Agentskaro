import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#05070e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://agentskaro.co.in"),
  title: {
    default: "AgentsKaro - Autonomous AI Job Application Bot for Windows | Yubisaki",
    template: "%s | AgentsKaro - AI Job Bot",
  },
  description:
    "Download AgentsKaro v2.0 for Windows 10/11. Automate job applications across Internshala, Naukri, Indeed, LinkedIn, Hirist & WhatsApp. AI answer engine, ATS resume matcher, and stealth anti-ban protection. 10 Free Applications included.",
  applicationName: "AgentsKaro Desktop",
  category: "Software / Job Search Automation",
  classification: "Autonomous AI Job Search Agent",
  generator: "Next.js",
  keywords: [
    // Brand & Software Names
    "AgentsKaro",
    "AgentsKaro download",
    "AgentsKaro desktop",
    "AgentsKaro official",
    "AgentsKaro Windows",
    "agentskaro.co.in",
    "Yubisaki Assistive Technology",
    "Yubisaki job bot",
    // Core Category Keywords
    "AI job application bot",
    "autonomous job applicant",
    "auto apply bot",
    "job application automation",
    "AI job search assistant",
    "automatic job apply software",
    // Platform Specific High-Search Keywords
    "Naukri auto apply bot",
    "Naukri job scraper software",
    "Internshala auto apply bot",
    "Internshala internship bot",
    "Indeed auto apply bot Windows",
    "LinkedIn auto apply bot",
    "Hirist tech job bot",
    "Wellfound bot auto apply",
    "WhatsApp job apply bot",
    "apply jobs via WhatsApp",
    // Audience & Location
    "job search bot India",
    "fresher job application bot",
    "software engineer auto apply bot",
    "remote job search automation",
    "internship application automation",
    // Features & Tech
    "ATS resume matcher software",
    "AI subjective answer engine",
    "stealth undetected chrome job bot",
    "Excel job application tracker export",
    "free job application bot",
    "download job bot .exe",
  ],
  authors: [
    { name: "Yubisaki Assistive Technology", url: "https://yubisaki.in" },
    { name: "AgentsKaro Engineering Team", url: "https://agentskaro.co.in" },
  ],
  creator: "Yubisaki Assistive Technology",
  publisher: "AgentsKaro",
  alternates: {
    canonical: "https://agentskaro.co.in",
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    url: "https://agentskaro.co.in",
    siteName: "AgentsKaro",
    title: "AgentsKaro - Apply to 500+ Jobs on Autopilot with AI & WhatsApp",
    description:
      "Automate job applications across Internshala, Naukri, Indeed, LinkedIn & WhatsApp with AI answers, ATS resume scoring, and stealth protection. Download 368MB Windows client.",
    images: [
      {
        url: "https://agentskaro.co.in/logo.png",
        width: 1024,
        height: 1024,
        alt: "AgentsKaro Autonomous AI Recruiter Client Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@agentskaro",
    creator: "@yubisaki",
    title: "AgentsKaro - Autonomous AI Job Application Software for Windows",
    description:
      "Automate job applications across Internshala, Naukri, Indeed, LinkedIn & WhatsApp. 10 Free Applications included.",
    images: ["https://agentskaro.co.in/logo.png"],
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. SoftwareApplication Schema
    {
      "@type": "SoftwareApplication",
      "@id": "https://agentskaro.co.in/#software",
      name: "AgentsKaro Desktop",
      alternateName: "AgentsKaro Autonomous Recruiter Client",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows 10, Windows 11 (64-bit)",
      fileSize: "368MB",
      softwareVersion: "2.0.0",
      downloadUrl: "https://agentskaro.co.in",
      image: "https://agentskaro.co.in/logo.png",
      screenshot: "https://agentskaro.co.in/logo.png",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        description: "10 Free Applications Included with Windows Installer",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: "482",
      },
      featureList: [
        "WhatsApp 1-Click 'YES / NO' Auto-Apply",
        "Internshala Auto-Apply Bot",
        "Naukri.com Automated Scraper and Job Submitter",
        "Indeed Portal Bot",
        "LinkedIn Auto-Apply Integration",
        "Smart AI Answer Engine for Recruiter Screening Questions",
        "ATS Resume and Job Description Match Intelligence",
        "Stealth Anti-Ban Human Emulation Mode",
        "Automated Excel (.xlsx) Report Tracker",
      ],
      publisher: {
        "@type": "Organization",
        "@id": "https://yubisaki.in/#organization",
        name: "Yubisaki Assistive Technology",
        url: "https://yubisaki.in",
        logo: "https://agentskaro.co.in/logo.png",
      },
      description:
        "Autonomous AI desktop client that automates job applications across Internshala, Naukri, Indeed, LinkedIn, and WhatsApp with stealth anti-bot protection and AI subjective answers.",
    },

    // 2. Organization Schema
    {
      "@type": "Organization",
      "@id": "https://yubisaki.in/#organization",
      name: "Yubisaki Assistive Technology",
      legalName: "Yubisaki Assistive Technology",
      url: "https://yubisaki.in",
      logo: "https://agentskaro.co.in/logo.png",
      slogan: "Assistive Technology for Everyone",
      sameAs: [
        "https://agentskaro.co.in",
        "https://yubisaki.in",
      ],
    },

    // 3. WebSite Schema with SearchAction
    {
      "@type": "WebSite",
      "@id": "https://agentskaro.co.in/#website",
      url: "https://agentskaro.co.in",
      name: "AgentsKaro",
      publisher: {
        "@id": "https://yubisaki.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://agentskaro.co.in/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    // 4. FAQPage Schema for Google Accordion Rich Snippets
    {
      "@type": "FAQPage",
      "@id": "https://agentskaro.co.in/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is my job portal account safe from bans with AgentsKaro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, 100%. AgentsKaro uses custom Stealth Chrome drivers with human-like browsing patterns, randomized mouse movements, realistic scroll trajectories, and variable delays between applications. It never spams API endpoints or triggers bot alerts.",
          },
        },
        {
          "@type": "Question",
          name: "How does the WhatsApp 1-Click Auto-Apply work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentsKaro connects with your WhatsApp to send instant notifications when high-match jobs are posted on Naukri, Internshala, or Indeed. You simply reply with 'YES' to automatically apply with your tailored resume and AI answers, or 'NO' to pass.",
          },
        },
        {
          "@type": "Question",
          name: "How does the AI Answer Engine answer custom employer questions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When an employer asks questions like 'Why should we hire you?', 'Notice period', or 'Tell us about your React experience', AgentsKaro analyzes the job description and your uploaded resume to craft coherent, ATS-aligned, and truthful answers on the spot.",
          },
        },
        {
          "@type": "Question",
          name: "What are the Windows system requirements for AgentsKaro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentsKaro is a lightweight native desktop client built for Windows 10 and Windows 11 (64-bit). It requires just 4GB RAM, 500MB free disk space, and Google Chrome installed on your machine.",
          },
        },
        {
          "@type": "Question",
          name: "How do I use the 10 Free Applications trial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simply click 'Download for Windows (.exe)', run the application, connect your account (Internshala, Naukri, or Indeed), and click Launch Bot. The first 10 applications are completely on us—no credit card or prepayment required.",
          },
        },
        {
          "@type": "Question",
          name: "Does AgentsKaro work for freshers as well as experienced professionals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Freshers can target internships, apprentice roles, and entry-level positions on Internshala and Naukri. Experienced engineers can configure specific tech stacks, minimum CTC expectations, and remote/hybrid filters on Naukri, Indeed, and LinkedIn.",
          },
        },
        {
          "@type": "Question",
          name: "Where are my portal login credentials stored?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Security and privacy are paramount. Your session cookies and credentials are encrypted on your local machine using AES-GCM and stored only on your computer. They are never uploaded to any remote server or shared with third parties.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after the 10 Free Applications trial ends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Once you hit 10 applications, you can upgrade to Monthly Pro (₹29/month) or Yearly Elite (₹399/year) via secure UPI/Cards to enjoy unlimited applications across all supported portals.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="canonical" href="https://agentskaro.co.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
