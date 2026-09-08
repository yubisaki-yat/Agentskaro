import { NextResponse } from "next/server";
import crypto from "crypto";
import { getTransporter } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      planName,
      userEmail,
    } = await req.json();

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keySecret) {
      return NextResponse.json(
        { error: "Server secret missing" },
        { status: 500 }
      );
    }

    // Verify HMAC SHA256 signature
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

    // Generate a license key
    const rawCode = crypto.randomBytes(6).toString("hex").toUpperCase();
    const licenseKey = `AGK-${rawCode.slice(0, 4)}-${rawCode.slice(4, 8)}-${rawCode.slice(8, 12)}`;

    // If user provided an email, send them their license key
    if (userEmail) {
      try {
        const transporter = getTransporter();
        const fromEmail = process.env.FROM_EMAIL || `"AgentsKaro by Yubisaki" <${process.env.SMTP_USER}>`;
        await transporter.sendMail({
          from: fromEmail,
          to: userEmail,
          subject: `Your ${planName} License Key — AgentsKaro`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0b1120; color: #ffffff; border-radius: 16px;">
              <h2 style="color: #38bdf8; margin-bottom: 8px;">Payment Successful! 🎉</h2>
              <p style="color: #94a3b8; font-size: 14px;">Thank you for activating your <strong>${planName}</strong> on AgentsKaro.</p>
              
              <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 20px 0;">
                <span style="color: #94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Your Official License Key</span>
                <span style="font-family: monospace; font-size: 20px; font-weight: bold; color: #34d399; letter-spacing: 2px;">${licenseKey}</span>
              </div>

              <p style="color: #cbd5e1; font-size: 13px;">Payment Reference: <code>${razorpay_payment_id}</code></p>
              <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">Enter this key inside AgentsKaro Desktop v2.0 to unlock unlimited autonomous applications.</p>
              <div style="margin-top: 20px;">
                <a href="https://agentskaro.co.in" style="background: #0ea5e9; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; font-size: 13px; display: inline-block;">Open AgentsKaro</a>
              </div>
            </div>
          `,
        });
      } catch (mailErr) {
        console.warn("Could not dispatch license email:", mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      licenseKey,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });
  } catch (error) {
    console.error("Error in verify-payment route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
