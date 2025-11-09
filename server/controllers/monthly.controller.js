import cron from 'node-cron';
// import nodemailer from 'nodemailer';
 // Adjust the path as needed
 import { Resend } from 'resend';
 import dotenv from 'dotenv';
 
 dotenv.config();
 

 
import { Subscribe } from '../models/subscribe.model.js';
 const resend = new Resend(process.env.RESEND_API_KEY);
// 🔐 Setup nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "join.adiyogifoundation@gmail.com", // your Gmail
//     pass: "rajhtxxdaqccsacc" // your App Password
//   },
// });

// 📅 Schedule: Every 1st of the month at 10:00 AM
cron.schedule('0 10 1 * *', async () => {
  console.log("📩 Sending monthly Adiyogi reminder emails...");

  try {
    const subscribers = await Subscribe.find();

    for (const sub of subscribers) {
   
const mail = {
  from: 'Adiyogi Foundation <noreply@adiyogifoundation.org.in>',
  to: sub.email,
  subject: 'Monthly Insights from Adiyogi Foundation',
  html: `
    <div style="background-color: #f4f4f4; font-family: 'Segoe UI', Tahoma, sans-serif; color: #333; padding: 24px;">
      <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 24px 28px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">

        <h2 style="color: #2c3e50;">Namaste,</h2>

        <p style="font-size: 15px; line-height: 1.6;">
          Thank you for being a valued member of the Adiyogi Foundation. We deeply appreciate your continued support and presence in our journey.
        </p>

        <p style="font-size: 15px; line-height: 1.6;">
          As part of our monthly update, we encourage you to stay connected, discover new insights, and take part in events and initiatives aimed at driving transformation and awareness in society.
        </p>

        <div style="margin: 24px 0; text-align: center;">
          <a href="https://adiyogifoundation.org.in/"
             style="background-color: #C41E3A; color: #ffffff; padding: 12px 28px; border-radius: 4px; text-decoration: none; font-weight: 600; font-size: 15px;">
            Visit Our Website
          </a>
        </div>

        <p style="font-size: 14px; color: #555;">
          Whether through reading, meditating, volunteering, or spreading awareness — your efforts make a difference.
        </p>

        <p style="margin-top: 30px; font-size: 14px; color: #555;">
          With gratitude,<br/>
          <strong>Team Adiyogi Foundation</strong>
        </p>

        <p style="margin-top: 18px; font-size: 14px; color: #555;">
          📩 Reach us anytime at: 
          <a href="mailto:social.adiyogifoundation@gmail.com" style="color: #C41E3A; text-decoration: none;">
            social.adiyogifoundation@gmail.com
          </a>
        </p>

        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e0e0e0;" />

        <p style="font-weight: 600; color: #34495e; font-size: 14px;">Stay connected with us:</p>

        <div style="margin-top: 14px;">
          <a href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg" target="_blank" style="margin-right: 12px;">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" width="26" alt="Instagram" style="filter: grayscale(1);" />
          </a>
          <a href="https://www.facebook.com/share/19wQKAWb1b/" target="_blank" style="margin-right: 12px;">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" width="26" alt="Facebook" style="filter: grayscale(1);" />
          </a>
          <a href="https://youtube.com/@adiyogifoundation.b?si=hHJk8UzEA1spKAx3" target="_blank" style="margin-right: 12px;">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" width="26" alt="YouTube" style="filter: grayscale(1);" />
          </a>
          <a href="https://www.linkedin.com/company/adiyogi-foundation" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" width="26" alt="LinkedIn" style="filter: grayscale(1);" />
          </a>
        </div>

      </div>
    </div>
  `,
};

      await resend.emails.send(mail);
      console.log(`📧 Monthly mail sent to ${sub.email}`);
    }

  } catch (err) {
    console.error("❌ Error sending Adiyogi monthly emails:", err);
  }
});
