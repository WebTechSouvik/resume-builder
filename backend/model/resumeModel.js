import mongoose from "mongoose";


const resumeSchema =new mongoose.Schema({
	owner:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"User"
	},
	template:{

		type:mongoose.Schema.Types.ObjectId,
		ref:"Template"

	},
	resume_info:{
		type:Object,
		required:[true,"resume informatiom is requried"]
	}


},{timestamps:true})

export const Resume=mongoose.model("Resume",resumeSchema)