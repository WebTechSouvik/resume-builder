import Achievement from "./components/formSection/Achievement";
import Certificate from "./components/formSection/Certificate";
import Hobbies from "./components/formSection/Hobbies";
import Language from "./components/formSection/Language";
import Project from "./components/formSection/Project";
import Reference from "./components/template1/Reference";

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
  reference: [],
  themeColour: "",
};
export const colourCode =[
  { name: "Blue", class: "bg-[#0000FF]" },
  { name: "DarkBlue", class: "bg-[#00008B]" },
  { name: "Yellow", class: "bg-[#FFFF00]" },
  { name: "Lime", class: "bg-[#00FF00]" },
  { name: "Pink", class: "bg-[#FFC0CB]" },
  { name: "Silver", class: "bg-[#C0C0C0]" },
  { name: "Grey", class: "bg-[#808080]" },
  { name: "Brown", class: "bg-[#A52A2A]" },
  { name: "Maroon", class: "bg-[#800000]" },
  { name: "Green", class: "bg-[#008000]" },
  { name: "Olive", class: "bg-[#808000]" },
  { name: "Aquamarine", class: "bg-[#7FFFD4]" },
  { name: "Salmon", class: "bg-[#FA8072]" },
  { name: "Teal", class: "bg-[#008080]" },
    { name: "Maroon", class: "bg-[#800000]" },
  { name: "Green", class: "bg-[#008000]" },
  { name: "Olive", class: "bg-[#808000]" },
  { name: "Aquamarine", class: "bg-[#7FFFD4]" },
  { name: "Salmon", class: "bg-[#FA8072]" },
  { name: "Teal", class: "bg-[#008080]" },
  
];
