import { FaFacebookF ,FaInstagram,FaXTwitter,FaLinkedin } from "react-icons/fa6"



const Footer = () => {
	return <>
			<div className="footer  bg-[#313b47] flex flex-col justify-center items-center gap-5 p-7">
				<div className="footer-title">
					<ul className="flex flex-wrap justify-center gap-4 lg:gap-5 xl:gap-10 text-white list-none">
						<li>Terms of use</li>
						<li>Privacy and policy</li>
						<li>About</li>
						<li>Blog</li>
						<li>FAQ</li>
					</ul>
				</div>
				<div className="footer-dec text-center text-white opacity-25 px-2 sm:px-10 md:px-20 lg:px-32 xl:px-48 2xl:px-60">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</div>
				<div className="footer-icons flex justify-between gap-2 lg:gap-3">
					<div className="icon h-10 w-10 bg-[#04152d] rounded-full flex justify-center items-center text-white transition-all duration-500 cursor-pointer hover:shadow-[0_0_15px_0_#00c8aa] hover:text-[#00c8aa]">
						<FaFacebookF/>
					</div>
					<div className="icon h-10 w-10 bg-[#04152d] rounded-full flex justify-center items-center text-white transition-all duration-500 cursor-pointer hover:shadow-[0_0_15px_0_#00c8aa] hover:text-[#00c8aa]">
						<FaInstagram/>
					</div>
					<div className="icon h-10 w-10 bg-[#04152d] rounded-full flex justify-center items-center text-white transition-all duration-500 cursor-pointer hover:shadow-[0_0_15px_0_#00c8aa] hover:text-[#00c8aa]">
						<FaXTwitter/>
					</div>
					<div className="icon h-10 w-10 bg-[#04152d] rounded-full flex justify-center items-center text-white transition-all duration-500 cursor-pointer hover:shadow-[0_0_15px_0_#00c8aa] hover:text-[#00c8aa]">
						<FaLinkedin/>
					</div>
				</div>
			</div>
		</>;
};

export default Footer;
