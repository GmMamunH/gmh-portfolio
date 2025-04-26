"use client";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <div className="h-full w-full bg-gray-800 py-16 px-3 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-center mb-10 py-6 text-white"
      >
        <h2 className="text-4xl font-bold inline border-b-4 border-cyan-400">
          About Me
        </h2>
      </motion.div>
      <div className="max-w-4xl mx-auto space-y-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          <p className="text-lg text-white text-justify mt-2">
            Hi, I&apos;m Md Mamun Hossain!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          <p className="text-lg text-white text-justify">
            {" "}
            I am a Full-Stack Mobile & Web Developer specializing in modern web
            and mobile application development using React.js, Next.js, and
            React Native CLI. With a strong background in Java-based Native
            Android App Development, I possess deep expertise in building
            performance-optimized and feature-rich mobile applications.
            Currently, I am focusing on Cross-Platform Mobile App Development
            using React Native CLI and handling full-cycle mobile app projects
            at the production level for a company. I am passionate about
            creating high-performance, user-friendly, and scalable applications
            by leveraging the latest technologies and best development
            practices.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
