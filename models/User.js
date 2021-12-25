const { Schema, model } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const UserSchema = Schema(
	{
		email: {
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

// UserSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=title%>" });
module.exports = model("User", UserSchema);
