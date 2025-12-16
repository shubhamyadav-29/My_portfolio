import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Hi, I’m <span className="text-blue-400">Shubham Yadav</span>
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl text-gray-300">
          Aspiring Full-Stack Developer
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Final-year BSc IT student passionate about React, Python,
          Django, and Full-Stack Development.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <Link
            to="/projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
