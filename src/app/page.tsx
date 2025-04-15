import AboutPage from "./(root)/about/page";
import HomePage from "./(root)/home/page";
import PortfolioPage from "./(root)/portfolio/page";
import SkillPage from "./(root)/skills/page";

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <PortfolioPage />
      <SkillPage />
    </>
  );
}
