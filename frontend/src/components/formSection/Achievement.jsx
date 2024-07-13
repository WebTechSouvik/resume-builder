import {
	BtnBold,
	BtnItalic,
	Editor,
	EditorProvider,
	Toolbar,
	BtnBulletList,
	BtnClearFormatting,
	BtnLink,
	BtnNumberedList,
	BtnRedo,
	BtnStrikeThrough,
	BtnStyles,
	BtnUnderline,
	BtnUndo,
	HtmlButton,
	Separator,
} from "react-simple-wysiwyg";
import { resumeContext } from "../../context/resumeContext";
import { useEffect, useState, useContext } from "react";

const Achievement=()=>{
	const { resumeInfo, setResumeInfo } = useContext(resumeContext);

const handelChange=(e)=>{

	setResumeInfo({...resumeInfo,achievement:e.target.value})

}
	const handelSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("resumeInfo", JSON.stringify(resumeInfo));
	};


	useEffect(() => {
		if (localStorage.getItem("resumeInfo") && JSON.parse(localStorage.getItem("resumeInfo")).achievement) {

		setResumeInfo({...resumeInfo,achievement:JSON.parse(localStorage.getItem("resumeInfo")).achievement})

		
		}
	}, []);

	return (
		<form className="" onSubmit={handelSubmit}>
			<div className="space-y-12">
				<div className="border-dotted border-[1px] border-gray-500 p-6 rounded-md  ">
					<h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
						Achievement
					</h2>
 
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							
						
							<div className="col-span-full">
								<label
									htmlFor="about"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Description
								</label>
								<div className="mt-2">
									<EditorProvider>
										<Editor value={resumeInfo.achievement} onChange={handelChange}>
											<Toolbar>
												<BtnBold />
												<BtnItalic />
												<BtnUnderline />

												<BtnNumberedList />
												<BtnBulletList />

												<BtnLink />
											</Toolbar>
										</Editor>
									</EditorProvider>
								</div>
							</div>
						</div>
					
				</div>
			</div>

			<div className="mt-6 flex items-center justify-end gap-x-6">
				

				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Save
				</button>
			</div>
		</form>)
}

export default Achievement