import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			unique: [true, "email already exists"],
			required: [true, "email is required"],
		},
		password: {
			type: String,
			required: [true, "password is required"],
		},

		fullname: {
			type: String,
		},
	
		contact_no: {
			type: Number,
		},
		college_name: {
			type: String,
		},
		avtar: { type: String },

		templateCollection: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Template",
			},
		],
	},
	{ timestamps: true },
);

userSchema.pre("save", function () {
	if (this.isModified("password")) {
		this.password = bcrypt.hashSync(this.password, 10);
	}
});

userSchema.methods.checkPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

export const User = mongoose.model("User", userSchema);
