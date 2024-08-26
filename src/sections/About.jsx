import AnimatedWrapper from "../UI/AnimatedWrapper";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";

export default function About() {
  return (
    <Section id="who-i-am">
      <AnimatedWrapper>
        <SectionHeading>who I am?</SectionHeading>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p>
          I’m Marya. An IT graduate, I started my journy in full-stack
          development in 2020, then became a freelancer in 2023. I’m Experienced
          in building websites for small and medium-sized businesses.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p>
          I’m full of passion for what I do and excited to dive deeper into the
          world of programming, face its challenges, and acquire MORE~ skills.{" "}
          <br /> I would like to talk more but without further ado let me
          introduce what the developer-me can offer to you!
        </p>
      </AnimatedWrapper>
    </Section>
  );
}
