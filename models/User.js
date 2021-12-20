const { Schema, model } = require("mongoose");

const UserSchema = Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		profile: {
			name: {
				type: String,
				default: "New User",
				required: true,
			},
			image: {
				type: String,
				default: "/media/defaultUserImage.jpg",
			},
		},
	},
	{ timestamps: true }
);

module.exports = model("User", UserSchema);
