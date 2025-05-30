/* eslint-disable import/no-unresolved */
import { NextRequest, NextResponse } from 'next/server';

import { sendEmail } from '@/helpers/mailer';

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();

    // Format date and time for email
    const formattedDate = new Date(bookingData.booking_date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Prepare email data
    const emailData = {
      email: bookingData.customer_email,
      emailType: "SERVICE_BOOKING" as const,
      username: bookingData.customer_name,
      data: {
        customer_name: bookingData.customer_name,
        customer_phone: bookingData.customer_phone,
        customer_email: bookingData.customer_email,
        deceased_name: bookingData.deceased_name,
        service_type: bookingData.service_type,
        service_name: bookingData.service_name,
        service_description: bookingData.service_description,
        service_price: bookingData.service_price,
        booking_date: formattedDate,
        booking_time: bookingData.booking_time,
        graveyard_name: bookingData.graveyard_name,
        graveyard_address: bookingData.graveyard_address,
        additional_notes: bookingData.additional_notes,
        booking_status: bookingData.booking_status
      }
    };

    // Send the email
    const mailResponse = await sendEmail(emailData);

    return NextResponse.json(
      { message: 'Booking confirmation email sent successfully', mailResponse },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending booking confirmation email:', error);

    return NextResponse.json(
      { error: 'Failed to send booking confirmation email' },
      { status: 500 }
    );
  }
}