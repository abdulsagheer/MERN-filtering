const express = require("express");
const router = new express.Router();
const controllers = require("../controllers/userController");
const upload = require("../multerconfig/storageConfig");

// routes

router.post(
	"/user/register",
	upload.single("user_profile"),
	controllers.userpost
);
