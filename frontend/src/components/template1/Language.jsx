const Language = ({language_name, proficiancy}) => {
	return (
		<div className="flex flex-col items-start ml-2 mt-3">
			<p className="text-[14px] text-white">{language_name}</p>
			<p className="text-[10px] text-white">{proficiancy}</p>
		</div>
	);
};

export default Language;
