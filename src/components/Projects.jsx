import Netflix_homepage from "../assets/Netflix_homepage.png";
import TreeWebpage from "../assets/TreeWebpage.png";
import Todolist from "../assets/Todolist.png";
import Virtual_campus from "../assets/Virtual_campus.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      title: "Netflix Clone",
      image: Netflix_homepage,
      description: "Netflix UI clone using React",
      tech: ["React", "CSS", "API"],
      github: "https://github.com/shubhamyadav-29/Netflix-Clone.git",
      live: "https://lnkd.in/d3gEtbK8",
    },
    {
      title: "Virtual Campus",
      image: Virtual_campus,
      description: "Online learning platform",
      tech: ["React", "Django", "MySQL"],
      github: "https://github.com/shubhamyadav-29",
      live: "#",
    },
    {
      title: "Tree Info Website",
      image: TreeWebpage,
      description: "Tree information website",
      tech: ["HTML", "Tailwind", "JS"],
      github: "https://github.com/shubhamyadav-29/Treewebsite.git",
      live: "https://lnkd.in/dVw6Y6hi",
    },
    {
      title: "TodoList Website",
      image: Todolist,
      description: "Task management application",
      tech: ["HTML", "Bootstrap", "JS", "Django", "Python", "SQLite"],
      github: "https://github.com/shubhamyadav-29/to-do-list.git",
      live: "https://todo-manager-q7rz.onrender.com/todolist/",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors px-4 sm:px-6 md:px-10 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400">
          My <span className="text-blue-400">Projects</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
          Some of the projects I have worked on
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div
                className="
                               absolute inset-0 bg-black/80 
                                           flex flex-col justify-center items-center text-center
                           opacity-100 md:opacity-0 md:group-hover:opacity-100
                           transition
                                     "
              >
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mt-2 px-4">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-blue-400 text-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-800 p-6 rounded-xl max-w-lg w-full relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-3 text-white text-xl"
              >
                ✕
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded mb-4"
              />

              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 mt-2">
                {selectedProject.description}
              </p>

              <div className="flex gap-2 mt-4 flex-wrap">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-700 text-blue-400 px-3 py-1 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-blue-400 text-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition"
                >
                  GitHub
                </a>

                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
