import logo from "../assets/logo.png"
import {Link} from "react-router-dom"


const Header = () => {
	return (
		<header className="w-full h-[75px] flex justify-between items-center px-10 py-3  border-b-[1px] border-gray-300">
			<div className="h-full">
				<img className="h-full" src={logo} alt="logo"/>
			</div>
			<div className="w-[80%] h-full">
				<input className="w-full h-full border-[1px] font-bold border-gray-300 px-4 bg-[#e5e7eb] rounded-[8px] focus:outline-none" type="text" placeholder="Search here..."/>
			</div>
		
				<Link to={"/loggin"} className="px-4 h-10 bg-[#e5e7eb] text-center rounded-xl border-[1px] border-gray-300 cursor-pointer flex items-center">Log in</Link>
			
		</header>


		)
};

export default Header;
