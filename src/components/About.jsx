import React from "react";
import { useState } from "react";

const About = () => {
  const about = [
    {
      id: 1,
      details:
        "Assalamu Alikum. My name is Md Mamun Hossain. I am an experienced Android app and full stack web developer with a deep passion for coding and a love for reading. My career in software development has been shaped by a dedication to creating innovative digital solutions and a continuous quest for learning and improvement.",
    },
    {
      id: 2,
      title: "Professional Expertise",

      details:
        "In the realm of Android app development, I excel in building user-friendly and high-performance mobile applications. With proficiency in Java and Kotlin, I leverage the Android SDK to design and implement apps that are both functional and aesthetically pleasing. My focus is on crafting seamless user experiences and optimizing app performance to meet and exceed user expectations.",

      details2:
        "As a full stack web developer, I possess comprehensive skills that span both the front-end and back-end aspects of web development. I am proficient in HTML, CSS, and JavaScript for creating engaging and responsive user interfaces. On the server side, I have experience with technologies such as Node.js, Express.js, and various database systems like MySQL and MongoDB. This dual capability allows me to develop robust, scalable web applications from the ground up, ensuring a cohesive and efficient integration between the client and server sides.",
    },
    {
      id: 3,
      title: "Passion for Coding",
      details:
        "Coding is not just my profession; it’s my passion. I am driven by the challenge of solving complex problems and the satisfaction of seeing my ideas materialize into functioning software. Whether it’s debugging code, optimizing algorithms, or learning a new framework, I thrive on the continual process of discovery and innovation that coding offers. My commitment to staying current with the latest developments in technology fuels my enthusiasm and keeps me motivated to improve and expand my skill set.",
    },
    {
      id: 4,
      title: "Love for Reading",
      details:
        "Outside the world of code, I am an avid reader. Books are my gateway to both relaxation and learning. I enjoy exploring a wide variety of genres, from technical books that deepen my understanding of programming concepts to fiction that sparks my imagination and provides new perspectives. Reading enriches my life and broadens my horizons, contributing to both my personal and professional development.",
    },
    {
      id: 5,
      title: "Personal Philosophy",
      details:
        "I firmly believe in the importance of lifelong learning and adaptability, especially in the fast-paced field of technology. I am dedicated to continually upgrading my skills and embracing new challenges. By participating in developer communities, attending workshops, and taking online courses, I stay connected to the evolving trends and practices in the industry. Sharing knowledge and collaborating with others are also integral parts of my growth as a developer.",
    },
    {
      id: 6,
      title: "Future Aspirations",
      details:
        "Looking ahead, I am excited to tackle new and challenging projects that push the boundaries of what technology can achieve. My goal is to refine my expertise as an Android app and full stack web developer, while also exploring new areas of software development. I aspire to work on innovative solutions that make a positive impact and collaborate with fellow professionals who share my passion for technology and creativity.",
    },
  ];
  // ===================
  const textStyle = {
    maxWidth: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div name="about" className="h-full w-full bg-gray-800 py-16 px-3 md:px-6">
      <div className="text-center py-6 text-white">
        <p className="text-4xl border-b-4 border-gray-500 inline font-bold">
          About Me
        </p>
        {/* <p className="text-2xl py-4">Md Mamun Hossain: Android App and Full Stack Web Developer</p> */}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div style={isOpen ? null : textStyle}>
          <div className="max-w-screen-lg mx-auto">
            {about.map(({ id, title, details, details2 }) => (
              <div key={id}>
                <p className="text-3xl pt-4 pb-2 text-white font-bold">
                  {title}
                </p>
                <p className="text-2xl text-white text-justify">{details}</p>
                <p className="text-2xl pt-2 text-white text-justify">
                  {details2}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-6 py-3 rounded-md text-1xl mt-5 text-white"
        >
          {isOpen ? "Read less..." : "Read more..."}
        </button>
      </div>
    </div>
  );
};

export default About;
