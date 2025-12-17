import { motion } from "framer-motion";

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
    <section className="bg-white dark:bg-slate-800 rounded-xl p-6 transition-colors">
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
        My Skills
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="w-full bg-slate-300 dark:bg-slate-700 h-3 rounded-full">
              <motion.div
                className="bg-blue-500 h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
