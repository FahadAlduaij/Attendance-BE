const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const UserSchema = mongoose.Schema(
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
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			default: "/media/defaultUserImage.jpg",
		},
	},
	{ timestamps: true }
);

UserSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=username%>" });
module.exports = mongoose.model("User", UserSchema);
