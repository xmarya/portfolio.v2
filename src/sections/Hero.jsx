import styled from "styled-components";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { HeroHeading } from "../UI/Headings";
import { LookAtMe } from "../UI/LookAtMe";
import { Button } from "../UI/Button";
import {motion} from "framer-motion";


const StyledHero = styled.section`
  height: 80svh;
  display: flex;
  flex-direction: column;
  margin-top: calc(var(--section-mt) - 10rem);

  p {
    font-size: var(--p-text);
    color: var(--colour-grey-400);
    margin-top: 2rem;
  }

  ${Button} {
    margin-top: 3rem;
  }
`;

export default function Hero() {
    return (
        <StyledHero>

        <AnimatedWrapper>
        <LookAtMe>Hi there, I’m</LookAtMe>
        </AnimatedWrapper>

        <HeroHeading>
        <AnimatedWrapper>
          Your Full-stack Developer,
        </AnimatedWrapper>
          {/* <br /> */}
          <AnimatedWrapper>
            Marya Alharbi!
            </AnimatedWrapper>
        </HeroHeading>

        <AnimatedWrapper>
        <p>
          A girl who enjoys building and designing web applications.
        </p>
        </AnimatedWrapper>
        <motion.div
          initial={{y: 25, opacity:0}}
          animate={{y:0, opacity:1 , transition: {delay: 0.8, type: "just", duration: 0.5, ease: "easeIn"}}}>
          <Button>Contact me</Button>
        </motion.div>
      </StyledHero>
    )
}

