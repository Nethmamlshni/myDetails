import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Home/nav.bar";
import BackgroundVideo from "../BackgroundVideo";
import { FaHtml5,FaCss3, FaJs, FaJava, FaReact, FaPython } from "react-icons/fa";
import { SiC, SiPhp, SiMysql, SiMongodb, SiTailwindcss} from "react-icons/si";



const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3 className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
    { name: "C", icon: <SiC className="text-blue-500 text-4xl" /> },
    { name: "Java", icon: <FaJava className="text-red-600 text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-blue-500 text-4xl" /> },
    { name: "PHP", icon: <SiPhp className="text-indigo-700 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-4xl" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400 text-4xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  ];

  const experiences = [
    {
      id: 1,
      startDate: "",
      endDate: "",
      title: "",
      company: "",
      description:
        " Not Yet",
    },
  ];

const education = [
  {
    id: 1,
    degree: "BSc in Information & Communication Technology",
    university: "Uva Wellassa University",
    year: "2022 - Present",
  },
    {
        id: 2,
        degree: "Advanced Level",
        university: "Kuliyapitiya Central College",
        year: "2020",
    },
    {
        id: 3,
        degree: "Ordinary Level",
        university: "Pannala National School",
        year: "2018",
    },
];

const certificates = [
  { id: 1, name: "Web Design For Beginners", issuer: "University of Moratuwa , Sri Lanka ", year: "2025" },
  { id: 2, name: "Real World Projects for Practice (HTML , CSS , JS)", issuer: "Udemy", year: "2024" },
  { id: 3, name: "Responsive Web Design", issuer: "FreeCodeCamp", year: "2024" },
];

const About = () => {
  const [activeSection, setActiveSection] = useState("Skills");

  const renderSection = () => {
    switch (activeSection) {
      case "Skills":
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-6 gap-6 justify-center items-center mt-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  {skill.icon}
                </div>
              ))}
            </div>
          </motion.div>
      )
      case "Experience":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-4">
                <p className="text-gray-500">{exp.startDate} - {exp.endDate}</p>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-700">{exp.company}</p>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            ))}
          </motion.div>
        );
      case "Education":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-700">{edu.university}</p>
                <p className="text-gray-500">{edu.year}</p>
              </div>
            ))}
          </motion.div>
        );
      case "Certificates":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {certificates.map((cert) => (
              <div key={cert.id} className="mb-4">
                <h3 className="text-xl font-semibold">{cert.name}</h3>
                <p className="text-gray-700">{cert.issuer}</p>
                <p className="text-gray-500">{cert.year}</p>
              </div>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-300 bg-gray-100">
      <BackgroundVideo />

      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 z-5 text-black font-serif">
        <Navbar />

        {/* About Me Content */}
        <div className="flex flex-col items-center pt-20 px-6 mt-30">
          {/* Animated Heading */}
          <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold text-center">
            About Me
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="mt-4 max-w-2xl text-center text-lg">
            "Currently immersed in coding while pursuing my Bachelor's in <strong>Information & Communication Technology</strong> at <strong>Uva Wellassa University</strong>,
            I'm passionate about tech and dedicated to turning ideas into innovative solutions with code."
          </motion.p>

          {/* Sections Navigation */}
          <div className="mt-15 w-full max-w-4xl">
            <div className="flex justify-center space-x-8 border-b pb-4">
              {["Skills", "Experience", "Education", "Certificates"].map((section) => (
                <span
                  key={section}
                  className={`cursor-pointer  ${activeSection === section ? "font-bold text-black border-b-4 border-black" : "text-gray-500"}`}
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </span>
              ))}
            </div>

            {/* Display Content Based on Selection */}
            <div className="mt-6">{renderSection()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
