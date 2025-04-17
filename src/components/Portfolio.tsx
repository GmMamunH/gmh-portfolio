"use client";
import edust from "@/assets/images/portfolio/edust-project.png";
import debhub from "@/assets/images/portfolio/devhub.png";
import nextCrud from "@/assets/images/portfolio/next-crud.png";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";
export default function PortfolioComponent() {
  const project = [
    {
      id: 1,
      title: "Edust",
      description:
        "Edust is a versatile web platform designed to enhance collaboration, engagement, and opportunities within the educational community.",
      frontend: "NextJs, TypeScript, Redux & RTK, ShadcnUI",
      backend: "-",
      src: edust,
      imgStyle: "bg-white",
      demo: "https://edust.org/",
      code: "https://github.com/GmMamunH/edust",
    },
    {
      id: 2,
      title: "DebHub",
      description:
        "DebHub is a platform where developers can find and provide solutions to programming problems, share projects, and conduct code reviews.",
      frontend:
        "Frontend : NextJS, TypeScript, Redux, TailwindCSS, TipTap Editor, Persist.",

      backend: "ExpressJS, MongoDB, JWT, doteve, cors.",

      src: debhub,
      imgStyle: "bg-white",
      demo: "https://github.com/GmMamunH/DevHub",
      code: "https://github.com/GmMamunH/DevHub",
    },
    {
      id: 3,
      title: "Next CRUD",
      description:
        "Create an user",
      frontend: "Next.js",
      backend: "Next.js",
      src: nextCrud,
      imgStyle: "bg-white",
      demo: "https://crud-app-nextjs15.vercel.app/",
      code: "https://github.com/GmMamunH/crudapp-nextjs15",
    },
  ];
  return (
    <div className=" h-full w-full bg-gray-800 px-3  py-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-center py-6 text-white"
      >
        <p className="text-4xl border-b-4 border-gray-500 inline  font-bold">
          Portfolio
        </p>
        <p className="text-2xl py-4">Check out some of my work right here</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="grid grid-cols-1  md:grid-cols-2 gap-10 md:gap-20 items-baseline max-w-screen-lg  mx-auto "
      >
        {project.map(
          ({
            id,
            title,
            description,
            frontend,
            backend,
            src,
            demo,
            code,
            imgStyle,
          }) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
              key={id}
            >
              <div
                className={`shadow-lg shadow-cyan-500/50 rounded-lg ${imgStyle}`}
              >
                <div>
                  <Image
                    src={src}
                    alt={title}
                    width={500}
                    height={500}
                    className="rounded-2xl mx-auto"
                  />

                  <div className="text-sky-900 p-4 flex flex-col gap-3">
                    <p className="text-2xl font-bold">{title}</p>
                    <li className="text-justify">{description}</li>
                    <li className="text-base font-bold">
                      {" "}
                      Frontend :{" "}
                      <span className="text-base font-normal text-justify text-slate-600 ">
                        {frontend}
                      </span>
                    </li>
                    <li className="text-base font-bold">
                      Backend :{" "}
                      <span className="text-base text-justify font-normal text-slate-600">
                        {backend}
                      </span>
                    </li>
                  </div>

                  <div className="flex justify-between items-center gap-10">
                    <Link
                      className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-6 py-3 rounded-bl-md text-2xl hover:font-bold duration-500"
                      href={demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </Link>

                    <Link
                      className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-6 py-3 rounded-br-md text-2xl hover:font-bold duration-500"
                      href={code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
}
