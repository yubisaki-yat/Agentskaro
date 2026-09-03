import { NextRequest, NextResponse } from "next/server";
import { saveSubscriber, markEmailSent } from "@/lib/subscribers";
import { sendWelcomeEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, source } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address format" },
        { status: 400 }
      );
    }

    // 1. Save to persistent subscriber database
    const { subscriber, isNew } = saveSubscriber(email, source || "download_modal");

    // 2. Send professional welcome & product updates email from agentskaro.noreply@gmail.com
    let emailSent = false;
    let emailError: string | null = null;

    try {
      await sendWelcomeEmail(email.trim());
      markEmailSent(email.trim());
      emailSent = true;
    } catch (err: any) {
      console.error("Failed to send welcome email:", err);
      emailError = err?.message || "Email dispatch failed";
    }

    return NextResponse.json({
      success: true,
      message: emailSent
        ? "Welcome email sent! Check your inbox."
        : "Email subscribed successfully! (Check inbox shortly)",
      emailSent,
      emailError,
      isNew,
      subscriber: {
        email: subscriber.email,
        subscribedAt: subscriber.subscribedAt,
      },
    });
  } catch (error: any) {
    console.error("API /api/subscribe error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error?.message },
      { status: 500 }
    );
  }
}
