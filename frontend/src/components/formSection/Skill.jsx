import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { IoMdAddCircleOutline } from "react-icons/io";


import "@smastrom/react-rating/style.css";

const Skill = () => {
	const [skill, setSkill] = useState({ name: "", rating: "" });
	const [skillList, setSkillList] = useState([skill]);

const addSkill=()=>{
	setSkill({ name: "", rating: "" })

	setSkillList([...skillList,{ name: "", rating: "" }])
}

	return (
		<form className="">
			<div className="space-y-12">
				<div className=" shadow-xl border-t-4 border-t-[#00c8aa] border-[1px] border-x-gray-300 border-b-gray-300 p-6  rounded-lg">
					<h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
						Skill
					</h2>
					{skillList.map(() => (
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border-[1px] border-gray-300 p-4 rounded-md">
							<div className="sm:col-span-2">
								<label
									htmlFor="first-name"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Skill Name
								</label>
								<div className="mt-2">
									<input
										id="first-name"
										name="degree_name"
										type="text"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="col-span-4 self-center place-self-end">
								<Rating
									style={{ maxWidth: 160 }}
									value={skill.rating?skill.rating:0}
									onChange={(val)=>setSkill((prev)=>({...prev,rating:val}))}
								/>
							</div>
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
