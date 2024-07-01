import mongoose from "mongoose";


const templateSchema=new mongoose.Schema({
	name:{
		type:String,
		unique:[true,"name already exists"],
		required:[true,"name is required"]
	},
	image_url:{
		type:String,
		required:[true,"image_url is required"]
	},
	like_by_people:{
		type:Number,
		default:0
	}
},{timestamps:true})

export const Template=mongoose.model("Template",templateSchema)