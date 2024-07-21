import { useState, useEffect, useContext } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { resumeContext } from "../../context/resumeContext";
import {
	BtnBold,
	BtnItalic,
	Editor,
	EditorProvider,
	Toolbar,
	BtnBulletList,
	BtnClearFormatting,
	BtnLink,
	BtnNumberedList,
	BtnRedo,
	BtnStrikeThrough,
	BtnStyles,
	BtnUnderline,
	BtnUndo,
	HtmlButton,
	Separator,
} from "react-simple-wysiwyg";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowUpDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { clearError, clearMessage, updateInfo, updateResumeThunk } from "../../redux/slice/resumeSlice";
import { useParams } from "react-router-dom";
import {toast} from "sonner"
import { ClipLoader } from "react-spinners";

const formField = {
	project_name: "",
	starting_date: "",
	ending_date: "",
	description: "",
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

const Project = () => {
	 const {resumeInfo,loading,message,error}=useSelector(state=>state.resume)

	const [projectList, setProjectList] = useState(resumeInfo.project.length > 0 ? resumeInfo.project :[formField]);
   const dispatch=useDispatch()
   	const {Id}=useParams()
  
	const addproject = () => {
		const formField = {
			project_name: "",
			starting_date: "",
			ending_date: "",
			description: "",
			isOpen: true,
		};
		const newList = projectList.map((project, index) => {
			if (index === projectList.length - 1) {
				return( { ...project, isOpen:false});
			}
			return project;
		});

		newList.push(formField);

		setProjectList(newList);
	};

	const toggleFormView = (e) => {
			if(e.target.nodeName!=="svg")return
		const { dataset } = e.target.parentElement;
		console.log(dataset.key);
		const newList = projectList.map((exp, i) => {
			if (i == dataset.key) {
				return { ...exp, isOpen: !exp.isOpen };
			}
			return exp;
		});
		console.log(newList);
		setProjectList(newList);
	};

	const handleInputChange = (e) => {
		const { dataset, name, value } = e.target;

		const newList = projectList.map((proj, i) => {
			if (dataset.key == i) {
				return { ...proj, [name]: value };
			}
			return proj;
		});

		setProjectList(newList);
	};
	const handelEditorChange = (val, current) => {
		const newList = projectList.map((proj, i) => {
			if (current == i) {
				return { ...proj, description: val };
			}
			return proj;
		});

		setProjectList(newList);
	};

	const handelSubmit = (e) => {
		e.preventDefault();
		dispatch(updateResumeThunk({Id,resumeInfo}))
	};

	useEffect(() => {
		dispatch(updateInfo({fieldName:"project",value:projectList}))
		
	}, [projectList]);


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
		<form className="" onSubmit={handelSubmit}>
			<div className="space-y-12">
				<div
					className="border-dotted border-[1px] border-gray-500 p-6 rounded-md"
					onChange={handleInputChange}
					onClick={toggleFormView}
				>
					<h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
						Project details
					</h2>

					{projectList.map((proj, i) => (
						<div className="mt-10">
							<div className="flex justify-between">
								<span className="col-span-5 font-semibold">
									#Project {i + 1}
								</span>

								<motion.div
									initial={false}
									animate={proj.isOpen ? "open" : "close"}
									variants={rotateButtonVarients}
									data-key={i}
									className="col-span-1 place-self-end text-2xl"
								>
									<RiArrowUpDownLine className="cursor-pointer" />
								</motion.div>
							</div>
							<AnimatePresence>
								{proj.isOpen && (
									<div
										initial="close"
										animate="open"
										exit="close"
										variants={themeVariant}
										className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
									>
										<div className="sm:col-span-full">
											<label
												htmlFor="first-name"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Project Title
											</label>
											<div className="mt-2">
												<input
													data-key={i}
													id="first-name"
													name="project_name"
													type="text"
													value={proj.project_name}
													autoComplete="given-name"
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
													name="starting_date"
													type="date"
													value={proj.starting_date}
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
													name="ending_date"
													type="date"
													value={proj.ending_date}
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
												Description
											</label>
											<div className="mt-2">
												<EditorProvider>
													<Editor
														value={proj.description}
														onChange={(e) =>
															handelEditorChange(
																e.target.value,
																i,
															)
														}
													>
														<Toolbar>
															<BtnBold />
															<BtnItalic />
															<BtnUnderline />

															<BtnNumberedList />
															<BtnBulletList />

															<BtnLink />
														</Toolbar>
													</Editor>
												</EditorProvider>
											</div>
										</div>
									</div>
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
					onClick={addproject}
				>
					<IoMdAddCircleOutline size={20} />
					Add more project
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

export default Project;
