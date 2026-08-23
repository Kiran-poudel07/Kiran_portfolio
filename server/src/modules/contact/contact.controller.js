const contactService = require("./contact.service");
const { sendResponse } = require("../../utilites/helper");
const connectDB = require("../../config/db.config");
const nodemailer = require("nodemailer");

class ContactController {
  async sendMessage(req, res, next) {
    try {
      const { name, email, subject, message } = req.body;
      if (!name || !email || !message) {
        return sendResponse(res, 400, false, "Please fill in all required fields (name, email, message)");
      }

      // Ensure MongoDB Atlas connection is active before saving
      await connectDB();

      // 1. Save to MongoDB Atlas Database
      const savedContact = await contactService.saveMessage({ name, email, subject, message });

      // 2. Dispatch Email Notification (if configured)
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });

          await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.NOTIFICATION_EMAIL || "erkiranpoudel08@gmail.com",
            subject: `🚀 Portfolio Message from ${name}: ${subject || "New Inquiry"}`,
            text: `You have received a new contact message on your portfolio:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}\n\nDate: ${new Date().toLocaleString()}`,
          });
          console.log(`[Email Alert] Notification sent to ${process.env.NOTIFICATION_EMAIL || "erkiranpoudel08@gmail.com"}`);
        } catch (mailErr) {
          console.warn("[Email Notification Warning]", mailErr.message);
        }
      } else {
        console.log(`[New Contact Saved to DB] From: ${name} (${email}) - Message: "${message}"`);
      }

      return sendResponse(res, 201, true, "Thank you! Your message has been received and saved successfully.", savedContact);
    } catch (error) {
      console.error("[ContactController Error]", error);
      return sendResponse(res, 500, false, "Database connection error: " + error.message);
    }
  }

  async getMessages(req, res, next) {
    try {
      await connectDB();
      const messages = await contactService.getAllMessages();
      return sendResponse(res, 200, true, "Contact messages retrieved", messages);
    } catch (error) {
      return sendResponse(res, 500, false, "Failed to retrieve messages: " + error.message);
    }
  }
}

module.exports = new ContactController();
