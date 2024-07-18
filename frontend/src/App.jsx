import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userDetalisThunk } from "./redux/slice/userSlice.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const allCookie = document.cookie;
    const cookeiArray = allCookie.split(";");
 
    cookeiArray.forEach((cookie) => {
      if (cookie.startsWith(" Token")) {
        dispatch(userDetalisThunk());
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
