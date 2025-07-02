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
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `
    };

    await transporter.sendMail(clientMailOptions);

    // Thank You Email to User
    const userMailOptions = {
      from: "join.adiyogifoundation@gmail.com",
      to: email,
      subject: "Thank you for contacting us!",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us. We've received your message and will get back to you shortly.</p>
        <br/>
        <p>Warm regards,<br/>Adiyogi Foundation Team</p>
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
