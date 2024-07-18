import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import RegisterPage from "./pages/userPage/RegisterPage.jsx";
import LogginPage from "./pages/userPage/LogginPage.jsx";
import UserDeatlisPage from "./pages/userPage/UserDeatilsPage.jsx";
import CreateResumePage from "./pages/CreateResumePage.jsx";
import PersonalDetails from "./components/formSection/PersonalDetails.jsx";
import Experience from "./components/formSection/Experience.jsx";
import Education from "./components/formSection/Education.jsx";
import Skill from "./components/formSection/Skill.jsx";
import AddNewSection from "./components/formSection/AddNewSection.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from "sonner";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home/>} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="loggin" element={<LogginPage />} />
      <Route path="user-details" element={<UserDeatlisPage/>}/>
      <Route path="createresume" element={<CreateResumePage />}>
        <Route path="personal-detalis" element={<PersonalDetails />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
        <Route path="skill" element={<Skill />} />
        <Route path="add-section" element={<AddNewSection />} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster richColors position="top-center" />
  </Provider>,
);
