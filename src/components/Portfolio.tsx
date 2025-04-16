"use client";
import edust from "@/assets/images/portfolio/edust-project.png";
import debhub from "@/assets/images/portfolio/devhub.png";
import nextCrud from "@/assets/images/portfolio/next-crud.png";
import Image from "next/image";

import { motion } from "framer-motion";
export default function PortfolioComponent() {
  const project = [
    {
      id: 1,
      src: edust,
      imgStyle: "bg-white",
      demo: "https://edust.org/",
      code: "https://github.com/GmMamunH/edust",
    },
    {
      id: 2,
      src: debhub,
      imgStyle: "bg-white",
      demo: "https://github.com/GmMamunH/DevHub",
      code: "https://github.com/GmMamunH/DevHub",
    },
    {
      id: 3,
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
        viewport={{ once: true }}
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
        viewport={{ once: true }}
        className="grid grid-cols-1  md:grid-cols-3 gap-10 max-w-screen-lg  mx-auto "
      >
        {project.map(({ id, src, demo, code, imgStyle }) => (
          <div key={id}>
            <div
              className={`shadow-lg shadow-cyan-500/50 rounded-lg ${imgStyle}`}
            >
              <div>
                <Image
                  src={src}
                  alt="GmMamunH"
                  width={500}
                  height={500}
                  className="rounded-2xl mx-auto"
                />

                <div className="flex justify-between items-center gap-10">
                  <a
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-6 py-3 rounded-bl-md text-2xl hover:font-bold duration-500"
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>

                  <a
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-6 py-3 rounded-br-md text-2xl hover:font-bold duration-500"
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
