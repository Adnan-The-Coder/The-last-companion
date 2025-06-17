import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_LIVE_KEY_ID || 'rzp_test_lastcompanion123',
  key_secret: process.env.RAZORPAY_LIVE_KEY_SECRET || 'razorpayTestSecretKey123456'
});

export async function POST(req: Request) {
  const { amount } = await req.json();

  const order = await razorpay.orders.create({
    amount,
    currency: "INR",
  });

  return NextResponse.json(order, {
    headers: {
      'Access-Control-Allow-Origin': 'https://the-last-companion.vercel.app/', // or restrict to your frontend domain
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}
