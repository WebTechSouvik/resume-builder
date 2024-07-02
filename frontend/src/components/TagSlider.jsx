import { initialTags } from "../constant";
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'


const TagSlider = () => {

	 const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll({startDelay:200})])


	return (
		<div className="w-full overflow-hidden" ref={emblaRef}>
		<div className="w-full h-[38px] mt-5 px-5 flex gap-5" >
			{initialTags.map((tag, index) => (
				<div className="min-h-full min-w-[173px] border-[1px] border-gray-500 flex justify-center items-center rounded-[8px] text-[#555555]">
					{tag}
				</div>
			))}
		</div>
		</div>
	);
};

export default TagSlider;
