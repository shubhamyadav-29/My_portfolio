import Skills from "../components/Skills";

function About() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 py-12 text-gray-800 dark:text-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          About Me
        </h2>

        <p className="mb-10">
          I am Shubham Yadav, a BSc IT final-year student focusing on
          full-stack development and modern web technologies.
        </p>

        <Skills />
      </div>
    </div>
  );
}

export default About;
