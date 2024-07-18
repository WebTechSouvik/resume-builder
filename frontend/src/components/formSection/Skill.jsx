import { useState, useEffect, useContext } from "react";
import { Rating } from "@smastrom/react-rating";
import { IoMdAddCircleOutline } from "react-icons/io";
import "@smastrom/react-rating/style.css";
import { resumeContext } from "../../context/resumeContext";
import { RiArrowUpDownLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { updateInfo } from "../../redux/slice/resumeSlice";

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

const Skill = () => {
	const [skillList, setSkillList] = useState([
		{ skill_name: "", rating: "", isOpen: true },
	]);

	const dispatch = useDispatch();

	const addSkill = () => {
	

		const newList = skillList.map((skill, index) => {
			if (index === skillList.length - 1) {
				return { ...skill, isOpen: false };
			}
			return skill;
		});

		newList.push({ skill_name: "", rating: "", isOpen: true });

		setSkillList(newList);
	};

	const toggleFormView = (e) => {
		if (e.target.nodeName !== "svg") return;
		const { dataset } = e.target.parentElement;
		console.log(dataset.key);
		const newList = skillList.map((skill, i) => {
			if (i == dataset.key) {
				return { ...skill, isOpen: !skill.isOpen };
			}
			return skill;
		});
		console.log(newList);
		setSkillList(newList);
	};

	const handleInputChange = (e) => {
		const { dataset, name, value } = e.target;

		const newList = skillList.map((skill, i) => {
			if (dataset.key == i) {
				return { ...skill, [name]: value };
			}
			return skill;
		});

		setSkillList(newList);
	};
	const handleratingChange = (val, current) => {
		const newList = skillList.map((skill, i) => {
			if (current == i) {
				return { ...skill, rating: val };
			}
			return skill;
		});

		setSkillList(newList);
	};

	const handelSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("resumeInfo", JSON.stringify(resumeInfo));
	};

	useEffect(() => {
		dispatch(updateInfo({ fieldName: "skills", value: skillList }));
	}, [skillList]);

	// useEffect(() => {
	// 	if (
	// 		localStorage.getItem("resumeInfo") &&
	// 		JSON.parse(localStorage.getItem("resumeInfo")).skills.length > 0
	// 	) {
	// 		setSkillList(JSON.parse(localStorage.getItem("resumeInfo")).skills);
	// 	}
	// }, []);

	return (
		<form className="" onSubmit={(e) => handelSubmit(e)}>
			<div className="space-y-12">
				<div
					className=" shadow-xl border-t-4 border-t-[#00c8aa] border-[1px] border-x-gray-300 border-b-gray-300 p-6  rounded-lg"
					onChange={(val) => handleInputChange(val)}
					onClick={toggleFormView}
				>
					<h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
						Skill
					</h2>
					{skillList.map((skill, i) => (
						<div
							className="mt-10 border-[1px] border-gray-300 p-4 rounded-md"
							key={i}
						>
							<div className="flex justify-between">
								<span className="col-span-5 font-semibold">
									#Skill {i + 1}
								</span>

								<motion.div
									initial={false}
									animate={skill.isOpen ? "open" : "close"}
									variants={rotateButtonVarients}
									data-key={i}
									className="col-span-1 place-self-end text-2xl"
								>
									<RiArrowUpDownLine className="cursor-pointer" />
								</motion.div>
							</div>
							<AnimatePresence>
								{skill.isOpen && (
									<motion.div
										initial="close"
										animate="open"
										exit="close"
										variants={themeVariant}
										className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
									>
										<div className="sm:col-span-2">
											<label
												htmlFor="first-name"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Skill Name
											</label>
											<div className="mt-2">
												<input
													data-key={i}
													id="first-name"
													name="skill_name"
													type="text"
													value={skill.skill_name}
													autoComplete="given-name"
													className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="col-span-4 self-center place-self-end">
											<Rating
												style={{ maxWidth: 160 }}
												value={
													skill.rating
														? skill.rating
														: 0
												}
												onChange={(val) =>
													handleratingChange(val, i)
												}
											/>
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
					onClick={addSkill}
				>
					<IoMdAddCircleOutline size={20} />
					Add more skill
				</button>

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

export default Skill;
