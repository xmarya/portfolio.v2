import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";
import WorksList from "../UI/WorksList";

export default function MyWorks() {
    return (
        <Section id="works">
            <AnimatedWrapper>
                <SectionHeading>my works</SectionHeading>
            </AnimatedWrapper>
            
            <WorksList/>
        </Section>
    )
}

