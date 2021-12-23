const express = require("express");
const upload = require("../../middleware/multer");
const passport = require("passport");

const router = express.Router();

// controllers
const { fetchProfiles, register, login } = require("./controllers");

router.get("/profiles", fetchProfiles);
router.post("/register", register);
router.post(
	"/login",
	passport.authenticate("local", { session: false }),
	login
);

module.exports = router;
