import { motion, useAnimate, useInView } from "framer-motion";
import styled from "styled-components";
import Overlay from "./Overlay"; // CHANGE LATER: change its close implementation in order to use it alone without the modal... or maybe no problem with using the modal
import Modal from "./Modal";

const CardInnerContainer = styled.div`
  /*  
  border: var(--check);
  border-color: orange; */
`;

const Card = styled(motion.div)`
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
  }

  /* &:hover {
    flex: 2 auto;
  }

  &[data-active="true"] {
    background-color: pink;
  } */
  // TRANSLATE: apply the hover styles based on this condition => my data-active="true" AND I don't have any sibling AFTER-ME(~)  AND BEFORE-ME(+) which has data-activ="true"
  &[data-active="true"],
  &:hover:not(:has(+ [data-active="true"])),
  &:hover:not(:has(~ [data-active="true"])) {
    flex: 2 auto;
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


const headingVariants = {
  hover: {
    fontWeight: 700,

    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

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
        whileHover="hover" // I want the heading hover effect to run when hovering the parent that is why I added here, not in the h4 element itself
        onClick={onFlip}
        >
      <CardInnerContainer>
        <motion.h4 variants={headingVariants}>{heading}</motion.h4>
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
