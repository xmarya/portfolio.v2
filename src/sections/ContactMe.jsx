import styled from "styled-components";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";
import ContactForm from "../UI/ContactForm";
import { useRef } from "react";


export default function ContactMe({isArabic}) {
  const ref = useRef(null);

  return (
    <Section ref={ref} id="contact-me" display="grid">
        <AnimatedWrapper>
            <SectionHeading isArabic={isArabic}>contact me</SectionHeading>
        </AnimatedWrapper>

        <ContactForm targetRef={ref} />
    </Section>
  );
}
