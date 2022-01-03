require("dotenv").config();

const jwt = require("jsonwebtoken");

exports.generateToken = (userObj) => {
	const payload = {
		_id: userObj._id,
		username: userObj.username,
		name: userObj.name,
	};

	const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1hr" });

	return token;
};
