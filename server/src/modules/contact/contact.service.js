const Contact = require("./contact.model");

class ContactService {
  async saveMessage(data) {
    const contact = new Contact(data);
    const saved = await contact.save();
    console.log("[MongoDB Atlas] Contact saved with ID:", saved._id);
    return saved;
  }

  async getAllMessages() {
    return await Contact.find().sort({ createdAt: -1 });
  }
}

module.exports = new ContactService();
