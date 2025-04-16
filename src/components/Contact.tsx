"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <div className="h-full w-full bg-gray-800 py-16 px-3 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center py-6 text-white"
      >
        <p className="text-4xl border-b-4 border-gray-500 inline font-bold">
          Contact
        </p>
      </motion.div>
      <div className="flex md:flex-row flex-col-reverse gap-5 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center items-center border shadow-lg p-6 rounded-2xl w-full md:w-1/2"
        >
          <form
            action="https://getform.io/f/zazkolpb"
            method="POST"
            className="flex flex-col w-full "
          >
            <h1 className="text-2xl py-4 font-bold">
              Submit the form below to get in touch with me
            </h1>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 border-2 rounded-md focus:outline-none bg-transparent text-white"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
              className="p-2 border-2 my-6 rounded-md focus:outline-none bg-transparent text-white"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              required
              className="p-2 border-2 rounded-md focus:outline-none bg-transparent text-white"
            ></textarea>

            <button className=" flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-6 py-3 my-6 rounded-md text-2xl text-white hover:scale-105 duration-300">
              Let&apos;s Talk
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border shadow-lg px-6 py-6 md:py-30 rounded-2xl w-full md:w-1/2"
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Get in touch</h1>
            <p className="flex items-center gap-2">
              <IoLocationSharp color="#7eaaff" size={24} />
              <span>Narail, Khulna, Bangladesh</span>
            </p>
            <p className="flex items-center gap-2">
              <MdEmail color="#7eaaff" size={24} />
              <span>gmmamun3004@gmail.com</span>
            </p>
            <p className="flex items-center gap-2">
              <FaSquareWhatsapp color="#7eaaff" size={24} />
              <span>(+880) 1406-566242</span>
            </p>
            <Link
              href="https://www.facebook.com/GmMamunH1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <FaFacebookSquare color="#7eaaff" size={24} />
              <span>/GmMamunH1</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
