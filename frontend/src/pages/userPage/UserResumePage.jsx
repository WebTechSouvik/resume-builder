import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getuserResumeThunk } from "../../redux/slice/resumeSlice"

const UserResumePage=()=>{
	const dispatch=useDispatch()
useEffect(()=>{
	dispatch(getuserResumeThunk())

},[])

	return <div>UserResumePage</div>
}

export default UserResumePage