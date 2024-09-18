import { motion } from "framer-motion";
import styled from "styled-components";



const Card = styled(motion.ul)`
  position: relative;

  flex: 1;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(176, 123, 255, 0.63);
  border-radius: var(--md-radius);

  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1),
    flex 0.8s cubic-bezier(0.19, 1, 0.22, 1);

  cursor: pointer;
  overflow: hidden;

  & h4 {
    font-size: var(--secondary-heading);
    font-weight: 400;
    border: var(--check);
    transition: all 0.2s ease-in-out; // for the hover
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

  & h4 {
    font-weight: 700;
  }
  }

`;

const CardInnerContainer = styled(motion.div)`
  position: absolute;
  background-color: var(--colour-grey-900);
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;

  top: 100%;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

`;

export default function OfferCard({cardVariants, delay, isInView, isActive, setIsActive, heading, children }) {

  return (
     <Card
        id="offer-card"
        layout
        data-active={isActive}
        variants={cardVariants}
        custom={delay}
        initial="initial"
        animate={isInView ? "animate" : ""}
        onClick={setIsActive}
        // OLD CODE (leaved for reference): whileHover="hover" // I want the heading hover effect to run when hovering the parent that is why I added here, not in the h4 element itself
        >
        <motion.h4>{heading}</motion.h4>
      <CardInnerContainer>
        {children}
      </CardInnerContainer>

    </Card>
  );
}
