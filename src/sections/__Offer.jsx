import { motion } from "framer-motion";
import styled from "styled-components";
import { offers } from "../data/offersData";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";


const OffersList = styled(motion.ul)`
  width: 50%;
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 2rem;
  padding-left: 10rem;
`;

const OffersListItems = styled.li`
  /* making each item the same width in order to make the correctley aligned by setting  justify-content: start*/
  min-width: 20rem;
  max-width: fit-content;
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
          For Front-end services my main focus is to provide a high-quality design that reflects
          the message of my client's brand/services and ensure the interface is user-friendly.
          Whether you need a design created from scratch or want to transform your design into
          a fully functional web application, I've got you covered. 
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p>
        When working on a Back-end project, I prioritise performance, security and adaptability.
        I always aim to deliver results that exceed your expectations.
        Your satisfaction with my work is the most I would like.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p>
          Also, if you become my customer, Rest assured, I'll provide full support whenever you need assistance..
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p>
          So don’t hesitate to reach out&mdash;you’re one step away from your web
          application.
        </p>
      </AnimatedWrapper>

      <OffersList>
        {offers.map((offer) => (
          <AnimatedWrapper key={offer.title}>
            <OffersListItems>{offer.title}</OffersListItems>
          </AnimatedWrapper>
        ))}
      </OffersList>
    </Section>
  );
}
