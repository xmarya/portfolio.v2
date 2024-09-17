import { motion, useAnimate, useInView } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import navigateToSection from "../helpers/navigateToSection";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { Button } from "../UI/Button";
import { SectionHeading } from "../UI/Headings";
import OfferCard from "../UI/OfferCard";
import { Section } from "../UI/Section";

const CardsBox = styled.div`
  min-height: 50svh;
  max-height: 50svh;
  display: flex;
  gap: 2.5rem;
  margin-bottom: 6rem;

`;

const OffersListItems = styled(motion.li)`
max-width: 30rem;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
width: fit-content;
height: 10rem;
border-radius: var(--sm-radius);
border: var(--check);
font-size: var(--p-text);
padding: 0 1.5rem;
`;

const OfferCTA = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
margin: 0 auto;

p {
  max-width: fit-content;
}
`;

const childVariants = {
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
  const viewRef = useRef(null);
  const isInView = useInView(viewRef, { once: true, amount: 0.2 });

  const [scope, animate] = useAnimate();// scope is going to be forwarded to the children and manage (animate) them from the parent component here

  function handleAnimation(event) {
    /* 
    NOT WORKING (leaved for reference):
    // 1- Get the parent of the clicked card, loop throught the children and set their dataset-active = "false":
            // the closest() here to make sure the parentNode will be the parent of all targets, even if the user clicked on the h4 so the parent won't be the target itself
    // const parentNode = event.target.closest("#offer-card").parentNode;
    // parentNode?.children?.map(child => child.dataset.active = "false"); // map doesn't loop over DOM nodes, they're not an array
    */

    // 1- Get all the targets to loop over them and set/reset their dataset-active = "false":
    const cards = document.querySelectorAll("#offer-card");
    cards.forEach(elem => {
      // 2- Reset everything of all targets before starting the animation
      elem.dataset.active = "false";
      scope.current = elem;   
      animate([
        ["div", { top: "100%", opacity: 0 }, { duration: 0.2,}],
        ["h4", { y: 0 }, { duration: 0.3 }],
      ]);
    });

    // 3- Assign the clicked target to animation scope:
    scope.current = event.target.closest("#offer-card");

    // 4- scope.current's dataset.active = "true":
    scope.current.dataset.active = "true";
    animate([
      // [scope.current, { boxShadow: "none" }, { duration: 0.1 }],
      ["h4", { y: -200 }, { duration: 0.5 }],
      ["div", { top: 0 , opacity: 1}, { duration: 0.4, at: "-0.1"}],
    ]);
  }

  function resetAnimation(event) {
    event.stopPropagation(); // to not get the event propagated to the handleAnimation which makes the resetAnimation dosen't affect the target
    scope.current.dataset.active = "false";
      animate([
        // [scope.current, { boxShadow: "0px 0px 0.5rem var(--neon-purple);"}, { duration: 0.1 }],
        ["h4", { y: 0 }, { duration: 0.3 }],
        ["div", { top: "100%", opacity: 0  }, { duration: 0.2,}],
      ]);
      scope.current = null;   
  }

  return (
    <Section id="what-i-offer" ref={viewRef}>
      <AnimatedWrapper>
        <SectionHeading>what I offer?</SectionHeading>
      </AnimatedWrapper>

      <CardsBox>
        {/* the custom value has 1 because it's to delay the comp 1s so the animated wrapper has time to complete */}
        <OfferCard cardVariants={childVariants} isInView={isInView} onAnimate={handleAnimation} onReset={resetAnimation} heading="Front-End Services">
          <OffersListItems>UI/UX Design</OffersListItems>
          <OffersListItems>Wireframe design</OffersListItems>
          <OffersListItems>Front-end develoment</OffersListItems>
        </OfferCard>
        
        <OfferCard cardVariants={childVariants} isInView={isInView} delay={1.3} onAnimate={handleAnimation} onReset={resetAnimation} heading="Back-End Services">
          <OffersListItems>Building API</OffersListItems>
          <OffersListItems>Designing and Creating NoSQL Database</OffersListItems>
        </OfferCard>
{/*         
        <OfferCard
        layout
          variants={childVariants}
          custom={1.3}
          initial="initial"
          animate={isInView ? "animate" : ""}
          whileHover="hover"
          >
          <CardInnerContainer>

          <motion.h4 variants={headingVariants}>Back-End Services</motion.h4> */}
           {/* <motion.p variants={paragraphVariants}>
            When working on a Back-end project, I prioritise performance,
            security and adaptability. I always aim to deliver results that
            exceed your expectations. Your satisfaction with my work is the most
            I would like.
          </motion.p> */}
          {/*
          <div className="flex flex-col">
            <OffersListItems>Building API</OffersListItems>
            <OffersListItems>
              Designing and Creating NoSQL Database
            </OffersListItems>
            <OffersListItems>Full Support</OffersListItems>
          </div> */}

        {/* </CardInnerContainer>
        </OfferCard> */}
      </CardsBox>

        <OfferCTA
          variants={childVariants}
          custom={2.2}
          initial="initial"
          animate={isInView ? "animate" : ""}
        >
          <p>
            So don’t hesitate to reach out&mdash;you’re one step away from your
            web application.
          </p>
          <Button onClick={() => navigateToSection("contact-me")}>Contact me</Button>
        </OfferCTA>

    </Section>
  );
}
