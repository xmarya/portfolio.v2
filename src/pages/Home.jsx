import styled from "styled-components";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Offer from "../sections/Offer";
import Tools from "../sections/Tools";
import OneDay from "../sections/OneDay";
import ContactMe from "../sections/ContactMe";

const StyledHome = styled.div`
  counter-reset: section-heading 0;
`;

export default function Home() {
  return (
    <StyledHome>
      <Hero/>
      <About/>
      <Tools/>
      <Offer/>
      <OneDay/>
      {/* <MyWorks/> */}
      <ContactMe/>
    </StyledHome>
  );
}
