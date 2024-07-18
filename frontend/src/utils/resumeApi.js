import axios from "axios";

axios.defaults.withCredentials=true;

export const getTemplate=async()=>{
	const {data}=await axios.get("http://localhost:8000/api/v1/template")
	return data
}