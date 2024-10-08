import LingkaranCursor from "../Elements/Cursor/lingkaran";
import LoadingScreen from "../Elements/Loading/Home-Loading";
import ScrollToTop from "../Elements/Scroll";
import CircleScroll from "../Elements/Scroll/CircleScroll";
import ContactSection1 from "../Fragments/Portofolio/Contact/ContactSection1";
import ContactSection2 from "../Fragments/Portofolio/Contact/ContactSection2";
import FooterSection from "../Fragments/Portofolio/FooterSection";
import NavbarPortofolioNew from "../Fragments/Portofolio/NavbarPortofolioNew";

const ContactLayouts = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <LingkaranCursor></LingkaranCursor>
      <NavbarPortofolioNew style="bg-gradient-to-r from-[#1CD8D2]  to-[#93EDC7]"></NavbarPortofolioNew>
      <main className="h-[90rem]">
        <CircleScroll style="text-[#1CD8D2]" />
        <LoadingScreen
          style="lg:text-[12rem] md:text-[11rem] sm:text-[8.5rem] text-[6rem] lg:top-[8rem] md:top-[9rem] sm:top-[9rem] top-[11rem] lg:left-[18vw] md:left-[13vw] sm:left-[13vw] left-[9vw] tracking-widest"
          style2="lg:text-9xl md:text-9xl sm:text-9xl text-8xl lg:top-[23rem] md:top-[22.5rem] sm:top-[22.5rem] top-[20rem] lg:left-[38vw] md:left-[36vw] sm:left-[30vw] left-[26vw]"
        >
          Connect
        </LoadingScreen>
        <ContactSection1 />
        <ContactSection2 />
        <FooterSection
          styles="lg:top-[-6rem] md:top-[-2.5rem] sm:top-[-2rem] top-[-2rem] bg-clip-text text-transparent bg-gradient-to-r from-[#f5f5f5] to-[white]"
          styles2="bg-gradient-to-r from-[#1CD8D2] via-[#24639b]  to-[#93EDC7]"
          styles3="bg-gradient-to-r from-[#1CD8D2] via-[#24639b]  to-[#93EDC7]"
        ></FooterSection>
      </main>
    </>
  );
};
export default ContactLayouts;
