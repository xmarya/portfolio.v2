import { motion, useAnimate, useInView } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";
import navigateToSection from "../helpers/navigateToSection";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { Section } from "../UI/Section";
import OfferCard from "../UI/OfferCard";
import { Button } from "../UI/Button";
import { SectionHeading } from "../UI/Headings";
import { stagger } from "framer-motion";
import { offers } from "../data/offersData";
import { useEffect } from "react";

const CardsBox = styled.div`
  min-height: 50svh;
  max-height: 50svh;
  display: flex;
  gap: 2.5rem;
  margin-bottom: 6rem;

`;

const OffersListItems = styled(motion.li)`
width: fit-content;
max-width: 30rem;
height: 10rem;

font-size: var(--p-text);
text-align: center;
font-weight: 500;

display: flex;
align-items: center;
justify-content: center;

/* background-color: rgba(176, 123, 255, 0.63); */
/* background-color: var(--colour-grey-900); */
/* box-shadow: 0px 0px 0.3rem var(--neon-purple); */
border-radius: var(--sm-radius);
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
  const [activeTarget, setActiveTarget] = useState(-1); // means nothing is active

  const [scope, animate] = useAnimate();// scope is going to be forwarded to the children and manage (animate) them from the parent component here


  useEffect(() => {
    // I called the function using useEffect to ensure that it doesn't animate on a stale state
    handleAnimation();

  }, [activeTarget]);

  
  function handleAnimation() {
    /* 
    NOT WORKING (leaved for reference):
    // 1- Get the parent of the clicked card, loop throught the children and set their dataset-active = "false":
            // the closest() here to make sure the parentNode will be the parent of all targets, even if the user clicked on the h4 so the parent won't be the target itself
    // const parentNode = event.target.closest("#offer-card").parentNode;
    // parentNode?.children?.map(child => child.dataset.active = "false"); // map doesn't loop over DOM nodes, they're not an array
    */

    if(activeTarget === -1 && !scope.current) return; // to avoid any error at the initial rendering. 
    // the && !scope.current condition is to allow the proceed and apply the logic of deactivating on
    // the double-click event which is the case when the activeTarget = -1 and there is an active scope.

    // 1- Get all the targets to loop over them and set/reset their animation and dataset-active = "false":
    const cards = document.querySelectorAll("#offer-card");
    toInitial(cards);


    // 3- Assign the clicked target to animation scope:
    scope.current = cards?.[activeTarget];
    // scope.current = event.target.closest("#offer-card");


    // 4- Now, lets see what kind of animations should happen, deactivate the current active target? or activate a new target?
    activeTarget > -1 ? startAnimation() : toInitial(cards);
  }
  
  function startAnimation() {
    // 5- Setting scope.current's dataset.active = "true" and start animating it:
    scope.current.dataset.active = "true";
    animate([
      ["h4", { y: -200 }, { duration: 0.5 }],
      ["div", { top: 0 , opacity: 1}, { duration: 0.4, at: "-0.1"}],
      // ["div li", { y: 0 }, {type:"spring", stiffness: 99,delay: stagger(0.3), at: "+0.2"}],
    ]);
 }

  function toInitial(targets) {
    targets.forEach(elem => {
      // 2- Reset everything of all targets before starting the animation
      elem.dataset.active = "false";
      scope.current = elem;   
      animate([
        ["div", { top: "100%", opacity: 0 }, { duration: 0.4,}],
        ["h4", { y: 0 }, { duration: 0.3 }],
      ]);
    });
  }

  return (
    <Section id="what-i-offer" ref={viewRef}>
      <AnimatedWrapper>
        <SectionHeading>what I offer?</SectionHeading>
      </AnimatedWrapper>

      <CardsBox>
        {
          offers.map((offer, index) =>
            <OfferCard key={index} cardVariants={childVariants} isInView={isInView} delay={index * 0.9} isActive={activeTarget === index} setIsActive={() => setActiveTarget((currentTarget) => currentTarget === index ? -1 : index)} onAnimate={handleAnimation} heading={`${offer.type} Services`}>
              {
              offer.services.map((serv, index) =>
                <OffersListItems key={index}>{serv.title}</OffersListItems>
              )}
            </OfferCard>
          )
        }



        {/* <OfferCard cardVariants={childVariants} isInView={isInView} isOpen={activeTarget === } setIsOpen={() => setActiveTarget} onAnimate={handleAnimation} heading="Front-End Services">
          <OffersListItems>UI/UX Design</OffersListItems>
          <OffersListItems>Wireframe design</OffersListItems>
          <OffersListItems>Front-end develoment</OffersListItems>
        </OfferCard>
        
        <OfferCard cardVariants={childVariants} isInView={isInView} delay={1.3} isOpen={activeTarget === } setIsOpen={() => setActiveTarget} onAnimate={handleAnimation} heading="Back-End Services">
          <OffersListItems>Building API</OffersListItems>
          <OffersListItems>Designing and Creating NoSQL Database</OffersListItems>
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
