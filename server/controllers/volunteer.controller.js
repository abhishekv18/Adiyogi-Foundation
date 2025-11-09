
// import nodemailer from "nodemailer";
// import { Resend } from 'resend';
// const resend = new Resend("re_4aPxRW56_CgrKxZW39njHRb6XEAJ51LfA");
import { Volunteer } from "../models/volunteer.model.js";
export const addVolunteer = async (req, res) => {
  try {
    const { name, phone, email, city, message, skills } = req.body;

    // Validate input
    if (!name || !phone || !email || !city || !message || !skills) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
        success: false,
      });
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        message: "Invalid phone number format",
        success: false,
      });
    }

    // Create transporter using Gmail and App Password
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "join.adiyogifoundation@gmail.com", // your Gmail
    //     pass: "rajhtxxdaqccsacc" // your app password
    //   },
    // });

// const userMail = {
//   from: "Adiyogi Foundation <noreply@adiyogifoundation.org.in>",
//   to: email,
//   subject: "Welcome to the Team!",
//   html: `
//     <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto;">
//       <h2 style="color: #C41E3A;">Hi ${name},</h2>
      
//       <p>Thanks for joining us. We're glad to have you on board!</p>
//       <p>No spam, no clutter we’ll only email you with important updates or events you shouldn’t miss.</p>
//       <p>If you ever have questions, feel free to reach out just include a clear subject so we can reply quickly.</p>
      
//       <p style="font-weight: bold;">Welcome to the journey!</p>

//       <br/>
//       <p>Warm regards,<br/>Team Adiyogi Foundation</p>
      
//       <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

//       <p style="font-size: 15px; color: #555;">Follow us on social media:</p>
//       <div style="margin-bottom: 16px;">
//         <a href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg" target="_blank"  style="margin-right: 12px;">
//           <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="28" alt="Instagram" />
//         </a>
//         <a href="https://www.facebook.com/share/19wQKAWb1b/" target="_blank"  style="margin-right: 12px;">
//           <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="28" alt="Facebook" />
//         </a>
//         <a href="https://youtube.com/@adiyogifoundation.b?si=hHJk8UzEA1spKAx3" target="_blank" style="margin-right: 12px;">
//           <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" width="28" alt="YouTube" />
//         </a>
//                 <a href="https://www.linkedin.com/company/adiyogi-foundation" target="_blank" >
//     <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28" alt="LinkedIn" />
//   </a>
//       </div>

//       <p style="font-size: 13px; color: #888;">
//         Contact us at: 
//         <a href="mailto:social.adiyogifoundation@gmail.com" style="color: #C41E3A;">social.adiyogifoundation@gmail.com</a>
//       </p>
//     </div>
//   `
// };

//     await resend.emails.send(userMail);

//     // Email to Admin with volunteer details
//     const adminMail = {
//       from: "Adiyogi Foundation <noreply@adiyogifoundation.org.in>",
//       to: "join.adiyogifoundation@gmail.com",
//       subject: "New Volunteer Application",
//       html: `
//         <h3>New Volunteer Application Received</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>City:</strong> ${city}</p>
//         <p><strong>Skills:</strong> ${skills}</p>
//         <p><strong>Message:</strong><br>${message}</p>
//         <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
//       `
//     };

//     await resend.emails.send(adminMail);
    const newVolunteer = new Volunteer({ name, phone, email, city, message, skills });
    await newVolunteer.save();

    return res.status(201).json({
      message: "Application submitted successfully",
      success: true,
      newVolunteer
    });

  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
