require("dotenv").config();

const jwt = require("jsonwebtoken");

exports.generateToken = (userObj) => {
	const payload = {
		_id: userObj._id,
		email: userObj.email,
		name: userObj.name,
		image: userObj.image,
	};

	const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1hr" });

	return token;
};
