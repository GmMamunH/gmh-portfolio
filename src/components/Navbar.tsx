"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "skill" },
    { id: 6, link: "contact" },
  ];
  return (
    <div className=" flex justify-between items-center w-full h-20 z-50 bg-slate-600 text-white fixed px-3 md:px-6">
      <Link
        href="home"
        smooth
        duration={500}
        className="text-3xl font-logoFont font-bold italic cursor-pointer capitalize hover:scale-105 hover:text-red-700 duration-500"
      >
        mamun
      </Link>
      {/* ===================== logo end ======================= */}

      <ul className="hidden md:flex md:gap-10 ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer text-white font-medium capitalize hover:scale-110 duration-500 "
          >
            <Link href={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* ================= desktop end ================ */}

      <div
        onClick={() => setNav(!nav)}
        className="text-white z-10 cursor-pointer  md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-6 curser-pointer text-white font-medium capitalize py-5"
            >
              <Link
                onClick={() => setNav(!nav)}
                href={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* ================ mobile end =============== */}
      {/* ============ navbar ============ */}
    </div>
    //
  );
}
