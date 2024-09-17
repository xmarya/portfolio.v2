import { motion, useAnimate, useInView } from "framer-motion";
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";



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
  box-shadow: 0px 0px 0.5rem var(--neon-purple);
  padding: 3rem;
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1),
    flex 0.8s cubic-bezier(0.19, 1, 0.22, 1);

  cursor: pointer;
  overflow: hidden;

  & h4 {
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
  /* padding: 0 2rem; */

`;

const Button = styled.button`
    position: absolute;
    top: 1.2rem;
    left: 1.9rem;

    &:hover {
        background-color: var(--neon-grey-200);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--neon-light-purple);
        stroke-width: 0.1rem;
    }

`;

export default function OfferCard({cardVariants, delay = 1, isInView, onAnimate, heading, onReset, children }) {

  return (
   <>
     <Card
        id="offer-card"
        data-active="false"
        layout
        variants={cardVariants}
        custom={delay}
        initial="initial"
        animate={isInView ? "animate" : ""}
        onClick={onAnimate}
        // OLD CODE (leaved for reference): whileHover="hover" // I want the heading hover effect to run when hovering the parent that is why I added here, not in the h4 element itself
        >
        <motion.h4>{heading}</motion.h4>
      <CardInnerContainer>
        {children}

        <Button onClick={onReset}>
            <HiXMark/>
        </Button>
      </CardInnerContainer>

    </Card>
    </>

  );
}
