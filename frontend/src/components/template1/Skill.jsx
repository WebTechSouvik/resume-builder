import { useEffect, useState } from "react"

const Skill=({skill_name,rating})=>{


	return <div>
		<p className="text-[10px]">{skill_name}</p>
		<div className="h-[2px] w-[70px] bg-gray-500 mt-2">
		 <div className={` h-full bg-black`} style={{width:`${(rating/5)*100}%`}}></div>
		</div>
	</div>
}

export default Skill