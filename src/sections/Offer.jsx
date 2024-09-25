import { motion, useAnimate, useInView, stagger} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import navigateToSection from "../helpers/navigateToSection";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { Section } from "../UI/Section";
import OfferCard from "../UI/OfferCard";
import { Button } from "../UI/Button";
import { SectionHeading } from "../UI/Headings";
import { offers } from "../data/offersData";

const CardsBox = styled.div`
  min-height: 50svh;
  max-height: 50svh;
  display: flex;
  gap: 2.5rem;
  margin-bottom: 6rem;
  box-shadow: var(--colour-grey-50);

  @media (max-width: 50em) {
    min-height: 70svh;
    max-height: 70svh;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 4rem;
  }

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

background-color: rgba(176, 123, 255, 0.63);
border-radius: var(--sm-radius);
padding: 0 1.5rem;

@media (max-width: 40em) {
  font-size: var(--lg-text);
}

@media (max-width: 32.5em) {
  max-width: 15rem;
  font-size: var(--md-text);
}

@media (max-width: 28em) {
  max-width: 20rem;
  height: 7rem;
}

`;

const OfferCTA = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
margin: 0 auto;

p {
  max-width: fit-content;
  text-align: center;
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
      delay: customDelay,
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

    if(activeTarget === -1 && !scope.current) return; // to avoid any error at the initial rendering. 
    // the && !scope.current condition is to allow the proceed and apply the logic of deactivating on
    // the double-click event which is the case when the activeTarget = -1 and there is an active scope.

    handleAnimation();

  }, [activeTarget]);

  
   async function handleAnimation() {
    /* 
    NOT WORKING (leaved for reference):
    // 1- Get the parent of the clicked card, loop throught the children and set their dataset-active = "false":
            // the closest() here to make sure the parentNode will be the parent of all targets, even if the user clicked on the h4 so the parent won't be the target itself
    // const parentNode = event.target.closest("#offer-card").parentNode;
    // parentNode?.children?.map(child => child.dataset.active = "false"); // map doesn't loop over DOM nodes, they're not an array
    */

    // 1- Get all the targets to loop over them and set/reset their animation and dataset-active = "false":
    const cards = document.querySelectorAll("#offer-card");
    /* OLD CODE (leaved for reference): 
        // toInitial(cards);
    */

    // 3- Assign the clicked target to animation scope:

    /* NOT WORKING (leaved for reference): 
      scope.current = cards?.[activeTarget];

      - setting the scope like this without checking the activeTarget before is going to cause an error in case
        of the double-click event; because it assigning a none existing card to the scope => scope.current = cards[-1];
        and the erro occures here : scope.current.dataset.active = "false";
        it trying to set the dataset value of an element that doesn't exit
    */
   
        if(activeTarget > -1) {
          if(scope.current) await closeAnimation();

          // set the new target to the animation scope:
          scope.current = cards?.[activeTarget];
          startAnimation();
        }

        else {
          closeAnimation();
        }
  }

  async function closeAnimation() {
    await animate([
      ["li", {scale: 0.9, opacity: 0}, {delay: stagger(0.3, {from: "last"})}],
      ["div", { top: "100%", opacity: 0}, { duration: 0.4}],
      ["h4", { y: 0 }, { duration: 0.5 }],
    ]);

    scope.current.dataset.active = "false";
    scope.current = null;

  }
  
  function startAnimation() {
    // 5- Setting scope.current's dataset.active = "true" and start animating it:
    scope.current.dataset.active = "true"; // giv ethe li of the previous target to do its animation... should I use AnimatePresence and exit ???
    animate([
      ["h4", { y: -200 }, { duration: 0.5 }],
      ["div", { top: 0 , opacity: 1}, { duration: 0.4, at: "-0.1"}],
      ["li", {scale: 1, opacity: 1}, {delay: stagger(0.3, {from: "first"})}],
    ]);
 }

 /* OLD CODE (leaved for reference): 
 this function was causing problems because in the previous logic implementation it must run between the start and the close
 function toInitial(targets) {
  console.log("initial");
  targets.forEach(elem => {
    // 2- Reset everything of all targets before starting the animation
    elem.dataset.active = "false";
    scope.current = elem;
    animate([
      ["li", {scale: 0.9, opacity: 0}, {delay: stagger(0.3, {from: "last"})}],
      ["div", { top: "100%", opacity: 0 }, { duration: 0.4,}],
      ["h4", { y: 0 }, { duration: 0.3 }],
    ]);
  });
}

*/
  
return (
    <Section id="what-i-offer" ref={viewRef}>
      <AnimatedWrapper>
        <SectionHeading>what i offer?</SectionHeading>
      </AnimatedWrapper>

      <CardsBox>
        {
          offers.map((offer, index) =>
            <OfferCard key={index} cardVariants={childVariants} customDelay={index === 0 ? 1 : 1.3} isInView={isInView} setIsActive={() => setActiveTarget((currentTarget) => currentTarget === index ? -1 : index)} onAnimate={handleAnimation} heading={`${offer.type} Services`}>
              {
              offer.services.map((serv, index) =>
                <OffersListItems key={index}>{serv.title}</OffersListItems>
              )}
            </OfferCard>
          )
        }
      </CardsBox>

        <OfferCTA
          variants={childVariants}
          custom={1.6}
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
