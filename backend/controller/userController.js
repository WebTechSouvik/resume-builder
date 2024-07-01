import { User } from "../model/userModel.js";
import AsyncHandeler from "../utlis/AsyncHandeler.js";
import ApiError from "../utlis/customError.js";
import ApiResponse from "../utlis/ApiResponse.js";
import generateToken from "../utlis/generateToken.js";




//register controller

export const registerController = AsyncHandeler(async (req, res) => {
	const { email, password } = req.body;
	if (!email && !password) {
		throw new ApiError(400, "email and password requried");
	}

	const existsUser = await User.findOne({ email });

	if (existsUser) {
		console.log(existsUser);
		throw new ApiError(400, "user already exist");
	}

	const newUser = await User.create({
		email,
		password,
	});

	await newUser.save();

	res.status(201).json(new ApiResponse("User register sucessfully"));
});



//loggin controller

export const logginController = AsyncHandeler(async (req, res) => {
	const { email, password } = req.body;

	if (!email && !password) {
		throw new ApiError(400, "email and password requried");
	}

	const user = await User.findOne({ email });

	if (!user) {
		throw new ApiError(400, "user dose not exists");
	}

	const isvalid = user.checkPassword(password);
	if (!isvalid) {
		throw new ApiError(400, "password is invalid");
	}

	const userToken = generateToken(user._id);
	const options = {
		httpOnly: true,
		secure: true,
	};
	res
		.status(200)
		.cookie("Token", userToken, options)
		.json(new ApiResponse("loggin sucessfull"));
});

//getting user details controller
export const getUserDetailsController = AsyncHandeler(async (req, res) => {
	const id = req.user;
	const userInfo = await User.findById(id).select(["user_info"]);

	res
		.status(200)
		.json(new ApiResponse("user info fetch sucessfull", "uesData", userInfo));
});




// updatting user deatils controller

export const updateUserDetalisController = AsyncHandeler(async (req, res) => {
	const id = req.user;

	const updatedInfo = {};

	Object.keys(req.body).forEach((key) => {
		updatedInfo[`user_info.${key}`] = req.body[key];
	});
	console.log(updatedInfo);

	const updateUser = await User.findByIdAndUpdate(
		id,
		{ $set: updatedInfo },
		{ new: true, select: "-password -templateCollection" },
	);

	res
		.status(201)
		.json(
			new ApiResponse(
				"user information updated sucessfully",
				"uesrInfo",
				updateUser,
			),
		);
});



//loggout controller

export const loggoutController = AsyncHandeler(async (req, res) => {
	const options = {
		httpOnly: true,
		secure: true,
	};

	res
		.status(200)
		.clearCookie("Token", options)
		.json(new ApiResponse("loggout sucessfull"));
});


// template add to user collection controller

export const addTemplateToCollection = AsyncHandeler(async (req, res) => {
	const { Id } = req.params;

	if (!Id) {
		throw new ApiError(400,"template Id is requried");
	}

	const user = await User.findById(req.user);

	if (!user) {
		throw new ApiError(400,"user dose not exists");
	}

	const ispresent = user.templateCollection.some(
		(templateId) => templateId == Id,
	);

	if (ispresent) {
		throw new ApiError(400,"template is already present");
	}
	user.templateCollection.push(Id);

	await user.save();

	res.status(200).json(new ApiResponse("Template added to collection"));
});



//getting all template from user collection controller

export const getAllTemplateFromCollection = AsyncHandeler(async (req, res) => {
	const userAllTemplate = await User.findById(req.user)
		.populate({ path: "templateCollection" ,select:["name","image_url","like_by_people"]})
		.select("templateCollection");


	res
		.status(200)
		.json(
			new ApiResponse("all template fetch from collection sucessfull",
			"templates",
			userAllTemplate)
		);
});
