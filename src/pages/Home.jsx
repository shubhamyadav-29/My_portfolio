import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 text-center">
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl font-bold text-blue-600 dark:text-blue-400"
        >
          Shubham Yadav
        </motion.h1>

        <motion.h2 className="mt-4 text-lg md:text-2xl text-gray-700 dark:text-gray-300">
          Aspiring Full-Stack Developer
        </motion.h2>

        <motion.p className="mt-6 text-sm md:text-lg text-gray-600 dark:text-gray-400">
          Final-year BSc IT student passionate about building modern web
          applications using React, Python, Django, and MySQL.
        </motion.p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="bg-blue-500 text-white px-6 py-3 rounded"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-blue-500 text-blue-500 px-6 py-3 rounded"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
