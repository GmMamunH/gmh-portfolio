import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import Contact from "./components/Contact"
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Skill/>
    <Contact/>
    <Footer/>


    <SocialLink/>
    </>
  )
}