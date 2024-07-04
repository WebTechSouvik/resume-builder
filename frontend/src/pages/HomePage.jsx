import ContentWrapper from "../components/ContentWrapper";
import TagSlider from "../components/TagSlider";
import Template from "../components/Template";

const Home = () => {
	return (
		<main>
			<TagSlider />
			<ContentWrapper>
				<section className="mt-6 flex gap-16 flex-wrap">
					<Template />
					<Template />
					<Template />
					<Template />
				</section>
			</ContentWrapper>
		</main>
	);
};

export default Home;
