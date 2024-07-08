import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
	{
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		template: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Template",
		},
		resume_info: {
			personal_info: {
				firstname: {
					type: String,
				},
				lastname: {
					type: String,
				},
				email: {
					type: String,
				},
				contact_no: {
					type: String,
				},
				education_specalization: {
					type: String,
				},
				job_title:{
					type:String
				},
				bio: {
					type: String,
				},
				address: {
					type: String,
				},
				img_url: {
					type: String,
				},
			},
			scocial_media_link: {
				linkdin: {
					type: String,
				},
				github: {
					type: String,
				},
				portFolio: {
					type: String,
				},
			},
			education: [
				{
					degree_name: {
						type: String,
					},
					college_name: {
						type: String,
					},
					starting_date: {
						type: String,
					},
					ending_date: {
						type: String,
					},
					marks_CGPA: {
						type: String,
					},
					marks_percentage: {
						type: String,
					},
				},
			],
			project: [
				{
					project_name: {
						type: String,
					},
					starting_date: {
						type: String,
					},
					ending_date: {
						type: String,
					},
					live_link: {
						type: String,
					},
					description: {
						type: String,
					},
				},
			],
			skills: [
				{
					type: String,
				},
			],
			experince: [
				{
					job_tittle: {
						type: String,
					},
					comapny_name: {
						type: String,
					},
					joining_date: {
						type: String,
					},
					leaving_date: {
						type: String,
					},
					job_type: {
						type: String,
					},
					description_of_job_role: {
						type: String,
					},
				},
			],
			hobbies: [
				{
					type: String,
				},
			],
			certificates: [
				{
					certificate_name: {
						type: String,
					},
					issuing_org: {
						type: String,
					},
					starting_date: {
						type: String,
					},
					ending_date: {
						type: String,
					},
				},
			],
			training: [
				{
					training_name: {
						type: String,
					},
					issuing_org: {
						type: String,
					},
					starting_date: {
						type: String,
					},
					ending_date: {
						type: String,
					},
				},
			],

			languages: [
				{
					type: String,
				},
			],
		},
	},
	{ timestamps: true },
);

export const Resume = mongoose.model("Resume", resumeSchema);
