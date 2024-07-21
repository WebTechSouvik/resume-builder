import { useDispatch } from "react-redux";
import { colourCode } from "../constant";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { changeColorThunk } from "../redux/slice/resumeSlice";

const themeVariant = {
	close: {
		clipPath: "inset(0% 100% 100% 0% )",
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

const ColorSelect = ({ isTheme }) => {
const dispatch=useDispatch()
const{Id}=useParams()

const changeColor=(e)=>{
	const {dataset}=e.target
	dispatch(changeColorThunk({resumeId:Id,themeColour:dataset.key}))

}

	return (
	
			<motion.div
				initial={false}
				animate={isTheme ? "open" : "close"}
				variants={themeVariant}
				className="absolute w-[200px] h-[160px] bg-white top-12  border-[1px] border-gray-500 rounded-lg"
				
			>
				
				<div className="flex gap-5 flex-wrap p-2" onClick={changeColor}>
					{colourCode.map((color) => (
						<motion.div
						   whileHover={{ scale: 1.3 }}
						    whileTap={{ scale: 0.95 }}
							className={`w-5 h-5 rounded-[50%] ${color.class} cursor-pointer`}
							data-key={color.class}
						></motion.div>
					))}
				</div>
			</motion.div>
		)
	
};

export default ColorSelect;
