const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db.config");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("public/uploads"));

// Import Module Routes
const projectRoutes = require("./src/modules/project/project.route");
const contactRoutes = require("./src/modules/contact/contact.route");

// Register API Routes
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/contact", contactRoutes);

// Health Check Endpoint
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    status: "online",
    message: "Kiran Portfolio MERN Modular API Server is running smoothly!",
    timestamp: new Date(),
  });
});

// Global 404 Route Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "API Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("[Server Error]", err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`🚀 Modular Express Backend running on port ${PORT}`);
  console.log(`🔗 API Base URL: http://localhost:${PORT}/api/v1`);
  console.log(`=================================================`);
});
