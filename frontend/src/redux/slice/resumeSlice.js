import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	changeColor,
	createResume,
	getSingleResume,
	getTemplate,
	getuserResume,
	updateResume,
	uploadImage,
	uploadResumeImage,
} from "../../utils/resumeApi";

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

export const getTemplateThunk = createAsyncThunk(
	"getTemplateThunk",
	async () => {
		try {
			return await getTemplate();
		} catch (err) {
			throw new Error(err.response.data.message);
		}
	},
);

export const createResumeThunk = createAsyncThunk(
	"createResumeThunk",
	async ({ templateId, resumeInfo }) => {
		try {
			return await createResume(templateId, resumeInfo);
		} catch (err) {
			throw new Error(err.response.data.message);
		}
	},
);

export const updateResumeThunk = createAsyncThunk(
	"updateResumeThunk",
	async ({ Id, resumeInfo }) => {
		try {
			return await updateResume(Id, resumeInfo);
		} catch (err) {
			throw new Error(err.response.data.message);
		}
	},
);

export const getSingleResumeThunk = createAsyncThunk(
	"getSingleResumeThunk",
	async (Id) => {
		try {
			return await getSingleResume(Id);
		} catch (err) {
			throw new Error(err.response.data.message);
		}
	},
);

export const uploadImageThunk = createAsyncThunk(
	"uploadImageThunk",
	async ({ resumeId, avtar }) => {
		try {
			return await uploadImage(resumeId, avtar);
		} catch (err) {
			throw new Error(err.response.data.message);
		}
	},
);

export const changeColorThunk = createAsyncThunk(
	"changeColorThunk",
	async ({ resumeId, themeColour }) => {
		try {
			return await changeColor(resumeId, themeColour);
		} catch (err) {
			throw new Error(err.response.data.message);
		}
	},
);

export const uploadResumeImageThunk = createAsyncThunk(
	"uploadResumeImageThunk",
	async ({ resumeId, resumeImge }) => {
		try {
			return await uploadResumeImage(resumeId, resumeImge);
		} catch (err) {
			throw new Error(err.response.data.message);
		}
	},
);

export const getuserResumeThunk = createAsyncThunk(
	"getuserResumeThunk",
	async () => {
		try {
			return await getuserResume();
		} catch (err) {
			throw new Error(err.response.data.message);
		}
	},
);

const resumeSlice = createSlice({
	name: "resume",
	initialState: {
		loading: false,
		imgLoading: false,
		resumeLoading: false,
		resumeTemplate: null,
		userResume: null,
		resumeInfo: null,
		recentResume: null,
		message: null,
		error: null,
	},
	reducers: {
		updateInfo: (state, action) => {
			state.resumeInfo = {
				...state.resumeInfo,
				[action.payload.fieldName]: action.payload.value,
			};
		},

		clearMessage: (state, action) => {
			state.message = null;
		},
		clearError: (state, action) => {
			state.error = null;
		},
		clearRecentResume: (state, action) => {
			state.recentResume = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTemplateThunk.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getTemplateThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.resumeTemplate = action.payload.templates;
			})
			.addCase(getTemplateThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(createResumeThunk.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(createResumeThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.recentResume = action.payload.resumeId;
				state.message = action.payload.message;
			})
			.addCase(createResumeThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(updateResumeThunk.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(updateResumeThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.message = action.payload.message;
			})
			.addCase(updateResumeThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(getSingleResumeThunk.pending, (state, action) => {
				state.resumeLoading = true;
			})
			.addCase(getSingleResumeThunk.fulfilled, (state, action) => {
				state.resumeLoading = false;
				state.resumeInfo = action.payload.resume.resume_info;
			})
			.addCase(getSingleResumeThunk.rejected, (state, action) => {
				state.resumeLoading = false;
				state.error = action.error.message;
			})
			.addCase(uploadImageThunk.pending, (state, action) => {
				state.imgLoading = true;
			})
			.addCase(uploadImageThunk.fulfilled, (state, action) => {
				state.imgLoading = false;
				state.resumeInfo.personal_info.avtar = action.payload.img_url;
				state.message = action.payload.message;
			})
			.addCase(uploadImageThunk.rejected, (state, action) => {
				state.imgLoading = false;
				state.error = action.error.message;
			})
			.addCase(changeColorThunk.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(changeColorThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.resumeInfo.themeColour = action.payload.themeColour;
				state.message = action.payload.message;
			})
			.addCase(changeColorThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(uploadResumeImageThunk.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(uploadResumeImageThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.message = action.payload.message;
			})
			.addCase(uploadResumeImageThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(getuserResumeThunk.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getuserResumeThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.userResume = action.payload.userResume;
			})
			.addCase(getuserResumeThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
	},
});

export const { updateInfo, clearMessage, clearError, clearRecentResume } =
	resumeSlice.actions;

export default resumeSlice.reducer;
