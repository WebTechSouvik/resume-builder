import Education from "./Education";
import Reference from "./Reference";
import Experence from "./Experence";
import PersonalDetalis from "./PersonalDetalis";
import Skill from "./Skill";
import "./template1.css";
import { useContext } from "react";
import { resumeContext } from "../../context/resumeContext";
import { motion } from "framer-motion";

const Template1 = ({no,children}) => {
	const { resumeInfo, setResumeInfo } = useContext(resumeContext);
	

	console.log(resumeInfo.experince.length);

	return (
		<motion.div 
		layout
		className="grid grid-cols-6 A4 shadow-2xl" style={{top:`${no==0?-125:no*680}px`}}>
			{children}
		</motion.div>
	);
};

export default Template1;
