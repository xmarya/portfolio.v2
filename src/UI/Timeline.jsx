import { motion } from "framer-motion";
import { createContext } from "react";
import styled, { css } from "styled-components";

const TimelineConext = createContext();

export default function Timeline({ children }) {
  return (
    <TimelineConext.Provider value={{}}>
      <TimelineContainer>{children}</TimelineContainer>
    </TimelineConext.Provider>
  );
}

const TimelineContainer = styled.ul`
  height: fit-content;
  padding: 3rem 4rem;
`;
const Item = styled(motion.li)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0.5rem 1fr;
  gap: 1.5rem;
  row-gap: 4rem;
  overflow: visible;
`;

const MiddleLine = styled(motion.div)`
  height: auto;
  position: relative;
  background-color: var(--neon-purple);
  box-shadow: 0px 0px 1.5rem var(--neon-purple);
`;

const Content = styled(motion.div)`
  /* font-size: var(--secondary-heading); */
  /* font-size: var(--p-text); */
  font-size: var(--md-text);
  font-weight: 500;
  height: 15rem; // CHANGE LATER: use calmp or min/max
  justify-self: ${(props) => props.direction};
  margin: 0 1.2rem 2rem;

  ${(props) => {
    switch (props.background) {
      case "glass":
        return css`
          height: fit-content;
          width: fit-content;
          background-color: rgba(176, 123, 255, 0.63);
          border-radius: var(--md-radius);
          box-shadow: 0px 0px 0.5rem var(--neon-purple);
          padding: 0.6rem 1.2rem;
        `;

      default:
        return css`
          background: none;
          border: none;
          box-shadow: none;
          padding-top: 2rem;
        `;
    }
  }}
`;

const Activity = styled.div`
  text-transform: uppercase;
  padding: 0 2rem;
`;

const Note = styled.div`
  font-size: var(--md-text);
  font-style: italic;
  padding: 0 2rem;
  margin-top: 0.6rem;
`;

const Time = styled.div`
    font-size: 2.4rem;

  font-weight: 600;
  margin-top: -3rem;
`;

// opt for Icon or Circle

const Circle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--neon-purple);
  box-shadow: 0px 0px 10px var(--neon-purple);
  border-radius: 100%;

  margin-top: ${(props) =>
    props.lastOne
      ? "initial"
      : "-0.2rem"}; // NOTE: if it doesn't work change it to "unset" */
  /* bottom: ${(props) => props.lastOne && 0}; */
`;

const Icon = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 3rem;
  height: 3rem;
  background-color: var(--neon-purple);
  border-radius: 100%;
  box-shadow: 0px 0px 10px var(--neon-purple);

  display: flex;
  align-items: center;
  justify-content: center;
`;

Timeline.Item = Item;
Timeline.MiddleLine = MiddleLine;
Timeline.Content = Content;
Timeline.Activity = Activity;
Timeline.Note = Note;
Timeline.Time = Time;
Timeline.Circle = Circle;
Timeline.Icon = Icon;
