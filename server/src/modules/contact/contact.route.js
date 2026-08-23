const express = require("express");
const router = express.Router();
const contactController = require("./contact.controller");

router.post("/", contactController.sendMessage);
router.get("/", contactController.getMessages);

module.exports = router;
