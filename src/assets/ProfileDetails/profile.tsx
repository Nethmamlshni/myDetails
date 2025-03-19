import Navbar from "../Home/nav.bar";
import BackgroundVideo from "../BackgroundVideo";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Wildlife-Circle USJP",
    description:
      "The Wildlife-Circle USJP is a dynamic web application developed for the Wildlife Circle at the University of Sri Jayewardenepura. The application provides a range of features including user authentication, product and order management, blog viewing, a gallery, and a unique 3D forest view.",
    image: "/wildlife-circle.png", // Replace with actual image path
    techStack: ["ReactJS", "HTML5", "CSS3", "JavaScript", "TailwindCSS", "Laravel", "MySQL"],
    githubLink: "https://github.com/your-repo",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "Portfolio is a sleek and modern showcase of my projects and achievements, developed using React, Express.js, MongoDB, TailwindCSS, CSS, HTML, JavaScript, and TypeScript. This dynamic web application effectively highlights my skills, experiences, and accomplishments, providing an aesthetically pleasing and responsive interface for users to explore my work.",
    image: "public/Screenshot 2025-03-19 at 19.19.26.png", // Replace with actual image path
    techStack: ["ReactJS", "HTML5", "CSS3", "JavaScript", "TailwindCSS", "EmailJS"],
    githubLink: "https://github.com/your-repo",
  },
  {
    id: 3,
    title: "PixelPerfect",
    description:
      "For our photography hiring platform, we developed Pixel Perfect, a seamless and user-friendly web application that connects photographers with clients. This platform allows users to browse portfolios, book photography sessions, and manage their projects efficiently, ensuring a smooth and professional experience for both photographers and clients.",
    image: "public/Screenshot 2024-11-23 at 18.50.10.png", 
    techStack: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
    githubLink: "https://github.com/Nethmamlshni/PixelPerfect-web-side.git",
  },
  {
    id: 3,
    title: "InfinitraX",
    description:
      "For our Third Year Advanced Programming Techniques Group Project, we developed an Inventory Management System called InfinitraX. It supports efficient control of inventory, preventing stock outs, optimizing stock levels, and streamlining overall supply chain processes.",
    image: "/infinitrax.png", // Replace with actual image path
    techStack: ["ReactJS", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Python", "Django", "Django-Rest-Framework"],
    githubLink: "https://github.com/your-repo",
  },
];

function Profile() {
  return (
    <>
    <div className="relative w-full h-400">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 text-black z-10 font-serif flex flex-col items-center">
        {/* Navbar */}
        <Navbar />

        {/* Animated Profile Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32 sm:mt-20 px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mt-30">Explore My Projects</h1>
          <p className="text-md md:text-lg mt-4 max-w-3xl mx-auto">
            Hi, I'm <b>Nethma Malshani</b>, Explore my different projects and see the creativity and new ideas behind each one
          </p>
        </motion.div>

        {/* Project Section */}
        <section className="py-16  w-full mt-12 px-6">
          <h2 className="text-center  text-3xl font-bold text-gray-800 mb-10">My Projects</h2>

          {/* Project Cards Grid */}
          <div className="grid m-auto lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden p-6 transition-transform transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Project Image */}
                <img src={project.image} alt={project.title} className="rounded-lg w-full h-40 object-cover" />

                {/* Project Title */}
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  VIEW ON GITHUB
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

export default Profile;
