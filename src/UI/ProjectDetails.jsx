import { motion } from "framer-motion";
import styled from "styled-components";
import { SectionSubHeading } from "./Headings";
import { useTransform } from "framer-motion";

const StickyContainer = styled.div`
  width: 100%;
  height: 100svh;

  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 10rem;
  margin: 60svh 0 90svh; // more space to scroll before the first and after the last card.

  @media (max-width: 38em) {
    padding: 0;
  }
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
  width: 100%;
  height: 40rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--lg-radius);
  box-shadow: var(--shadow-md);

  position: relative; // I made it relative so I can specify its top property.
  top: -5rem; // this is related to the parallax animation logic of the card, and to not make everything in the page centred position, which is very dull looking

  @media (max-width: 53em) {
    flex-direction: column;
    justify-content: space-evenly;
  }

`;
const Description = styled(motion.div)`
  border: var(--check);
  border-color: aquamarine;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  @media (max-width: 53em) {
    align-items: center;
  }

`;

const Video = styled(motion.div)`
  border: var(--check);
  border-color: chocolate;
  width: 100%;

  display: flex;
  justify-content: center;

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

const Devider = styled.div`
  width: 1px;
  height: 80%;
  background-color: var(--colour-grey-200);
  opacity: 0.6;

  @media (max-width: 53em) {
    display: none;
  }
`;

export default function ProjectDetails({ details, bgColour, topPosition, scalingProgress, scalingRange, finalStackingScale }) { // the scallingRange will start when the card reaches its sticky position
  const {descriptionTitle, description, vidSrc} = details;
  const globalScalingProgress = useTransform(scalingProgress, scalingRange, [1, finalStackingScale]);

  return (
      <StickyContainer>
        <DetailsContainer style={{backgroundColor: `var(--neon-dark-purple-${bgColour})` ,scale: globalScalingProgress, top: `calc(-5rem + (${topPosition} * 3rem))`}}>
          <Description>
            <SectionSubHeading>{descriptionTitle}</SectionSubHeading>
            {description.map((desc, index) =>
            <p key={index}>{desc}</p>
            )}
          </Description>

          <Devider/>
          
          <Video>{vidSrc}</Video>
        </DetailsContainer>
      </StickyContainer>
  );
}
