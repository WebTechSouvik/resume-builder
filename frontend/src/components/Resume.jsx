import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Resume = ({_id, resume_img_url, updatedAt, createdAt }) => {
	const [date, setDate] = useState();
	const navigate=useNavigate()
	useEffect(() => {
		const options = { day: "numeric", month: "long", year: "numeric" };
		let date = new Date(updatedAt);
		const Modified = date.toLocaleDateString("en-GB", options);
		date = new Date(createdAt);
		const created = date.toLocaleDateString("en-GB", options);
		setDate({ created, Modified });
	},[updatedAt,createdAt]);


	return (
		<div className="w-[350px] h-[400px] shadow-2xl relative cursor-pointer" onClick={()=>{navigate(`/createresume/${_id}`)}}>
			<img className="w-full h-full" src={resume_img_url} alt="" />
			<div className="text-sm w-full h-full absolute bg-gradient-to-t from-black/70 from-10%  via-black/0 to-black/20  top-0 left-0 flex flex-col justify-end px-4 pb-4">
				<div>
					<span className="text-white italic">Created At : </span>
					<span className="text-[#9b9b9b] italic">{date?.created}</span>
				</div>
				<div>
					<span className="text-white italic">Modified At : </span>
					<span className="text-[#9b9b9b] italic">{date?.Modified}</span>
				</div>
			</div>
		</div>
	);
};
export default Resume;
