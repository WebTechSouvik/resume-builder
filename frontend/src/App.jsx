import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userDetalisThunk } from "./redux/slice/userSlice.js";
import HomePage from "./pages/HomePage.jsx";
import RegisterPage from "./pages/userPage/RegisterPage.jsx";
import LogginPage from "./pages/userPage/LogginPage.jsx";
import UserDeatlisPage from "./pages/userPage/UserDeatilsPage.jsx";
import CreateResumePage from "./pages/CreateResumePage.jsx";
import PersonalDetails from "./components/formSection/PersonalDetails.jsx";
import Experience from "./components/formSection/Experience.jsx";
import Education from "./components/formSection/Education.jsx";
import Skill from "./components/formSection/Skill.jsx";
import AddNewSection from "./components/formSection/AddNewSection.jsx";
import { Toaster } from "sonner";
import Protected from "./components/Protected.jsx";
import UserResumePage from "./pages/userPage/UserResumePage.jsx";

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
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/loggin" element={<LogginPage />} />
          <Route element={<Protected />}>
            <Route path="/user-details" element={<UserDeatlisPage />} />
            <Route path="/user-resume" element={<UserResumePage />} />
            <Route path="/createresume/:Id" element={<CreateResumePage />}>
              <Route path="personal-detalis" element={<PersonalDetails />} />
              <Route path="experience" element={<Experience />} />
              <Route path="education" element={<Education />} />
              <Route path="skill" element={<Skill />} />
              <Route path="add-section" element={<AddNewSection />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster
        richColors
        toastOptions={{
          style: {
            height: "50px",
            paddingLeft: "10px",
          },
        }}
      />
    </div>
  );
}

export default App;
