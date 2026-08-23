const express = require("express");
const router = express.Router();
const projectController = require("./project.controller");

router.get("/", projectController.getProjects);
router.get("/:id", projectController.getProject);
router.post("/", projectController.create);

module.exports = router;
