import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getuserResumeThunk } from "../../redux/slice/resumeSlice"
import Resume from "../../components/Resume"
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const UserResumePage=()=>{
	const {userResume}=useSelector(state=>state.resume)
	const dispatch=useDispatch()
	const navigate=useNavigate()
useEffect(()=>{
	dispatch(getuserResumeThunk())

},[])

	return <main className="min-h-screen min-w-screen">
		<section className="flex gap-8 px-20 mt-10">
		<div className="w-[220px] h-[250px] border-[1px] border-dashed border-gray-400 flex flex-col justify-center items-center">
			<IoMdAddCircleOutline size={40} onClick={()=>navigate("/")} className="cursor-pointer"/>
			<p>Create resume</p>
		</div>
		{userResume && userResume.map((resume)=><Resume {...resume}/>)}
		</section>
	</main>
}

export default UserResumePage