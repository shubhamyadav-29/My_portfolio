import Skills from "../components/Skills";

function About() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="p-10 text-white max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">
          About Me
        </h2>

        <p className="text-gray-300 mb-10">
          I am Shubham Yadav, a BSc IT final-year student focusing on
          full-stack development and modern web technologies.
        </p>

        <Skills />
      </div>
    </div>
  );
}

export default About;


// import Skills from "../components/Skills";

// function About() {
//   return (
//     <div className="bg-slate-900 min-h-screen">
//       <div className="p-10 text-white max-w-5xl mx-auto">
//         <h2 className="text-4xl font-bold text-blue-400 mb-6">
//           About Me
//         </h2>

//         <p className="text-gray-300 mb-10">
//           I am Shubham Yadav, a BSc IT final-year student focusing on
//           full-stack development and modern web technologies.
//         </p>

//         <Skills />
//       </div>
//     </div>
//   );
// }

// export default About;
