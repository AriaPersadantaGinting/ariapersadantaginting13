import LingkaranCursor from "../Elements/Cursor/lingkaran";
import LoadingScreen from "../Elements/Loading/Home-Loading";
import ScrollToTop from "../Elements/Scroll";
import CircleScroll from "../Elements/Scroll/CircleScroll";
import ContactSection from "../Fragments/Portofolio/ContactSection";
import FooterSection from "../Fragments/Portofolio/FooterSection";
import HomeSection from "../Fragments/Portofolio/HomeSection";
import NavbarPortofolioNew from "../Fragments/Portofolio/NavbarPortofolioNew";
import ProjectSection from "../Fragments/Portofolio/ProjectSection";
import SkillSection from "../Fragments/Portofolio/SkillSection";

const PortofolioLayouts = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <LingkaranCursor></LingkaranCursor>
      <NavbarPortofolioNew style="bg-gradient-to-r from-[#7303c0] to-[#fdeff9]"></NavbarPortofolioNew>
      <main className="lg:h-[100rem] md:h-[110rem] sm:h-[110rem] h-[100rem] pb-64">
        <CircleScroll style="text-[#7303c0]" />
        <LoadingScreen
          style="lg:text-[12rem] md:text-[11rem] sm:text-[8.5rem] text-[6rem] lg:top-[9rem] md:top-[9rem] sm:top-[9rem] top-[11rem] lg:left-[15.5vw] md:left-[12vw] sm:left-[11vw] left-[6vw] tracking-widest"
          style2="lg:text-9xl md:text-8xl sm:text-[11vw] text-6xl lg:top-[22.5rem] md:top-[22.5rem] sm:top-[22.5rem] top-[20rem] lg:left-[38vw] md:left-[42vw] sm:left-[41vw] left-[35vw]"
        >
          Welcome
        </LoadingScreen>
        <HomeSection></HomeSection>
        <ProjectSection></ProjectSection>
        <SkillSection></SkillSection>
        <ContactSection
          style="bg-gradient-to-r from-[#7303c0] to-[#fdeff9]"
          style2="bg-gradient-to-r from-[#fdeff9] to-[#7303c0]"
          style3="mt-10 mb-32"
        />
        <FooterSection
          styles="lg:top-[-3rem] md:top-[-5rem] sm:top-[-5rem] bg-clip-text text-transparent bg-gradient-to-r from-[#002147] to-[black]"
          styles2="bg-gradient-to-r from-[#7303c0] to-[#fdeff9]"
          styles3="bg-gradient-to-r from-[#7303c0] to-[#fdeff9]"
        />{" "}
      </main>
    </>
  );
};
export default PortofolioLayouts;
