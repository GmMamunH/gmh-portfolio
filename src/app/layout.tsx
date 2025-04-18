import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Md Mamun Hossain | Frontend-Focused MERN Stack Developer",
  description:
    "I'm Md Mamun Hossain, a frontend-focused MERN stack developer with expertise in React, Redux, TypeScript, Next.js, Tailwind CSS and Shadcn UI, and backend skills in Node.js, Express.js and MongoDB. Explore my portfolio and latest projects.",
  authors: [{ name: "Md Mamun Hossain", url: "https://gmmamunh.vercel.app/" }],
  keywords:
    "Frontend Developer, Full Stack Developer, React, Redux, Next.js, Tailwind CSS, Shadcn UI, Node.js, Express.js, MongoDB, JavaScript, GitHub, Vercel, Firebase, Figma, Md Mamun Hossain, Portfolio, gmmamunh, MERN Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
