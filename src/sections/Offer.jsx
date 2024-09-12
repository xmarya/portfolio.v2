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

// const CardInnerContainer = styled.div`
// /*  
//   border: var(--check);
//   border-color: orange; */
// `;

// const OfferCard = styled(motion.div)`
//   max-height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   backdrop-filter: blur(2.5rem) saturate(0%);
//   -webkit-backdrop-filter: blur(2.5rem) saturate(0%);
//   background-color: rgba(176, 123, 255, 0.63);
//   border-radius: var(--md-radius);
//   box-shadow: 0px 0px 0.5rem var(--neon-purple);
//   padding: 3rem;
//   flex: 1;
//   transition: all .8s cubic-bezier(.19,1,.22,1), flex .8s cubic-bezier(.19,1,.22,1);

//   cursor: pointer;

//   h4 {
//     font-size: var(--secondary-heading);
//     font-weight: 400;
//   }  

//   &:hover {
//     flex: 2 auto;
//   }

//   p {
//     font-size: var(--md-text);
//   }

// `;

// const OffersListItems = styled.li`
//   /* making each item the same width in order to make the correctley aligned by setting  justify-content: start*/
//   min-width: 27rem;
//   /* max-width: fit-content; */
//   text-align: start;
//   font-size: var(--md-text);
//   text-transform: capitalize;
//   display: flex;
//   align-items: center;
//   justify-content: start;

//   &::before {
//     content: "";
//     position: relative;
//     display: block;
//     background-color: var(--colour-grey-900);
//     width: 0.8rem;
//     height: 0.8rem;
//     margin-right: 0.5rem;
//   }
// `;

// const OfferCTA = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;
//   margin: 0 auto;

//   p {
//     max-width: fit-content;
//   }
// `;

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
  const [flipedCard, setFlipedCard] = useState();

  const [scope, animate] = useAnimate();// scope is going to be forwarded to the children and manage (animate) them from the parent component here

  function handleFlipping(event) {
    //setting the scope to be the clicked card. 
    // the .closest("#offer-card") to make sure the element to be animated is the card itself in case the user clicked on the h4
    scope.current = event.target.closest("#offer-card");
  }

  return (
    <Section id="what-i-offer" ref={viewRef}>
      <AnimatedWrapper>
        <SectionHeading>what I offer?</SectionHeading>
      </AnimatedWrapper>

      <CardsBox>
        {/* the custom value has 1 because it's to delay the comp 1s so the animated wrapper has time to complete */}
        <OfferCard cardVariants={childVariants} isInView={isInView} onFlip={handleFlipping} heading="Front-End Services"/>
        <OfferCard cardVariants={childVariants} isInView={isInView} delay={1.3} onFlip={handleFlipping} heading="Back-End Services"/>
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
