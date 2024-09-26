import { motion } from "framer-motion";
import styled from "styled-components";
import { SectionSubHeading } from "../UI/Headings";
import { Section } from "../UI/Section";
import { tools } from "../data/tools";
import useMeasure from "react-use-measure";
import { useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { animate } from "framer-motion";

const Scroller = styled(motion.div)`
  border: var(--check);
  border-color: chartreuse;
  max-width: clamp(25rem, 85rem, 100%);

  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  overflow: hidden;
`;

const ScrollInner = styled(motion.ul)`
  width: max-content;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10rem;

  padding-block: 1rem;
`;

export default function Tools() {
  const [measureRef, {width}] = useMeasure();
  const xTranslation = useMotionValue(0);
  
  useEffect(() => {
    let finalPosition = -width / 2 - 50 ; // the position where we're goning o reset the animation to the first elem of th array, divide by 2 because there is a copy of the tools array and the minus 50 because of the gap: 10rem. 10rem is 100px and we'll take its half, I really don't know why it works like this.
    animate(xTranslation, [0, finalPosition], {duration: 20, ease:"linear", repeat: Infinity, repeatType: "loop", repeatDelay: 0 });
  }, [xTranslation, width]);
  
  return (
    <Section display="flex">
        <SectionSubHeading>technologies and tools i use:</SectionSubHeading>

      <Scroller>
        <ScrollInner ref={measureRef} style={{x: xTranslation}}>
          {[...tools, ...tools].map((tool, index) => (
            <li key={index}>{tool.component}</li>
          ))}
        </ScrollInner>
      </Scroller>
    </Section>
  );
}
