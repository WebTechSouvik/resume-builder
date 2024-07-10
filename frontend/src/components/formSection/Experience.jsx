import { useEffect, useState, useContext } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { resumeContext } from "../../context/resumeContext";

const formField = {
	job_tittle: "",
	comapny_name: "",
	joining_date: "",
	leaving_date: "",
	job_type: "",
	description_of_job_role: "",
};

const Experience = () => {
	const [experienceList, setExperienceList] = useState([formField]);
	const { resumeInfo, setResumeInfo } = useContext(resumeContext);

	const addExperience = () => {
		for (let key in formField) {
			formField[key] = "";
		}

		setExperienceList([...experienceList, formField]);
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
		localStorage.setItem("resumeInfo", JSON.stringify(resumeInfo));
	};


	useEffect(() => {
		setResumeInfo({ ...resumeInfo, experince: experienceList });
	}, [experienceList]);
	

	useEffect(() => {
		if (localStorage.getItem("resumeInfo") && JSON.parse(localStorage.getItem("resumeInfo")).experince.length>0) {
			setExperienceList(
				JSON.parse(localStorage.getItem("resumeInfo")).experince,
			);
		}
	}, []);
	

	return (
		<form className="" onSubmit={(e) => handelSubmit(e)}>
			<div className="space-y-12">
				<div
					className=" shadow-xl border-t-4 border-t-[#00c8aa] border-[1px] border-x-gray-300 border-b-gray-300 p-6  rounded-lg"
					onChange={(e) => handelChange(e)}
				>
					<h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
						Work Experience
					</h2>
					{experienceList.map((exp, i) => (
						<div
							className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
							key={i}
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
										value={exp.description_of_job_role}
									/>
								</div>
							</div>
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
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Save
				</button>
			</div>
		</form>
	);
};

export default Experience;
