import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { SectionSubHeading } from "./Headings";
import { Tag } from "./Tag";
import { TagsGroup } from "./TagsGroup";

const Works = styled(motion.div)`
  --col-min-width: 40rem;
  --row-min-height: 20rem;
  /* border:  var(--check); */
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

const Divider = styled.div`
  width: 80%;
  height: 1px;
  background-color: var(--colour-grey-500);
  opacity: 0.6;
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
  height: 60%;
  max-height: 60%;
  background: linear-gradient(130deg, var(--colour-grey-300), var(--colour-grey-400));
`;

const SkeletonDetails = styled.div`
  width: 85%;
  height: 2.5rem;
  background: linear-gradient(180deg, var(--colour-grey-300), var(--colour-grey-400));
  border-radius: var(--md-radius);
`;

const VideoWrapper = styled.div`
  padding: 0 2rem;
  overflow: hidden;

  video {
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
  gap: 1.5rem;

  padding: 0 1.5rem;

  p {
    font-size: var(--lg-text);
  }
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
  return (
    <Works variants={staggeredVariants} initial="initial" animate="animate">
      <Project
        to="/project/yosor-exp"
        target="_blank"
        variants={projectVariants} custom={1}>
        <SectionSubHeading>YosorEXP (2023)</SectionSubHeading>
        <Divider/>
        <VideoWrapper>
          <video loop muted autoPlay playsInline>
            <source src="/vids/vid1.mp4" type="video/mp4" />
            Your browser does not support the video format.
          </video>
        </VideoWrapper>
        <Divider/>

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

      <EmptyProject variants={projectVariants} custom={0.7}>
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
      <EmptyProject variants={projectVariants} custom={0.7}>
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
      <EmptyProject variants={projectVariants} custom={0.7}>
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
