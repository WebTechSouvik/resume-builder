import mongoose from "mongoose";


const templateSchema=new mongoose.Schema({
	name:{
		type:String,
		unique:[true,"email already exists"],
		required:[true,"email is required"]
	},
	image_url:{
		type:String,
		required:[true,"email is required"]
	},
	like_by_people:{
		type:Number,
		default:0
	}
},{timestamps:true})

export const Template=mongoose.model("Template",templateSchema)