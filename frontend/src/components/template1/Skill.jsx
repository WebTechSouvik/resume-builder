const Skill=({skill_name,rating})=>{
	return <div>
		<p className="text-[12px]">{skill_name}</p>
		<div className="h-[2px] w-[112px] bg-gray-500 mt-2">
			<div className={`w-${rating}/5 h-full bg-black`}></div>
		</div>
	</div>
}

export default Skill