"use client";
import { motion } from "framer-motion";

export default function SkillsAndTools() {
  const skills = [
    { id: 1, title: "HTML", style: "w-[90%] ", percentage: "90%" },
    { id: 2, title: "CSS", style: "w-[90%] ", percentage: "90%" },
    {
      id: 3,
      title: "Tailwind",
      style: "w-[80%] ",
      percentage: "80%",
    },
    {
      id: 4,
      title: "JavaScript",
      style: "w-[70%] ",
      percentage: "70%",
    },
    { id: 5, title: "ReactJS", style: "w-[80%] ", percentage: "80%" },
    { id: 6, title: "NodeJS", style: "w-[50%] ", percentage: "50%" },
    { id: 7, title: "Git", style: "w-[85%] ", percentage: "85%" },
    { id: 8, title: "Figma", style: "w-[80%] ", percentage: "80%" },
    { id: 9, title: "Java", style: "w-[75%] ", percentage: "75%" },
    { id: 10, title: "PHP", style: "w-[60%] ", percentage: "60%" },
    { id: 11, title: "MySQL", style: "w-[50%]", percentage: "50%" },
    { id: 12, title: "TypeScript", style: "w-[70%]", percentage: "70%" },
    { id: 13, title: "Next.js", style: "w-[80%]", percentage: "80%" },
  ];
  return (
    <div className="h-full w-full bg-gray-800 px-3  py-16 md:px-6 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-center py-6 text-white"
      >
        <p className="text-2xl border-b-4 border-gray-500 inline">
          {" "}
          Why Choose Me{" "}
        </p>
        <p className="text-4xl  py-4 font-bold">My Experience Area</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="grid grid-cols-2 text-6xl  md:grid-cols-3 md:text-9xl text-white gap-10 max-w-screen-lg mx-auto"
      >
        {skills.map(({ id, title, style, percentage }) => (
          <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }} key={id} className="mb-1 text-base font-medium dark:text-white">
            <div className="flex justify-between py-3">
              <p>{title}</p> <p>{percentage}</p>
            </div>

            <div
              className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 overflow-x-auto z-0
                relative "
            >
              <div
                className={`animate-scroll absolute inset-0  bg-gradient-to-l from-green-500 to-red-500 h-2.5 rounded-full  ${style}`}
              ></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
