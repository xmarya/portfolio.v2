import { motion, useAnimate, useInView } from "framer-motion";
import styled from "styled-components";
import Overlay from "./Overlay"; // CHANGE LATER: change its close implementation in order to use it alone without the modal... or maybe no problem with using the modal
import Modal from "./Modal";

const CardInnerContainer = styled.div`
  /*  
  border: var(--check);
  border-color: orange; */
`;

const Card = styled(motion.button)`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2.5rem) saturate(0%);
  -webkit-backdrop-filter: blur(2.5rem) saturate(0%);
  background-color: rgba(176, 123, 255, 0.63);
  border-radius: var(--md-radius);
  box-shadow: 0px 0px 0.5rem var(--neon-purple);
  padding: 3rem;
  flex: 1;
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1),
    flex 0.8s cubic-bezier(0.19, 1, 0.22, 1);

  cursor: pointer;

  h4 {
    font-size: var(--secondary-heading);
    font-weight: 400;

    transition: all 0.2s ease-in-out;
  }

  /* NOT WORKING (leaved for reference): 
  // TRANSLATE: apply the hover styles based on this condition => my data-active="true" AND I don't have any sibling AFTER-ME(~)  AND BEFORE-ME(+) which has data-activ="true"
  &[data-active="true"],
  &:hover:not(:has(+ [data-active="true"])),
  &:hover:not(:has(~ [data-active="true"])){
    flex: 2 auto;

    h4 {
      font-weight: 700;
    }
  }
*/
    

  /* TRANSLATE: in this approache we're going to check the condition FROM THE PARENT VIEW, not from the sibiling to each other like the previous one
                the trick here is to the direct child selector use > along with :has().
                :has([data-active="true"]) => mean: does the PARENT have a a child its data-active="true" ?
                if :not, then do these styles for your children in case on of them is hovered.
                and as you already know, the &[data-active="true"] is to apply the same styles if the element is active
  */
  &[data-active="true"],
  :not(:has([data-active="true"])) > &:hover {
  flex: 2 auto;

  h4 {
    font-weight: 700;
  }
  }

  p {
    font-size: var(--md-text);
  }
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
    background-color: var(--colour-grey-900);
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.5rem;
  }
`;

export default function OfferCard({cardVariants, delay = 1, isInView, onFlip, heading, children }) {
  return (
//    <Overlay>
     <Card
        id="offer-card"
        data-active="false"
        layout
        variants={cardVariants}
        custom={delay}
        initial="initial"
        animate={isInView ? "animate" : ""}
        onClick={onFlip}
        // OLD CODE (leaved for reference): whileHover="hover" // I want the heading hover effect to run when hovering the parent that is why I added here, not in the h4 element itself
        >
      <CardInnerContainer>
        <motion.h4>{heading}</motion.h4>
        {/* <p>
            My main focus is to provide a high-quality design that reflects the
            message of my client's brand/services and ensure the interface is
            user-friendly. Whether you need a design created from scratch or
            want to transform your design into a fully functional web
            application, I've got you covered.
            {children}
            </p> */}
                    {/*
            <div className="flex flex-col">
            <OffersListItems>UI/UX Design</OffersListItems>
            <OffersListItems>Wireframe design</OffersListItems>
            <OffersListItems>Front-end develoment</OffersListItems>
            <OffersListItems>Full Support</OffersListItems>
            </div> */}
      </CardInnerContainer>

    </Card>
//    </Overlay>

  );
}
