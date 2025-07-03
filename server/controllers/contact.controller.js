// import nodemailer from "nodemailer";
// export const addContact = async (req, res) => {
//     try {
//         const { name, phone, email, city, message } = req.body;

//         // Validate input
//         if (!name || !phone || !email || !city || !message) {
//             return res.status(400).json({
//                 message: "All fields are required",
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
        
//         const phoneRegex = /^\d{10}$/; // Assuming phone number is 10 digits
//         if (!phoneRegex.test(phone)) {
//             return res.status(400).json({
//                 message: "Invalid phone number format",
//                 success: false
//             });
//         }

//         // Skip database operations - just send emails

//         // Using Gmail with App Password
//         const transporter = nodemailer.createTransporter({
//             service: 'gmail',
//             auth: {
//                 user:'join.adiyogifoundation@gmail.com', // Replace with your Gmail
//                 pass: 'rajh txxd aqcc sacc'     // Use App Password, not regular password
//             }
//         });

//         // Send email to you (notification)
//         const clientMailOptions = {
//             from:  'join.adiyogifoundation@gmail.com', // Your Gmail
//             to: 'join.adiyogifoundation@gmail.com',    // Where you want to receive notifications
//             subject: 'New Contact Form Submission',
//             html: `
//                 <h2>New Contact Message</h2>
//                 <p><strong>Name:</strong> ${name}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Phone:</strong> ${phone}</p>
//                 <p><strong>City:</strong> ${city}</p>
//                 <p><strong>Message:</strong><br>${message}</p>
//             `
//         };

//         await transporter.sendMail(clientMailOptions);

//         // Send thank-you message to user
//         const userMailOptions = {
//             from:  'join.adiyogifoundation@gmail.com',
//             to: email,
//             subject: 'Thank you for contacting us!',
//             html: `
//                 <p>Dear ${name},</p>
//                 <p>Thank you for reaching out to us. We've received your message and will get back to you shortly.</p>
//                 <br/>
//                 <p>Warm regards,<br>Your Organization Name</p>
//             `
//         };

//         await transporter.sendMail(userMailOptions);

//         return res.status(201).json({
//             message: "Message sent successfully",
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

export const addContact = async (req, res) => {
  try {
    const { name, phone, email, city, message } = req.body;

    // Validation
    if (!name || !phone || !email || !city || !message) {
      return res.status(400).json({
        message: "All fields are required",
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

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        message: "Invalid phone number format",
        success: false
      });
    }

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "join.adiyogifoundation@gmail.com", // your Gmail
        pass: "rajhtxxdaqccsacc" // your Gmail App Password
      }
    });

    // Email to Admin (Your Team)
    const clientMailOptions = {
      from: "join.adiyogifoundation@gmail.com",
      to: "join.adiyogifoundation@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    await transporter.sendMail(clientMailOptions);

    // Thank You Email to User
    // const userMailOptions = {
    //   from: "join.adiyogifoundation@gmail.com",
    //   to: email,
    //   subject: "Thank you for contacting us!",
    //   html: `
    //     <h2>Dear ${name},</h2>
    //     <p>Thank you for reaching out to us. We've received your message and will get back to you shortly.</p>
    //     <br/>
    //     <p>Warm regards,<br/>Adiyogi Foundation Team</p>
    //   `
    // };

const userMailOptions = {
  from: "join.adiyogifoundation@gmail.com",
  to: email,
  subject: "Thank You for Contacting Us!",
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto;">
      <h2 style="color: #C41E3A;">Dear ${name},</h2>
      
      <p>Thank you for reaching out to us. We've received your message and one of our team members will get back to you shortly.</p>
      <p>We truly value your interest and support for our sacred mission.</p>

      <p style="font-weight: bold;">Until then, stay inspired.</p>

      <br/>
      <p>Warm regards,<br/>Team Adiyogi Foundation</p>

      <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

      <p style="font-size: 15px; color: #555;">Stay connected with us:</p>
      <div style=" margin-bottom: 16px;">
        <a href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg" target="_blank"  style="margin-right: 12px;">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="28" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/share/19wQKAWb1b/" target="_blank"  style="margin-right: 12px;">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="28" alt="Facebook" />
        </a>
        <a href="https://youtube.com/@adiyogifoundation.b?si=hHJk8UzEA1spKAx3" target="_blank" style="margin-right: 12px;">
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" width="28" alt="YouTube" />
        </a>
          <a href="https://www.linkedin.com/company/adiyogi-foundation" target="_blank" >
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28" alt="LinkedIn" />
  </a>
      </div>

      <p style="font-size: 13px; color: #888;">
        If you have any urgent queries, feel free to email us directly at 
        <a href="mailto:social.adiyogifoundation@gmail.com" style="color: #C41E3A;">social.adiyogifoundation@gmail.com</a>.
      </p>
    </div>
  `
};


    await transporter.sendMail(userMailOptions);

    return res.status(201).json({
      message: "Message sent successfully",
      success: true
    });

  } catch (error) {
    console.error("Error in addContact:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};
