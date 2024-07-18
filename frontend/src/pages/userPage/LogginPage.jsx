import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from "react-redux";
import { clearError, clearMessage, userDetalisThunk, userLogginThunk } from "../../redux/slice/userSlice";
import { toast } from "sonner";
import { useEffect } from "react";

const LogginPage = () => {
	const { register, handleSubmit, formState } = useForm();
	const { errors } = formState;
	const navigate=useNavigate()
	const dispatch=useDispatch()
	const { loading,isAthinticate, message, error } = useSelector((state) => state.user);


const handelLoggin=(data)=>{
	dispatch(userLogginThunk(data))

}

useEffect(() => {
		if (isAthinticate) {
			toast.success(message);
			dispatch(clearMessage());
			dispatch(userDetalisThunk())
			navigate(-1,{replace:true});
		}
		if (error) {
			toast.error(error);
			dispatch(clearError());
		}
	}, [isAthinticate, error]);


	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					alt="Your Company"
					src={logo}
					className="mx-auto h-12 w-auto"
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Sign In To Your Account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleSubmit(handelLoggin)} className="space-y-6">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-bold leading-6 text-[#1f262e]"
						>
							Email address
						</label>
						<div className="mt-2">
							<input
								{...register("email", { required: true })}
								id="email"
								type="email"
								autoComplete="email"
								className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00967e] sm:text-sm sm:leading-6"
							/>
						</div>
						{errors.email?.type=="required" && <p role="alert" className="mt-1 text-red-400 text-sm">email is required</p>}
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
								{...register("password", { required: true })}
								id="password"
								type="password"
								autoComplete="current-password"
								className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00967e] sm:text-sm sm:leading-6"
							/>
						</div>
						{errors.password?.type=="required" && <p role="alert" className="mt-1 text-red-400 text-sm">password is required</p>}
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-[#00c8aa] px-3 py-1.5 text-md font-bold leading-6 text-black shadow-sm hover:bg-[#00967e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Sign in
						</button>
					</div>
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
					Not a member?{" "}
					<Link
						to="/register"
						className="font-bold leading-6 text-[#1f262e] hover:text-[#00967e]"
					>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LogginPage;
