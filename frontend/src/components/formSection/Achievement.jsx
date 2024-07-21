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
import { useDispatch, useSelector } from "react-redux";
import { clearError, clearMessage, updateInfo, updateResumeThunk } from "../../redux/slice/resumeSlice";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import {toast} from "sonner"


const Achievement = () => {
	const dispatch = useDispatch();
	const { Id } = useParams();
	const { resumeInfo,loading,message,error } = useSelector((state) => state.resume);

	const handelChange = (e) => {
		dispatch(
			updateInfo({ fieldName: "achievement", value: e.target.value }),
		);
	};
	const handelSubmit = (e) => {
		e.preventDefault();
		dispatch(updateResumeThunk({ Id, resumeInfo }));
	};

		useEffect(() => {
		if (message) {
			toast.success(message);
			dispatch(clearMessage());
			
		}
		if (error) {
			toast.error(error);
			dispatch(clearError());
		}
	}, [message, error]);

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
									<Editor
										value={resumeInfo.achievement}
										onChange={handelChange}
									>
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
					className="rounded-md bg-indigo-600 w-20 h-10 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					{loading ? <ClipLoader loading={true} size={20} /> : "Save"}
				</button>
			</div>
		</form>
	);
};

export default Achievement;
