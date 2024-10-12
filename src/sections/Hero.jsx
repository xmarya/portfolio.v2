import { motion } from "framer-motion";
import styled from "styled-components";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { Button } from "../UI/Button";
import { HeroHeading } from "../UI/Headings";
import { LookAtMe } from "../UI/LookAtMe";
import navigateToSection from "../helpers/navigateToSection";
import { dictionary } from "../data/dictionary";


const StyledHero = styled.section`
  height: 80svh;
  display: flex;
  flex-direction: column;
  margin-top: calc(var(--section-mt) - 15rem);

  p {
    font-size: clamp(1.6rem, 2.5cqi, 2rem);
    color: var(--colour-grey-400);
    margin-top: 2rem;
  }

  ${Button} {
    margin-top: 3rem;
  }
`;


export default function Hero({language}) {
  const {hero, button} = dictionary;

  return (
        <StyledHero>

        <AnimatedWrapper>
        <LookAtMe>{hero.tinyHeading[language]}</LookAtMe>
        </AnimatedWrapper>

        <HeroHeading>
        <AnimatedWrapper>
          {hero.heroHeading[language][0]}
        </AnimatedWrapper>

          <AnimatedWrapper>
          {hero.heroHeading[language][1]}
            </AnimatedWrapper>
        </HeroHeading>

        <AnimatedWrapper>
        <p>
          {hero.paragraph[language]}
        </p>
        </AnimatedWrapper>
        
        <motion.div
          initial={{y: 25, opacity:0}}
          animate={{y:0, opacity:1 , transition: {delay: 0.8, type: "just", duration: 0.5, ease: "easeIn"}}}>
          <Button onClick={() => navigateToSection("contact-me")}>
            {button[language]}
          </Button>
        </motion.div>
      </StyledHero>
    )
}

