import styled from "styled-components";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";
import { motion } from "framer-motion";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";

const services = [
  { label: "UI/UX Design" },
  { label: "Wireframe Design" },
  { label: "Front-end Development" },
  { label: "Back-end Development" },
];

const OffersList = styled(motion.ul)`
  width: 50%;
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 2rem;
  padding-left: 12rem;
`;

const OffersListItems = styled.li`
  /* making each item the same width in order to make the correctley aligned by setting  justify-content: start*/
  width: 20rem;
  text-align: start;
  font-size: var(--lg-text);
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: start;

  &::before {
    content: "";
    position: relative;
    display: block;
    background-color: var(--neon-purple);
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.5rem;
  }
`;

export default function Offer() {
  return (
    <Section id="what-i-offer" display="flex">
      <AnimatedWrapper>
        <SectionHeading>what I offer?</SectionHeading>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p>
          I can help you design the web page from scratch, or only code your
          existing design. I always aim to deliver results that exceed your
          expectations. Your satisfaction is my priority.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p>
          Also, if you become my customer, Don’t worry, I GOT YOUR BACK with
          full support in case of any errors and will be available when you
          encounter issues after deploying your web application.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p>
          So don’t hesitate to reach out! you’re one step away from your web
          application.
        </p>
      </AnimatedWrapper>

      <OffersList>
        {services.map((service) => (
          <AnimatedWrapper key={service.label}>
            <OffersListItems>{service.label}</OffersListItems>
          </AnimatedWrapper>
        ))}
      </OffersList>
    </Section>
  );
}
