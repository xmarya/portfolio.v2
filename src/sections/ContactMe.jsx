import styled from "styled-components";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";
import ContactForm from "../UI/ContactForm";
import { useRef } from "react";

const WorkState = styled.div`
  position: relative;
  font-size: var(--p-text);

  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: block;
    position: relative;
    background-color: ${(props) =>
      props.workState === "busy" ? "var(--neon-red)" : "var(--neon-green)"};
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 100%;
    margin-top: 0.2rem;
    margin-right: 0.4rem;
  }
`;

export default function ContactMe() {
  const ref = useRef(null);

  return (
    <Section ref={ref} id="contact-me" display="grid">
        <AnimatedWrapper>
            <SectionHeading>contact me</SectionHeading>
        </AnimatedWrapper>

      <ContactForm targetRef={ref} />
    </Section>
  );
}
