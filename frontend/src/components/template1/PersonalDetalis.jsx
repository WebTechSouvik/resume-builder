const PersonalDetalis = ({name,value}) => {
	return (
		<>
			<div className="w-full h-4 bg-gray-600 flex gap-2 mt-3">
				<div className="w-1/4 bg-yellow-400 h-full "></div>
				<span className="text-[12px] text-white">{name}</span>
			</div>
			<span className="text-[12px] text-white mt-1 break-words">{value}</span>
		</>
	);
};

export default PersonalDetalis;
