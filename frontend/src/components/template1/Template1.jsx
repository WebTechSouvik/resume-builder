import Education from "./Education";
import Reference from "./Reference";
import Experence from "./Experence";
import PersonalDetalis from "./PersonalDetalis";
import Skill from "./Skill";
import "./template1.css"

const Template1 = () => {
	return (
		<div className="grid grid-cols-6 A4 shadow-2xl">
			<div className="col-span-2 min-h-full bg-gray-500">
				<div className="w-full h-[230px] ">
					<img
						className="w-full h-full"
						src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800"
						alt=""
					/>
				</div>
				<div className="pl-7 mt-7">
					<p className="flex text-[15px] font-bold text-white border-b-[1px] border-b-yellow-400 pb-2">
						EDUCATION
					</p>
					<Education />
					<Education />
				</div>
				<div className="pl-7 mt-7">
					<p className="text-[15px] font-bold text-white border-b-[1px] border-b-yellow-400 pb-2 flex">
						REFERENCE
					</p>
					<Reference />
					<Reference />
				</div>

				<div className="mt-10">
					<PersonalDetalis />
					<PersonalDetalis />
					<PersonalDetalis />
					<PersonalDetalis />
				</div>
			</div>
			<div className="max-h-full col-span-4  pb-3">
				<div className="w-full h-[100px] bg-yellow-400 mt-14 flex flex-col justify-center items-start pl-8 gap-1">
					<h1 className="text-2xl fomt-semiold">KAREN RICHARDS</h1>
					<p className="text-sm">PROFESSIONAL TITLE</p>
				</div>
				<div className="px-10">
				<div className="mt-7">
					<h1 className="w-full font-bold border-b-[1px] border-black pb-2">ABOUT ME</h1>
					<p className="text-[12px] mt-3">
						As you consider all the possible ways to improve
						yourself and the world, you notice John Travolta seems
						fairly unhappy. There have been days when I wished to be
						separated from my body, but today wasn’t one of those
						days.
					</p>
				</div>
				<div className="mt-7">
					<h1 className="w-full font-bold border-b-[1px] border-black pb-2">WORK EXPERIENCE</h1>
					<Experence/>
					<Experence/>
					<Experence/>
				</div>
				<div className="mt-7">
					<h1 className="w-full font-bold border-b-[1px] border-black pb-2">SOFTWARE SKILL</h1>
					<div className="mt-5 flex flex-wrap gap-y-5 gap-x-10 ml-[132px]">
						<Skill/>
						<Skill/>
						<Skill/>
						<Skill/>
						<Skill/>
						<Skill/>
					</div>
				</div>
				</div>
			</div>
			{/*<div className="w-full h-[200px]"></div>*/}
		</div>
	);
};

export default Template1;
