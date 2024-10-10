import AnimatedWrapper from "../UI/Animation/AnimatedWrapper";
import { SectionHeading } from "../UI/Headings";
import { Section } from "../UI/Section";
import WorksList from "../UI/WorksList";

export default function MyWorks({isArabic}) {
    return (
        <Section id="works">
            <AnimatedWrapper>
                <SectionHeading isArabic={isArabic}>my works</SectionHeading>
            </AnimatedWrapper>
            
            <WorksList/>
        </Section>
    )
}

