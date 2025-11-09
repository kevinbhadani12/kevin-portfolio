import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  // For Gmail, you can use OAuth2 or App Password
  // For development, you can use a test account or configure SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || process.env.EMAIL_USER,
      pass: process.env.SMTP_PASS || process.env.EMAIL_PASSWORD, // App Password for Gmail
    },
  });

  return transporter;
};

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const recipientEmail = process.env.CONTACT_EMAIL || "kevinbhadani2121@gmail.com";
  
  const transporter = createTransporter();

  // Email to you (the portfolio owner)
  const mailOptions = {
    from: process.env.SMTP_USER || process.env.EMAIL_USER || recipientEmail,
    to: recipientEmail,
    replyTo: data.email, // So you can reply directly to the sender
    subject: `Portfolio Contact: ${data.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${data.name} (${data.email})</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <hr>
      <h3>Message:</h3>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>You can reply directly to this email to respond to ${data.name}.</small></p>
    `,
    text: `
New Contact Form Submission

From: ${data.name} (${data.email})
Subject: ${data.subject}

Message:
${data.message}
    `.trim(),
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email notification");
  }
}

