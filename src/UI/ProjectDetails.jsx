import { motion } from "framer-motion";
import styled from "styled-components";

export const DetailsContainer = styled.div`
  border: var(--check);
  border-color: chartreuse;
  width: 100%;
  height: 600svh;

  --col-min-width: 40rem;
  --row-min-height: 150svh;
  display: grid;
  grid-template-columns: minmax(min(var(--col-min-width), 100%), 1fr);
  grid-auto-rows: minmax(var(--row-min-height), 1fr);
  align-items: center;

`;

export const StickyBox = styled.div`
    /* background-color: orange; */

    height: 150svh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: start;

  & > *  {
    // in a sticky element, the top value is what decides WHERE to start the stickness.
    position: sticky;
    height: fit-content;
    top: calc(150svh * 0.2); // less than this value the box will stick to a position that is hidden behind the ProjectHeader.
    /* NOT WORKING (leaved for reference): 
    making a sticky positioned element a 100% height of its parent make the sticky has no effect 

    */
}
`;

export const Description = styled(motion.div)`
 border: var(--check);
 border-color: aquamarine;
 width: 100%;

`;

export const Video = styled(motion.div)`
 border: var(--check);
  border-color: chocolate;
  width: 100%;

`;