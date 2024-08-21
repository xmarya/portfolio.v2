import styled from "styled-components";
import { LookAtMe } from "../UI/LookAtMe";
import { GradiantText } from "../UI/GradiantText";
import CardsList from "../UI/CardsList";

const Hero = styled.section`
  margin-top: var(--section-mt);
  height: calc(100svh - var(--section-mt));

  p {
    font-size: var(--p-text);
    color: var(--colour-grey-400);
    margin-top: 1.2rem;
  }
`;

const HeroHeading = styled.h1`
  font-size: var(--hero-heading);
  line-height: 1.2;
`;

const About = styled.section`
  margin-top: var(--section-mt);

  p {
    margin-bottom: 1.5rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: var(--section-heading);
  font-weight: 600;
  position: relative;
  margin-top: var(--section-heading-mt);
  margin-bottom: var(--section-heading-mb);

  &::before {
    content: "0" counter(section-heading) ".";
    position: relative;
    counter-increment: section-heading 1;
    color: var(--neon-purple);
    font-size: clamp(var(--lg-text), 3vw, 2rem);
    margin-right: 0.8rem;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 15%;
    width: 30rem;
    height: 0.01rem;
    background-color: var(--neon-purple);
    margin-left: 2rem;
  }
`;

const SectionSubHeading = styled.h3`
    font-size: var(--xxl-text);
`;

export default function Home() {
  return (
    <div>
      <Hero>
        <LookAtMe>Hi there, I’m</LookAtMe>
        <HeroHeading>
          Your Full-stack Developer,
          <br />
          <GradiantText>Marya Alharbi!</GradiantText>
        </HeroHeading>
        <p>
          A girl who enjoys building web applications and struggles designing
          them.
        </p>
      </Hero>

      <About id="about">
        <SectionHeading>who I am?</SectionHeading>
        <p>
          I’m Marya. An IT graduate, I started my journy in full-stack
          development in 2021, then became a freelancer in 2023.
        </p>
        <p>
          I’m full of passion for programming and excited to dive deeper into
          the world of programming, face its challenges, and acquire MORE~
          skills. I would like to talk more but without further ado let me
          introduce the developer-me!
        </p>

        <div>
          <SectionSubHeading>Technologies and Tools I use:</SectionSubHeading>
          <CardsList/>
        </div>
      </About>
    </div>
  );
}
