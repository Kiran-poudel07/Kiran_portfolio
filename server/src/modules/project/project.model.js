const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, trim: true },
    description: { type: String, required: true },
    techStack: [{ type: String, required: true }],
    githubLink: { type: String, default: "" },
    liveLink: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
    featured: { type: Boolean, default: false },
    category: { type: String, enum: ["MERN", "Full Stack", "Frontend", "Backend", "Other"], default: "MERN" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
