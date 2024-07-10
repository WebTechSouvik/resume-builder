import Achievement from "./components/formSection/Achievement";
import Certificate from "./components/formSection/Certificate";
import Hobbies from "./components/formSection/Hobbies";
import Language from "./components/formSection/Language";
import Project from "./components/formSection/Project";

export const initialTags = [
  "Software Engineer",
  "Front-end Developer",
  "Back-end Developer",
  "Full-stack Developer",
  "Web Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Data Scientist",
  "Product Manager",
  "Project Manager",
  "Business Analyst",
  "Marketing Manager",
  "Sales Representative",
  "Customer Service",
  "HR Manager",
  "Financial Analyst",
  "Content Writer",
  "Teacher/Educator",
  "Healthcare",
  "Legal Counsel",
];

export const section = [
  {
    name: "Project",
    component: <Project/>,
  },
  {
    name: "Certifiacte",
    component: <Certificate/>,
  },
  {
    name: "Language",
    component: <Language/>,
  },
  {
    name: "Hobbies",
    component: <Hobbies/>,
  },
  {
    name: "Achievement",
    component: <Achievement/>,
  },
];
