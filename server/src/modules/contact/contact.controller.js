const contactService = require("./contact.service");
const { sendResponse } = require("../../utilites/helper");

class ContactController {
  async sendMessage(req, res, next) {
    try {
      const { name, email, subject, message } = req.body;
      if (!name || !email || !message) {
        return sendResponse(res, 400, false, "Please fill in all required fields (name, email, message)");
      }

      const savedContact = await contactService.saveMessage({ name, email, subject, message });
      return sendResponse(res, 201, true, "Thank you! Your message has been received successfully.", savedContact);
    } catch (error) {
      return sendResponse(res, 500, false, "Failed to send message: " + error.message);
    }
  }

  async getMessages(req, res, next) {
    try {
      const messages = await contactService.getAllMessages();
      return sendResponse(res, 200, true, "Contact messages retrieved", messages);
    } catch (error) {
      return sendResponse(res, 500, false, "Failed to retrieve messages: " + error.message);
    }
  }
}

module.exports = new ContactController();
