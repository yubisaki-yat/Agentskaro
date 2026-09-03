import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.SMTP_USER || "agentskaro.noreply@gmail.com";
const SMTP_PASS = process.env.SMTP_PASS || "hayxeszdrluajzkk";
const FROM_EMAIL = process.env.FROM_EMAIL || `"AgentsKaro by Yubisaki" <${SMTP_USER}>`;

export function getTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false, // true for 465, false for 587
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export function generateWelcomeEmailHtml(userEmail: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to AgentsKaro Desktop</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #05070e;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #e2e8f0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #05070e;
      padding: 40px 0;
    }
    .main {
      background-color: #0c1222;
      margin: 0 auto;
      width: 100%;
      max-width: 600px;
      border-radius: 24px;
      border: 1px solid rgba(0, 242, 254, 0.2);
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    }
    .header {
      background: linear-gradient(135deg, #070e1e 0%, #0c1834 100%);
      padding: 40px 30px;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .logo-badge {
      display: inline-block;
      padding: 6px 16px;
      background: rgba(0, 242, 254, 0.12);
      border: 1px solid rgba(0, 242, 254, 0.3);
      border-radius: 9999px;
      color: #00f2fe;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 900;
      color: #ffffff;
      line-height: 1.25;
      letter-spacing: -0.5px;
    }
    .header p {
      margin: 10px 0 0;
      font-size: 14px;
      color: #94a3b8;
    }
    .content {
      padding: 36px 32px;
    }
    .card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 24px;
    }
    .step-num {
      display: inline-block;
      background: #00f2fe;
      color: #000;
      font-weight: 900;
      font-size: 11px;
      padding: 3px 8px;
      border-radius: 6px;
      margin-right: 8px;
    }
    .btn {
      display: block;
      width: fit-content;
      margin: 28px auto;
      background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
      color: #020617 !important;
      text-decoration: none;
      font-weight: 900;
      font-size: 15px;
      padding: 16px 36px;
      border-radius: 14px;
      box-shadow: 0 0 25px rgba(0, 242, 254, 0.4);
      text-align: center;
    }
    .features-list {
      margin: 20px 0;
      padding-left: 0;
      list-style: none;
    }
    .features-list li {
      position: relative;
      padding-left: 28px;
      margin-bottom: 12px;
      font-size: 13.5px;
      color: #cbd5e1;
      line-height: 1.5;
    }
    .features-list li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #00f2fe;
      font-weight: 900;
    }
    .roadmap {
      background: rgba(168, 85, 247, 0.08);
      border: 1px solid rgba(168, 85, 247, 0.25);
      border-radius: 16px;
      padding: 20px;
      margin-top: 24px;
    }
    .footer {
      padding: 28px 30px;
      text-align: center;
      background: #060913;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      font-size: 11px;
      color: #64748b;
      line-height: 1.6;
    }
    .footer a {
      color: #00f2fe;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <table class="main" width="100%" cellpadding="0" cellspacing="0">
      <!-- Header -->
      <tr>
        <td class="header">
          <img src="https://agentskaro.co.in/logo.png" alt="AgentsKaro Logo" width="68" height="68" style="border-radius: 18px; margin-bottom: 16px; border: 1px solid rgba(0, 242, 254, 0.4); display: inline-block; box-shadow: 0 4px 20px rgba(0, 242, 254, 0.35);" /><br>
          <div class="logo-badge">AgentsKaro Official v2.0</div>
          <h1>Welcome to the Future of Job Hunting 🚀</h1>
          <p>Your 10 Free Applications trial is ready to activate on Windows 10/11.</p>
        </td>
      </tr>

      <!-- Body Content -->
      <tr>
        <td class="content">
          <p style="font-size: 15px; color: #f1f5f9; line-height: 1.6; margin-top: 0;">
            Hi there,
          </p>
          <p style="font-size: 14px; color: #cbd5e1; line-height: 1.6;">
            Thank you for subscribing to <strong>AgentsKaro</strong>! You are now part of an exclusive group of candidates who apply to hundreds of verified jobs with zero manual burnout.
          </p>

          <!-- Download CTA -->
          <a href="https://agentskaro.co.in" class="btn">
            Download AgentsKaro Desktop (.exe)
          </a>

          <!-- Quick Setup Card -->
          <div class="card">
            <h3 style="margin: 0 0 14px; font-size: 15px; color: #ffffff;">⚡ 3-Step Instant Setup Guide:</h3>
            <div style="font-size: 13px; color: #94a3b8; line-height: 1.8;">
              <div><span class="step-num">01</span> Download & install the 368MB clean binary on Windows 10/11.</div>
              <div><span class="step-num">02</span> Connect your portal accounts (Internshala, Naukri.com, Indeed).</div>
              <div><span class="step-num">03</span> Select your target job titles & launch the autonomous stealth bot!</div>
            </div>
          </div>

          <!-- Included Features -->
          <div style="margin-top: 24px;">
            <h3 style="margin: 0 0 12px; font-size: 15px; color: #ffffff;">What You Get with AgentsKaro:</h3>
            <ul class="features-list">
              <li><strong>10 Free Applications:</strong> Test the bot with zero upfront cost or credit card.</li>
              <li><strong>Smart AI Answer Engine:</strong> Dynamically answers "Why should we hire you?" and custom employer questions.</li>
              <li><strong>Stealth Anti-Ban Drivers:</strong> Randomized delays and mouse movements keep your account 100% safe.</li>
              <li><strong>Automatic Excel Reports:</strong> Exports every applied job link and timestamp to .xlsx.</li>
            </ul>
          </div>

          <!-- Upcoming Roadmap / Advertising Updates -->
          <div class="roadmap">
            <h4 style="margin: 0 0 8px; font-size: 14px; color: #c084fc;">
              🔔 Upcoming Launches & Product Roadmap
            </h4>
            <p style="margin: 0 0 10px; font-size: 12px; color: #cbd5e1; line-height: 1.5;">
              As a priority subscriber, you will be the first to receive notifications, coupon discounts, and early beta access when we launch:
            </p>
            <ul style="margin: 0; padding-left: 18px; font-size: 12px; color: #e2e8f0; line-height: 1.6;">
              <li><strong>LinkedIn Easy-Apply Auto-Bot (v2.2 Beta)</strong> — Coming next month!</li>
              <li><strong>Global US & Remote Startup Job Crawler</strong> with currency conversion.</li>
              <li><strong>AI Resume Keyword Matcher 2.0</strong> — Optimizes your CV for ATS scanners.</li>
            </ul>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td class="footer">
          <p style="margin: 0 0 8px;">
            A Product by <strong>Yubisaki Assistive Technology</strong><br>
            <em>"Assistive Technology for Everyone"</em>
          </p>
          <p style="margin: 0 0 8px;">
            Visit our official website: <a href="https://agentskaro.co.in">agentskaro.co.in</a> | Corporate: <a href="https://yubisaki.in">yubisaki.in</a>
          </p>
          <p style="margin: 0; color: #475569;">
            You received this email because you subscribed for updates at agentskaro.co.in.<br>
            Sent automatically from <strong>agentskaro.noreply@gmail.com</strong>.
          </p>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `.trim();
}

export async function sendWelcomeEmail(toEmail: string) {
  const transporter = getTransporter();

  const mailOptions = {
    from: FROM_EMAIL,
    to: toEmail,
    subject: "Welcome to AgentsKaro! 🚀 Your 10 Free Applications Are Ready",
    text: `Welcome to AgentsKaro Desktop v2.0!\n\nYour 10 Free Applications trial is ready to activate on Windows 10/11.\n\nDownload now at https://agentskaro.co.in\n\nFeatures Included:\n- Internshala, Naukri, Indeed Auto-Apply\n- AI Dynamic Answer Engine\n- Stealth Anti-Ban protection\n- Automatic Excel report export\n\nA Product by Yubisaki Assistive Technology (yubisaki.in)\nSent from agentskaro.noreply@gmail.com`,
    html: generateWelcomeEmailHtml(toEmail),
  };

  return await transporter.sendMail(mailOptions);
}
