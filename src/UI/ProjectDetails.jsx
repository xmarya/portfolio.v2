import { motion } from "framer-motion";
import styled from "styled-components";
import { SectionSubHeading } from "./Headings";
import { useTransform } from "framer-motion";
import useWindowSize from "../helpers/useWindowSize";

const StickyContainer = styled.div`
  width: 100%;
  height: 100svh;

  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  /* margin: 60svh 0 95svh; // more space to scroll before the first and after the last card. */
  margin-top: calc(65svh + 3rem);
  margin-bottom: calc(95svh + 3rem);

  @media (max-width: 54em) {
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
  container-type: inline-size;
  width: 100%;
  min-height:  40rem;
  height:  45rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--lg-radius);
  box-shadow: var(--shadow-md);

  position: relative; // I made it relative so I can specify its top property.
  top: -5rem; // this is related to the parallax animation logic of the card, and to not make everything in the page centred position, which is very dull looking
  overflow: hidden;

  @media (max-width: 54em) {
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
  }

  @media (max-width: 21em) {
    min-height:  30rem;
  max-height:  35rem;
  }
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  p {
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

const VideoContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 0 1rem;
  overflow: hidden;

  @media (max-width: 21em) {
    aspect-ratio: 24 / 14;
  }

  video {
    border-radius: var(--md-radius);
  }

`;

const KeyFeatures = styled.ul`

width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1.5rem;

  margin-bottom: 2rem;

  li {
    font-size: clamp(1.5rem, 2.5cqi, 2rem);

    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
    content: "";
    position: relative;
    display: block;
    background-color: var(--colour-grey-200);
    width: clamp(0.4rem, 0.8rem, 1rem);
    height: clamp(0.4rem, 0.8rem, 1rem);
    margin-right: 0.5rem;
  }
  }

  @media (max-width: 21em) {
    display: none;
  }

`;

export default function ProjectDetails({ details, bgColour, topPosition, scalingProgress, scalingRange, finalStackingScale }) { // the scallingRange will start when the card reaches its sticky position
  const {descriptionTitle, description, keyfeatures, vidSrc} = details;
  const globalScalingProgress = useTransform(scalingProgress, scalingRange, [1, finalStackingScale]);
  const { width} = useWindowSize();

  const mqTablets = 864; // ==> 54em
  const mqMobiles = 336; // ==> 21em


  return (
    width <= mqMobiles && descriptionTitle === "Overview" ? "" :
      <StickyContainer>
        <DetailsContainer style={{backgroundColor: `var(--neon-dark-purple-${bgColour})` ,scale: globalScalingProgress, top: `calc(-5rem + (${topPosition} * 3rem))`}}>
          <Description>
            <SectionSubHeading>{descriptionTitle}</SectionSubHeading>

            {
              width <= mqTablets ?
              <KeyFeatures>
                  {
                    keyfeatures.map((feat, index) =>
                      <li key={index}>{feat}</li>
                    )
                  }
                </KeyFeatures>
              
              :
              
              description.map((desc, index) =>
                <p key={index}>{desc}</p>
              )
            
            }
          </Description>

          {
            vidSrc &&
            <>
              <VideoContainer>
                <video loop muted autoPlay playsInline>
                <source src={vidSrc} type="video/mp4" />
                Your browser does not support the video format.
              </video>
              </VideoContainer>
            </>

          }

        </DetailsContainer>
      </StickyContainer>
  );
}
