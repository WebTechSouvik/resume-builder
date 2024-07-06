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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<UserDeatlisPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="loggin" element={<LogginPage />} />
      <Route path="createresume" element={<CreateResumePage/>}/>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
