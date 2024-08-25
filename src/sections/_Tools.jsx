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
import Supsbase from "../UI/SVGs/supsbase";
import Mongoose from "../UI/SVGs/mongoose";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { useRef } from "react";

const ToolsComponent = [
  {tool: <React/>},
  {tool: <React/>},
  {tool: <React/>},
  {tool: <React/>},
  {tool: <React/>},
  {tool: <React/>},
  {tool: <React/>},
  {tool: <React/>},
  {tool: <React/>},
  {tool: <React/>},
  {tool: <React/>},
  {tool: <React/>},
  {tool: <React/>},
]

export default function Tools() {
  const headingTarget = useRef(null);

  const { scrollYProgress: yProgress1 } = useScroll({ target: headingTarget, offset: ["end end", "center 30%"] });// offset[the bignning position of the animation: "where-of-the-element whereof-the-viewport", the ending position of the animation: "where-of-the-element whereof-the-viewport"]
  // useTransform(what value the animated depends on?, input range, output range, options{ease: EasingFunction | EasingFunction[], mixer: (from: T, to: T) => (p: number) => any, clamp: boolean})
  // input range => the stages of the animation depending on the progress of the first paramater, [0 1] means from the beginning of the animation until its completion
  // output range => what the style value should be depending on the stage of animation that is defined in the input array.
  const scale = useTransform(yProgress1, [0.2, 0.6], [0.4, 1]);
  const opacity = useTransform(yProgress1, [0.2, 0.6], [0, 1]);

  const toolsTarget = useRef(null);
  const {scrollYProgress: yProgress2} = useScroll({target: toolsTarget, offset:["35% end", "end end"]});
  const y = useTransform(yProgress2, [0, 1], [0, 1]);

  return (
    <CentredSection className="bg-black">
        <div ref={headingTarget} className="bg-purple-600">
          <SectionSubHeading as={motion.h3} style={{scale, opacity}}>Technologies and Tools I use:</SectionSubHeading>
        </div>

      <ul ref={toolsTarget} className="w-[95%] flex flex-wrap items-center justify-around gap-12 bg-purple-800">
          <React/>
          <Router />
          <Next />
          <Express />
          <Node />
          <Mongoose />
          <Tailwind />
          <JavaScript />
          <Supsbase />
          <StyledComponents />
          <HTML />
          <CSS />
          <Git />
      </ul>
    </CentredSection>
  );
}
