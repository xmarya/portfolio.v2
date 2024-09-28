import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaLink } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { ProjectName, SectionSubHeading } from "../UI/Headings";
import { Description, DetailsContainer, StickyBox, Video } from "../UI/ProjectDetails";
// import { FaTiktok } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";


const ProjectHeader = styled.div`
    border:  var(--check);
    background-color: var(--colour-grey-900);
    mask: linear-gradient(180deg, transparent, white 0%, white 80%, transparent);
    position: sticky;
    top: 0;
    width: 100%;
    height: 15rem;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.4rem;
    padding: 2rem 1rem;

    z-index: 10;
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
  const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({target: targetRef, offset: ["2% start", "end start"]});
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <>
      <ProjectHeader>
        <AnimatedWrapper>
          <ProjectName>
            {projectName}
          </ProjectName>
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
          <IconsBox
            to="https://www.yosorexp.com/?_t=homepage&_a=index"
            target="_blank"
          >
            <FaLink />
          </IconsBox>
          <IconsBox to="https://github.com/xmarya/YosorExp" target="_blank">
            <TbBrandGithubFilled />
          </IconsBox>
        </motion.div>
      </ProjectHeader>
      <DetailsContainer>  

          <StickyBox ref={targetRef}>
          <Description style={{opacity, scale}}>
            <SectionSubHeading>DESCRIPTION578</SectionSubHeading>
          </Description>

          <Video style={{opacity, scale}}>VIDEO</Video>
          </StickyBox>


          <Description>
            <SectionSubHeading>DESCRIPTION875421</SectionSubHeading>
          </Description>
          <Video>VIDEO</Video>

          <Description>
            <SectionSubHeading>DESCRIPTION875421</SectionSubHeading>
          </Description>
          <Video>VIDEO</Video>
          <Description>
            <SectionSubHeading>DESCRIPTION875421</SectionSubHeading>
          </Description>
          <Video>VIDEO</Video>

          <Description>
            <SectionSubHeading>DESCRIPTION875421</SectionSubHeading>
          </Description>
          <Video>VIDEO</Video>
          <Description>
            <SectionSubHeading>DESCRIPTION875421</SectionSubHeading>
          </Description>
          <Video>VIDEO</Video>

          <Description>
            <SectionSubHeading>DESCRIPTION875421</SectionSubHeading>
          </Description>
          <Video>VIDEO</Video>
          <Description>
            <SectionSubHeading>DESCRIPTION875421</SectionSubHeading>
          </Description>
          <Video>VIDEO</Video>

          <Description>
            <SectionSubHeading>DESCRIPTION875421</SectionSubHeading>
          </Description>
          <Video>VIDEO</Video>
          <Description>
            <SectionSubHeading>DESCRIPTION875421</SectionSubHeading>
          </Description>
          <Video>VIDEO</Video>

          <Description>
            <SectionSubHeading>DESCRIPTION875421</SectionSubHeading>
          </Description>
          <Video>VIDEO</Video>
          
      </DetailsContainer>
    </>
  );
}
