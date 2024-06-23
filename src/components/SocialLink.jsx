import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <IoLogoLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/gmmamunh/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/GmMamunH",
    },
    {
      id: 3,
      child: (
        <>
          Gmail <MdEmail size={30} />
        </>
      ),
      href: "mailto:gmmamun3004@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaFileAlt size={30} />
        </>
      ),
      href: "./gmmamunh-resume.pdf",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Cakrir Khoj App <FaGooglePlay size={30} />
        </>
      ),
      href: "https://drive.usercontent.google.com/download?id=1pX2n3gZuak6AZ61Hdhz7iNP5AlBga2Ea&export=download&authuser=0",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <a
              className="flex justify-between items-center text-white w-full"
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
