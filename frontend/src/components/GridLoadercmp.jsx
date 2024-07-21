import { GridLoader } from "react-spinners";

const GridLoadercmp= ({ loading }) => {
	return (
		loading && <div className="w-full h-full absolute flex justify-center items-center bg-gray-200/30 top-0 left-0">
			<GridLoader
				color="#138498"
				loading={loading}
				margin={1}
				size={20}
				// cssOverride={{
				// 	transform: "translate(-100%,-100%)",
				// 	position: "absolute",
				// 	top: "50%",
				// 	left: "50%",
				// }}
				speedMultiplier={1}
				width={19}
			/>
		</div>
	);
};
export default GridLoadercmp;
