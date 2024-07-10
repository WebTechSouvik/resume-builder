import Template1 from "../components/template1/Template1";
import { LuLayoutGrid } from "react-icons/lu";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function CreateResumePage() {
	const [activeFrom, setActiveForm] = useState(1);
	const navigate = useNavigate();

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
		<main className="max-w-screen grid grid-cols-2 pt-4">
			<section className="px-8">
				<div className="flex w-full justify-between mb-10">
					<button className="flex gap-2 items-center border-[1px] border-gray-300 h-10 px-2 rounded-lg ">
						<LuLayoutGrid /> Theme
					</button>
					<div className="flex gap-2 ">
						{activeFrom > 1 && (
							<button
								className="form-button bg-[#00c8aa]"
								onClick={() =>
									setActiveForm((prev) =>
										prev >= 2 ? prev - 1 : prev,
									)
								}
							>
								<FaArrowLeftLong />
								Previous
							</button>
						)}
						{activeFrom < 5 && (
							<button
								className="form-button bg-[#1f262e] text-white"
								onClick={() =>
									setActiveForm((prev) =>
										prev <= 4 ? prev + 1 : prev,
									)
								}
							>
								Next <FaArrowRightLong />
							</button>
						)}
					</div>
				</div>
				<Outlet />
			</section>
			<section className=" bg-gray-100">
				<h1 className="text-center">resume review</h1>

				<Template1 />
			</section>
		</main>
	);
}

export default CreateResumePage;
