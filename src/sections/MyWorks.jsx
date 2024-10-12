import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";
import WorksList from "../UI/WorksList";

export default function MyWorks({language}) {
    return (
        <Section id="works">
            <AnimatedWrapper>
                <SectionHeading language={language}>my works</SectionHeading>
            </AnimatedWrapper>
            
            <WorksList/>
        </Section>
    )
}

