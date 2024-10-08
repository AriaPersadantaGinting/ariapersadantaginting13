import LingkaranCursor from "../Elements/Cursor/lingkaran";
import LoadingScreen from "../Elements/Loading/Home-Loading";
import ScrollToTop from "../Elements/Scroll";
import CircleScroll from "../Elements/Scroll/CircleScroll";
import ContactSection from "../Fragments/Portofolio/ContactSection";
import FooterSection from "../Fragments/Portofolio/FooterSection";
import NavbarPortofolioNew from "../Fragments/Portofolio/NavbarPortofolioNew";
import SkillSection1 from "../Fragments/Portofolio/Skill/SkillSection1";
import SkillSection2 from "../Fragments/Portofolio/Skill/SkillSection2";
import SkillSection3 from "../Fragments/Portofolio/Skill/SkillSection3";

const SkillLayouts = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <LingkaranCursor></LingkaranCursor>
      <NavbarPortofolioNew style="bg-gradient-to-r from-[#e52d27] to-[#b31217]"></NavbarPortofolioNew>
      <main className="h-[100rem]">
        <CircleScroll style="text-[#e52d27]" />
        <LoadingScreen
          style="lg:text-[12rem] md:text-[11rem] sm:text-[8.5rem] text-[6rem] lg:top-[8rem] md:top-[9rem] sm:top-[9rem] top-[11rem] lg:left-[12.5vw] md:left-[8vw] sm:left-[6vw] left-[2vw] tracking-widest"
          style2="lg:text-9xl md:text-9xl sm:text-9xl text-8xl lg:top-[23rem] md:top-[22.5rem] sm:top-[22.5rem] top-[20rem] lg:left-[38vw] md:left-[36vw] sm:left-[25vw] left-[30vw]"
        >
          Expertise
        </LoadingScreen>
        <SkillSection1 />
        <SkillSection2 />
        <SkillSection3 />
        <ContactSection
          style="bg-gradient-to-r from-[#e52d27] to-[#b31217]"
          style2="bg-gradient-to-r from-[#b31217] to-[#e52d27]"
          style3="mt-32"
        />
        <FooterSection
          styles="lg:top-[2.5rem] md:top-[0.5rem] sm:top-[2.5rem] top-[2.5rem]
          top-[2.5rem] bg-clip-text text-transparent bg-gradient-to-r from-[#002147] to-[black]"
          styles2="bg-gradient-to-r from-[#e52d27] to-[#b31217]"
          styles3="bg-gradient-to-r from-[#e52d27] to-[#b31217]"
        ></FooterSection>
      </main>
    </>
  );
};
export default SkillLayouts;
