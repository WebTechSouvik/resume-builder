import { useState } from "react";
import { section } from "../../constant.jsx";

const AddNewSection = () => {
	const [componentList, setComponentList] = useState([]);

	const addsection=(comp)=>{
		setComponentList([...componentList,comp])
	}

	return (
		<div className=" shadow-xl border-t-4 border-t-[#00c8aa] border-[1px] border-x-gray-300 border-b-gray-300 p-6  rounded-lg">
			<h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
				Add new section
			</h2>
			<div className="flex justify-between mt-2 mb-5">
				{section.map((sec) => {
					return (
						<div className="border-[1px] border-gray-400 px-2 py-1 rounded-md cursor-pointer" onClick={()=>addsection(sec.component)}>
							{sec.name}
						</div>
					);
				})}
			</div>
			<div className="space-y-12">
				{componentList.length > 0 && componentList.map((comp) => comp)}
			</div>
		</div>
	);
};

export default AddNewSection;
