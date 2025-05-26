import crypto from 'crypto';

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { orderId, razorpayPaymentId, razorpaySignature } = body;
    
    // Verify the payment signature
    const text = orderId + "|" + razorpayPaymentId;
    const secret = process.env.RAZORPAY_KEY_SECRET || process.env.RAZORPAY_LIVE_KEY_SECRET || '';
    
    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(text)
      .digest("hex");
    
    const isAuthentic = generatedSignature === razorpaySignature;
    
    if (isAuthentic) {
      return NextResponse.json({ 
        success: true,
        message: "Payment verified successfully" 
      });
    } else {
      return NextResponse.json({ 
        success: false,
        message: "Payment verification failed" 
      }, { status: 400 });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);

    return NextResponse.json({ 
      success: false,
      message: "Server error during payment verification",
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}