import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { delay, easeInOut, motion, AnimatePresence } from "framer-motion";
import { MdOutlineDelete } from "react-icons/md";

const inputVariant = {
	hidden: {
		y: "20px",
		opacity: 0,
	},
	visible: (i) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: i * 0.1,
			duration: 0.2,
			type: "spring",
			stiffness: 350,
			damping: 24,
		},
	}),
};

const paragraphvariants = {
	close: {
		y: "20px",
		opacity: 0,
	},
	open: {
		y: 0,
		opacity: 1,
	},
};
const buttonVarients = {
	close: { x: "20px", opacity: 0 },
	open: (i) => ({
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.2,
			delay: i * 0.2,
			type: "spring",
			stiffness: 400,
			damping: 24,
		},
	}),
};

const uploadButtonvarients = {
	close: {
		y: "50px",
		x: "-70px",
		opacity: 0,
		scale: 0,
	},
	open: {
		y: 0,
		x: "-80px",
		opacity: 1,
		scale: 1,
	},
	exit: {
		y: "-50px",
		x: "-70px",
		opacity: 0,
		scale: 0,
	},
};
const UserDeatlisPage = () => {
	const [isedit, setisEdit] = useState(false);
	const [isUpload, setIsUpload] = useState(false);
	return (
		<main
			className="min-h-screen w-screen bg-[#1f262e] relative"
			onClick={(e) => {
				e.stopPropagation();
				setIsUpload(false);
			}}
		>
			<div className="clip-your-needfull-style bg-white w-screen h-screen absolute top-0 left-0"></div>
			<section className="relative w-full flex  flex-col items-center mt-12 gap-24 relative">
				<h1 className="text-4xl text-[#00c8aa] font-bold">
					Souvik Ghosh
				</h1>
				{isUpload && (
					<AnimatePresence>
						<motion.div
							key="button"
							initial="close"
							animate="open"
							exit="exit"
							variants={uploadButtonvarients}
							className="cursor-pointer absolute top-20 left-1/2  flex bg-[#1f262e] gap-2 rounded-xl overflow-hidden "
							onClick={(e) => e.stopPropagation()}
						>
							<label
								htmlFor="photo"
								className="px-2 bg-[#00c8aa] py-1 font-bold cursor-pointer"
							>
								upload photo
							</label>
							<input type="file" id="photo" className="hidden" />
							<div className="py-1 px-2">
								<MdOutlineDelete className="text-white text-xl relative right-1" />
							</div>
						</motion.div>
					</AnimatePresence>
				)}
				<div
					className="cursor-pointer w-[192px] h-[192px] rounded-[50%] overflow-hidden p-[5px] bg-[#4B5157]"
					onClick={(e) => {
						e.stopPropagation();
						setIsUpload(true);
					}}
				>
					<img
						src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800"
						alt="avtar"
						className="h-full w-full rounded-[50%]"
					/>
				</div>
			</section>
			<motion.section className="w-full flex justify-center mt-10">
				<motion.div className="min-w-[520px] min-h-[220px] bg-[#313b47] p-5 rounded-lg mb-14">
					<div className="flex gap-4 items-center">
						<VscAccount className="text-2xl text-white" />
						<h3 className="text-xl text-white relative -left-2">
							Account
						</h3>
						{!isedit ? (
							<button
								className="text-[#00c8aa]"
								onClick={() => setisEdit(!isedit)}
							>
								edit
							</button>
						) : (
							<>
								<motion.button
									custom={1}
									initial="close"
									animate="open"
									variants={buttonVarients}
									className=" text-sm font-bold bg-[#00c8aa] py-1 px-3 rounded-3xl"
									onClick={() => setisEdit(false)}
								>
									save
								</motion.button>

								<motion.button
									custom={2}
									initial="close"
									animate="open"
									variants={buttonVarients}
									className=" text-sm font-bold bg-white py-1 px-3 rounded-3xl"
								>
									Cancel
								</motion.button>
							</>
						)}
					</div>
					<div className="flex flex-col gap-3 mt-4 ">
						<div className="text-[#9b9b9b] flex gap-2 ">
							<span className="text-white">Name : </span>
							{isedit ? (
								<motion.input
									custom={0}
									initial="hidden"
									animate="visible"
									variants={inputVariant}
									type="text"
									className="profile-input"
								/>
							) : (
								<motion.p
									initial="close"
									animate="open"
									variants={paragraphvariants}
								>
									Souvik Ghosh
								</motion.p>
							)}
						</div>
						<div className="text-[#9b9b9b] flex  gap-2">
							<span className="text-white">Email : </span>
							{isedit ? (
								<motion.input
									custom={1}
									initial="hidden"
									animate="visible"
									variants={inputVariant}
									type="text"
									className="profile-input"
								/>
							) : (
								<motion.p
									initial="close"
									animate="open"
									variants={paragraphvariants}
								>
									ghoshsouvik@gmail.com
								</motion.p>
							)}
						</div>
						<div className="text-[#9b9b9b] flex  gap-2">
							<span className="text-white">Phone No : </span>
							{isedit ? (
								<motion.input
									custom={2}
									initial="hidden"
									animate="visible"
									variants={inputVariant}
									type="text"
									className="profile-input"
								/>
							) : (
								<motion.p
									initial="close"
									animate="open"
									variants={paragraphvariants}
								>
									6290006406
								</motion.p>
							)}
						</div>
						<div className="text-[#9b9b9b] flex  gap-2">
							<span className="text-white">College Name : </span>
							{isedit ? (
								<motion.input
									custom={3}
									initial="hidden"
									animate="visible"
									variants={inputVariant}
									type="text"
									className="profile-input"
								/>
							) : (
								<motion.p
									initial="close"
									animate="open"
									variants={paragraphvariants}
								>
									Hooghly Engineering And Technology College
								</motion.p>
							)}
						</div>
					</div>
				</motion.div>
			</motion.section>
		</main>
	);
};

export default UserDeatlisPage;
