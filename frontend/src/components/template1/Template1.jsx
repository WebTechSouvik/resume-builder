import Education from "./Education";
import Reference from "./Reference";
import Experence from "./Experence";
import PersonalDetalis from "./PersonalDetalis";
import Skill from "./Skill";
import "./template1.css";
import { useContext } from "react";
import { resumeContext } from "../../context/resumeContext";

const Template1 = () => {
	const { resumeInfo, setResumeInfo } = useContext(resumeContext);
	const text="e always wore his sunglasses at night.Please tell me you don't work in a morgue.Imagine his surprise when he discovered that the safe was full of pudding.I know many children ask for a pony, but I wanted a bicycle with rockets strapped to it."

	console.log(resumeInfo.experince.length);

	return (
		<div className="grid grid-cols-6 A4 shadow-2xl">
			<div className="col-span-2 min-h-full bg-gray-500">
				{resumeInfo.personal_info.img_url && (
					<div className="w-full h-[230px] ">
						<img
							className="w-full h-full"
							src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800"
							alt=""
						/>
					</div>
				)}
				{resumeInfo.education.length > 0 && (
					<div className="pl-7 mt-7">
						<p className="flex text-[15px] font-bold text-white border-b-[1px] border-b-yellow-400 pb-2">
							EDUCATION
						</p>
						{resumeInfo.education.map((edu) => (
							<Education {...edu} />
						))}
					</div>
				)}
				<div className="pl-7 mt-7">
					<p className="text-[15px] font-bold text-white border-b-[1px] border-b-yellow-400 pb-2 flex">
						REFERENCE
					</p>
					<Reference />
					<Reference />
				</div>

				<div className="mt-10">
					{resumeInfo.personal_info.contact_no && (
						<PersonalDetalis
							name="Phone"
							value={resumeInfo.personal_info.contact_no}
						/>
					)}
					{resumeInfo.personal_info.email && (
						<PersonalDetalis
							name="Email"
							value={resumeInfo.personal_info.email}
						/>
					)}
					{resumeInfo.personal_info.address && (
						<PersonalDetalis
							name="Address"
							value={resumeInfo.personal_info.address}
						/>
					)}
				</div>
			</div>
			<div className="max-h-full col-span-4  pb-3">
				<div className="w-full h-[100px] bg-yellow-400 mt-14 flex flex-col justify-center items-start pl-8 gap-1">
					<h1 className="text-2xl fomt-bold">
						<span className="uppercase mr-1">{resumeInfo.personal_info.firstname}</span>
						<span className="uppercase">{resumeInfo.personal_info.lastname}</span>
					</h1>

					<p className="text-sm">
						{resumeInfo.personal_info.job_title
							? resumeInfo.personal_info.job_title
							: resumeInfo.personal_info.education_specalization}
					</p>
				</div>
				<div className="px-10">
					<div className="mt-7">
						<h1 className="w-full font-bold border-b-[1px] border-black pb-2">
							ABOUT ME
						</h1>
						<p className="text-[12px] mt-3 break-words">
							{resumeInfo.personal_info.bio}
							{/*{text}*/}
						</p>
					</div>
					<div className="mt-7">
						<h1 className="w-full font-bold border-b-[1px] border-black pb-2">
							WORK EXPERIENCE
						</h1>
						{resumeInfo.experince.length > 0 &&
							resumeInfo.experince.map((exp) => (
								<Experence {...exp} />
							))}
					</div>
					<div className="mt-7">
						<h1 className="w-full font-bold border-b-[1px] border-black pb-2">
							SOFTWARE SKILL
						</h1>
						<div className="mt-5 flex flex-wrap gap-y-5 gap-x-10 ml-[132px]">
							{resumeInfo.skills.length > 0 &&
								resumeInfo.skills.map((skill) => (
									<Skill {...skill} />
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Template1;
