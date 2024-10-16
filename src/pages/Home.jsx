import styled from "styled-components";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Offer from "../sections/Offer";
import Tools from "../sections/Tools";
// import OneDay from "../sections/OneDay";
import ContactMe from "../sections/ContactMe";
import MyWorks from "../sections/MyWorks";
import { useLanguageContext } from "../helpers/LanguageContext";
import { Helmet } from "react-helmet-async";
import { dictionary } from "../data/dictionary";

export const StyledHome = styled.div`
  counter-reset: section-heading 0;
`;

export default function Home() {
  const { language } = useLanguageContext();
  const {meta} = dictionary;

  return (
    <>
    <Helmet>
                <title>Marya Alharbi</title>
                <meta name='description' content={meta.home[language]} />
            </Helmet>
    <StyledHome>
      <Hero language={language} />
      <About language={language} />
      <Offer language={language} />
      <Tools language={language} />
      {/* <OneDay/> */}
      <MyWorks language={language} />
      <ContactMe language={language} />
    </StyledHome>
    </>
  );
}
