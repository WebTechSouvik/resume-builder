import { colourCode } from "../constant";
import { motion } from "framer-motion";

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
	return (
	
			<motion.div
				initial={false}
				animate={isTheme ? "open" : "close"}
				variants={themeVariant}
				className="absolute w-[200px] h-[160px] bg-white top-12  border-[1px] border-gray-500 rounded-lg"
				
			>
				
				<div className="flex gap-5 flex-wrap p-2">
					{colourCode.map((color) => (
						<motion.div
						   whileHover={{ scale: 1.3 }}
						    whileTap={{ scale: 0.95 }}
							className={`w-5 h-5 rounded-[50%] ${color.class} cursor-pointer`}
						></motion.div>
					))}
				</div>
			</motion.div>
		)
	
};

export default ColorSelect;
