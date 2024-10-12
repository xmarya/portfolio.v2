import styled from "styled-components";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";
import ContactForm from "../UI/ContactForm";
import { useRef } from "react";
import { dictionary } from "../data/dictionary";


export default function ContactMe({language}) {
  const {contact} = dictionary;
  const ref = useRef(null);

  return (
    <Section ref={ref} id="contact-me" display="grid">
        <AnimatedWrapper>
            <SectionHeading language={language}>{contact.sectionHeading[language]}</SectionHeading>
        </AnimatedWrapper>

        <ContactForm targetRef={ref} language={language}/>
    </Section>
  );
}
