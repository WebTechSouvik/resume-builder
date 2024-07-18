import { useContext, useEffect, useState } from "react";
import { resumeContext } from "../../context/resumeContext";
import { useDispatch } from "react-redux";
import { updateInfo } from "../../redux/slice/resumeSlice";

const formField = {
	firstname: "",
	lastname: "",
	email: "",
	contact_no: "",
	education_specalization: "",
	job_title: "",
	bio: "",
	address: "",
	img_url: "",
};

const PersonalDetails = () => {
	const [personalInfo, setPersonalInfo] = useState(formField);
	const dispatch = useDispatch();

	const handelChange = (e) => {
		const { name, value } = e.target;

		setPersonalInfo({ ...personalInfo, [name]: value });
	};

	const handelSubmit = (e) => {
		e.preventDefault();
		// localStorage.setItem("resumeInfo",JSON.stringify(resumeInfo))
	};

	useEffect(() => {
		dispatch(
			updateInfo({ fieldName: "personal_info", value: personalInfo }),
		);
		// setResumeInfo({ ...resumeInfo, personal_info: personalInfo });
	}, [personalInfo]);

	useEffect(() => {
		if (localStorage.getItem("resumeInfo")) {
			setPersonalInfo(
				JSON.parse(localStorage.getItem("resumeInfo")).personal_info,
			);
		}
	}, []);

	return (
		<form className="" onSubmit={(e) => handelSubmit(e)}>
			<div className="space-y-12">
				<div className=" shadow-xl border-t-4 border-t-[#00c8aa] border-[1px] border-x-gray-300 border-b-gray-300 p-6  rounded-lg">
					<h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
						Personal Information
					</h2>

					<div
						className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
						onChange={(e) => handelChange(e)}
					>
						<div className="sm:col-span-3">
							<label
								htmlFor="first-name"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								First name
							</label>
							<div className="mt-2">
								<input
									id="first-name"
									name="firstname"
									type="text"
									autoComplete="given-name"
									value={personalInfo.firstname}
									className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="last-name"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Last name
							</label>
							<div className="mt-2">
								<input
									id="last-name"
									name="lastname"
									type="text"
									autoComplete="family-name"
									value={personalInfo.lastname}
									className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-full">
							<label
								htmlFor="first-name"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Job title
							</label>
							<div className="mt-2">
								<input
									id="first-name"
									name="job_title"
									type="text"
									autoComplete="given-name"
									value={personalInfo.job_title}
									className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-3">
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									value={personalInfo.email}
									className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-3">
							<label
								htmlFor="first-name"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Phone no
							</label>
							<div className="mt-2">
								<input
									id="first-name"
									name="contact_no"
									type="number"
									autoComplete="given-name"
									value={personalInfo.contact_no}
									className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="col-span-full">
							<label
								htmlFor="street-address"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Address
							</label>
							<div className="mt-2">
								<input
									id="street-address"
									name="address"
									type="text"
									autoComplete="street-address"
									value={personalInfo.address}
									className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="col-span-full">
							<label
								htmlFor="about"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								About
							</label>
							<div className="mt-2">
								<textarea
									id="about"
									name="bio"
									rows={3}
									className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={personalInfo.bio}
								/>
							</div>
							<p className="mt-3 text-sm leading-6 text-gray-600">
								Write a few sentences about yourself.
							</p>
						</div>
						<div className="col-span-full">
							<label
								htmlFor="cover-photo"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Photo
							</label>
							<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
								<div className="text-center">
									<div className="mt-4 flex text-sm leading-6 text-gray-600">
										<label
											htmlFor="file-upload"
											className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
										>
											<span>Upload a file</span>
											<input
												id="file-upload"
												name="img_url"
												type="file"
												className="sr-only"
											/>
										</label>
										<p className="pl-1">or drag and drop</p>
									</div>
									<p className="text-xs leading-5 text-gray-600">
										PNG, JPG, GIF up to 10MB
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Save
				</button>
			</div>
		</form>
	);
};

export default PersonalDetails;
