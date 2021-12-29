const { Schema, model } = require("mongoose");

const AbsentSchema = Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		id: {
			type: String,
			unique: true,
		},
		name: {
			type: String,
		},

		day: {
			type: String,
			enum: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
			default: "Sunday",
		},
		date: {
			type: Date,
			default: Date.now(),
		},
		type: {
			type: String,
			enum: ["Permission", "Medical", "Emergency leave"],
			default: "Permission",
		},
		from: {
			type: Date,
			default: Date.now(),
		},
		to: {
			type: Date,
			default: Date.now(),
		},
	},
	{ timestamps: true }
);

module.exports = model("Absent", AbsentSchema);
