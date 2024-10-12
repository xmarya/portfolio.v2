import { dictionary } from "../data/dictionary";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";

export default function About({language}) {
  const {about} = dictionary;
  return (
    <Section id="who-i-am">
      <AnimatedWrapper>
        <SectionHeading language={language}>{about.sectionHeading[language]}</SectionHeading>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p>
         {about.paragraph[language][0]}
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p>
        {about.paragraph[language][1]}
        </p>
        <p>
        {about.paragraph[language][2]}
        </p>
      </AnimatedWrapper>
    </Section>
  );
}
