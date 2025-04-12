// src/app/api/sendEmail/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    const { email, message } = await request.json();

    // Create a transporter
    let transporter = nodemailer.createTransport({
        host: 'hausbetreung.at', // Replace with your SMTP host
    port: 465, // Common ports are 465 (secure) and 587 (non-secure)
    secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Email options 
    let mailOptions = {
        from: email,
        to: 'info@hausbetreung.at',
        subject: 'Novo vprašanje',
        text: message
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
}