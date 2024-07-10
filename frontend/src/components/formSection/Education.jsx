import { useState, useEffect, useContext } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { resumeContext } from "../../context/resumeContext";

const formFeild = {
	degree_name: "",
	college_name: "",
	starting_date: "",
	ending_date: "",
	marks_CGPA: "",
	marks_percentage: "",
};

const Education = () => {
	const [educationList, setEducationList] = useState([formFeild]);
	const { resumeInfo, setResumeInfo } = useContext(resumeContext);

	const addEducation = () => {
		for (let key in formFeild) {
			formFeild[key] = "";
		}

		setEducationList([...educationList, formFeild]);
	};



	const handelChange = (e) => {
		const { dataset, name, value } = e.target;
		const newList = educationList.map((exp, i) => {
			if (dataset.key == i) {
				return { ...exp, [name]: value };
			}
			return exp;
		});
		setEducationList(newList);
	};


	const handelSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("resumeInfo", JSON.stringify(resumeInfo));
	};



	useEffect(() => {
		setResumeInfo({ ...resumeInfo, education: educationList });
	}, [educationList]);



	useEffect(() => {
		if (
			localStorage.getItem("resumeInfo") &&
			JSON.parse(localStorage.getItem("resumeInfo")).education.length > 0
		) {
			setEducationList(
				JSON.parse(localStorage.getItem("resumeInfo")).education,
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
						Education
					</h2>
					{educationList.map((edu,i) => (
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-full">
								<label
									htmlFor="first-name"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Degree
								</label>
								<div className="mt-2">
									<input
										data-key={i}
										id="first-name"
										name="degree_name"
										type="text"
										value={edu.degree_name}
										autoComplete="given-name"
										className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-full">
								<label
									htmlFor="last-name"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Institute name
								</label>
								<div className="mt-2">
									<input
										data-key={i}
										id="last-name"
										name="college_name"
										type="text"
										value={edu.college_name}
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
										name="starting_date"
										type="date"
											value={edu.starting_date}
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
											value={edu.ending_date}
										autoComplete="given-name"
										className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
					onClick={addEducation}
				>
					<IoMdAddCircleOutline size={20} />
					Add more education
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

export default Education;
