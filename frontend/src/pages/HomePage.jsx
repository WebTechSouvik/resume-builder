import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "../components/ContentWrapper";
import TagSlider from "../components/TagSlider";
import Template from "../components/Template";
import { useEffect } from "react";
import { getTemplateThunk } from "../redux/slice/resumeSlice";
import { GridLoader } from "react-spinners";
import { Link, useLocation } from "react-router-dom";


const HomePage = () => {
	const { loading, resumeTemplate, error } = useSelector(
		(state) => state.resume,
	);
	const {user}=useSelector(state=>state.user)
	const dispatch = useDispatch();
	const location = useLocation();

	useEffect(() => {
		console.log("hi");
		dispatch(getTemplateThunk(user?._id));
	}, [user]);

	useEffect(() => {
		if (location.hash) {
			const element = document.querySelector(location.hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [location]);

	return (
		<main className="mb-10">
			<GridLoader
				color="#138498"
				loading={loading}
				margin={1}
				size={20}
				cssOverride={{
					transform: "translate(-100%,-100%)",
					position: "absolute",
					top: "50%",
					left: "50%",
				}}
				speedMultiplier={1}
				width={19}
			/>
			<section className="w-ful h-screen flex justify-center pt-[140px] bg-gradient-to-l from-[#f6cfbe] to-[#b9dcf2] relative">
				<div className="w-3/5 relative left-[25px] flex flex-col items-center gap-2">
					<h1 className="text-4xl text-gray-700">
						Welcome To Resume Builder
					</h1>
					<p className="text-5xl text-gray-500">
						
						Design a standout resume with our cutting-edge tools and
						templates
					</p>
					<Link
						smooth
						to="#Template"
						className="px-10 py-1 border-[1px] border-black rounded-2xl font-bold mt-4"
					>
						Build
					</Link>
				</div>
				<div className="w-screen h-[200px] absolute bottom-0 left-0 bg-gradient-to-b from-white/0 to-white"></div>
			</section>
			<ContentWrapper >
				<h1 className="text-4xl text-gray-600 text-center mt-14" id="Template" >Template</h1>
				<section className="mt-6 flex gap-16 flex-wrap" >
				
					{resumeTemplate &&
						resumeTemplate.length > 0 &&
						resumeTemplate.map((template) => (
							<Template {...template} />
						))}
				</section>
			</ContentWrapper>
		</main>
	);
};

export default HomePage;
