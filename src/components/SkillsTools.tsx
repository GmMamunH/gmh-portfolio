"use client";
import html from "@/assets/images/skills/html.png";
import css from "@/assets/images/skills/css.png";
import js from "@/assets/images/skills/Java-Script.png";
import react from "@/assets/images/skills/React.png";
import redux from "@/assets/images/skills/redux.png";
import next from "@/assets/images/skills/next.png";
import typescript from "@/assets/images/skills/typescript.svg";
import tailwind from "@/assets/images/skills/Tailwind-CSS.png";
import shadcn from "@/assets/images/skills/shadcn.png";
// =======================================================
import node from "@/assets/images/skills/node.png";
import express from "@/assets/images/skills/expresss.webp";
import mongo from "@/assets/images/skills/mongodb.png";
import jwt from "@/assets/images/skills/jwt.png";
// =======================================================
import vsc from "@/assets/images/skills/vsc.jpeg";
import figma from "@/assets/images/skills/Figma.png";
import notion from "@/assets/images/skills/notion.png";
import git from "@/assets/images/skills/Git.png";
import github from "@/assets/images/skills/git-hub-1.png";
import vercel from "@/assets/images/skills/vercel.png";
import firebase from "@/assets/images/skills/firebase.png";
import netlify from "@/assets/images/skills/netlify.png";

import Image from "next/image";

import { motion } from "framer-motion";

export default function SkillsTools() {
  const frontend = [
    {
      title: "HTML",
      description: "Markup language for creating web pages.",
      img: html,
    },
    {
      title: "CSS",
      description: "Style sheets language used for web design.",
      img: css,
    },
    {
      title: "JavaScript",
      description: "Programming language for dynamic content.",
      img: js,
    },
    {
      title: "React",
      description: "Library for building user interfaces.",
      img: react,
    },
    {
      title: "Redux",
      description: "Predictable state container for JavaScript applications.",
      img: redux,
    },
    {
      title: "Next.js",
      description: "React framework designed for building web applications.",
      img: next,
    },
    {
      title: "TypeScript",
      description: "Syntactic superset of JavaScript which adds static typing.",
      img: typescript,
    },
    {
      title: "TailwindCSS",
      description: "Utility-first CSS framework for rapid UI design.",
      img: tailwind,
    },
    {
      title: "Shadcn UI",
      description:
        "reusable React components focused on accessibility, customization, and developer control.",
      img: shadcn,
    },
  ];
  const backend = [
    {
      title: "Node.js",
      description: "JavaScript runtime for backend development.",
      img: node,
    },
    {
      title: "Express.js",
      description: "Minimalist web framework for Node.js.",
      img: express,
    },
    {
      title: "MongoDB",
      description: "NoSQL database for scalable applications.",
      img: mongo,
    },

    {
      title: "JWT",
      description: "JSON Web Token for secure authentication.",
      img: jwt,
    },
    {
      title: "Next.js",
      description:
        "React framework that provides both frontend and backend capabilities.",
      img: next,
    },
  ];
  const tools = [
    {
      title: "VS Code",
      description: "Powerful and widely used code editor.",
      img: vsc,
    },
    {
      title: "Figma",
      description: "Collaborative, web-based interface design tool.",
      img: figma,
    },
    {
      title: "Notion",
      description: "Versatile, all-in-one workspace and organizational tool.",
      img: notion,
    },
    {
      title: "Git",
      description: "Distributed version control system.",
      img: git,
    },
    {
      title: "GitHub",
      description:
        "Software developers to store, manage, and collaborate on code projects.",
      img: github,
    },
    {
      title: "Vercel",
      description: "Cloud platform for deploying and hosting web applications.",
      img: vercel,
    },
    {
      title: "Firebase",
      description:
        "globally distributed, fast, and secure hosting service provided",
      img: firebase,
    },
    {
      title: "Netlify",
      description:
        "Automates the building, deployment, and management of websites.",
      img: netlify,
    },
  ];

  return (
    <>
      <div className="h-full w-full bg-gray-800 px-3  py-16 md:px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-center py-6 text-white"
        >
          <p className="text-4xl border-b-4 border-gray-500 inline  font-bold">
            SkillS And Tools
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <p className="text-3xl py-8 text-center font-bold">Frontend</p>
          <section className="grid grid-cols-1  md:grid-cols-5 items-baseline gap-10 max-w-screen-lg justify-center mx-auto ">
            {frontend.map(({ title, description, img }, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                key={index}
              >
                <div className={`shadow-lg shadow-cyan-500/50 rounded-lg`}>
                  <div className="text-center p-4 flex flex-col gap-2">
                    <Image
                      src={img}
                      alt={title}
                      width={48}
                      height={48}
                      className="rounded-2xl mx-auto"
                    />
                    <p className="text-white">{title}</p>
                    <p className="text-sm line-clamp-2">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <p className="text-3xl py-8 text-center font-bold">
            Backend (Familiar)
          </p>
          <section className="grid grid-cols-1 md:grid-cols-5 items-baseline gap-10 max-w-screen-lg  mx-auto ">
            {backend.map(({ title, description, img }, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                key={index}
              >
                <div className={`shadow-lg shadow-cyan-500/50 rounded-lg`}>
                  <div className="text-center p-4 flex flex-col gap-2">
                    <Image
                      src={img}
                      alt={title}
                      width={48}
                      height={48}
                      className="rounded-2xl mx-auto"
                    />
                    <p className="text-white">{title}</p>
                    <p className="text-sm line-clamp-2">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <p className="text-3xl py-8 text-center font-bold">
            Tools, Version Control And Deployment
          </p>
          <section className="grid grid-cols-1  md:grid-cols-5 items-baseline gap-10 max-w-screen-lg justify-center mx-auto ">
            {tools.map(({ title, description, img }, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                key={index}
              >
                <div className={`shadow-lg shadow-cyan-500/50 rounded-lg`}>
                  <div className="text-center p-4 flex flex-col gap-2">
                    <Image
                      src={img}
                      alt={title}
                      width={48}
                      height={48}
                      className="rounded-2xl mx-auto "
                    />
                    <p className="text-white">{title}</p>
                    <p className="text-sm line-clamp-2">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </section>
        </motion.div>
      </div>
    </>
  );
}
