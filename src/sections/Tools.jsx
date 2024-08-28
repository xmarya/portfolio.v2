import { SectionSubHeading } from "../UI/Headings";
import { CentredSection } from "../UI/Section";
import CSS from "../UI/SVGs/CSS";
import Express from "../UI/SVGs/Express";
import Git from "../UI/SVGs/Git";
import HTML from "../UI/SVGs/HTML";
import JavaScript from "../UI/SVGs/JavaScript";
import Next from "../UI/SVGs/Next";
import Node from "../UI/SVGs/Node";
import React from "../UI/SVGs/React";
import Router from "../UI/SVGs/Router";
import StyledComponents from "../UI/SVGs/StyledComponents";
import Tailwind from "../UI/SVGs/Tailwind";
import Supabase from "../UI/SVGs/supabase";
import Mongoose from "../UI/SVGs/mongoose";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";

const tools = [
  { component: "div" },
  { component: <React /> },
  { component: <Router /> },
  { component: <Next /> },
  { component: <Express /> },
  { component: <Node /> },
  { component: "div" },
  { component: "div" },
  { component: <Mongoose /> },
  { component: <Tailwind /> },
  { component: <JavaScript /> },
  { component: <Supabase /> },
  { component: <StyledComponents /> },
  { component: "div" },
  { component: "div" },
  { component: <HTML /> },
  { component: <CSS /> },
  { component: <Git /> },
  { component: "div" },
];

export default function Tools() {
  const targetRef = useRef();
  const isInView = useInView(targetRef, { once: true, amount: 0.4 });
  const controls = useAnimation();

  const staggeredVariants = {
    initial: { visibility: "hidden", y: 75 },
    animate: (index) => ({
      visibility: "visible",
      y: 0,
      transition: { delay: 0.08 * index },
    }),
  };

  useEffect(() => {
    isInView ? controls.start("animate") : "";
  }, [isInView, controls]);

  return (
    <motion.div>
      <CentredSection ref={targetRef}>

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
      </CentredSection>
    </motion.div>
  );
}
