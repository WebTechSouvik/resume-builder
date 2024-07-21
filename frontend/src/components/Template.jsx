import Template1 from "../assets/Template1.jpg";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { clearRecentResume, createResumeThunk } from "../redux/slice/resumeSlice";
import { useNavigate } from "react-router-dom";
import { resumeInfoObj } from "../constant";
import { useEffect } from "react";

const Template = ({ _id, name, image_url }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { recentResume, loading } = useSelector((state) => state.resume);
	const {isAthinticate}=useSelector(state=>state.user)

	const resumeCreate = () => {
		if(isAthinticate)
		dispatch(
			createResumeThunk({ templateId: _id, resumeInfo: resumeInfoObj }),
		);
	else{
		navigate("/loggin")
	}
		
	};

	useEffect(() => {
		if (recentResume)
			navigate(`/createresume/${recentResume}`);
		dispatch(clearRecentResume())
	}, [recentResume]);

	return (
		<div className="group h-[360px] w-[315px] relative rounded-lg overflow-hidden">
			<img src={image_url} alt="template1" className="h-full w-full" />
			<div className="h-full w-full absolute top-0 left-0 cursor-pointer bg-black/30 opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100">
				<div className="flex flex-col gap-4 items-end pr-5 pt-5">
					<div className="flex gap-4 group/tooltip">
						<div className="relative hover-target bg-white px-2 pt-1 rounded-md hidden group-hover/tooltip:block tootip-arrow">
							Add To Collection
						</div>
						<div className="hover-trigger h-8 w-8 bg-white flex justify-center items-center rounded-md text-xl">
							<AiOutlineFolderAdd />
						</div>
					</div>
					<div className="flex gap-4 group/tooltip">
						<div className="relative hover-target bg-white px-2 pt-1 rounded-md hidden group-hover/tooltip:block tootip-arrow">
							Add To Favourite
						</div>
						<div className="h-8 w-8 bg-white flex justify-center items-center rounded-md">
							<FaRegHeart />
						</div>
					</div>
				</div>
				<div
					onClick={resumeCreate}
					className="bg-white px-2 py-2 rounded-xl w-max absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold"
				>
					Create Resume
				</div>
			</div>
		</div>
	);
};

export default Template;
