const Certificate = (
	{certificate_name,
	issuing_org,
	starting_date,
	ending_date,}
) => {
	return <div className="grid grid-cols-4 mt-5 text-[10px]">
			<div className="col-span-1 ">
				<span>{starting_date.split('-')[0]}</span> - <span>{ending_date.split('-')[0]}</span>
			</div>
			<div className="col-span-3 ml-4 ">
				<h1 className="uppercase">{certificate_name}</h1>
				<p>{issuing_org}</p>
				
			</div>
		</div>;
};

export default Certificate;
