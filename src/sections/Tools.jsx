import { motion } from "framer-motion";
import styled from "styled-components";
import { SectionSubHeading } from "../UI/Headings";
import { Section } from "../UI/Section";
import { toolsSvg } from "../data/tools";
import useMeasure from "react-use-measure";
import { useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { animate } from "framer-motion";
import { dictionary } from "../data/dictionary";

const Scroller = styled(motion.div)`
direction: ltr !important; // to not be affected by the direction in the arabic interface
  max-width: clamp(25rem, 85rem, 100%);

  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  overflow: hidden;
`;

const ScrollInner = styled(motion.ul)`
  width: max-content;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 6rem;

  padding-block: 1rem;
`;

export default function Tools({language}) {
  const {tools} = dictionary;
  const [measureRef, {width}] = useMeasure();
  const xTranslation = useMotionValue(0);
  
  useEffect(() => {
    let finalPosition = -width / 2 - 30 ; // the position where we're goning o reset the animation to the first elem of th array, divide by 2 because there is a copy of the tools array and the minus 50 because of the gap: 6rem. 6rem is 60px and we'll take its half, I really don't know why it works like this.
    animate(xTranslation, [0, finalPosition], {duration: 25, ease:"linear", repeat: Infinity, repeatType: "loop", repeatDelay: 0 });
  }, [xTranslation, width]);
  
  return (
    <Section display="flex">
        <SectionSubHeading>{tools.sectionHeading[language]}</SectionSubHeading>

      <Scroller>
        <ScrollInner ref={measureRef} style={{x: xTranslation}}>
          {[...toolsSvg, ...toolsSvg].map((tool, index) => (
            <li key={index}>{tool.component}</li>
          ))}
        </ScrollInner>
      </Scroller>
    </Section>
  );
}
