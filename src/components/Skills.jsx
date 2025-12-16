function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS / Tailwind", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React.js", level: "75%" },
    { name: "Python", level: "80%" },
    { name: "Django", level: "70%" },
    { name: "MySQL", level: "70%" },
    { name: "Git & GitHub", level: "75%" },
  ];

  return (
    <section className="bg-slate-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-white">
          My <span className="text-blue-400">Skills</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Technologies I work with and continuously improve
        </p>

        {/* Skills List */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">
                  {skill.name}
                </span>
                <span className="text-gray-300">
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
