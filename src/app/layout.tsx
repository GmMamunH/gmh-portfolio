import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Md Mamun Hossain | Full-Stack Mobile & Web Developer (React.js | Next.js | React Native CLI & Expo | Android Native (Java))",
  description:
    "I'm Md Mamun Hossain, a Full-Stack Mobile & Web Developer with expertise in React, Redux, TypeScript, Next.js, Tailwind CSS and Shadcn UI, and backend skills in Node.js, Express.js and MongoDB. React Native CLI & Expo, Android Native (Java). Explore my portfolio and latest projects.",
  authors: [{ name: "Md Mamun Hossain", url: "https://gmmamunh.vercel.app/" }],
  keywords:
    "Frontend Developer, Full Stack Developer, React, Redux, Next.js, Tailwind CSS, Shadcn UI, Node.js, Express.js, MongoDB, JavaScript, GitHub, Vercel, Firebase, Figma, Md Mamun Hossain, Portfolio, gmmamunh, MERN Stack Developer, React Native CLI & Expo, Android Native (Java)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-800">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
