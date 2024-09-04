import styled from "styled-components";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { SectionHeading, SectionSubHeading } from "../UI/Headings";
import { Section } from "../UI/Section";
import { motion } from "framer-motion";
import { Button } from "../UI/Button";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    2,
    1fr
  ); // CHANGE LATER: make it with clamp() when start writong the media-queries
  grid-template-rows: repeat((2, fit-content));
  column-gap: 10rem;
  row-gap: 8rem;
  padding: 5rem 10rem;
  margin: 1.5rem 0;
`;

const TopCorner = styled(motion.div)`
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: -2px;
  /* background-image: linear-gradient(130deg,var(--neon-purple) 15%,rgba(255, 255, 255, 0) 31%); */
  //background-size: width height
  /* background-size: 100% 0.2rem; */
  /* border-radius: 1.2rem; */
  border-radius: var(--md-radius);
  z-index: -1;
`;

const BottomCorner = styled(motion.div)`
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: -2px;
  /* background-image: linear-gradient(312.25deg,var(--neon-purple) 15%,rgba(255, 255, 255, 0) 31%); */
  //background-size: width height
  /* background-size: 100% 0.2rem; */
  /* border-radius: 1.2rem; */
  border-radius: var(--md-radius);
  z-index: -1;
`;

const OfferList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 3rem;
  background-color: var(--colour-grey-900);

  position: relative;
  box-shadow: var(--corners-shadow-sm);
  border-top-right-radius: var(--md-radius);
  border-bottom-left-radius: var(--md-radius);


  /* &:hover {
    box-shadow: var(--hover-shadow);
  } */
`;

const OffersListItems = styled.li`
  /* making each item the same width in order to make the correctley aligned by setting  justify-content: start*/
  min-width: 27rem;
  /* max-width: fit-content; */
  text-align: start;
  font-size: var(--md-text);
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

const OfferDetails = styled.p`
  font-size: var(--md-text);
`;

const OfferCTA = styled(motion.div)`
  grid-column: 1 /-1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin: 0 auto;

  p {
    max-width: fit-content;
  }
`;

const listVariants = {
  initial: {
    y: 75,
    opacity: 0,
  },
  animate: (customDelay) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: customDelay * 1,
    },
  }),
};


export default function Offer() {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, { once: true, amount: 0.2 });

  return (
    <Section id="what-i-offer" ref={targetRef}>
      <AnimatedWrapper>
        <SectionHeading>what I offer?</SectionHeading>
      </AnimatedWrapper>
      <Grid>
        {/* the custom value has 1 because it's to delay the comp 1s so the animated wrapper has time to complete */}
        <OfferList
          variants={listVariants}
          custom={1}
          initial="initial"
          animate={isInView ? "animate" : ""}
        >

          <SectionSubHeading>Front-End Services</SectionSubHeading>
          <OfferDetails>
            My main focus is to provide a high-quality design that reflects the
            message of my client's brand/services and ensure the interface is
            user-friendly. Whether you need a design created from scratch or
            want to transform your design into a fully functional web
            application, I've got you covered.
          </OfferDetails>
          <div className="flex flex-col">
            <OffersListItems>UI/UX Design</OffersListItems>
            <OffersListItems>Wireframe design</OffersListItems>
            <OffersListItems>Front-end develoment</OffersListItems>
            <OffersListItems>Full Support</OffersListItems>
          </div>

        </OfferList>

        <OfferList
          variants={listVariants}
          custom={1.3}
          initial="initial"
          animate={isInView ? "animate" : ""}
        >

          <SectionSubHeading>Back-End Services</SectionSubHeading>
          <OfferDetails>
            When working on a Back-end project, I prioritise performance,
            security and adaptability. I always aim to deliver results that
            exceed your expectations. Your satisfaction with my work is the most
            I would like.
          </OfferDetails>
          <div className="flex flex-col">
            <OffersListItems>Building API</OffersListItems>
            <OffersListItems>
              Designing and Creating NoSQL Database
            </OffersListItems>
            <OffersListItems>Full Support</OffersListItems>
          </div>

        </OfferList>

        <OfferCTA
          variants={listVariants}
          custom={2.2}
          initial="initial"
          animate={isInView ? "animate" : ""}
        >
          <p>
            So don’t hesitate to reach out&mdash;you’re one step away from your
            web application.
          </p>
          <Button>Contact me</Button>
        </OfferCTA>
      </Grid>
    </Section>
  );
}
