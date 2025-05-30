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
          .replace("{user}", username)
          .replace("{serviceName}", data?.serviceName || '')
          .replace("{date}", data?.date || '')
          .replace("{time}", data?.time || '')
          .replace("{location}", data?.location || '');
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