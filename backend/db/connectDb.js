import mongoose from "mongoose";




export const connectDb=async()=>{
	try{
		const connection= await mongoose.connect(`${process.env.MONGO_URI}/resume-builder`)
		console.log("databse connected sucessfully ")

	}
	catch(err){
		console.log(err)

	}
}