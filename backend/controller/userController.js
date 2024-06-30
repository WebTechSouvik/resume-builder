import { User } from "../model/userModel.js";
import AsyncHandeler from "../utlis/AsyncHandeler.js";
import ApiError from "../utlis/customError.js";
import ApiResponse from "../utlis/ApiResponse.js";
import generateToken from "../utlis/generateToken.js";

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

export const getUserDetailsController = AsyncHandeler(async (req, res) => {
	const id = req.user;
	const userInfo = await User.findById(id).select(["user_info"]);

	res.status(200).json(new ApiResponse("user info fetch sucessfull","uesData", userInfo));
});

export const updateUserDetalisController = AsyncHandeler(async (req, res) => {
	const id = req.user;
	console.log(req.body);

	const user = await User.findByIdAndUpdate(
		id,
		{ $set: { user_info: { ...req.body } } },
		{ new: true, select: "-password -templateCollection" },
	);

	res
		.status(201)
		.json(new ApiResponse("user information updated sucessfully", "uesrInfo",user));
});

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
