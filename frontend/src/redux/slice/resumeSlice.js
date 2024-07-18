import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTemplate } from "../../utils/resumeApi";



const resumeInfoObj = {
  personal_info: {
    firstname: "",
    lastname: "",
    email: "",
    contact_no: "",
    education_specalization: "",
    job_title: "",
    bio: "",
    address: "",
    img_url: "",
  },
  scocial_media_link: {
    linkdin: "",
    github: "",
    portFolio: "",
  },
  education: [],
  project: [],
  skills: [],
  experince: [],
  hobbies: [],
  certificates: [],
  training: [],
  achievement: "",
  languages: [],
  reference: [],
  themeColour: "",
};

export const getTemplateThunk=createAsyncThunk("getTemplateThunk",async()=>{
	try{
return await getTemplate()
	}
	catch(err){
		throw new Error(err.response.data.message)

	}
})


const resumeSlice=createSlice({

	name:"resume",
	initialState:{
		loading:false,
		resumeTemplate:null,
		userResume:null,
		resumeInfo:resumeInfoObj,
		message:null,
		error:null
	},
	reducers:{
		updateInfo:(state,action)=>{
			state.resumeInfo={...state.resumeInfo,[action.payload.fieldName]:action.payload.value}

		},

		clearMessage:(state,action)=>{
			state.message=null
		},
			clearError:(state,action)=>{
			state.error=null
		},

	},
	extraReducers:(builder)=>{
		builder.addCase(getTemplateThunk.pending,(state,action)=>{
			state.loading=true
		})
		.addCase(getTemplateThunk.fulfilled,(state,action)=>{
			state.loading=false
			state.resumeTemplate=action.payload.templates
		})
		.addCase(getTemplateThunk.rejected,(state,action)=>{
			state.loading=false
			state.error=action.error.message
		})
	}
})

export const {updateInfo,clearMessage,clearError}=resumeSlice.actions

export default resumeSlice.reducer