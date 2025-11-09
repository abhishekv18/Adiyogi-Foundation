
// // import nodemailer from "nodemailer";
// import { Subscribe } from "../models/subscribe.model.js";
// import { Resend } from 'resend';
// import dotenv from 'dotenv';

// dotenv.config();

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const addSubscribed = async (req, res) => {
//   try {
//     const { email } = req.body;

//     // Validate input
//     if (!email) {
//       return res.status(400).json({
//         message: "Email is required",
//         success: false
//       });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({
//         message: "Invalid email format",
//         success: false
//       });
//     }
//   const subscribedExists = await Subscribe.findOne({ email });
//       if(subscribedExists){
//         return res.status(400).json({
//             message: "Subscriber with this email already registered",
//             success: false
//         });
//       }

//    const newSubscribe = new Subscribe({email});
//         await newSubscribe.save();

// const userMail = {
//   from: "Adiyogi Foundation <noreply@adiyogifoundation.org.in>",
//   to: email,
//   subject: "Thank You for Subscribing!",
//   html: `
//     <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto;">
//       <h2 style="color: #C41E3A;">Thank you for subscribing us!</h2>
//       <p>Don’t worry we respect your time and your inbox. You won’t receive any marketing or unnecessary emails from us.</p>
//       <p>We’ll only send you important updates, event announcements, or information you shouldn’t miss.</p>
//       <p>If there's ever a chance you miss an update on other platforms, this helps ensure you stay informed.</p>
//       <p>We're also here to help feel free to write to us with your questions. Just include a clear subject so we can get back to you quickly.</p>
//       <p style="font-weight: bold;">Welcome to the journey.</p>

//       <hr style="margin: 30px 0; border: none; border-top: 1px solid #ccc;" />

//       <p style="font-size: 15px; color: #555;">Follow us on social media:</p>
//      <div>
//   <a href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg" target="_blank" style="text-decoration: none; margin-right: 12px;">
//     <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="28" alt="Instagram" />
//   </a>
//   <a href="https://www.facebook.com/share/19wQKAWb1b/" target="_blank" style="text-decoration: none; margin-right: 12px;">
//     <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="28" alt="Facebook" />
//   </a>
//   <a href="https://youtube.com/@adiyogifoundation.b?si=hHJk8UzEA1spKAx3" target="_blank" style="text-decoration: none; margin-right: 12px;">
//     <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" width="28" alt="YouTube" />
//   </a>
//     <a href="https://www.linkedin.com/company/adiyogi-foundation" target="_blank" style="text-decoration: none;">
//     <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28" alt="LinkedIn" />
//   </a>
// </div>


//       <br/>
//       <p style="color: #888; font-size: 13px;">Adiyogi Foundation<br/>
//       <a href="mailto:social.adiyogifoundation@gmail.com" style="color: #C41E3A;">social.adiyogifoundation@gmail.com</a></p>
//     </div>
//   `
// };

//     await resend.emails.send(userMail);

//     // Alert email to admin
//     const adminMail = {
//       from: "Adiyogi Foundation <noreply@adiyogifoundation.org.in>",
//       to: "join.adiyogifoundation@gmail.com",
//       subject: "New Newsletter Subscriber",
//       html: `
//         <h3>New Newsletter Subscription!</h3>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
//       `
//     };

//     await resend.emails.send(adminMail);


//         return res.status(201).json({
//             message:"Subscribe Successfully",
//             success:true,
//             newSubscribe
//         });


//   } catch (error) {
//     console.error("Error sending email:", error);
//     return res.status(500).json({
//       message: "Internal server error",
//       success: false
//     });
//   }
// };
import { Subscribe } from "../models/subscribe.model.js";
// import sgMail from '@sendgrid/mail';
// import dotenv from 'dotenv';

// dotenv.config();

// // Initialize SendGrid with API key
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export const addSubscribed = async (req, res) => {
//   try {
//     const { email } = req.body;

//     // Validate input
//     if (!email) {
//       return res.status(400).json({
//         message: "Email is required",
//         success: false
//       });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({
//         message: "Invalid email format",
//         success: false
//       });
//     }

//     const subscribedExists = await Subscribe.findOne({ email });
//     if (subscribedExists) {
//       return res.status(400).json({
//         message: "Subscriber with this email already registered",
//         success: false
//       });
//     }

//     const newSubscribe = new Subscribe({ email });
//     await newSubscribe.save();

//     // User confirmation email
//     // const userMail = {
//     //   to: email,
//     //   from: {
//     //     email: 'social.adiyogifoundation@gmail.com',
//     //     name: 'Adiyogi Foundation'
//     //   },
//     //   subject: "Thank You for Subscribing!",
//     //   html: `
//     //     <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto;">
//     //       <h2 style="color: #C41E3A;">Thank you for subscribing us!</h2>
//     //       <p>Don't worry we respect your time and your inbox. You won't receive any marketing or unnecessary emails from us.</p>
//     //       <p>We'll only send you important updates, event announcements, or information you shouldn't miss.</p>
//     //       <p>If there's ever a chance you miss an update on other platforms, this helps ensure you stay informed.</p>
//     //       <p>We're also here to help feel free to write to us with your questions. Just include a clear subject so we can get back to you quickly.</p>
//     //       <p style="font-weight: bold;">Welcome to the journey.</p>

//     //       <hr style="margin: 30px 0; border: none; border-top: 1px solid #ccc;" />

//     //       <p style="font-size: 15px; color: #555;">Follow us on social media:</p>
//     //       <div>
//     //         <a href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg" target="_blank" style="text-decoration: none; margin-right: 12px;">
//     //           <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="28" alt="Instagram" />
//     //         </a>
//     //         <a href="https://www.facebook.com/share/19wQKAWb1b/" target="_blank" style="text-decoration: none; margin-right: 12px;">
//     //           <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="28" alt="Facebook" />
//     //         </a>
//     //         <a href="https://youtube.com/@adiyogifoundation.b?si=hHJk8UzEA1spKAx3" target="_blank" style="text-decoration: none; margin-right: 12px;">
//     //           <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" width="28" alt="YouTube" />
//     //         </a>
//     //         <a href="https://www.linkedin.com/company/adiyogi-foundation" target="_blank" style="text-decoration: none;">
//     //           <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28" alt="LinkedIn" />
//     //         </a>
//     //       </div>

//     //       <br/>
//     //       <p style="color: #888; font-size: 13px;">Adiyogi Foundation<br/>
//     //       <a href="mailto:social.adiyogifoundation@gmail.com" style="color: #C41E3A;">social.adiyogifoundation@gmail.com</a></p>
//     //     </div>
//     //   `
//     // };

//     // await sgMail.send(userMail);

//     // Alert email to admin
//     // const adminMail = {
//     //   to: "join.adiyogifoundation@gmail.com",
//     //   from: {
//     //     email: 'social.adiyogifoundation@gmail.com',
//     //     name: 'Adiyogi Foundation'
//     //   },
//     //   subject: "New Newsletter Subscriber",
//     //   html: `
//     //     <h3>New Newsletter Subscription!</h3>
//     //     <p><strong>Email:</strong> ${email}</p>
//     //     <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
//     //   `
//     // };

//     // await sgMail.send(adminMail);

//     return res.status(201).json({
//       message: "Subscribe Successfully",
//       success: true,
//       newSubscribe
//     });

//   } catch (error) {
//     console.error("Error sending email:", error);
    
//     // More detailed error logging for SendGrid
//     if (error.response) {
//       console.error('SendGrid error details:', error.response.body);
//     }
    
//     return res.status(500).json({
//       message: "Internal server error",
//       success: false
//     });
//   }
// };
export const addSubscribed = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "Email is required", success: false });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return res.status(400).json({ message: "Invalid email format", success: false });

    const subscribedExists = await Subscribe.findOne({ email });
    if (subscribedExists)
      return res.status(400).json({ message: "Subscriber with this email already registered", success: false });

    const newSubscribe = await Subscribe.create({ email });

    console.log("New subscriber added:", newSubscribe.email);

    return res.status(201).json({
      success: true,
      message: "Subscribed Successfully",
    });

  } catch (error) {
    console.error("Error in addSubscribed:", error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};
