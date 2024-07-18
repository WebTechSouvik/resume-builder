import { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import {
	delay,
	easeInOut,
	motion,
	AnimatePresence,
	transform,
} from "framer-motion";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
	clearError,
	clearMessage,
	updateProfilePictureThunk,
	updateUserDetalisThunk,
} from "../../redux/slice/userSlice";
import { toast } from "sonner";
import { GridLoader, ClipLoader } from "react-spinners";

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
		y: "30px",
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
		y: "30px",
		x: "-70px",
		opacity: 0,
		scale: 0,
	},
};
const UserDeatlisPage = () => {
	const [isedit, setisEdit] = useState(false);
	const [isUpload, setIsUpload] = useState(false);
	const { loading, userInfoLoading, imageLoading, user, message, error } =
		useSelector((state) => state.user);
	const [userInfo, setUserInfo] = useState({});
	const dispatch = useDispatch();

	const handelChange = (e) => {
		const { name, value } = e.target;

		setUserInfo({ ...userInfo, [name]: value });
	};

	const updateUserInfo = () => {
		dispatch(updateUserDetalisThunk(userInfo));
		setisEdit((prev) => !prev);
	};

	const handelProfilePic = (e) => {
		console.log(e.target.files[0]);
		dispatch(updateProfilePictureThunk({ avtar: e.target.files[0] }));
	};

	useEffect(() => {
		if (message) {
			toast.success(message);
			dispatch(clearMessage());
		}
		if (error) {
			toast.error(message);
			dispatch(clearError());
		}
	}, [message, error]);

	useEffect(() => {
		if (user) {
			const userInfoobj = {
				fullname: "",
				email: "",
				contact_no: "",
				college_name: "",
			};

			Object.keys(user).forEach((key) => {
				if (key == "_id" || key == "__v") return;

				userInfoobj[key] = user[key];
			});

			setUserInfo(userInfoobj);
		}
	}, [user]);

	return (
		<>
			<GridLoader
				color="#138498"
				loading={loading}
				margin={1}
				size={20}
				cssOverride={{
					transform: "translate(-100%,-100%)",
					position: "absolute",
					top: "50%",
					left: "50%",
				}}
				speedMultiplier={1}
				width={19}
			/>
			{!loading && user && (
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

						<AnimatePresence>
							{isUpload && (
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
									<input
										type="file"
										id="photo"
										name="avtar"
										className="hidden"
										onChange={handelProfilePic}
									/>
									<div className="py-1 px-2">
										<MdOutlineDelete className="text-white text-xl relative right-1" />
									</div>
								</motion.div>
							)}
						</AnimatePresence>

						<div
							className="cursor-pointer w-[192px] h-[192px] rounded-[50%] overflow-hidden p-[5px] bg-[#4B5157] relative"
							onClick={(e) => {
								e.stopPropagation();
								setIsUpload(true);
							}}
						>
							{imageLoading && (
								<div className="flex justify-center items-center absolute w-[95%] h-[95%] bg-white/40 rounded-[50%] top-[5px] left-[5px]">
									<ClipLoader
										loading={imageLoading}
										size="40"
									/>
								</div>
							)}

							<img
								src={user.avtar}
								alt="avtar"
								className="h-full w-full rounded-[50%] object-cover"
							/>
						</div>
					</section>
					<section className="w-full flex justify-center mt-10">
						<motion.div
							className="min-w-[520px] min-h-[220px] bg-[#313b47] p-5 rounded-lg mb-14"
							onChange={handelChange}
						>
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
											onClick={updateUserInfo}
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
											name="fullname"
											className="profile-input"
											defaultValue={userInfo.fullname}
										/>
									) : (
										<motion.p
											initial="close"
											animate="open"
											variants={paragraphvariants}
										>
											{user?.fullname}
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
											name="email"
											className="profile-input"
											defaultValue={userInfo.email}
										/>
									) : (
										<motion.p
											initial="close"
											animate="open"
											variants={paragraphvariants}
										>
											{user?.email}
										</motion.p>
									)}
								</div>
								<div className="text-[#9b9b9b] flex  gap-2">
									<span className="text-white">
										Phone No :{" "}
									</span>
									{isedit ? (
										<motion.input
											custom={2}
											initial="hidden"
											animate="visible"
											variants={inputVariant}
											type="text"
											name="contact_no"
											className="profile-input"
											defaultValue={userInfo.contact_no}
										/>
									) : (
										<motion.p
											initial="close"
											animate="open"
											variants={paragraphvariants}
										>
											{user?.contact_no
												? user.contact_no
												: "Data didn't found"}
										</motion.p>
									)}
								</div>
								<div className="text-[#9b9b9b] flex  gap-2">
									<span className="text-white">
										College Name :{" "}
									</span>
									{isedit ? (
										<motion.input
											custom={3}
											initial="hidden"
											animate="visible"
											variants={inputVariant}
											type="text"
											name="college_name"
											className="profile-input"
											defaultValue={userInfo.college_name}
										/>
									) : (
										<motion.p
											initial="close"
											animate="open"
											variants={paragraphvariants}
										>
											{user?.college_name
												? user.college_name
												: "Data didn't found"}
										</motion.p>
									)}
								</div>
							</div>
						</motion.div>
					</section>
				</main>
			)}
		</>
	);
};

export default UserDeatlisPage;
