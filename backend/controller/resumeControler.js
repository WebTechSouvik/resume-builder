import { Resume } from "../model/resumeModel";
import AsyncHandeler from "../utlis/AsyncHandeler.js";
import ApiError from "../utlis/customError.js";
import ApiResponse from "../utlis/ApiResponse.js";


// create resume controller 


export const createResumeController=AsyncHandeler(async(req,res)=>{

	const {templateId,resume_info}=req.body

	const newResume=await Resume.create({owner:req.user,template:templateId,resume_info})

	await newResume.save()

	res.status(201).json(new ApiResponse("resume created sucessfull"))

})

export const updateResumeController=AsyncHandeler(async(req,res)=>{

	const {resumeId}=req.params
	
	const updatedResumeInfo={}

	Object.keys(req.body).forEach((key)=>{
		updatedResumeInfo[`resume_info.${key}`]=req.body[key]
	})

	const updatedResume=Resume.findByIdAndUpdate(resumeId,{$set:updatedResumeInfo},{new:true})

	res.status(200).json(new ApiResponse("resume updated suceesfully"))
	
})

export const getUserResumeController=AsyncHandeler(async(req,res)=>{
	
})