import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { ProjectName } from "../UI/Headings";
import ProjectDetails from "../UI/ProjectDetails";
import getProject from "../data/projectsDetails";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Testimonials from "../UI/Testimonials";
// import { FaTiktok } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

const ProjectHeader = styled.div`
  border: var(--check);
  background-color: var(--colour-grey-900);
  /* mask: linear-gradient(180deg, transparent, white 0%, white 80%, transparent); */
  /* position: sticky;
    top: 0; */
  width: 100%;
  height: 15rem;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.4rem;
  padding: 2rem 0;

  /* z-index: 10; */
`;

const IconsBox = styled(Link)`
  margin-right: 0.3rem;
  display: flex;
  align-items: center;
  display: block;

  svg {
    display: block;
    width: 2rem;
    height: 2rem;

    &:hover {
      fill: var(--neon-purple);
      transition: fill 0.15s ease-in;
    }
  }
`;

export default function OneProject({ projectName }) {
  const { id, name, year, webLink, githubRepo, details } =
    getProject(projectName);

  const scallingPrecentage = Number((100 / details.length / 100).toFixed(2));

  /*TRANSLATE:
    let's say the length is 4 => 100 / 4 = 25, then get the precentage by deviding once again by 100 => 0.25
    the toFixed to get only two difits after the dot, but it make the value type a string 
    so I had to convert it to a number.

    index = 0 * 0.25 => 0
    index = 1 * 0.25 => 0.25
    index = 2 * 0.25 => 0.5
    and so on.
  */

  const stackingRef = useRef(null);
  // the effect of stacking the cards must be GLOBALED, which means related to a parent, and depending on the scrollYProgress of the parent the cards' scaling value will be varient
  const { scrollYProgress } = useScroll({
    target: stackingRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <ProjectHeader>
        <AnimatedWrapper>
          <ProjectName>{name}</ProjectName>
        </AnimatedWrapper>

        <motion.div
          className="flex items-center mt-4"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { delay: 1, duration: 0.3, staggerChildren: 0.2 },
          }}
        >
          <IconsBox to={webLink} target="_blank">
            <FaLink />
          </IconsBox>
          <IconsBox to={githubRepo} target="_blank">
            <TbBrandGithubFilled />
          </IconsBox>
        </motion.div>
      </ProjectHeader>

      <motion.div ref={stackingRef} className="min-w-full min-h-full">
        {details.map((det, index) => {
          const howMuchToScale = 1 - (details.length - index) * 0.05;
          // 1 is the original scale value for any element, using this formula, the first card will get the lowest scale value
          return (
            <ProjectDetails
              key={index}
              bgColour={index + 1}
              details={det}
              topPosition={index}
              scalingProgress={scrollYProgress}
              scalingRange={[index * scallingPrecentage, 1]}
              finalStackingScale={howMuchToScale}
            />
          );
        })}
      </motion.div>

      <Testimonials projectName={name}/>
    </>
  );
}
