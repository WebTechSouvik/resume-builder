const Experence = ({
	job_tittle,
	comapny_name,
	joining_date,
	leaving_date,
	job_type,
	description_of_job_role,
}) => {
	return (
		<div className="grid grid-cols-4 mt-5 text-[12px]">
			<div className="col-span-1 ">
				<span>{joining_date.split('-')[0]}</span> - <span>{leaving_date.split('-')[0]}</span>
			</div>
			<div className="col-span-3 ml-4 ">
				<h1 className="uppercase">{job_tittle}</h1>
				<p>{comapny_name}</p>
				<p className="mt-3">{description_of_job_role}</p>
			</div>
		</div>
	);
};

export default Experence;
