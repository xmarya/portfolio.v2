import styled from "styled-components";
import { LookAtMe } from "../UI/LookAtMe";
import { GradiantText } from "../UI/GradiantText";
import CardsList from "../UI/CardsList";
import { InnerSection, Section } from "../UI/Section";
import { HeroHeading, SectionHeading, SectionSubHeading } from "../UI/Headings";

const Hero = styled.section`
  margin-top: var(--section-mt);
  height: calc(100svh - var(--section-mt));

  p {
    font-size: var(--p-text);
    color: var(--colour-grey-400);
    margin-top: 1.2rem;
  }
`;

const StyledHome = styled.div`
  counter-reset: section-heading 0;
`;

export default function Home() {
  return (
    <StyledHome>
      <Hero>
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
      </Hero>

      <Section id="who-i-am">
        <SectionHeading>who I am?</SectionHeading>
        <p>
          I’m Marya. An IT graduate, I started my journy in full-stack
          development in 2020, then became a freelancer in 2023.
          I’m Experienced in building websites for small and medium-sized businesses.
        </p>
        <p>
          I’m full of passion for what I do and excited to dive deeper into
          the world of programming, face its challenges, and acquire MORE~
          skills. <br/> I would like to talk more but without further ado let me
          introduce the developer-me!
        </p>

        <InnerSection>
          <SectionSubHeading>Technologies and Tools I use:</SectionSubHeading>
          <CardsList/>
        </InnerSection>
      </Section>

      <Section display="flex" id="what-i-offer">
        <SectionHeading>what I offer?</SectionHeading>
        <div>
        <p>
        I can help you design the web page from scratch, 
        or only code your existing design. I always aim to deliver results that exceed your expectations. 
        Your satisfaction is my priority.
        </p>
        <p>
        Also, if you become my customer, Don’t worry, I GOT YOUR BACK with full support 
        in case of any errors and will be available when you encounter issues after deploying your web application.
        </p>
        <p>So don’t hesitate to reach out! you’re one step away from your web application.</p>
        </div>
      </Section>
    </StyledHome>
  );
}
