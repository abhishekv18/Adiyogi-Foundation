// import nodemailer from "nodemailer";
// export const addSubscribed = async (req, res) => {
//     try {
//         const { email } = req.body;

//         // Validate input
//         if (!email) {
//             return res.status(400).json({
//                 message: "Email is required",
//                 success: false
//             });
//         }

//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             return res.status(400).json({
//                 message: "Invalid email format",
//                 success: false
//             });
//         }

//         // Skip database operations - just send emails

//         // Using Gmail with App Password
//         const transporter = nodemailer.createTransporter({
//             service: 'gmail',
//             auth: {
//                   user:'join.adiyogifoundation@gmail.com', // Replace with your Gmail
//                 pass: 'rajh txxd aqcc sacc'  
//             }
//         });

//         // Send confirmation to subscriber
//         const userMail = {
//             from:  'join.adiyogifoundation@gmail.com',
//             to: email,
//             subject: 'Thank You for Subscribing!',
//             html: `
//                 <h2>Hello!</h2>
//                 <p>You've successfully subscribed to our newsletter using: <strong>${email}</strong></p>
//                 <p>We're grateful for your support. You'll now receive regular updates from us.</p>
//                 <br/>
//                 <p>Warm regards,<br/>Your Organization Name</p>
//             `
//         };

//         await transporter.sendMail(userMail);

//         // Send alert to admin
//         const adminMail = {
//             from:  'join.adiyogifoundation@gmail.com', // Your Gmail
//             to: 'join.adiyogifoundation@gmail.com',   // Where you want to receive notifications
//             subject: 'New Newsletter Subscriber',
//             html: `
//                 <h3>New Newsletter Subscription!</h3>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p>Timestamp: ${new Date().toLocaleString()}</p>
//             `
//         };

//         await transporter.sendMail(adminMail);

//         return res.status(201).json({
//             message: "Subscribed successfully",
//             success: true
//         });

//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             message: "Internal server error",
//             success: false
//         });
//     }
// }




import nodemailer from "nodemailer";

export const addSubscribed = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate input
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
        success: false
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
        success: false
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "join.adiyogifoundation@gmail.com", // your Gmail
        pass: "rajhtxxdaqccsacc" // your App Password
      }
    });

    // Thank-you email to subscriber
    // const userMail = {
    //   from: "join.adiyogifoundation@gmail.com",
    //   to: email,
    //   subject: "Thank You for Subscribing!",
    //   html: `
    //     <h2>Hello!</h2>
    //     <p>You've successfully subscribed to our newsletter using: <strong>${email}</strong></p>
    //     <p>We're grateful for your support. You'll now receive regular updates from us.</p>
    //     <br/>
    //     <p>Warm regards,<br/>Adiyogi Foundation</p>
    //   `
    // };
const userMail = {
  from: "join.adiyogifoundation@gmail.com",
  to: email,
  subject: "Thank You for Subscribing!",
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto;">
      <h2 style="color: #C41E3A;">Thank you for subscribing us!</h2>
      <p>Don’t worry we respect your time and your inbox. You won’t receive any marketing or unnecessary emails from us.</p>
      <p>We’ll only send you important updates, event announcements, or information you shouldn’t miss.</p>
      <p>If there's ever a chance you miss an update on other platforms, this helps ensure you stay informed.</p>
      <p>We're also here to help feel free to write to us with your questions. Just include a clear subject so we can get back to you quickly.</p>
      <p style="font-weight: bold;">Welcome to the journey.</p>

      <hr style="margin: 30px 0; border: none; border-top: 1px solid #ccc;" />

      <p style="font-size: 15px; color: #555;">Follow us on social media:</p>
     <div>
  <a href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg" target="_blank" style="text-decoration: none; margin-right: 15px;">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="28" alt="Instagram" />
  </a>
  <a href="https://www.facebook.com/share/19wQKAWb1b/" target="_blank" style="text-decoration: none; margin-right: 15px;">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="28" alt="Facebook" />
  </a>
  <a href="https://youtube.com/@adiyogifoundation.b?si=hHJk8UzEA1spKAx3" target="_blank" style="text-decoration: none; margin-right: 15px;">
    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" width="28" alt="YouTube" />
  </a>
    <a href="https://www.linkedin.com/company/adiyogi-foundation" target="_blank" style="text-decoration: none;">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28" alt="LinkedIn" />
  </a>
</div>


      <br/>
      <p style="color: #888; font-size: 13px;">Adiyogi Foundation<br/>
      <a href="mailto:social.adiyogifoundation@gmail.com" style="color: #C41E3A;">social.adiyogifoundation@gmail.com</a></p>
    </div>
  `
};

    await transporter.sendMail(userMail);

    // Alert email to admin
    const adminMail = {
      from: "join.adiyogifoundation@gmail.com",
      to: "join.adiyogifoundation@gmail.com",
      subject: "New Newsletter Subscriber",
      html: `
        <h3>New Newsletter Subscription!</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    await transporter.sendMail(adminMail);

    return res.status(201).json({
      message: "Subscribed successfully",
      success: true
    });

  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};
