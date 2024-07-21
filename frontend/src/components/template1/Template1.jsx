import "./template1.css";

import { motion } from "framer-motion";

const Template1 = ({ no, children }) => {
	return (
		<motion.div
			layout
			className="grid grid-cols-6 w-[85%] h-[820px] shadow-2xl relative"
			// style={{ top: `${no == 0 ? -125 : no * 680}px` }}
		>
			{children}
		</motion.div>
	);
};

export default Template1;
