const Absent = require("../../models/Absent");

exports.fetchAbsents = async (req, res, next) => {
	try {
		const absentLists = await Absent.find().populate({
			path: "user",
			select: "-password",
		});
		return res.status(200).json(absentLists);
	} catch (error) {
		next(error);
	}
};

exports.createAbsent = async (req, res, next) => {
	try {
		req.body.user = req.user._id;
		const newAbsent = await Absent.create(req.body);
		return res.status(201).json(newAbsent);
	} catch (error) {
		next(error);
	}
};
