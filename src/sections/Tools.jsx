import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { SectionSubHeading } from "../UI/Headings";
import { Section } from "../UI/Section";
import { tools } from "../data/tools";

const staggeredVariants = {
  initial: { visibility: "hidden", y: 75 },
  animate: (index) => ({
    visibility: "visible",
    y: 0,
    transition: { delay: 0.08 * index },
  }),
};


export default function Tools() {
  const targetRef = useRef();
  const isInView = useInView(targetRef, { once: true, amount: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    isInView ? controls.start("animate") : "";
  }, [isInView, controls]);

  return (
    <motion.div>
      {/* <CentredSection ref={targetRef}> */}
      <Section display="flex" ref={targetRef}>

        <AnimatedWrapper>
          <SectionSubHeading>Technologies and Tools I use:</SectionSubHeading>
        </AnimatedWrapper>

        <ul className="w-[80%] flex flex-wrap items-center justify-around gap-14 pl-5">
          {tools.map((tool, index) => {
            return tool.component === "div" ? (
              <li key={index}>
                <div />
              </li>
            ) : (
              <motion.li
                variants={staggeredVariants}
                initial="initial"
                animate={controls}
                custom={index + 1}
                key={index}
              >
                {tool.component}
              </motion.li>
            );
          })}
        </ul>
      </Section>
    </motion.div>
  );
}
