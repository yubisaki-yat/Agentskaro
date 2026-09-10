import { NextResponse } from "next/server";
import crypto from "crypto";
import { getTransporter } from "@/lib/email";
import { saveLicense } from "@/lib/licenses";

export async function POST(req: Request) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      planId,
      planName,
      userEmail,
    } = await req.json();

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keySecret) {
      return NextResponse.json(
        { error: "Server secret missing" },
        { status: 500 }
      );
    }

    // 1. Verify HMAC SHA256 signature
    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return NextResponse.json(
        { error: "Payment verification failed: invalid signature" },
        { status: 400 }
      );
    }

    // 2. Query Razorpay API to get the EXACT email entered by user during payment
    let verifiedEmail = (userEmail || "").trim().toLowerCase();
    let paymentAmount = 0;

    if (keyId && keySecret) {
      try {
        const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
        const payRes = await fetch(`https://api.razorpay.com/v1/payments/${razorpay_payment_id}`, {
          headers: { Authorization: `Basic ${auth}` },
          signal: AbortSignal.timeout(3500),
        });
        if (payRes.ok) {
          const payData = await payRes.json();
          if (payData.email) {
            verifiedEmail = payData.email.trim().toLowerCase();
          }
          if (payData.amount) {
            paymentAmount = payData.amount;
          }
        }
      } catch (pErr) {
        console.warn("Razorpay payment query skipped or timed out:", pErr);
      }
    }

    // 3. Generate Official License Key
    const rawCode = crypto.randomBytes(6).toString("hex").toUpperCase();
    const licenseKey = `AGK-${rawCode.slice(0, 4)}-${rawCode.slice(4, 8)}-${rawCode.slice(8, 12)}`;

    // 4. Calculate Expiry Date
    const activatedAt = new Date();
    const expiresAt = new Date(activatedAt);
    if (planId === "monthly") {
      expiresAt.setDate(expiresAt.getDate() + 30);
    } else if (planId === "yearly") {
      expiresAt.setDate(expiresAt.getDate() + 365);
    } else {
      expiresAt.setFullYear(expiresAt.getFullYear() + 100); // Lifetime
    }

    // 5. Persist Subscription Activation bound to user's verified email
    if (verifiedEmail) {
      saveLicense({
        email: verifiedEmail,
        planId: planId || "yearly",
        planName: planName || "Yearly Access",
        licenseKey,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        amount: paymentAmount,
        activatedAt: activatedAt.toISOString(),
        expiresAt: expiresAt.toISOString(),
        status: "active",
      });

      // 6. Send official license activation confirmation email (non-blocking)
      (async () => {
        try {
          const transporter = getTransporter();
          const fromEmail = process.env.FROM_EMAIL || `"AgentsKaro by Yubisaki" <${process.env.SMTP_USER}>`;
          await transporter.sendMail({
            from: fromEmail,
            to: verifiedEmail,
            subject: `🎉 Subscription Activated (${planName}) — AgentsKaro`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; background: #0b1120; color: #ffffff; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);">
                <div style="text-align: center; margin-bottom: 24px;">
                  <img src="https://agentskaro.co.in/logo.png" alt="AgentsKaro" width="56" height="56" style="border-radius: 14px; border: 1px solid rgba(14,165,233,0.4);" />
                  <h2 style="color: #38bdf8; margin: 12px 0 4px 0; font-size: 22px;">Payment Successful & Plan Activated! 🎉</h2>
                  <p style="color: #94a3b8; font-size: 13px; margin: 0;">AgentsKaro Desktop Automation Suite</p>
                </div>

                <div style="background: rgba(14,165,233,0.08); border: 1px solid rgba(14,165,233,0.25); border-radius: 14px; padding: 20px; margin: 20px 0;">
                  <p style="margin: 0 0 10px 0; font-size: 13px; color: #cbd5e1;">Your subscription is now active for this registered email:</p>
                  <div style="font-family: monospace; font-size: 16px; font-weight: bold; color: #38bdf8; margin-bottom: 14px;">${verifiedEmail}</div>
                  
                  <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 12px 0;" />

                  <div style="font-size: 12px; color: #94a3b8; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">Your Official License Key</div>
                  <div style="font-family: monospace; font-size: 22px; font-weight: bold; color: #34d399; letter-spacing: 2px;">${licenseKey}</div>
                  <div style="font-size: 11px; color: #94a3b8; margin-top: 6px;">Plan: <strong>${planName}</strong> • Valid until: <strong>${expiresAt.toDateString()}</strong></div>
                </div>

                <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 16px; margin-bottom: 24px; font-size: 13px; color: #94a3b8; line-height: 1.6;">
                  <strong style="color: #ffffff; display: block; margin-bottom: 6px;">How to start applying:</strong>
                  1. Open AgentsKaro Desktop on your PC (or download it from the link below).<br />
                  2. Log in using your email: <code>${verifiedEmail}</code>.<br />
                  3. Your ${planName} will automatically be active and ready!
                </div>

                <div style="text-align: center;">
                  <a href="${process.env.NEXT_PUBLIC_EXE_URL || 'https://github.com/yubisaki-yat/Agentskaro/releases/download/v3.1.0/AgentsKaro.Setup.3.1.0.exe'}" style="background: #0ea5e9; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 10px; font-weight: bold; font-size: 14px; display: inline-block;">Download AgentsKaro Desktop (.exe)</a>
                </div>

                <p style="color: #64748b; font-size: 11px; text-align: center; margin-top: 24px;">Payment Reference: ${razorpay_payment_id} • AgentsKaro by Yubisaki Assistive Technology</p>
              </div>
            `,
          });
        } catch (mailErr) {
          console.warn("Could not dispatch confirmation email:", mailErr);
        }
      })();
    }

    return NextResponse.json({
      success: true,
      verifiedEmail,
      planName,
      licenseKey,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      downloadUrl: process.env.NEXT_PUBLIC_EXE_URL || "https://github.com/yubisaki-yat/Agentskaro/releases/download/v3.1.0/AgentsKaro.Setup.3.1.0.exe",
    });
  } catch (error) {
    console.error("Error in verify-payment route:", error);
    return NextResponse.json(
      { error: "Internal server error occurred" },
      { status: 500 }
    );
  }
}
