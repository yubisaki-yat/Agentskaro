import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { planId } = body;

    const PLAN_DETAILS: Record<string, { name: string; amount: number }> = {
      monthly: { name: "AgentsKaro Monthly License", amount: 2900 },
      yearly: { name: "AgentsKaro Yearly License", amount: 39900 },
      lifetime: { name: "AgentsKaro Lifetime License", amount: 79900 },
    };

    const selected = PLAN_DETAILS[planId] || PLAN_DETAILS["yearly"];

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: "Razorpay credentials not configured on server" },
        { status: 500 }
      );
    }

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const orderRes = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        amount: selected.amount,
        currency: "INR",
        receipt: `ak_${planId}_${Date.now()}`,
        notes: {
          plan: planId,
          planName: selected.name,
        },
      }),
    });

    const orderData = await orderRes.json();

    if (!orderRes.ok) {
      console.error("Razorpay order creation error:", orderData);
      return NextResponse.json(
        { error: orderData.error?.description || "Failed to create payment order" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      orderId: orderData.id,
      amount: orderData.amount,
      currency: orderData.currency,
      planName: selected.name,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || keyId,
    });
  } catch (error) {
    console.error("Error in create-order route:", error);
    return NextResponse.json(
      { error: "Internal server error occurred" },
      { status: 500 }
    );
  }
}
