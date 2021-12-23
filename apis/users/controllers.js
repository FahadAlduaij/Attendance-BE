const User = require("../../models/User");

// Utils
const { createHash } = require("../../utils/createHash");
const { generateToken } = require("../../utils/createToken");

exports.fetchProfiles = async (req, res, next) => {
	try {
		const profiles = await User.find().select("-password").populate();
		return res.status(200).json(profiles);
	} catch (error) {
		next(error);
	}
};

exports.register = async (req, res, next) => {
	try {
		req.body.password = await createHash(req.body.password);

		const newUser = await User.create(req.body);
		const token = generateToken(newUser);

		res.status(201).json({ token, message: "User Created" });
	} catch (error) {
		next(error);
	}
};

exports.login = async (req, res, next) => {
	const token = generateToken(req.user);
	res.status(200).json({ token });
};
