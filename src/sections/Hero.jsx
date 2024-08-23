import styled from "styled-components";
import { GradiantText } from "../UI/GradiantText";
import { HeroHeading } from "../UI/Headings";
import { LookAtMe } from "../UI/LookAtMe";


const StyledHero = styled.section`
  margin-top: var(--section-mt);
  height: calc(100svh - var(--section-mt));

  p {
    font-size: var(--p-text);
    color: var(--colour-grey-400);
    margin-top: 1.2rem;
  }
`;

export default function Hero() {
    return (
        <StyledHero>
        <LookAtMe>Hi there, I’m</LookAtMe>
        <HeroHeading>
          Your Full-stack Developer,
          <br />
          <GradiantText>Marya Alharbi!</GradiantText>
        </HeroHeading>
        <p>
          A girl who enjoys building web applications and &mdash;struggles a little bit with&mdash; designing
          them.
        </p>
      </StyledHero>
    )
}

