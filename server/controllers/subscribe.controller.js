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
    const userMail = {
      from: "join.adiyogifoundation@gmail.com",
      to: email,
      subject: "Thank You for Subscribing!",
      html: `
        <h2>Hello!</h2>
        <p>You've successfully subscribed to our newsletter using: <strong>${email}</strong></p>
        <p>We're grateful for your support. You'll now receive regular updates from us.</p>
        <br/>
        <p>Warm regards,<br/>Adiyogi Foundation</p>
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
