import { useSelector } from "react-redux";
import { Navigate, useNavigate,Outlet } from "react-router-dom";
import GridLoadercmp from "./GridLoadercmp";

const Protected = () => {
	const { isAthinticate, loading } = useSelector((state) => state.user);
	const navigate = useNavigate();

	if (loading) {
		return <GridLoadercmp loading={loading} />;
	} 
	else if (isAthinticate) {
		return <Outlet />;
	} 
	else if (!isAthinticate) {
		console.log("hi")
		 return <Navigate to="/loggin"/>

	}
};

export default Protected;
