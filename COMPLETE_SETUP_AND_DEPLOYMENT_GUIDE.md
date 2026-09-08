# 🚀 AgentsKaro: Complete Setup, Deployment & Email-Locked Activation Guide

> **Maksad (Goal):** 
> 1. User jaise hi payment kare, **turant uske PC me software download hona shuru ho jaye**.
> 2. Jis subscription (Monthly ₹29 / Yearly ₹399 / Lifetime ₹799) ke liye user ne pay kiya hai, wo plan **sirf aur sirf usi email ID par active ho jo user ne payment ke waqt daali thi**, kisi aur email par bilkul nahi.
> 3. Software ki `.exe` file kahan aur kaise host karni hai.
> 4. GoDaddy domain `agentskaro.co.in` ko Render ke sath connect kaise karna hai.

---

## 📌 Table of Contents
1. [Kaise Kaam Karta Hai? (Architecture & Flowchart)](#1-kaise-kaam-karta-hai-architecture--flowchart)
2. [Step 1: Software (.exe) File Host Karna (GitHub Releases Guide)](#step-1-software-exe-file-host-karna-github-releases-guide)
3. [Step 2: Auto-Download Kaise Hoga? (Automatic Trigger)](#step-2-auto-download-kaise-hoga-automatic-trigger)
4. [Step 3: Strict Email Locking Mechanism (Sirf Payer Email Par Activation)](#step-3-strict-email-locking-mechanism-sirf-payer-email-par-activation)
5. [Step 4: Render Par Website Deploy Karna & Environment Variables](#step-4-render-par-website-deploy-karna--environment-variables)
6. [Step 5: GoDaddy Domain (agentskaro.co.in) Connect Karna](#step-5-godaddy-domain-agentskarocoin-connect-karna)
7. [Step 6: Razorpay Dashboard Settings (Webhook & Live Mode)](#step-6-razorpay-dashboard-settings-webhook--live-mode)
8. [📋 Final Checklist (Aapko Kya-Kya Karna Hai)](#-final-checklist-aapko-kya-kya-karna-hai)

---

## 1. Kaise Kaam Karta Hai? (Architecture & Flowchart)

```
[User Website par aata hai]
          │
          ▼
[Pricing plan choose karta hai: Monthly ₹29 / Yearly ₹399 / Lifetime ₹799]
          │
          ▼
[Razorpay Live Modal open hota hai]
 ➔ User apna Real Email ID aur Mobile Number enter karta hai
 ➔ UPI / Card / NetBanking se payment complete karta hai
          │
          ▼
[Payment SUCCESS] ────────────────────────────────────────────────────────┐
          │                                                               │
          ├─────────────────────────────────────────┐                     │
          ▼                                         ▼                     ▼
[1. Automatic .exe Download]             [2. Backend Verification]   [3. Email Receipt]
Browser me bina kisi click ke             Razorpay API se payer      User ke email par
AgentsKaro-Setup.exe download             ka EXACT email fetch       official license key
shuru ho jata hai.                        hota hai aur plan uske     aur instructions
                                          email se lock ho jata hai. send ho jate hain.
                                                    │
                                                    ▼
                                         [4. Software Launch]
                                         User jab app me login karega,
                                         app backend se check karega:
                                         "Kya is email ne pay kiya hai?"
                                         ➔ Agar HAAN: Full Pro Active!
                                         ➔ Agar NAHI: Free Tier (Locked)
```

---

## Step 1: Software (.exe) File Host Karna (GitHub Releases Guide)

Aapka desktop installer (`AgentsKaro-Setup.exe` ya `backend.exe`) 300MB+ ka hota hai. Git repo me direct itni badi binary commit nahi ki ja sakti. Isko host karne ka **sabse fastest, reliable aur 100% FREE** tareeqa **GitHub Releases** hai (isme unlimited download bandwidth milti hai).

### Step-by-Step GitHub Releases Par Upload:
1. Browser me apna GitHub repository open karein:
   👉 **`https://github.com/yubisaki-yat/Agentskaro/releases`**
2. **"Draft a new release"** (ya Create a new release) button par click karein.
3. Details fill karein:
   - **Choose a tag**: Type karein `v2.0.0` aur click karein *Create new tag: v2.0.0 on publish*.
   - **Release title**: `AgentsKaro Desktop Setup v2.0 (Official Windows Release)`
   - **Description**: `Official Windows 10/11 installer for AgentsKaro Autonomous Job Application Agent.`
4. **Attach binaries by dropping them here or selecting them**:
   - Apne computer se `AgentsKaro-Setup.exe` file ko drag karke yahan drop karein (file upload hone tak wait karein).
5. **Publish release** green button par click karein.
6. Publish hone ke baad page par uploaded `.exe` file dikhegi:
   - Us file par **Right Click** karein ➔ **"Copy link address"** karein.
   - Aapka link aisa dikhega:
     ```
     https://github.com/yubisaki-yat/Agentskaro/releases/download/v2.0.0/AgentsKaro-Setup.exe
     ```
7. Ye link aapka **DIRECT DOWNLOAD URL** hai. Isko sambhal kar rakhein (ye Render ke environment variable `NEXT_PUBLIC_EXE_URL` me use hoga).

---

## Step 2: Auto-Download Kaise Hoga? (Automatic Trigger)

Website ke code (`src/components/Pricing.tsx`) me automatic download logic already build kar diya gaya hai:

### Code Flow:
```typescript
// Payment verified hone ke turant baad:
const downloadUrl = process.env.NEXT_PUBLIC_EXE_URL || '/download/AgentsKaro-Setup.exe';
const autoLink = document.createElement('a');
autoLink.href = downloadUrl;
autoLink.setAttribute('download', 'AgentsKaro-Setup.exe');
document.body.appendChild(autoLink);
autoLink.click();
document.body.removeChild(autoLink);
```

### Result:
- Jaise hi Razorpay par payment `Success` hota hai:
  1. Screen par **Payment Successful Modal** pop up ho jata hai.
  2. Browser **automatically installer download karna start** kar deta hai.
  3. User ko dubara kisi download button par click karne ki zaroorat nahi padti.
  4. Phir bhi backup ke liye modal ke andar ek direct **"Download Software (.exe)"** button hamesha available rehta hai.

---

## Step 3: Strict Email Locking Mechanism (Sirf Payer Email Par Activation)

Aapki requirement thi: **"Jis subscription ke liye user ne pay kiya hai woh plan user ke pc me active ho jana chahiye but woh email id ke sath hi jo user ne payment ke time use kiya hai, sirf ussi email ke sath koi aur ke sath nahi."**

Isko humne **3-Layer Security** se lock kiya hai:

### Layer 1: Razorpay Server-to-Server Verification (Frontend Spoofing Impossible)
Frontend se user koi bhi fake email nahi bhej sakta. 
Jab payment complete hoti hai, hamara backend [`/api/verify-payment`](file:///e:/AgentsPlateform/src/app/api/verify-payment/route.ts) Razorpay ke official API se direct baat karta hai:
```typescript
// Fetch real payment entity from Razorpay Server
const paymentData = await razorpay.payments.fetch(razorpay_payment_id);
const verifiedEmail = paymentData.email.trim().toLowerCase();
```
Jo email user ne Razorpay checkout card/UPI enter karte waqt use kiya tha, wahi official email server par register hota hai.

### Layer 2: License DB Locking
Verified email ke sath plan record store hota hai:
```json
{
  "email": "user@example.com",
  "plan": "monthly",
  "licenseKey": "AGK-ABCD-1234-EFGH",
  "active": true,
  "createdAt": "2026-09-08T..."
}
```

### Layer 3: Desktop App Authentication Check
Jab user desktop software open karta hai aur login karta hai:
1. Software call karta hai:
   ```
   GET https://agentskaro.co.in/api/check-license?email=user@example.com
   ```
2. Server check karta hai:
   - Agar software me login kiya hua email **wahi email hai jisne pay kiya tha** ➔ **PRO SUBSCRIPTION ACTIVE** (Unlimited applications, deep crawl, AI outreach enable).
   - Agar kisi dusre email se login karne ki koshish ki gayi ➔ **FREE TIER LIMIT (10 apps limit & locked)**.

---

## Step 4: Render Par Website Deploy Karna & Environment Variables

Website ko Render par live karne ke steps:

### Step 4.1: Render Dashboard Setup
1. [dashboard.render.com](https://dashboard.render.com) par login karein.
2. Click karein **New +** ➔ **Web Service**.
3. **Connect a repository** me select karein: `yubisaki-yat/Agentskaro`.
4. Configure karein:
   - **Name**: `agentskaro-website`
   - **Region**: `Singapore` (Fastest for India)
   - **Branch**: `main`
   - **Root Directory**: *(Khali chhod dein)*
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

### Step 4.2: Environment Variables Add Karein
Render me **Environment** tab me ja kar ye variables add karein:

| Variable Name | Value | Purpose |
| :--- | :--- | :--- |
| `RAZORPAY_KEY_ID` | `rzp_live_T9QskI09LEMA1s` | Razorpay Live API Key |
| `RAZORPAY_KEY_SECRET` | `GPh145wkHXie1uxltRv9KK0W` | Razorpay Live Secret |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | `rzp_live_T9QskI09LEMA1s` | Frontend checkout popup ke liye |
| `RAZORPAY_WEBHOOK_SECRET` | `AgKaro@Webhook2026!` | Webhook signature verification |
| `NEXT_PUBLIC_APP_URL` | `https://agentskaro.co.in` | Live production website URL |
| `NEXT_PUBLIC_EXE_URL` | *(GitHub Release ka direct download link jo Step 1 me mila)* | Auto-download installer link |
| `SMTP_HOST` | `smtp.gmail.com` | Email delivery host |
| `SMTP_PORT` | `587` | TLS Port |
| `SMTP_USER` | `agentskaro.noreply@gmail.com` | Notification sender email |
| `SMTP_PASS` | `hayxeszdrluajzkk` | Google App Password |

5. Click karein **Deploy Web Service**.
6. 2–3 minutes me build complete hokar service live ho jayegi (e.g. `agentskaro-website.onrender.com`).

---

## Step 5: GoDaddy Domain (agentskaro.co.in) Connect Karna

Aapne pehle purane project par domain joda tha, ab use naye project par switch karna hai:

### Step 5.1: Purane Render Project se Domain Hatayein
1. Render Dashboard par jayein.
2. Agar aapka koi purana web service chal raha hai jisme `agentskaro.co.in` add tha:
   - Us purani service ke **Settings** ➔ **Custom Domains** me jayein.
   - `agentskaro.co.in` aur `www.agentskaro.co.in` ke samne **Delete / Remove** icon par click karein.

### Step 5.2: Naye Render Web Service me Domain Add Karein
1. Apne naye `agentskaro-website` par jayein.
2. **Settings** ➔ **Custom Domains** section me scroll karein.
3. Click karein **Add Custom Domain**:
   - Type karein: `agentskaro.co.in` ➔ Click **Save**.
4. Dobara click karein **Add Custom Domain**:
   - Type karein: `www.agentskaro.co.in` ➔ Click **Save**.
5. Render aapko do DNS records dikhayega:
   - Root domain ke liye: **IP Address** (usually `216.24.57.1`)
   - www sub-domain ke liye: **CNAME** (e.g. `agentskaro-website.onrender.com`)

### Step 5.3: GoDaddy DNS Management me Update Karein
1. [godaddy.com](https://godaddy.com) par login karein.
2. Top right me apne profile name par click karke **"My Products"** par jayein.
3. `agentskaro.co.in` ke samne **DNS** button par click karein.
4. **DNS Records** list me ye 2 records edit/add karein:

#### 1. A Record (Apex Domain `@` ke liye):
- **Type**: `A`
- **Name**: `@`
- **Value**: `216.24.57.1` *(Render ke page par jo IP dikhe)*
- **TTL**: `1/2 Hour` ya `600 seconds`
*(Agar pehle se koi A record `@` par bana ho to use Edit karke ye IP daal dein)*.

#### 2. CNAME Record (`www` ke liye):
- **Type**: `CNAME`
- **Name**: `www`
- **Value**: `agentskaro-website.onrender.com` *(Aapka Render subdomain)*
- **TTL**: `1/2 Hour`
*(Agar pehle se koi CNAME `www` par ho to use Edit karein)*.

5. Save kar dein.
6. Render dashboard par **"Verify"** button par click karein. 10-15 minute ke andar SSL automatically generate ho jayega aur `https://agentskaro.co.in` par padlock (🔒 Secure) ke sath website open ho jayegi!

---

## Step 6: Razorpay Dashboard Settings (Webhook & Live Mode)

Ye step ensure karta hai ki agar user ka browser window payment ke waqt crash bhi ho jaye, tab bhi backend me user ka account automatically Pro me upgrade ho jaye.

1. [dashboard.razorpay.com](https://dashboard.razorpay.com) par login karein.
2. Ensure karein ki top bar me **LIVE MODE** toggle on ho.
3. Left menu me **Settings** ➔ **Webhooks** tab par jayein.
4. Click karein **Add New Webhook**:
   - **Webhook URL**: `https://agentskaro.co.in/api/razorpay-webhook`
   - **Secret**: `AgKaro@Webhook2026!`
   - **Alert Email**: `agentskaro.noreply@gmail.com`
   - **Active Events**: Check karein ye do events:
     - ✅ `payment.captured`
     - ✅ `order.paid`
5. Click karein **Create Webhook**.

Ab har valid payment par Razorpay seedha aapke server ko secure update bhej dega.

---

## 📋 Final Checklist (Aapko Kya-Kya Karna Hai)

| No. | Kaam | Kahan Karna Hai | Status |
| :---: | :--- | :--- | :---: |
| 1 | `AgentsKaro-Setup.exe` file ko GitHub Release me upload karke download link copy karna | [GitHub Releases](https://github.com/yubisaki-yat/Agentskaro/releases) | 🔲 Pending (Aapko karna hai) |
| 2 | Render par purani service se domain delete karna | [Render Dashboard](https://dashboard.render.com) | 🔲 Pending (Aapko karna hai) |
| 3 | Render par nayi Web Service banakar Environment Variables paste karna | [Render Dashboard](https://dashboard.render.com) | 🔲 Pending (Aapko karna hai) |
| 4 | GoDaddy me A record aur CNAME record update karna | [GoDaddy DNS](https://godaddy.com) | 🔲 Pending (Aapko karna hai) |
| 5 | Razorpay Webhook URL set karna | [Razorpay Dashboard](https://dashboard.razorpay.com) | 🔲 Pending (Aapko karna hai) |
| 6 | Website code: Day theme default, uncompressed fonts, instant download, Razorpay live checkout | `e:\AgentsPlateform` | ✅ **DONE & PUSHED TO GITHUB** |

---

*Sabhi technical code updates GitHub repo [yubisaki-yat/Agentskaro](https://github.com/yubisaki-yat/Agentskaro.git) par push ho chuke hain. Aap upar diye steps follow karke deployment aur release link connect kar sakte hain!*
