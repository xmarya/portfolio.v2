import { motion, useAnimate, useInView } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";
import navigateToSection from "../helpers/navigateToSection";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { Button } from "../UI/Button";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";
import OfferCard from "../UI/OfferCard";

const CardsBox = styled.div`
  min-height: 50svh;
  max-height: 50svh;
  display: flex;
  gap: 2.5rem;

  border: var(--check);
  margin-bottom: 6rem;
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

// const headingVariants = {

//   hover: {
//     fontWeight: 700,

//     transition: {
//       duration: 0.2,
//       ease: "easeInOut"
//     }
    
//   }
// }

export default function Offer() {
  const viewRef = useRef(null);
  const isInView = useInView(viewRef, { once: true, amount: 0.2 });
  const [showOverlay, setShowOverlay] = useState(true);

  const [scope, animate] = useAnimate();// scope is going to be forwarded to the children and manage (animate) them from the parent component here

  /* Calculate the values for the center of the viewport */
  // const xCentre = Math.floor(window.innerWidth / 2);
  // const yCentre = Math.floor(window.innerHeight / 2);

  function handleFlipping(event) {
    /* 
    NOT WORKING (leaved for reference):
    // 1- Get the parent of the clicked card, loop throught the children and set their dataset-active = "false":
            // the closest() here to make sure the parentNode will be the parent of all targets, even if the user clicked on the h4 so the parent won't be the target itself
    // const parentNode = event.target.closest("#offer-card").parentNode;
    // parentNode?.children?.map(child => child.dataset.active = "false"); // map doesn't loop over DOM nodes, they're not an array
    */

    // 1- Get all the targets to loop over them and set/reset their dataset-active = "false":
    // NOTE: these initial checks and setup have nothing to do with the animations, that is why the assignment of the target to the scope is in a later step
    const cards = document.querySelectorAll("#offer-card");
    cards.forEach(elem => {
      elem.dataset.active = "false";

      // is the target already active and it has been clicked again? make it false

      // otherewaise, set it to true:
    });

    // 2- Assign the clicked target to animation scope:
    scope.current = event.target.closest("#offer-card");

    // 3- scope.current's dataset.active = "true":
    scope.current.dataset.active = "true";


    // guard clause in case the click event was outside the card
    // if(!scope.current) animate([scope.current, {flex: 1, y:0}, { duration: 0.1 }]);

    // animate([
    //   [scope.current, {flex: 1, y: -50, x: 50, rotateY: "-180deg", zIndex: 100}, { duration: 0.8 }]
    // ]);
  }

  return (
    <Section id="what-i-offer" ref={viewRef}>
      <AnimatedWrapper>
        <SectionHeading>what I offer?</SectionHeading>
      </AnimatedWrapper>

      <CardsBox>
        {/* the custom value has 1 because it's to delay the comp 1s so the animated wrapper has time to complete */}
        <OfferCard cardVariants={childVariants} isInView={isInView} onFlip={handleFlipping} showOverlay={showOverlay} heading="Front-End Services"/>
        <OfferCard cardVariants={childVariants} isInView={isInView} delay={1.3} showOverlay={showOverlay} onFlip={handleFlipping} heading="Back-End Services"/>
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
