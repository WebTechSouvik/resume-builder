import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const formFeild = {
	certificate_name: "",
	issuing_org: "",
	starting_date: "",
	ending_date: "",
};

const Certificate = () => {
	const [certificateList, setCertificateList] = useState([formFeild]);

	const addCertificate = () => {
		for (let key in formFeild) {
			formFeild[key] = "";
		}

		setCertificateList([...certificateList, formFeild]);
	};

	return (
		<form className="">
			<div className="space-y-12">
				<div className=" border-dotted border-[1px] border-gray-500 p-6  rounded-lg">
					<h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
						Certificate
					</h2>
					{certificateList.map((_,i) => (
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<span className="col-span-full font-semibold">
								#Certificate {i + 1}
							</span>
							<div className="sm:col-span-full">
								<label
									htmlFor="first-name"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Certificate name
								</label>
								<div className="mt-2">
									<input
										id="first-name"
										name="certificate_name"
										type="text"
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
									Organization name
								</label>
								<div className="mt-2">
									<input
										id="last-name"
										name="issuing_org"
										type="text"
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
										id="email"
										name="starting_date"
										type="date"
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
										id="first-name"
										name="ending_date"
										type="date"
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
					onClick={addCertificate}
				>
					<IoMdAddCircleOutline size={20} />
					Add more certificate
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

export default Certificate;
