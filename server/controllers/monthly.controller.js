import cron from 'node-cron';
import nodemailer from 'nodemailer';
 // Adjust the path as needed
import { Subscribe } from '../models/subscribe.model.js';

// 🔐 Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "join.adiyogifoundation@gmail.com", // your Gmail
    pass: "rajhtxxdaqccsacc" // your App Password
  },
});

// 📅 Schedule: Every 1st of the month at 10:00 AM
cron.schedule('0 10 1 * *', async () => {
  console.log("📩 Sending monthly Adiyogi reminder emails...");

  try {
    const subscribers = await Subscribe.find();

    for (const sub of subscribers) {
      const mail = {
        from: 'join.adiyogifoundation@gmail.com',
        to: sub.email,
        subject: '🧘 Monthly Insights from Adiyogi Foundation',
        html: `
          <div style="background-color: #f4f4f4; padding: 25px; font-family: Arial, sans-serif;">
            <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px 30px; border-radius: 8px; box-shadow: 0 0 8px rgba(0,0,0,0.05);">
              <h3 style="color: #2c3e50;">Namaste 🙏,</h3>

              <p style="font-size: 15px; color: #333;">
                Thank you for being part of the Adiyogi Foundation. Your presence in this journey means a lot to us.
              </p>

              <p style="font-size: 15px; color: #333;">
                Here's your monthly reminder to stay connected, explore new insights, and participate in our events and initiatives that aim to bring transformation and awareness to society.
              </p>

              <p style="margin: 20px 0;">
                <a href="https://adiyogifoundation.org.in" 
                   style="background-color: #C41E3A; color: white; padding: 10px 20px; text-decoration: none; font-weight: bold; border-radius: 5px;">
                  🌐 Visit Our Website
                </a>
              </p>

              <p style="font-size: 14px; color: #777; margin-top: 25px;">
                Whether it’s through reading, meditating, volunteering, or simply spreading awareness — every action counts.
              </p>

              <p style="margin-top: 30px; font-size: 14px; color: #555;">
                With gratitude,<br/>
                <strong>Team Adiyogi Foundation</strong>
              </p>

              <p style="margin-top: 20px; font-size: 14px; color: #555;">
                📧 Reach us anytime at: 
                <a href="mailto:social.adiyogifoundation@gmail.com" style="color: #C41E3A; text-decoration: none;">
                  social.adiyogifoundation@gmail.com
                </a>
              </p>

              <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

              <p style="font-weight: bold; color: #34495e;">Stay connected with us:</p>

              <div style="margin-top: 15px;">
                <a href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg" target="_blank" style="text-decoration: none; margin-right: 12px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="28" height="28" style="display: inline-block;" />
                </a>
                <a href="https://www.facebook.com/share/19wQKAWb1b/" target="_blank" style="text-decoration: none; margin-right: 12px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="28" height="28" style="display: inline-block;" />
                </a>
                <a href="https://youtube.com/@adiyogifoundation.b?si=hHJk8UzEA1spKAx3" target="_blank" style="text-decoration: none; margin-right: 12px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="28" height="28" style="display: inline-block;" />
                </a>
                <a href="https://www.linkedin.com/company/adiyogi-foundation" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="28" height="28" style="display: inline-block;" />
                </a>
              </div>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mail);
      console.log(`📧 Monthly mail sent to ${sub.email}`);
    }

  } catch (err) {
    console.error("❌ Error sending Adiyogi monthly emails:", err);
  }
});
