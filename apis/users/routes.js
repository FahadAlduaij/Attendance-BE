const express = require("express");
const upload = require("../../middleware/multer");
const passport = require("passport");

const router = express.Router();

// controllers
const { register, login } = require("./controllers");

router.post("/register", register);
router.post(
	"/login",
	passport.authenticate("local", { session: false }),
	login
);

module.exports = router;
