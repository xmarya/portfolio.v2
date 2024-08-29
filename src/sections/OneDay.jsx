import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { SectionSubHeading } from "../UI/Headings";
import { CentredSection } from "../UI/Section";
import Timeline from "../UI/Timeline";
import { timelineActivities } from "../data/timelineData";


export default function OneDay() {

  const middlelineVariants = {
    initial: {
      height: 0
    },
    animate: {
      height: "100%",
      transition: {
        delay: 0.4,
        duration: 0.5
      }
    }
  };
  const iconVariants = {
    initial: {
      opacity:0,
      x: "-50%", // this is for fixing the issue that scaling overrides the original translateX in the css
      scale: 0
    },
    animate: {
      opacity:1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };
  const timeVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction === "rtl" ? -50 : 50
    }),
    animate: {
      opacity:1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.5
      }
    }
  };
  const activityVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction === "rtl" ? -50 : 50
    }),
    animate: {
      opacity:1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 1
      }
    }
  };


  return (
    <CentredSection>
      <AnimatedWrapper>
        <SectionSubHeading>A Day in my Life:</SectionSubHeading>
      </AnimatedWrapper>
      <Timeline>
        {timelineActivities.map((activity, index) => {
          const targetRef = useRef(null);
          const isInView = useInView(targetRef, {once: true, amount: 0.2});
          return (
            <Timeline.Item key={index} ref={targetRef}>
              {index % 2 !== 0 ? (
                <>
                  <Timeline.Content direction="right" background="glass" variants={activityVariants} initial="initial" animate={isInView? "animate" : "initial"} custom="rtl" >
                    <Timeline.Activity>{activity.activity}</Timeline.Activity>
                    <Timeline.Note>{activity?.note}</Timeline.Note>
                  </Timeline.Content>

                  <Timeline.MiddleLine variants={middlelineVariants} initial="initial" animate={isInView? "animate" : "initial"}>
                    <Timeline.Icon variants={iconVariants} initial="initial" animate={isInView? "animate" : "initial"}>
                      {parseInt(activity.time.split(":")[0], 10) < 18 ? (
                        <SunIcon className="size-[2rem] stroke-[var(--neon-yellow)] fill-[var(--neon-yellow)]" />
                      ) : (
                        <MoonIcon className="size-[2rem] stroke-[var(--colour-grey-100)] fill-[var(--colour-grey-100)]" />
                      )}
                    </Timeline.Icon>
                  </Timeline.MiddleLine>

                  <Timeline.Content direction="left" custom="ltr" variants={timeVariants} initial="initial" animate={isInView? "animate" : "initial"}>
                    <Timeline.Time>{activity.time}</Timeline.Time>
                  </Timeline.Content>
                </>
              ) : (
                <>
                  <Timeline.Content direction="right" custom="ltr" variants={timeVariants} initial="initial" animate={isInView? "animate" : "initial"}>
                    <Timeline.Time>{activity.time}</Timeline.Time>
                  </Timeline.Content>

                  <Timeline.MiddleLine variants={middlelineVariants} initial="initial" animate={isInView? "animate" : "initial"}>
                    <Timeline.Icon variants={iconVariants} initial="initial" animate={isInView? "animate" : "initial"}>
                      {parseInt(activity.time.split(":")[0], 10) < 18 ? (
                        <SunIcon className="size-[2rem] stroke-[var(--neon-yellow)] fill-[var(--neon-yellow)]" />
                      ) : (
                        <MoonIcon className="size-[2rem] stroke-[var(--colour-grey-100)] fill-[var(--colour-grey-100)]" />
                      )}
                    </Timeline.Icon>
                  </Timeline.MiddleLine>

                  <Timeline.Content direction="left" background="glass" variants={activityVariants} initial="initial" animate={isInView? "animate" : "initial"} custom="rtl" >
                    <Timeline.Activity>{activity.activity}</Timeline.Activity>
                    <Timeline.Note>{activity?.note}</Timeline.Note>
                  </Timeline.Content>
                </>
              )}
            </Timeline.Item>
          );
        })}
      </Timeline>
    </CentredSection>
  );
}
