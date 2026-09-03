import { NextRequest, NextResponse } from "next/server";
import { getAllSubscribers } from "@/lib/subscribers";
import { getTransporter } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { subject, headline, message, ctaText, ctaUrl, secretKey } = body;

    // Simple security guard
    const ADMIN_SECRET = process.env.ADMIN_BROADCAST_SECRET || "agentskaro_admin_2025";
    if (secretKey !== ADMIN_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!subject || !message) {
      return NextResponse.json(
        { error: "Subject and message are required" },
        { status: 400 }
      );
    }

    const subscribers = getAllSubscribers().filter((s) => s.status === "active");
    if (subscribers.length === 0) {
      return NextResponse.json({ message: "No active subscribers found", sentCount: 0 });
    }

    const transporter = getTransporter();
    const from = process.env.FROM_EMAIL || `"AgentsKaro Announcements" <agentskaro.noreply@gmail.com>`;

    let sentCount = 0;
    const errors: string[] = [];

    for (const sub of subscribers) {
      try {
        await transporter.sendMail({
          from,
          to: sub.email,
          subject: subject,
          html: `
            <div style="background-color: #05070e; padding: 30px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; color: #cbd5e1;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #0c1222; border-radius: 20px; border: 1px solid rgba(0, 242, 254, 0.2); padding: 32px;">
                <div style="color: #00f2fe; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px;">AgentsKaro Official Announcement</div>
                <h2 style="color: #ffffff; margin-top: 0; font-size: 24px;">${headline || subject}</h2>
                <div style="font-size: 14px; line-height: 1.6; color: #e2e8f0; margin: 20px 0;">${message}</div>
                ${
                  ctaUrl
                    ? `<a href="${ctaUrl}" style="display: inline-block; background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%); color: #000; font-weight: bold; padding: 14px 28px; border-radius: 12px; text-decoration: none; margin: 16px 0;">${ctaText || "Check It Out"}</a>`
                    : ""
                }
                <hr style="border: none; border-top: 1px solid rgba(255, 255, 255, 0.08); margin: 24px 0;">
                <p style="font-size: 11px; color: #64748b; margin: 0;">
                  Sent from agentskaro.noreply@gmail.com • A Product by Yubisaki Assistive Technology
                </p>
              </div>
            </div>
          `,
        });
        sentCount++;
      } catch (err: any) {
        errors.push(`${sub.email}: ${err?.message}`);
      }
    }

    return NextResponse.json({
      success: true,
      totalSubscribers: subscribers.length,
      sentCount,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error: any) {
    console.error("Broadcast error:", error);
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}
