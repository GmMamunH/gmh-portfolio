"use client";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";
import heroImage from "@/assets/images/logo/GmMamunH.jpg";
import { motion } from "framer-motion";

export default function HomeComponent() {
  return (
    <div className="h-full pt-32 pb-12 bg-gray-800 px-3 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="flex flex-col justify-between items-center gap-10  md:flex-row max-w-screen-lg mx-auto "
      >
        <div className=" text-center text-white">
          <h1 className="text-3xl text-white font-bold md:text-4xl">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "I'm A Frontend-Focused MERN Stack Developer",
                1000,
                "I'm An Android App Developer.",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </h1>
          {/* ======= */}
          <p className="text-2xl text-justify my-6 md:text-3xl">
            With a passion for technology and a keen interest in programming, I
            have dedicated myself to the world of software development.
          </p>
          <div className="flex items-center gap-2">
            <Link
              href="portfolio"
              className="group w-fit flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-6 py-3 rounded-md text-2xl"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightDoubleLine />
              </span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1Cp6GhqOTVFGBcKPeoeMTsCdXhR1nJYYH/view?usp=drive_link"
              target="_blank"
              className="group w-fit flex items-center bg-gradient-to-l from-cyan-500 to-blue-500 cursor-pointer px-6 py-3 rounded-md text-2xl"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightDoubleLine />
              </span>
            </Link>
          </div>
        </div>
        {/* ============================== */}
        <div>
          <Image
            src={heroImage}
            alt="GmMamunH"
            width={500}
            height={500}
            className="rounded-2xl mx-auto"
          />
        </div>
      </motion.div>
    </div>
  );
}
