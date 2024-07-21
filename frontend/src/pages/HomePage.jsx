import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "../components/ContentWrapper";
import TagSlider from "../components/TagSlider";
import Template from "../components/Template";
import { useEffect } from "react";
import { getTemplateThunk } from "../redux/slice/resumeSlice";
import { GridLoader} from "react-spinners";

const HomePage = () => {
	const { loading, resumeTemplate, error } = useSelector(
		(state) => state.resume,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("hi")
		dispatch(getTemplateThunk());
	}, []);

	return (
		<main>
			<TagSlider />
			<ContentWrapper>
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
				<section className="mt-6 flex gap-16 flex-wrap">
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
