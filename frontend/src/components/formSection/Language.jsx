import { useEffect, useState, useContext } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { resumeContext } from "../../context/resumeContext";

const Language = () => {
	const [languageList, setLanguageList] = useState([
		{ language_name: "", proficiancy: "" },
	]);
	const { resumeInfo, setResumeInfo } = useContext(resumeContext);

	const addLanguage = () => {
		setLanguageList([...languageList, { name: "", rating: "" }]);
	};
	const handelChange = (e) => {
		const { dataset, name, value } = e.target;
		const newList = languageList.map((exp, i) => {
			if (dataset.key == i) {
				return { ...exp, [name]: value };
			}
			return exp;
		});
		setLanguageList(newList);
	};

	const handelSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("resumeInfo", JSON.stringify(resumeInfo));
	};

	useEffect(() => {
		setResumeInfo({ ...resumeInfo, languages: languageList });
	}, [languageList]);

	useEffect(() => {
		if (
			localStorage.getItem("resumeInfo") &&
			JSON.parse(localStorage.getItem("resumeInfo")).languages.length > 0
		) {
			setLanguageList(
				JSON.parse(localStorage.getItem("resumeInfo")).languages,
			);
		}
	}, []);

	return (
		<form className="" onSubmit={handelSubmit}>
			<div className="space-y-12">
				<div className=" border-dotted border-[1px] border-gray-500 p-6  rounded-lg" onChange={handelChange}>
					<h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
						Language
					</h2>
					{languageList.map((lang, i) => (
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<span className="col-span-full font-semibold">
								#Language {i + 1}
							</span>
							<div className="sm:col-span-full">
								<label
									htmlFor="first-name"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Language name
								</label>
								<div className="mt-2">
									<input
									data-key={i}
										id="first-name"
										name="language_name"
										type="text"
										value={lang.language_name}
										autoComplete="given-name"
										className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-full">
								<label
									htmlFor="first-name"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Proficiency
								</label>
								<div className="mt-2">
									<select
									data-key={i}
										name="proficiancy"
										id=""
										className="py-[10px] block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									>
										<option value="Elementary proficiency">
											Elementary proficiency
										</option>
										<option value="Limited working proficiency">
											Limited working proficiency{" "}
										</option>
										<option value="Professional working proficiency">
											Professional working proficiency
										</option>
										<option value="Full Professional proficiency">
											Full Professional proficiency
										</option>
										<option value="Native or Bilingual proficiency">
											Native or Bilingual proficiency
										</option>
									</select>
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
					onClick={addLanguage}
				>
					<IoMdAddCircleOutline size={20} />
					Add more Language
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

export default Language;
