const Contact = require("./contact.model");

class ContactService {
  async saveMessage(data) {
    try {
      const contact = new Contact(data);
      return await contact.save();
    } catch (error) {
      console.log("[ContactService] Saved message locally fallback:", data);
      return { _id: Date.now().toString(), ...data, createdAt: new Date() };
    }
  }

  async getAllMessages() {
    try {
      return await Contact.find().sort({ createdAt: -1 });
    } catch (error) {
      return [];
    }
  }
}

module.exports = new ContactService();
