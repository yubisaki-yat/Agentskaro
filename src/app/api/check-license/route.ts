import { NextResponse } from "next/server";
import { getLicenseByEmail } from "@/lib/licenses";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email query param required" }, { status: 400 });
    }

    const license = getLicenseByEmail(email);

    if (!license) {
      return NextResponse.json({
        active: false,
        message: "No active subscription found for this email address",
      });
    }

    // Check expiry
    const isExpired = new Date(license.expiresAt).getTime() < Date.now();

    if (isExpired) {
      return NextResponse.json({
        active: false,
        expired: true,
        message: "Subscription has expired",
      });
    }

    return NextResponse.json({
      active: true,
      email: license.email,
      plan: license.planName,
      planId: license.planId,
      licenseKey: license.licenseKey,
      expiresAt: license.expiresAt,
    });
  } catch (error) {
    console.error("Error in check-license route:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
