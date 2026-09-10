import { NextResponse } from "next/server";
import { getLicenseByEmail, saveLicense } from "@/lib/licenses";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const rawEmail = searchParams.get("email");
    const rawKey = searchParams.get("key");

    if (!rawEmail && !rawKey) {
      return NextResponse.json(
        { error: "Either 'email' or 'key' query parameter is required" },
        { status: 400 }
      );
    }

    const cleanEmail = (rawEmail || "").trim().toLowerCase();
    const cleanKey = (rawKey || "").trim().toUpperCase();

    // 1. Check local JSON database
    let license = cleanEmail ? getLicenseByEmail(cleanEmail) : null;

    // 2. If not found in local JSON, query Razorpay Live Payments directly (Fail-safe for cloud ephemeral storage)
    if (!license && cleanEmail && process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
      try {
        const auth = Buffer.from(
          `${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`
        ).toString("base64");

        const rzpRes = await fetch("https://api.razorpay.com/v1/payments?count=100", {
          headers: { Authorization: `Basic ${auth}` },
          signal: AbortSignal.timeout(4000),
        });

        if (rzpRes.ok) {
          const rzpData = await rzpRes.json();
          const items = rzpData.items || [];

          // Find captured payment matching email
          const match = items.find((p: any) => {
            const pEmail = (p.email || "").trim().toLowerCase();
            return (
              p.status === "captured" &&
              (pEmail === cleanEmail || (cleanEmail && pEmail.includes(cleanEmail)))
            );
          });

          if (match) {
            const activatedAt = new Date(match.created_at * 1000);
            const expiresAt = new Date(activatedAt);
            expiresAt.setFullYear(expiresAt.getFullYear() + 1); // 1 year access

            const genKey = `AGK-${match.id.slice(-8).toUpperCase()}-PRO`;

            license = {
              email: cleanEmail,
              planId: "pro",
              planName: "Pro Access",
              licenseKey: genKey,
              paymentId: match.id,
              orderId: match.order_id || "",
              amount: match.amount,
              activatedAt: activatedAt.toISOString(),
              expiresAt: expiresAt.toISOString(),
              status: "active",
            };

            // Save to memory/disk
            saveLicense(license);
          }
        }
      } catch (rzpErr) {
        console.warn("Razorpay fallback query error in check-license:", rzpErr);
      }
    }

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
