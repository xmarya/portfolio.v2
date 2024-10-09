import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { SectionSubHeading } from "./Headings";
import { Tag } from "./Tag";
import { TagsGroup } from "./TagsGroup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Divider } from "./Divider";

const Works = styled(motion.div)`
  --col-min-width: 40rem;
  --row-min-height: 20rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(var(--col-min-width), 100%), 1fr)
  );
  /* grid-template-rows: repeat(auto-fill, minmax(min(var(--col-min-width), fit-content), 1fr)); */
  grid-auto-rows: minmax(var(--row-min-height), 1fr);

  justify-content: center;
  gap: 4rem;

  ${SectionSubHeading} {
    text-align: center;
    margin-bottom: 0;

    &:hover,
    &:active {
      color: var(--neon-light-purple);
      opacity: 0.7;
    }
  }

  ${Button} {
    align-self: flex-start;
    font-size: var(--md-text);
    padding: 1rem 2rem;
  }

  @media (max-width: 48em) {
    gap: 6rem;
    }
`;

/*
    motion.Link does not exist by default. motion in Framer Motion doesn't automatically 
    recognise react-router-dom's Link comp. so I have to use a custom comp
*/
const MotionLink = motion(Link);

const Project = styled(MotionLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: var(--md-radius);
  padding: 2rem 1rem;
  background-color: var(--colour-grey-800);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: var(--shadow-md) !important;
    transform: translateY(-1rem) !important;
  }
`;

const VideoWrapper = styled.div`
  padding: 0 2rem;
  overflow: hidden;

  video {
    border-radius: var(--md-radius);
    transition: transform 0.5s ease;
  }

  &:hover video {
    transform: scale(1.05);
  }
`;

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  padding: 0 1.5rem;

  p {
    font-size: var(--xl-text);
    text-align: center;
  }
`;

const EmptyProject = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: var(--md-radius);
  padding: 2rem 1rem;
  background-color: var(--colour-grey-800);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

`;

const SkeletonTitle = styled.div`
  width: 50%;
  height: 2.8rem; 
  background-color: var(--colour-grey-400);
  border-radius: var(--md-radius);
  background: linear-gradient(90deg, var(--colour-grey-300), var(--colour-grey-400));

`;

const SkeletonVideo = styled.div`
  width: 90%;
  max-width: 90%;
  height: 55%;
  max-height: 55%;
  border-radius: var(--md-radius);
  background: linear-gradient(130deg, var(--colour-grey-300), var(--colour-grey-400));

  position: relative;

&::after {
  content: "BE THE NEXT CLIENT!";
  position: absolute;
  top: 0;
  left:0;
  opacity: 1;
  width: 100%;
  height: 100%;
  font-family: var(--en-main-font);
  font-size: var(--section-heading);
  font-weight: 700;
  text-align: center;
  color: var(--colour-grey-0);
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(10deg);

  animation: fadein 3s infinite;

  @keyframes fadein {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 0.4; }
  }

  @media (max-width: 23em) {
    font-size: var(--secondary-heading) ;
    }

}
`;

const SkeletonDetails = styled.div`
  width: 85%;
  height: 2.5rem;
  background: linear-gradient(180deg, var(--colour-grey-300), var(--colour-grey-400));
  border-radius: var(--md-radius);
`;

const staggeredVariants = {
  initial: {},
  animate: {
    transition: {
      when: "beforeChildren",
      delayChildren: 1, // this will set a delay before the children start animating
      staggerChildren: 0.5, // this will set the time inbetween children animation
    },
  },
};

const projectVariants = {
  initial: { opacity: 0, y: 75 },
  animate: opacity => ({
    opacity,
    y: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

export default function WorksList() {

  const viewRef = useRef(null);
  const isInView = useInView(viewRef, {once: true, amount: 0.2});
  const controls = useAnimation();

  useEffect(() => {
    isInView ? controls.start("animate") : "";
  }, [isInView]);

  return (
    <Works ref={viewRef} variants={staggeredVariants} initial="initial" animate={controls}>
      <Project
        to="/project/yosor-exp"
        target="_blank"
        variants={projectVariants} custom={1}>
        <SectionSubHeading>YosorEXP (2023)</SectionSubHeading>
        <Divider type="horizontal"/>
        <VideoWrapper>
          <video loop muted autoPlay playsInline>
            <source src={`/vids/yosor-exp/vid1.mp4`} type="video/mp4" />
            Your browser does not support the video format.
          </video>
        </VideoWrapper>
        <Divider type="horizontal"/>

        <DetailsContainer>
          <TagsGroup>
            <Tag>Front-End</Tag>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
          </TagsGroup>
          
          <p>a multi-page web app for a startup e-commerce company.</p>
        </DetailsContainer>
      </Project>

      <EmptyProject variants={projectVariants} custom={0.6}>
        <SkeletonTitle />
        <Divider/>

        <SkeletonVideo />
        <Divider/>

        <TagsGroup>
          <Tag>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tag>
          <Tag>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tag>
          <Tag>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tag>
        </TagsGroup>
        <SkeletonDetails />
        {/* <h3>Be the next client!</h3> */}
      </EmptyProject>

      <EmptyProject variants={projectVariants} custom={0.6}>
        <SkeletonTitle />
        <Divider/>

        <SkeletonVideo />
        <Divider/>

        <TagsGroup>
          <Tag>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tag>
          <Tag>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tag>
          <Tag>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tag>
        </TagsGroup>
        <SkeletonDetails />
        {/* <h3>Be the next client!</h3> */}
      </EmptyProject>

      <EmptyProject variants={projectVariants} custom={0.6}>
        <SkeletonTitle />
        <Divider/>

        <SkeletonVideo />
        <Divider/>

        <TagsGroup>
          <Tag>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tag>
          <Tag>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tag>
          <Tag>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tag>
        </TagsGroup>
        <SkeletonDetails />
        {/* <h3>Be the next client!</h3> */}
      </EmptyProject>


    </Works>
  );
}
