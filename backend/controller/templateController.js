import { Template } from "../model/templateModel.js";
import AsyncHandeler from "../utlis/AsyncHandeler.js";
import ApiError from "../utlis/customError.js";
import ApiResponse from "../utlis/ApiResponse.js";
import { imageUpload } from "../utlis/uploadCloudinary.js";

export const createTemplateController = AsyncHandeler(async (req, res) => {
	const { name } = req.body;

	if (!name) {
		throw new ApiError(400, "temaplte name is requried");
	}
	const exisTempalte = await Template.findOne({ name });

	if (exisTempalte) {
		throw new ApiError(400, "name already exists");
	}

	const templateImageLocalPath = req?.file?.path;

	if (!templateImageLocalPath) {
		throw new ApiError(400, "image file is requried");
	}

	const coloudinaryResponse = await imageUpload(templateImageLocalPath);

	const newTemplate = await Template.create({
		name,
		image_url: coloudinaryResponse.secure_url,
	});

	await newTemplate.save();

	res.status(201).json(
		new ApiResponse(
			"new teamplate created sucessfull",
			"template",
			newTemplate,
		),
	);
});

export const addLikeController = AsyncHandeler(async (req, res) => {
	const { Id } = req.params;

	const template = await Template.findById(Id);

	if (!template) {
		throw new ApiError(400, "temaplte id is not present database!!!!");
	}

	template.like_by_people = template.like_by_people + 1;
	await template.save();

	res.status(200).json(new ApiResponse("you liked this template"));
});

export const getAllTemplateController = AsyncHandeler(async (req, res) => {
	const alltemplate = await Template.find({});

	if (alltemplate.length == 0) {
		throw new ApiError(400, "NO template is there");
	}

	res.status(200).json(
		new ApiResponse(
			"all template fetch sucessfull",
			"templates",
			alltemplate,
		),
	);
});
