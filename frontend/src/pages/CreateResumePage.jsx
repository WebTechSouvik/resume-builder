import Template1 from "../components/template1/Template1";
import { LuLayoutGrid } from "react-icons/lu";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState, createContext, useRef } from "react";
import { resumeInfoObj } from "../constant";
import { resumeContext } from "../context/resumeContext";
import Resume from "../components/template1/Resume";
import Reference from "../components/template1/Reference";
import Experence from "../components/template1/Experence";
import PersonalDetalis from "../components/template1/PersonalDetalis";
import Skill from "../components/template1/Skill";
import Education from "../components/template1/Education";
import Project from "../components/template1/Project";
import Achievement from "../components/template1/Achievement";
import Certificate from "../components/template1/Certificate";
import Language from "../components/template1/Language";
import { BsFiletypePdf, BsFiletypePng, BsFiletypeJpg } from "react-icons/bs";
import * as htmlToImage from "html-to-image";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import photo from "../assets/photo.jpeg";
import ColorSelect from "../components/ColorSelect";
import { motion } from "framer-motion";
import ResumeContent from "../components/template1/ResumeContent.jsx";

function CreateResumePage() {
	const [resumeInfo, setResumeInfo] = useState(resumeInfoObj);
	const [activeFrom, setActiveForm] = useState(1);
	const [isTheme, setIstheme] = useState(false);
	const navigate = useNavigate();
	const pngRef = useRef();

	const content = () => {
		return (
			<>
				<div className="col-span-2 min-h-full bg-gray-500">
					<div className="w-full h-[230px] ">
						<img
							className="w-full h-full"
							src={
								resumeInfo.personal_info.img_url
									? resumeInfo.personal_info.img_url
									: photo
							}
							alt=""
						/>
					</div>

					{resumeInfo.education.length > 0 && (
						<div className="pl-7 mt-7">
							<p className="flex text-[15px] font-bold text-white border-b-[1px] border-b-yellow-400 pb-2">
								EDUCATION
							</p>
							{resumeInfo.education.map((edu) => (
								<Education {...edu} />
							))}
						</div>
					)}

					{resumeInfo.reference.length > 0 && (
						<div className="pl-7 mt-7">
							<p className="text-[15px] font-bold text-white border-b-[1px] border-b-yellow-400 pb-2 flex">
								REFERENCE
							</p>
							<Reference />
							<Reference />
						</div>
					)}
					{resumeInfo.languages.length > 0 && (
						<div className="pl-7 mt-7">
							<p className="flex text-[15px] font-bold text-white border-b-[1px] border-b-yellow-400 pb-2">
								LANGUAGE
							</p>
							{resumeInfo.languages.map((lang) => (
								<Language {...lang} />
							))}
						</div>
					)}
					<div className="mt-10">
						{resumeInfo.personal_info.contact_no && (
							<PersonalDetalis
								name="Phone"
								value={resumeInfo.personal_info.contact_no}
							/>
						)}
						{resumeInfo.personal_info.email && (
							<PersonalDetalis
								name="Email"
								value={resumeInfo.personal_info.email}
							/>
						)}
						{resumeInfo.personal_info.address && (
							<PersonalDetalis
								name="Address"
								value={resumeInfo.personal_info.address}
							/>
						)}
					</div>
				</div>
				<div className="max-h-full col-span-4  pb-3">
					<div className="w-full h-[100px] bg-yellow-400 mt-14 flex flex-col justify-center items-start pl-8 gap-1">
						<h1 className="text-2xl fomt-bold">
							<span className="uppercase mr-1">
								{resumeInfo.personal_info.firstname}
							</span>
							<span className="uppercase">
								{resumeInfo.personal_info.lastname}
							</span>
						</h1>

						<p className="text-sm">
							{resumeInfo.personal_info.job_title
								? resumeInfo.personal_info.job_title
								: resumeInfo.personal_info
										.education_specalization}
						</p>
					</div>

					<div className="mt-7 px-10">
						<h1 className="w-full font-bold border-b-[1px] border-black pb-2">
							ABOUT ME
						</h1>
						<p className="text-[12px] mt-3 break-words">
							{resumeInfo.personal_info.bio}
						</p>
					</div>
					<div className="mt-7 px-10">
						<h1 className="w-full font-bold border-b-[1px] border-black pb-2">
							WORK EXPERIENCE
						</h1>
						{resumeInfo.experince.length > 0 &&
							resumeInfo.experince.map((exp) => (
								<Experence {...exp} />
							))}
					</div>
					<div className="mt-7 px-10">
						<h1 className="w-full font-bold border-b-[1px] border-black pb-2">
							SOFTWARE SKILL
						</h1>
						<div className="mt-5 flex flex-wrap gap-y-5 gap-x-10 ml-[132px]">
							{resumeInfo.skills.length > 0 &&
								resumeInfo.skills.map((skill) => (
									<Skill {...skill} />
								))}
						</div>
					</div>
					{resumeInfo.project.length > 0 && (
						<div className="mt-7 px-10">
							<h1 className="w-full font-bold border-b-[1px] border-black pb-2">
								PROJECT
							</h1>

							{resumeInfo.project.map((proj) => (
								<Project {...proj} />
							))}
						</div>
					)}
					{resumeInfo.achievement && (
						<Achievement MyAchievement={resumeInfo.achievement} />
					)}
					{resumeInfo.certificates.length > 0 && (
						<div className="mt-7 px-10">
							<h1 className="w-full font-bold border-b-[1px] border-black pb-2">
								CERTIFICATES
							</h1>

							{resumeInfo.certificates.map((cer) => (
								<Certificate {...cer} />
							))}
						</div>
					)}
				</div>
			</>
		);
	};

	useEffect(() => {
		if (localStorage.getItem("resumeInfo")) {
			setResumeInfo(JSON.parse(localStorage.getItem("resumeInfo")));
		}
	}, []);

	const generatePng = () => {
		const chilDren = pngRef.current.firstChild.childNodes;
		if (chilDren.length == 0) {
			return;
		}

		try {
			chilDren.forEach(async (child) => {
				const canvas = await html2canvas(child);
				const url = canvas.toDataURL("image/png");
				console.log(url);
			});
		} catch (err) {
			console.log(err);
		}
	};

	const generatePdf = async () => {
		const chilDren = pngRef.current.firstChild.childNodes;
		if (chilDren.length == 0) {
			return;
		}
		const doc = new jsPDF({ orientation: "p", unit: "mm" });
		try {
			const urlPromise = Array.from(chilDren).map(async (child) => {
				const canvas = await html2canvas(child, { scale: 3 });
				return canvas.toDataURL("image/png");
			});

			const urlArray = await Promise.all(urlPromise);
			urlArray.forEach((url, i) => {
				if (i > 0) doc.addPage();
				doc.addImage(url, "PNG", 0, 0, 210, 297);
			});
			doc.save("resume.pdf");
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		switch (activeFrom) {
			case 1:
				navigate("/createresume/personal-detalis");
				break;
			case 2:
				navigate("/createresume/experience");
				break;
			case 3:
				navigate("/createresume/education");
				break;
			case 4:
				navigate("/createresume/skill");
				break;
			case 5:
				navigate("/createresume/add-section");
		}
	}, [activeFrom]);

	return (
		<resumeContext.Provider value={{ resumeInfo, setResumeInfo }}>
			<main className="max-w-screen grid grid-cols-2 pt-4">
				<section className="px-8 relative">
					<div className="flex w-full justify-between mb-10">
						<button
							className="flex gap-2 items-center border-[1px] border-gray-300 h-10 px-2 rounded-lg "
							onMouseEnter={() => setIstheme((prev) => !prev)}
						>
							<LuLayoutGrid /> Theme
						</button>
						<div className="flex gap-2 ">
							{activeFrom > 1 && (
								<motion.button
									whileTap={{ scale: 0.92 }}
									className="form-button bg-[#00c8aa]"
									onClick={() =>
										setActiveForm((prev) =>
											prev >= 2 ? prev - 1 : prev,
										)
									}
								>
									<FaArrowLeftLong />
									Previous
								</motion.button>
							)}
							{activeFrom < 5 && (
								<motion.button
									whileTap={{ scale: 0.92 }}
									className="form-button bg-[#1f262e] text-white"
									onClick={() =>
										setActiveForm((prev) =>
											prev <= 4 ? prev + 1 : prev,
										)
									}
								>
									Next <FaArrowRightLong />
								</motion.button>
							)}
						</div>
					</div>
					<ColorSelect isTheme={isTheme} />
					<Outlet />
				</section>
				<section className="">
					<div className="flex justify-center gap-2 border-[1px] border-gray-300 w-max px-3 py-2 rounded-lg relative left-1/2 -translate-x-1/2">
						<span className="font-bold">Download:</span>
						<div className="flex gap-2 items-center text-lg cursor-pointer">
							<BsFiletypePdf onClick={generatePdf} />
							<BsFiletypePng onClick={generatePng} />
							<BsFiletypeJpg />
						</div>
					</div>
					<div ref={pngRef}>
						<Resume>
						{ResumeContent()}
						</Resume>
					</div>
				</section>
			</main>
		</resumeContext.Provider>
	);
}

export default CreateResumePage;
