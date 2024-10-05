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

  /* margin: 60svh 0 95svh; // more space to scroll before the first and after the last card. */
  margin-top: calc(60svh + 10rem);
  margin-bottom: calc(90svh + 10rem);

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
  container-type: inline-size;
  width: 100%;
  min-height: 40rem;
  max-height: 45rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--lg-radius);
  box-shadow: var(--shadow-md);
  padding: 1.5rem;

  position: relative; // I made it relative so I can specify its top property.
  top: -5rem; // this is related to the parallax animation logic of the card, and to not make everything in the page centred position, which is very dull looking
  overflow: hidden;

  @media (max-width: 54em) {
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
  }
`;
const Description = styled.div`
  border: var(--check);
  border-color: aquamarine;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    border: var(--check);
    font-size: clamp(1.6rem, 2.5cqi, 2rem);
    margin-bottom: 0.7rem;
  }

  @media (max-width: 54em) {
    align-items: center;

    p {
      align-self: center;
      text-wrap: balance;
    }
  }
`;

const Video = styled.div`
  border: var(--check);
  border-color: chocolate;
  width: 100%;

  display: flex;
  flex-grow: 0;

  overflow: hidden;

  video {
    border-radius: var(--md-radius);
  }

`;

const Devider = styled.div`
  width: 1px;
  height: 80%;
  background-color: var(--colour-grey-200);
  opacity: 0.6;

  @media (max-width: 54em) {
    display: none;
  }
`;

export default function ProjectDetails({
  details,
  bgColour,
  topPosition,
  scalingProgress,
  scalingRange,
  finalStackingScale,
}) {
  // the scallingRange will start when the card reaches its sticky position
  const { descriptionTitle, description, vidSrc } = details;
  const globalScalingProgress = useTransform(scalingProgress, scalingRange, [
    1,
    finalStackingScale,
  ]);

  return (
    <StickyContainer>
      <DetailsContainer
        style={{
          backgroundColor: `var(--neon-dark-purple-${bgColour})`,
          scale: globalScalingProgress,
          top: `calc(-5rem + (${topPosition} * 3rem))`,
        }}
      >
        <Description>
          <SectionSubHeading>{descriptionTitle}</SectionSubHeading>
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </Description>

        {vidSrc && (
          <>
            <Devider />
            <Video>
              <video loop muted autoPlay playsInline>
                <source src={vidSrc} type="video/mp4" />
                Your browser does not support the video format.
              </video>
            </Video>
          </>
        )}
      </DetailsContainer>
    </StickyContainer>
  );
}
