import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  const year = new Date().getUTCFullYear();
  const links = [
    {
      id: 1,
      child: (
        <>
          <IoLogoLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/gmmamunh/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/GmMamunH",
    },
    {
      id: 3,
      child: (
        <>
          <MdEmail size={20} />
        </>
      ),
      href: "mailto:gmmamun3004@gmail.com",
    },

    {
      id: 4,
      child: (
        <>
          <FaFacebook size={20} />
        </>
      ),
      href: "https://www.facebook.com/GmMamunH",
    },
  ];
  return (
    <div className="h-full w-full bg-slate-600  px-3 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center text-white py-5">
        <ul className="flex items-center gap-5 pb-2 md:pb-0">
          {links.map(({ id, child, href }) => (
            <li
              key={id}
              className=" hover:scale-110 px-3 py-3 rounded-full bg-gradient-to-r to-cyan-500 from-blue-500 cursor-pointer "
            >
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <p>© All Rights Reserved {year} | Md Mamun Hossain</p>
        </div>
      </div>
    </div>
  );
}
