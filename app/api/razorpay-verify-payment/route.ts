import crypto from 'crypto';

import { NextResponse } from 'next/server';

import { sendEmail } from '@/helpers/mailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { orderId, razorpayPaymentId, razorpaySignature, email, name, amount, isAnonymous } = body;

    const text = orderId + "|" + razorpayPaymentId;
    const secret = process.env.RAZORPAY_KEY_SECRET || process.env.RAZORPAY_LIVE_KEY_SECRET || 'razorpayTestSecretKey123456';

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(text)
      .digest("hex");

    const isAuthentic = generatedSignature === razorpaySignature;

    if (!isAuthentic) {
      return NextResponse.json({
        success: false,
        message: "Payment verification failed"
      }, {
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': 'https://the-last-companion.vercel.app/',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    await sendEmail({
      email,
      emailType: 'FUNDRAISER_CONFIRMATION',
      username: isAnonymous ? "Anonymous Donor" : name,
      data: {
        amount,
        transactionId: razorpayPaymentId,
        orderId,
        date: new Date().toLocaleDateString(),
      }
    });

    return NextResponse.json({
      success: true,
      message: "Payment verified and email sent"
    }, {
      headers: {
        'Access-Control-Allow-Origin': 'https://the-last-companion.vercel.app/',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  } catch (error: any) {
    console.error("Error verifying payment:", error);

    return NextResponse.json({
      success: false,
      message: "Server error during payment verification",
      error: error.message
    }, {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': 'https://the-last-companion.vercel.app/',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  }
}
