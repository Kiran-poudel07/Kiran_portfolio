const Project = require("./project.model");

const initialProjects = [
  {
    _id: "1",
    title: "SkillLink Nepal",
    subtitle: "Job & Skill Matching Platform",
    description: "Full-stack web platform built for connects skilled freelancers with clients in Nepal featuring real-time messaging, gig management, and payment integration.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/Kiran-poudel07/SkillLink",
    liveLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    featured: true,
    category: "MERN",
  },
  {
    _id: "2",
    title: "HRM & Employee Management Portal",
    subtitle: "Enterprise HR Dashboard",
    description: "Comprehensive Human Resource Management application supporting employee onboarding, leave management, attendance tracking, and payroll summary.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    githubLink: "https://github.com/Kiran-poudel07",
    liveLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    featured: true,
    category: "Full Stack",
  },
  {
    _id: "3",
    title: "Personal MERN Stack Portfolio",
    subtitle: "Developer Portfolio Website",
    description: "Modern, responsive portfolio featuring modular backend architecture, TypeScript frontend, dynamic project showcase, and MongoDB contact integration.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Vite"],
    githubLink: "https://github.com/Kiran-poudel07/Kiran_portfolio",
    liveLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    featured: true,
    category: "MERN",
  },
];

class ProjectService {
  async getAllProjects() {
    try {
      const projects = await Project.find().sort({ createdAt: -1 });
      if (projects && projects.length > 0) {
        return projects;
      }
      return initialProjects;
    } catch (error) {
      console.log("[ProjectService] Serving default fallback projects dataset.");
      return initialProjects;
    }
  }

  async getProjectById(id) {
    try {
      const project = await Project.findById(id);
      if (project) return project;
    } catch (error) {}
    return initialProjects.find((p) => p._id === id) || null;
  }

  async createProject(data) {
    const newProject = new Project(data);
    return await newProject.save();
  }
}

module.exports = new ProjectService();
