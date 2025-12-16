import Netflix_homepage from "../assets/Netflix_homepage.png";
import TreeWebpage from "../assets/TreeWebpage.png";
import Todolist from "../assets/Todolist.png";
import Virtual_campus from "../assets/Virtual_campus.png";

function Projects() {
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
    <section className="bg-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white">
          My <span className="text-blue-400">Projects</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Some of the projects I have worked on
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition">
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
                    className="border border-blue-400 text-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
