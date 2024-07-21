import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoDocumentsOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState } from "react";

const accountVarients = {
	open: {
		clipPath: "inset(0% 0% 0% 0%)",
	},
	close: {
		clipPath: "inset(0 0 100% 100%)",
	},
};

const Header = () => {
	const { isAthinticate, user } = useSelector((state) => state.user);
	const [isShow, setIsShow] = useState(false);
	const navigate=useNavigate()

	return (
		<header className="w-full h-[75px] flex justify-between items-center px-10 py-3  border-b-[1px] border-gray-300">
			<Link to="/" className="h-full cursor-pointer">
				<img className="h-full" src={logo} alt="logo" />
			
			</Link>
			<div className="w-[80%] h-full">
				<input
					className="w-full h-full border-[1px] font-bold border-gray-300 px-4 bg-[#e5e7eb] rounded-[8px] focus:outline-none"
					type="text"
					placeholder="Search here..."
				/>
			</div>

			{user ? (
				<div
					className="relative cursor-pointer"
					onClick={() => setIsShow((prev) => !prev)}
				>
					<p className="w-[50px] h-[50px] bg-red-200 rounded-[50%] flex items-center justify-center text-lg uppercase">{`${user.fullname
						.split(" ")[0]
						.charAt(0)}${user.fullname
						.split(" ")[1]
						.charAt(0)}`}</p>
					<motion.div
						initial={false}
						animate={isShow ? "open" : "close"}
						variants={accountVarients}
						className="w-[165px] h-[120px] absolute bg-white top-[55px] left-0 -translate-x-[82%] z-10 border-[1px] border-gray-300 rounded-md px-3 py-4 flex flex-col gap-3"
					>
						<div className="flex gap-1 text-sm items-center">
							<MdOutlineAccountCircle size={20} />
							<Link to="/user-details">My Accounts</Link>
						</div>
						<div className="flex gap-1 text-sm items-center">
							<IoDocumentsOutline size={20} />
							<Link to="/user-resume">My Document</Link>
						</div>
						<div className="flex gap-1 text-sm items-center">
							<PiSignOut size={20} />
							<Link to="#">Sign out</Link>
						</div>
					</motion.div>
				</div>
			) : (
				<Link
					to={"/loggin"}
					className="px-4 h-10 bg-[#e5e7eb] text-center rounded-xl border-[1px] border-gray-300 cursor-pointer flex items-center"
				>
					Log in
				</Link>
			)}
		</header>
	);
};

export default Header;
