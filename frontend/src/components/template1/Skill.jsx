const Skill=({name,rating})=>{
	return <div>
		<p className="text-[12px]">{name}</p>
		<div className="h-[2px] w-[112px] bg-gray-500 mt-2">
			<div className="w-2/3 h-full bg-black"></div>
		</div>
	</div>
}

export default Skill