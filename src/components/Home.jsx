import React from "react";
import heroImg from "../assets/images/gmh.png";
import { TypeAnimation } from "react-type-animation";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-full pt-32 pb-12 bg-gray-800 px-3 md:px-6">
      <div className="flex flex-col justify-between items-center gap-10  md:flex-row max-w-screen-lg mx-auto ">
        <div className=" text-center text-white">
          <h1 className="text-3xl text-white font-bold md:text-4xl">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "I'm An Android App Developer.", // initially rendered starting point
                1000,
                "I'm A Full Stack Web Developer.",
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
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-6 py-3 rounded-md text-2xl"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightDoubleLine />
              </span>
            </Link>
          </div>
        </div>
        {/* ============================== */}
        <div>
          <img className="rounded-2xl mx-auto" src={heroImg} alt="my profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
