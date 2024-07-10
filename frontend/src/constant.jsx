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
    component: <Project />,
  },

  {
    name: "Certifiacte",
    component: <Certificate />,
  },
  {
    name: "Language",
    component: <Language />,
  },
  {
    name: "Hobbies",
    component: <Hobbies />,
  },
  {
    name: "Achievement",
    component: <Achievement />,
  },
];

export const resumeInfoObj = {
  personal_info: {
    firstname: "",
    lastname: "",
    email: "",
    contact_no: "",
    education_specalization: "",
    job_title: "",
    bio: "",
    address: "",
    img_url: "",
  },
  scocial_media_link: {
    linkdin: "",
    github: "",
    portFolio: "",
  },
  education: [],
  project: [],
  skills: [],
  experince: [],
  hobbies: [],
  certificates: [],
  training: [],
  achievement: "",
  languages: [],
};
