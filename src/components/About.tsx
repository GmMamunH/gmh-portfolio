"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const about = [
    {
      id: 1,
      details:
        "Assalamu Alaikum. My name is Md Mamun Hossain. I am an experienced Android app and full stack web developer with a deep passion for coding and a love for reading. My career in software development has been shaped by a dedication to creating innovative digital solutions and a continuous quest for learning and improvement.",
    },
    {
      id: 2,
      title: "Professional Expertise",
      details:
        "In Android development, I excel in building high-performance, user-friendly apps using Java and Kotlin. I design and implement elegant UI/UX and optimized performance with Android SDK.",
      details2:
        "As a full stack web developer, I work with HTML, CSS, JavaScript, React, Redux, TypeScript, Next.js, Node.js, Express.js, and MongoDB. This allows me to build complete, scalable, and modern web applications from scratch.",
    },
    {
      id: 3,
      title: "Passion for Coding",
      details:
        "Coding is more than a profession—it's a passion. I enjoy solving real-world problems, writing clean code, and continuously exploring new tools and frameworks.",
    },
    {
      id: 4,
      title: "Love for Reading",
      details:
        "Books fuel my creativity and growth. I read both technical and non-technical books, which enhance both my problem-solving and imaginative thinking.",
    },
    {
      id: 5,
      title: "Personal Philosophy",
      details:
        "I believe in lifelong learning, adaptability, and sharing knowledge. Staying updated with the latest technologies is my core strength.",
    },
    {
      id: 6,
      title: "Future Aspirations",
      details:
        "I aim to build innovative solutions and work with teams that share my passion for impactful and creative technology.",
    },
  ];

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

      <div className="flex flex-col items-center">
        <div className={isOpen ? "" : "truncate-multiline"}>
          <div className="max-w-4xl mx-auto space-y-6">
            {about.map(({ id, title, details, details2 }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: id * 0.1 }}
                viewport={{ once: false }}
              >
                {title && (
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {title}
                  </h3>
                )}
                <p className="text-lg text-white text-justify">{details}</p>
                {details2 && (
                  <p className="text-lg text-white text-justify mt-2">
                    {details2}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white rounded-md transition hover:scale-105 duration-300"
        >
          {isOpen ? "Read less..." : "Read more..."}
        </button>
      </div>
    </div>
  );
}
