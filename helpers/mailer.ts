import nodemailer from "nodemailer";
import { NextResponse } from "next/server.js";

import { EMAIL_TEMPLATES } from "./emailTemplates";

type EmailData = {
  email: string;
  emailType: 'WELCOME' | 'SERVICE_BOOKING' | 'FUNDRAISER_CONFIRMATION';
  username?: string;
  data?: {
    serviceName?: string;
    date?: string;
    time?: string;
    location?: string;
    amount?: number;
    transactionId?: string;
    orderId?: string;

    customer_name?: string;
    customer_phone?: string;
    deceased_name?: string;
    service_type?: string;
    service_name?: string;
    service_description?: string;
    service_price?: string;
    booking_date?: string;
    booking_time?: string;
    graveyard_name?: string;
    graveyard_address?: string;
    additional_notes?: string;
    booking_status?: string;
    created_at?: string;
  };
};

export const sendEmail = async ({ email, emailType, username = "user", data }: EmailData) => {
  try {
    let emailSubject = '';
    let emailHtml = '';

    switch (emailType) {
      case 'WELCOME':
        emailSubject = "Welcome to The Last Companion";
        emailHtml = EMAIL_TEMPLATES.WELCOME.replace("{user}", username);
        break;

      case 'SERVICE_BOOKING':
        emailSubject = "Booking Confirmation - The Last Companion";
        emailHtml = EMAIL_TEMPLATES.SERVICE_BOOKING
            .replace("{customer_name}", data?.customer_name || 'Valued Customer')
            .replace("{customer_phone}", data?.customer_phone || '')
            .replace("{customer_email}", email)
            .replace("{deceased_name}", data?.deceased_name || '')
            .replace("{service_type}", data?.service_type || '')
            .replace("{service_name}", data?.service_name || '')
            .replace("{service_description}", data?.service_description || '')
            .replace("{service_price}", data?.service_price || '')
            .replace("{booking_date}", data?.booking_date || '')
            .replace("{booking_time}", data?.booking_time || '')
            .replace("{graveyard_name}", data?.graveyard_name || '')
            .replace("{graveyard_address}", data?.graveyard_address || '')
            .replace("{booking_status}", data?.booking_status || 'Pending')
            .replace("{created_at}", data?.created_at || new Date().toISOString())
            .replace("{additional_notes_section}", data?.additional_notes ? 
            `<div style="background-color: #F5F5F7; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h3 style="color: #EF8354; margin-top: 0;">Additional Notes:</h3>
                <p>${data.additional_notes}</p>
            </div>` : '');
        break;

      case 'FUNDRAISER_CONFIRMATION':
        emailSubject = "Thank You for Your Contribution - The Last Companion";
        emailHtml = EMAIL_TEMPLATES.FUNDRAISER_CONFIRMATION
          .replace("{user}", username)
          .replace("{amount}", data?.amount?.toString() || '')
          .replace("{transactionId}", data?.transactionId || '')
          .replace("{date}", data?.date || new Date().toLocaleDateString());
        break;

      default:
        throw new Error("Invalid email type");
    }

    const transport = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    });

    const mailOptions = {
      from: '"The Last Companion" <hello@lastcompanion.com>',
      to: email,
      subject: emailSubject,
      html: emailHtml,
    };

    const mailResponse = await transport.sendMail(mailOptions);

    return mailResponse;
  } catch (error: any) {
    console.error('Email sending failed:', error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};