import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
	email:{
		type:String,
		unique:[true,"email already exists"],
		required:[true,"email is required"]

	},
	password:{
		type:String,
		required:[true,"password is required"]
	},
	fullname:{
		type:String,

	},
	avtar:{
		type:String
	},
	templateCollection:[
	{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Template"
	}
	]

},{timestamps:true})




export const User=mongoose.model("User",userSchema)