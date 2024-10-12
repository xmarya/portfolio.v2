import styled from "styled-components";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Offer from "../sections/Offer";
import Tools from "../sections/Tools";
// import OneDay from "../sections/OneDay";
import ContactMe from "../sections/ContactMe";
import MyWorks from "../sections/MyWorks";
import { useLanguageContext } from "../helpers/LanguageContext";

export const StyledHome = styled.div`
  counter-reset: section-heading 0;
`;

export default function Home() {
  const { language } = useLanguageContext();

  return (
    <StyledHome>
      <Hero language={language} />
      <About language={language} />
      <Tools language={language} />
      <Offer language={language} />
      {/* <OneDay/> */}
      <MyWorks language={language} />
      <ContactMe language={language} />
    </StyledHome>
  );
}
