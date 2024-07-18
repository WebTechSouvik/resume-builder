import { useState, useEffect, useContext } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { resumeContext } from "../../context/resumeContext";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowUpDownLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { updateInfo } from "../../redux/slice/resumeSlice";

const formFeild = {
	certificate_name: "",
	issuing_org: "",
	starting_date: "",
	ending_date: "",
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

const Certificate = () => {
	const [certificateList, setCertificateList] = useState([{
	certificate_name: "",
	issuing_org: "",
	starting_date: "",
	ending_date: "",
	isOpen: true,
}]);
 const dispatch=useDispatch()

	const addCertificate = () => {
		const formFeild = {
			certificate_name: "",
			issuing_org: "",
			starting_date: "",
			ending_date: "",
			isOpen: true,
		};
		const newList = certificateList.map((certificate, index) => {
			if (index === certificateList.length - 1) {
				return( { ...certificate, isOpen:false});
			}
			return certificate;
		});

		newList.push(formFeild);

		setCertificateList(newList);
	};

	const toggleFormView = (e) => {
		if(e.target.nodeName!=="svg")return
		const { dataset } = e.target.parentElement;
		console.log(dataset.key);
		const newList = certificateList.map((certificate, i) => {
			if (i == dataset.key) {
				return { ...certificate, isOpen: !certificate.isOpen };
			}
			return certificate;
		});
		console.log(newList);
		setCertificateList(newList);
	};

	const handelChange = (e) => {
		const { dataset, name, value } = e.target;
		const newList = certificateList.map((certificate, i) => {
			if (dataset.key == i) {
				return { ...certificate, [name]: value };
			}
			return certificate;
		});
		setCertificateList(newList);
	};

	const handelSubmit = (e) => {
		e.preventDefault();
		// localStorage.setItem("resumeInfo", JSON.stringify(resumeInfo));
	
	};

	useEffect(() => {
		// setResumeInfo({ ...resumeInfo, certificates: certificateList });
		dispatch(updateInfo({fieldName:"certificates",value:certificateList}))
	}, [certificateList]);

	// useEffect(() => {
	// 	if (
	// 		localStorage.getItem("resumeInfo") &&
	// 		JSON.parse(localStorage.getItem("resumeInfo")).certificates.length >
	// 			0
	// 	) {
	// 		setCertificateList(
	// 			JSON.parse(localStorage.getItem("resumeInfo")).certificates,
	// 		);
	// 	}
	// }, []);

	return (
		<form className="" onSubmit={handelSubmit}>
			<div className="space-y-12">
				<div
					className=" border-dotted border-[1px] border-gray-500 p-6  rounded-lg"
					onChange={handelChange}
					onClick={toggleFormView}
				>
					<h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
						Certificate
					</h2>
					{certificateList.map((certificate, i) => (
						<div className="mt-10">
							<div className="flex justify-between">
								<span className="col-span-5 font-semibold">
									#Certificate {i + 1}
								</span>

								<motion.div
									initial={false}
									animate={
										certificate.isOpen ? "open" : "close"
									}
									variants={rotateButtonVarients}
									data-key={i}
									className="col-span-1 place-self-end text-2xl"
								>
									<RiArrowUpDownLine className="cursor-pointer" />
								</motion.div>
							</div>
							<AnimatePresence>
								{certificate.isOpen && (
									<motion.div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
										<div className="sm:col-span-full">
											<label
												htmlFor="first-name"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Certificate name
											</label>
											<div className="mt-2">
												<input
													data-key={i}
													id="first-name"
													name="certificate_name"
													type="text"
													value={
														certificate.certificate_name
													}
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
													data-key={i}
													id="last-name"
													name="issuing_org"
													type="text"
													value={
														certificate.issuing_org
													}
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
													value={
														certificate.starting_date
													}
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
													value={
														certificate.ending_date
													}
													autoComplete="given-name"
													className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
