const path = require("path");

const express = require("express");
const router = express.Router();
const baseDir = require("../util/path");

router.get("/", (req, res, next) => {
	res.sendFile(path.join(baseDir, "views", "home.html"));
});

router.get("/users", (req, res, next) => {
	res.sendFile(path.join(baseDir, "views", "users.html"));
});

module.exports = router;
