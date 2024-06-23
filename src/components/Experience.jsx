import React from "react";
import {
  FaHtml5,
  FaPhp,
  FaJava,
  FaFigma,
  FaGithub,
  FaNodeJs,
  FaCss3Alt,
} from "react-icons/fa";

import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb, DiMysql } from "react-icons/di";

const Experience = () => {
  return (
    <div name="experience" className="h-full py-16 bg-gray-800 px-3 md:px-6">
      <div className="text-center py-6 text-white">
        <p className="text-4xl border-b-4 border-gray-500 inline font-bold">Experience</p>
        <p className="text-2xl py-4">These are the technologies I've worked with</p>
      </div>

      <div className="grid grid-cols-3 text-6xl  md:grid-cols-6 md:text-9xl text-white gap-10 max-w-screen-lg mx-auto ">
        <FaHtml5 />
        <FaCss3Alt />
        <SiTailwindcss />
        <RiJavascriptFill />
        <RiReactjsFill />
        <FaNodeJs />
        <DiMongodb />
        <FaGithub />
        <FaFigma />
        <FaJava />
        <FaPhp />
        <DiMysql />
      </div>
    </div>
  );
};

export default Experience;
