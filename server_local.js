import express from "express";
import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // load .env

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// POST /api/server
app.post("/api/server", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please provide all required fields" });
  }

  try {
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: Message from ${name}`,
      text: `
You have received a new message from your portfolio contact form:

Name: ${name}
Email: ${email}
Message:
${message}
      `,
      html: `
        <div style="font-family: Arial; line-height:1.5; color:#333">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent:", name, email, message); // debug log
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message. Please try again later." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
