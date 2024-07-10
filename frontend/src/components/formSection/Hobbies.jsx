import {useState} from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
const Hobbies=()=>{
const [hobbie, setHobbie] = useState("");
	const [hobbieList, setHobbieList] = useState([hobbie]);

	const addHobbie=()=>{
	setHobbie("")

	setHobbieList([...hobbieList,""])
}


	return (
		<form className="">
			<div className="space-y-12">
				<div className=" border-dotted border-[1px] border-gray-500 p-6  rounded-lg">
					<h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
						Hobbie
					</h2>
					{hobbieList.map((_,i) => (
						<div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
						<span className="col-span-full font-semibold">
								#Hobbie {i + 1}
							</span>
							<div className="sm:col-span-full">
								<label
									htmlFor="first-name"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Hobbie name
								</label>
								<div className="mt-1">
									<input
										id="first-name"
										name="language_name"
										type="text"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

						
						</div>
					))}
				</div>
			</div>

			<div className="mt-6 flex items-center justify-between gap-x-6">
				<button
					type="button"
					className="text-sm font-semibold leading-6 text-[#1f262e] flex items-center gap-1"
					onClick={addHobbie}
				>
					<IoMdAddCircleOutline size={20} />
					Add more hobbie
				</button>

				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Save
				</button>
			</div>
		</form>)
}

export default Hobbies