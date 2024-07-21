import { useContext } from "react";
import { resumeContext } from "../../context/resumeContext";
import React from "react";
import { useSelector } from "react-redux";
import photo from "../../assets/photo.jpeg";
import Reference from "../../components/template1/Reference";
import Experence from "../../components/template1/Experence";
import PersonalDetalis from "../../components/template1/PersonalDetalis";
import Skill from "../../components/template1/Skill";
import Education from "../../components/template1/Education";
import Project from "../../components/template1/Project";
import Achievement from "../../components/template1/Achievement";
import Certificate from "../../components/template1/Certificate";
import Language from "../../components/template1/Language";
import { ClipLoader } from "react-spinners";

const ResumeContent = (resumeInfo,imgLoading) => {
	

	return (
		<>
		
			<div className={`col-span-2 min-h-full ${resumeInfo.themeColour?resumeInfo.themeColour:"bg-gray-500"}`}>
				<div className="w-full h-[220px] relative">
					{imgLoading && (
						<div className="flex justify-center items-center absolute w-full h-full bg-white/40 top-0 left-0">
							<ClipLoader loading={imgLoading} size="40" />
						</div>
					)}

					<img
						className="w-full h-full object-cover"
						src={
							resumeInfo?.personal_info?.avtar
								? resumeInfo.personal_info.avtar
								: photo
						}
						alt=""
					/>
				</div>

				{resumeInfo.education.length > 0 && (
					<div className="pl-7 mt-7">
						<p className="flex text-[12px] font-bold text-white border-b-[1px] border-b-yellow-400 pb-2">
							EDUCATION
						</p>
						{resumeInfo.education.map((edu) => (
							<Education {...edu} />
						))}
					</div>
				)}

				{/*{resumeInfo.reference.length > 0 && (
					<div className="pl-7 mt-7">
						<p className="text-[15px] font-bold text-white border-b-[1px] border-b-yellow-400 pb-2 flex">
							REFERENCE
						</p>
						<Reference />
						<Reference />
					</div>
				)}*/}
				{resumeInfo.languages.length > 0 && (
					<div className="pl-7 mt-7">
						<p className="flex text-[15px] font-bold text-white border-b-[1px] border-b-yellow-400 pb-2">
							LANGUAGE
						</p>
						{resumeInfo.languages.map((lang) => (
							<Language {...lang} />
						))}
					</div>
				)}
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
					<h1 className="text-xl fomt-bold">
						<span className="uppercase mr-1">
							{resumeInfo?.personal_info?.firstname}
						</span>
						<span className="uppercase">
							{resumeInfo.personal_info.lastname}
						</span>
					</h1>

					<p className="text-[10px]">
						{resumeInfo?.personal_info?.job_title
							? resumeInfo.personal_info.job_title
							: resumeInfo.personal_info.education_specalization}
					</p>
				</div>

				<div className="mt-7 px-10">
					<h1 className="w-full font-bold text-[12px] border-b-[1px] border-black pb-2">
						ABOUT ME
					</h1>
					<p className="text-[10px] mt-3 break-words">
						{resumeInfo.personal_info.bio}
					</p>
				</div>
				<div className="mt-7 px-10">
					<h1 className="w-full font-bold text-[12px] border-b-[1px] border-black pb-2">
						WORK EXPERIENCE
					</h1>
					{resumeInfo.experince.length > 0 &&
						resumeInfo.experince.map((exp) => (
							<Experence {...exp} />
						))}
				</div>
				<div className="mt-7 px-10">
					<h1 className="w-full font-bold text-[12px]  border-b-[1px] border-black pb-2">
						SOFTWARE SKILL
					</h1>
					<div className="mt-5 flex flex-wrap gap-y-5 gap-x-10 ml-[93px]">
						{resumeInfo.skills.length > 0 &&
							resumeInfo.skills.map((skill) => (
								<Skill {...skill} />
							))}
					</div>
				</div>
				{resumeInfo.project.length > 0 && (
					<div className="mt-7 px-10">
						<h1 className="w-full font-bold text-[12px]  border-b-[1px] border-black pb-2">
							PROJECT
						</h1>

						{resumeInfo.project.map((proj) => (
							<Project {...proj} />
						))}
					</div>
				)}
				{resumeInfo.achievement && (
					<Achievement MyAchievement={resumeInfo.achievement} />
				)}
				{resumeInfo.certificates.length > 0 && (
					<div className="mt-7 px-10">
						<h1 className="w-full font-bold text-[12px]  border-b-[1px] border-black pb-2">
							CERTIFICATES
						</h1>

						{resumeInfo.certificates.map((cer) => (
							<Certificate {...cer} />
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default ResumeContent;
