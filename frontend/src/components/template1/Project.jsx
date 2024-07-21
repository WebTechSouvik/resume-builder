
import parse from 'html-react-parser';

const Project = ({project_name,starting_date,ending_date,description}) => {

	return (
		<div className="grid grid-cols-4 mt-5 text-[10px]">
			<div className="col-span-1 ">
				<span>{starting_date?.split("-")[0]}</span> -
				<span>{ending_date.split("-")[0]}</span>
			</div>
			<div className="col-span-3 ml-4 ">
				<h1 className="uppercase">{project_name}</h1>
				
				<p className="mt-3">{parse(description)}</p>
			</div>
		</div>
	);
};

export default Project;
