"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { motion } from "framer-motion";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();

  const links = [
    { id: 1, link: "/", catName: "home" },
    { id: 2, link: "/about", catName: "about" },
    { id: 3, link: "/skills", catName: "Skills & Tools" },
    { id: 4, link: "/portfolio", catName: "portfolio" },
    { id: 5, link: "/contact", catName: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 z-50 bg-slate-600 text-white fixed px-3 md:px-6">
      <Link
        href="/"
        className="text-3xl font-logoFont font-bold italic cursor-pointer capitalize hover:scale-105 hover:text-red-700 duration-500"
      >
        mamun
      </Link>

      {/* ===================== logo end ======================= */}

      <ul className="hidden md:flex md:gap-10">
        {links.map(({ id, link, catName }) => (
          <li
            key={id}
            className="cursor-pointer text-white font-medium capitalize hover:scale-110 duration-500"
          >
            <Link
              href={link}
              className={`link ${
                pathname === link
                  ? "text-yellow-400 font-semibold underline"
                  : ""
              }`}
            >
              {catName}
            </Link>
          </li>
        ))}
      </ul>
      {/* ================= desktop end ================ */}

      <div
        onClick={() => setNav(!nav)}
        className="text-white z-10 cursor-pointer md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link, catName }) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
              key={id}
              className="px-6 cursor-pointer text-white font-medium capitalize py-5"
            >
              <Link
                href={link}
                onClick={() => setNav(false)}
                className={`link ${
                  pathname === link
                    ? "text-yellow-400 font-semibold underline"
                    : ""
                }`}
              >
                {catName}
              </Link>
            </motion.div>
          ))}
        </ul>
      )}

      {/* ================ mobile end =============== */}
    </div>
  );
}
