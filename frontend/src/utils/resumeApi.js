import axios from "axios";
import { RiExpandUpDownFill } from "react-icons/ri";

axios.defaults.withCredentials = true;

export const getTemplate = async () => {
	const { data } = await axios.get("http://localhost:8000/api/v1/template");
	return data;
};

export const createResume = async (templateId, resumeInfo) => {
	const configs = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const { data } = await axios.post(
		"http://localhost:8000/api/v1/resume",
		{ templateId, resumeInfo },
		configs,
	);
	return data;
};

export const updateResume = async (Id, resumeInfo) => {
	const configs = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const { data } = await axios.put(
		"http://localhost:8000/api/v1/resume/" + Id,
		{ resumeInfo },
		configs,
	);
	return data;
};

export const getSingleResume = async (Id) => {
	const { data } = await axios.get(
		"http://localhost:8000/api/v1/resume/" + Id,
	);
	return data;
};

export const uploadImage = async (resumeId, avtar) => {
	const configs = {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	};

	const { data } = await axios.post(
		"http://localhost:8000/api/v1/resume/upload-image",
		{ resumeId, avtar },
		configs,
	);
	return data;
};

export const changeColor = async (resumeId, themeColour) => {
	const configs = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const { data } = await axios.post(
		"http://localhost:8000/api/v1/resume/change-color",
		{ resumeId, themeColour },
		configs,
	);
	return data;
};
export const uploadResumeImage = async (resumeId, resumeImge) => {
	const configs = {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	};

	const { data } = await axios.post(
		"http://localhost:8000/api/v1/resume/upload-resume-image",
		{ resumeId, resumeImge },
		configs,
	);
	return data;
};

export const getuserResume = async (resumeId, resumeImge) => {
	const { data } = await axios.get("http://localhost:8000/api/v1/resume");
	return data;
};
