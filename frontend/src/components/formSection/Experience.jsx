import { useEffect, useState, useContext } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { resumeContext } from "../../context/resumeContext";
import { RiArrowUpDownLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { clearError, clearMessage, updateInfo, updateResumeThunk } from "../../redux/slice/resumeSlice";
import { useParams } from "react-router-dom";
import {toast} from "sonner"
import { ClipLoader } from "react-spinners";

const formField = {
	job_tittle: "",
	comapny_name: "",
	joining_date: "",
	leaving_date: "",
	job_type: "",
	description_of_job_role: "",
	isOpen: true,
};

const themeVariant = {
	close: {
		clipPath: "inset(0% 0% 100% 0% )",
		transition: {
			type: "spring",
			bounce: 0,
			duration: 0.3,
		},
	},
	open: {
		clipPath: "inset(0% 0% 0% 0% )",
		transition: {
			type: "spring",
			bounce: 0,
			duration: 0.3,
		},
	},
};

const rotateButtonVarients = {
	close: {
		rotate: 0,
		transition: {
			duration: 0.3,
		},
	},
	open: {
		rotate: 180,
		transition: {
			duration: 0.3,
		},
	},
};

const Experience = () => {
	const { recentResume, resumeInfo,loading,message,error } = useSelector((state) => state.resume);
	const [experienceList, setExperienceList] = useState(
		resumeInfo.experince.length > 0 ? resumeInfo.experince : [formField],
	);
	const dispatch = useDispatch();
		const {Id}=useParams()




	useEffect(() => {
		setExperienceList(resumeInfo.experince);
	}, [resumeInfo]);




	const addExperience = () => {
		const formField = {
			job_tittle: "",
			comapny_name: "",
			joining_date: "",
			leaving_date: "",
			job_type: "",
			description_of_job_role: "",
			isOpen: true,
		};

		const newList = experienceList.map((experience, index) => {
			if (index === experienceList.length - 1) {
				return { ...experience, isOpen: false };
			}
			return experience;
		});

		newList.push(formField);

		setExperienceList(newList);
	};



	const toggleFormView = (e) => {
		if (e.target.nodeName !== "svg") return;
		const { dataset } = e.target.parentElement;

		console.log(dataset.key);
		const newList = experienceList.map((exp, i) => {
			if (i == dataset.key) {
				return { ...exp, isOpen: !exp.isOpen };
			}
			return exp;
		});
		console.log(newList);
		setExperienceList(newList);
	};



	const handelChange = (e) => {
		const { dataset, name, value } = e.target;
		const newList = experienceList.map((exp, i) => {
			if (dataset.key == i) {
				return { ...exp, [name]: value };
			}
			return exp;
		});
		setExperienceList(newList);
	};



	const handelSubmit = (e) => {
		e.preventDefault();
		dispatch(updateResumeThunk({ Id, resumeInfo }));
	};



	useEffect(() => {
		dispatch(updateInfo({ fieldName: "experince", value: experienceList }));
	}, [experienceList]);


	useEffect(() => {
		if (message) {
			toast.success(message);
			dispatch(clearMessage());
			
		}
		if (error) {
			toast.error(error);
			dispatch(clearError());
		}
	}, [message, error]);


	return (
		<form className="" onSubmit={(e) => handelSubmit(e)}>
			<div className="space-y-12">
				<div
					className=" shadow-xl border-t-4 border-t-[#00c8aa] border-[1px] border-x-gray-300 border-b-gray-300 p-6  rounded-lg"
					onChange={(e) => handelChange(e)}
					onClick={toggleFormView}
				>
					<h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
						Work Experience
					</h2>
					{experienceList.map((exp, i) => (
						<div className="mt-10" key={i}>
							<div className="flex justify-between">
								<span className="col-span-5 font-semibold">
									#Experience {i + 1}
								</span>

								<motion.div
									initial={false}
									animate={exp.isOpen ? "open" : "close"}
									variants={rotateButtonVarients}
									data-key={i}
									className="col-span-1 place-self-end text-2xl"
								>
									<RiArrowUpDownLine className="cursor-pointer" />
								</motion.div>
							</div>
							<AnimatePresence>
								{exp.isOpen && (
									<motion.div
										initial="close"
										animate="open"
										exit="close"
										variants={themeVariant}
										className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
									>
										<div className="sm:col-span-3">
											<label
												htmlFor="first-name"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Position Title
											</label>
											<div className="mt-2" data-key={i}>
												<input
													data-key={i}
													id="first-name"
													name="job_tittle"
													type="text"
													value={exp.job_tittle}
													autoComplete="given-name"
													className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="sm:col-span-3">
											<label
												htmlFor="last-name"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Company Name
											</label>
											<div className="mt-2">
												<input
													data-key={i}
													id="last-name"
													name="comapny_name"
													type="text"
													value={exp.comapny_name}
													autoComplete="family-name"
													className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="sm:col-span-3">
											<label
												htmlFor="email"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Start Date
											</label>
											<div className="mt-2">
												<input
													data-key={i}
													id="email"
													name="joining_date"
													type="date"
													value={exp.joining_date}
													autoComplete="email"
													className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>
										<div className="sm:col-span-3">
											<label
												htmlFor="first-name"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												End Date
											</label>
											<div className="mt-2">
												<input
													data-key={i}
													id="first-name"
													name="leaving_date"
													type="date"
													value={exp.leaving_date}
													autoComplete="given-name"
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
													data-key={i}
													id="about"
													name="description_of_job_role"
													rows={3}
													className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
													value={
														exp.description_of_job_role
													}
												/>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>

			<div className="mt-6 flex items-center justify-between gap-x-6">
				<button
					type="button"
					className="text-sm font-semibold leading-6 text-[#1f262e] flex items-center gap-1"
					onClick={addExperience}
				>
					<IoMdAddCircleOutline size={20} />
					Add more experience
				</button>

				<button
					type="submit"
					className="rounded-md bg-indigo-600 w-20 h-10 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>{
					loading?<ClipLoader loading={true} size={20}/>:"Save"
					
				}
				</button>
			</div>
		</form>
	);
};

export default Experience;
