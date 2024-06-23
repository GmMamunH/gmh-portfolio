import React from "react";
import heroImg from "../assets/images/gmh.png";

const Portfolio = () => {
  const project = [
    {
      id: 1,
      src: heroImg,
      imgStyle: "bg-white",
      demo: "https://gm-mamun-h.web.app/",
      code: "https://github.com/GmMamunH/gm-mamun-h-portfolio",
    },
    {
      id: 2,
      src: heroImg,
      imgStyle: "bg-white",
      demo: "https://gm-mamun-h.web.app/",
      code: "https://github.com/GmMamunH/gm-mamun-h-portfolio",
    },
    {
      id: 3,
      src: heroImg,
      imgStyle: "bg-white",
      demo: "https://gm-mamun-h.web.app/",
      code: "https://github.com/GmMamunH/gm-mamun-h-portfolio",
    },
    {
      id: 4,
      src: heroImg,
      imgStyle: "bg-white",
      demo: "https://gm-mamun-h.web.app/",
      code: "https://github.com/GmMamunH/gm-mamun-h-portfolio",
    },
    {
      id: 5,
      src: heroImg,
      imgStyle: "bg-white",
      demo: "https://gm-mamun-h.web.app/",
      code: "https://github.com/GmMamunH/gm-mamun-h-portfolio",
    },
    {
      id: 6,
      src: heroImg,
      imgStyle: "bg-white",
      demo: "https://gm-mamun-h.web.app/",
      code: "https://github.com/GmMamunH/gm-mamun-h-portfolio",
    },
  ];
  return (
    <div
      name="portfolio"
      className=" h-full w-full bg-gray-800 px-3  py-16 md:px-6"
    >
      <div className="text-center py-6 text-white">
        <p className="text-4xl border-b-4 border-gray-500 inline  font-bold">
          Portfolio
        </p>
        <p className="text-2xl py-4">Check out some of my work right here</p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-10 max-w-screen-lg mx-auto ">
        {project.map(({ id, src, demo, code, imgStyle }) => (
          <div key={id}>
            <div
              className={`shadow-lg shadow-cyan-500/50 rounded-lg ${imgStyle}`}
            >
              <div>
                <img
                  className="w-full h-full rounded-lg "
                  src={src}
                  alt="img"
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
      </div>
    </div>
  );
};

export default Portfolio;
