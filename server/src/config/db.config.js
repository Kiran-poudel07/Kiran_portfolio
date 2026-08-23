const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }
  const uri =
    process.env.MONGO_URI ||
    "mongodb+srv://Kiran_Portfolio_Database:Ur%40nu%242027@cluster0.pfydc.mongodb.net/kiran_portfolio?retryWrites=true&w=majority";

  if (!uri) {
    console.error("[Database Error] MONGO_URI is not defined");
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = conn.connections[0].readyState;
    console.log(`[Database] MongoDB Atlas Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[Database Error] ${error.message}`);
  }
};

module.exports = connectDB;
