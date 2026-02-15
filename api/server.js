import { createTransport } from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({
          message: "Please provide all required fields",
        });
      }

      // Configure Nodemailer
      const transporter = createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // Your Gmail
          pass: process.env.EMAIL_PASS, // Gmail App password
        },
      });

      // Prepare email content
      const mailOptions = {
        from: process.env.EMAIL_USER, // Gmail sender
        to: process.env.EMAIL_USER,   // Gmail recipient (you)
        subject: `Portfolio Contact: Message from ${name}`,
        text: `
You have received a new message from your portfolio contact form:

Name: ${name}
Email: ${email}
Message:
${message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br/>${message}</p>
          </div>
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({
        message: "Message sent successfully!",
      });

    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        message: "Failed to send message. Please try again later.",
      });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
