import { motion } from "framer-motion";
import styled from "styled-components";
import { SectionSubHeading } from "./Headings";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { useTransform } from "framer-motion";

const StickyContainer = styled.div`
  border: var(--check);
  border-color: chartreuse;
  width: 100%;
  height: 100svh;

  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 10rem;
  margin: 70svh 0; // more space to scroll before the first and after the last card.
`;

/* OLD CODE (leaved for reference): 
const StickyBox = styled.div`
width: 100%;
position: relative;
display: flex;
align-items: start;

& > *  {
  // in a sticky element, the top value is what decides WHERE to start the stickness.
  position: sticky;
  height: fit-content;
  top: calc(150svh * 0.2); // less than this value the box will stick to a position that is hidden behind the ProjectHeader.
  // NOT WORKING (leaved for reference): 
  making a sticky positioned element a 100% height of its parent make the sticky has no effect 
  
 
 @media (max-width: 55em) {
   position: static;
   
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   
   padding: 0 3rem;
   
  }
  
}

@media (max-width: 55em) {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}
`;
*/

const DetailsContainer = styled(motion.div)`
  background-color: var(--colour-grey-800);
  width: 100%;
  height: 40rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--lg-radius);
  box-shadow: var(--shadow-md);

  position: relative; // I made it relative so I can specify its top property.
  top: -5rem; // this is related to the parallax animation logic of the card, and to not make everything in the page centred position, which is very dull looking
`;
const Description = styled(motion.div)`
  border: var(--check);
  border-color: aquamarine;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Video = styled(motion.div)`
  border: var(--check);
  border-color: chocolate;
  width: 100%;

  padding: 0 2rem;
  overflow: hidden;

  video {
    border-radius: var(--md-radius);
    transition: transform 0.5s ease;
  }

  &:hover video {
    transform: scale(1.05);
  }
`;

export default function ProjectDetails({ details, topPosition, scalingProgress, scalingRange, finalStackingScale }) { // the scallingRange will start when the card reaches its sticky position
  const {descriptionTitle, description, vidSrc} = details;

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"],
  });
  // const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const globalScalingProgress = useTransform(scalingProgress, scalingRange, [1, finalStackingScale]);

  return (
      <StickyContainer ref={targetRef}>
        <DetailsContainer style={{scale: globalScalingProgress, top: `calc(-5rem + (${topPosition} * 2.5rem))`}}>
          <Description>
            <SectionSubHeading>{descriptionTitle}</SectionSubHeading>
            {description.map((desc, index) =>
            <p key={index}>{desc}</p>
            )}
          </Description>
          <Video>{vidSrc}</Video>
        </DetailsContainer>
      </StickyContainer>
  );
}
