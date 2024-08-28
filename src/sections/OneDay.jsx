import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { SectionSubHeading } from "../UI/Headings";
import { CentredSection } from "../UI/Section";
import Timeline from "../UI/Timeline";
import { timelineActivities } from "../data/timelineData";

export default function OneDay() {
  return (
    <CentredSection className="">
      <AnimatedWrapper>
        <SectionSubHeading>A Day in my Life:</SectionSubHeading>
      </AnimatedWrapper>
      <Timeline>
        {timelineActivities.map((activity, index) => {
          console.log(index, timelineActivities.length);
          return index % 2 !== 0 ? (
            <Timeline.Item key={index}>
              <Timeline.Content direction="right" background="glass">
                <Timeline.Activity>{activity.activity}</Timeline.Activity>
                <Timeline.Note>{activity?.note}</Timeline.Note>
              </Timeline.Content>

              <Timeline.MiddleLine>
                <Timeline.Icon>
                {parseInt(activity.time.split(":")[0], 10) < 18 ? <SunIcon className="size-[2rem] stroke-[var(--neon-yellow)] fill-[var(--neon-yellow)]"/> : <MoonIcon className="size-[2rem] stroke-[var(--colour-grey-100)] fill-[var(--colour-grey-100)]"/>}
                </Timeline.Icon>
              </Timeline.MiddleLine>

              <Timeline.Content direction="left">
                <Timeline.Time>{activity.time}</Timeline.Time>
              </Timeline.Content>
            </Timeline.Item>
          ) : (
            <Timeline.Item key={index}>
              <Timeline.Content direction="right">
                <Timeline.Time>{activity.time}</Timeline.Time>
              </Timeline.Content>

              <Timeline.MiddleLine>
                <Timeline.Icon>
                   {parseInt(activity.time.split(":")[0], 10) < 18 ? <SunIcon className="size-[2rem] stroke-[var(--neon-yellow)] fill-[var(--neon-yellow)]"/> : <MoonIcon className="size-[2rem] stroke-[var(--colour-grey-100)] fill-[var(--colour-grey-100)]"/>}
                </Timeline.Icon>
              </Timeline.MiddleLine>

              <Timeline.Content direction="left" background="glass">
                <Timeline.Activity>{activity.activity}</Timeline.Activity>
                <Timeline.Note>{activity?.note}</Timeline.Note>
              </Timeline.Content>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </CentredSection>
  );
}
