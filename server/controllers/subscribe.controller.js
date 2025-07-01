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

        // Skip database operations - just send emails

        // Using Gmail with App Password
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your Gmail
                pass: process.env.EMAIL_PASS || 'your-app-password'     // Use App Password, not regular password
            }
        });

        // Send confirmation to subscriber
        const userMail = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: email,
            subject: 'Thank You for Subscribing!',
            html: `
                <h2>Hello!</h2>
                <p>You've successfully subscribed to our newsletter using: <strong>${email}</strong></p>
                <p>We're grateful for your support. You'll now receive regular updates from us.</p>
                <br/>
                <p>Warm regards,<br/>Your Organization Name</p>
            `
        };

        await transporter.sendMail(userMail);

        // Send alert to admin
        const adminMail = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: process.env.EMAIL_USER || 'your-email@gmail.com', // Where you want to receive notifications
            subject: 'New Newsletter Subscriber',
            html: `
                <h3>New Newsletter Subscription!</h3>
                <p><strong>Email:</strong> ${email}</p>
                <p>Timestamp: ${new Date().toLocaleString()}</p>
            `
        };

        await transporter.sendMail(adminMail);

        return res.status(201).json({
            message: "Subscribed successfully",
            success: true
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}