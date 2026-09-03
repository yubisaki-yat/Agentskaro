# AgentsKaro 🤖

> **Autonomous AI Job Application Software for Windows 10 & 11**  
> Developed by [Yubisaki Assistive Technology](https://yubisaki.in) • Official Domain: [agentskaro.co.in](https://agentskaro.co.in)

---

## 🌟 Key Features

- **Multi-Portal Concurrency**: Autonomous bot applying across **Internshala**, **Naukri.com**, **Indeed**, and 200+ upcoming enterprise portals.
- **Direct Company Career Pages Crawler**: Submits applications directly into official career systems (**Workday, Greenhouse, Lever, Ashby, Taleo**) for companies like Google, Microsoft, Swiggy, TCS, etc.
- **WhatsApp 1-Click "YES/NO" Auto-Apply**: Candidates receive high-match role notifications on WhatsApp and can reply `"YES"` to apply instantly with tailored AI screening answers.
- **Dynamic AI Answer Engine**: Answers recruiter screening questions (*"Why should we hire you?"*, notice periods, tech stacks) dynamically tailored to the candidate's actual experience.
- **ATS Match Scoring**: Pre-evaluates 95%+ JD-to-resume keyword compatibility before submitting.
- **Stealth Anti-Ban Drivers**: Operates using undetected Chromium with organic typing cadences, Bézier curve mouse paths, and randomized delays.
- **Excel (.xlsx) Live Tracking**: Automatically logs every applied job title, link, recruiter name, and timestamp into an exportable spreadsheet.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS & Custom Design System with Dark/Light Mode Theme Provider
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email & Automation**: Nodemailer (Gmail SMTP)
- **Desktop Client**: Electron + Undetected Chromium Architecture

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/yubisaki-yat/Agentskaro.git
cd Agentskaro
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Add your Gmail SMTP credentials for automated email dispatch.

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📄 License & Organization
Developed and maintained by **Yubisaki Assistive Technology** (`yubisaki.in`). All rights reserved.
