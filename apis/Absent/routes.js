const express = require("express");

const passport = require("passport");

const router = express.Router();

// controllers
const {
	findAbsent,
	createAbsent,
	fetchAbsents,
	updateAbsent,
	deleteAbsent,
} = require("./controllers");

router.param("absentId", async (req, res, next, absentId) => {
	try {
		const absent = await findAbsent(absentId, next);
		if (absent) {
			req.absent = absent;
			next();
		} else {
			next({ status: 404, message: "Absent not Found, 404" });
		}
	} catch (error) {
		next(error);
	}
});

router.get("/", fetchAbsents);
router.post(
	"/posts",
	passport.authenticate("jwt", { session: false }),
	createAbsent
);
router.put(
	"/:absentId",
	passport.authenticate("jwt", { session: false }),
	updateAbsent
);
router.delete(
	"/:absentId",
	passport.authenticate("jwt", { session: false }),
	deleteAbsent
);

module.exports = router;
