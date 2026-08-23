const projectService = require("./project.service");
const { sendResponse } = require("../../utilites/helper");

class ProjectController {
  async getProjects(req, res, next) {
    try {
      const projects = await projectService.getAllProjects();
      return sendResponse(res, 200, true, "Projects fetched successfully", projects);
    } catch (error) {
      return sendResponse(res, 500, false, "Failed to fetch projects: " + error.message);
    }
  }

  async getProject(req, res, next) {
    try {
      const project = await projectService.getProjectById(req.params.id);
      if (!project) {
        return sendResponse(res, 404, false, "Project not found");
      }
      return sendResponse(res, 200, true, "Project details fetched", project);
    } catch (error) {
      return sendResponse(res, 500, false, "Failed to fetch project: " + error.message);
    }
  }

  async create(req, res, next) {
    try {
      const newProject = await projectService.createProject(req.body);
      return sendResponse(res, 201, true, "Project created successfully", newProject);
    } catch (error) {
      return sendResponse(res, 500, false, "Failed to create project: " + error.message);
    }
  }
}

module.exports = new ProjectController();
