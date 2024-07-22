import { Resume } from "../model/resumeModel.js";
import AsyncHandeler from "../utlis/AsyncHandeler.js";
import ApiError from "../utlis/customError.js";
import ApiResponse from "../utlis/ApiResponse.js";
import { imageUpload } from "../utlis/uploadCloudinary.js";

// create resume controller

export const createResumeController = AsyncHandeler(async (req, res) => {
	const { templateId, resumeInfo } = req.body;

	const newResume = await Resume.create({
		owner: req.user,
		template: templateId,
		resume_info: resumeInfo,
	});

	await newResume.save();

	res.status(201).json(
		new ApiResponse("resume created sucessfull", "resumeId", newResume._id),
	);
});

export const updateResumeController = AsyncHandeler(async (req, res) => {
	const { resumeId } = req.params;
	const { resumeInfo } = req.body;

	const updatedResume = await Resume.findByIdAndUpdate(
		resumeId,
		{ $set: { resume_info: resumeInfo } },
		{ new: true },
	);

	res.status(200).json(new ApiResponse("Changes saved"));
});

export const getSingleResumeController = AsyncHandeler(async (req, res) => {
	const { resumeId } = req.params;

	const resume = await Resume.findById(resumeId);

	res.status(200).json(
		new ApiResponse(
			`resume found for this id ${resumeId}`,
			"resume",
			resume,
		),
	);
});

export const uploadAvtarController = AsyncHandeler(async (req, res) => {
	const avtar = req.file.path;
	const { resumeId } = req.body;

	if (!avtar) {
		throw new ApiError(400, "image file is requried");
	}
	const cloudenaryResponse = await imageUpload(avtar);

	await Resume.findByIdAndUpdate(
		resumeId,
		{
			$set: {
				"resume_info.personal_info.avtar":
					cloudenaryResponse.secure_url,
			},
		},
		{ new: true },
	);
	res.status(201).json(
		new ApiResponse(
			"profile picture updated",
			"img_url",
			cloudenaryResponse.secure_url,
		),
	);
});

export const chnageThemeColorController = AsyncHandeler(async (req, res) => {
	const { themeColour, resumeId } = req.body;

	await Resume.findByIdAndUpdate(
		resumeId,
		{ $set: { "resume_info.themeColour": themeColour } },
		{ new: true },
	);

	res.status(201).json(
		new ApiResponse("Theme color updated", "themeColour", themeColour),
	);
});

export const uploadResumeImageComtroller = AsyncHandeler(async (req, res) => {
	const resumeImge = req.file.path;
	const { resumeId } = req.body;

	if (!resumeImge) {
		throw new ApiError(400, "image file is requried");
	}
	const cloudenaryResponse = await imageUpload(resumeImge);

	await Resume.findByIdAndUpdate(
		resumeId,
		{
			$set: {
				resume_img_url: cloudenaryResponse.secure_url,
			},
		},
		{ new: true },
	);

	res.status(201).json(
		new ApiResponse(
			"resume picture updated",
			"img_url",
			cloudenaryResponse.secure_url,
		),
	);
});

export const getUserResumeController = AsyncHandeler(async (req, res) => {
	const id = req.user;

	const userResume = await Resume.find({
		owner: id,
		resume_img_url: { $exists: true },
	}).select(["resume_img_url","createdAt","updatedAt"]);

	if (userResume.length == 0) {
		res.status(200).json(new ApiResponse("no resume found"));
	}

	res.status(200).json(
		new ApiResponse(" resume found", "userResume", userResume),
	);
});
