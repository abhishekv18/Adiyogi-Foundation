export const addVolunteer = async (req, res) => {
    try {
        const { name, phone, email, city, message, skills } = req.body;

        // Validate input
        if (!name || !phone || !email || !city || !message || !skills) {
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

        const phoneRegex = /^\d{10}$/; // Assuming phone number is 10 digits
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                message: "Invalid phone number format",
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

        // Thank-you Email to Volunteer
        const userMail = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: email,
            subject: 'Thank You for Volunteering!',
            html: `
                <h2>Hi ${name},</h2>
                <p>Thank you for applying as a volunteer with us.</p>
                <p>We have received your details and will reach out to you shortly.</p>
                <br/>
                <p>Regards,<br/>Your Organization Name</p>
            `
        };

        await transporter.sendMail(userMail);

        // Send alert to admin with volunteer details
        const adminMail = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: process.env.EMAIL_USER || 'your-email@gmail.com', // Where you want to receive notifications
            subject: 'New Volunteer Application',
            html: `
                <h3>New Volunteer Application Received</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Skills:</strong> ${skills}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `
        };

        await transporter.sendMail(adminMail);

        return res.status(201).json({
            message: "Application submitted successfully",
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