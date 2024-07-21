import { LuLayoutGrid } from "react-icons/lu";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import Resume from "../components/template1/Resume";
import { BsFiletypePdf, BsFiletypePng, BsFiletypeJpg } from "react-icons/bs";
import * as htmlToImage from "html-to-image";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import ColorSelect from "../components/ColorSelect";
import { motion } from "framer-motion";
import ResumeContent from "../components/template1/ResumeContent.jsx";
import { useDispatch, useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import { getSingleResumeThunk, uploadResumeImageThunk } from "../redux/slice/resumeSlice.js";
import GridLoadercmp from "../components/GridLoadercmp.jsx";
import domtoimage from "dom-to-image-more";
import html2PDF from "jspdf-html2canvas";

function CreateResumePage() {
	const [activeFrom, setActiveForm] = useState(1);
	const [isTheme, setIstheme] = useState(false);
	const { resumeLoading, resumeInfo, recentResume, imgLoading } = useSelector(
		(state) => state.resume,
	);
	const navigate = useNavigate();
	const pngRef = useRef();
	const dispatch = useDispatch();
	const { Id } = useParams();

	useEffect(() => {
		dispatch(getSingleResumeThunk(Id));
	}, []);

	useEffect(() => {
		switch (activeFrom) {
			case 1:
				navigate(`/createresume/${Id}/personal-detalis`);
				break;
			case 2:
				navigate(`/createresume/${Id}/experience`);
				break;
			case 3:
				navigate(`/createresume/${Id}/education`);
				break;
			case 4:
				navigate(`/createresume/${Id}/skill`);
				break;
			case 5:
				navigate(`/createresume/${Id}/add-section`);
				break;
		}
	}, [activeFrom, Id, navigate]);

	const generatePng = () => {
		const chilDren = pngRef.current.firstChild.childNodes;
		if (chilDren.length == 0) {
			return;
		}

		try {
			chilDren.forEach(async (child) => {
				const canvas = await htmlToImage.toPng(child, {
					quality: 1, // Max quality
					width: child.scrollWidth * 2, // Double the width for higher resolution
					height: child.scrollHeight * 2, // Double the height for higher resolution
					pixelRatio: 2, // Increase the scale factor
				});

				console.log(canvas);
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
		const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
		const pageWidth = doc.internal.pageSize.getWidth();
		const pageHeight = doc.internal.pageSize.getHeight();
		const urlPromise = Array.from(chilDren).map((child) =>
			htmlToImage.toPng(child, {
				quality: 0.6,
				width: child.scrollWidth * 1.2,
				height: child.scrollHeight * 1.2,
				pixelRatio: 2,
			}),
		);
		console.log(urlPromise);

		const urlArray = await Promise.all(urlPromise);

		urlArray.forEach(async (url, i) => {
			if (i > 0) doc.addPage();

			doc.addImage(url, "PNG", 0, 0, 252, 357);
		});
		doc.save("resume.pdf");
		const resumeImge=await htmlToImage.toBlob(chilDren[0])
		dispatch(uploadResumeImageThunk({resumeId:Id,resumeImge}))
	};

	return (
		<>
			<GridLoadercmp loading={resumeLoading} />
			{resumeInfo && (
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
						{<Outlet />}
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
								{ResumeContent(resumeInfo, imgLoading)}
							</Resume>
						</div>
					</section>
				</main>
			)}
		</>
	);
}

export default CreateResumePage;
