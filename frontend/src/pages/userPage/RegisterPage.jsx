import logo from "../../assets/logo.png";
import {Link} from "react-router-dom"

const RegisterPage = () => {
	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					alt="Your Company"
					src={logo}
					className="mx-auto h-12 w-auto"
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Become a Member
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form action="#" method="POST" className="space-y-6">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-bold leading-6 text-[#1f262e]"
						>
							Email address
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								required
								autoComplete="email"
								className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00967e] sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-bold leading-6 text-[#1f262e]"
							>
								Password
							</label>
						</div>
						<div className="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								required
								autoComplete="current-password"
								className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00967e] sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-[#00c8aa] px-3 py-1.5 text-md font-bold leading-6 text-black shadow-sm hover:bg-[#00967e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							register
						</button>
					</div>
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
					Already have a account?{" "}
					<Link
						to='/loggin'
						className="font-bold leading-6 text-[#1f262e] hover:text-[#00967e]"
					>
						Sign In
					</Link>
				</p>
			</div>
		</div>
	);
};

export default RegisterPage;
