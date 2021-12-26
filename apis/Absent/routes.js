const express = require("express");

const passport = require("passport");

const router = express.Router();

// controllers
const { createAbsent, fetchAbsents } = require("./controllers");

router.get("/", fetchAbsents);
router.post(
	"/posts",
	passport.authenticate("jwt", { session: false }),
	createAbsent
);

module.exports = router;
