import axios from "axios";

export const userRegister = async (userInfo) => {
	const configs = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const { data } = await axios.post(
		"http://localhost:8000/api/v1/user/register",
		userInfo,
		configs,
	);

	return data;
};

export const userLoggin = async (userInfo) => {
	const configs = {
		headers: {
			"Content-Type": "application/json",
		},
		withCredentials: true,
	};
	const { data } = await axios.post(
		"http://localhost:8000/api/v1/user/loggin",
		userInfo,
		configs,
	);
	return data;
};

export const useLogout = async () => {
	const { data } = await axios.post(
		"http://localhost:8000/api/v1/user/loggout",
		null,
		{
			withCredentials: true,
		},
	);
	return data;
};

export const userDetails = async () => {
	const configs = {
		withCredentials: true,
	};

	const { data } = await axios.get(
		"http://localhost:8000/api/v1/user/details",
		configs,
	);
	return data;
};

export const updateUserDetails = async (updateInfo) => {
	const configs = {
		headers: {
			"Content-Type": "application/json",
		},
		withCredentials: true,
	};

	const { data } = await axios.patch(
		"http://localhost:8000/api/v1/user/details",
		updateInfo,
		configs,
	);
	return data;
};

export const updateProfilePicture = async (avtar) => {
	const configs = {
		headers: {
			"Content-Type": "multipart/form-data",
		},
		withCredentials: true,
	};

	const { data } = await axios.post(
		"http://localhost:8000/api/v1/user/upload-image",
		avtar,
		configs,
	);

	return data;
};
