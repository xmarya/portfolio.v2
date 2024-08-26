import styled from "styled-components";
import { GradiantText } from "../UI/GradiantText";
import { HeroHeading } from "../UI/Headings";
import { LookAtMe } from "../UI/LookAtMe";
import AnimatedWrapper from "../UI/AnimatedWrapper";


const StyledHero = styled.section`
  height: 80svh;
  margin-top: calc(var(--section-mt) - 10rem);

  p {
    font-size: var(--p-text);
    color: var(--colour-grey-400);
    margin-top: 1.2rem;
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
          <AnimatedWrapper>Marya Alharbi!</AnimatedWrapper>
        </HeroHeading>

        <AnimatedWrapper>
        <p>
          A girl who enjoys building web applications and designing them.
        </p>
        </AnimatedWrapper>
      </StyledHero>
    )
}

