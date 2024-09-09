import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";

export default function About() {
  const inViewRef = useRef();
  const isInView = useInView(inViewRef, { margin: "-180px 0px", once: true });
  
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef});
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100vw"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [1, 0.3], ["0%", "100%"]);
  
  return (
    <Section ref={inViewRef} id="who-i-am">
      <motion.div
        initial={{ y: 300, visibility: "hidden" }}
        animate={isInView ? { y: 0, visibility: "visible" } : {}}
        transition={{ duration: 1.6, : "easeIn", type: "spring", bounce: 0.8, mass: 3 }}
      >
        <motion.div ref={scrollRef} style={{ x, y, opacity}} className="h-[200svh]">
          <SectionHeading>who I am?</SectionHeading>
          <p>
            I’m Marya. An IT graduate, I started my journy in full-stack
            development in 2020, then became a freelancer in 2023. I’m
            Experienced in building websites for small and medium-sized
            businesses.
          </p>
          <p>
            I’m full of passion for what I do and excited to dive deeper into
            the world of programming, face its challenges, and acquire MORE~
            skills. <br /> I would like to talk more but without further ado let
            me introduce what the developer-me can offer to you!
          </p>
          </motion.div>
        </motion.div>
    </Section>
  );
}