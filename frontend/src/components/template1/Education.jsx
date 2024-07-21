const Education = ({
	degree_name,
	college_name,
	starting_date,
	ending_date,
	marks_CGPA,
	marks_percentage,
}) => {
	return (
		<div className="flex flex-col items-start ml-2 mt-3">
			<p className="text-[10px] text-white">{degree_name}</p>
			<p className="text-[10px] text-white">{college_name}</p>
			<p className="text-[10px] text-white">
					<span>{starting_date.split('-')[0]}</span> - <span>{ending_date.split('-')[0]}</span>
			</p>
		</div>
	);
};

export default Education;
